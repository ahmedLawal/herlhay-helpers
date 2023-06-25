import { Directive, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/utility.service";
export class MrouterLinkirective {
    set _mrouterLink(v) {
        this.mrouterLink = v;
        // if (v) debugger;
        this.setRouter();
    }
    constructor(el, route, router, uS) {
        this.el = el;
        this.route = route;
        this.router = router;
        this.uS = uS;
    }
    ngAfterViewInit() {
        this.setRouter();
    }
    setRouter() {
        if (this.mrouterLink && this.el.nativeElement) {
            this.el.nativeElement.classList.remove('notLink');
            this.el.nativeElement.classList.add('link');
            // debugger;
            if (this.isEmail) {
                this.el.nativeElement.href = 'mailto:' + this.mrouterLink;
            }
            else if (this.isPhone) {
                this.el.nativeElement.href = 'tel:' + this.mrouterLink;
            }
            else {
                // debugger;
                const queryParams = this.mqueryParams || {}, routeLevels = this.mrouterLink.split('../').length - 1, currentLocationParts = location.pathname.split('/');
                let route = '', urlParts = this.mrouterLink.split('?');
                route = urlParts[0];
                if (urlParts.length > 1) {
                    const kvps = urlParts[1].split('&');
                    for (const kvp of kvps) {
                        const kvpSplit = kvp.split('=');
                        queryParams[kvpSplit[0]] = kvpSplit[1];
                    }
                }
                currentLocationParts.splice(routeLevels * -1);
                this.el.nativeElement.href =
                    currentLocationParts.join('/') +
                        '/' +
                        route
                            .split('../')
                            .filter((x) => x)
                            .join('/') +
                        '?' +
                        this.stringifyQueryParams(queryParams);
                this.el.nativeElement.onclick = (e) => {
                    e.preventDefault();
                    // debugger;
                    this.router.navigate([route], {
                        relativeTo: this.uS.environment.activatedRoute || this.route,
                        queryParams,
                    });
                };
            }
        }
        else {
            this.el.nativeElement.classList.add('notLink');
        }
    }
    stringifyQueryParams(q) {
        return Object.keys(q)
            .map((key) => `${key}=${q[key]}`)
            .join('&');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MrouterLinkirective, deps: [{ token: i0.ElementRef }, { token: i1.ActivatedRoute }, { token: i1.Router }, { token: i2.UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: MrouterLinkirective, isStandalone: true, selector: "[mrouterLink]", inputs: { _mrouterLink: ["mrouterLink", "_mrouterLink"], mrouterLinkActivatedRoute: "mrouterLinkActivatedRoute", mqueryParams: "mqueryParams", isPhone: "isPhone", isEmail: "isEmail" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MrouterLinkirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mrouterLink]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.UtilityService }]; }, propDecorators: { _mrouterLink: [{
                type: Input,
                args: ['mrouterLink']
            }], mrouterLinkActivatedRoute: [{
                type: Input
            }], mqueryParams: [{
                type: Input
            }], isPhone: [{
                type: Input
            }], isEmail: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9kaXJlY3RpdmVzL3JvdXRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWMsTUFBTSxlQUFlLENBQUM7Ozs7QUFRM0QsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixJQUEwQixZQUFZLENBQUMsQ0FBUztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFNRCxZQUNTLEVBQWlDLEVBQ2pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxFQUFrQjtRQUhsQixPQUFFLEdBQUYsRUFBRSxDQUErQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7SUFDeEIsQ0FBQztJQUNKLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLFlBQVk7WUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxTQUFT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O3VCQUFDLGFBQWE7Z0JBS1gseUJBQXlCO3NCQUFqQyxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttcm91dGVyTGlua10nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuICBleHBvcnQgY2xhc3MgTXJvdXRlckxpbmtpcmVjdGl2ZSB7XG4gICAgbXJvdXRlckxpbms6IHN0cmluZztcbiAgICBASW5wdXQoJ21yb3V0ZXJMaW5rJykgc2V0IF9tcm91dGVyTGluayh2OiBzdHJpbmcpIHtcbiAgICAgIHRoaXMubXJvdXRlckxpbmsgPSB2O1xuICAgICAgLy8gaWYgKHYpIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5zZXRSb3V0ZXIoKTtcbiAgICB9XG4gICAgQElucHV0KCkgbXJvdXRlckxpbmtBY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gICAgQElucHV0KCkgbXF1ZXJ5UGFyYW1zOiBhbnk7XG4gICAgQElucHV0KCkgaXNQaG9uZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpc0VtYWlsOiBib29sZWFuO1xuICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZjxIVE1MQW5jaG9yRWxlbWVudD4sXG4gICAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHVibGljIHVTOiBVdGlsaXR5U2VydmljZVxuICAgICkge31cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnNldFJvdXRlcigpO1xuICAgIH1cbiAgICBzZXRSb3V0ZXIoKSB7XG4gICAgICBpZiAodGhpcy5tcm91dGVyTGluayAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vdExpbmsnKTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmsnKTtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIGlmICh0aGlzLmlzRW1haWwpIHtcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaHJlZiA9ICdtYWlsdG86JyArIHRoaXMubXJvdXRlckxpbms7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Bob25lKSB7XG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmhyZWYgPSAndGVsOicgKyB0aGlzLm1yb3V0ZXJMaW5rO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHRoaXMubXF1ZXJ5UGFyYW1zIHx8IHt9LFxuICAgICAgICAgICAgcm91dGVMZXZlbHMgPSB0aGlzLm1yb3V0ZXJMaW5rLnNwbGl0KCcuLi8nKS5sZW5ndGggLSAxLFxuICAgICAgICAgICAgY3VycmVudExvY2F0aW9uUGFydHMgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuICAgICAgICAgIGxldCByb3V0ZSA9ICcnLFxuICAgICAgICAgICAgdXJsUGFydHMgPSB0aGlzLm1yb3V0ZXJMaW5rLnNwbGl0KCc/Jyk7XG4gIFxuICAgICAgICAgIHJvdXRlID0gdXJsUGFydHNbMF07XG4gICAgICAgICAgaWYgKHVybFBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGt2cHMgPSB1cmxQYXJ0c1sxXS5zcGxpdCgnJicpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrdnAgb2Yga3Zwcykge1xuICAgICAgICAgICAgICBjb25zdCBrdnBTcGxpdCA9IGt2cC5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trdnBTcGxpdFswXV0gPSBrdnBTcGxpdFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvblBhcnRzLnNwbGljZShyb3V0ZUxldmVscyAqIC0xKTtcbiAgXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmhyZWYgPVxuICAgICAgICAgICAgY3VycmVudExvY2F0aW9uUGFydHMuam9pbignLycpICtcbiAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICByb3V0ZVxuICAgICAgICAgICAgICAuc3BsaXQoJy4uLycpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHgpXG4gICAgICAgICAgICAgIC5qb2luKCcvJykgK1xuICAgICAgICAgICAgJz8nICtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5naWZ5UXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSwge1xuICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnVTLmVudmlyb25tZW50LmFjdGl2YXRlZFJvdXRlIHx8IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdExpbmsnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RyaW5naWZ5UXVlcnlQYXJhbXMocTogeyBbeDogc3RyaW5nXTogc3RyaW5nIH0pOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHEpXG4gICAgICAgIC5tYXAoKGtleSkgPT4gYCR7a2V5fT0ke3Fba2V5XX1gKVxuICAgICAgICAuam9pbignJicpO1xuICAgIH1cbiAgfSJdfQ==