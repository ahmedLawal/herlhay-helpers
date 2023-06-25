import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./prompt-update.service";
import * as i2 from "./log-update.service";
import * as i3 from "./handle-unrecoverable-state.service";
import * as i4 from "./check-for-update.service";
import * as i5 from "../utility.service";
export class ServiceWorkerService {
    constructor(puS, luS, huS, cfuS, uS) {
        this.puS = puS;
        this.luS = luS;
        this.huS = huS;
        this.cfuS = cfuS;
        this.uS = uS;
    }
    async getUpdates(cb) {
        console.log('checking update 1');
        const appIsStable$ = this.cfuS.appRef.isStable.pipe(first((isStable) => {
            console.log('checking for stability ', isStable);
            return isStable === true;
        }));
        console.log('checking update 2');
        // appIsStable$.subscribe(async () => {
        try {
            console.log('checking update 3');
            const updateFound = await this.cfuS.updates.checkForUpdate();
            if (updateFound)
                this.puS.prompter();
            // else this.uS.info(`No new versions were found`, 1);
            if (cb)
                cb();
        }
        catch (err) {
            // this.uS.info(`Failed to check for updates`, 0);
            console.error('Failed to check for updates:', err);
            if (cb)
                cb();
        }
        // });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ServiceWorkerService, deps: [{ token: i1.PromptUpdateService }, { token: i2.LogUpdateService }, { token: i3.HandleUnrecoverableStateService }, { token: i4.CheckForUpdateService }, { token: i5.UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ServiceWorkerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ServiceWorkerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.PromptUpdateService }, { type: i2.LogUpdateService }, { type: i3.HandleUnrecoverableStateService }, { type: i4.CheckForUpdateService }, { type: i5.UtilityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL3NlcnZpY2Utd29ya2VyL3NlcnZpY2Utd29ya2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFVdkMsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUNTLEdBQXdCLEVBQ3hCLEdBQXFCLEVBQ3JCLEdBQW9DLEVBQ3BDLElBQTJCLEVBQzNCLEVBQWtCO1FBSmxCLFFBQUcsR0FBSCxHQUFHLENBQXFCO1FBQ3hCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLFFBQUcsR0FBSCxHQUFHLENBQWlDO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQXVCO1FBQzNCLE9BQUUsR0FBRixFQUFFLENBQWdCO0lBQ3hCLENBQUM7SUFFSixLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUc7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pELEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakQsT0FBTyxRQUFRLEtBQUssSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFakMsdUNBQXVDO1FBQ3JDLElBQUk7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM3RCxJQUFJLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxzREFBc0Q7WUFDdEQsSUFBSSxFQUFFO2dCQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGtEQUFrRDtZQUNsRCxPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELElBQUksRUFBRTtnQkFBRSxFQUFFLEVBQUUsQ0FBQztTQUNoQjtRQUNILE1BQU07SUFDUixDQUFDOzhHQWhDVSxvQkFBb0I7a0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uL3V0aWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja0ZvclVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL2NoZWNrLWZvci11cGRhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIYW5kbGVVbnJlY292ZXJhYmxlU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9oYW5kbGUtdW5yZWNvdmVyYWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ1VwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL2xvZy11cGRhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tcHRVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9tcHQtdXBkYXRlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZVdvcmtlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcHVTOiBQcm9tcHRVcGRhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBsdVM6IExvZ1VwZGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIGh1UzogSGFuZGxlVW5yZWNvdmVyYWJsZVN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgY2Z1UzogQ2hlY2tGb3JVcGRhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyB1UzogVXRpbGl0eVNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGdldFVwZGF0ZXMoY2I/KSB7XG4gICAgY29uc29sZS5sb2coJ2NoZWNraW5nIHVwZGF0ZSAxJyk7XG4gICAgY29uc3QgYXBwSXNTdGFibGUkID0gdGhpcy5jZnVTLmFwcFJlZi5pc1N0YWJsZS5waXBlKFxuICAgICAgZmlyc3QoKGlzU3RhYmxlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3Igc3RhYmlsaXR5ICcsIGlzU3RhYmxlKTtcbiAgICAgICAgcmV0dXJuIGlzU3RhYmxlID09PSB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyB1cGRhdGUgMicpO1xuXG4gICAgLy8gYXBwSXNTdGFibGUkLnN1YnNjcmliZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tpbmcgdXBkYXRlIDMnKTtcbiAgICAgICAgY29uc3QgdXBkYXRlRm91bmQgPSBhd2FpdCB0aGlzLmNmdVMudXBkYXRlcy5jaGVja0ZvclVwZGF0ZSgpO1xuICAgICAgICBpZiAodXBkYXRlRm91bmQpIHRoaXMucHVTLnByb21wdGVyKCk7XG4gICAgICAgIC8vIGVsc2UgdGhpcy51Uy5pbmZvKGBObyBuZXcgdmVyc2lvbnMgd2VyZSBmb3VuZGAsIDEpO1xuICAgICAgICBpZiAoY2IpIGNiKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gdGhpcy51Uy5pbmZvKGBGYWlsZWQgdG8gY2hlY2sgZm9yIHVwZGF0ZXNgLCAwKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNoZWNrIGZvciB1cGRhdGVzOicsIGVycik7XG4gICAgICAgICAgaWYgKGNiKSBjYigpO1xuICAgICAgfVxuICAgIC8vIH0pO1xuICB9XG59XG4iXX0=