import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CacheService } from './cache.service';
import * as i0 from "@angular/core";
import * as i1 from "./storage.service";
import * as i2 from "./utility.service";
export class LocalCacheService extends CacheService {
    constructor(sS, uS) {
        super(uS);
        this.sS = sS;
        this.uS = uS;
        this.cacheKey = 'cacheKey';
        this.cacheCreatedDateKey = 'cacheCreatedDateKey';
        this.validityDays = 7;
        this.oneDayTimestamp = 86400000;
        try {
            const createdDate = sS.getItem(this.cacheCreatedDateKey);
            if (!createdDate)
                this.sS.saveItem(this.cacheCreatedDateKey, Date.now());
            else if (createdDate + this.validityDays * this.oneDayTimestamp <=
                Date.now()) {
                this.sS.saveItem(this.cacheCreatedDateKey, Date.now());
                this.sS.removeItem(this.cacheKey);
            }
            sS.getItemA(this.cacheKey).then((r) => {
                try {
                    for (const key in r) {
                        if (Object.prototype.hasOwnProperty.call(r, key)) {
                            this.setItem(key, r[key]);
                        }
                    }
                }
                catch (error) {
                    console.error(error);
                }
            });
        }
        catch (e) {
            console.error(e);
            this.sS.removeItem(this.cacheKey);
        }
    }
    saveToLocal() {
        // console.log('saving to cache', JSON.stringify(super.cache));
        this.sS.saveItemA(this.cacheKey, super.cache);
    }
    setItem(key, data) {
        super.setItem(key, data);
        this.saveToLocal();
    }
    getAndSet(key, addFunc) {
        // debugger;
        return super
            .getAndSet(key, addFunc)
            .pipe(tap((r) => this.saveToLocal()));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LocalCacheService, deps: [{ token: i1.StorageService }, { token: i2.UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LocalCacheService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LocalCacheService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.UtilityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL2xvY2FsLWNhY2hlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSy9DLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZO0lBS2pELFlBQW1CLEVBQWtCLEVBQWtCLEVBQWtCO1FBQ3ZFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQURPLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBQWtCLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBSnhELGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsd0JBQW1CLEdBQUcscUJBQXFCLENBQUM7UUFDNUMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsb0JBQWUsR0FBRyxRQUFRLENBQUM7UUFHMUMsSUFBSTtZQUNGLE1BQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUNwRSxJQUNILFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlO2dCQUN0RCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ1Y7Z0JBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7WUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBSTtvQkFDRixLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRTt3QkFDbkIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFOzRCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDM0I7cUJBQ0Y7aUJBQ0Y7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFDRCxXQUFXO1FBQ1QsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDUSxPQUFPLENBQUksR0FBVyxFQUFFLElBQU87UUFDdEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFUSxTQUFTLENBQUksR0FBVyxFQUFFLE9BQXdDO1FBQ3pFLFlBQVk7UUFDWixPQUFPLEtBQUs7YUFDVCxTQUFTLENBQUksR0FBRyxFQUFFLE9BQU8sQ0FBQzthQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OEdBL0NVLGlCQUFpQjtrSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07OzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi91dGlsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgQ2FjaGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBjYWNoZUtleSA9ICdjYWNoZUtleSc7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2FjaGVDcmVhdGVkRGF0ZUtleSA9ICdjYWNoZUNyZWF0ZWREYXRlS2V5JztcbiAgcHJpdmF0ZSByZWFkb25seSB2YWxpZGl0eURheXMgPSA3O1xuICBwcml2YXRlIHJlYWRvbmx5IG9uZURheVRpbWVzdGFtcCA9IDg2NDAwMDAwO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc1M6IFN0b3JhZ2VTZXJ2aWNlLCBwdWJsaWMgb3ZlcnJpZGUgdVM6IFV0aWxpdHlTZXJ2aWNlKSB7XG4gICAgc3VwZXIodVMpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZTogbnVtYmVyID0gc1MuZ2V0SXRlbSh0aGlzLmNhY2hlQ3JlYXRlZERhdGVLZXkpO1xuICAgICAgaWYgKCFjcmVhdGVkRGF0ZSkgdGhpcy5zUy5zYXZlSXRlbSh0aGlzLmNhY2hlQ3JlYXRlZERhdGVLZXksIERhdGUubm93KCkpO1xuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIGNyZWF0ZWREYXRlICsgdGhpcy52YWxpZGl0eURheXMgKiB0aGlzLm9uZURheVRpbWVzdGFtcCA8PVxuICAgICAgICBEYXRlLm5vdygpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zUy5zYXZlSXRlbSh0aGlzLmNhY2hlQ3JlYXRlZERhdGVLZXksIERhdGUubm93KCkpO1xuICAgICAgICB0aGlzLnNTLnJlbW92ZUl0ZW0odGhpcy5jYWNoZUtleSk7XG4gICAgICB9XG4gICAgICBzUy5nZXRJdGVtQSh0aGlzLmNhY2hlS2V5KS50aGVuKChyKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLCBrZXkpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SXRlbShrZXksIHJba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhpcy5zUy5yZW1vdmVJdGVtKHRoaXMuY2FjaGVLZXkpO1xuICAgIH1cbiAgfVxuICBzYXZlVG9Mb2NhbCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2F2aW5nIHRvIGNhY2hlJywgSlNPTi5zdHJpbmdpZnkoc3VwZXIuY2FjaGUpKTtcbiAgICB0aGlzLnNTLnNhdmVJdGVtQSh0aGlzLmNhY2hlS2V5LCBzdXBlci5jYWNoZSk7XG4gIH1cbiAgb3ZlcnJpZGUgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgZGF0YTogVCkge1xuICAgIHN1cGVyLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgICB0aGlzLnNhdmVUb0xvY2FsKCk7XG4gIH1cblxuICBvdmVycmlkZSBnZXRBbmRTZXQ8VD4oa2V5OiBzdHJpbmcsIGFkZEZ1bmM/OiBUIHwgUHJvbWlzZTxUPiB8IE9ic2VydmFibGU8VD4pIHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICByZXR1cm4gc3VwZXJcbiAgICAgIC5nZXRBbmRTZXQ8VD4oa2V5LCBhZGRGdW5jKVxuICAgICAgLnBpcGUodGFwKChyKSA9PiB0aGlzLnNhdmVUb0xvY2FsKCkpKTtcbiAgfVxufVxuIl19