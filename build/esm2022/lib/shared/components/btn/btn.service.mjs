import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BtnService {
    constructor() {
        this.btnClasses = {
            primary: 'btn btn-primary w-100',
            secondary: 'btn btn-secondary   w-100',
            light: 'btn btn-light  w-100',
            outline: 'btn btn-outline-primary w-100',
            'outline-light': 'btn btn-outline-light w-100',
            clear: 'btn btn-clear w-100',
            'clear-pm': 'btn btn-clear text-primary w-100',
            'dark-outline': 'btn btn-outline-dark w-100',
            'outline-nm': 'btn btn-outline-primary w-100',
            dark: 'btn btn-dark w-100',
            danger: 'btn btn-danger w-100',
            'danger-outline': 'btn btn-outline-danger w-100',
            close: 'btn  text-danger',
            success: 'btn btn-success w-100',
        };
        this.getIcon = (iconType) => {
            let icon, iconString, iconPosition = 'left';
            switch (iconType) {
                case 'calendar':
                    iconString = 'fas fa-calendar-alt';
                    break;
                case 'close':
                    iconString = 'fa fa-close';
                    break;
                case 'link':
                    iconString = 'fas fa-chain';
                    break;
                default:
                    icon = null;
                    break;
            }
            return { icon, iconPosition, iconString };
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9idG4vYnRuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLFVBQVU7SUFpQnJCO1FBaEJBLGVBQVUsR0FBZ0M7WUFDeEMsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxTQUFTLEVBQUUsMkJBQTJCO1lBQ3RDLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxlQUFlLEVBQUUsNkJBQTZCO1lBQzlDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsVUFBVSxFQUFFLGtDQUFrQztZQUM5QyxjQUFjLEVBQUUsNEJBQTRCO1lBQzVDLFlBQVksRUFBRSwrQkFBK0I7WUFDN0MsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixNQUFNLEVBQUUsc0JBQXNCO1lBQzlCLGdCQUFnQixFQUFFLDhCQUE4QjtZQUNoRCxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLE9BQU8sRUFBRSx1QkFBdUI7U0FDakMsQ0FBQztRQUVGLFlBQU8sR0FBRyxDQUFDLFFBQWtCLEVBQUUsRUFBRTtZQUMvQixJQUFJLElBQUksRUFDTixVQUFVLEVBQ1YsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUN4QixRQUFRLFFBQVEsRUFBRTtnQkFDaEIsS0FBSyxVQUFVO29CQUNiLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQztvQkFDbkMsTUFBTTtnQkFFUixLQUFLLE9BQU87b0JBQ1YsVUFBVSxHQUFHLGFBQWEsQ0FBQztvQkFDM0IsTUFBTTtnQkFFUixLQUFLLE1BQU07b0JBQ1QsVUFBVSxHQUFHLGNBQWMsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNaLE1BQU07YUFDVDtZQUNELE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBQztJQXRCYSxDQUFDOzhHQWpCTCxVQUFVO2tIQUFWLFVBQVUsY0FGVCxNQUFNOzsyRkFFUCxVQUFVO2tCQUh0QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnRuVHlwZSwgSWNvblR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQnRuU2VydmljZSB7XG4gIGJ0bkNsYXNzZXM6IHsgW3ggaW4gQnRuVHlwZV0/OiBzdHJpbmcgfSA9IHtcbiAgICBwcmltYXJ5OiAnYnRuIGJ0bi1wcmltYXJ5IHctMTAwJyxcbiAgICBzZWNvbmRhcnk6ICdidG4gYnRuLXNlY29uZGFyeSAgIHctMTAwJyxcbiAgICBsaWdodDogJ2J0biBidG4tbGlnaHQgIHctMTAwJyxcbiAgICBvdXRsaW5lOiAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgdy0xMDAnLFxuICAgICdvdXRsaW5lLWxpZ2h0JzogJ2J0biBidG4tb3V0bGluZS1saWdodCB3LTEwMCcsXG4gICAgY2xlYXI6ICdidG4gYnRuLWNsZWFyIHctMTAwJyxcbiAgICAnY2xlYXItcG0nOiAnYnRuIGJ0bi1jbGVhciB0ZXh0LXByaW1hcnkgdy0xMDAnLFxuICAgICdkYXJrLW91dGxpbmUnOiAnYnRuIGJ0bi1vdXRsaW5lLWRhcmsgdy0xMDAnLFxuICAgICdvdXRsaW5lLW5tJzogJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IHctMTAwJyxcbiAgICBkYXJrOiAnYnRuIGJ0bi1kYXJrIHctMTAwJyxcbiAgICBkYW5nZXI6ICdidG4gYnRuLWRhbmdlciB3LTEwMCcsXG4gICAgJ2Rhbmdlci1vdXRsaW5lJzogJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgdy0xMDAnLFxuICAgIGNsb3NlOiAnYnRuICB0ZXh0LWRhbmdlcicsXG4gICAgc3VjY2VzczogJ2J0biBidG4tc3VjY2VzcyB3LTEwMCcsXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgZ2V0SWNvbiA9IChpY29uVHlwZTogSWNvblR5cGUpID0+IHtcbiAgICBsZXQgaWNvbixcbiAgICAgIGljb25TdHJpbmcsXG4gICAgICBpY29uUG9zaXRpb24gPSAnbGVmdCc7XG4gICAgc3dpdGNoIChpY29uVHlwZSkge1xuICAgICAgY2FzZSAnY2FsZW5kYXInOlxuICAgICAgICBpY29uU3RyaW5nID0gJ2ZhcyBmYS1jYWxlbmRhci1hbHQnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICBpY29uU3RyaW5nID0gJ2ZhIGZhLWNsb3NlJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgICBpY29uU3RyaW5nID0gJ2ZhcyBmYS1jaGFpbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWNvbiA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4geyBpY29uLCBpY29uUG9zaXRpb24sIGljb25TdHJpbmcgfTtcbiAgfTtcbn1cbiJdfQ==