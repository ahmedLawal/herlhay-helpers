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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24taW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBR2hELE1BQU0sT0FBTyxnQ0FBZ0M7SUFDM0MsWUFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBQ3JDLFNBQVMsQ0FDUCxHQUFxQixFQUNyQixJQUFpQjtRQUVqQixXQUFXO1FBQ1gsSUFBSSxhQUFhLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2RSxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN4QixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7Z0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO3FCQUNqQixHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzFELENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQztnQkFDRixJQUFJLEVBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUUsR0FBRSxDQUFDO2dCQUNuQyxLQUFLLEVBQUUsQ0FBQyxDQUFpQixFQUFFLEVBQUU7b0JBQzNCLFdBQVc7b0JBQ1gsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFHO3dCQUM3RCxRQUFRLENBQUM7d0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzdELFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDckIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUN2QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsUUFBUSxDQUFDO3FCQUNsRDtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUNILENBQUM7U0FDSDs7WUFBTSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQzs4R0E3QlUsZ0NBQWdDO2tIQUFoQyxnQ0FBZ0M7OzJGQUFoQyxnQ0FBZ0M7a0JBRDVDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBISGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pbmRleC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25JbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XG4gIGludGVyY2VwdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgaWYgKEhIZW52aXJvbm1lbnQudG9rZW4gJiYgcmVxLnVybC5zdGFydHNXaXRoKEhIZW52aXJvbm1lbnQuYXBpQmFzZVVybCkpIHtcbiAgICAgIGNvbnN0IHJlcUF1dGggPSByZXEuY2xvbmUoe1xuICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtISGVudmlyb25tZW50Py50b2tlbn1gKSBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcUF1dGgpLnBpcGUoXG4gICAgICAgIHRhcCh7XG4gICAgICAgICAgbmV4dDogKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge30sXG4gICAgICAgICAgZXJyb3I6IChlOiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGlmIChlWydzdGF0dXMnXSA9PSA0MDEgJiYgbG9jYXRpb24ucGF0aG5hbWUgIT0gJy9hdXRoL2xvZ2luJyApIHtcbiAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEFib3V0IHRvIGJlIGxvZ2dlZWQgb3V0IGR1ZSB0byA0MDEgYCwgZSwgcmVxKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgLyR7Q29uZmlnLmF1dGhCYXNlUm91dGV9L2xvZ2luYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==