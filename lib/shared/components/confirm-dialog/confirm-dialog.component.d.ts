import { OnInit } from '@angular/core';
import { MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ConfirmDialogComponent implements OnInit {
    text: string;
    dialogRef: MatDialogRef<ConfirmDialogComponent>;
    constructor(text: string, dialogRef: MatDialogRef<ConfirmDialogComponent>);
    ngOnInit(): void;
    yes(): void;
    no(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialogComponent, "app-confirm-dialog", never, {}, {}, never, never, true, never>;
}
