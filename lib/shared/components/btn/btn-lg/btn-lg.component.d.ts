import { QueryParamsHandling } from '@angular/router';
import { BtnComponent } from '../btn.component';
import { BtnService } from '../btn.service';
import * as i0 from "@angular/core";
export declare class BtnLgComponent extends BtnComponent {
    btnS: BtnService;
    queryParamsHandling: QueryParamsHandling;
    route: string;
    value: string | number;
    subText: string;
    subValue: string | number;
    constructor(btnS: BtnService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BtnLgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BtnLgComponent, "app-btn-lg", never, { "queryParamsHandling": { "alias": "queryParamsHandling"; "required": false; }; "route": { "alias": "route"; "required": false; }; "value": { "alias": "value"; "required": false; }; "subText": { "alias": "subText"; "required": false; }; "subValue": { "alias": "subValue"; "required": false; }; }, {}, never, never, true, never>;
}
