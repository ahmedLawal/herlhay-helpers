import { Injectable } from '@angular/core';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
import * as i2 from "./prompt-update.service";
export class CheckForUpdateService {
    constructor(appRef, updates, puS) {
        this.appRef = appRef;
        this.updates = updates;
        this.puS = puS;
        this.init();
    }
    init(itvl, cb) {
        // Allow the app to stabilize first, before starting
        // polling for updates with `interval()`.
        const appIsStable$ = this.appRef.isStable.pipe(first((isStable) => {
            console.log('checking for stability ', isStable);
            return isStable === true;
        }));
        // const everySixHours$ = interval(itvl ||  1000);
        const everySixHours$ = interval(itvl || 30 * 60 * 1000);
        const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
        everySixHours$.subscribe(async () => {
            try {
                console.log('checking update');
                // alert('checking update');
                const updateFound = await this.updates.checkForUpdate();
                if (updateFound)
                    cb ? cb() : this.puS.prompter();
                else
                    console.log('found no update');
            }
            catch (err) {
                if (this.updates.isEnabled)
                    console.error('Failed to check for updates:', err);
                else
                    console.log('found no update');
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CheckForUpdateService, deps: [{ token: i0.ApplicationRef }, { token: i1.SwUpdate }, { token: i2.PromptUpdateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CheckForUpdateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CheckForUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.ApplicationRef }, { type: i1.SwUpdate }, { type: i2.PromptUpdateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stZm9yLXVwZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvc2VydmljZS13b3JrZXIvY2hlY2stZm9yLXVwZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBa0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU12QyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQ1MsTUFBc0IsRUFDdEIsT0FBaUIsRUFDakIsR0FBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFxQjtRQUUvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQWEsRUFBRSxFQUFRO1FBQzFCLG9EQUFvRDtRQUNwRCx5Q0FBeUM7UUFDekMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM1QyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0Ysa0RBQWtEO1FBQ2xELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4RCxNQUFNLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFM0UsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNsQyxJQUFJO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0IsNEJBQTRCO2dCQUM1QixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hELElBQUksV0FBVztvQkFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDOztvQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7b0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7O29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBbkNVLHFCQUFxQjtrSEFBckIscUJBQXFCLGNBRnBCLE1BQU07OzJGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3dVcGRhdGUgfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQgeyBjb25jYXQsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb21wdFVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL3Byb21wdC11cGRhdGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja0ZvclVwZGF0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwdWJsaWMgdXBkYXRlczogU3dVcGRhdGUsXG4gICAgcHVibGljIHB1UzogUHJvbXB0VXBkYXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoaXR2bD86IG51bWJlciwgY2I/OiBhbnkpIHtcbiAgICAvLyBBbGxvdyB0aGUgYXBwIHRvIHN0YWJpbGl6ZSBmaXJzdCwgYmVmb3JlIHN0YXJ0aW5nXG4gICAgLy8gcG9sbGluZyBmb3IgdXBkYXRlcyB3aXRoIGBpbnRlcnZhbCgpYC5cbiAgICBjb25zdCBhcHBJc1N0YWJsZSQgPSB0aGlzLmFwcFJlZi5pc1N0YWJsZS5waXBlKFxuICAgICAgZmlyc3QoKGlzU3RhYmxlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3Igc3RhYmlsaXR5ICcsIGlzU3RhYmxlKTtcbiAgICAgICAgcmV0dXJuIGlzU3RhYmxlID09PSB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICAgIC8vIGNvbnN0IGV2ZXJ5U2l4SG91cnMkID0gaW50ZXJ2YWwoaXR2bCB8fCAgMTAwMCk7XG4gICAgY29uc3QgZXZlcnlTaXhIb3VycyQgPSBpbnRlcnZhbChpdHZsIHx8IDMwICogNjAgKiAxMDAwKTtcbiAgICBjb25zdCBldmVyeVNpeEhvdXJzT25jZUFwcElzU3RhYmxlJCA9IGNvbmNhdChhcHBJc1N0YWJsZSQsIGV2ZXJ5U2l4SG91cnMkKTtcblxuICAgIGV2ZXJ5U2l4SG91cnMkLnN1YnNjcmliZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tpbmcgdXBkYXRlJyk7XG4gICAgICAgIC8vIGFsZXJ0KCdjaGVja2luZyB1cGRhdGUnKTtcbiAgICAgICAgY29uc3QgdXBkYXRlRm91bmQgPSBhd2FpdCB0aGlzLnVwZGF0ZXMuY2hlY2tGb3JVcGRhdGUoKTtcbiAgICAgICAgaWYgKHVwZGF0ZUZvdW5kKSBjYiA/IGNiKCkgOiB0aGlzLnB1Uy5wcm9tcHRlcigpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdmb3VuZCBubyB1cGRhdGUnKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAodGhpcy51cGRhdGVzLmlzRW5hYmxlZClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY2hlY2sgZm9yIHVwZGF0ZXM6JywgZXJyKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnZm91bmQgbm8gdXBkYXRlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==