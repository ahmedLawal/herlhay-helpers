import { Component, Input, ViewChild } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { ModalComponent } from '../modal/modal.component';
import { DragDropFileUploadDirective } from '../../directives/drag-drop-file-upload.directive';
import { BtnComponent } from '../btn/btn.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/utility.service";
export class ImportItemsComponent {
    constructor(uS) {
        this.uS = uS;
        this.header = 'Import Items';
        this.label = 'CSV file';
        this.acceptedTypes = ['.csv', '.xlsx', '.xls'];
    }
    ngOnInit() {
        if (!this.uploadFunc)
            throw 'An upload handler is required';
    }
    open() {
        this.modal.open();
    }
    close() {
        this.modal.close();
    }
    downloadTemplate() {
        this.uS.downloadFromLink(this.templatePath, `${this.label} upload template.csv`);
    }
    openFileDialog(loader) {
        const el = document.createElement('input');
        el.type = 'file';
        el.accept = this.acceptedTypes.join(',');
        el.click();
        el.onchange = (e) => {
            const file = e.target['files'][0];
            this.uploadFile(file, loader);
        };
    }
    async uploadFile(file, loader) {
        try {
            loader.loaders.resetLoaders();
            const l1 = loader.loaders.addLoader(), l2 = loader.loaders.addLoader();
            l1.startPl();
            loader.text = `<div class="text-primary" >Uploading file to server</div>`;
            if (!this.acceptedTypes.some((x) => file.name?.endsWith(x)))
                throw `File type is not supported`;
            this.uploadFunc(file).subscribe({
                next: (sub) => {
                    if (sub.progress)
                        sub.progress = Math.round(sub.progress);
                    console.log(sub);
                    // debugger;
                    if (l2.isLoading && sub.progress == 100) {
                        loader.stopLoader();
                        this.close();
                        this.uS.notify(`File has been uploaded.`);
                    }
                    if (l2.isLoading) {
                        loader.text = `<div class="text-primary" >Processing data</div>`;
                        loader.progress = sub.progress;
                    }
                    if (sub.uploaded) {
                        l2.startPl();
                        l1.stopPl();
                    }
                    else
                        loader.progress = sub.progress;
                },
                error: (e) => {
                    this.uS.notify(e, 0);
                    loader.stopLoader();
                },
            });
        }
        catch (error) {
            this.uS.notify(error, 0);
            loader.stopLoader();
        }
        // this.loading = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ImportItemsComponent, deps: [{ token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ImportItemsComponent, isStandalone: true, selector: "import-items", inputs: { header: "header", templatePath: "templatePath", label: "label", uploadFunc: "uploadFunc" }, viewQueries: [{ propertyName: "modal", first: true, predicate: ModalComponent, descendants: true }], ngImport: i0, template: "<modal-comp width=\"50%\" [header]=\"header\">\n    <div class=\"\" body>\n        <div class=\"d-flex justify-content-center\">\n            <app-btn text=\"Download Template\" (mclick)=\"downloadTemplate()\" />\n        </div>\n        <div class=\"upload-case mt-24 p-40\" body>\n            <div class=\"text-center\">\n                <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #uploadLoader>\n                    <div class=\"row justify-content-center\" libDragDropFileUpload\n                        (fileDropped)=\"uploadFile($event[0],uploadLoader)\" #cont>\n                        <div class=\"col-lg-7\">\n                            <div class=\"icon\">\n                                <app-btn text=\"Select Document\" type=\"clear\" (click)=\"openFileDialog(uploadLoader)\" customIcon=\"fa fa-upload\" />\n                            </div>\n                            <div class=\"main\">\n                                <span class=\"text-underline pointer\" (click)=\"openFileDialog(uploadLoader)\">Select a CSV\n                                    file</span> to\n                                upload or drag\n                                and drop file, max size 50mb\n                            </div>\n                            <div class=\"sub\">\n                                must be in .csv or .xls format\n                            </div>\n                        </div>\n                    </div>\n                </loader>\n            </div>\n        </div>\n    </div>\n</modal-comp>", styles: [".upload-case{border:1px dashed var(--primary);border-radius:16px;padding:28px;margin-top:20px}.upload-case .icon{margin-top:30px}.upload-case .main{margin-top:20px;font-style:normal;font-weight:500;font-size:14px;line-height:21px;text-align:center;color:#333}.upload-case .sub{font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin-top:10px;color:#828282}\n"], dependencies: [{ kind: "component", type: ModalComponent, selector: "modal-comp", inputs: ["showHeader", "header", "loading", "width", "height", "data"], outputs: ["onClose"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "directive", type: DragDropFileUploadDirective, selector: "[libDragDropFileUpload]", outputs: ["fileDropped"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ImportItemsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'import-items', standalone: true, imports: [
                        ModalComponent,
                        BtnComponent,
                        LoaderComponent,
                        DragDropFileUploadDirective,
                    ], template: "<modal-comp width=\"50%\" [header]=\"header\">\n    <div class=\"\" body>\n        <div class=\"d-flex justify-content-center\">\n            <app-btn text=\"Download Template\" (mclick)=\"downloadTemplate()\" />\n        </div>\n        <div class=\"upload-case mt-24 p-40\" body>\n            <div class=\"text-center\">\n                <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #uploadLoader>\n                    <div class=\"row justify-content-center\" libDragDropFileUpload\n                        (fileDropped)=\"uploadFile($event[0],uploadLoader)\" #cont>\n                        <div class=\"col-lg-7\">\n                            <div class=\"icon\">\n                                <app-btn text=\"Select Document\" type=\"clear\" (click)=\"openFileDialog(uploadLoader)\" customIcon=\"fa fa-upload\" />\n                            </div>\n                            <div class=\"main\">\n                                <span class=\"text-underline pointer\" (click)=\"openFileDialog(uploadLoader)\">Select a CSV\n                                    file</span> to\n                                upload or drag\n                                and drop file, max size 50mb\n                            </div>\n                            <div class=\"sub\">\n                                must be in .csv or .xls format\n                            </div>\n                        </div>\n                    </div>\n                </loader>\n            </div>\n        </div>\n    </div>\n</modal-comp>", styles: [".upload-case{border:1px dashed var(--primary);border-radius:16px;padding:28px;margin-top:20px}.upload-case .icon{margin-top:30px}.upload-case .main{margin-top:20px;font-style:normal;font-weight:500;font-size:14px;line-height:21px;text-align:center;color:#333}.upload-case .sub{font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin-top:10px;color:#828282}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.UtilityService }]; }, propDecorators: { modal: [{
                type: ViewChild,
                args: [ModalComponent]
            }], header: [{
                type: Input
            }], templatePath: [{
                type: Input
            }], label: [{
                type: Input
            }], uploadFunc: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2ltcG9ydC1pdGVtcy9pbXBvcnQtaXRlbXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaW1wb3J0LWl0ZW1zL2ltcG9ydC1pdGVtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQWNwRCxNQUFNLE9BQU8sb0JBQW9CO0lBVy9CLFlBQW1CLEVBQWtCO1FBQWxCLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBVDVCLFdBQU0sR0FBVyxjQUFjLENBQUM7UUFFaEMsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQTBCcEMsa0JBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFuQkYsQ0FBQztJQUN6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTSwrQkFBK0IsQ0FBQztJQUM5RCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUs7UUFD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QVUsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7UUFDRCx3QkFBd0I7SUFDMUIsQ0FBQzs4R0FoRlUsb0JBQW9CO2tHQUFwQixvQkFBb0IscU5BQ3BCLGNBQWMsZ0RDdEIzQiw4Z0RBNkJhLGliRGRMLGNBQWMscUpBQ2QsWUFBWSxtVUFDWixlQUFlLGlIQUNmLDJCQUEyQjs7MkZBR3RCLG9CQUFvQjtrQkFaaEMsU0FBUzsrQkFDSSxjQUFjLGNBR1osSUFBSSxXQUNQO3dCQUNMLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLDJCQUEyQjtxQkFDOUI7cUdBR3dCLEtBQUs7c0JBQS9CLFNBQVM7dUJBQUMsY0FBYztnQkFDaEIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IElVcGxvYWRSZXNwb25zZSB9IGZyb20gJy4vaW1wb3J0LWl0ZW1zLm1vZGVsJztcbmltcG9ydCB7IERyYWdEcm9wRmlsZVVwbG9hZERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvZHJhZy1kcm9wLWZpbGUtdXBsb2FkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCdG5Db21wb25lbnQgfSBmcm9tICcuLi9idG4vYnRuLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW1wb3J0LWl0ZW1zJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1wb3J0LWl0ZW1zLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbXBvcnQtaXRlbXMuY29tcG9uZW50LnNjc3MnXSxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEJ0bkNvbXBvbmVudCxcbiAgICAgICAgTG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBEcmFnRHJvcEZpbGVVcGxvYWREaXJlY3RpdmUsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW1wb3J0SXRlbXNDb21wb25lbnQge1xuICBAVmlld0NoaWxkKE1vZGFsQ29tcG9uZW50KSBtb2RhbDogTW9kYWxDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nID0gJ0ltcG9ydCBJdGVtcyc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlUGF0aDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0NTViBmaWxlJztcbiAgQElucHV0KCkgdXBsb2FkRnVuYzogKGZpbGU6IEZpbGUpID0+IE9ic2VydmFibGU8e1xuICAgIGJvZHk/OiB7IGRhdGE6IElVcGxvYWRSZXNwb25zZSB9O1xuICAgIHByb2dyZXNzPzogbnVtYmVyO1xuICAgIHVwbG9hZGVkPzogYm9vbGVhbjtcbiAgfT47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1UzogVXRpbGl0eVNlcnZpY2UpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy51cGxvYWRGdW5jKSB0aHJvdyAnQW4gdXBsb2FkIGhhbmRsZXIgaXMgcmVxdWlyZWQnO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgfVxuXG4gIGRvd25sb2FkVGVtcGxhdGUoKSB7XG4gICAgdGhpcy51Uy5kb3dubG9hZEZyb21MaW5rKFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhdGgsXG4gICAgICBgJHt0aGlzLmxhYmVsfSB1cGxvYWQgdGVtcGxhdGUuY3N2YFxuICAgICk7XG4gIH1cbiAgYWNjZXB0ZWRUeXBlcyA9IFsnLmNzdicsICcueGxzeCcsICcueGxzJ107XG4gIG9wZW5GaWxlRGlhbG9nKGxvYWRlcjogTG9hZGVyQ29tcG9uZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsLnR5cGUgPSAnZmlsZSc7XG4gICAgZWwuYWNjZXB0ID0gdGhpcy5hY2NlcHRlZFR5cGVzLmpvaW4oJywnKTtcbiAgICBlbC5jbGljaygpO1xuICAgIGVsLm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGU6IEZpbGUgPSBlLnRhcmdldFsnZmlsZXMnXVswXTtcblxuICAgICAgdGhpcy51cGxvYWRGaWxlKGZpbGUsIGxvYWRlcik7XG4gICAgfTtcbiAgfVxuICBhc3luYyB1cGxvYWRGaWxlKGZpbGU6IEZpbGUsIGxvYWRlcjogTG9hZGVyQ29tcG9uZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvYWRlci5sb2FkZXJzLnJlc2V0TG9hZGVycygpO1xuICAgICAgY29uc3QgbDEgPSBsb2FkZXIubG9hZGVycy5hZGRMb2FkZXIoKSxcbiAgICAgICAgbDIgPSBsb2FkZXIubG9hZGVycy5hZGRMb2FkZXIoKTtcbiAgICAgIGwxLnN0YXJ0UGwoKTtcbiAgICAgIGxvYWRlci50ZXh0ID0gYDxkaXYgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIiA+VXBsb2FkaW5nIGZpbGUgdG8gc2VydmVyPC9kaXY+YDtcbiAgICAgIGlmICghdGhpcy5hY2NlcHRlZFR5cGVzLnNvbWUoKHgpID0+IGZpbGUubmFtZT8uZW5kc1dpdGgoeCkpKVxuICAgICAgICB0aHJvdyBgRmlsZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWRgO1xuICAgICAgdGhpcy51cGxvYWRGdW5jKGZpbGUpLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChzdWIpID0+IHtcbiAgICAgICAgICBpZiAoc3ViLnByb2dyZXNzKSBzdWIucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKHN1Yi5wcm9ncmVzcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3ViKTtcbiAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICBpZiAobDIuaXNMb2FkaW5nICYmIHN1Yi5wcm9ncmVzcyA9PSAxMDApIHtcbiAgICAgICAgICAgIGxvYWRlci5zdG9wTG9hZGVyKCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnVTLm5vdGlmeShgRmlsZSBoYXMgYmVlbiB1cGxvYWRlZC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGwyLmlzTG9hZGluZykge1xuICAgICAgICAgICAgbG9hZGVyLnRleHQgPSBgPGRpdiBjbGFzcz1cInRleHQtcHJpbWFyeVwiID5Qcm9jZXNzaW5nIGRhdGE8L2Rpdj5gO1xuICAgICAgICAgICAgbG9hZGVyLnByb2dyZXNzID0gc3ViLnByb2dyZXNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3ViLnVwbG9hZGVkKSB7XG4gICAgICAgICAgICBsMi5zdGFydFBsKCk7XG4gICAgICAgICAgICBsMS5zdG9wUGwoKTtcbiAgICAgICAgICB9IGVsc2UgbG9hZGVyLnByb2dyZXNzID0gc3ViLnByb2dyZXNzO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnVTLm5vdGlmeShlLCAwKTtcbiAgICAgICAgICBsb2FkZXIuc3RvcExvYWRlcigpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMudVMubm90aWZ5KGVycm9yLCAwKTtcbiAgICAgIGxvYWRlci5zdG9wTG9hZGVyKCk7XG4gICAgfVxuICAgIC8vIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICB9XG59XG4iLCI8bW9kYWwtY29tcCB3aWR0aD1cIjUwJVwiIFtoZWFkZXJdPVwiaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIlwiIGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGFwcC1idG4gdGV4dD1cIkRvd25sb2FkIFRlbXBsYXRlXCIgKG1jbGljayk9XCJkb3dubG9hZFRlbXBsYXRlKClcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1jYXNlIG10LTI0IHAtNDBcIiBib2R5PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGxvYWRlciBbbG9hZGluZ109XCJsb2FkaW5nXCIgW2hlaWdodF09XCJjb250Lm9mZnNldEhlaWdodFwiICN1cGxvYWRMb2FkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiIGxpYkRyYWdEcm9wRmlsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgKGZpbGVEcm9wcGVkKT1cInVwbG9hZEZpbGUoJGV2ZW50WzBdLHVwbG9hZExvYWRlcilcIiAjY29udD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtYnRuIHRleHQ9XCJTZWxlY3QgRG9jdW1lbnRcIiB0eXBlPVwiY2xlYXJcIiAoY2xpY2spPVwib3BlbkZpbGVEaWFsb2codXBsb2FkTG9hZGVyKVwiIGN1c3RvbUljb249XCJmYSBmYS11cGxvYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC11bmRlcmxpbmUgcG9pbnRlclwiIChjbGljayk9XCJvcGVuRmlsZURpYWxvZyh1cGxvYWRMb2FkZXIpXCI+U2VsZWN0IGEgQ1NWXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlPC9zcGFuPiB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWQgb3IgZHJhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgZHJvcCBmaWxlLCBtYXggc2l6ZSA1MG1iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXN0IGJlIGluIC5jc3Ygb3IgLnhscyBmb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xvYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbW9kYWwtY29tcD4iXX0=