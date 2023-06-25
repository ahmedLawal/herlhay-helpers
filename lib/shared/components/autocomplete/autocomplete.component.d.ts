import { AbstractControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { InputBasicComponent, IOption } from '../input/input.component';
import { InputService } from '../input/input.service';
import { AutocompleteService } from './autocomplete.service';
import * as i0 from "@angular/core";
export declare class AutocompleteComponent<TFormGroup extends {
    [K in keyof TFormGroup]: AbstractControl<any, any>;
} = any, TControl = any, TOption = any> extends InputBasicComponent<TFormGroup, TControl, TOption> {
    iS: InputService;
    autoS: AutocompleteService;
    filteredOptions: IOption[];
    validate: boolean;
    filterFunc: (...args: any[]) => Observable<any[]>;
    constructor(iS: InputService, autoS: AutocompleteService);
    ngOnInit(): void;
    selected($event: MatAutocompleteSelectedEvent): void;
    displayWith: (val: string) => string;
    includesOption: (control: AbstractControl) => {
        notFound: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteComponent<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteComponent<any, any, any>, "app-autocomplete", never, { "validate": { "alias": "validate"; "required": false; }; "filterFunc": { "alias": "filterFunc"; "required": false; }; }, {}, never, never, true, never>;
}
