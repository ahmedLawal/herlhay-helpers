import { ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PromptUpdateService } from './prompt-update.service';
import * as i0 from "@angular/core";
export declare class CheckForUpdateService {
    appRef: ApplicationRef;
    updates: SwUpdate;
    puS: PromptUpdateService;
    constructor(appRef: ApplicationRef, updates: SwUpdate, puS: PromptUpdateService);
    init(itvl?: number, cb?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckForUpdateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CheckForUpdateService>;
}
