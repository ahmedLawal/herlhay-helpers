import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/utility.service";
export class ResponsivenessDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.desktopClass));
        if (this.mobileClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.mobileClass));
        if (this.hideMobile)
            this.elRef.nativeElement.hidden = true;
        else if (this.hideDesktop)
            this.elRef.nativeElement.hidden = false;
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.desktopClass));
        if (this.mobileClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.mobileClass));
        if (this.hideMobile)
            this.elRef.nativeElement.hidden = false;
        else if (this.hideDesktop)
            this.elRef.nativeElement.hidden = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResponsivenessDirective, deps: [{ token: i0.ElementRef }, { token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: ResponsivenessDirective, isStandalone: true, selector: "[mresponsiveness]", inputs: { mobileClass: "mobileClass", desktopClass: "desktopClass", hideMobile: "hideMobile", hideDesktop: "hideDesktop" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResponsivenessDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mresponsiveness]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.UtilityService }]; }, propDecorators: { mobileClass: [{
                type: Input
            }], desktopClass: [{
                type: Input
            }], hideMobile: [{
                type: Input
            }], hideDesktop: [{
                type: Input
            }] } });
export class mobileClassDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        if (this.mobileClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.mobileClass));
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        if (this.mobileClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.mobileClass));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: mobileClassDirective, deps: [{ token: i0.ElementRef }, { token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: mobileClassDirective, isStandalone: true, selector: "[mobileClass]", inputs: { mobileClass: "mobileClass" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: mobileClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mobileClass]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.UtilityService }]; }, propDecorators: { mobileClass: [{
                type: Input
            }] } });
export class desktopClassDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.desktopClass));
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.desktopClass));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: desktopClassDirective, deps: [{ token: i0.ElementRef }, { token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: desktopClassDirective, isStandalone: true, selector: "[desktopClass]", inputs: { desktopClass: "desktopClass" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: desktopClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[desktopClass]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.UtilityService }]; }, propDecorators: { desktopClass: [{
                type: Input
            }] } });
