import { SwUpdate } from '@angular/service-worker';
import { UtilityService } from '../utility.service';
import { PromptUpdateService } from './prompt-update.service';
import * as i0 from "@angular/core";
export declare class HandleUnrecoverableStateService {
    uS: UtilityService;
    puS: PromptUpdateService;
    constructor(updates: SwUpdate, uS: UtilityService, puS: PromptUpdateService);
    static ɵfac: i0.ɵɵFactoryDeclaration<HandleUnrecoverableStateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HandleUnrecoverableStateService>;
}
