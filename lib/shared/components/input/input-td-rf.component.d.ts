import { EventEmitter } from '@angular/core';
import { AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';
import { InputBasicComponent } from './input.component';
import { InputService } from './input.service';
import * as i0 from "@angular/core";
export declare class InputTD_RFComponent<TOption = any> extends InputBasicComponent<any, TOption> {
    iS: InputService;
    validators?: ValidatorFn[];
    set _validators(v: ValidatorFn[]);
    asyncValidators?: AsyncValidatorFn[];
    set _asyncValidators(v: AsyncValidatorFn[]);
    set _form(v: FormGroup);
    private model?;
    set _model(v: any);
    modelChange: EventEmitter<any>;
    set _disabled(v: boolean);
    constructor(iS: InputService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    get invalid(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTD_RFComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTD_RFComponent<any>, "app-input-td-rf", never, { "_validators": { "alias": "validators"; "required": false; }; "_asyncValidators": { "alias": "asyncValidators"; "required": false; }; "_form": { "alias": "form"; "required": false; }; "_model": { "alias": "model"; "required": false; }; "_disabled": { "alias": "disabled"; "required": false; }; }, { "modelChange": "modelChange"; }, never, never, true, never>;
}
