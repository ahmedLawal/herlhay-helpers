import { ElementRef, OnInit } from '@angular/core';
import { SvgIconService } from './svg-icon.service';
import * as i0 from "@angular/core";
export declare class SvgIconComponent implements OnInit {
    svgIconS: SvgIconService;
    class: string;
    config: {
        color: string;
        onhover: string;
    };
    icon: string;
    set _icon(v: string);
    iconRef: ElementRef<HTMLSpanElement>;
    constructor(svgIconS: SvgIconService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SvgIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SvgIconComponent, "svg-icon", never, { "class": { "alias": "class"; "required": false; }; "_icon": { "alias": "icon"; "required": false; }; }, {}, never, never, true, never>;
}
