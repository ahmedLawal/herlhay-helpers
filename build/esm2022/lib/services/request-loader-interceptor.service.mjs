import { HttpResponse, HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HHenvironment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class RequestLoggerInterceptorService {
    constructor() { }
    intercept(req, next) {
        HHenvironment.pageLoader.startPl();
        return next.handle(req).pipe(tap((event) => {
            if (event instanceof HttpResponse ||
                event instanceof HttpErrorResponse) {
                HHenvironment.pageLoader.stopPl();
            }
        }, (err) => {
            HHenvironment.pageLoader.stopPl();
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestLoggerInterceptorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestLoggerInterceptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestLoggerInterceptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1sb2FkZXItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL3JlcXVlc3QtbG9hZGVyLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUtMLFlBQVksRUFDWixpQkFBaUIsR0FDbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3JDLE1BQU0sT0FBTywrQkFBK0I7SUFDMUMsZ0JBQWUsQ0FBQztJQUNoQixTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7UUFFakIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUMxQixHQUFHLENBQ0QsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDeEIsSUFDRSxLQUFLLFlBQVksWUFBWTtnQkFDN0IsS0FBSyxZQUFZLGlCQUFpQixFQUNsQztnQkFDQSxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDTixhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDOzhHQXRCVSwrQkFBK0I7a0hBQS9CLCtCQUErQixjQUY5QixNQUFNOzsyRkFFUCwrQkFBK0I7a0JBSDNDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSEhlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7IFxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdExvZ2dlckludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgSEhlbnZpcm9ubWVudC5wYWdlTG9hZGVyLnN0YXJ0UGwoKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxuICAgICAgdGFwKFxuICAgICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UgfHxcbiAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIEhIZW52aXJvbm1lbnQucGFnZUxvYWRlci5zdG9wUGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICBISGVudmlyb25tZW50LnBhZ2VMb2FkZXIuc3RvcFBsKCk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=