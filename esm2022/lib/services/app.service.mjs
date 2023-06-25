import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HHenvironment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./api.service";
import * as i3 from "./storage.service";
export class AppService {
    get currentTopMenu() {
        return this._currentTopMenu;
    }
    set currentTopMenu(value) {
        this._currentTopMenu = value;
        // debugger
    }
    constructor(titleS, apiS, sS) {
        this.titleS = titleS;
        this.apiS = apiS;
        this.sS = sS;
        this.topMenu = HHenvironment.menus;
        this.setFullscreenMode = new BehaviorSubject(false);
        this.addTitle = (title) => {
            HHenvironment.pageTitle = title;
            this.titleS.setTitle((title ? title + ' | ' : '') +
                HHenvironment.appName +
                ' | ' +
                HHenvironment.name);
        };
    }
    setDefaultClass() { }
    //#region pagename
    get pageName() {
        return this._pageName;
    }
    set pageName(value) {
        this._pageName = value;
        this.addTitle(this._pageName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AppService, deps: [{ token: i1.Title }, { token: i2.ApiService }, { token: i3.StorageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AppService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Title }, { type: i2.ApiService }, { type: i3.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQUsvRCxNQUFNLE9BQU8sVUFBVTtJQUlyQixJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFlO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLFdBQVc7SUFDYixDQUFDO0lBR0QsWUFDUyxNQUFhLEVBQ2IsSUFBZ0IsRUFDaEIsRUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7UUFmM0IsWUFBTyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFVOUIsc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFrQnhELGFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMxQixhQUFhLENBQUMsT0FBTztnQkFDckIsS0FBSztnQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBcEJDLENBQUM7SUFHSixlQUFlLEtBQUksQ0FBQztJQUNwQixrQkFBa0I7SUFDbEIsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OEdBNUJVLFVBQVU7a0hBQVYsVUFBVSxjQUZULE1BQU07OzJGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL0lNZW51SXRlbSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhIZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIHRvcE1lbnUgPSBISGVudmlyb25tZW50Lm1lbnVzO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRUb3BNZW51OiBNZW51SXRlbTtcbiAgcHJvdGVjdGVkIF9wYWdlTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGN1cnJlbnRUb3BNZW51KCk6IE1lbnVJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRvcE1lbnU7XG4gIH1cbiAgcHVibGljIHNldCBjdXJyZW50VG9wTWVudSh2YWx1ZTogTWVudUl0ZW0pIHtcbiAgICB0aGlzLl9jdXJyZW50VG9wTWVudSA9IHZhbHVlO1xuICAgIC8vIGRlYnVnZ2VyXG4gIH1cbiAgc2V0RnVsbHNjcmVlbk1vZGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGl0bGVTOiBUaXRsZSxcbiAgICBwdWJsaWMgYXBpUzogQXBpU2VydmljZSxcbiAgICBwdWJsaWMgc1M6IFN0b3JhZ2VTZXJ2aWNlXG4gICkge31cbiBcblxuICBzZXREZWZhdWx0Q2xhc3MoKSB7fVxuICAvLyNyZWdpb24gcGFnZW5hbWVcbiAgZ2V0IHBhZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlTmFtZTtcbiAgfVxuICBzZXQgcGFnZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhZ2VOYW1lID0gdmFsdWU7XG4gICAgdGhpcy5hZGRUaXRsZSh0aGlzLl9wYWdlTmFtZSk7XG4gIH1cbiAgYWRkVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICBISGVudmlyb25tZW50LnBhZ2VUaXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGl0bGVTLnNldFRpdGxlKFxuICAgICAgKHRpdGxlID8gdGl0bGUgKyAnIHwgJyA6ICcnKSArXG4gICAgICAgIEhIZW52aXJvbm1lbnQuYXBwTmFtZSArXG4gICAgICAgICcgfCAnICtcbiAgICAgICAgSEhlbnZpcm9ubWVudC5uYW1lXG4gICAgKTtcbiAgfTtcbiAgLy8jZW5kcmVnaW9uXG59XG4iXX0=