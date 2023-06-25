import { QueryParamsHandling } from '@angular/router';
import { BtnComponent } from '../btn.component';
import { BtnService } from '../btn.service';
import * as i0 from "@angular/core";
export declare class BtnLinkComponent extends BtnComponent {
    btnS: BtnService;
    mqueryParamsHandling: QueryParamsHandling;
    route: string;
    params: {
        [x: string]: string | number | boolean;
    };
    emailTo: string;
    constructor(btnS: BtnService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BtnLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BtnLinkComponent, "app-btn-link", never, { "mqueryParamsHandling": { "alias": "mqueryParamsHandling"; "required": false; }; "route": { "alias": "route"; "required": false; }; "params": { "alias": "params"; "required": false; }; "emailTo": { "alias": "emailTo"; "required": false; }; }, {}, never, never, true, never>;
}
