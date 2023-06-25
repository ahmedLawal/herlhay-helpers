import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DirectivesModule } from '../../directives/directives.module';
import { InputModule } from '../input/input.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../svg-icon/svg-icon.component";
export class PrecentageTrendComponent {
    set _trend(v) {
        // debugger
        if (v == null || v == undefined) {
            this.noData = true;
            return;
        }
        this.noData = false;
        this.trend = +v;
        this.cls = this.trend > 0 ? 'success' : this.trend < 0 ? 'danger' : '';
        // this.cls =  'danger'   
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PrecentageTrendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: PrecentageTrendComponent, isStandalone: true, selector: "precentage-trend", inputs: { _trend: ["trend", "_trend"], message: "message" }, ngImport: i0, template: "<span class=\"trend\">\n    <ng-container *ngIf=\"!noData; else elseTemplate\">\n        <span class=\"{{cls}}\">\n            <svg-icon icon=\"up\" *ngIf=\"cls\"></svg-icon> {{trend}}%\n        </span><span class=\"message\">{{message}}</span>\n    </ng-container>\n    <ng-template #elseTemplate>\n        <span>No data</span>\n    </ng-template>\n</span>", styles: [".trend{font-size:14px}.trend .danger{color:#eb5757}.trend .danger ::ng-deep svg{transform:rotate(180deg)}.trend .success{color:#27ae60}.trend .message{font-weight:500}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: SvgIconModule }, { kind: "component", type: i2.SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "ngmodule", type: InputModule }, { kind: "ngmodule", type: DirectivesModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PrecentageTrendComponent, decorators: [{
            type: Component,
            args: [{ selector: 'precentage-trend', standalone: true, imports: [CommonModule, SvgIconModule, InputModule, DirectivesModule], template: "<span class=\"trend\">\n    <ng-container *ngIf=\"!noData; else elseTemplate\">\n        <span class=\"{{cls}}\">\n            <svg-icon icon=\"up\" *ngIf=\"cls\"></svg-icon> {{trend}}%\n        </span><span class=\"message\">{{message}}</span>\n    </ng-container>\n    <ng-template #elseTemplate>\n        <span>No data</span>\n    </ng-template>\n</span>", styles: [".trend{font-size:14px}.trend .danger{color:#eb5757}.trend .danger ::ng-deep svg{transform:rotate(180deg)}.trend .success{color:#27ae60}.trend .message{font-weight:500}\n"] }]
        }], propDecorators: { _trend: [{
                type: Input,
                args: ['trend']
            }], message: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlY2VudGFnZS10cmVuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9wcmVjZW50YWdlLXRyZW5kL3ByZWNlbnRhZ2UtdHJlbmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvcHJlY2VudGFnZS10cmVuZC9wcmVjZW50YWdlLXRyZW5kLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBUzVELE1BQU0sT0FBTyx3QkFBd0I7SUFJbkMsSUFBb0IsTUFBTSxDQUFDLENBQWtCO1FBQzNDLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBRSxJQUFJLElBQUksQ0FBQyxJQUFFLFNBQVMsRUFBRztZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZFLDBCQUEwQjtJQUM1QixDQUFDOzhHQWRVLHdCQUF3QjtrR0FBeEIsd0JBQXdCLHlJQ2JyQyx1V0FTTyxrT0RFSyxZQUFZLGtJQUFFLGFBQWEsaUlBQUUsV0FBVyw4QkFBRSxnQkFBZ0I7OzJGQUV6RCx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0Usa0JBQWtCLGNBR2pCLElBQUksV0FDTixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDOzhCQU1qRCxNQUFNO3NCQUF6QixLQUFLO3VCQUFDLE9BQU87Z0JBV0wsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMubW9kdWxlJztcbmltcG9ydCB7IElucHV0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IFN2Z0ljb25Nb2R1bGUgfSBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbi5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcmVjZW50YWdlLXRyZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZWNlbnRhZ2UtdHJlbmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcmVjZW50YWdlLXRyZW5kLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6dHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3ZnSWNvbk1vZHVsZSwgSW5wdXRNb2R1bGUsIERpcmVjdGl2ZXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcmVjZW50YWdlVHJlbmRDb21wb25lbnQge1xuICB0cmVuZDogbnVtYmVyOyBcbiAgbm9EYXRhOiBib29sZWFuO1xuICBjbHM6IHN0cmluZztcbiAgQElucHV0KCd0cmVuZCcpIHNldCBfdHJlbmQodjogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgLy8gZGVidWdnZXJcbiAgICBpZiAodj09bnVsbCB8fCB2PT11bmRlZmluZWQgKSB7XG4gICAgICB0aGlzLm5vRGF0YSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubm9EYXRhPWZhbHNlXG4gICAgdGhpcy50cmVuZCA9ICt2O1xuICAgIHRoaXMuY2xzID0gdGhpcy50cmVuZCA+IDAgPyAnc3VjY2VzcycgOiB0aGlzLnRyZW5kIDwgMCA/ICdkYW5nZXInIDogJyc7XG4gICAgLy8gdGhpcy5jbHMgPSAgJ2RhbmdlcicgICBcbiAgfVxuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG59XG4iLCI8c3BhbiBjbGFzcz1cInRyZW5kXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFub0RhdGE7IGVsc2UgZWxzZVRlbXBsYXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3tjbHN9fVwiPlxuICAgICAgICAgICAgPHN2Zy1pY29uIGljb249XCJ1cFwiICpuZ0lmPVwiY2xzXCI+PC9zdmctaWNvbj4ge3t0cmVuZH19JVxuICAgICAgICA8L3NwYW4+PHNwYW4gY2xhc3M9XCJtZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XG4gICAgICAgIDxzcGFuPk5vIGRhdGE8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvc3Bhbj4iXX0=