import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class MultiTenantInterceptorService {
    router: Router;
    activeSubdomainSite: string;
    whiteList: string[];
    constructor(router: Router);
    getActiveSite: () => string;
    isClientAdminSubdomain: () => boolean;
    canViewGeneralSite: () => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiTenantInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MultiTenantInterceptorService>;
}
