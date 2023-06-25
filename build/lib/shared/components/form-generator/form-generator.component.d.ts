import { EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';
import { IFormOptions, IFormSchema } from '../../models/form-schema.model';
import { InputBasicComponent } from '../input/input.component';
import { ResponseCardComponent } from '../response-card/response-card.component';
import * as i0 from "@angular/core";
export declare class FormGeneratorComponent implements OnInit {
    uS: UtilityService;
    keyField: 'field' | 'label';
    onSubmit: EventEmitter<any>;
    _submissionResponse: EventEmitter<any>;
    submitFunc: (value: any, _this: FormGeneratorComponent) => Promise<any>;
    submitBtnText: string;
    submitSuccessText: string;
    showSubmitBtn: boolean;
    isShow: boolean;
    gridStyle: string;
    gridMDStyle: string;
    gridLGStyle: string;
    gridXXLStyle: string;
    useLoader: boolean;
    loading: boolean;
    showSeparateLabels: boolean;
    hasResponse: boolean;
    hideResponseCard: boolean;
    responseHeader: string;
    /**
     * Formgroup for the fields passed in
     */
    form: FormGroup;
    /**
     * Formgroup or controls to check for validity before submission
     */
    submitForm: FormGroup | FormControl;
    formSchema: IFormSchema[];
    submissionResponse: any;
    set _formSchema(v: IFormSchema[]);
    optionsMap: IFormOptions;
    cellCountryCode3s: IFormOptions;
    errorMessage: string;
    constructor(uS: UtilityService);
    ngOnInit(): void;
    init(schema: IFormSchema[]): void;
    ngAfterViewInit(): void;
    amendFormScheme(fieldName: string, formScheme: Partial<IFormSchema>): void;
    onChange(field: IFormSchema, inp: InputBasicComponent): void;
    addItem(scheme: IFormSchema, data?: any): void;
    removeItem(index: number, formName: string | number | symbol): void;
    submit(rc: ResponseCardComponent): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormGeneratorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormGeneratorComponent, "form-generator", never, { "keyField": { "alias": "keyField"; "required": false; }; "submitFunc": { "alias": "submitFunc"; "required": false; }; "submitBtnText": { "alias": "submitBtnText"; "required": false; }; "submitSuccessText": { "alias": "submitSuccessText"; "required": false; }; "showSubmitBtn": { "alias": "showSubmitBtn"; "required": false; }; "isShow": { "alias": "isShow"; "required": false; }; "gridStyle": { "alias": "gridStyle"; "required": false; }; "gridMDStyle": { "alias": "gridMDStyle"; "required": false; }; "gridLGStyle": { "alias": "gridLGStyle"; "required": false; }; "gridXXLStyle": { "alias": "gridXXLStyle"; "required": false; }; "useLoader": { "alias": "useLoader"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showSeparateLabels": { "alias": "showSeparateLabels"; "required": false; }; "hasResponse": { "alias": "hasResponse"; "required": false; }; "hideResponseCard": { "alias": "hideResponseCard"; "required": false; }; "responseHeader": { "alias": "responseHeader"; "required": false; }; "form": { "alias": "form"; "required": false; }; "submitForm": { "alias": "submitForm"; "required": false; }; "_formSchema": { "alias": "formSchema"; "required": false; }; }, { "onSubmit": "onSubmit"; "_submissionResponse": "submissionResponse"; }, never, ["[response]"], true, never>;
}
