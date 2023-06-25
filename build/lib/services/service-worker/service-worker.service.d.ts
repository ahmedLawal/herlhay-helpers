import { UtilityService } from '../utility.service';
import { CheckForUpdateService } from './check-for-update.service';
import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';
import { LogUpdateService } from './log-update.service';
import { PromptUpdateService } from './prompt-update.service';
import * as i0 from "@angular/core";
export declare class ServiceWorkerService {
    puS: PromptUpdateService;
    luS: LogUpdateService;
    huS: HandleUnrecoverableStateService;
    cfuS: CheckForUpdateService;
    uS: UtilityService;
    constructor(puS: PromptUpdateService, luS: LogUpdateService, huS: HandleUnrecoverableStateService, cfuS: CheckForUpdateService, uS: UtilityService);
    getUpdates(cb?: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServiceWorkerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ServiceWorkerService>;
}
