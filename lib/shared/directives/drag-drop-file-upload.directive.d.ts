import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DragDropFileUploadDirective {
    fileDropped: EventEmitter<File[]>;
    private background;
    dragOver(event: any): void;
    dragLeave(event: any): void;
    drop(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragDropFileUploadDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DragDropFileUploadDirective, "[libDragDropFileUpload]", never, {}, { "fileDropped": "fileDropped"; }, never, never, true, never>;
}
