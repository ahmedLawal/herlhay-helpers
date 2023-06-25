import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    confirm(text) {
        return lastValueFrom(this.dialog
            .open(ConfirmDialogComponent, {
            data: text,
            height: 'auto',
            width: '450px',
            autoFocus: false,
        })
            .afterClosed()).then((r) => {
            if (r) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFLcEUsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUN4QyxPQUFPLENBQUMsSUFBWTtRQUNsQixPQUFPLGFBQWEsQ0FDbEIsSUFBSSxDQUFDLE1BQU07YUFDUixJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDNUIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQzthQUNELFdBQVcsRUFBRSxDQUNqQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQW5CVSxvQkFBb0I7a0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cbiAgY29uZmlybSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIHRoaXMuZGlhbG9nXG4gICAgICAgIC5vcGVuKENvbmZpcm1EaWFsb2dDb21wb25lbnQsIHtcbiAgICAgICAgICBkYXRhOiB0ZXh0LFxuICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgIHdpZHRoOiAnNDUwcHgnLFxuICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIC5hZnRlckNsb3NlZCgpXG4gICAgKS50aGVuKChyKSA9PiB7XG4gICAgICBpZiAocikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19