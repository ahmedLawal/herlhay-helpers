import { ElementRef, QueryList } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { InputBasicComponent } from '../input.component';
import * as i0 from "@angular/core";
export declare class OtpInputComponent extends InputBasicComponent {
    subForm: FormArray<FormControl<string>>;
    otpLength?: number;
    set _otpLength(v: number);
    otpInputRef: QueryList<ElementRef<HTMLInputElement>>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    genForm(otpLength?: number): void;
    onChange(e: any, form: FormControl): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtpInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtpInputComponent, "app-otp-input", never, { "_otpLength": { "alias": "otpLength"; "required": false; }; }, {}, never, never, true, never>;
}
