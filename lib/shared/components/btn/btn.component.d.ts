import { EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { IFormSchema } from '../../models/form-schema.model';
import { BtnType, BtnGroup, IBtn } from '../../models/index.model';
import { SVGIconType } from '../svg-icon/svg-icon.model';
import { BtnService } from './btn.service';
import * as i0 from "@angular/core";
export declare class BtnComponent implements OnInit {
    btnS: BtnService;
    /** To be passed when to check for specific invalid form fields */
    formSchema: IFormSchema<typeof this.form>[];
    formIsInvalid: boolean;
    set _icon(v: SVGIconType | 'edit' | 'more');
    set _type(v: BtnType);
    set _group(v: BtnGroup);
    _mclass: string;
    actionType: 'submit' | 'button' | 'reset';
    animate: boolean;
    badge: string | number;
    class: string;
    customIcon: string;
    disabled: boolean;
    form: FormGroup | FormControl | FormArray;
    help: string;
    iconBtn: boolean;
    lite: boolean;
    loading: boolean;
    mclass: string;
    showHelpIcon: boolean;
    mini: boolean;
    text: string;
    valid: boolean;
    subButtons: IBtn[];
    onFormInvalid: keyof typeof OnFormInvalid;
    mclick: EventEmitter<any>;
    icon: any;
    iconPosition: string;
    constructor(btnS: BtnService);
    ngOnInit(): void;
    checkForm(): void;
    click($event?: any): void;
    get isDisabled(): boolean;
    /**
     * Set loader state
     * @param value Loader state
     */
    setLoader(value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BtnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BtnComponent, "app-btn,btn", never, { "formSchema": { "alias": "formSchema"; "required": false; }; "_icon": { "alias": "icon"; "required": false; }; "_type": { "alias": "type"; "required": false; }; "_group": { "alias": "group"; "required": false; }; "actionType": { "alias": "actionType"; "required": false; }; "animate": { "alias": "animate"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; "class": { "alias": "class"; "required": false; }; "customIcon": { "alias": "customIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "help": { "alias": "help"; "required": false; }; "iconBtn": { "alias": "iconBtn"; "required": false; }; "lite": { "alias": "lite"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "mclass": { "alias": "mclass"; "required": false; }; "showHelpIcon": { "alias": "showHelpIcon"; "required": false; }; "mini": { "alias": "mini"; "required": false; }; "text": { "alias": "text"; "required": false; }; "valid": { "alias": "valid"; "required": false; }; "subButtons": { "alias": "subButtons"; "required": false; }; "onFormInvalid": { "alias": "onFormInvalid"; "required": false; }; }, { "mclick": "mclick"; }, never, ["*"], true, never>;
}
declare enum OnFormInvalid {
    disable = "disable",
    warn = "warn"
}
export {};
