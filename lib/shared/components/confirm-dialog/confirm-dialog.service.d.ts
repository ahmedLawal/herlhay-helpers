import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ConfirmDialogService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    confirm(text: string): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmDialogService>;
}
