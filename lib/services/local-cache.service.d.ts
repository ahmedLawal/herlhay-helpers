import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { UtilityService } from './utility.service';
import { CacheService } from './cache.service';
import * as i0 from "@angular/core";
export declare class LocalCacheService extends CacheService {
    sS: StorageService;
    uS: UtilityService;
    private readonly cacheKey;
    private readonly cacheCreatedDateKey;
    private readonly validityDays;
    private readonly oneDayTimestamp;
    constructor(sS: StorageService, uS: UtilityService);
    saveToLocal(): void;
    setItem<T>(key: string, data: T): void;
    getAndSet<T>(key: string, addFunc?: T | Promise<T> | Observable<T>): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalCacheService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalCacheService>;
}
