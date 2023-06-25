import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
import * as i2 from "../utility.service";
export class LogUpdateService {
    constructor(updates, uS) {
        // console.log('logging');
        this.uS = uS;
        updates.versionUpdates.subscribe((evt) => {
            let message;
            switch (evt.type) {
                case 'VERSION_DETECTED':
                    message = `Downloading new app version`;
                    console.log(`${message}: ${evt.version.hash}`);
                    // this.uS.notify(message, 2);
                    break;
                case 'VERSION_READY':
                    message = `New app version ready for use`;
                    console.log(`Current app version: ${evt.currentVersion.hash}`);
                    console.log(`${message}: ${evt.latestVersion.hash}`);
                    // this.uS.notify(message, 1);
                    break;
                case 'VERSION_INSTALLATION_FAILED':
                    message = `Failed to install app version`;
                    console.log(`${message} '${evt.version.hash}': ${evt.error}`);
                    // this.uS.notify(message, 0);
                    break;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LogUpdateService, deps: [{ token: i1.SwUpdate }, { token: i2.UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LogUpdateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LogUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.SwUpdate }, { type: i2.UtilityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLXVwZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvc2VydmljZS13b3JrZXIvbG9nLXVwZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFZLE9BQWlCLEVBQVMsRUFBa0I7UUFDdEQsMEJBQTBCO1FBRFUsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7UUFHdEQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN2QyxJQUFJLE9BQWUsQ0FBQztZQUNwQixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssa0JBQWtCO29CQUNyQixPQUFPLEdBQUcsNkJBQTZCLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyw4QkFBOEI7b0JBQzlCLE1BQU07Z0JBQ1IsS0FBSyxlQUFlO29CQUNsQixPQUFPLEdBQUcsK0JBQStCLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ3JELDhCQUE4QjtvQkFDOUIsTUFBTTtnQkFDUixLQUFLLDZCQUE2QjtvQkFDaEMsT0FBTyxHQUFHLCtCQUErQixDQUFDO29CQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUM5RCw4QkFBOEI7b0JBQzlCLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0F6QlUsZ0JBQWdCO2tIQUFoQixnQkFBZ0IsY0FGZixNQUFNOzsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3dVcGRhdGUgfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uL3V0aWxpdHkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dVcGRhdGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IodXBkYXRlczogU3dVcGRhdGUsIHB1YmxpYyB1UzogVXRpbGl0eVNlcnZpY2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9nZ2luZycpO1xuXG4gICAgdXBkYXRlcy52ZXJzaW9uVXBkYXRlcy5zdWJzY3JpYmUoKGV2dCkgPT4ge1xuICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZztcbiAgICAgIHN3aXRjaCAoZXZ0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnVkVSU0lPTl9ERVRFQ1RFRCc6XG4gICAgICAgICAgbWVzc2FnZSA9IGBEb3dubG9hZGluZyBuZXcgYXBwIHZlcnNpb25gO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke21lc3NhZ2V9OiAke2V2dC52ZXJzaW9uLmhhc2h9YCk7XG4gICAgICAgICAgLy8gdGhpcy51Uy5ub3RpZnkobWVzc2FnZSwgMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ZFUlNJT05fUkVBRFknOlxuICAgICAgICAgIG1lc3NhZ2UgPSBgTmV3IGFwcCB2ZXJzaW9uIHJlYWR5IGZvciB1c2VgO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IGFwcCB2ZXJzaW9uOiAke2V2dC5jdXJyZW50VmVyc2lvbi5oYXNofWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke21lc3NhZ2V9OiAke2V2dC5sYXRlc3RWZXJzaW9uLmhhc2h9YCk7XG4gICAgICAgICAgLy8gdGhpcy51Uy5ub3RpZnkobWVzc2FnZSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ZFUlNJT05fSU5TVEFMTEFUSU9OX0ZBSUxFRCc6XG4gICAgICAgICAgbWVzc2FnZSA9IGBGYWlsZWQgdG8gaW5zdGFsbCBhcHAgdmVyc2lvbmA7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7bWVzc2FnZX0gJyR7ZXZ0LnZlcnNpb24uaGFzaH0nOiAke2V2dC5lcnJvcn1gKTtcbiAgICAgICAgICAvLyB0aGlzLnVTLm5vdGlmeShtZXNzYWdlLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19