import { EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { BtnComponent } from '../btn/btn.component';
import { FeedbackCardComponent } from '../feedback-card/feedback-card.component';
import { ModalFormTemplateComponent } from './modal-form-template/modal-form-template.component';
import { IFormSchema } from '../../models/form-schema.model';
import { EPageType } from '../../models/index.model';
import * as i0 from "@angular/core";
export declare class ModalFormComponent<TItem, TForm extends {
    [K in keyof TForm]: AbstractControl<any, any>;
} = any> {
    pageType: EPageType;
    form: FormGroup<TForm>;
    loading: boolean;
    header: string;
    width: string;
    formFields: IFormSchema[];
    onSaved: EventEmitter<TItem>;
    modal: ModalFormTemplateComponent<TItem, TForm>;
    protected open: (item?: TItem) => Promise<any>;
    protected submitFunction: () => Promise<any>;
    ngAfterViewInit(): void;
    openAsEdit(item: TItem): Promise<void>;
    openAsCreate(defaultData?: any): Promise<void>;
    openAsView(item: TItem): Promise<void>;
    private prepareOpen;
    private _openForm;
    cancel(): void;
    close(): void;
    submit(fc: FeedbackCardComponent, btn?: BtnComponent): Promise<void>;
    get isCreate(): boolean;
    get isEdit(): boolean;
    get isShow(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalFormComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalFormComponent<any, any>, "modal-form", never, {}, { "onSaved": "onSaved"; }, never, never, true, never>;
}
