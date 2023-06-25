import { IOption, OptionLabelType } from './input.component';
import * as i0 from "@angular/core";
export declare class InputService {
    readonly defaultValue: {
        showSeperateLabel: boolean;
        showValidationMsg: boolean;
    };
    readonly optionLabellerFunctions: {
        [x: string]: (option: any) => {
            label: string;
            value: string;
        };
    };
    constructor();
    labeller: (field1: string, field2: string) => {
        value: string;
        label: string;
    };
    optionsFormatter: (options: any[], valueField?: string, formatter?: any, labelType?: OptionLabelType, labelField?: string, autoPickValueField?: boolean) => {
        value: any;
        label: any;
    }[];
    trackByValue(index: any, item: IOption): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InputService>;
}
