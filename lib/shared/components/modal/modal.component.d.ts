import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { MatDialogConfig, MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UtilityService } from '../../../services/utility.service';
import { LoaderComponent } from '../loader/loader.component';
import * as i0 from "@angular/core";
export declare class ModalComponent implements OnInit {
    uS: UtilityService;
    tempRef: TemplateRef<any>;
    loaderRef: LoaderComponent;
    showHeader: boolean;
    header: string;
    loading: boolean;
    width: string;
    height: string;
    data: {
        [x: string]: any;
    };
    onClose: EventEmitter<any>;
    dialogRef: MatDialogRef<any>;
    protected closedSub: Subscription;
    constructor(uS: UtilityService);
    ngOnInit(): void;
    modalConfigMap: (config: MatDialogConfig) => MatDialogConfig<any>;
    open(...args: any[]): void;
    close(data?: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "modal-comp", never, { "showHeader": { "alias": "showHeader"; "required": false; }; "header": { "alias": "header"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, { "onClose": "onClose"; }, never, ["[body]"], true, never>;
}
