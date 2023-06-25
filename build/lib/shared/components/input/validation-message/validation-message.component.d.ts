import { OnInit, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { InputBasicComponent } from '../input.component';
import { EValidationType, IValidationMessage } from '../../../models/index.model';
import * as i0 from "@angular/core";
export declare class ErrorMessagesPipe implements PipeTransform {
    errMsgPipe: ErrorMessagePipe;
    transform(validations: IValidationMessage[], label: string, maxLength: number, minLength: number, control: FormControl): string;
    constructor(errMsgPipe: ErrorMessagePipe);
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorMessagesPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ErrorMessagesPipe, "errorMessages", true>;
}
export declare class ErrorMessagePipe implements PipeTransform {
    transform(errObj: IValidationMessage, label?: string, maxLength?: number, minLength?: number, controlMessage?: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorMessagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ErrorMessagePipe, "errorMessage", true>;
}
export declare class ValidationMessageComponent implements OnInit {
    validationType: EValidationType;
    set _validationKey(v: EValidationType);
    _control: AbstractControl;
    input: InputBasicComponent;
    _label: string;
    minLength: number;
    maxLength: number;
    customMessage: 'Value is invalid';
    validations: IValidationMessage[];
    constructor();
    ngOnInit(): void;
    get label(): string;
    get control(): AbstractControl<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationMessageComponent, "app-validation-message", never, { "_validationKey": { "alias": "validationKey"; "required": false; }; "_control": { "alias": "control"; "required": false; }; "input": { "alias": "input"; "required": false; }; "_label": { "alias": "label"; "required": false; }; "minLength": { "alias": "minLength"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "customMessage": { "alias": "customMessage"; "required": false; }; }, {}, never, never, true, never>;
}
