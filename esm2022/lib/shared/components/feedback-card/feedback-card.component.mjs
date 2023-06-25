import { Component, Input, ViewChild, } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class FeedbackCardComponent {
    constructor() {
        this.defaultStatus = 0;
        /** 0 - indicates error 1 - indicates success 2 - indicates info */
        this.status = this.defaultStatus;
    }
    ngOnInit() { }
    reset() {
        this.message = null;
        this.status = this.defaultStatus;
    }
    setErrorMessage(message) {
        if (!message)
            return;
        if (typeof message != 'string')
            console.log(message);
        this.message = typeof message == 'string' ? message : 'An error occurred';
        this.status = 0;
        this.elRef?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FeedbackCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: FeedbackCardComponent, isStandalone: true, selector: "feedback-card", inputs: { class: "class", message: "message", status: "status" }, viewQueries: [{ propertyName: "elRef", first: true, predicate: ["el"], descendants: true }], ngImport: i0, template: "<div #el>\n    <div class=\"case status-{{status}} {{class}}\" *ngIf=\"message\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-auto text-danger\"> \n          <svg-icon icon=\"error\"></svg-icon>\n        </div>\n        <div class=\"col\" [innerHTML]=\"message\">\n        </div>\n      </div>\n    </div>\n</div>\n", styles: [".case{border-radius:8px;width:100%;font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin:20px auto;padding:20px;color:#333}.case.status-0{background:#ffe7e7}.case.status-0 .icon{color:#e80000}.case.status-1{background:#e7ffec}.case.status-1 .icon{color:#00e842}.case.status-2{background:#e7fbff}.case.status-2 .icon{color:#008fe8}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FeedbackCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'feedback-card', standalone: true, imports: [NgIf, SvgIconComponent], template: "<div #el>\n    <div class=\"case status-{{status}} {{class}}\" *ngIf=\"message\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-auto text-danger\"> \n          <svg-icon icon=\"error\"></svg-icon>\n        </div>\n        <div class=\"col\" [innerHTML]=\"message\">\n        </div>\n      </div>\n    </div>\n</div>\n", styles: [".case{border-radius:8px;width:100%;font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin:20px auto;padding:20px;color:#333}.case.status-0{background:#ffe7e7}.case.status-0 .icon{color:#e80000}.case.status-1{background:#e7ffec}.case.status-1 .icon{color:#00e842}.case.status-2{background:#e7fbff}.case.status-2 .icon{color:#008fe8}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { class: [{
                type: Input
            }], message: [{
                type: Input
            }], status: [{
                type: Input
            }], elRef: [{
                type: ViewChild,
                args: ['el']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9mZWVkYmFjay1jYXJkL2ZlZWRiYWNrLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvZmVlZGJhY2stY2FyZC9mZWVkYmFjay1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBU3ZDLE1BQU0sT0FBTyxxQkFBcUI7SUFRaEM7UUFMUSxrQkFBYSxHQUFRLENBQUMsQ0FBQztRQUMvQixtRUFBbUU7UUFDMUQsV0FBTSxHQUFjLElBQUksQ0FBQyxhQUFhLENBQUM7SUFHakMsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlLENBQUMsT0FBZTtRQUM3QixJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDckIsSUFBSSxPQUFPLE9BQU8sSUFBSSxRQUFRO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDOzhHQXZCVSxxQkFBcUI7a0dBQXJCLHFCQUFxQix3T0NsQmxDLHlWQVdBLHlaREtjLElBQUksNkZBQUUsZ0JBQWdCOzsyRkFFdkIscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNJLGVBQWUsY0FHYixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUM7MEVBRzFCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBR0csTUFBTTtzQkFBZCxLQUFLO2dCQUVXLEtBQUs7c0JBQXJCLFNBQVM7dUJBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdmdJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZlZWRiYWNrLWNhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mZWVkYmFjay1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9mZWVkYmFjay1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbTmdJZiwgU3ZnSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBkZWZhdWx0U3RhdHVzOiBhbnkgPSAwO1xuICAvKiogMCAtIGluZGljYXRlcyBlcnJvciAxIC0gaW5kaWNhdGVzIHN1Y2Nlc3MgMiAtIGluZGljYXRlcyBpbmZvICovXG4gIEBJbnB1dCgpIHN0YXR1czogMCB8IDEgfCAyID0gdGhpcy5kZWZhdWx0U3RhdHVzO1xuXG4gIEBWaWV3Q2hpbGQoJ2VsJykgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmRlZmF1bHRTdGF0dXM7XG4gIH1cblxuICBzZXRFcnJvck1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgaWYgKCFtZXNzYWdlKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9ICdzdHJpbmcnKSBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0eXBlb2YgbWVzc2FnZSA9PSAnc3RyaW5nJyA/IG1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnO1xuICAgIHRoaXMuc3RhdHVzID0gMDtcbiAgICB0aGlzLmVsUmVmPy5uYXRpdmVFbGVtZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxufVxuIiwiPGRpdiAjZWw+XG4gICAgPGRpdiBjbGFzcz1cImNhc2Ugc3RhdHVzLXt7c3RhdHVzfX0ge3tjbGFzc319XCIgKm5nSWY9XCJtZXNzYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gdGV4dC1kYW5nZXJcIj4gXG4gICAgICAgICAgPHN2Zy1pY29uIGljb249XCJlcnJvclwiPjwvc3ZnLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgW2lubmVySFRNTF09XCJtZXNzYWdlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==