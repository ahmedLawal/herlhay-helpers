import { EventEmitter } from '@angular/core';
import { MiniModalComponent } from '../modal/mini-modal/mini-modal.component';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MiniSearchListComponent<TList = {
    value: string;
    label: string;
}> {
    list: TList[];
    labelField: keyof TList;
    valueField: keyof TList;
    _done: EventEmitter<any>;
    header: string;
    selected: any;
    done(): void;
    mmCRef: MiniModalComponent;
    form: FormGroup<{
        query: FormControl<string>;
    }>;
    /**
     *
     * @param parent This is the element requesting for the modal to be opened. It will be used to determine the position of the modal
     */
    open(parent: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MiniSearchListComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MiniSearchListComponent<any>, "mini-search-list", never, { "list": { "alias": "list"; "required": false; }; "labelField": { "alias": "labelField"; "required": false; }; "valueField": { "alias": "valueField"; "required": false; }; "header": { "alias": "header"; "required": false; }; }, { "_done": "done"; }, never, never, true, never>;
}
