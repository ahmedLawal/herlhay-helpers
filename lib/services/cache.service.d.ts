import { Observable } from 'rxjs';
import { UtilityService } from './utility.service';
import * as i0 from "@angular/core";
export declare class CacheService {
    uS: UtilityService;
    private _cache;
    constructor(uS: UtilityService);
    get cache(): {
        [x: string]: any;
    };
    has: (key: string) => boolean;
    getItem: <T>(key: string) => T;
    setItem<T>(key: string, data: T): void;
    getAndSet<T>(key: string, newValue?: T | Promise<T> | Observable<T>): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CacheService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CacheService>;
}
