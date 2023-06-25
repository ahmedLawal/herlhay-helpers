import { PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IOption, OptionLabelType } from './input.component';
import { InputService } from './input.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export declare class FilterOptions implements PipeTransform {
    transform(arr: any[], query: string, field?: string): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterOptions, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterOptions, "filterOptions", true>;
}
export declare class OptionerPipe implements PipeTransform {
    transform(options: any[], labelField: any, idField?: any, basic?: boolean): {
        value: any;
        label: string;
    }[];
    arrToStr(labelField: string, x: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<OptionerPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<OptionerPipe, "optioner", true>;
}
export declare class ValidationMsg implements PipeTransform {
    transform(message: string, prefix?: string, suffix?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationMsg, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ValidationMsg, "validationMsg", true>;
}
export declare class Validator implements PipeTransform {
    transform(validation: any, control: AbstractControl, update?: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Validator, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Validator, "validator", true>;
}
export declare class OptionLabeller implements PipeTransform {
    iS: InputService;
    transform(option: any, formatter?: any, optionType?: OptionLabelType, labelField?: string): string;
    constructor(iS: InputService);
    static ɵfac: i0.ɵɵFactoryDeclaration<OptionLabeller, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<OptionLabeller, "optionLabeller", true>;
}
export declare class OptionsFormatter implements PipeTransform {
    iS: InputService;
    transform(options: any[], valueField?: string, formatter?: any, optionType?: OptionLabelType, labelField?: string): IOption[];
    constructor(iS: InputService);
    static ɵfac: i0.ɵɵFactoryDeclaration<OptionsFormatter, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<OptionsFormatter, "optionsFormatter", true>;
}
export declare class InputClassPipe implements PipeTransform {
    transform(inpCl: string, valid?: boolean, invalid?: boolean, showValidation?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputClassPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<InputClassPipe, "inputClass", true>;
}
export declare class InputPipesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputPipesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputPipesModule, never, [typeof i1.CommonModule, typeof i2.FormsModule, typeof FilterOptions, typeof Validator, typeof ValidationMsg, typeof OptionerPipe, typeof OptionLabeller, typeof OptionsFormatter, typeof InputClassPipe], [typeof FilterOptions, typeof Validator, typeof ValidationMsg, typeof OptionerPipe, typeof OptionLabeller, typeof OptionsFormatter, typeof InputClassPipe, typeof i2.FormsModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputPipesModule>;
}
