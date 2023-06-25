import { FormGroup } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import * as i0 from "@angular/core";
export declare class ListingFiltersComponent {
    form: FormGroup<any>;
    set _form(v: FormGroup);
    formClone: FormGroup;
    modalRef: ModalComponent;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(noAction?: boolean): void;
    clear(): void;
    search(): void;
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListingFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListingFiltersComponent, "lib-listing-filters", never, { "_form": { "alias": "form"; "required": false; }; }, {}, never, ["*"], true, never>;
}
