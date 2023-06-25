import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class InfoIconComponent {
    constructor() {
        this.coloured = true;
        this.left = false;
        this.right = true;
    }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InfoIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: InfoIconComponent, isStandalone: true, selector: "info-icon", inputs: { text: "text", coloured: "coloured", left: "left", right: "right" }, ngImport: i0, template: "<span class=\"d-flex align-items-center\">\n  <ng-container *ngIf=\"left && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"right && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n</span>\n\n\n<ng-template #iconTag>\n  <i class=\"fa fa-info-circle\" [matTooltip]=\"text\" matTooltipClass=\" \"></i>\n</ng-template>", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InfoIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'info-icon', standalone: true, imports: [
                        NgIf,
                        NgTemplateOutlet,
                        MatTooltipModule,
                    ], template: "<span class=\"d-flex align-items-center\">\n  <ng-container *ngIf=\"left && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"right && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n</span>\n\n\n<ng-template #iconTag>\n  <i class=\"fa fa-info-circle\" [matTooltip]=\"text\" matTooltipClass=\" \"></i>\n</ng-template>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { text: [{
                type: Input
            }], coloured: [{
                type: Input
            }], left: [{
                type: Input
            }], right: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2luZm8taWNvbi9pbmZvLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaW5mby1pY29uL2luZm8taWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWF6RCxNQUFNLE9BQU8saUJBQWlCO0lBSzVCO1FBSFMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixTQUFJLEdBQUUsS0FBSyxDQUFDO1FBQ1osVUFBSyxHQUFHLElBQUksQ0FBQztJQUNQLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7OEdBUFIsaUJBQWlCO2tHQUFqQixpQkFBaUIsbUpDZjlCLDRjQWFjLDBEREhOLElBQUksNkZBQ0osZ0JBQWdCLG1KQUNoQixnQkFBZ0I7OzJGQUdYLGlCQUFpQjtrQkFYN0IsU0FBUzsrQkFDSSxXQUFXLGNBR1QsSUFBSSxXQUNQO3dCQUNMLElBQUk7d0JBQ0osZ0JBQWdCO3dCQUNoQixnQkFBZ0I7cUJBQ25COzBFQUdNLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE5nSWYsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2luZm8taWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2luZm8taWNvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW5mby1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5nSWYsXG4gICAgICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5mb0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG91cmVkID0gdHJ1ZTtcbiAgQElucHV0KCkgbGVmdCA9ZmFsc2U7XG4gIEBJbnB1dCgpIHJpZ2h0ID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiIsIjxzcGFuIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibGVmdCAmJiB0ZXh0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImljb25UYWdcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJpZ2h0ICYmIHRleHRcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaWNvblRhZ1wiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvc3Bhbj5cblxuXG48bmctdGVtcGxhdGUgI2ljb25UYWc+XG4gIDxpIGNsYXNzPVwiZmEgZmEtaW5mby1jaXJjbGVcIiBbbWF0VG9vbHRpcF09XCJ0ZXh0XCIgbWF0VG9vbHRpcENsYXNzPVwiIFwiPjwvaT5cbjwvbmctdGVtcGxhdGU+Il19