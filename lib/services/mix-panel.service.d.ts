import * as i0 from "@angular/core";
export declare class MixPanelService {
    protected readonly token: string;
    identifier: string;
    constructor();
    /**
     * Initialize mixpanel.
     * @memberof MixpanelService
     */
    init(): void;
    /**
     * Push new action to mixpanel.
     *
     * @param {string} actionName Name of the action to track.
     * @param {*} [action={}] Actions object with custom properties.
     * @memberof MixpanelService
     */
    track(actionName: string, config?: {
        status?: 0 | 1;
        action?: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MixPanelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MixPanelService>;
}
