import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
import * as i2 from "../utility.service";
import * as i3 from "./prompt-update.service";
export class HandleUnrecoverableStateService {
    constructor(updates, uS, puS) {
        this.uS = uS;
        this.puS = puS;
        updates.unrecoverable.subscribe((event) => {
            console.log(event.reason);
            alert(event.reason);
            this.puS.prompter('An error occurred that we cannot recover from:\n' + event.reason);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HandleUnrecoverableStateService, deps: [{ token: i1.SwUpdate }, { token: i2.UtilityService }, { token: i3.PromptUpdateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HandleUnrecoverableStateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HandleUnrecoverableStateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.SwUpdate }, { type: i2.UtilityService }, { type: i3.PromptUpdateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXVucmVjb3ZlcmFibGUtc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL3NlcnZpY2Utd29ya2VyL2hhbmRsZS11bnJlY292ZXJhYmxlLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRM0MsTUFBTSxPQUFPLCtCQUErQjtJQUMxQyxZQUNFLE9BQWlCLEVBQ1YsRUFBa0IsRUFDbEIsR0FBd0I7UUFEeEIsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFFL0IsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUNmLGtEQUFrRCxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ2xFLENBQUM7UUFFSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBZFUsK0JBQStCO2tIQUEvQiwrQkFBK0IsY0FGOUIsTUFBTTs7MkZBRVAsK0JBQStCO2tCQUgzQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3VXBkYXRlIH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi91dGlsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbXB0VXBkYXRlU2VydmljZSB9IGZyb20gJy4vcHJvbXB0LXVwZGF0ZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEhhbmRsZVVucmVjb3ZlcmFibGVTdGF0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cGRhdGVzOiBTd1VwZGF0ZSxcbiAgICBwdWJsaWMgdVM6IFV0aWxpdHlTZXJ2aWNlLFxuICAgIHB1YmxpYyBwdVM6IFByb21wdFVwZGF0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdXBkYXRlcy51bnJlY292ZXJhYmxlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnJlYXNvbik7XG4gICAgICBhbGVydChldmVudC5yZWFzb24pO1xuICAgICAgdGhpcy5wdVMucHJvbXB0ZXIoXG4gICAgICAgICdBbiBlcnJvciBvY2N1cnJlZCB0aGF0IHdlIGNhbm5vdCByZWNvdmVyIGZyb206XFxuJyArIGV2ZW50LnJlYXNvblxuICAgICAgKTtcbiAgICAgIFxuICAgIH0pO1xuICB9XG59XG4iXX0=