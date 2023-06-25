import { Injectable } from '@angular/core';
import { HHenvironment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class MultiTenantInterceptorService {
    constructor(router) {
        this.router = router;
        this.activeSubdomainSite = 'localhost';
        this.whiteList = ['localhost', 'payer', 'www', 'orange-dev'];
        this.getActiveSite = () => {
            if (HHenvironment.activeSubdomainSite) {
                this.activeSubdomainSite = HHenvironment.activeSubdomainSite;
            }
            let url = location.hostname;
            url = url.split('www.').filter((x) => x)[0];
            url = url.split('iras.ng')[0];
            url = url.split('.')[0];
            if (url?.length > 0)
                this.activeSubdomainSite = url;
            else
                this.activeSubdomainSite = null;
            this.activeSubdomainSite = this.activeSubdomainSite?.toLowerCase();
            return this.activeSubdomainSite;
        };
        // intercept = () => {
        //   this.getActiveSite();
        // };
        this.isClientAdminSubdomain = () => {
            this.getActiveSite();
            return this.activeSubdomainSite
                ? !this.whiteList.includes(this.activeSubdomainSite)
                : false;
        };
        this.canViewGeneralSite = () => {
            // debugger;
            this.getActiveSite();
            if (!this.activeSubdomainSite ||
                this.whiteList.includes(this.activeSubdomainSite))
                return true;
            else {
                this.router.navigateByUrl('/dashboard');
                return false;
            }
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MultiTenantInterceptorService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MultiTenantInterceptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MultiTenantInterceptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktdGVuYW50LWludGVyY2VwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9tdWx0aS10ZW5hbnQtaW50ZXJjZXB0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBSy9ELE1BQU0sT0FBTyw2QkFBNkI7SUFJeEMsWUFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIakMsd0JBQW1CLEdBQUcsV0FBVyxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBSXZELGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksYUFBYSxDQUFDLG1CQUFtQixFQUFFO2dCQUNyQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDO2FBQzlEO1lBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM1QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7O2dCQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDbkUsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBRUYsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixLQUFLO1FBRUwsMkJBQXNCLEdBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQyxtQkFBbUI7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNaLENBQUMsQ0FBQztRQUNGLHVCQUFrQixHQUFHLEdBQUcsRUFBRTtZQUN4QixZQUFZO1lBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQ0UsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO2dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBRWpELE9BQU8sSUFBSSxDQUFDO2lCQUNUO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDO0lBdENrQyxDQUFDOzhHQUoxQiw2QkFBNkI7a0hBQTdCLDZCQUE2QixjQUY1QixNQUFNOzsyRkFFUCw2QkFBNkI7a0JBSHpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhIZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlUZW5hbnRJbnRlcmNlcHRvclNlcnZpY2Uge1xuICBhY3RpdmVTdWJkb21haW5TaXRlID0gJ2xvY2FsaG9zdCc7XG4gIHdoaXRlTGlzdCA9IFsnbG9jYWxob3N0JywgJ3BheWVyJywgJ3d3dycsJ29yYW5nZS1kZXYnXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgZ2V0QWN0aXZlU2l0ZSA9ICgpID0+IHtcbiAgICBpZiAoSEhlbnZpcm9ubWVudC5hY3RpdmVTdWJkb21haW5TaXRlKSB7XG4gICAgICB0aGlzLmFjdGl2ZVN1YmRvbWFpblNpdGUgPSBISGVudmlyb25tZW50LmFjdGl2ZVN1YmRvbWFpblNpdGU7XG4gICAgfVxuICAgIGxldCB1cmwgPSBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICB1cmwgPSB1cmwuc3BsaXQoJ3d3dy4nKS5maWx0ZXIoKHgpID0+IHgpWzBdO1xuICAgIHVybCA9IHVybC5zcGxpdCgnaXJhcy5uZycpWzBdO1xuICAgIHVybCA9IHVybC5zcGxpdCgnLicpWzBdO1xuICAgIGlmICh1cmw/Lmxlbmd0aCA+IDApIHRoaXMuYWN0aXZlU3ViZG9tYWluU2l0ZSA9IHVybDtcbiAgICBlbHNlIHRoaXMuYWN0aXZlU3ViZG9tYWluU2l0ZSA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVTdWJkb21haW5TaXRlID0gdGhpcy5hY3RpdmVTdWJkb21haW5TaXRlPy50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN1YmRvbWFpblNpdGU7XG4gIH07XG5cbiAgLy8gaW50ZXJjZXB0ID0gKCkgPT4ge1xuICAvLyAgIHRoaXMuZ2V0QWN0aXZlU2l0ZSgpO1xuICAvLyB9O1xuXG4gIGlzQ2xpZW50QWRtaW5TdWJkb21haW4gPSAoKSA9PiB7XG4gICAgdGhpcy5nZXRBY3RpdmVTaXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlU3ViZG9tYWluU2l0ZVxuICAgICAgPyAhdGhpcy53aGl0ZUxpc3QuaW5jbHVkZXModGhpcy5hY3RpdmVTdWJkb21haW5TaXRlKVxuICAgICAgOiBmYWxzZTtcbiAgfTtcbiAgY2FuVmlld0dlbmVyYWxTaXRlID0gKCkgPT4ge1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIHRoaXMuZ2V0QWN0aXZlU2l0ZSgpO1xuICAgIGlmIChcbiAgICAgICF0aGlzLmFjdGl2ZVN1YmRvbWFpblNpdGUgfHxcbiAgICAgIHRoaXMud2hpdGVMaXN0LmluY2x1ZGVzKHRoaXMuYWN0aXZlU3ViZG9tYWluU2l0ZSlcbiAgICApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9kYXNoYm9hcmQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=