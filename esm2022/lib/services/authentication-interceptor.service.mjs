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
        // debugger
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24taW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHckMsTUFBTSxPQUFPLGdDQUFnQztJQUMzQyxZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFDckMsU0FBUyxDQUNQLEdBQXFCLEVBQ3JCLElBQWlCO1FBRWpCLFdBQVc7UUFDWCxJQUFJLGFBQWEsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZFLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztnQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87cUJBQ2pCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDMUQsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDO2dCQUNGLElBQUksRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxHQUFFLENBQUM7Z0JBQ25DLEtBQUssRUFBRSxDQUFDLENBQWlCLEVBQUUsRUFBRTtvQkFDM0IsV0FBVztvQkFDWCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxhQUFhLEVBQUc7d0JBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM3RCxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3JCLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdkIsUUFBUSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7cUJBQy9CO2dCQUNILENBQUM7YUFDRixDQUFDLENBQ0gsQ0FBQztTQUNIOztZQUFNLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQTVCVSxnQ0FBZ0M7a0hBQWhDLGdDQUFnQzs7MkZBQWhDLGdDQUFnQztrQkFENUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhIZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25JbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XG4gIGludGVyY2VwdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgaWYgKEhIZW52aXJvbm1lbnQudG9rZW4gJiYgcmVxLnVybC5zdGFydHNXaXRoKEhIZW52aXJvbm1lbnQuYXBpQmFzZVVybCkpIHtcbiAgICAgIGNvbnN0IHJlcUF1dGggPSByZXEuY2xvbmUoe1xuICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtISGVudmlyb25tZW50Py50b2tlbn1gKSBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcUF1dGgpLnBpcGUoXG4gICAgICAgIHRhcCh7XG4gICAgICAgICAgbmV4dDogKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge30sXG4gICAgICAgICAgZXJyb3I6IChlOiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGlmIChlWydzdGF0dXMnXSA9PSA0MDEgJiYgbG9jYXRpb24ucGF0aG5hbWUgIT0gJy9hdXRoL2xvZ2luJyApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQWJvdXQgdG8gYmUgbG9nZ2VlZCBvdXQgZHVlIHRvIDQwMSBgLCBlLCByZXEpO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcvYXV0aC9sb2dpbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=