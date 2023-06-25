import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';
import * as i0 from "@angular/core";
export declare class ResponsivenessDirective {
    elRef: ElementRef<HTMLDivElement>;
    uS: UtilityService;
    mobileClass: string;
    desktopClass: string;
    hideMobile: boolean;
    hideDesktop: boolean;
    sub: Subscription;
    constructor(elRef: ElementRef<HTMLDivElement>, uS: UtilityService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * If viewport is mobile
     */
    handleMobile(): void;
    /**
     * If viewport is desktop
     */
    handleDesktop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResponsivenessDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResponsivenessDirective, "[mresponsiveness]", never, { "mobileClass": { "alias": "mobileClass"; "required": false; }; "desktopClass": { "alias": "desktopClass"; "required": false; }; "hideMobile": { "alias": "hideMobile"; "required": false; }; "hideDesktop": { "alias": "hideDesktop"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class mobileClassDirective {
    elRef: ElementRef<HTMLDivElement>;
    uS: UtilityService;
    mobileClass: string;
    sub: Subscription;
    constructor(elRef: ElementRef<HTMLDivElement>, uS: UtilityService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * If viewport is mobile
     */
    handleMobile(): void;
    /**
     * If viewport is desktop
     */
    handleDesktop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<mobileClassDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<mobileClassDirective, "[mobileClass]", never, { "mobileClass": { "alias": "mobileClass"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class desktopClassDirective {
    elRef: ElementRef<HTMLDivElement>;
    uS: UtilityService;
    desktopClass: string;
    sub: Subscription;
    constructor(elRef: ElementRef<HTMLDivElement>, uS: UtilityService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * If viewport is mobile
     */
    handleMobile(): void;
    /**
     * If viewport is desktop
     */
    handleDesktop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<desktopClassDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<desktopClassDirective, "[desktopClass]", never, { "desktopClass": { "alias": "desktopClass"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class hideMobileDirective {
    elRef: ElementRef<HTMLDivElement>;
    uS: UtilityService;
    sub: Subscription;
    constructor(elRef: ElementRef<HTMLDivElement>, uS: UtilityService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * If viewport is mobile
     */
    handleMobile(): void;
    /**
     * If viewport is desktop
     */
    handleDesktop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<hideMobileDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<hideMobileDirective, "[hideMobile]", never, {}, {}, never, never, true, never>;
}
export declare class hideDesktopDirective {
    elRef: ElementRef<HTMLDivElement>;
    uS: UtilityService;
    sub: Subscription;
    constructor(elRef: ElementRef<HTMLDivElement>, uS: UtilityService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * If viewport is mobile
     */
    handleMobile(): void;
    /**
     * If viewport is desktop
     */
    handleDesktop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<hideDesktopDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<hideDesktopDirective, "[hideDesktop]", never, {}, {}, never, never, true, never>;
}
