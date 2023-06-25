import { Injectable } from '@angular/core';
import { HHenvironment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Config } from '../config/index.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthenticationInterceptorService {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
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
                        debugger;
                        console.error(`About to be loggeed out due to 401 `, e, req);
                        localStorage.clear();
                        sessionStorage.clear();
                        location.href = `/${Config.authBaseRoute}/login`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24taW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBR2hELE1BQU0sT0FBTyxnQ0FBZ0M7SUFDM0MsWUFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBQ3JDLFNBQVMsQ0FDUCxHQUFxQixFQUNyQixJQUFpQjtRQUdqQixJQUFJLGFBQWEsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZFLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztnQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87cUJBQ2pCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDMUQsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDO2dCQUNGLElBQUksRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxHQUFFLENBQUM7Z0JBQ25DLEtBQUssRUFBRSxDQUFDLENBQWlCLEVBQUUsRUFBRTtvQkFDM0IsV0FBVztvQkFDWCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxhQUFhLEVBQUc7d0JBQzdELFFBQVEsQ0FBQzt3QkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDN0QsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNyQixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxRQUFRLENBQUM7cUJBQ2xEO2dCQUNILENBQUM7YUFDRixDQUFDLENBQ0gsQ0FBQztTQUNIOztZQUFNLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQTdCVSxnQ0FBZ0M7a0hBQWhDLGdDQUFnQzs7MkZBQWhDLGdDQUFnQztrQkFENUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhIZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4LmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cbiAgICBpZiAoSEhlbnZpcm9ubWVudC50b2tlbiAmJiByZXEudXJsLnN0YXJ0c1dpdGgoSEhlbnZpcm9ubWVudC5hcGlCYXNlVXJsKSkge1xuICAgICAgY29uc3QgcmVxQXV0aCA9IHJlcS5jbG9uZSh7XG4gICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnNcbiAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke0hIZW52aXJvbm1lbnQ/LnRva2VufWApIFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxQXV0aCkucGlwZShcbiAgICAgICAgdGFwKHtcbiAgICAgICAgICBuZXh0OiAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7fSxcbiAgICAgICAgICBlcnJvcjogKGU6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKGVbJ3N0YXR1cyddID09IDQwMSAmJiBsb2NhdGlvbi5wYXRobmFtZSAhPSAnL2F1dGgvbG9naW4nICkge1xuICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQWJvdXQgdG8gYmUgbG9nZ2VlZCBvdXQgZHVlIHRvIDQwMSBgLCBlLCByZXEpO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvJHtDb25maWcuYXV0aEJhc2VSb3V0ZX0vbG9naW5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIl19