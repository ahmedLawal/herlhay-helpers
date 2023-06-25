import { Inject, Injectable, InjectionToken } from '@angular/core';
import { timeout } from 'rxjs';
import { HHenvironment } from '../../environments/environment';
import { Config } from '../config/index.config';
import * as i0 from "@angular/core";
export const DEFAULT_TIMEOUT = new InjectionToken('defaultTimeout');
export class RequestTimeoutInterceptorService {
    constructor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    intercept(req, next) {
        // if (+req.headers.get('timeout') || environment.requestTimeout)
        //   console.log(
        //     'timeout',
        //     +req.headers.get('timeout') ,
        //       environment.requestTimeout ,
        //       this.defaultTimeout
        //   );
        // console.log(
        //   +req.headers.get('timeout') ,
        //     environment.requestTimeout ,
        //     this.defaultTimeout
        // );
        const tout = +req.headers.get('timeout') ||
            HHenvironment.requestTimeout ||
            this.defaultTimeout;
        // console.log('timeout period',tout);
        // return next.handle(req)
        return next
            .handle(req)
            .pipe(timeout(new Date(Config.TimeStampDay * 365 + Date.now())));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestTimeoutInterceptorService, deps: [{ token: DEFAULT_TIMEOUT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestTimeoutInterceptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestTimeoutInterceptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DEFAULT_TIMEOUT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC10aW1lb3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9yZXF1ZXN0LXRpbWVvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbkUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUVoRCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVMsZ0JBQWdCLENBQUMsQ0FBQztBQUs1RSxNQUFNLE9BQU8sZ0NBQWdDO0lBQzNDLFlBQStDLGNBQXNCO1FBQXRCLG1CQUFjLEdBQWQsY0FBYyxDQUFRO0lBQUcsQ0FBQztJQUV6RSxTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7UUFFakIsaUVBQWlFO1FBQ2pFLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsb0NBQW9DO1FBQ3BDLHFDQUFxQztRQUNyQyw0QkFBNEI7UUFDNUIsT0FBTztRQUNQLGVBQWU7UUFDZixrQ0FBa0M7UUFDbEMsbUNBQW1DO1FBQ25DLDBCQUEwQjtRQUMxQixLQUFLO1FBQ0wsTUFBTSxJQUFJLEdBQ1IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDM0IsYUFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN0QixzQ0FBc0M7UUFDdEMsMEJBQTBCO1FBQzFCLE9BQU8sSUFBSTthQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzhHQTVCVSxnQ0FBZ0Msa0JBQ3ZCLGVBQWU7a0hBRHhCLGdDQUFnQyxjQUYvQixNQUFNOzsyRkFFUCxnQ0FBZ0M7a0JBSDVDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFFYyxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aW1lb3V0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBISGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JzsgXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcvaW5kZXguY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRU9VVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxudW1iZXI+KCdkZWZhdWx0VGltZW91dCcpO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdFRpbWVvdXRJbnRlcmNlcHRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERFRkFVTFRfVElNRU9VVCkgcHJvdGVjdGVkIGRlZmF1bHRUaW1lb3V0OiBudW1iZXIpIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgLy8gaWYgKCtyZXEuaGVhZGVycy5nZXQoJ3RpbWVvdXQnKSB8fCBlbnZpcm9ubWVudC5yZXF1ZXN0VGltZW91dClcbiAgICAvLyAgIGNvbnNvbGUubG9nKFxuICAgIC8vICAgICAndGltZW91dCcsXG4gICAgLy8gICAgICtyZXEuaGVhZGVycy5nZXQoJ3RpbWVvdXQnKSAsXG4gICAgLy8gICAgICAgZW52aXJvbm1lbnQucmVxdWVzdFRpbWVvdXQgLFxuICAgIC8vICAgICAgIHRoaXMuZGVmYXVsdFRpbWVvdXRcbiAgICAvLyAgICk7XG4gICAgLy8gY29uc29sZS5sb2coXG4gICAgLy8gICArcmVxLmhlYWRlcnMuZ2V0KCd0aW1lb3V0JykgLFxuICAgIC8vICAgICBlbnZpcm9ubWVudC5yZXF1ZXN0VGltZW91dCAsXG4gICAgLy8gICAgIHRoaXMuZGVmYXVsdFRpbWVvdXRcbiAgICAvLyApO1xuICAgIGNvbnN0IHRvdXQgPVxuICAgICAgK3JlcS5oZWFkZXJzLmdldCgndGltZW91dCcpIHx8XG4gICAgICBISGVudmlyb25tZW50LnJlcXVlc3RUaW1lb3V0IHx8XG4gICAgICB0aGlzLmRlZmF1bHRUaW1lb3V0O1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aW1lb3V0IHBlcmlvZCcsdG91dCk7XG4gICAgLy8gcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICByZXR1cm4gbmV4dFxuICAgICAgLmhhbmRsZShyZXEpXG4gICAgICAucGlwZSh0aW1lb3V0KG5ldyBEYXRlKENvbmZpZy5UaW1lU3RhbXBEYXkgKiAzNjUgKyBEYXRlLm5vdygpKSkpO1xuICB9XG59XG4iXX0=