export class hideMobileDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        this.elRef.nativeElement.hidden = true;
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        this.elRef.nativeElement.hidden = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideMobileDirective, deps: [{ token: i0.ElementRef }, { token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: hideMobileDirective, isStandalone: true, selector: "[hideMobile]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideMobileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideMobile]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.UtilityService }]; } });
export class hideDesktopDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        this.elRef.nativeElement.hidden = false;
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        this.elRef.nativeElement.hidden = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideDesktopDirective, deps: [{ token: i0.ElementRef }, { token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: hideDesktopDirective, isStandalone: true, selector: "[hideDesktop]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideDesktopDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideDesktop]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.UtilityService }]; } });
function extractTokens(tokenStr) {
    return tokenStr
        ?.trim()
        .split(' ')
        .filter((x) => !!x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZW5lc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2RpcmVjdGl2ZXMvcmVzcG9uc2l2ZW5lc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRN0QsTUFBTSxPQUFPLHVCQUF1QjtJQU1sQyxZQUNTLEtBQWlDLEVBQ2pDLEVBQWtCO1FBRGxCLFVBQUssR0FBTCxLQUFLLENBQTRCO1FBQ2pDLE9BQUUsR0FBRixFQUFFLENBQWdCO0lBQ3hCLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBQ3JDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDM0QsWUFBWTtZQUNaLFlBQVk7WUFDWixJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsbUNBQW1DO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFdBQVc7UUFDVCxnREFBZ0Q7UUFDaEQsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFlBQVk7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMs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QUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDOzhHQXhDVSxvQkFBb0I7a0dBQXBCLG9CQUFvQjs7MkZBQXBCLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOztBQTRDRCxTQUFTLGFBQWEsQ0FBQyxRQUFnQjtJQUNyQyxPQUFPLFFBQVE7UUFDYixFQUFFLElBQUksRUFBRTtTQUNQLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyBcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXJlc3BvbnNpdmVuZXNzXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVuZXNzRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbW9iaWxlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgZGVza3RvcENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZGVNb2JpbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpZGVEZXNrdG9wOiBib29sZWFuO1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PixcbiAgICBwdWJsaWMgdVM6IFV0aWxpdHlTZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudVMuaXNNb2JpbGUpIHRoaXMuaGFuZGxlTW9iaWxlKCk7XG4gICAgZWxzZSB0aGlzLmhhbmRsZURlc2t0b3AoKTtcblxuICAgIHRoaXMuc3ViID0gdGhpcy51Uy5tb2JpbGVRdWVyeUNoYW5nZWQuc3Vic2NyaWJlKChpc01vYmlsZSkgPT4ge1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICB0aGlzLmhhbmRsZU1vYmlsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEZXNrdG9wKCk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhldiwnbWVkaWEgY2hhbmdlZCcpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vQ2FsbGVkIG9uY2UsIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uRGVzdHJveScgdG8gdGhlIGNsYXNzLlxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSWYgdmlld3BvcnQgaXMgbW9iaWxlXG4gICAqL1xuICBoYW5kbGVNb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuZGVza3RvcENsYXNzKVxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgIC4uLmV4dHJhY3RUb2tlbnModGhpcy5kZXNrdG9wQ2xhc3MpXG4gICAgICApO1xuICAgIGlmICh0aGlzLm1vYmlsZUNsYXNzKVxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIC4uLmV4dHJhY3RUb2tlbnModGhpcy5tb2JpbGVDbGFzcylcbiAgICAgICk7XG4gICAgaWYgKHRoaXMuaGlkZU1vYmlsZSkgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gICAgZWxzZSBpZiAodGhpcy5oaWRlRGVza3RvcCkgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHZpZXdwb3J0IGlzIGRlc2t0b3BcbiAgICovXG4gIGhhbmRsZURlc2t0b3AoKSB7XG4gICAgaWYgKHRoaXMuZGVza3RvcENsYXNzKVxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIC4uLmV4dHJhY3RUb2tlbnModGhpcy5kZXNrdG9wQ2xhc3MpXG4gICAgICApO1xuICAgIGlmICh0aGlzLm1vYmlsZUNsYXNzKVxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgIC4uLmV4dHJhY3RUb2tlbnModGhpcy5tb2JpbGVDbGFzcylcbiAgICAgICk7XG4gICAgaWYgKHRoaXMuaGlkZU1vYmlsZSkgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICAgIGVsc2UgaWYgKHRoaXMuaGlkZURlc2t0b3ApIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICB9XG59XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbW9iaWxlQ2xhc3NdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgbW9iaWxlQ2xhc3NEaXJlY3RpdmUge1xuICBASW5wdXQoKSBtb2JpbGVDbGFzczogc3RyaW5nO1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PixcbiAgICBwdWJsaWMgdVM6IFV0aWxpdHlTZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudVMuaXNNb2JpbGUpIHRoaXMuaGFuZGxlTW9iaWxlKCk7XG4gICAgZWxzZSB0aGlzLmhhbmRsZURlc2t0b3AoKTtcblxuICAgIHRoaXMuc3ViID0gdGhpcy51Uy5tb2JpbGVRdWVyeUNoYW5nZWQuc3Vic2NyaWJlKChpc01vYmlsZSkgPT4ge1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICB0aGlzLmhhbmRsZU1vYmlsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEZXNrdG9wKCk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhldiwnbWVkaWEgY2hhbmdlZCcpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vQ2FsbGVkIG9uY2UsIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uRGVzdHJveScgdG8gdGhlIGNsYXNzLlxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSWYgdmlld3BvcnQgaXMgbW9iaWxlXG4gICAqL1xuICBoYW5kbGVNb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMubW9iaWxlQ2xhc3MpXG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgLi4uZXh0cmFjdFRva2Vucyh0aGlzLm1vYmlsZUNsYXNzKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB2aWV3cG9ydCBpcyBkZXNrdG9wXG4gICAqL1xuICBoYW5kbGVEZXNrdG9wKCkge1xuICAgIGlmICh0aGlzLm1vYmlsZUNsYXNzKVxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgIC4uLmV4dHJhY3RUb2tlbnModGhpcy5tb2JpbGVDbGFzcylcbiAgICAgICk7XG4gIH1cbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZXNrdG9wQ2xhc3NdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgZGVza3RvcENsYXNzRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZGVza3RvcENsYXNzOiBzdHJpbmc7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+LFxuICAgIHB1YmxpYyB1UzogVXRpbGl0eVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51Uy5pc01vYmlsZSkgdGhpcy5oYW5kbGVNb2JpbGUoKTtcbiAgICBlbHNlIHRoaXMuaGFuZGxlRGVza3RvcCgpO1xuXG4gICAgdGhpcy5zdWIgPSB0aGlzLnVTLm1vYmlsZVF1ZXJ5Q2hhbmdlZC5zdWJzY3JpYmUoKGlzTW9iaWxlKSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTW9iaWxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZURlc2t0b3AoKTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2LCdtZWRpYSBjaGFuZ2VkJyk7XG4gICAgfSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy9DYWxsZWQgb25jZSwgYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAgLy9BZGQgJ2ltcGxlbWVudHMgT25EZXN0cm95JyB0byB0aGUgY2xhc3MuXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB2aWV3cG9ydCBpcyBtb2JpbGVcbiAgICovXG4gIGhhbmRsZU1vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5kZXNrdG9wQ2xhc3MpXG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgLi4uZXh0cmFjdFRva2Vucyh0aGlzLmRlc2t0b3BDbGFzcylcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSWYgdmlld3BvcnQgaXMgZGVza3RvcFxuICAgKi9cbiAgaGFuZGxlRGVza3RvcCgpIHtcbiAgICBpZiAodGhpcy5kZXNrdG9wQ2xhc3MpXG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgLi4uZXh0cmFjdFRva2Vucyh0aGlzLmRlc2t0b3BDbGFzcylcbiAgICAgICk7XG4gIH1cbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1toaWRlTW9iaWxlXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIGhpZGVNb2JpbGVEaXJlY3RpdmUge1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PixcbiAgICBwdWJsaWMgdVM6IFV0aWxpdHlTZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudVMuaXNNb2JpbGUpIHRoaXMuaGFuZGxlTW9iaWxlKCk7XG4gICAgZWxzZSB0aGlzLmhhbmRsZURlc2t0b3AoKTtcblxuICAgIHRoaXMuc3ViID0gdGhpcy51Uy5tb2JpbGVRdWVyeUNoYW5nZWQuc3Vic2NyaWJlKChpc01vYmlsZSkgPT4ge1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICB0aGlzLmhhbmRsZU1vYmlsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEZXNrdG9wKCk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhldiwnbWVkaWEgY2hhbmdlZCcpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vQ2FsbGVkIG9uY2UsIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uRGVzdHJveScgdG8gdGhlIGNsYXNzLlxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSWYgdmlld3BvcnQgaXMgbW9iaWxlXG4gICAqL1xuICBoYW5kbGVNb2JpbGUoKSB7XG4gICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSWYgdmlld3BvcnQgaXMgZGVza3RvcFxuICAgKi9cbiAgaGFuZGxlRGVza3RvcCgpIHtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG4gIH1cbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1toaWRlRGVza3RvcF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBoaWRlRGVza3RvcERpcmVjdGl2ZSB7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+LFxuICAgIHB1YmxpYyB1UzogVXRpbGl0eVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51Uy5pc01vYmlsZSkgdGhpcy5oYW5kbGVNb2JpbGUoKTtcbiAgICBlbHNlIHRoaXMuaGFuZGxlRGVza3RvcCgpO1xuXG4gICAgdGhpcy5zdWIgPSB0aGlzLnVTLm1vYmlsZVF1ZXJ5Q2hhbmdlZC5zdWJzY3JpYmUoKGlzTW9iaWxlKSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTW9iaWxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZURlc2t0b3AoKTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2LCdtZWRpYSBjaGFuZ2VkJyk7XG4gICAgfSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy9DYWxsZWQgb25jZSwgYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAgLy9BZGQgJ2ltcGxlbWVudHMgT25EZXN0cm95JyB0byB0aGUgY2xhc3MuXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB2aWV3cG9ydCBpcyBtb2JpbGVcbiAgICovXG4gIGhhbmRsZU1vYmlsZSgpIHtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogSWYgdmlld3BvcnQgaXMgZGVza3RvcFxuICAgKi9cbiAgaGFuZGxlRGVza3RvcCgpIHtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuaGlkZGVuID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW5zKHRva2VuU3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRva2VuU3RyXG4gICAgPy50cmltKClcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoKHgpID0+ICEheCk7XG59XG4iXX0=