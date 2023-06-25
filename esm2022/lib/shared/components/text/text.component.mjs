import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class TextComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: TextComponent, isStandalone: true, selector: "app-text", inputs: { text: "text" }, ngImport: i0, template: "<div class=\"text\" [matTooltip]=\"text\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n    {{text}}</div>", styles: [".text{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"], dependencies: [{ kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text', standalone: true, imports: [MatTooltipModule], template: "<div class=\"text\" [matTooltip]=\"text\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n    {{text}}</div>", styles: [".text{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMkIsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBUzdELE1BQU0sT0FBTyxhQUFhOzhHQUFiLGFBQWE7a0dBQWIsYUFBYSw4RkNWMUIsK0hBQ2tCLHlJRE9KLGdCQUFnQjs7MkZBRWpCLGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0ksVUFBVSxjQUdSLElBQUksV0FDUCxDQUFDLGdCQUFnQixDQUFDOzhCQUdyQixJQUFJO3NCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC10ZXh0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGV4dC5jb21wb25lbnQuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW01hdFRvb2x0aXBNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IHtcbiAgQElucHV0KCl0ZXh0OnN0cmluZ1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwidGV4dFwiIFttYXRUb29sdGlwXT1cInRleHRcIiBbbWF0VG9vbHRpcERpc2FibGVkXT1cImVsZS5zY3JvbGxXaWR0aDw9ZWxlLm9mZnNldFdpZHRoXCIgI2VsZT5cbiAgICB7e3RleHR9fTwvZGl2PiJdfQ==