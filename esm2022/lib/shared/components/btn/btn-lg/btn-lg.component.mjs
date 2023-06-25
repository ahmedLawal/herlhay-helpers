import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnComponent } from '../btn.component';
import { ToAnyPipe } from '../../../pipes/utility.pipe';
import { MatRippleModule } from '@angular/material/core';
import { NgIf, NgTemplateOutlet, NgClass } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../btn.service";
import * as i2 from "@angular/material/core";
export class BtnLgComponent extends BtnComponent {
    constructor(btnS) {
        super(btnS);
        this.btnS = btnS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnLgComponent, deps: [{ token: i1.BtnService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: BtnLgComponent, isStandalone: true, selector: "app-btn-lg", inputs: { queryParamsHandling: "queryParamsHandling", route: "route", value: "value", subText: "subText", subValue: "subValue" }, usesInheritance: true, ngImport: i0, template: "<span class=\"section-cards\">\n  <ng-container *ngIf=\"route; else elseTemplate\">\n    <button matRipple class=\"btn-large\" routerLink=\"{{route}}\" [queryParamsHandling]='queryParamsHandling'>\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <button matRipple class=\"btn-large\">\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-template>\n\n\n</span>\n<ng-template #btnContent>\n  <div>\n    <div class=\"title\" [innerHTML]=\"text\"> </div>\n    <div class=\"text\" [ngClass]=\"{detach:!!subText}\"[innerHTML]=\"value|toAny\"> </div>\n    <div class=\"sub-title\" *ngIf=\"subText\" [innerHTML]=\"subText\"> </div>\n    <div class=\"sub-text\" *ngIf=\"subValue\" [innerHTML]=\"subValue|toAny\"> </div>\n  </div>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatRippleModule }, { kind: "directive", type: i2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnLgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-btn-lg', standalone: true, imports: [
                        NgIf,
                        MatRippleModule,
                        RouterLink,
                        NgTemplateOutlet,
                        NgClass,
                        ToAnyPipe,
                    ], template: "<span class=\"section-cards\">\n  <ng-container *ngIf=\"route; else elseTemplate\">\n    <button matRipple class=\"btn-large\" routerLink=\"{{route}}\" [queryParamsHandling]='queryParamsHandling'>\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <button matRipple class=\"btn-large\">\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-template>\n\n\n</span>\n<ng-template #btnContent>\n  <div>\n    <div class=\"title\" [innerHTML]=\"text\"> </div>\n    <div class=\"text\" [ngClass]=\"{detach:!!subText}\"[innerHTML]=\"value|toAny\"> </div>\n    <div class=\"sub-title\" *ngIf=\"subText\" [innerHTML]=\"subText\"> </div>\n    <div class=\"sub-text\" *ngIf=\"subValue\" [innerHTML]=\"subValue|toAny\"> </div>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BtnService }]; }, propDecorators: { queryParamsHandling: [{
                type: Input
            }], route: [{
                type: Input
            }], value: [{
                type: Input
            }], subText: [{
                type: Input
            }], subValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLWxnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2J0bi9idG4tbGcvYnRuLWxnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2J0bi9idG4tbGcvYnRuLWxnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQXVCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFnQmxFLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTtJQU05QyxZQUNrQixJQUFnQjtRQUVoQyxLQUFLLENBQUcsSUFBSSxDQUFHLENBQUM7UUFGQSxTQUFJLEdBQUosSUFBSSxDQUFZO0lBR2xDLENBQUM7OEdBVlUsY0FBYztrR0FBZCxjQUFjLCtOQ3RCM0IsdzNCQXdCQSwwRERWUSxJQUFJLDRGQUNKLGVBQWUsbVNBQ2YsVUFBVSw0TkFDVixnQkFBZ0Isb0pBQ2hCLE9BQU8sK0VBQ1AsU0FBUzs7MkZBR0osY0FBYztrQkFkMUIsU0FBUzsrQkFDSSxZQUFZLGNBR1YsSUFBSSxXQUNQO3dCQUNMLElBQUk7d0JBQ0osZUFBZTt3QkFDZixVQUFVO3dCQUNWLGdCQUFnQjt3QkFDaEIsT0FBTzt3QkFDUCxTQUFTO3FCQUNaO2lHQUdNLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUXVlcnlQYXJhbXNIYW5kbGluZywgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7IFxuaW1wb3J0IHsgQnRuQ29tcG9uZW50IH0gZnJvbSAnLi4vYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdG5TZXJ2aWNlIH0gZnJvbSAnLi4vYnRuLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9BbnlQaXBlIH0gZnJvbSAnLi4vLi4vLi4vcGlwZXMvdXRpbGl0eS5waXBlJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTmdJZiwgTmdUZW1wbGF0ZU91dGxldCwgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWJ0bi1sZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J0bi1sZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnRuLWxnLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5nSWYsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICAgICAgUm91dGVyTGluayxcbiAgICAgICAgTmdUZW1wbGF0ZU91dGxldCxcbiAgICAgICAgTmdDbGFzcyxcbiAgICAgICAgVG9BbnlQaXBlLFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJ0bkxnQ29tcG9uZW50IGV4dGVuZHMgQnRuQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcXVlcnlQYXJhbXNIYW5kbGluZzogUXVlcnlQYXJhbXNIYW5kbGluZztcbiAgQElucHV0KCkgcm91dGU6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3ViVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBjb25zdHJ1Y3RvciggXG4gICAgcHVibGljIG92ZXJyaWRlIGJ0blM6IEJ0blNlcnZpY2UsIFxuICApIHtcbiAgICBzdXBlciggIGJ0blMsICk7XG4gIH1cbiBcbn1cbiIsIjxzcGFuIGNsYXNzPVwic2VjdGlvbi1jYXJkc1wiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicm91dGU7IGVsc2UgZWxzZVRlbXBsYXRlXCI+XG4gICAgPGJ1dHRvbiBtYXRSaXBwbGUgY2xhc3M9XCJidG4tbGFyZ2VcIiByb3V0ZXJMaW5rPVwie3tyb3V0ZX19XCIgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPSdxdWVyeVBhcmFtc0hhbmRsaW5nJz5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidG5Db250ZW50XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2J1dHRvbj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjZWxzZVRlbXBsYXRlPlxuICAgIDxidXR0b24gbWF0UmlwcGxlIGNsYXNzPVwiYnRuLWxhcmdlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnRuQ29udGVudFwiPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9idXR0b24+XG4gIDwvbmctdGVtcGxhdGU+XG5cblxuPC9zcGFuPlxuPG5nLXRlbXBsYXRlICNidG5Db250ZW50PlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiIFtpbm5lckhUTUxdPVwidGV4dFwiPiA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIFtuZ0NsYXNzXT1cIntkZXRhY2g6ISFzdWJUZXh0fVwiW2lubmVySFRNTF09XCJ2YWx1ZXx0b0FueVwiPiA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3ViLXRpdGxlXCIgKm5nSWY9XCJzdWJUZXh0XCIgW2lubmVySFRNTF09XCJzdWJUZXh0XCI+IDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdWItdGV4dFwiICpuZ0lmPVwic3ViVmFsdWVcIiBbaW5uZXJIVE1MXT1cInN1YlZhbHVlfHRvQW55XCI+IDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=