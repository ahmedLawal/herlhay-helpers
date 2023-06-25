import { InjectionToken } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare const DEFAULT_TIMEOUT: InjectionToken<number>;
export declare class RequestTimeoutInterceptorService {
    protected defaultTimeout: number;
    constructor(defaultTimeout: number);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequestTimeoutInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RequestTimeoutInterceptorService>;
}
