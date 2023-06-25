import { Component, Input, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./svg-icon.service";
export class SvgIconComponent {
    set _icon(v) {
        this.icon = this.svgIconS.getSVG(v).icon;
        if (this.icon)
            this.icon = this.icon.replaceAllSubStr('{{color}}', this.config.color);
        //  if(v) debugger
        this.ngAfterViewInit();
    }
    constructor(svgIconS) {
        this.svgIconS = svgIconS;
        this.class = 'svg-icon';
        this.config = { color: `currentColor`, onhover: `var(--primary)` };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.icon && this.iconRef?.nativeElement)
            this.iconRef.nativeElement.innerHTML = this.icon;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconComponent, deps: [{ token: i1.SvgIconService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: SvgIconComponent, isStandalone: true, selector: "svg-icon", inputs: { class: "class", _icon: ["icon", "_icon"] }, viewQueries: [{ propertyName: "iconRef", first: true, predicate: ["iconTag"], descendants: true }], ngImport: i0, template: "<span class=\"{{class}} svg-icon\" #iconTag>\n    <!-- {{icon}} -->\n    <!-- <img class=\"svg-icon\" src=\"{{icon}}\"> -->\n</span>", styles: ["span{color:inherit}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'svg-icon', standalone: true, template: "<span class=\"{{class}} svg-icon\" #iconTag>\n    <!-- {{icon}} -->\n    <!-- <img class=\"svg-icon\" src=\"{{icon}}\"> -->\n</span>", styles: ["span{color:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.SvgIconService }]; }, propDecorators: { class: [{
                type: Input
            }], _icon: [{
                type: Input,
                args: ['icon']
            }], iconRef: [{
                type: ViewChild,
                args: ['iconTag']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDOzs7QUFVdkIsTUFBTSxPQUFPLGdCQUFnQjtJQUszQixJQUFtQixLQUFLLENBQUMsQ0FBUztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQW1CLFFBQXdCO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBWmxDLFVBQUssR0FBUyxVQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztJQVdoQixDQUFDO0lBRS9DLFFBQVEsS0FBVSxDQUFDO0lBQ25CLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JELENBQUM7OEdBbkJVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDhOQ2pCN0Isc0lBR087OzJGRGNNLGdCQUFnQjtrQkFONUIsU0FBUzsrQkFDSSxVQUFVLGNBR1IsSUFBSTtxR0FHVCxLQUFLO3NCQUFiLEtBQUs7Z0JBSWEsS0FBSztzQkFBdkIsS0FBSzt1QkFBQyxNQUFNO2dCQU9TLE9BQU87c0JBQTVCLFNBQVM7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVkdJY29uVHlwZSB9IGZyb20gJy4vc3ZnLWljb24ubW9kZWwnO1xuaW1wb3J0IHsgU3ZnSWNvblNlcnZpY2UgfSBmcm9tICcuL3N2Zy1pY29uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N2Zy1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3ZnLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU3ZnSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc9J3N2Zy1pY29uJztcbiAgY29uZmlnID0geyBjb2xvcjogYGN1cnJlbnRDb2xvcmAsIG9uaG92ZXI6IGB2YXIoLS1wcmltYXJ5KWAgfTtcbiAgLy8gY29uZmlnID0geyBjb2xvcjogYCM4MjgyODJgLCBvbmhvdmVyOiBgdmFyKC0tcHJpbWFyeSlgIH07XG4gIGljb246IHN0cmluZztcbiAgQElucHV0KCdpY29uJykgc2V0IF9pY29uKHY6IHN0cmluZykge1xuICAgIHRoaXMuaWNvbiA9IHRoaXMuc3ZnSWNvblMuZ2V0U1ZHKHYpLmljb247XG4gICAgaWYodGhpcy5pY29uKVxuICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbi5yZXBsYWNlQWxsU3ViU3RyKCd7e2NvbG9yfX0nLCB0aGlzLmNvbmZpZy5jb2xvcik7XG4gICAgLy8gIGlmKHYpIGRlYnVnZ2VyXG4gICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuICBAVmlld0NoaWxkKCdpY29uVGFnJykgaWNvblJlZjogRWxlbWVudFJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3ZnSWNvblM6IFN2Z0ljb25TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmljb24gJiYgdGhpcy5pY29uUmVmPy5uYXRpdmVFbGVtZW50KVxuICAgICAgdGhpcy5pY29uUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pY29uO1xuICB9XG59IiwiPHNwYW4gY2xhc3M9XCJ7e2NsYXNzfX0gc3ZnLWljb25cIiAjaWNvblRhZz5cbiAgICA8IS0tIHt7aWNvbn19IC0tPlxuICAgIDwhLS0gPGltZyBjbGFzcz1cInN2Zy1pY29uXCIgc3JjPVwie3tpY29ufX1cIj4gLS0+XG48L3NwYW4+Il19