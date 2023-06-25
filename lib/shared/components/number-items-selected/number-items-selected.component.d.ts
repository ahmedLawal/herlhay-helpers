import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NumberItemsSelectedComponent {
    count: number;
    useEdit: boolean;
    _onDelete: EventEmitter<boolean>;
    _onEdit: EventEmitter<boolean>;
    constructor();
    onDelete(): void;
    onEdit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberItemsSelectedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberItemsSelectedComponent, "number-items-selected", never, { "count": { "alias": "count"; "required": false; }; "useEdit": { "alias": "useEdit"; "required": false; }; }, { "_onDelete": "onDelete"; "_onEdit": "onEdit"; }, never, never, true, never>;
}
