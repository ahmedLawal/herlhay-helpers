import { Component } from '@angular/core';
import { EPageType } from '../../models/index.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class PageTemplateComponent {
    constructor(route) {
        this.route = route;
        this.pageType = this.route?.snapshot?.data['type'];
    }
    setAsIndex() {
        this.pageType = EPageType.indexPage;
    }
    setAsClone() {
        this.pageType = EPageType.clonePage;
    }
    setAsCreate() {
        this.pageType = EPageType.createPage;
    }
    setAsEdit() {
        this.pageType = EPageType.editPage;
    }
    setAsShow() {
        this.pageType = EPageType.viewPage;
    }
    get isClone() {
        return (this.route?.snapshot?.data['type'] === EPageType.clonePage ||
            this.pageType === EPageType.clonePage);
    }
    get isCreate() {
        return (this.route?.snapshot?.data['type'] === EPageType.createPage ||
            this.pageType === EPageType.createPage);
    }
    get isEdit() {
        return (this.route?.snapshot?.data['type'] === EPageType.editPage ||
            this.pageType === EPageType.editPage);
    }
    get isIndex() {
        return (this.route?.snapshot?.data['type'] === EPageType.indexPage ||
            this.pageType === EPageType.indexPage);
    }
    get isShow() {
        return (this.route?.snapshot?.data['type'] === EPageType.viewPage ||
            this.pageType === EPageType.viewPage);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PageTemplateComponent, deps: [{ token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: PageTemplateComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PageTemplateComponent, decorators: [{
            type: Component,
            args: [{
                    template: ``,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9wYWdlLXRlbXBsYXRlL3BhZ2UtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBRy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBTXJELE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsWUFBbUIsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLFNBQVM7WUFDMUQsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsU0FBUyxDQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLFVBQVU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsVUFBVSxDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLFFBQVE7WUFDekQsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxDQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLFNBQVM7WUFDMUQsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsU0FBUyxDQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLFFBQVE7WUFDekQsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxDQUNyQyxDQUFDO0lBQ0osQ0FBQzs4R0FuRFUscUJBQXFCO2tHQUFyQixxQkFBcUIsd0VBSHBCLEVBQUU7OzJGQUdILHFCQUFxQjtrQkFKakMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBFUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVRlbXBsYXRlQ29tcG9uZW50PE1vZGVsRGF0YSA9IGFueT4ge1xuICBwYWdlVHlwZTogRVBhZ2VUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLnBhZ2VUeXBlID0gdGhpcy5yb3V0ZT8uc25hcHNob3Q/LmRhdGFbJ3R5cGUnXTtcbiAgfVxuXG4gIHNldEFzSW5kZXgoKSB7XG4gICAgdGhpcy5wYWdlVHlwZSA9IEVQYWdlVHlwZS5pbmRleFBhZ2U7XG4gIH1cbiAgc2V0QXNDbG9uZSgpIHtcbiAgICB0aGlzLnBhZ2VUeXBlID0gRVBhZ2VUeXBlLmNsb25lUGFnZTtcbiAgfVxuICBzZXRBc0NyZWF0ZSgpIHtcbiAgICB0aGlzLnBhZ2VUeXBlID0gRVBhZ2VUeXBlLmNyZWF0ZVBhZ2U7XG4gIH1cbiAgc2V0QXNFZGl0KCkge1xuICAgIHRoaXMucGFnZVR5cGUgPSBFUGFnZVR5cGUuZWRpdFBhZ2U7XG4gIH1cbiAgc2V0QXNTaG93KCkge1xuICAgIHRoaXMucGFnZVR5cGUgPSBFUGFnZVR5cGUudmlld1BhZ2U7XG4gIH1cbiAgZ2V0IGlzQ2xvbmUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucm91dGU/LnNuYXBzaG90Py5kYXRhWyd0eXBlJ10gPT09IEVQYWdlVHlwZS5jbG9uZVBhZ2UgfHxcbiAgICAgIHRoaXMucGFnZVR5cGUgPT09IEVQYWdlVHlwZS5jbG9uZVBhZ2VcbiAgICApO1xuICB9XG4gIGdldCBpc0NyZWF0ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5yb3V0ZT8uc25hcHNob3Q/LmRhdGFbJ3R5cGUnXSA9PT0gRVBhZ2VUeXBlLmNyZWF0ZVBhZ2UgfHxcbiAgICAgIHRoaXMucGFnZVR5cGUgPT09IEVQYWdlVHlwZS5jcmVhdGVQYWdlXG4gICAgKTtcbiAgfVxuICBnZXQgaXNFZGl0KCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJvdXRlPy5zbmFwc2hvdD8uZGF0YVsndHlwZSddID09PSBFUGFnZVR5cGUuZWRpdFBhZ2UgfHxcbiAgICAgIHRoaXMucGFnZVR5cGUgPT09IEVQYWdlVHlwZS5lZGl0UGFnZVxuICAgICk7XG4gIH1cbiAgZ2V0IGlzSW5kZXgoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucm91dGU/LnNuYXBzaG90Py5kYXRhWyd0eXBlJ10gPT09IEVQYWdlVHlwZS5pbmRleFBhZ2UgfHxcbiAgICAgIHRoaXMucGFnZVR5cGUgPT09IEVQYWdlVHlwZS5pbmRleFBhZ2VcbiAgICApO1xuICB9XG4gIGdldCBpc1Nob3coKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucm91dGU/LnNuYXBzaG90Py5kYXRhWyd0eXBlJ10gPT09IEVQYWdlVHlwZS52aWV3UGFnZSB8fFxuICAgICAgdGhpcy5wYWdlVHlwZSA9PT0gRVBhZ2VUeXBlLnZpZXdQYWdlXG4gICAgKTtcbiAgfVxufVxuIl19