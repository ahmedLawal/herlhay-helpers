import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SearchBoxComponent {
    label: string;
    query: string;
    queryChanged: EventEmitter<string>;
    opened: boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchBoxComponent, "search-box", never, { "label": { "alias": "label"; "required": false; }; "query": { "alias": "query"; "required": false; }; }, { "queryChanged": "queryChanged"; }, never, never, true, never>;
}
