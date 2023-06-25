import { ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UtilityService } from "../../services/utility.service";
import * as i0 from "@angular/core";
export declare class MrouterLinkirective {
    el: ElementRef<HTMLAnchorElement>;
    route: ActivatedRoute;
    router: Router;
    uS: UtilityService;
    mrouterLink: string;
    set _mrouterLink(v: string);
    mrouterLinkActivatedRoute: ActivatedRoute;
    mqueryParams: any;
    isPhone: boolean;
    isEmail: boolean;
    constructor(el: ElementRef<HTMLAnchorElement>, route: ActivatedRoute, router: Router, uS: UtilityService);
    ngAfterViewInit(): void;
    setRouter(): void;
    stringifyQueryParams(q: {
        [x: string]: string;
    }): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrouterLinkirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrouterLinkirective, "[mrouterLink]", never, { "_mrouterLink": { "alias": "mrouterLink"; "required": false; }; "mrouterLinkActivatedRoute": { "alias": "mrouterLinkActivatedRoute"; "required": false; }; "mqueryParams": { "alias": "mqueryParams"; "required": false; }; "isPhone": { "alias": "isPhone"; "required": false; }; "isEmail": { "alias": "isEmail"; "required": false; }; }, {}, never, never, true, never>;
}
