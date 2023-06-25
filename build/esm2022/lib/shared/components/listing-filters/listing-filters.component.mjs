import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { hideMobileDirective } from '../../directives/responsiveness.directive';
import { BtnComponent } from '../btn/btn.component';
import * as i0 from "@angular/core";
export class ListingFiltersComponent {
    set _form(v) {
        this.form = v;
        this.formClone = new FormGroup({});
        for (const key in v.controls) {
            if (Object.prototype.hasOwnProperty.call(v.controls, key)) {
                const element = v.controls[key];
                this.formClone.addControl(key, element);
            }
        }
    }
    constructor() { }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    ngOnDestroy() { }
    close(noAction) {
        // debugger
        if (noAction)
            return;
        this.modalRef.close();
        this.formClone?.reset(this.form?.value, { emitEvent: false });
    }
    clear() {
        this.formClone?.reset();
        this.form?.reset();
        this.modalRef.close(true);
    }
    search() {
        this.modalRef.close(true);
        this.form?.patchValue(this.formClone?.value);
    }
    refresh() {
        this.search();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ListingFiltersComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ListingFiltersComponent, isStandalone: true, selector: "lib-listing-filters", inputs: { _form: ["form", "_form"] }, viewQueries: [{ propertyName: "modalRef", first: true, predicate: ["modal"], descendants: true }], ngImport: i0, template: "<div class=\"row row-cols-auto listing-filters-btn\">\n    <app-btn text=\"Filters\" icon=\"filter\" type=\"outline-nm\" (mclick)=\"modal.open()\" />\n    <app-btn hideMobile  icon=\"refresh\" type=\"outline\" (mclick)=\"refresh()\" />\n</div>\n<modal-comp width=\"80%\" header=\"Filters\" #modal (onClose)=\"close($event)\">\n    <div class=\"\" body>\n        <ng-content body></ng-content>\n        <div class=\"mt-16 row row-cols-lg-auto justify-content-between form-grid\">\n            <div class=\"col order-1 order-lg-0\">\n                <app-btn text=\"Clear\" type=\"outline-nm\" (mclick)=\"clear()\" />\n            </div>\n            <div class=\"col\">\n                <app-btn text=\"Search\" [form]=\"formClone\" (mclick)=\"search()\" />\n            </div>\n        </div>\n    </div>\n\n</modal-comp>", styles: ["::ng-deep .listing-filters-btn button{border:1px solid #828282!important;color:#828282!important;text-align:start!important}::ng-deep .listing-filters-btn button:hover,::ng-deep .listing-filters-btn button:focus,::ng-deep .listing-filters-btn button:active{color:#fff!important;border-color:#fff!important}\n"], dependencies: [{ kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "directive", type: hideMobileDirective, selector: "[hideMobile]" }, { kind: "component", type: ModalComponent, selector: "modal-comp", inputs: ["showHeader", "header", "loading", "width", "height", "data"], outputs: ["onClose"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ListingFiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-listing-filters', standalone: true, imports: [
                        BtnComponent,
                        hideMobileDirective,
                        ModalComponent,
                    ], template: "<div class=\"row row-cols-auto listing-filters-btn\">\n    <app-btn text=\"Filters\" icon=\"filter\" type=\"outline-nm\" (mclick)=\"modal.open()\" />\n    <app-btn hideMobile  icon=\"refresh\" type=\"outline\" (mclick)=\"refresh()\" />\n</div>\n<modal-comp width=\"80%\" header=\"Filters\" #modal (onClose)=\"close($event)\">\n    <div class=\"\" body>\n        <ng-content body></ng-content>\n        <div class=\"mt-16 row row-cols-lg-auto justify-content-between form-grid\">\n            <div class=\"col order-1 order-lg-0\">\n                <app-btn text=\"Clear\" type=\"outline-nm\" (mclick)=\"clear()\" />\n            </div>\n            <div class=\"col\">\n                <app-btn text=\"Search\" [form]=\"formClone\" (mclick)=\"search()\" />\n            </div>\n        </div>\n    </div>\n\n</modal-comp>", styles: ["::ng-deep .listing-filters-btn button{border:1px solid #828282!important;color:#828282!important;text-align:start!important}::ng-deep .listing-filters-btn button:hover,::ng-deep .listing-filters-btn button:focus,::ng-deep .listing-filters-btn button:active{color:#fff!important;border-color:#fff!important}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { _form: [{
                type: Input,
                args: ['form']
            }], modalRef: [{
                type: ViewChild,
                args: ['modal']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2xpc3RpbmctZmlsdGVycy9saXN0aW5nLWZpbHRlcnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvbGlzdGluZy1maWx0ZXJzL2xpc3RpbmctZmlsdGVycy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFtQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQWFwRCxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLElBQW1CLEtBQUssQ0FBQyxDQUFZO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDekQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7SUFDSCxDQUFDO0lBR0QsZ0JBQWUsQ0FBQztJQUNoQixRQUFRO1FBQ04saUdBQWlHO1FBQ2pHLHVDQUF1QztJQUN6QyxDQUFDO0lBQ0QsV0FBVyxLQUFVLENBQUM7SUFDdEIsS0FBSyxDQUFDLFFBQWtCO1FBQ3RCLFdBQVc7UUFDWCxJQUFJLFFBQVE7WUFBRSxPQUFPO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFZLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs4R0FyQ1UsdUJBQXVCO2tHQUF2Qix1QkFBdUIsd05DbkJwQyx1ekJBaUJhLDhXREhMLFlBQVksbVVBQ1osbUJBQW1CLHlEQUNuQixjQUFjOzsyRkFHVCx1QkFBdUI7a0JBWG5DLFNBQVM7K0JBQ0kscUJBQXFCLGNBR25CLElBQUksV0FDUDt3QkFDTCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsY0FBYztxQkFDakI7MEVBSWdCLEtBQUs7c0JBQXZCLEtBQUs7dUJBQUMsTUFBTTtnQkFXTyxRQUFRO3NCQUEzQixTQUFTO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY2xvbmUsIGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IGhpZGVNb2JpbGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc3BvbnNpdmVuZXNzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCdG5Db21wb25lbnQgfSBmcm9tICcuLi9idG4vYnRuLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWxpc3RpbmctZmlsdGVycycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctZmlsdGVycy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1maWx0ZXJzLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJ0bkNvbXBvbmVudCxcbiAgICAgICAgaGlkZU1vYmlsZURpcmVjdGl2ZSxcbiAgICAgICAgTW9kYWxDb21wb25lbnQsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0ZpbHRlcnNDb21wb25lbnQge1xuICBmb3JtOiBGb3JtR3JvdXA8YW55PjtcbiAgQElucHV0KCdmb3JtJykgc2V0IF9mb3JtKHY6IEZvcm1Hcm91cCkge1xuICAgIHRoaXMuZm9ybSA9IHY7XG4gICAgdGhpcy5mb3JtQ2xvbmUgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2LmNvbnRyb2xzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHYuY29udHJvbHMsIGtleSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHYuY29udHJvbHNba2V5XTtcbiAgICAgICAgdGhpcy5mb3JtQ2xvbmUuYWRkQ29udHJvbChrZXksIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3JtQ2xvbmU6IEZvcm1Hcm91cDtcbiAgQFZpZXdDaGlsZCgnbW9kYWwnKSBtb2RhbFJlZjogTW9kYWxDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cbiAgY2xvc2Uobm9BY3Rpb24/OiBib29sZWFuKSB7XG4gICAgLy8gZGVidWdnZXJcbiAgICBpZiAobm9BY3Rpb24pIHJldHVybjtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gICAgdGhpcy5mb3JtQ2xvbmU/LnJlc2V0KHRoaXMuZm9ybT8udmFsdWUgYXMgYW55LCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5mb3JtQ2xvbmU/LnJlc2V0KCk7XG4gICAgdGhpcy5mb3JtPy5yZXNldCgpO1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UodHJ1ZSk7XG4gIH1cbiAgc2VhcmNoKCkge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UodHJ1ZSk7XG4gICAgdGhpcy5mb3JtPy5wYXRjaFZhbHVlKHRoaXMuZm9ybUNsb25lPy52YWx1ZSk7XG4gIH1cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNlYXJjaCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicm93IHJvdy1jb2xzLWF1dG8gbGlzdGluZy1maWx0ZXJzLWJ0blwiPlxuICAgIDxhcHAtYnRuIHRleHQ9XCJGaWx0ZXJzXCIgaWNvbj1cImZpbHRlclwiIHR5cGU9XCJvdXRsaW5lLW5tXCIgKG1jbGljayk9XCJtb2RhbC5vcGVuKClcIiAvPlxuICAgIDxhcHAtYnRuIGhpZGVNb2JpbGUgIGljb249XCJyZWZyZXNoXCIgdHlwZT1cIm91dGxpbmVcIiAobWNsaWNrKT1cInJlZnJlc2goKVwiIC8+XG48L2Rpdj5cbjxtb2RhbC1jb21wIHdpZHRoPVwiODAlXCIgaGVhZGVyPVwiRmlsdGVyc1wiICNtb2RhbCAob25DbG9zZSk9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgPGRpdiBjbGFzcz1cIlwiIGJvZHk+XG4gICAgICAgIDxuZy1jb250ZW50IGJvZHk+PC9uZy1jb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTYgcm93IHJvdy1jb2xzLWxnLWF1dG8ganVzdGlmeS1jb250ZW50LWJldHdlZW4gZm9ybS1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG9yZGVyLTEgb3JkZXItbGctMFwiPlxuICAgICAgICAgICAgICAgIDxhcHAtYnRuIHRleHQ9XCJDbGVhclwiIHR5cGU9XCJvdXRsaW5lLW5tXCIgKG1jbGljayk9XCJjbGVhcigpXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxhcHAtYnRuIHRleHQ9XCJTZWFyY2hcIiBbZm9ybV09XCJmb3JtQ2xvbmVcIiAobWNsaWNrKT1cInNlYXJjaCgpXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC9tb2RhbC1jb21wPiJdfQ==