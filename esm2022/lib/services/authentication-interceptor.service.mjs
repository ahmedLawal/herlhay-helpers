import { Injectable } from '@angular/core';
import { HHenvironment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthenticationInterceptorService {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        debugger;
        if (HHenvironment.token && req.url.startsWith(HHenvironment.apiBaseUrl)) {
            const reqAuth = req.clone({
                url: req.url,
                headers: req.headers
                    .set('Authorization', `Bearer ${HHenvironment?.token}`)
            });
            return next.handle(reqAuth).pipe(tap({
                next: (event) => { },
                error: (e) => {
                    // debugger
                    if (e['status'] == 401 && location.pathname != '/auth/login') {
                        console.error(`About to be loggeed out due to 401 `, e, req);
                        localStorage.clear();
                        sessionStorage.clear();
                        location.href = '/auth/login';
                    }
                },
            }));
        }
        else
            return next.handle(req);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AuthenticationInterceptorService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AuthenticationInterceptorService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AuthenticationInterceptorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24taW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHckMsTUFBTSxPQUFPLGdDQUFnQztJQUMzQyxZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFDckMsU0FBUyxDQUNQLEdBQXFCLEVBQ3JCLElBQWlCO1FBRWpCLFFBQVEsQ0FBQTtRQUNSLElBQUksYUFBYSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkUsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDeEIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO2dCQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztxQkFDakIsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFVLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMxRCxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUM7Z0JBQ0YsSUFBSSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLEdBQUUsQ0FBQztnQkFDbkMsS0FBSyxFQUFFLENBQUMsQ0FBaUIsRUFBRSxFQUFFO29CQUMzQixXQUFXO29CQUNYLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLGFBQWEsRUFBRzt3QkFDN0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzdELFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDckIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUN2QixRQUFRLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztxQkFDL0I7Z0JBQ0gsQ0FBQzthQUNGLENBQUMsQ0FDSCxDQUFDO1NBQ0g7O1lBQU0sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OEdBNUJVLGdDQUFnQztrSEFBaEMsZ0NBQWdDOzsyRkFBaEMsZ0NBQWdDO2tCQUQ1QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSEhlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgZGVidWdnZXJcbiAgICBpZiAoSEhlbnZpcm9ubWVudC50b2tlbiAmJiByZXEudXJsLnN0YXJ0c1dpdGgoSEhlbnZpcm9ubWVudC5hcGlCYXNlVXJsKSkge1xuICAgICAgY29uc3QgcmVxQXV0aCA9IHJlcS5jbG9uZSh7XG4gICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnNcbiAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke0hIZW52aXJvbm1lbnQ/LnRva2VufWApIFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxQXV0aCkucGlwZShcbiAgICAgICAgdGFwKHtcbiAgICAgICAgICBuZXh0OiAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7fSxcbiAgICAgICAgICBlcnJvcjogKGU6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKGVbJ3N0YXR1cyddID09IDQwMSAmJiBsb2NhdGlvbi5wYXRobmFtZSAhPSAnL2F1dGgvbG9naW4nICkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBBYm91dCB0byBiZSBsb2dnZWVkIG91dCBkdWUgdG8gNDAxIGAsIGUsIHJlcSk7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJy9hdXRoL2xvZ2luJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==