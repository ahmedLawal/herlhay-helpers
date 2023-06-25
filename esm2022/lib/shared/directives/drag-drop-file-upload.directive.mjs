import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class DragDropFileUploadDirective {
    constructor() {
        this.fileDropped = new EventEmitter();
        this.background = '#ffffff';
    }
    // Dragover Event
    dragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#e2eefd';
    }
    // Dragleave Event
    dragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#ffffff';
    }
    // Drop Event
    drop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#ffffff';
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(Array.from(files));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: DragDropFileUploadDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: DragDropFileUploadDirective, isStandalone: true, selector: "[libDragDropFileUpload]", outputs: { fileDropped: "fileDropped" }, host: { listeners: { "dragover": "dragOver($event)", "dragleave": "dragLeave($event)", "drop": "drop($event)" }, properties: { "style.background-color": "this.background" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: DragDropFileUploadDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[libDragDropFileUpload]',
                    standalone: true,
                }]
        }], propDecorators: { fileDropped: [{
                type: Output
            }], background: [{
                type: HostBinding,
                args: ['style.background-color']
            }], dragOver: [{
                type: HostListener,
                args: ['dragover', ['$event']]
            }], dragLeave: [{
                type: HostListener,
                args: ['dragleave', ['$event']]
            }], drop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLWZpbGUtdXBsb2FkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9kaXJlY3RpdmVzL2RyYWctZHJvcC1maWxlLXVwbG9hZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNGLE1BQU0sT0FBTywyQkFBMkI7SUFKeEM7UUFLWSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDSixlQUFVLEdBQUcsU0FBUyxDQUFDO0tBdUJ2RTtJQXRCQyxpQkFBaUI7SUFDcUIsUUFBUSxDQUFDLEtBQVU7UUFDdkQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsa0JBQWtCO0lBQzRCLFNBQVMsQ0FBQyxLQUFVO1FBQ2hFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELGFBQWE7SUFDNEIsSUFBSSxDQUFDLEtBQVU7UUFDdEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7OEdBeEJVLDJCQUEyQjtrR0FBM0IsMkJBQTJCOzsyRkFBM0IsMkJBQTJCO2tCQUp2QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjs4QkFFVyxXQUFXO3NCQUFwQixNQUFNO2dCQUN3QyxVQUFVO3NCQUF4RCxXQUFXO3VCQUFDLHdCQUF3QjtnQkFFQyxRQUFRO3NCQUE3QyxZQUFZO3VCQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFNVSxTQUFTO3NCQUF0RCxZQUFZO3VCQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFNSSxJQUFJO3NCQUE1QyxZQUFZO3VCQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbGliRHJhZ0Ryb3BGaWxlVXBsb2FkXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BGaWxlVXBsb2FkRGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIGZpbGVEcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZC1jb2xvcicpIHByaXZhdGUgYmFja2dyb3VuZCA9ICcjZmZmZmZmJztcbiAgLy8gRHJhZ292ZXIgRXZlbnRcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKSBkcmFnT3ZlcihldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSAnI2UyZWVmZCc7XG4gIH1cbiAgLy8gRHJhZ2xlYXZlIEV2ZW50XG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIHB1YmxpYyBkcmFnTGVhdmUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmZmZmZmYnO1xuICB9XG4gIC8vIERyb3AgRXZlbnRcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pIHB1YmxpYyBkcm9wKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZmZmZmZmJztcbiAgICBjb25zdCBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5maWxlRHJvcHBlZC5lbWl0KEFycmF5LmZyb20oZmlsZXMpKTtcbiAgICB9XG4gIH1cbn0iXX0=