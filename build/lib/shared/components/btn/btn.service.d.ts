import { BtnType, IconType } from '../../models/index.model';
import * as i0 from "@angular/core";
export declare class BtnService {
    btnClasses: {
        [x in BtnType]?: string;
    };
    constructor();
    getIcon: (iconType: IconType) => {
        icon: any;
        iconPosition: string;
        iconString: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<BtnService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BtnService>;
}
