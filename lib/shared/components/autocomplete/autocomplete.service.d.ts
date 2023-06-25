import { Observable } from 'rxjs';
import { IOption } from '../input/input.component';
import * as i0 from "@angular/core";
export declare class AutocompleteService {
    constructor();
    filterOptions(query: string, options: IOption[]): Observable<IOption[]>;
    normalizeValue(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AutocompleteService>;
}
