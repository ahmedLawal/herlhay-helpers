import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable, ReplaySubject } from 'rxjs';
import { EValidationType, InputType, IValidationMessage } from '../../models/index.model';
import { SVGIconType } from '../svg-icon/svg-icon.model';
import { InputService } from './input.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
export declare class InputBasicComponent<TFormGroup extends {
    [K in keyof TFormGroup]: AbstractControl<any, any>;
} = any, TControl = string, TOption = any> implements OnInit {
    iS: InputService;
    accept?: string;
    autocomplete?: boolean;
    autoPickValueField?: boolean;
    clearOnDisable?: boolean;
    cls?: string;
    colored?: boolean;
    checked?: boolean;
    contextData?: any;
    dashboardInput?: boolean;
    debug?: boolean;
    decimalPoints?: number;
    endLabel?: string;
    endLabelTooltip?: string;
    files?: File[];
    form?: FormGroup<TFormGroup>;
    validationType?: EValidationType;
    validations?: IValidationMessage[];
    /** FormGroup */
    set _form(v: FormGroup<TFormGroup>);
    noFormat?: boolean;
    hide?: boolean;
    hint?: string;
    icon?: SVGIconType;
    id?: string;
    inpCl?: string;
    label?: string;
    labelLink?: string;
    labelField?: keyof TOption;
    labelType?: OptionLabelType;
    lblCl?: string;
    light?: boolean;
    loading?: boolean;
    max?: number;
    min?: number;
    mini?: boolean;
    multiple?: boolean;
    name?: keyof TFormGroup;
    control?: FormControl<TControl>;
    /** FormControlName */
    set _name(v: keyof TFormGroup);
    optionFormatter?: (item: TOption) => string;
    optionsInitFunc?: () => Observable<TOption[]>;
    placeholder?: string;
    prefix?: string;
    startField?: string;
    endField?: string;
    readonly?: boolean;
    required?: boolean;
    noPaste?: boolean;
    showEmptyOption?: boolean;
    showLabel?: boolean;
    showSeperateLabel?: boolean;
    showValidation?: boolean;
    showValidationMsg?: boolean;
    showValidationIcon?: boolean;
    small?: boolean;
    stacked?: boolean;
    suffix?: string;
    theme?: InputTheme;
    translateOptions?: boolean;
    valueField?: keyof TOption;
    vms?: IValidationMessage[];
    xsmall: boolean;
    mchange: EventEmitter<any>;
    validityChecked: EventEmitter<any>;
    mSelectOptionChange: EventEmitter<any>;
    mContextChange: EventEmitter<any>;
    disabled?: boolean;
    options?: IOption[];
    options$?: ReplaySubject<IOption[]>;
    rawOptions?: any[];
    showPassword?: boolean;
    type?: InputType;
    viewInited?: boolean;
    forcePatched?: boolean;
    selectionObject?: TOption;
    oType?: InputType;
    appearance: MatFormFieldAppearance;
    set _validationKey(v: EValidationType);
    set _disabled(v: boolean);
    customSelectChangeAction: (val: string | number, options: any[], rawOptions: any[]) => any;
    set _options(v: TOption[]);
    set _type(v: InputType);
    __value: string | number;
    set _value(v: string | number);
    inpTag: ElementRef<HTMLInputElement>;
    imagePaths?: string[];
    constructor(iS: InputService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    disableControl(control?: AbstractControl): void;
    get isRequired(): boolean;
    change(e: any | MatCheckboxChange | MatSlideToggleChange): void;
    get valid(): boolean;
    get invalid(): boolean;
    get value(): TControl;
    get hasValue(): boolean;
    get invalidCheckbox(): boolean;
    upload(e: any): void;
    log(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputBasicComponent<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputBasicComponent<any, any, any>, "app-input", never, { "accept": { "alias": "accept"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "autoPickValueField": { "alias": "autoPickValueField"; "required": false; }; "clearOnDisable": { "alias": "clearOnDisable"; "required": false; }; "cls": { "alias": "cls"; "required": false; }; "colored": { "alias": "colored"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "contextData": { "alias": "contextData"; "required": false; }; "dashboardInput": { "alias": "dashboardInput"; "required": false; }; "debug": { "alias": "debug"; "required": false; }; "decimalPoints": { "alias": "decimalPoints"; "required": false; }; "endLabel": { "alias": "endLabel"; "required": false; }; "endLabelTooltip": { "alias": "endLabelTooltip"; "required": false; }; "files": { "alias": "files"; "required": false; }; "_form": { "alias": "form"; "required": true; }; "noFormat": { "alias": "noFormat"; "required": false; }; "hide": { "alias": "hide"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "id": { "alias": "id"; "required": false; }; "inpCl": { "alias": "inpCl"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelLink": { "alias": "labelLink"; "required": false; }; "labelField": { "alias": "labelField"; "required": false; }; "labelType": { "alias": "labelType"; "required": false; }; "lblCl": { "alias": "lblCl"; "required": false; }; "light": { "alias": "light"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "mini": { "alias": "mini"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "_name": { "alias": "name"; "required": false; }; "optionFormatter": { "alias": "optionFormatter"; "required": false; }; "optionsInitFunc": { "alias": "optionsInitFunc"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "startField": { "alias": "startField"; "required": false; }; "endField": { "alias": "endField"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "noPaste": { "alias": "noPaste"; "required": false; }; "showEmptyOption": { "alias": "showEmptyOption"; "required": false; }; "showLabel": { "alias": "showLabel"; "required": false; }; "showSeperateLabel": { "alias": "showSeperateLabel"; "required": false; }; "showValidation": { "alias": "showValidation"; "required": false; }; "showValidationMsg": { "alias": "showValidationMsg"; "required": false; }; "showValidationIcon": { "alias": "showValidationIcon"; "required": false; }; "small": { "alias": "small"; "required": false; }; "stacked": { "alias": "stacked"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "translateOptions": { "alias": "translateOptions"; "required": false; }; "valueField": { "alias": "valueField"; "required": false; }; "vms": { "alias": "vms"; "required": false; }; "xsmall": { "alias": "xsmall"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "_validationKey": { "alias": "validationKey"; "required": false; }; "_disabled": { "alias": "disabled"; "required": false; }; "customSelectChangeAction": { "alias": "customSelectChangeAction"; "required": false; }; "_options": { "alias": "options"; "required": false; }; "_type": { "alias": "type"; "required": false; }; "_value": { "alias": "mvalue"; "required": false; }; }, { "mchange": "mchange"; "validityChecked": "validityChecked"; "mSelectOptionChange": "mSelectOptionChange"; "mContextChange": "mContextChange"; }, never, never, true, never>;
}
type InputTheme = 1 | 2;
export type OptionLabelType = 'bnk' | 'ccd' | 'cd' | 'cdt' | 'cf' | 'cmd' | 'cn' | 'ct' | 'gd' | 'ha' | 'id' | 'if' | 'ifl' | 'it' | 'md' | 'pd' | 'nf' | 'td' | 'title' | 'ud' | 'uf' | 'vl' | 'vv';
export interface IOption {
    value: any;
    label: string;
}
export {};
