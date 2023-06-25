import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Template to show when there is a data in a table
 */
export declare class NoListComponent {
    header: string;
    subheader: string;
    addBtnText: string;
    hideAddBtn: boolean;
    addButtonClicked: EventEmitter<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NoListComponent, "no-list", never, { "header": { "alias": "header"; "required": false; }; "subheader": { "alias": "subheader"; "required": false; }; "addBtnText": { "alias": "addBtnText"; "required": false; }; "hideAddBtn": { "alias": "hideAddBtn"; "required": false; }; }, { "addButtonClicked": "addButtonClicked"; }, never, never, true, never>;
}
