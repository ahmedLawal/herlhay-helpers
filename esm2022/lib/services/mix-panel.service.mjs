import { Injectable } from '@angular/core';
import { HHenvironment } from '../../environments/environment';
import mixpanel from 'mixpanel-browser';
import * as i0 from "@angular/core";
export class MixPanelService {
    constructor() {
        this.token = HHenvironment.mixPanelToken;
        if (HHenvironment.production && this.token && this.identifier)
            this.init();
    }
    /**
     * Initialize mixpanel.
     * @memberof MixpanelService
     */
    init() {
        // debugger;
        if (!this.token)
            return;
        mixpanel.init(this.token);
        mixpanel.identify(this.identifier);
    }
    /**
     * Push new action to mixpanel.
     *
     * @param {string} actionName Name of the action to track.
     * @param {*} [action={}] Actions object with custom properties.
     * @memberof MixpanelService
     */
    track(actionName, config) {
        try {
            if (HHenvironment.production && this.token)
                mixpanel.track((actionName + (config?.status == 1 ? 'successful' : 'failed')).toUpperCase(), config?.action);
        }
        catch (error) {
            console.error(`Mixpanel failed`);
            console.error(error);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MixPanelService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MixPanelService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MixPanelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4LXBhbmVsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9taXgtcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQzs7QUFLeEMsTUFBTSxPQUFPLGVBQWU7SUFHMUI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUk7UUFDRixZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLFVBQWtCLEVBQUUsTUFBb0M7UUFDNUQsSUFBSTtZQUNGLElBQUksYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSztnQkFDeEMsUUFBUSxDQUFDLEtBQUssQ0FDWixDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQzVFLE1BQU0sRUFBRSxNQUFNLENBQ2YsQ0FBQztTQUNMO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7OEdBckNVLGVBQWU7a0hBQWYsZUFBZSxjQUZkLE1BQU07OzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSEhlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgbWl4cGFuZWwgZnJvbSAnbWl4cGFuZWwtYnJvd3Nlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNaXhQYW5lbFNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdG9rZW46IHN0cmluZztcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRva2VuID0gSEhlbnZpcm9ubWVudC5taXhQYW5lbFRva2VuO1xuICAgIGlmIChISGVudmlyb25tZW50LnByb2R1Y3Rpb24gJiYgdGhpcy50b2tlbiAmJiB0aGlzLmlkZW50aWZpZXIpIHRoaXMuaW5pdCgpO1xuICB9XG4gIFxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBtaXhwYW5lbC5cbiAgICogQG1lbWJlcm9mIE1peHBhbmVsU2VydmljZVxuICAgKi9cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBpZiAoIXRoaXMudG9rZW4pIHJldHVybjtcbiAgICBtaXhwYW5lbC5pbml0KHRoaXMudG9rZW4pO1xuICAgIG1peHBhbmVsLmlkZW50aWZ5KHRoaXMuaWRlbnRpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBuZXcgYWN0aW9uIHRvIG1peHBhbmVsLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uTmFtZSBOYW1lIG9mIHRoZSBhY3Rpb24gdG8gdHJhY2suXG4gICAqIEBwYXJhbSB7Kn0gW2FjdGlvbj17fV0gQWN0aW9ucyBvYmplY3Qgd2l0aCBjdXN0b20gcHJvcGVydGllcy5cbiAgICogQG1lbWJlcm9mIE1peHBhbmVsU2VydmljZVxuICAgKi9cbiAgdHJhY2soYWN0aW9uTmFtZTogc3RyaW5nLCBjb25maWc/OiB7IHN0YXR1cz86IDAgfCAxOyBhY3Rpb24/IH0pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgaWYgKEhIZW52aXJvbm1lbnQucHJvZHVjdGlvbiAmJiB0aGlzLnRva2VuKVxuICAgICAgICBtaXhwYW5lbC50cmFjayhcbiAgICAgICAgICAoYWN0aW9uTmFtZSArIChjb25maWc/LnN0YXR1cyA9PSAxID8gJ3N1Y2Nlc3NmdWwnIDogJ2ZhaWxlZCcpKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgIGNvbmZpZz8uYWN0aW9uXG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1peHBhbmVsIGZhaWxlZGApO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXX0=