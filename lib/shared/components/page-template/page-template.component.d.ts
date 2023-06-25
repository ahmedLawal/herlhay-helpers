import { ActivatedRoute } from '@angular/router';
import { EPageType } from '../../models/index.model';
import * as i0 from "@angular/core";
export declare class PageTemplateComponent<ModelData = any> {
    route: ActivatedRoute;
    pageType: EPageType;
    constructor(route: ActivatedRoute);
    setAsIndex(): void;
    setAsClone(): void;
    setAsCreate(): void;
    setAsEdit(): void;
    setAsShow(): void;
    get isClone(): boolean;
    get isCreate(): boolean;
    get isEdit(): boolean;
    get isIndex(): boolean;
    get isShow(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageTemplateComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageTemplateComponent<any>, "ng-component", never, {}, {}, never, never, true, never>;
}
