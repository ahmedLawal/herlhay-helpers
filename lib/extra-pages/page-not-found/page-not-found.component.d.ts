import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import * as i0 from "@angular/core";
export declare class PageNotFoundComponent implements OnInit {
    route: ActivatedRoute;
    uS: UtilityService;
    config: {
        status: string;
        message: string;
    };
    constructor(route: ActivatedRoute, uS: UtilityService);
    ngOnInit(): void;
    back(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNotFoundComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageNotFoundComponent, "app-page-not-found", never, {}, {}, never, never, true, never>;
}
