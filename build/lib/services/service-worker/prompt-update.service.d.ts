import { SwUpdate } from '@angular/service-worker';
import { UtilityService } from '../utility.service';
import * as i0 from "@angular/core";
export declare class PromptUpdateService {
    uS: UtilityService;
    constructor(swUpdate: SwUpdate, uS: UtilityService);
    prompter(reason?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PromptUpdateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PromptUpdateService>;
}
