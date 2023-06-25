import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { NgIf, NgClass, NgFor } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/utility.service";
export class FileUploadComponent {
    set _accept(v) {
        switch (v) {
            case 'image':
                this.accept = '.png,.jpg,.docx,.pdf';
                break;
            default:
                this.accept = v;
                break;
        }
    }
    constructor(uS) {
        this.uS = uS;
        this.mini = true;
        this.listFiles = true;
        this.fileChange = new EventEmitter();
        this.filesChange = new EventEmitter();
    }
    ngOnInit() { }
    get isSingle() {
        return !this.multiple;
    }
    acceptFiles(...files) {
        this.files = files;
        this.file = files ? files[0] : null;
        if (this.file?.type?.startsWith('image')) {
            const reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.imageString = reader.result;
            };
        }
        else
            this.imageString = null;
    }
    emitFiles() {
        if (this.multiple)
            this.filesChange.emit(this.files);
        else
            this.fileChange.emit(this.file);
    }
    onUpload(event) {
        const files = Array.from(event.target.files);
        this.acceptFiles(...files);
        this.emitFiles();
    }
    removeFile(index) {
        this.files.splice(index, 1);
        this.file = this.files ? this.files[0] : null;
        this.fileChange.emit(this.file);
        this.filesChange.emit(this.files);
    }
    openDialog() {
        const inp = document.createElement('input');
        inp.type = 'file';
        inp.accept = this.accept;
        inp.multiple = this.multiple;
        inp.onchange = (e) => {
            this.onUpload(e);
            inp.remove();
        };
        // document.body.appendChild(inp);
        inp.click();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FileUploadComponent, deps: [{ token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: FileUploadComponent, isStandalone: true, selector: "app-file-upload", inputs: { help: "help", label: "label", class: "class", icon: "icon", disabled: "disabled", multiple: "multiple", mini: "mini", useDocumentModal: "useDocumentModal", listFiles: "listFiles", _accept: ["accept", "_accept"], file: "file", files: "files" }, outputs: { fileChange: "fileChange", filesChange: "filesChange" }, ngImport: i0, template: "\n<div *ngIf=\"listFiles\" [ngClass]=\"{meta:mini}\" class=\"{{class}} form-label mb-2 hide-scroll\">\n  <div class=\"row align-items-start mb-1\" *ngFor=\"let item of files;let i = index\">\n    <div class=\"col\">\n      <div class=\"hide-scroll file-name\">\n        {{item?.name}}\n      </div>\n    </div>\n    <div class=\"col-auto text-end\">\n      <span class=\"text-danger pointer p-1 fa fa-close\" (click)=\"removeFile(i);\"></span>\n    </div>\n  </div>\n</div>\n<!-- <input type=\"file\"  style=\"display: none;\" accept=\"{{accept}}\" (change)=\"onUpload($event)\" #uploadInput [multiple]=\"multiple\"> -->\n<app-btn [icon]=\"icon\" (mclick)=\"openDialog()\" [type]=\"file?'primary':'secondary'\"\n  [disabled]=\"disabled\" [help]=\"help\" [text]=\"label\">\n\n</app-btn>", styles: [".meta,.file-name{height:23px}.meta{overflow-y:auto}.file-name{overflow:auto}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FileUploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload', standalone: true, imports: [
                        NgIf,
                        NgClass,
                        NgFor,
                        BtnComponent,
                    ], template: "\n<div *ngIf=\"listFiles\" [ngClass]=\"{meta:mini}\" class=\"{{class}} form-label mb-2 hide-scroll\">\n  <div class=\"row align-items-start mb-1\" *ngFor=\"let item of files;let i = index\">\n    <div class=\"col\">\n      <div class=\"hide-scroll file-name\">\n        {{item?.name}}\n      </div>\n    </div>\n    <div class=\"col-auto text-end\">\n      <span class=\"text-danger pointer p-1 fa fa-close\" (click)=\"removeFile(i);\"></span>\n    </div>\n  </div>\n</div>\n<!-- <input type=\"file\"  style=\"display: none;\" accept=\"{{accept}}\" (change)=\"onUpload($event)\" #uploadInput [multiple]=\"multiple\"> -->\n<app-btn [icon]=\"icon\" (mclick)=\"openDialog()\" [type]=\"file?'primary':'secondary'\"\n  [disabled]=\"disabled\" [help]=\"help\" [text]=\"label\">\n\n</app-btn>", styles: [".meta,.file-name{height:23px}.meta{overflow-y:auto}.file-name{overflow:auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.UtilityService }]; }, propDecorators: { help: [{
                type: Input
            }], label: [{
                type: Input
            }], class: [{
                type: Input
            }], icon: [{
                type: Input
            }], disabled: [{
                type: Input
            }], multiple: [{
                type: Input
            }], mini: [{
                type: Input
            }], useDocumentModal: [{
                type: Input
            }], listFiles: [{
                type: Input
            }], _accept: [{
                type: Input,
                args: ['accept']
            }], file: [{
                type: Input
            }], fileChange: [{
                type: Output
            }], files: [{
                type: Input
            }], filesChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLEtBQUssRUFFTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFldkQsTUFBTSxPQUFPLG1CQUFtQjtJQVc5QixJQUFxQixPQUFPLENBQUMsQ0FBUztRQUNwQyxRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO2dCQUNyQyxNQUFNO1lBRVI7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07U0FDVDtJQUNILENBQUM7SUFRRCxZQUFtQixFQUFrQjtRQUFsQixPQUFFLEdBQUYsRUFBRSxDQUFnQjtRQXRCNUIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUVaLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFlekIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBR1gsQ0FBQztJQUV6QyxRQUFR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QUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVlLE9BQU87c0JBQTNCLEtBQUs7dUJBQUMsUUFBUTtnQkFZTixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksVUFBVTtzQkFBbkIsTUFBTTtnQkFDRSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVkdJY29uVHlwZSB9IGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uLm1vZGVsJztcbmltcG9ydCB7IEJ0bkNvbXBvbmVudCB9IGZyb20gJy4uL2J0bi9idG4uY29tcG9uZW50JztcbmltcG9ydCB7IE5nSWYsIE5nQ2xhc3MsIE5nRm9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZmlsZS11cGxvYWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmdJZixcbiAgICAgICAgTmdDbGFzcyxcbiAgICAgICAgTmdGb3IsXG4gICAgICAgIEJ0bkNvbXBvbmVudCxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaGVscDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBTVkdJY29uVHlwZTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5pID0gdHJ1ZTtcbiAgQElucHV0KCkgdXNlRG9jdW1lbnRNb2RhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdEZpbGVzOiBib29sZWFuID0gdHJ1ZTtcbiAgYWNjZXB0OiBzdHJpbmc7XG4gIEBJbnB1dCgnYWNjZXB0Jykgc2V0IF9hY2NlcHQodjogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh2KSB7XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIHRoaXMuYWNjZXB0ID0gJy5wbmcsLmpwZywuZG9jeCwucGRmJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYWNjZXB0ID0gdjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIEBWaWV3Q2hpbGQoJ3VwbG9hZElucHV0JykgdXBsb2FkSW5wdXRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGU7XG4gIEBPdXRwdXQoKSBmaWxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlPigpO1xuICBASW5wdXQoKSBmaWxlczogRmlsZVtdO1xuICBAT3V0cHV0KCkgZmlsZXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcbiAgaW1hZ2VTdHJpbmc6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdVM6IFV0aWxpdHlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbiAgZ2V0IGlzU2luZ2xlKCkge1xuICAgIHJldHVybiAhdGhpcy5tdWx0aXBsZTtcbiAgfVxuICBwcml2YXRlIGFjY2VwdEZpbGVzKC4uLmZpbGVzOiBGaWxlW10pIHtcbiAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgdGhpcy5maWxlID0gZmlsZXMgPyBmaWxlc1swXSA6IG51bGw7XG4gICAgaWYgKHRoaXMuZmlsZT8udHlwZT8uc3RhcnRzV2l0aCgnaW1hZ2UnKSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5pbWFnZVN0cmluZyA9IHJlYWRlci5yZXN1bHQgYXMgYW55O1xuICAgICAgfTtcbiAgICB9IGVsc2UgdGhpcy5pbWFnZVN0cmluZyA9IG51bGw7XG4gIH1cbiAgcHJpdmF0ZSBlbWl0RmlsZXMoKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHRoaXMuZmlsZXNDaGFuZ2UuZW1pdCh0aGlzLmZpbGVzKTtcbiAgICBlbHNlIHRoaXMuZmlsZUNoYW5nZS5lbWl0KHRoaXMuZmlsZSk7XG4gIH1cblxuICBvblVwbG9hZChldmVudDogYW55KSB7XG4gICAgY29uc3QgZmlsZXMgPSBBcnJheS5mcm9tPEZpbGU+KGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgdGhpcy5hY2NlcHRGaWxlcyguLi5maWxlcyk7XG5cbiAgICB0aGlzLmVtaXRGaWxlcygpO1xuICB9XG5cbiAgcmVtb3ZlRmlsZShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuZmlsZSA9IHRoaXMuZmlsZXMgPyB0aGlzLmZpbGVzWzBdIDogbnVsbDtcblxuICAgIHRoaXMuZmlsZUNoYW5nZS5lbWl0KHRoaXMuZmlsZSk7XG4gICAgdGhpcy5maWxlc0NoYW5nZS5lbWl0KHRoaXMuZmlsZXMpO1xuICB9IFxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wLnR5cGUgPSAnZmlsZSc7XG4gICAgaW5wLmFjY2VwdCA9IHRoaXMuYWNjZXB0O1xuICAgIGlucC5tdWx0aXBsZSA9IHRoaXMubXVsdGlwbGU7XG4gICAgaW5wLm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgIHRoaXMub25VcGxvYWQoZSk7XG4gICAgICBpbnAucmVtb3ZlKCk7XG4gICAgfTtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucCk7XG4gICAgaW5wLmNsaWNrKCk7XG4gIH1cbn1cbiIsIlxuPGRpdiAqbmdJZj1cImxpc3RGaWxlc1wiIFtuZ0NsYXNzXT1cInttZXRhOm1pbml9XCIgY2xhc3M9XCJ7e2NsYXNzfX0gZm9ybS1sYWJlbCBtYi0yIGhpZGUtc2Nyb2xsXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtc3RhcnQgbWItMVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbGVzO2xldCBpID0gaW5kZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGlkZS1zY3JvbGwgZmlsZS1uYW1lXCI+XG4gICAgICAgIHt7aXRlbT8ubmFtZX19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gdGV4dC1lbmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXIgcG9pbnRlciBwLTEgZmEgZmEtY2xvc2VcIiAoY2xpY2spPVwicmVtb3ZlRmlsZShpKTtcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48IS0tIDxpbnB1dCB0eXBlPVwiZmlsZVwiICBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgYWNjZXB0PVwie3thY2NlcHR9fVwiIChjaGFuZ2UpPVwib25VcGxvYWQoJGV2ZW50KVwiICN1cGxvYWRJbnB1dCBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIj4gLS0+XG48YXBwLWJ0biBbaWNvbl09XCJpY29uXCIgKG1jbGljayk9XCJvcGVuRGlhbG9nKClcIiBbdHlwZV09XCJmaWxlPydwcmltYXJ5Jzonc2Vjb25kYXJ5J1wiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtoZWxwXT1cImhlbHBcIiBbdGV4dF09XCJsYWJlbFwiPlxuXG48L2FwcC1idG4+Il19