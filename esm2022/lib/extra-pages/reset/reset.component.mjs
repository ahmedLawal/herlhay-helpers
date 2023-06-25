import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/components/btn/btn.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/service-worker/service-worker.service";
export class ResetComponent {
    constructor(swService) {
        this.swService = swService;
    }
    ngOnInit() {
        // if(this.swService.puS.)
        this.getUpdates();
    }
    clearCache() {
        this.loading = true;
        if ('caches' in window) {
            caches.keys().then((names) => {
                names.forEach(async (name) => {
                    await caches.delete(name);
                });
            });
        }
        location.href = '/';
    }
    getUpdates() {
        this.loading = true;
        this.swService.getUpdates(() => {
            this.loading = false;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResetComponent, deps: [{ token: i1.ServiceWorkerService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ResetComponent, isStandalone: true, selector: "app-reset", ngImport: i0, template: "<loader [loading]=\"loading\" text=\"Resetting\">\n\n  <div class=\"center vh-100\">\n      <div class=\"gy-2 justify-content-center row row-cols-md-6 w-100\">\n        <app-btn text=\"Get Updates\" customIcon=\"fas fa-download\" (mclick)=\"getUpdates()\"></app-btn>\n        <!-- <app-btn text=\"Clear Cache\" customIcon=\"fas fa-refresh\" (mclick)=\"clearCache()\"></app-btn> -->\n      </div>\n  </div>\n</loader>\n", styles: [".vh-100{height:100vh}.center{display:flex;justify-content:center;align-items:center}\n"], dependencies: [{ kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-reset', standalone: true, imports: [LoaderComponent, BtnComponent], template: "<loader [loading]=\"loading\" text=\"Resetting\">\n\n  <div class=\"center vh-100\">\n      <div class=\"gy-2 justify-content-center row row-cols-md-6 w-100\">\n        <app-btn text=\"Get Updates\" customIcon=\"fas fa-download\" (mclick)=\"getUpdates()\"></app-btn>\n        <!-- <app-btn text=\"Clear Cache\" customIcon=\"fas fa-refresh\" (mclick)=\"clearCache()\"></app-btn> -->\n      </div>\n  </div>\n</loader>\n", styles: [".vh-100{height:100vh}.center{display:flex;justify-content:center;align-items:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ServiceWorkerService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvZXh0cmEtcGFnZXMvcmVzZXQvcmVzZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvZXh0cmEtcGFnZXMvcmVzZXQvcmVzZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7QUFVbEYsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFBb0IsU0FBK0I7UUFBL0IsY0FBUyxHQUFULFNBQVMsQ0FBc0I7SUFBRyxDQUFDO0lBRXZELFFBQVE7UUFDTiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFDRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7b0JBQzNCLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQXhCVSxjQUFjO2tHQUFkLGNBQWMscUVDWjNCLG9hQVNBLGdKRENjLGVBQWUsaUhBQUUsWUFBWTs7MkZBRTlCLGNBQWM7a0JBUDFCLFNBQVM7K0JBQ0ksV0FBVyxjQUdULElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyBcbmltcG9ydCB7IEJ0bkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2J0bi9idG4uY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlcnZpY2VXb3JrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VydmljZS13b3JrZXIvc2VydmljZS13b3JrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXJlc2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVzZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Jlc2V0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbTG9hZGVyQ29tcG9uZW50LCBCdG5Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3dTZXJ2aWNlOiBTZXJ2aWNlV29ya2VyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBpZih0aGlzLnN3U2VydmljZS5wdVMuKVxuICAgIHRoaXMuZ2V0VXBkYXRlcygpXG4gIH1cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICgnY2FjaGVzJyBpbiB3aW5kb3cpIHtcbiAgICAgIGNhY2hlcy5rZXlzKCkudGhlbigobmFtZXMpID0+IHtcbiAgICAgICAgbmFtZXMuZm9yRWFjaChhc3luYyAobmFtZSkgPT4ge1xuICAgICAgICAgIGF3YWl0IGNhY2hlcy5kZWxldGUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gIH1cbiAgZ2V0VXBkYXRlcygpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc3dTZXJ2aWNlLmdldFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxsb2FkZXIgW2xvYWRpbmddPVwibG9hZGluZ1wiIHRleHQ9XCJSZXNldHRpbmdcIj5cblxuICA8ZGl2IGNsYXNzPVwiY2VudGVyIHZoLTEwMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImd5LTIganVzdGlmeS1jb250ZW50LWNlbnRlciByb3cgcm93LWNvbHMtbWQtNiB3LTEwMFwiPlxuICAgICAgICA8YXBwLWJ0biB0ZXh0PVwiR2V0IFVwZGF0ZXNcIiBjdXN0b21JY29uPVwiZmFzIGZhLWRvd25sb2FkXCIgKG1jbGljayk9XCJnZXRVcGRhdGVzKClcIj48L2FwcC1idG4+XG4gICAgICAgIDwhLS0gPGFwcC1idG4gdGV4dD1cIkNsZWFyIENhY2hlXCIgY3VzdG9tSWNvbj1cImZhcyBmYS1yZWZyZXNoXCIgKG1jbGljayk9XCJjbGVhckNhY2hlKClcIj48L2FwcC1idG4+IC0tPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9sb2FkZXI+XG4iXX0=