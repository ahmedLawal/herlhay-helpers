import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
import * as i2 from "../utility.service";
export class PromptUpdateService {
    constructor(swUpdate, uS) {
        this.uS = uS;
        swUpdate.versionUpdates
            .pipe(filter((evt) => evt.type === 'VERSION_READY'))
            .subscribe((evt) => {
            this.prompter();
        });
    }
    prompter(reason) {
        // document.location.reload();
        return;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PromptUpdateService, deps: [{ token: i1.SwUpdate }, { token: i2.UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PromptUpdateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PromptUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.SwUpdate }, { type: i2.UtilityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LXVwZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvc2VydmljZS13b3JrZXIvcHJvbXB0LXVwZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXhDLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBWSxRQUFrQixFQUFTLEVBQWtCO1FBQWxCLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBQ3ZELFFBQVEsQ0FBQyxjQUFjO2FBQ3BCLElBQUksQ0FDSCxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQTRCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxDQUN4RTthQUNBLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxRQUFRLENBQUMsTUFBZTtRQUN0Qiw4QkFBOEI7UUFDOUIsT0FBTTtJQUVSLENBQUM7OEdBZFUsbUJBQW1CO2tIQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3VXBkYXRlLCBWZXJzaW9uUmVhZHlFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbGl0eS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb21wdFVwZGF0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihzd1VwZGF0ZTogU3dVcGRhdGUsIHB1YmxpYyB1UzogVXRpbGl0eVNlcnZpY2UpIHtcbiAgICBzd1VwZGF0ZS52ZXJzaW9uVXBkYXRlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZXZ0KTogZXZ0IGlzIFZlcnNpb25SZWFkeUV2ZW50ID0+IGV2dC50eXBlID09PSAnVkVSU0lPTl9SRUFEWScpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldnQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9tcHRlcigpO1xuICAgICAgfSk7XG4gIH1cbiAgcHJvbXB0ZXIocmVhc29uPzogc3RyaW5nKSB7XG4gICAgLy8gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgcmV0dXJuXG4gICAgXG4gIH1cbn1cbiJdfQ==