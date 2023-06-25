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
                    .pipe(retry(this.retryCount), map((r) => this.handleResponse(extras?.dontDecryptResponse ? r : this.decrypt(r))), tap((x) => (this.showRoutes ? console.log(x) : null)), catchError(this.handleRequestError))
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
            return this.http.request(req).pipe(map((r) => this.handleResponse(HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
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
                .pipe(map((r) => this.handleResponse(this.decrypt(r))), catchError(this.handleRequestError));
        };
        this.deleteWithBody = (route, body, options) => {
            this.logRoutes('delete', route);
            const req = new HttpRequest('DELETE', this.baseURL + route, HHenvironment.encryptAPIRequests ? this.encrypt(body) : body, options || {
                headers: new HttpHeaders(this.headers),
                responseType: 'json',
            });
            return this.http.request(req).pipe(map((r) => this.handleResponse(this.decrypt(r))), catchError(this.handleRequestError));
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
    handleResponse(response) {
        return response;
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
            .pipe(map((r) => this.handleResponse(HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
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
            .pipe(map((r) => this.handleResponse(HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
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
            .pipe(map((r) => this.handleResponse(this.decrypt(r))), catchError(this.handleRequestError));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFHTCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFdBQVcsR0FDWixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUsvRCxNQUFNLE9BQU8sVUFBVTtJQUNyQixJQUFjLE9BQU87UUFDbkIsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFZLE9BQU87UUFDakIsT0FBTztZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFDRCxJQUFZLFdBQVc7UUFDckIsT0FBTztZQUNMLE9BQU8sRUFBRSxxQkFBcUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFHRCxZQUNTLEVBQW9CLEVBQ3BCLElBQWdCLEVBQ2hCLE1BQW9CLEVBQ3BCLE9BQTBCO1FBSDFCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQWpCM0IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQVdmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFTdkI7Ozs7V0FJRztRQUNILFlBQU8sR0FBRyxDQUFD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YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNFLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RDLFlBQVksRUFBRSxNQUFNO1lBQ3BCLEdBQUcsTUFBTSxFQUFFLE9BQU87U0FDbkIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JELFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FDakIsQ0FBQztJQUN6QixDQUFDO0lBRUQsT0FBTyxDQUFVLEtBQWEsRUFBRSxJQUFjO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBSSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzlCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDMUMsWUFBWSxFQUFFLE1BQU07YUFDckI7WUFDRCxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQS9WVSxVQUFVO2tIQUFWLFVBQVUsY0FGVCxNQUFNOzsyRkFFUCxVQUFVO2tCQUh0QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuY3J5cHRvclNlcnZpY2UgfSBmcm9tICcuL2VuY3J5cHRvci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnRUeXBlLFxuICBIdHRwSGVhZGVycyxcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgcmV0cnksIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbENhY2hlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBISGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZ2V0IGJhc2VVUkwoKSB7XG4gICAgcmV0dXJuIEhIZW52aXJvbm1lbnQuYXBpQmFzZVVybDtcbiAgfVxuICBwcml2YXRlIHNob3dSb3V0ZXMgPSAwO1xuICBwcml2YXRlIGdldCBoZWFkZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH07XG4gIH1cbiAgcHJpdmF0ZSBnZXQgZmlsZUhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICB9O1xuICB9XG4gIHByaXZhdGUgcmV0cnlDb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVTOiBFbmNyeXB0b3JTZXJ2aWNlLFxuICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyBjYWNoZVM6IENhY2hlU2VydmljZSxcbiAgICBwdWJsaWMgbENhY2hlUzogTG9jYWxDYWNoZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBFbmNyeXB0cyBhbiBpdGVtXG4gICAqIEBwYXJhbSBkYXRhIEl0ZW1cbiAgICogQHJldHVybnMgRW5jcnlwdGVkIE9iamVjdFxuICAgKi9cbiAgZW5jcnlwdCA9IChvYmo6IGFueSkgPT4ge1xuICAgIGlmICghSEhlbnZpcm9ubWVudC5lbmNyeXB0QVBJUmVxdWVzdHMpIHJldHVybiBvYmo7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgZGF0YTogdGhpcy5lUy5lbmNyeXB0SXRlbShvYmopLFxuICAgIH07XG4gICAgY29uc29sZS5sb2cocmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWNyeXB0cyBhbiBlbmNyeXB0ZWQgaXRlbVxuICAgKiBAcGFyYW0gZGF0YSBFbmNyeXB0ZWQgc3RyaW5nXG4gICAqIEByZXR1cm5zIERlY3J5cHRlZCBPYmplY3RcbiAgICovXG4gIGRlY3J5cHQgPSAob2JqOiB7IGRhdGE6IHN0cmluZzsgc3RhdHVzOiAnc3VjY2VzcycgfCAnZXJyb3InIH0pID0+IHtcbiAgICBpZiAoIUhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzKSByZXR1cm4gb2JqO1xuICAgIGlmICh0eXBlb2Ygb2JqPy5kYXRhID09ICdzdHJpbmcnKVxuICAgICAgaWYgKG9iai5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSByZXR1cm4gdGhpcy5lUy5kZWNyeXB0SXRlbShvYmo/LmRhdGEpO1xuICAgICAgZWxzZSB0aHJvdyB0aGlzLmVTLmRlY3J5cHRJdGVtKG9iaj8uZGF0YSk7XG4gICAgZWxzZSByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHByaXZhdGUgbG9nUm91dGVzKG1ldGhvZDogJ2dldCcgfCAncG9zdCcgfCAncHV0JyB8ICdkZWxldGUnLCByb3V0ZSwgLi4uZXh0cmFzKSB7XG4gICAgaWYgKHRoaXMuc2hvd1JvdXRlcykge1xuICAgICAgY29uc29sZS5sb2cobWV0aG9kLCByb3V0ZSwgLi4uZXh0cmFzKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gIGhhbmRsZVJlcXVlc3RFcnJvciA9IChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgY29uc3QgZXJyb3IgPSBlcnIuZXJyb3IuZGF0YVxuICAgICAgPyB0aGlzLmVTLmRlY3J5cHRJdGVtKGVyci5lcnJvci5kYXRhKVxuICAgICAgOiB7IG1lc3NhZ2U6IGVyci5zdGF0dXNUZXh0IH07XG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyb3I/Lm1lc3NhZ2UpO1xuICB9O1xuXG4gIC8vI3JlZ2lvbiBQQVRDSFxuICBwYXRjaDxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5PywgZXh0cmFzPzogSUV4dHJhcyk6IE9ic2VydmFibGU8UmVzcDxUPj4ge1xuICAgIHRoaXMubG9nUm91dGVzKCdwb3N0Jywgcm91dGUsIGJvZHkpO1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChcbiAgICAgICAgZW5jb2RlVVJJKHRoaXMuYmFzZVVSTCArIHJvdXRlKSxcbiAgICAgICAgIUhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzIHx8IGV4dHJhcz8uZG9udEVuY3J5cHQgPyBib2R5IDogdGhpcy5lbmNyeXB0KGJvZHkpLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgICAgLi4uZXh0cmFzPy5vcHRpb25zLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyOiBhbnkpID0+XG4gICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShISGVudmlyb25tZW50LmVuY3J5cHRBUElSZXF1ZXN0cyA/IHRoaXMuZGVjcnlwdChyKSA6IHIpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVSZXF1ZXN0RXJyb3IpXG4gICAgICApIGFzIE9ic2VydmFibGU8YW55PjtcbiAgfVxuICBwYXRjaEZpbGU8VCA9IGFueT4ocm91dGU6IHN0cmluZywgYm9keTogRm9ybURhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRjaDxUPihyb3V0ZSwgYm9keSwge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5maWxlSGVhZGVycyksXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgfSxcbiAgICAgIGRvbnRFbmNyeXB0OiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBQT1NUXG4gIHBvc3Q8VCA9IGFueT4ocm91dGU6IHN0cmluZywgYm9keT8sIGV4dHJhcz86IElFeHRyYXMpOiBPYnNlcnZhYmxlPFJlc3A8VD4+IHtcbiAgICB0aGlzLmxvZ1JvdXRlcygncG9zdCcsIHJvdXRlLCBib2R5KTtcbiAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdChcbiAgICAgICAgZW5jb2RlVVJJKHRoaXMuYmFzZVVSTCArIHJvdXRlKSxcbiAgICAgICAgIUhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzIHx8IGV4dHJhcz8uZG9udEVuY3J5cHQgPyBib2R5IDogdGhpcy5lbmNyeXB0KGJvZHkpLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgICAgLi4uZXh0cmFzPy5vcHRpb25zLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyOiBhbnkpID0+XG4gICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShISGVudmlyb25tZW50LmVuY3J5cHRBUElSZXF1ZXN0cyA/IHRoaXMuZGVjcnlwdChyKSA6IHIpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVSZXF1ZXN0RXJyb3IpXG4gICAgICApIGFzIE9ic2VydmFibGU8YW55PjtcbiAgfVxuICBwb3N0V2l0aFByb2dyZXNzPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIGJvZHk/OiB7IFt4OiBzdHJpbmddOiBGaWxlIHwgYW55IH0pIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8eyBib2R5PzogVDsgcHJvZ3Jlc3M/OiBudW1iZXI7IHVwbG9hZGVkPzogYm9vbGVhbiB9Pigoc3ViKSA9PiB7XG4gICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgdGhpcy5sb2dSb3V0ZXMoJ3Bvc3QnLCByb3V0ZSwgYm9keSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKGJvZHkpLmZvckVhY2goKGtleSkgPT4gZmQuYXBwZW5kKGtleSwgYm9keVtrZXldKSk7XG4gICAgICB0aGlzLmh0dHBcbiAgICAgICAgLnBvc3QoZW5jb2RlVVJJKHRoaXMuYmFzZVVSTCArIHJvdXRlKSwgZmQsIHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5maWxlSGVhZGVycyksXG4gICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cycsXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKVxuICAgICAgICAgICAgICBzdWIubmV4dCh7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6ICgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwsXG4gICAgICAgICAgICAgICAgdXBsb2FkZWQ6IGV2ZW50LmxvYWRlZCA9PSBldmVudC50b3RhbCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIHN1Yi5uZXh0KHtcbiAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmRlY3J5cHQoZXZlbnQuYm9keSBhcyBhbnkpLFxuICAgICAgICAgICAgICAgIHVwbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBzdWIuZXJyb3IoZXJyb3I/LmVycm9yPy5tZXNzYWdlIHx8IGVycm9yPy5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgIHN1Yi5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcG9zdEZpbGU8VCA9IGFueT4ocm91dGU6IHN0cmluZywgYm9keTogRm9ybURhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0PFQ+KHJvdXRlLCBib2R5LCB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmZpbGVIZWFkZXJzKSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICB9LFxuICAgICAgZG9udEVuY3J5cHQ6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgcG9zdFN0cmluZyhyb3V0ZTogc3RyaW5nLCBib2R5Pykge1xuICAgIHJldHVybiB0aGlzLnBvc3Q8c3RyaW5nPihyb3V0ZSwgYm9keSwge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbicsXG4gICAgICAgIH0pLFxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEdFVFxuICBnZXQgPSA8VCA9IGFueT4ocm91dGU6IHN0cmluZywgcGFyYW1ldGVycz86IE9iamVjdCwgZXh0cmFzPzogSUV4dHJhcyk6IE9ic2VydmFibGU8UmVzcDxUPj4gPT4ge1xuICAgIHRoaXMubG9nUm91dGVzKCdnZXQnLCByb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFJlc3A8VD4+KChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGUgKyB0aGlzLmdldFJlcXVlc3RQYXJzZShwYXJhbWV0ZXJzKTtcbiAgICAgIC8vIGlmICh0aGlzLmNhY2hlUy5oYXMocXVlcnkpKSB7XG4gICAgICAvLyAgIHJlcy5uZXh0KHRoaXMuY2FjaGVTLmdldEl0ZW08VD4ocm91dGUpKTtcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KHRoaXMuYmFzZVVSTCArIHF1ZXJ5LCB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgICAgLi4uZXh0cmFzPy5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICByZXRyeSh0aGlzLnJldHJ5Q291bnQpLFxuICAgICAgICAgIG1hcCgocjogYW55KSA9PiB0aGlzLmhhbmRsZVJlc3BvbnNlKGV4dHJhcz8uZG9udERlY3J5cHRSZXNwb25zZSA/IHIgOiB0aGlzLmRlY3J5cHQocikpKSxcbiAgICAgICAgICB0YXAoKHgpID0+ICh0aGlzLnNob3dSb3V0ZXMgPyBjb25zb2xlLmxvZyh4KSA6IG51bGwpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlUmVxdWVzdEVycm9yKVxuICAgICAgICApXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgIHJlcy5uZXh0KHIpO1xuICAgICAgICAgIHRoaXMuY2FjaGVTLnNldEl0ZW0ocXVlcnksIHIpO1xuICAgICAgICAgIHJlcy5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVzLmVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFRleHQgPSA8VCA9IHN0cmluZz4ocm91dGU6IHN0cmluZywgcGFyYW1ldGVycz86IE9iamVjdCkgPT5cbiAgICB0aGlzLmdldDxUPihyb3V0ZSwgcGFyYW1ldGVycywge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgICB9LFxuICAgIH0pO1xuICBnZXRGaWxlID0gPFQgPSBzdHJpbmc+KHJvdXRlOiBzdHJpbmcsIHBhcmFtZXRlcnM/OiBPYmplY3QpID0+XG4gICAgdGhpcy5nZXQ8VD4ocm91dGUsIHBhcmFtZXRlcnMsIHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5QnVmZmVyJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIGdldFdpdGhCb2R5ID0gPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIGJvZHk/OiBhbnksIGV4dHJhcz86IElFeHRyYXMpID0+IHtcbiAgICB0aGlzLmxvZ1JvdXRlcygnZ2V0Jywgcm91dGUpO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KFxuICAgICAgJ0dFVCcsXG4gICAgICB0aGlzLmJhc2VVUkwgKyByb3V0ZSxcbiAgICAgIEhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzID8gdGhpcy5lbmNyeXB0KGJvZHkpIDogYm9keSxcbiAgICAgIGV4dHJhcz8ub3B0aW9ucyB8fCB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxUPihyZXEpLnBpcGUoXG4gICAgICBtYXAoKHI6IGFueSkgPT4gdGhpcy5oYW5kbGVSZXNwb25zZShISGVudmlyb25tZW50LmVuY3J5cHRBUElSZXF1ZXN0cyA/IHRoaXMuZGVjcnlwdChyKSA6IHIpKSxcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVSZXF1ZXN0RXJyb3IpXG4gICAgKSBhcyBPYnNlcnZhYmxlPFJlc3A8VD4+O1xuICB9O1xuXG4gIGdldEZyb21sb2NhbCA9IDxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBwYXJhbWV0ZXJzPzogT2JqZWN0LCBvcHRpb25zPzogYW55KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFJlc3A8VD4+KChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGUgKyB0aGlzLmdldFJlcXVlc3RQYXJzZShwYXJhbWV0ZXJzKTtcbiAgICAgIGlmICh0aGlzLmxDYWNoZVMuaGFzKHF1ZXJ5KSkge1xuICAgICAgICByZXMubmV4dCh0aGlzLmxDYWNoZVMuZ2V0SXRlbShxdWVyeSkpO1xuICAgICAgICByZXMuY29tcGxldGUoKTtcbiAgICAgIH0gZWxzZVxuICAgICAgICB0aGlzLmdldChxdWVyeSwgbnVsbCwgb3B0aW9ucylcbiAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgLy8gaWYgKCF0aGlzLmNTLmhhcyhyb3V0ZSkpXG4gICAgICAgICAgICByZXMubmV4dChyKTtcbiAgICAgICAgICAgIHRoaXMubENhY2hlUy5zZXRJdGVtKHF1ZXJ5LCByKTtcbiAgICAgICAgICAgIHJlcy5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBnZXRXaXRoTG9jYWxDYWNoZSA9IDxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBwYXJhbWV0ZXJzPzogT2JqZWN0LCBvcHRpb25zPzogYW55KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFJlc3A8VD4+KChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGUgKyB0aGlzLmdldFJlcXVlc3RQYXJzZShwYXJhbWV0ZXJzKTtcbiAgICAgIGlmICh0aGlzLmxDYWNoZVMuaGFzKHF1ZXJ5KSkge1xuICAgICAgICByZXMubmV4dCh0aGlzLmxDYWNoZVMuZ2V0SXRlbShxdWVyeSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5nZXQocXVlcnksIG51bGwsIG9wdGlvbnMpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgIC8vIGlmICghdGhpcy5jUy5oYXMocm91dGUpKVxuICAgICAgICAgIHJlcy5uZXh0KHIpO1xuICAgICAgICAgIHRoaXMubENhY2hlUy5zZXRJdGVtKHF1ZXJ5LCByKTtcbiAgICAgICAgICByZXMuY29tcGxldGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgcmVzLmVycm9yKGUpO1xuICAgICAgICAgIHJlcy5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgZ2V0UmVxdWVzdFBhcnNlKHBhcmFtZXRlcnM/OiBPYmplY3QpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMpIHJldHVybiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgJz8nICtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gcGFyYW1ldGVyc1trZXldPy50b1N0cmluZygpPy50cmltKCkgIT0gbnVsbClcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBgJHtrZXl9PSR7cGFyYW1ldGVyc1trZXldPy50b1N0cmluZygpPy50cmltKCl9YClcbiAgICAgICAgLmpvaW4oJyYnKVxuICAgICk7XG4gIH1cbiAgZ2V0QWxsID0gPFQgPSBhbnk+KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcXVlcnk6IHsgbGltaXQ6IG51bWJlcjsgW3g6IHN0cmluZ106IGFueSB9LFxuICAgIGRhdGFGaWVsZE5hbWU6IHN0cmluZyxcbiAgICBleHRyYXM/OiBJRXh0cmFzXG4gICkgPT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUW10+KChzdWIpID0+IHtcbiAgICAgIGxldCBkYXRhOiBUW10gPSBbXTtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgY29uc3QgZmV0Y2hkYXRhID0gKHBhZ2U6IG51bWJlcikgPT5cbiAgICAgICAgdGhpcy5nZXQ8e1xuICAgICAgICAgIFt4OiBzdHJpbmddOiB7XG4gICAgICAgICAgICBkYXRhOiBUW107XG4gICAgICAgICAgICB0b3RhbDogbnVtYmVyO1xuICAgICAgICAgIH07XG4gICAgICAgIH0+KHJvdXRlLCB7IC4uLnF1ZXJ5LCBwYWdlIH0pLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChyW2RhdGFGaWVsZE5hbWVdPy5kYXRhKTtcbiAgICAgICAgICBzdWIubmV4dChkYXRhKTtcbiAgICAgICAgICAvLyBjb25zdCBkMSA9IGRhdGE/Lmxlbmd0aDtcbiAgICAgICAgICAvLyBjb25zdCBkMiA9ICEhZGF0YT8ubGVuZ3RoO1xuICAgICAgICAgIC8vIGNvbnN0IGQzID0gcltkYXRhRmllbGROYW1lXTtcbiAgICAgICAgICAvLyBjb25zdCBkNCA9IHJbZGF0YUZpZWxkTmFtZV0/LnRvdGFsO1xuICAgICAgICAgIC8vIGNvbnN0IGQ1ID0gZGF0YT8ubGVuZ3RoIDw9IHJbZGF0YUZpZWxkTmFtZV0/LnRvdGFsO1xuICAgICAgICAgIC8vIGNvbnN0IGQ2ID0gISFkYXRhPy5sZW5ndGggJiYgZGF0YT8ubGVuZ3RoIDw9IHJbZGF0YUZpZWxkTmFtZV0/LnRvdGFsO1xuICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgIGlmICghIXJbZGF0YUZpZWxkTmFtZV0/LmRhdGE/Lmxlbmd0aCAmJiBkYXRhPy5sZW5ndGggPCByW2RhdGFGaWVsZE5hbWVdPy50b3RhbClcbiAgICAgICAgICAgIGZldGNoZGF0YSgrK3BhZ2UpO1xuICAgICAgICAgIGVsc2Ugc3ViLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgZmV0Y2hkYXRhKDEpO1xuICAgIH0pO1xuICB9O1xuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gUFVUXG4gIHB1dDxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5PywgZXh0cmFzPzogSUV4dHJhcyk6IE9ic2VydmFibGU8UmVzcDxUPj4ge1xuICAgIHRoaXMubG9nUm91dGVzKCdwdXQnLCByb3V0ZSwgYm9keSk7XG4gICAgbGV0IHF1ZXJ5ID0gcm91dGUgKyAnJyxcbiAgICAgIG5ib2R5ID0gYm9keTtcbiAgICBpZiAoZXh0cmFzPy5yZXF1ZXN0VHlwZSA9PSAncXVlcnlQYXJhbXMnKSB7XG4gICAgICBxdWVyeSArPSB0aGlzLmdldFJlcXVlc3RQYXJzZShib2R5KTtcbiAgICAgIG5ib2R5ID0gbnVsbDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dCh0aGlzLmJhc2VVUkwgKyBxdWVyeSwgZXh0cmFzPy5kb250RW5jcnlwdCA/IGJvZHkgOiB0aGlzLmVuY3J5cHQobmJvZHkpLCB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgLi4uZXh0cmFzPy5vcHRpb25zLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHI6IGFueSkgPT4gdGhpcy5oYW5kbGVSZXNwb25zZSh0aGlzLmRlY3J5cHQocikpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZVJlcXVlc3RFcnJvcilcbiAgICAgICkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICB9XG5cbiAgcHV0RmlsZTxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5OiBGb3JtRGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dDxUPihyb3V0ZSwgYm9keSwge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5maWxlSGVhZGVycyksXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgfSxcbiAgICAgIGRvbnRFbmNyeXB0OiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBERUxFVEVcbiAgZGVsZXRlID0gPFQgPSBhbnk+KHJvdXRlOiBzdHJpbmcsIG9wdGlvbnM/KSA9PiB7XG4gICAgdGhpcy5sb2dSb3V0ZXMoJ2RlbGV0ZScsIHJvdXRlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlPFQ+KFxuICAgICAgICB0aGlzLmJhc2VVUkwgKyByb3V0ZSxcbiAgICAgICAgb3B0aW9ucyB8fCB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHI6IGFueSkgPT4gdGhpcy5oYW5kbGVSZXNwb25zZSh0aGlzLmRlY3J5cHQocikpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZVJlcXVlc3RFcnJvcilcbiAgICAgICkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICB9O1xuICBkZWxldGVXaXRoQm9keSA9IDxUID0gYW55Pihyb3V0ZTogc3RyaW5nLCBib2R5PzogYW55LCBvcHRpb25zPykgPT4ge1xuICAgIHRoaXMubG9nUm91dGVzKCdkZWxldGUnLCByb3V0ZSk7XG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KFxuICAgICAgJ0RFTEVURScsXG4gICAgICB0aGlzLmJhc2VVUkwgKyByb3V0ZSxcbiAgICAgIEhIZW52aXJvbm1lbnQuZW5jcnlwdEFQSVJlcXVlc3RzID8gdGhpcy5lbmNyeXB0KGJvZHkpIDogYm9keSxcbiAgICAgIG9wdGlvbnMgfHwge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8VD4ocmVxKS5waXBlKFxuICAgICAgbWFwKChyOiBhbnkpID0+IHRoaXMuaGFuZGxlUmVzcG9uc2UodGhpcy5kZWNyeXB0KHIpKSksXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlUmVxdWVzdEVycm9yKVxuICAgICkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICB9O1xuXG4gIGRlbGV0ZVRleHQgPSAocm91dGU6IHN0cmluZykgPT5cbiAgICB0aGlzLmRlbGV0ZTxzdHJpbmc+KHJvdXRlLCB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxuICAgIH0pO1xuICAvLyNlbmRyZWdpb25cbn1cblxuaW50ZXJmYWNlIElFeHRyYXMge1xuICBub0Zvcm1hdD86IGJvb2xlYW47XG4gIGRvbnRFbmNyeXB0PzogYm9vbGVhbjtcbiAgZG9udERlY3J5cHRSZXNwb25zZT86IGJvb2xlYW47XG4gIG9wdGlvbnM/OiBhbnk7XG4gIHJlcXVlc3RUeXBlPzogJ3F1ZXJ5UGFyYW1zJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzcG9uc2Uge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHJlc3VsdDogYW55O1xuICBzdGF0dXM6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnZmFpbHVyZSc7XG4gIHN0YXR1c0NvZGU6ICdTTTAwMCcgfCAnU00wMDEnIHwgJ1NNMDAyJyB8ICdTTTAwMyc7XG59XG5cbnR5cGUgUmVzcDxUPiA9IFQgJiB7IHN0YXR1czogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJzsgZGF0YTogVDsgbWVzc2FnZTogc3RyaW5nIH07XG4iXX0=