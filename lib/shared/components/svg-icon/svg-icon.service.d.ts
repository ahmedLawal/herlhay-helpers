import { SVGIconType } from './svg-icon.model';
import * as i0 from "@angular/core";
export declare class SvgIconService {
    icons: {
        [icon in SVGIconType]: string;
    };
    constructor();
    getSVG(icon: string): {
        icon: any;
    };
    registerSVGIcons: (icons: {
        iconName: string;
        svgStr: string;
    }[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SvgIconService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SvgIconService>;
}
