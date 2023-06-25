import { AbstractControl } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';
import { ModalFormComponent } from '../modal-form.component';
import * as i0 from "@angular/core";
export declare class ModalFormTemplateComponent<TItem, TForm extends {
    [K in keyof TForm]: AbstractControl<any, any>;
} = any> {
    comp: ModalFormComponent<TItem, TForm>;
    modal: ModalComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalFormTemplateComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalFormTemplateComponent<any, any>, "modal-form-template", never, { "comp": { "alias": "comp"; "required": false; }; }, {}, never, ["[afterForm]", "*"], true, never>;
}
