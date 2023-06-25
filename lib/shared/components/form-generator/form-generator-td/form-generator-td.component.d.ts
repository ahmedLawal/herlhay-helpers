import { EventEmitter } from '@angular/core';
import { InputTD_RFComponent } from '../../input/input-td-rf.component';
import { FormGeneratorComponent } from '../form-generator.component';
import { IFormSchema } from '../../../models/form-schema.model';
import * as i0 from "@angular/core";
export declare class FormGeneratorTdComponent extends FormGeneratorComponent {
    header: string;
    showDivider: boolean;
    subTitle: string;
    _valuesChange: EventEmitter<{
        form: IFormSchema[];
    }>;
    onChange(field: IFormSchema, inp: InputTD_RFComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormGeneratorTdComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormGeneratorTdComponent, "form-generator-td", never, { "header": { "alias": "header"; "required": false; }; "showDivider": { "alias": "showDivider"; "required": false; }; "subTitle": { "alias": "subTitle"; "required": false; }; }, { "_valuesChange": "valuesChange"; }, never, ["[response]"], true, never>;
}
