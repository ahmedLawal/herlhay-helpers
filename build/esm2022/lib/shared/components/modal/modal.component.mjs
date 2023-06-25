import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { NgClass, NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/utility.service";
export class ModalComponent {
    // public dialogRef: MatDialogRef<typeof this.tempRef>;
    // public dialogRef: MatDialogRef<ModalComponent>;
    constructor(uS) {
        this.uS = uS;
        this.showHeader = true;
        this.width = 'auto';
        this.height = 'auto';
        this.data = {};
        this.onClose = new EventEmitter();
        this.modalConfigMap = (config) => {
            return config;
        };
    }
    ngOnInit() { }
    open(...args) {
        const config = {
            width: this.uS.isMobile ? '100%' : this.width,
            height: this.height,
            autoFocus: false,
            maxHeight: '90vh',
            maxWidth: '90vw',
            panelClass: 'full-modal',
            disableClose: true,
        };
        // console.log(this.modalConfigMap(config));
        this.dialogRef = this.uS.dialogOpenerRef(this.tempRef, this.modalConfigMap(config));
        this.closedSub = this.dialogRef.afterClosed().subscribe((r) => {
            this.onClose.emit(r);
        });
    }
    close(data) {
        this.dialogRef?.close(data);
    }
    ngOnDestroy() {
        this.closedSub?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalComponent, deps: [{ token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ModalComponent, isStandalone: true, selector: "modal-comp", inputs: { showHeader: "showHeader", header: "header", loading: "loading", width: "width", height: "height", data: "data" }, outputs: { onClose: "onClose" }, viewQueries: [{ propertyName: "tempRef", first: true, predicate: ["temp"], descendants: true }, { propertyName: "loaderRef", first: true, predicate: ["loader"], descendants: true }], ngImport: i0, template: "<ng-template #temp>\n  <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #loader>\n    <div class=\"h-100\" #cont>\n      <modal-header [header]=\"header\" *ngIf=\"showHeader\" [dialogRef]=\"dialogRef\"></modal-header>\n      <div   class=\"bod  \" [ngClass]=\"{'p-24': showHeader}\" >\n        <ng-content select=\"[body]\"></ng-content>\n      </div> \n    </div>\n  </loader> \n</ng-template>\n", styles: [".bod{height:calc(100% - 60px)}\n"], dependencies: [{ kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "component", type: ModalHeaderComponent, selector: "modal-header", inputs: ["dialogRef", "header", "onCloseValue"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal-comp', standalone: true, imports: [LoaderComponent, ModalHeaderComponent, NgClass, NgIf], template: "<ng-template #temp>\n  <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #loader>\n    <div class=\"h-100\" #cont>\n      <modal-header [header]=\"header\" *ngIf=\"showHeader\" [dialogRef]=\"dialogRef\"></modal-header>\n      <div   class=\"bod  \" [ngClass]=\"{'p-24': showHeader}\" >\n        <ng-content select=\"[body]\"></ng-content>\n      </div> \n    </div>\n  </loader> \n</ng-template>\n", styles: [".bod{height:calc(100% - 60px)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.UtilityService }]; }, propDecorators: { tempRef: [{
                type: ViewChild,
                args: ['temp']
            }], loaderRef: [{
                type: ViewChild,
                args: ['loader']
            }], showHeader: [{
                type: Input
            }], header: [{
                type: Input
            }], loading: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], data: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFRdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVNoRCxNQUFNLE9BQU8sY0FBYztJQVl6Qix1REFBdUQ7SUFDdkQsa0RBQWtEO0lBQ2xELFlBQW1CLEVBQWtCO1FBQWxCLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBWDVCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQUN2QixXQUFNLEdBQVcsTUFBTSxDQUFDO1FBQ3hCLFNBQUksR0FBeUIsRUFBRSxDQUFDO1FBQy9CLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBU3ZDLG1CQUFjLEdBQUcsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDM0MsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO0lBTnNDLENBQUM7SUFFekMsUUFBUSxLQUFVLENBQUM7SUFNbkIsSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNWLE1BQU0sTUFBTSxHQUFvQjtZQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDN0MsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7UUFDRiw0Q0FBNEM7UUFFNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FDdEMsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUM1QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssQ0FBQyxJQUFLO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7OEdBL0NVLGNBQWM7a0dBQWQsY0FBYywwWkMzQjNCLDBaQVVBLDBGRGVjLGVBQWUsaUhBQUUsb0JBQW9CLDBHQUFDLE9BQU8sb0ZBQUMsSUFBSTs7MkZBRW5ELGNBQWM7a0JBUDFCLFNBQVM7K0JBQ0ksWUFBWSxjQUdWLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDO3FHQUc1QyxPQUFPO3NCQUF6QixTQUFTO3VCQUFDLE1BQU07Z0JBQ0ksU0FBUztzQkFBN0IsU0FBUzt1QkFBQyxRQUFRO2dCQUNWLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2dDb25maWcsXG4gIE1hdERpYWxvZ1JlZiBhcyBNYXREaWFsb2dSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2luZGV4Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDbGFzcywgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29tcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW0xvYWRlckNvbXBvbmVudCwgTW9kYWxIZWFkZXJDb21wb25lbnQsTmdDbGFzcyxOZ0lmXSxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCd0ZW1wJykgdGVtcFJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnbG9hZGVyJykgbG9hZGVyUmVmOiBMb2FkZXJDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHNob3dIZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyA9ICdhdXRvJzsgXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gJ2F1dG8nO1xuICBASW5wdXQoKSBkYXRhOiB7IFt4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT47XG4gIHByb3RlY3RlZCBjbG9zZWRTdWI6IFN1YnNjcmlwdGlvbjtcbiAgLy8gcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPHR5cGVvZiB0aGlzLnRlbXBSZWY+O1xuICAvLyBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWxDb21wb25lbnQ+O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdVM6IFV0aWxpdHlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBtb2RhbENvbmZpZ01hcCA9IChjb25maWc6IE1hdERpYWxvZ0NvbmZpZykgPT4ge1xuICAgIHJldHVybiBjb25maWc7XG4gIH07XG5cbiAgb3BlbiguLi5hcmdzKSB7XG4gICAgY29uc3QgY29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB7XG4gICAgICB3aWR0aDogdGhpcy51Uy5pc01vYmlsZSA/ICcxMDAlJyA6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG1heEhlaWdodDogJzkwdmgnLFxuICAgICAgbWF4V2lkdGg6ICc5MHZ3JyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdmdWxsLW1vZGFsJyxcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZSxcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubW9kYWxDb25maWdNYXAoY29uZmlnKSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMudVMuZGlhbG9nT3BlbmVyUmVmKFxuICAgICAgdGhpcy50ZW1wUmVmLFxuICAgICAgdGhpcy5tb2RhbENvbmZpZ01hcChjb25maWcpXG4gICAgKTtcbiAgICB0aGlzLmNsb3NlZFN1YiA9IHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdChyKTtcbiAgICB9KTtcbiAgfVxuICBjbG9zZShkYXRhPykge1xuICAgIHRoaXMuZGlhbG9nUmVmPy5jbG9zZShkYXRhKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlZFN1Yj8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICN0ZW1wPlxuICA8bG9hZGVyIFtsb2FkaW5nXT1cImxvYWRpbmdcIiBbaGVpZ2h0XT1cImNvbnQub2Zmc2V0SGVpZ2h0XCIgI2xvYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiaC0xMDBcIiAjY29udD5cbiAgICAgIDxtb2RhbC1oZWFkZXIgW2hlYWRlcl09XCJoZWFkZXJcIiAqbmdJZj1cInNob3dIZWFkZXJcIiBbZGlhbG9nUmVmXT1cImRpYWxvZ1JlZlwiPjwvbW9kYWwtaGVhZGVyPlxuICAgICAgPGRpdiAgIGNsYXNzPVwiYm9kICBcIiBbbmdDbGFzc109XCJ7J3AtMjQnOiBzaG93SGVhZGVyfVwiID5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JvZHldXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+IFxuICAgIDwvZGl2PlxuICA8L2xvYWRlcj4gXG48L25nLXRlbXBsYXRlPlxuIl19