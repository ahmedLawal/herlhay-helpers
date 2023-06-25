import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ModalFormTemplateComponent } from './modal-form-template/modal-form-template.component';
import { EPageType } from '../../models/index.model';
import * as i0 from "@angular/core";
export class ModalFormComponent {
    constructor() {
        this.width = '50%';
        this.onSaved = new EventEmitter();
    }
    ngAfterViewInit() {
        // if (this.modal) Object.assign(this.modal, this);
    }
    async openAsEdit(item) {
        this.prepareOpen(EPageType.editPage);
        await this.open(item);
        this.loading = false;
    }
    async openAsCreate(defaultData) {
        // debugger;
        this.prepareOpen(EPageType.createPage);
        await this.open(defaultData);
        this.loading = false;
    }
    async openAsView(item) {
        this.prepareOpen(EPageType.viewPage);
        await this.open(item);
        this.form.disable();
        this.loading = false;
    }
    prepareOpen(pageType) {
        this.loading = true;
        this.pageType = pageType;
        this._openForm();
    }
    _openForm() {
        this.modal.modal.open();
    }
    cancel() {
        this.form?.reset();
    }
    close() {
        this.modal.modal?.close();
        this.cancel();
    }
    async submit(fc, btn) {
        (btn ? btn : this).loading = true;
        try {
            fc?.reset();
            await this.submitFunction();
            this.onSaved.emit();
            this.close();
        }
        catch (error) {
            fc?.setErrorMessage(error);
        }
        (btn ? btn : this).loading = false;
    }
    get isCreate() {
        return this.pageType == EPageType.createPage;
    }
    get isEdit() {
        return this.pageType == EPageType.editPage;
    }
    get isShow() {
        return this.pageType == EPageType.viewPage;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ModalFormComponent, isStandalone: true, selector: "modal-form", outputs: { onSaved: "onSaved" }, viewQueries: [{ propertyName: "modal", first: true, predicate: ModalFormTemplateComponent, descendants: true }], ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal-form', standalone: true, template: "" }]
        }], propDecorators: { onSaved: [{
                type: Output
            }], modal: [{
                type: ViewChild,
                args: [ModalFormTemplateComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC1mb3JtL21vZGFsLWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwtZm9ybS9tb2RhbC1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLE1BQU0sRUFDcEIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFRckQsTUFBTSxPQUFPLGtCQUFrQjtJQU4vQjtRQWNFLFVBQUssR0FBVyxLQUFLLENBQUM7UUFHWixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztLQXdFL0M7SUE5REMsZUFBZTtRQUNiLG1EQUFtRDtJQUNyRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFXO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFZO1FBQzdCLFlBQVk7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBVztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU8sV0FBVyxDQUFDLFFBQW1CO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUF5QixFQUFFLEdBQWtCO1FBQ3hELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSTtZQUNGLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUNaLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLEVBQUUsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQzdDLENBQUM7OEdBbEZVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLDhJQWFsQiwwQkFBMEIsZ0RDL0J2QyxFQUFBOzsyRkRrQmEsa0JBQWtCO2tCQU45QixTQUFTOytCQUNJLFlBQVksY0FHVixJQUFJOzhCQWFSLE9BQU87c0JBQWhCLE1BQU07Z0JBRWdDLEtBQUs7c0JBQTNDLFNBQVM7dUJBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7IFxuaW1wb3J0IHsgQnRuQ29tcG9uZW50IH0gZnJvbSAnLi4vYnRuL2J0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVlZGJhY2tDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVlZGJhY2stY2FyZC9mZWVkYmFjay1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbEZvcm1UZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtZm9ybS10ZW1wbGF0ZS9tb2RhbC1mb3JtLXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJRm9ybVNjaGVtYSB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLXNjaGVtYS5tb2RlbCc7XG5pbXBvcnQgeyBFUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2RhbC1mb3JtLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb3JtQ29tcG9uZW50PFxuICBUSXRlbSxcbiAgVEZvcm0gZXh0ZW5kcyB7IFtLIGluIGtleW9mIFRGb3JtXTogQWJzdHJhY3RDb250cm9sPGFueSwgYW55PiB9ID0gYW55XG4+IHtcbiAgcGFnZVR5cGU6IEVQYWdlVHlwZTtcbiAgZm9ybTogRm9ybUdyb3VwPFRGb3JtPjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIHdpZHRoOiBzdHJpbmcgPSAnNTAlJztcbiAgZm9ybUZpZWxkczogSUZvcm1TY2hlbWFbXTtcblxuICBAT3V0cHV0KCkgb25TYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VEl0ZW0+KCk7XG5cbiAgQFZpZXdDaGlsZChNb2RhbEZvcm1UZW1wbGF0ZUNvbXBvbmVudCkgbW9kYWw6IE1vZGFsRm9ybVRlbXBsYXRlQ29tcG9uZW50PFxuICAgIFRJdGVtLFxuICAgIFRGb3JtXG4gID47XG5cbiAgcHJvdGVjdGVkIG9wZW46IChpdGVtPzogVEl0ZW0pID0+IFByb21pc2U8YW55PjtcbiAgcHJvdGVjdGVkIHN1Ym1pdEZ1bmN0aW9uOiAoKSA9PiBQcm9taXNlPGFueT47XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIGlmICh0aGlzLm1vZGFsKSBPYmplY3QuYXNzaWduKHRoaXMubW9kYWwsIHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgb3BlbkFzRWRpdChpdGVtOiBUSXRlbSkge1xuICAgIHRoaXMucHJlcGFyZU9wZW4oRVBhZ2VUeXBlLmVkaXRQYWdlKTtcbiAgICBhd2FpdCB0aGlzLm9wZW4oaXRlbSk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyBvcGVuQXNDcmVhdGUoZGVmYXVsdERhdGE/KSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgdGhpcy5wcmVwYXJlT3BlbihFUGFnZVR5cGUuY3JlYXRlUGFnZSk7XG4gICAgYXdhaXQgdGhpcy5vcGVuKGRlZmF1bHREYXRhKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5Bc1ZpZXcoaXRlbTogVEl0ZW0pIHtcbiAgICB0aGlzLnByZXBhcmVPcGVuKEVQYWdlVHlwZS52aWV3UGFnZSk7XG4gICAgYXdhaXQgdGhpcy5vcGVuKGl0ZW0pO1xuICAgIHRoaXMuZm9ybS5kaXNhYmxlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVPcGVuKHBhZ2VUeXBlOiBFUGFnZVR5cGUpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucGFnZVR5cGUgPSBwYWdlVHlwZTtcbiAgICB0aGlzLl9vcGVuRm9ybSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkZvcm0oKSB7XG4gICAgdGhpcy5tb2RhbC5tb2RhbC5vcGVuKCk7XG4gIH1cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuZm9ybT8ucmVzZXQoKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm1vZGFsLm1vZGFsPy5jbG9zZSgpO1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cblxuICBhc3luYyBzdWJtaXQoZmM6IEZlZWRiYWNrQ2FyZENvbXBvbmVudCwgYnRuPzogQnRuQ29tcG9uZW50KSB7XG4gICAgKGJ0biA/IGJ0biA6IHRoaXMpLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBmYz8ucmVzZXQoKTtcbiAgICAgIGF3YWl0IHRoaXMuc3VibWl0RnVuY3Rpb24oKTtcbiAgICAgIHRoaXMub25TYXZlZC5lbWl0KClcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZmM/LnNldEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgfVxuICAgIChidG4gPyBidG4gOiB0aGlzKS5sb2FkaW5nID0gZmFsc2U7XG4gIH1cbiAgZ2V0IGlzQ3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VUeXBlID09IEVQYWdlVHlwZS5jcmVhdGVQYWdlO1xuICB9XG4gIGdldCBpc0VkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZVR5cGUgPT0gRVBhZ2VUeXBlLmVkaXRQYWdlO1xuICB9XG4gIGdldCBpc1Nob3coKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZVR5cGUgPT0gRVBhZ2VUeXBlLnZpZXdQYWdlO1xuICB9XG59XG4iLCIiXX0=