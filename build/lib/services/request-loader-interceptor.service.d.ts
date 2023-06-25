import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RequestLoggerInterceptorService implements HttpInterceptor {
    constructor();
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequestLoggerInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RequestLoggerInterceptorService>;
}
