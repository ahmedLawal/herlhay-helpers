import { Injectable } from '@angular/core';
import { HttpEventType, HttpHeaders, HttpRequest, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { HHenvironment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "./encryptor.service";
import * as i2 from "@angular/common/http";
import * as i3 from "./cache.service";
import * as i4 from "./local-cache.service";
export class ApiService {
    get baseURL() {
        return HHenvironment.apiBaseUrl;
    }
    get headers() {
        return {
            'Content-Type': 'application/json',
        };
    }
    get fileHeaders() {
        return {
            enctype: 'multipart/form-data',
        };
    }
    constructor(eS, http, cacheS, lCacheS) {
        this.eS = eS;
        this.http = http;
        this.cacheS = cacheS;
        this.lCacheS = lCacheS;
        this.showRoutes = 0;
        this.retryCount = 0;
        /**
         * Encrypts an item
         * @param data Item
         * @returns Encrypted Object
         */
        this.encrypt = (obj) => {
            if (!HHenvironment.encryptAPIRequests)
                return obj;
            const ret = {
                data: this.eS.encryptItem(obj),
            };
            console.log(ret);
            return ret;
        };
        /**
         * Decrypts an encrypted item
         * @param data Encrypted string
         * @returns Decrypted Object
         */
        this.decrypt = (obj) => {
            if (!HHenvironment.encryptAPIRequests)
                return obj;
            if (typeof obj?.data == 'string')
                if (obj.status == 'success')
                    return this.eS.decryptItem(obj?.data);
                else
                    throw this.eS.decryptItem(obj?.data);
            else
                return obj;
        };
        this.handleRequestError = (err) => {
            // debugger;
            const error = err.error.data
                ? this.eS.decryptItem(err.error.data)
                : { message: err.statusText };
            return throwError(() => error?.message);
        };
        //#endregion
        //#region GET
        this.get = (route, parameters, extras) => {
            this.logRoutes('get', route, parameters);
            return new Observable((res) => {
                const query = route + this.getRequestParse(parameters);
                // if (this.cacheS.has(query)) {
                //   res.next(this.cacheS.getItem<T>(route));
                // }
                this.http
                    .get(this.baseURL + query, {
                    headers: new HttpHeaders(this.headers),
                    responseType: 'json',
                    ...extras?.options,
                })
                    .pipe(retry(this.retryCount), map((r) => (extras?.dontDecryptResponse ? r : this.decrypt(r))), tap((x) => (this.showRoutes ? console.log(x) : null)), catchError(this.handleRequestError))
                    .toPromise()
                    .then((r) => {
                    res.next(r);
                    this.cacheS.setItem(query, r);
                    res.complete();
                })
                    .catch((err) => res.error(err));
            });
        };
        this.getText = (route, parameters) => this.get(route, parameters, {
            options: {
                headers: new HttpHeaders(this.headers),
                responseType: 'text',
            },
        });
        this.getFile = (route, parameters) => this.get(route, parameters, {
            options: {
                headers: new HttpHeaders(this.headers),
                responseType: 'arrayBuffer',
            },
        });
        this.getWithBody = (route, body, extras) => {
            this.logRoutes('get', route);
            // debugger
            const req = new HttpRequest('GET', this.baseURL + route, HHenvironment.encryptAPIRequests ? this.encrypt(body) : body, extras?.options || {
                headers: new HttpHeaders(this.headers),
                responseType: 'json',
            });
            return this.http.request(req).pipe(map((r) => (HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
        };
        this.getFromlocal = (route, parameters, options) => {
            return new Observable((res) => {
                const query = route + this.getRequestParse(parameters);
                if (this.lCacheS.has(query)) {
                    res.next(this.lCacheS.getItem(query));
                    res.complete();
                }
                else
                    this.get(query, null, options)
                        .toPromise()
                        .then((r) => {
                        // if (!this.cS.has(route))
                        res.next(r);
                        this.lCacheS.setItem(query, r);
                        res.complete();
                    });
            });
        };
        this.getWithLocalCache = (route, parameters, options) => {
            return new Observable((res) => {
                const query = route + this.getRequestParse(parameters);
                if (this.lCacheS.has(query)) {
                    res.next(this.lCacheS.getItem(query));
                }
                this.get(query, null, options)
                    .toPromise()
                    .then((r) => {
                    // if (!this.cS.has(route))
                    res.next(r);
                    this.lCacheS.setItem(query, r);
                    res.complete();
                })
                    .catch((e) => {
                    res.error(e);
                    res.complete();
                });
            });
        };
        this.getAll = (route, query, dataFieldName, extras) => {
            return new Observable((sub) => {
                let data = [];
                // debugger;
                const fetchdata = (page) => this.get(route, { ...query, page }).subscribe((r) => {
                    // debugger;
                    data = data.concat(r[dataFieldName]?.data);
                    sub.next(data);
                    // const d1 = data?.length;
                    // const d2 = !!data?.length;
                    // const d3 = r[dataFieldName];
                    // const d4 = r[dataFieldName]?.total;
                    // const d5 = data?.length <= r[dataFieldName]?.total;
                    // const d6 = !!data?.length && data?.length <= r[dataFieldName]?.total;
                    // debugger;
                    if (!!r[dataFieldName]?.data?.length && data?.length < r[dataFieldName]?.total)
                        fetchdata(++page);
                    else
                        sub.complete();
                });
                fetchdata(1);
            });
        };
        //#endregion
        //#region DELETE
        this.delete = (route, options) => {
            this.logRoutes('delete', route);
            return this.http
                .delete(this.baseURL + route, options || {
                headers: new HttpHeaders(this.headers),
                responseType: 'json',
            })
                .pipe(map((r) => this.decrypt(r)), catchError(this.handleRequestError));
        };
        this.deleteWithBody = (route, body, options) => {
            this.logRoutes('delete', route);
            const req = new HttpRequest('DELETE', this.baseURL + route, HHenvironment.encryptAPIRequests ? this.encrypt(body) : body, options || {
                headers: new HttpHeaders(this.headers),
                responseType: 'json',
            });
            return this.http.request(req).pipe(map((r) => this.decrypt(r)), catchError(this.handleRequestError));
        };
        this.deleteText = (route) => this.delete(route, {
            headers: new HttpHeaders(this.headers),
            responseType: 'text',
        });
    }
    logRoutes(method, route, ...extras) {
        if (this.showRoutes) {
            console.log(method, route, ...extras);
        }
    }
    //#region PATCH
    patch(route, body, extras) {
        this.logRoutes('post', route, body);
        console.log(body);
        return this.http
            .patch(encodeURI(this.baseURL + route), !HHenvironment.encryptAPIRequests || extras?.dontEncrypt ? body : this.encrypt(body), {
            headers: new HttpHeaders(this.headers),
            responseType: 'json',
            ...extras?.options,
        })
            .pipe(map((r) => (HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
    }
    patchFile(route, body) {
        return this.patch(route, body, {
            options: {
                headers: new HttpHeaders(this.fileHeaders),
                responseType: 'json',
            },
            dontEncrypt: true,
        });
    }
    //#endregion
    //#region POST
    post(route, body, extras) {
        this.logRoutes('post', route, body);
        console.log(body);
        return this.http
            .post(encodeURI(this.baseURL + route), !HHenvironment.encryptAPIRequests || extras?.dontEncrypt ? body : this.encrypt(body), {
            headers: new HttpHeaders(this.headers),
            responseType: 'json',
            ...extras?.options,
        })
            .pipe(map((r) => (HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
    }
    postWithProgress(route, body) {
        return new Observable((sub) => {
            const fd = new FormData();
            this.logRoutes('post', route, body);
            Object.keys(body).forEach((key) => fd.append(key, body[key]));
            this.http
                .post(encodeURI(this.baseURL + route), fd, {
                headers: new HttpHeaders(this.fileHeaders),
                reportProgress: true,
                observe: 'events',
            })
                .subscribe({
                next: (event) => {
                    // debugger
                    if (event.type === HttpEventType.UploadProgress)
                        sub.next({
                            progress: (100 * event.loaded) / event.total,
                            uploaded: event.loaded == event.total,
                        });
                    else if (event.type === HttpEventType.Response) {
                        // debugger
                        sub.next({
                            body: this.decrypt(event.body),
                            uploaded: true,
                        });
                    }
                },
                error: (error) => {
                    sub.error(error?.error?.message || error?.statusText);
                    sub.complete();
                },
            });
        });
    }
    postFile(route, body) {
        return this.post(route, body, {
            options: {
                headers: new HttpHeaders(this.fileHeaders),
                responseType: 'json',
            },
            dontEncrypt: true,
        });
    }
    postString(route, body) {
        return this.post(route, body, {
            options: {
                headers: new HttpHeaders({
                    'Content-Type': 'text/plain',
                }),
                responseType: 'text',
            },
        });
    }
    getRequestParse(parameters) {
        if (!parameters)
            return '';
        return ('?' +
            Object.keys(parameters)
                .filter((key) => parameters[key]?.toString()?.trim() != null)
                .map((key) => `${key}=${parameters[key]?.toString()?.trim()}`)
                .join('&'));
    }
    //#endregion
    //#region PUT
    put(route, body, extras) {
        this.logRoutes('put', route, body);
        let query = route + '', nbody = body;
        if (extras?.requestType == 'queryParams') {
            query += this.getRequestParse(body);
            nbody = null;
        }
        console.log(body);
        return this.http
            .put(this.baseURL + query, extras?.dontEncrypt ? body : this.encrypt(nbody), {
            headers: new HttpHeaders(this.headers),
            responseType: 'json',
            ...extras?.options,
        })
            .pipe(map((r) => this.decrypt(r)), catchError(this.handleRequestError));
    }
    putFile(route, body) {
        return this.put(route, body, {
            options: {
                headers: new HttpHeaders(this.fileHeaders),
                responseType: 'json',
            },
            dontEncrypt: true,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ApiService, deps: [{ token: i1.EncryptorService }, { token: i2.HttpClient }, { token: i3.CacheService }, { token: i4.LocalCacheService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ApiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.EncryptorService }, { type: i2.HttpClient }, { type: i3.CacheService }, { type: i4.LocalCacheService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFHTCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFdBQVcsR0FDWixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUsvRCxNQUFNLE9BQU8sVUFBVTtJQUNyQixJQUFjLE9BQU87UUFDbkIsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFZLE9BQU87UUFDakIsT0FBTztZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFDRCxJQUFZLFdBQVc7UUFDckIsT0FBTztZQUNMLE9BQU8sRUFBRSxxQkFBcUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFHRCxZQUNTLEVBQW9CLEVBQ3BCLElBQWdCLEVBQ2hCLE1BQW9CLEVBQ3BCLE9BQTBCO1FBSDFCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQWpCM0IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQVdmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFTdkI7Ozs7V0FJRztRQUNILFlBQU8sR0FBRyxDQUFDLEdB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LENBQUMsT0FBTyxDQUFDO1lBQ3RDLFlBQVksRUFBRSxNQUFNO1lBQ3BCLEdBQUcsTUFBTSxFQUFFLE9BQU87U0FDbkIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUNqQixDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPLENBQVUsS0FBYSxFQUFFLElBQWM7UUFDNUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFJLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDOUIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMxQyxZQUFZLEVBQUUsTUFBTTthQUNyQjtZQUNELFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBeFZVLFVBQVU7a0hBQVYsVUFBVSxjQUZULE1BQU07OzJGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5jcnlwdG9yU2VydmljZSB9IGZyb20gJy4vZW5jcnlwdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudFR5cGUsXG4gIEh0dHBIZWFkZXJzLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCByZXRyeSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbC1jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhIZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHByb3RlY3RlZCBnZXQgYmFzZVVSTCgpIHtcbiAgICByZXR1cm4gSEhlbnZpcm9ubWVudC5hcGlCYXNlVXJsO1xuICB9XG4gIHByaXZhdGUgc2hvd1JvdXRlcyA9IDA7XG4gIHByaXZhdGUgZ2V0IGhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfTtcbiAgfVxuICBwcml2YXRlIGdldCBmaWxlSGVhZGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW5jdHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgIH07XG4gIH1cbiAgcHJpdmF0ZSByZXRyeUNvdW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZVM6IEVuY3J5cHRvclNlcnZpY2UsXG4gICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHVibGljIGNhY2hlUzogQ2FjaGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBsQ2FjaGVTOiBMb2NhbENhY2hlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEVuY3J5cHRzIGFuIGl0ZW1cbiAgICogQHBhcmFtIGRhdGEgSXRlbVxuICAgKiBAcmV0dXJucyBFbmNyeXB0ZWQgT2JqZWN0XG4gICAqL1xuICBlbmNyeXB0ID0gKG9iajogYW55KSA9PiB7XG4gICAgaWYgKCFISGVudmlyb25tZW50LmVuY3J5cHRBUElSZXF1ZXN0cykgcmV0dXJuIG9iajtcbiAgICBjb25zdCByZXQgPSB7XG4gICAgICBkYXRhOiB0aGlzLmVTLmVuY3J5cHRJdGVtKG9iaiksXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlY3J5cHRzIGFuIGVuY3J5cHRlZCBpdGVtXG4gICAqIEBwYXJhbSBkYXRhIEVuY3J5cHRlZCBzdHJpbmdcbiAgICogQHJldHVybnMgRGVjcnlwdGVkIE9iamVjdFxuICAgKi9cbiAgZGVjcnlwdCA9IChvYmo6IHsgZGF0YTogc3RyaW5nOyBzdGF0dXM6ICdzdWNjZXNzJyB8ICdlcnJvcicgfSkgPT4ge1xuICAgIGlmICghSEhlbnZpcm9ubWVudC5lbmNyeXB0QVBJUmVxdWVzdHMpIHJldHVybiBvYmo7XG4gICAgaWYgKHR5cGVvZiBvYmo/LmRhdGEgPT0gJ3N0cmluZycpXG4gICAgICBpZiAob2JqLnN0YXR1cyA9PSAnc3VjY2VzcycpIHJldHVybiB0aGlzLmVTLmRlY3J5cHRJdGVtKG9iaj8uZGF0YSk7XG4gICAgICBlbHNlIHRocm93IHRoaXMuZVMuZGVjcnlwdEl0ZW0ob2JqPy5kYXRhKTtcbiAgICBlbHNlIHJldHVybiBvYmo7XG4gIH07XG5cbiAgcHJpdmF0ZSBsb2dSb3V0ZXMobWV0aG9kOiAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnIHwgJ2RlbGV0ZScsIHJvdXRlLCAuLi5leHRyYXMpIHtcbiAgICBpZiAodGhpcy5zaG93Um91dGVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhtZXRob2QsIHJvdXRlLCAuLi5leHRyYXMpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGhhbmRsZVJlcXVlc3RFcnJvciA9IChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgY29uc3QgZXJyb3IgPSBlcnIuZXJyb3IuZGF0YVxuICAgICAgPyB0aGlzLmVTLmRlY3J5cHRJdGVtKGVyci5lcnJvci5kYXRhKVxuICAgICAgOiB7IG1lc3NhZ2U6IGVyci5zdGF0dXNUZXh0IH07XG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyb3I/Lm1lc3NhZ2UpO1xuICB9O1xuXG4gIC8vI3JlZ2lvbiBQQVRDSFxuICBwYXRjaDxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5PywgZXh0cmFzPzogSUV4dHJhcyk6IE9ic2VydmFibGU8UmVzcDxUPj4ge1xuICAgIHRoaXMubG9nUm91dGVzKCdwb3N0Jywgcm91dGUsIGJvZHkpO1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChcbiAgICAgICAgZW5jb2RlVVJJKHRoaXMuYmFzZVVSTCArIHJvdXRlKSxcbiAgICAgICAgIUhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzIHx8IGV4dHJhcz8uZG9udEVuY3J5cHQgPyBib2R5IDogdGhpcy5lbmNyeXB0KGJvZHkpLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgICAgLi4uZXh0cmFzPy5vcHRpb25zLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyOiBhbnkpID0+IChISGVudmlyb25tZW50LmVuY3J5cHRBUElSZXF1ZXN0cyA/IHRoaXMuZGVjcnlwdChyKSA6IHIpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZVJlcXVlc3RFcnJvcilcbiAgICAgICkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICB9XG4gIHBhdGNoRmlsZTxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5OiBGb3JtRGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBhdGNoPFQ+KHJvdXRlLCBib2R5LCB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmZpbGVIZWFkZXJzKSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICB9LFxuICAgICAgZG9udEVuY3J5cHQ6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFBPU1RcbiAgcG9zdDxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5PywgZXh0cmFzPzogSUV4dHJhcyk6IE9ic2VydmFibGU8UmVzcDxUPj4ge1xuICAgIHRoaXMubG9nUm91dGVzKCdwb3N0Jywgcm91dGUsIGJvZHkpO1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KFxuICAgICAgICBlbmNvZGVVUkkodGhpcy5iYXNlVVJMICsgcm91dGUpLFxuICAgICAgICAhSEhlbnZpcm9ubWVudC5lbmNyeXB0QVBJUmVxdWVzdHMgfHwgZXh0cmFzPy5kb250RW5jcnlwdCA/IGJvZHkgOiB0aGlzLmVuY3J5cHQoYm9keSksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAuLi5leHRyYXM/Lm9wdGlvbnMsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHI6IGFueSkgPT4gKEhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzID8gdGhpcy5kZWNyeXB0KHIpIDogcikpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlUmVxdWVzdEVycm9yKVxuICAgICAgKSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cbiAgcG9zdFdpdGhQcm9ncmVzczxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5PzogeyBbeDogc3RyaW5nXTogRmlsZSB8IGFueSB9KSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHsgYm9keT86IFQ7IHByb2dyZXNzPzogbnVtYmVyOyB1cGxvYWRlZD86IGJvb2xlYW4gfT4oKHN1YikgPT4ge1xuICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIHRoaXMubG9nUm91dGVzKCdwb3N0Jywgcm91dGUsIGJvZHkpO1xuXG4gICAgICBPYmplY3Qua2V5cyhib2R5KS5mb3JFYWNoKChrZXkpID0+IGZkLmFwcGVuZChrZXksIGJvZHlba2V5XSkpO1xuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5wb3N0KGVuY29kZVVSSSh0aGlzLmJhc2VVUkwgKyByb3V0ZSksIGZkLCB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuZmlsZUhlYWRlcnMpLFxuICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIG9ic2VydmU6ICdldmVudHMnLFxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcylcbiAgICAgICAgICAgICAgc3ViLm5leHQoe1xuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoMTAwICogZXZlbnQubG9hZGVkKSAvIGV2ZW50LnRvdGFsLFxuICAgICAgICAgICAgICAgIHVwbG9hZGVkOiBldmVudC5sb2FkZWQgPT0gZXZlbnQudG90YWwsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5SZXNwb25zZSkge1xuICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICBzdWIubmV4dCh7XG4gICAgICAgICAgICAgICAgYm9keTogdGhpcy5kZWNyeXB0KGV2ZW50LmJvZHkgYXMgYW55KSxcbiAgICAgICAgICAgICAgICB1cGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgc3ViLmVycm9yKGVycm9yPy5lcnJvcj8ubWVzc2FnZSB8fCBlcnJvcj8uc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICBzdWIuY29tcGxldGUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHBvc3RGaWxlPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIGJvZHk6IEZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdDxUPihyb3V0ZSwgYm9keSwge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5maWxlSGVhZGVycyksXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgfSxcbiAgICAgIGRvbnRFbmNyeXB0OiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIHBvc3RTdHJpbmcocm91dGU6IHN0cmluZywgYm9keT8pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0PHN0cmluZz4ocm91dGUsIGJvZHksIHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nLFxuICAgICAgICB9KSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBHRVRcbiAgZ2V0ID0gPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIHBhcmFtZXRlcnM/OiBPYmplY3QsIGV4dHJhcz86IElFeHRyYXMpOiBPYnNlcnZhYmxlPFJlc3A8VD4+ID0+IHtcbiAgICB0aGlzLmxvZ1JvdXRlcygnZ2V0Jywgcm91dGUsIHBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxSZXNwPFQ+PigocmVzKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IHJvdXRlICsgdGhpcy5nZXRSZXF1ZXN0UGFyc2UocGFyYW1ldGVycyk7XG4gICAgICAvLyBpZiAodGhpcy5jYWNoZVMuaGFzKHF1ZXJ5KSkge1xuICAgICAgLy8gICByZXMubmV4dCh0aGlzLmNhY2hlUy5nZXRJdGVtPFQ+KHJvdXRlKSk7XG4gICAgICAvLyB9XG4gICAgICB0aGlzLmh0dHBcbiAgICAgICAgLmdldCh0aGlzLmJhc2VVUkwgKyBxdWVyeSwge1xuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgICAgIC4uLmV4dHJhcz8ub3B0aW9ucyxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgcmV0cnkodGhpcy5yZXRyeUNvdW50KSxcbiAgICAgICAgICBtYXAoKHI6IGFueSkgPT4gKGV4dHJhcz8uZG9udERlY3J5cHRSZXNwb25zZSA/IHIgOiB0aGlzLmRlY3J5cHQocikpKSxcbiAgICAgICAgICB0YXAoKHgpID0+ICh0aGlzLnNob3dSb3V0ZXMgPyBjb25zb2xlLmxvZyh4KSA6IG51bGwpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlUmVxdWVzdEVycm9yKVxuICAgICAgICApXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgIHJlcy5uZXh0KHIpO1xuICAgICAgICAgIHRoaXMuY2FjaGVTLnNldEl0ZW0ocXVlcnksIHIpO1xuICAgICAgICAgIHJlcy5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVzLmVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFRleHQgPSA8VCA9IHN0cmluZz4ocm91dGU6IHN0cmluZywgcGFyYW1ldGVycz86IE9iamVjdCkgPT5cbiAgICB0aGlzLmdldDxUPihyb3V0ZSwgcGFyYW1ldGVycywge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgICB9LFxuICAgIH0pO1xuICBnZXRGaWxlID0gPFQgPSBzdHJpbmc+KHJvdXRlOiBzdHJpbmcsIHBhcmFtZXRlcnM/OiBPYmplY3QpID0+XG4gICAgdGhpcy5nZXQ8VD4ocm91dGUsIHBhcmFtZXRlcnMsIHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5QnVmZmVyJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIGdldFdpdGhCb2R5ID0gPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIGJvZHk/OiBhbnksIGV4dHJhcz86IElFeHRyYXMpID0+IHtcbiAgICB0aGlzLmxvZ1JvdXRlcygnZ2V0Jywgcm91dGUpO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KFxuICAgICAgJ0dFVCcsXG4gICAgICB0aGlzLmJhc2VVUkwgKyByb3V0ZSxcbiAgICAgIEhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzID8gdGhpcy5lbmNyeXB0KGJvZHkpIDogYm9keSxcbiAgICAgIGV4dHJhcz8ub3B0aW9ucyB8fCB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxUPihyZXEpLnBpcGUoXG4gICAgICBtYXAoKHI6IGFueSkgPT4gKEhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzID8gdGhpcy5kZWNyeXB0KHIpIDogcikpLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZVJlcXVlc3RFcnJvcilcbiAgICApIGFzIE9ic2VydmFibGU8UmVzcDxUPj47XG4gIH07XG5cbiAgZ2V0RnJvbWxvY2FsID0gPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIHBhcmFtZXRlcnM/OiBPYmplY3QsIG9wdGlvbnM/OiBhbnkpID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8UmVzcDxUPj4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSByb3V0ZSArIHRoaXMuZ2V0UmVxdWVzdFBhcnNlKHBhcmFtZXRlcnMpO1xuICAgICAgaWYgKHRoaXMubENhY2hlUy5oYXMocXVlcnkpKSB7XG4gICAgICAgIHJlcy5uZXh0KHRoaXMubENhY2hlUy5nZXRJdGVtKHF1ZXJ5KSk7XG4gICAgICAgIHJlcy5jb21wbGV0ZSgpO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHRoaXMuZ2V0KHF1ZXJ5LCBudWxsLCBvcHRpb25zKVxuICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiAoIXRoaXMuY1MuaGFzKHJvdXRlKSlcbiAgICAgICAgICAgIHJlcy5uZXh0KHIpO1xuICAgICAgICAgICAgdGhpcy5sQ2FjaGVTLnNldEl0ZW0ocXVlcnksIHIpO1xuICAgICAgICAgICAgcmVzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGdldFdpdGhMb2NhbENhY2hlID0gPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIHBhcmFtZXRlcnM/OiBPYmplY3QsIG9wdGlvbnM/OiBhbnkpID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8UmVzcDxUPj4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSByb3V0ZSArIHRoaXMuZ2V0UmVxdWVzdFBhcnNlKHBhcmFtZXRlcnMpO1xuICAgICAgaWYgKHRoaXMubENhY2hlUy5oYXMocXVlcnkpKSB7XG4gICAgICAgIHJlcy5uZXh0KHRoaXMubENhY2hlUy5nZXRJdGVtKHF1ZXJ5KSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdldChxdWVyeSwgbnVsbCwgb3B0aW9ucylcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgLy8gaWYgKCF0aGlzLmNTLmhhcyhyb3V0ZSkpXG4gICAgICAgICAgcmVzLm5leHQocik7XG4gICAgICAgICAgdGhpcy5sQ2FjaGVTLnNldEl0ZW0ocXVlcnksIHIpO1xuICAgICAgICAgIHJlcy5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICByZXMuZXJyb3IoZSk7XG4gICAgICAgICAgcmVzLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBnZXRSZXF1ZXN0UGFyc2UocGFyYW1ldGVycz86IE9iamVjdCkge1xuICAgIGlmICghcGFyYW1ldGVycykgcmV0dXJuICcnO1xuICAgIHJldHVybiAoXG4gICAgICAnPycgK1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBwYXJhbWV0ZXJzW2tleV0/LnRvU3RyaW5nKCk/LnRyaW0oKSAhPSBudWxsKVxuICAgICAgICAubWFwKChrZXkpID0+IGAke2tleX09JHtwYXJhbWV0ZXJzW2tleV0/LnRvU3RyaW5nKCk/LnRyaW0oKX1gKVxuICAgICAgICAuam9pbignJicpXG4gICAgKTtcbiAgfVxuICBnZXRBbGwgPSA8VCA9IGFueT4oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBxdWVyeTogeyBsaW1pdDogbnVtYmVyOyBbeDogc3RyaW5nXTogYW55IH0sXG4gICAgZGF0YUZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGV4dHJhcz86IElFeHRyYXNcbiAgKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFRbXT4oKHN1YikgPT4ge1xuICAgICAgbGV0IGRhdGE6IFRbXSA9IFtdO1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICBjb25zdCBmZXRjaGRhdGEgPSAocGFnZTogbnVtYmVyKSA9PlxuICAgICAgICB0aGlzLmdldDx7XG4gICAgICAgICAgW3g6IHN0cmluZ106IHtcbiAgICAgICAgICAgIGRhdGE6IFRbXTtcbiAgICAgICAgICAgIHRvdGFsOiBudW1iZXI7XG4gICAgICAgICAgfTtcbiAgICAgICAgfT4ocm91dGUsIHsgLi4ucXVlcnksIHBhZ2UgfSkuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KHJbZGF0YUZpZWxkTmFtZV0/LmRhdGEpO1xuICAgICAgICAgIHN1Yi5uZXh0KGRhdGEpO1xuICAgICAgICAgIC8vIGNvbnN0IGQxID0gZGF0YT8ubGVuZ3RoO1xuICAgICAgICAgIC8vIGNvbnN0IGQyID0gISFkYXRhPy5sZW5ndGg7XG4gICAgICAgICAgLy8gY29uc3QgZDMgPSByW2RhdGFGaWVsZE5hbWVdO1xuICAgICAgICAgIC8vIGNvbnN0IGQ0ID0gcltkYXRhRmllbGROYW1lXT8udG90YWw7XG4gICAgICAgICAgLy8gY29uc3QgZDUgPSBkYXRhPy5sZW5ndGggPD0gcltkYXRhRmllbGROYW1lXT8udG90YWw7XG4gICAgICAgICAgLy8gY29uc3QgZDYgPSAhIWRhdGE/Lmxlbmd0aCAmJiBkYXRhPy5sZW5ndGggPD0gcltkYXRhRmllbGROYW1lXT8udG90YWw7XG4gICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgaWYgKCEhcltkYXRhRmllbGROYW1lXT8uZGF0YT8ubGVuZ3RoICYmIGRhdGE/Lmxlbmd0aCA8IHJbZGF0YUZpZWxkTmFtZV0/LnRvdGFsKVxuICAgICAgICAgICAgZmV0Y2hkYXRhKCsrcGFnZSk7XG4gICAgICAgICAgZWxzZSBzdWIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICBmZXRjaGRhdGEoMSk7XG4gICAgfSk7XG4gIH07XG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBQVVRcbiAgcHV0PFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIGJvZHk/LCBleHRyYXM/OiBJRXh0cmFzKTogT2JzZXJ2YWJsZTxSZXNwPFQ+PiB7XG4gICAgdGhpcy5sb2dSb3V0ZXMoJ3B1dCcsIHJvdXRlLCBib2R5KTtcbiAgICBsZXQgcXVlcnkgPSByb3V0ZSArICcnLFxuICAgICAgbmJvZHkgPSBib2R5O1xuICAgIGlmIChleHRyYXM/LnJlcXVlc3RUeXBlID09ICdxdWVyeVBhcmFtcycpIHtcbiAgICAgIHF1ZXJ5ICs9IHRoaXMuZ2V0UmVxdWVzdFBhcnNlKGJvZHkpO1xuICAgICAgbmJvZHkgPSBudWxsO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KHRoaXMuYmFzZVVSTCArIHF1ZXJ5LCBleHRyYXM/LmRvbnRFbmNyeXB0ID8gYm9keSA6IHRoaXMuZW5jcnlwdChuYm9keSksIHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgICAuLi5leHRyYXM/Lm9wdGlvbnMsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocjogYW55KSA9PiB0aGlzLmRlY3J5cHQocikpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlUmVxdWVzdEVycm9yKVxuICAgICAgKSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cblxuICBwdXRGaWxlPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIGJvZHk6IEZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0PFQ+KHJvdXRlLCBib2R5LCB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmZpbGVIZWFkZXJzKSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICB9LFxuICAgICAgZG9udEVuY3J5cHQ6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIERFTEVURVxuICBkZWxldGUgPSA8VCA9IGFueT4ocm91dGU6IHN0cmluZywgb3B0aW9ucz8pID0+IHtcbiAgICB0aGlzLmxvZ1JvdXRlcygnZGVsZXRlJywgcm91dGUpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGU8VD4oXG4gICAgICAgIHRoaXMuYmFzZVVSTCArIHJvdXRlLFxuICAgICAgICBvcHRpb25zIHx8IHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocjogYW55KSA9PiB0aGlzLmRlY3J5cHQocikpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlUmVxdWVzdEVycm9yKVxuICAgICAgKSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH07XG4gIGRlbGV0ZVdpdGhCb2R5ID0gPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIGJvZHk/OiBhbnksIG9wdGlvbnM/KSA9PiB7XG4gICAgdGhpcy5sb2dSb3V0ZXMoJ2RlbGV0ZScsIHJvdXRlKTtcbiAgICBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoXG4gICAgICAnREVMRVRFJyxcbiAgICAgIHRoaXMuYmFzZVVSTCArIHJvdXRlLFxuICAgICAgSEhlbnZpcm9ubWVudC5lbmNyeXB0QVBJUmVxdWVzdHMgPyB0aGlzLmVuY3J5cHQoYm9keSkgOiBib2R5LFxuICAgICAgb3B0aW9ucyB8fCB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxUPihyZXEpLnBpcGUoXG4gICAgICBtYXAoKHI6IGFueSkgPT4gdGhpcy5kZWNyeXB0KHIpKSxcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVSZXF1ZXN0RXJyb3IpXG4gICAgKSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH07XG5cbiAgZGVsZXRlVGV4dCA9IChyb3V0ZTogc3RyaW5nKSA9PlxuICAgIHRoaXMuZGVsZXRlPHN0cmluZz4ocm91dGUsIHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgfSk7XG4gIC8vI2VuZHJlZ2lvblxufVxuXG5pbnRlcmZhY2UgSUV4dHJhcyB7XG4gIG5vRm9ybWF0PzogYm9vbGVhbjtcbiAgZG9udEVuY3J5cHQ/OiBib29sZWFuO1xuICBkb250RGVjcnlwdFJlc3BvbnNlPzogYm9vbGVhbjtcbiAgb3B0aW9ucz86IGFueTtcbiAgcmVxdWVzdFR5cGU/OiAncXVlcnlQYXJhbXMnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNwb25zZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgcmVzdWx0OiBhbnk7XG4gIHN0YXR1czogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICdmYWlsdXJlJztcbiAgc3RhdHVzQ29kZTogJ1NNMDAwJyB8ICdTTTAwMScgfCAnU00wMDInIHwgJ1NNMDAzJztcbn1cblxudHlwZSBSZXNwPFQ+ID0gVCAmIHsgc3RhdHVzOiAnc3VjY2VzcycgfCAnZXJyb3InOyBkYXRhOiBUOyBtZXNzYWdlOiBzdHJpbmcgfTtcbiJdfQ==