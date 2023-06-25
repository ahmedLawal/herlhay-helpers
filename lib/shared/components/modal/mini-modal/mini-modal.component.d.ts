import { OnInit } from '@angular/core';
import { UtilityService } from '../../../../services/utility.service';
import { ModalComponent } from '../modal.component';
import * as i0 from "@angular/core";
export declare class MiniModalComponent extends ModalComponent implements OnInit {
    uS: UtilityService;
    height: string;
    showFooter: boolean;
    constructor(uS: UtilityService);
    ngOnInit(): void;
    /**
     *
     * @param parent This is the element requesting for the modal to be opened. It will be used to determine the position of the modal
     */
    open(parent: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MiniModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MiniModalComponent, "mini-modal", never, { "height": { "alias": "height"; "required": false; }; "showFooter": { "alias": "showFooter"; "required": false; }; }, {}, never, ["*"], true, never>;
}
