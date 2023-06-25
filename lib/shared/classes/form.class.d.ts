import { AbstractControlOptions, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
export declare namespace Forms {
    class ConfigForms {
        matches(formGroup: FormGroup, field1?: string, field2?: string): void;
        matches2(formGroup: any, field1: string, field2: string): {
            noMatch: boolean;
        };
        email(required?: boolean, value?: string): FormControl<string>;
        name(required?: boolean, minLength?: number, value?: string): FormControl<string>;
        array(required?: boolean, value?: any[]): FormControl<any[]>;
        boolean(required?: boolean, value?: boolean): FormControl<boolean>;
        username(required?: boolean, minLength?: number, maxLength?: number, value?: string): FormControl<string>;
        default<T = any>(value?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormControl<T>;
        number(required?: boolean, value?: any, maxLength?: number): FormControl<any>;
        integer(required?: boolean, value?: any, maxLength?: number): FormControl<any>;
        postalCode(required?: boolean, value?: any): FormControl<any>;
        phone(required?: boolean, value?: string): FormControl<string>;
        requiredMinLength(length: number, value?: string): FormControl<string>;
        requiredMinMaxLength(min: number, max: number): FormControl<string>;
        required(value?: any): FormControl<any>;
        minLength(length?: number, value?: string): FormControl<string>;
        url(value?: string, required?: boolean): FormControl<string>;
        pattern(pattern: RegExp, required?: boolean, value?: any): FormControl<any>;
    }
}
export declare const configForms: Forms.ConfigForms;
export declare const configPatterns: {
    date: RegExp;
    email: RegExp;
    integer: RegExp;
    name: RegExp;
    number: RegExp;
    phone: RegExp;
    postal: RegExp;
    url: RegExp;
    username: RegExp;
    website: RegExp;
};
