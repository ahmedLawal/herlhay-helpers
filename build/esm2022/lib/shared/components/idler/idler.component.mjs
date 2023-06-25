import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "./idler.service";
import * as i3 from "../../../services/utility.service";
export class IdlerComponent {
    constructor(dialogRef, idlerService, uS) {
        this.dialogRef = dialogRef;
        this.idlerService = idlerService;
        this.uS = uS;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerComponent, deps: [{ token: i1.MatDialogRef }, { token: i2.IdlerService }, { token: i3.UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: IdlerComponent, isStandalone: true, selector: "app-idler", ngImport: i0, template: "<div class=\"center h-100 p-16 text-center text-danger\" *ngIf=\"uS.secondsToHourMinSec(idlerService.timeLeft) as timeLeft\">\n  You will be logged out in {{timeLeft.hours?timeLeft.hours+'hrs':''}}\n  {{timeLeft.mins?timeLeft.mins+'min':''}} {{timeLeft.secs?timeLeft.secs+'s':''}}\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-idler', standalone: true, imports: [NgIf], template: "<div class=\"center h-100 p-16 text-center text-danger\" *ngIf=\"uS.secondsToHourMinSec(idlerService.timeLeft) as timeLeft\">\n  You will be logged out in {{timeLeft.hours?timeLeft.hours+'hrs':''}}\n  {{timeLeft.mins?timeLeft.mins+'min':''}} {{timeLeft.secs?timeLeft.secs+'s':''}}\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: i2.IdlerService }, { type: i3.UtilityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRsZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaWRsZXIvaWRsZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaWRsZXIvaWRsZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUlsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBU3ZDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQ1MsU0FBdUMsRUFDdkMsWUFBMEIsRUFDMUIsRUFBa0I7UUFGbEIsY0FBUyxHQUFULFNBQVMsQ0FBOEI7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7SUFDeEIsQ0FBQztJQUVKLFFBQVEsS0FBVSxDQUFDO0lBQ25CLEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OEdBVlUsY0FBYztrR0FBZCxjQUFjLHFFQ2IzQixvU0FJQSwwRERPYyxJQUFJOzsyRkFFTCxjQUFjO2tCQVAxQixTQUFTOytCQUNJLFdBQVcsY0FHVCxJQUFJLFdBQ1AsQ0FBQyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIGFzIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBJZGxlclNlcnZpY2UgfSBmcm9tICcuL2lkbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWlkbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaWRsZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lkbGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbTmdJZl0sXG59KVxuZXhwb3J0IGNsYXNzIElkbGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPElkbGVyQ29tcG9uZW50PixcbiAgICBwdWJsaWMgaWRsZXJTZXJ2aWNlOiBJZGxlclNlcnZpY2UsXG4gICAgcHVibGljIHVTOiBVdGlsaXR5U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2VudGVyIGgtMTAwIHAtMTYgdGV4dC1jZW50ZXIgdGV4dC1kYW5nZXJcIiAqbmdJZj1cInVTLnNlY29uZHNUb0hvdXJNaW5TZWMoaWRsZXJTZXJ2aWNlLnRpbWVMZWZ0KSBhcyB0aW1lTGVmdFwiPlxuICBZb3Ugd2lsbCBiZSBsb2dnZWQgb3V0IGluIHt7dGltZUxlZnQuaG91cnM/dGltZUxlZnQuaG91cnMrJ2hycyc6Jyd9fVxuICB7e3RpbWVMZWZ0Lm1pbnM/dGltZUxlZnQubWlucysnbWluJzonJ319IHt7dGltZUxlZnQuc2Vjcz90aW1lTGVmdC5zZWNzKydzJzonJ319XG48L2Rpdj5cbiJdfQ==