import { ElementRef } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { AutocompleteService } from '../autocomplete/autocomplete.service';
import { InputBasicComponent, IOption } from '../input/input.component';
import { InputService } from '../input/input.service';
import * as i0 from "@angular/core";
export declare class ChipListAutocompleteComponent<TFormGroup extends {
    [K in keyof TFormGroup]: AbstractControl<any, any>;
} = any, TOption = any> extends InputBasicComponent<TFormGroup, string[], TOption> {
    iS: InputService;
    autoS: AutocompleteService;
    separatorKeysCodes: number[];
    autoCompleteCtrl: FormControl<string>;
    filterFunc: (...args: any[]) => Observable<any[]>;
    fruitInput: ElementRef<HTMLInputElement>;
    filteredOptions: IOption[];
    addedDataFormatter: (param: string) => Observable<string>;
    message: string;
    constructor(iS: InputService, autoS: AutocompleteService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    add(event: MatChipInputEvent): void;
    remove(index: number): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipListAutocompleteComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipListAutocompleteComponent<any, any>, "chip-list-autocomplete", never, { "filterFunc": { "alias": "filterFunc"; "required": false; }; "addedDataFormatter": { "alias": "addedDataFormatter"; "required": false; }; }, {}, never, never, true, never>;
}
