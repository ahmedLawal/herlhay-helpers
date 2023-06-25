import { MatDialog as MatDialog, MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import { Idle } from '@ng-idle/core';
import { IdlerComponent } from './idler.component';
import * as i0 from "@angular/core";
export declare class IdlerService {
    private idle;
    dialog: MatDialog;
    private idleState;
    private timedOut;
    private onIdleFunctions;
    private _timeLeft;
    idlerModal: MatDialogRef<IdlerComponent>;
    get timeLeft(): number;
    private idleTime;
    private timeOutTime;
    constructor(idle: Idle, dialog: MatDialog);
    startIdler(idleTimeSec?: number): void;
    private reset;
    clear(): void;
    addOnIdleFunction(func: any): void;
    openTimeWarningModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IdlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdlerService>;
}
