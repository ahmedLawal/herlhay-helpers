import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AuthenticationInterceptorService implements HttpInterceptor {
    router: Router;
    constructor(router: Router);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticationInterceptorService>;
}
