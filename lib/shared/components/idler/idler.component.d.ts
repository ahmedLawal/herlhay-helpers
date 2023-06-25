import { OnInit } from '@angular/core';
import { MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import { UtilityService } from '../../../services/utility.service';
import { IdlerService } from './idler.service';
import * as i0 from "@angular/core";
export declare class IdlerComponent implements OnInit {
    dialogRef: MatDialogRef<IdlerComponent>;
    idlerService: IdlerService;
    uS: UtilityService;
    constructor(dialogRef: MatDialogRef<IdlerComponent>, idlerService: IdlerService, uS: UtilityService);
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IdlerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IdlerComponent, "app-idler", never, {}, {}, never, never, true, never>;
}
