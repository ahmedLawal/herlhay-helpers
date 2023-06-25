import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./utility.service";
export class CacheService {
    constructor(uS) {
        this.uS = uS;
        this._cache = {};
        this.has = (key) => !!this._cache[key];
        this.getItem = (key) => this._cache[key];
    }
    get cache() {
        return this._cache;
    }
    setItem(key, data) {
        this._cache[key] = data;
        // return this._cache;
    }
    getAndSet(key, newValue) {
        return new Observable((next) => {
            next.next(this.getItem(key));
            if (newValue) {
                this.uS.promisifyVal(newValue).then(async (res) => {
                    this.setItem(key, res);
                    next.next(res);
                    next.complete();
                });
            }
            else
                next.complete();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CacheService, deps: [{ token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CacheService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CacheService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.UtilityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNbEMsTUFBTSxPQUFPLFlBQVk7SUFHdkIsWUFBbUIsRUFBa0I7UUFBbEIsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7UUFGN0IsV0FBTSxHQUF5QixFQUFFLENBQUM7UUFRMUMsUUFBRyxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQyxZQUFPLEdBQUcsQ0FBSSxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFNLENBQUM7SUFSWixDQUFDO0lBRXpDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBTUQsT0FBTyxDQUFJLEdBQVcsRUFBRSxJQUFPO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsU0FBUyxDQUFJLEdBQVcsRUFBRSxRQUF5QztRQUNqRSxPQUFPLElBQUksVUFBVSxDQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQzthQUNKOztnQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTdCVSxZQUFZO2tIQUFaLFlBQVksY0FGWCxNQUFNOzsyRkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi91dGlsaXR5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FjaGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2FjaGU6IHsgW3g6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIHVTOiBVdGlsaXR5U2VydmljZSkge31cblxuICBnZXQgY2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xuICB9XG5cbiAgaGFzID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuX2NhY2hlW2tleV07XG5cbiAgZ2V0SXRlbSA9IDxUPihrZXk6IHN0cmluZykgPT4gdGhpcy5fY2FjaGVba2V5XSBhcyBUO1xuXG4gIHNldEl0ZW08VD4oa2V5OiBzdHJpbmcsIGRhdGE6IFQpIHtcbiAgICB0aGlzLl9jYWNoZVtrZXldID0gZGF0YTtcbiAgICAvLyByZXR1cm4gdGhpcy5fY2FjaGU7XG4gIH1cblxuICBnZXRBbmRTZXQ8VD4oa2V5OiBzdHJpbmcsIG5ld1ZhbHVlPzogVCB8IFByb21pc2U8VD4gfCBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChuZXh0KSA9PiB7XG4gICAgICBuZXh0Lm5leHQodGhpcy5nZXRJdGVtKGtleSkpO1xuICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudVMucHJvbWlzaWZ5VmFsKG5ld1ZhbHVlKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNldEl0ZW0oa2V5LCByZXMpO1xuICAgICAgICAgIG5leHQubmV4dChyZXMpO1xuICAgICAgICAgIG5leHQuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgbmV4dC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=