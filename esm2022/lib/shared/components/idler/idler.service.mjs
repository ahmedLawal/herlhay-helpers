import { Injectable } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { IdlerComponent } from './idler.component';
import * as i0 from "@angular/core";
import * as i1 from "@ng-idle/core";
import * as i2 from "@angular/material/dialog";
export class IdlerService {
    get timeLeft() {
        return this._timeLeft;
    }
    constructor(idle, dialog) {
        this.idle = idle;
        this.dialog = dialog;
        this.onIdleFunctions = [];
        this.idleTime = 240; //in seconds
        this.timeOutTime = 60; //in seconds
    }
    startIdler(idleTimeSec = this.idleTime) {
        this.idleTime = idleTimeSec * 0.8;
        this.timeOutTime = idleTimeSec * 0.2;
        this.idle.setIdle(idleTimeSec);
        this.idle.setTimeout(this.timeOutTime);
        this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        this.idle.onIdleEnd.subscribe(() => {
            this.idlerModal.close();
        });
        this.idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;
            for (const func of this.onIdleFunctions) {
                func();
            }
        });
        this.idle.onIdleStart.subscribe(() => {
            this.idleState = "You've gone idle!";
            console.log(this.idleState);
            this.openTimeWarningModal();
        });
        this.idle.onTimeoutWarning.subscribe((countdown) => {
            this._timeLeft = countdown;
        });
        this.reset();
    }
    reset() {
        this.idle.watch();
    }
    clear() {
        this.onIdleFunctions = [];
    }
    addOnIdleFunction(func) {
        this.onIdleFunctions.push(func);
    }
    openTimeWarningModal() {
        this.idlerModal = this.dialog.open(IdlerComponent, {
        // height: 'auto',
        // width: 'auto',
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerService, deps: [{ token: i1.Idle }, { token: i2.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Idle }, { type: i2.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2lkbGVyL2lkbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQVEsd0JBQXdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR25ELE1BQU0sT0FBTyxZQUFZO0lBTXZCLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBR0QsWUFBb0IsSUFBVSxFQUFTLE1BQWlCO1FBQXBDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUmhELG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBTTVCLGFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxZQUFZO1FBQzVCLGdCQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBWTtJQUNxQixDQUFDO0lBQzVELFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDdkMsSUFBSSxFQUFFLENBQUM7YUFDUjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDTyxLQUFLO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsS0FBSztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxJQUFTO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDakQsa0JBQWtCO1FBQ2xCLGlCQUFpQjtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQXREVSxZQUFZO2tIQUFaLFlBQVk7OzJGQUFaLFlBQVk7a0JBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2cgYXMgTWF0RGlhbG9nLFxuICBNYXREaWFsb2dSZWYgYXMgTWF0RGlhbG9nUmVmLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgSWRsZSwgREVGQVVMVF9JTlRFUlJVUFRTT1VSQ0VTIH0gZnJvbSAnQG5nLWlkbGUvY29yZSc7XG5pbXBvcnQgeyBJZGxlckNvbXBvbmVudCB9IGZyb20gJy4vaWRsZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElkbGVyU2VydmljZSB7XG4gIHByaXZhdGUgaWRsZVN0YXRlOiBzdHJpbmc7XG4gIHByaXZhdGUgdGltZWRPdXQ6IGJvb2xlYW47XG4gIHByaXZhdGUgb25JZGxlRnVuY3Rpb25zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF90aW1lTGVmdDogbnVtYmVyO1xuICBpZGxlck1vZGFsOiBNYXREaWFsb2dSZWY8SWRsZXJDb21wb25lbnQ+O1xuICBnZXQgdGltZUxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVMZWZ0O1xuICB9XG4gIHByaXZhdGUgaWRsZVRpbWUgPSAyNDA7IC8vaW4gc2Vjb25kc1xuICBwcml2YXRlIHRpbWVPdXRUaW1lID0gNjA7IC8vaW4gc2Vjb25kc1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlkbGU6IElkbGUsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cbiAgc3RhcnRJZGxlcihpZGxlVGltZVNlYyA9IHRoaXMuaWRsZVRpbWUpIHsgXG4gICAgdGhpcy5pZGxlVGltZSA9IGlkbGVUaW1lU2VjICogMC44O1xuICAgIHRoaXMudGltZU91dFRpbWUgPSBpZGxlVGltZVNlYyAqIDAuMjtcbiAgICB0aGlzLmlkbGUuc2V0SWRsZShpZGxlVGltZVNlYyk7XG4gICAgdGhpcy5pZGxlLnNldFRpbWVvdXQodGhpcy50aW1lT3V0VGltZSk7XG4gICAgdGhpcy5pZGxlLnNldEludGVycnVwdHMoREVGQVVMVF9JTlRFUlJVUFRTT1VSQ0VTKTtcblxuICAgIHRoaXMuaWRsZS5vbklkbGVFbmQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaWRsZXJNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuaWRsZS5vblRpbWVvdXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaWRsZVN0YXRlID0gJ1RpbWVkIG91dCEnO1xuICAgICAgdGhpcy50aW1lZE91dCA9IHRydWU7XG4gICAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5vbklkbGVGdW5jdGlvbnMpIHtcbiAgICAgICAgZnVuYygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuaWRsZS5vbklkbGVTdGFydC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pZGxlU3RhdGUgPSBcIllvdSd2ZSBnb25lIGlkbGUhXCI7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlkbGVTdGF0ZSk7XG4gICAgICB0aGlzLm9wZW5UaW1lV2FybmluZ01vZGFsKCk7XG4gICAgfSk7XG4gICAgdGhpcy5pZGxlLm9uVGltZW91dFdhcm5pbmcuc3Vic2NyaWJlKChjb3VudGRvd24pID0+IHtcbiAgICAgIHRoaXMuX3RpbWVMZWZ0ID0gY291bnRkb3duO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG4gIHByaXZhdGUgcmVzZXQoKSB7XG4gICAgdGhpcy5pZGxlLndhdGNoKCk7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5vbklkbGVGdW5jdGlvbnMgPSBbXTtcbiAgfVxuICBhZGRPbklkbGVGdW5jdGlvbihmdW5jOiBhbnkpIHtcbiAgICB0aGlzLm9uSWRsZUZ1bmN0aW9ucy5wdXNoKGZ1bmMpO1xuICB9XG4gIG9wZW5UaW1lV2FybmluZ01vZGFsKCkge1xuICAgIHRoaXMuaWRsZXJNb2RhbCA9IHRoaXMuZGlhbG9nLm9wZW4oSWRsZXJDb21wb25lbnQsIHtcbiAgICAgIC8vIGhlaWdodDogJ2F1dG8nLFxuICAgICAgLy8gd2lkdGg6ICdhdXRvJyxcbiAgICB9KTtcbiAgfVxufVxuIl19