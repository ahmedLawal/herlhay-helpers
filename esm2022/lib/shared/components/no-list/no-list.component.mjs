import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * Template to show when there is a data in a table
 */
export class NoListComponent {
    constructor() {
        this.addButtonClicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NoListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NoListComponent, isStandalone: true, selector: "no-list", inputs: { header: "header", subheader: "subheader", addBtnText: "addBtnText", hideAddBtn: "hideAddBtn" }, outputs: { addButtonClicked: "addButtonClicked" }, ngImport: i0, template: "<div class=\"h-100 center text-center no-list\" >\n    <div class=\"\">\n        <div class=\"title\">\n            {{header}}\n        </div>\n        <div class=\"sub-title mx-auto\">\n            {{subheader}}\n        </div>\n        <app-btn [text]=\"addBtnText\" icon=\"add\" *ngIf=\"!hideAddBtn\" mclass=\"w-auto\" (mclick)=\"addButtonClicked.emit(true)\"></app-btn>\n    </div>\n</div>", styles: [".no-list{min-height:500px}.no-list .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:var(--primary)}.no-list .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;margin-top:8px;margin-bottom:16px;color:#828282;width:206px}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NoListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'no-list', standalone: true, imports: [NgIf, BtnComponent], template: "<div class=\"h-100 center text-center no-list\" >\n    <div class=\"\">\n        <div class=\"title\">\n            {{header}}\n        </div>\n        <div class=\"sub-title mx-auto\">\n            {{subheader}}\n        </div>\n        <app-btn [text]=\"addBtnText\" icon=\"add\" *ngIf=\"!hideAddBtn\" mclass=\"w-auto\" (mclick)=\"addButtonClicked.emit(true)\"></app-btn>\n    </div>\n</div>", styles: [".no-list{min-height:500px}.no-list .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:var(--primary)}.no-list .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;margin-top:8px;margin-bottom:16px;color:#828282;width:206px}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }], subheader: [{
                type: Input
            }], addBtnText: [{
                type: Input
            }], hideAddBtn: [{
                type: Input
            }], addButtonClicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9uby1saXN0L25vLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvbm8tbGlzdC9uby1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFdkM7O0dBRUc7QUFRSCxNQUFNLE9BQU8sZUFBZTtJQVA1QjtRQVlZLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FDMUQ7OEdBTlksZUFBZTtrR0FBZixlQUFlLGdPQ3BCNUIsMllBVU0sbVhEUVEsSUFBSSw2RkFBRSxZQUFZOzsyRkFFbkIsZUFBZTtrQkFQM0IsU0FBUzsrQkFDSSxTQUFTLGNBR1AsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQzs4QkFHdEIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLGdCQUFnQjtzQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdG5Db21wb25lbnQgfSBmcm9tICcuLi9idG4vYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBUZW1wbGF0ZSB0byBzaG93IHdoZW4gdGhlcmUgaXMgYSBkYXRhIGluIGEgdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduby1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbm8tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbm8tbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW05nSWYsIEJ0bkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJoZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgYWRkQnRuVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRlQWRkQnRuOiBib29sZWFuO1xuICBAT3V0cHV0KCkgYWRkQnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJoLTEwMCBjZW50ZXIgdGV4dC1jZW50ZXIgbm8tbGlzdFwiID5cbiAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAge3toZWFkZXJ9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi10aXRsZSBteC1hdXRvXCI+XG4gICAgICAgICAgICB7e3N1YmhlYWRlcn19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YXBwLWJ0biBbdGV4dF09XCJhZGRCdG5UZXh0XCIgaWNvbj1cImFkZFwiICpuZ0lmPVwiIWhpZGVBZGRCdG5cIiBtY2xhc3M9XCJ3LWF1dG9cIiAobWNsaWNrKT1cImFkZEJ1dHRvbkNsaWNrZWQuZW1pdCh0cnVlKVwiPjwvYXBwLWJ0bj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==