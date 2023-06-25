import { OnInit } from '@angular/core';
import { MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ModalHeaderComponent implements OnInit {
    dialogRef: MatDialogRef<any>;
    header: string;
    /**
     * Value to pass into the close function of the modal
     */
    onCloseValue: any;
    constructor();
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalHeaderComponent, "modal-header", never, { "dialogRef": { "alias": "dialogRef"; "required": false; }; "header": { "alias": "header"; "required": false; }; "onCloseValue": { "alias": "onCloseValue"; "required": false; }; }, {}, never, ["*"], true, never>;
}
