import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass, NgIf, NgFor } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./btn.service";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/menu";
import * as i4 from "@angular/material/badge";
export class BtnComponent {
    set _icon(v) {
        // const res = this.btnS.getIcon(v);
        // this.iconPosition = res.iconPosition;
        // this.icon = res.icon;
        // this.customIcon = res.iconString;
        switch (v) {
            case 'edit':
                this.customIcon = 'fa fa-pen';
                break;
            case 'more':
                this.customIcon = 'fa fa-ellipsis-v';
                break;
            default:
                this.icon = v;
                break;
        }
    }
    set _type(v) {
        // debugger
        this._mclass = this.btnS.btnClasses[v || 'primary'];
    }
    set _group(v) {
        switch (v) {
            case 'add':
                this._type = 'outline';
                // this._icon = 'add';
                this.iconBtn = true;
                break;
            case 'clone':
                this._type = 'secondary';
                // this._icon = 'clone';
                this.text = 'Clone';
                break;
            case 'create':
                this._type = 'outline';
                // this._icon = 'add';
                this.text = 'Create';
                break;
            case 'close':
                this._type = 'danger-outline';
                this.customIcon = this.btnS.getIcon('close').iconString;
                this.iconBtn = true;
                break;
            case 'delete':
                this._type = 'danger-outline';
                // this._icon = 'delete';
                this.iconBtn = true;
                break;
            case 'download':
                this._type = 'secondary';
                // this._icon = 'download';
                this.iconBtn = true;
                break;
            case 'edit':
                this._type = 'secondary';
                // this._icon = 'edit';
                this.iconBtn = true;
                break;
            case 'link':
                this._type = 'secondary';
                this.customIcon = 'fa fa-link';
                this.iconBtn = true;
                break;
            case 'search':
                this._type = 'secondary';
                // this._icon = 'search';
                this.iconBtn = true;
                break;
            case 'show':
                this._type = 'secondary';
                // this._icon = 'show';
                this.text = 'Show';
                break;
            case 'submit':
                this._type = 'primary';
                this.text = 'Submit';
                break;
        }
    }
    constructor(btnS) {
        this.btnS = btnS;
        this.actionType = 'button';
        this.animate = false;
        this.disabled = false;
        this.iconBtn = false;
        this.showHelpIcon = true;
        this.valid = true;
        this.onFormInvalid = OnFormInvalid.disable;
        this.mclick = new EventEmitter();
        this.iconPosition = 'left';
    }
    ngOnInit() {
        if (!this._mclass)
            this._type = 'primary';
        let formSub;
        if (this.form && this.formSchema?.length)
            formSub = this.form.statusChanges.subscribe((r) => {
                // this.cdr.detectChanges();
                // if (this.form instanceof FormGroup) {
                //   debugger;
                //   this.formIsInvalid = false;
                //   for (const x of this.formSchema) {
                //     const isValid = this.form.controls[x.field].valid;
                //     if (!isValid) {
                //       this.formIsInvalid = true;
                //       break;
                //     }
                //   }
                // }
                this.formIsInvalid = this.formSchema.some((f) => this.form.controls[f.field?.toString()]?.invalid);
            });
        else
            formSub?.unsubscribe();
    }
    checkForm() {
        if (this.isDisabled && this.form) {
            this.form.markAllAsTouched();
            // this.cdr.detectChanges();
            console.log(this.form);
            console.log(this.form.getRawValue());
        }
    }
    click($event) {
        // debugger
        if (!this.isDisabled && !this.loading)
            this.mclick.emit($event);
    }
    get isDisabled() {
        return (this.disabled ||
            !this.valid ||
            this.formIsInvalid ||
            (!this.formSchema && (this.form?.invalid || this.form?.pending)));
    }
    /**
     * Set loader state
     * @param value Loader state
     */
    setLoader(value) {
        this.loading = value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnComponent, deps: [{ token: i1.BtnService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: BtnComponent, isStandalone: true, selector: "app-btn,btn", inputs: { formSchema: "formSchema", _icon: ["icon", "_icon"], _type: ["type", "_type"], _group: ["group", "_group"], actionType: "actionType", animate: "animate", badge: "badge", class: "class", customIcon: "customIcon", disabled: "disabled", form: "form", help: "help", iconBtn: "iconBtn", lite: "lite", loading: "loading", mclass: "mclass", showHelpIcon: "showHelpIcon", mini: "mini", text: "text", valid: "valid", subButtons: "subButtons", onFormInvalid: "onFormInvalid" }, outputs: { mclick: "mclick" }, ngImport: i0, template: "<span class=\"  text-center d-flex  align-items-center justify-content-center\" [ngClass]=\"{mini}\" (click)=\"checkForm()\">\n  <i *ngIf=\"showHelpIcon && help\" class=\"fa fa-info-circle me-2 text-primary\" [matTooltip]=\"help\"></i>\n  <button [matMenuTriggerFor]=\"subButtons?.length?menu:null\" type=\"{{actionType}}\" class=\"{{mclass}} {{_mclass}} \"\n    [disabled]=\"isDisabled\" [matBadge]=\"badge\" [ngClass]=\"{'changecolor': valid,'btn-raised':animate,   'd-flex justify-content-center':\n    !text}\" (click)=\"click($event)\" [matTooltip]=\"showHelpIcon?null:(help)\">\n    <div class=\"w-100\" [hidden]=\"loading\">\n      <span [ngClass]=\"{'pe-1 ms-1':!iconBtn}\" *ngIf=\"iconPosition=='left' && (icon||customIcon)\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n        <i *ngIf=\"customIcon\" class=\"{{customIcon}}\"></i>\n      </span>\n      <ng-container *ngIf=\"text; else elseTemplate\">\n        {{text}}\n      </ng-container>\n      <ng-template #elseTemplate>\n        <span appTranslator>\n          <ng-content></ng-content>\n        </span>\n      </ng-template>\n      <span [ngClass]=\"{'ps-1':!iconBtn}\" *ngIf=\"iconPosition=='right'\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n      </span>\n    </div>\n    <ng-container *ngIf=\"loading\">\n      <div class=\"lds-ellipsis\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </ng-container>\n  </button>\n</span>\n<mat-menu #menu=\"matMenu\" xPosition=\"after\" class=\"rounded-16\">\n  <button mat-button mat-menu-item (click)=\"isDisabled?item.action():null\"\n    *ngFor=\"let item of subButtons\">{{item.label}}</button>\n</mat-menu>", styles: [".lite{padding:0}.disabled{cursor:not-allowed}.invalid{border:3px solid var(--bs-danger)}.lds-ellipsis{display:inline-block;position:relative;width:70px;height:80px}.lds-ellipsis div{position:absolute;top:35px;width:10px;height:10px;border-radius:50%;background:#fff;background:var(--primary);animation-timing-function:cubic-bezier(0,1,1,0)}.btn-primary .lds-ellipsis div,.btn-danger .lds-ellipsis div,.btn-dark .lds-ellipsis div{background:#fff}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}.mini button{padding:0!important}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i4.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-btn,btn', standalone: true, imports: [
                        NgClass,
                        NgIf,
                        MatTooltipModule,
                        MatMenuModule,
                        MatBadgeModule,
                        SvgIconComponent,
                        NgFor,
                    ], template: "<span class=\"  text-center d-flex  align-items-center justify-content-center\" [ngClass]=\"{mini}\" (click)=\"checkForm()\">\n  <i *ngIf=\"showHelpIcon && help\" class=\"fa fa-info-circle me-2 text-primary\" [matTooltip]=\"help\"></i>\n  <button [matMenuTriggerFor]=\"subButtons?.length?menu:null\" type=\"{{actionType}}\" class=\"{{mclass}} {{_mclass}} \"\n    [disabled]=\"isDisabled\" [matBadge]=\"badge\" [ngClass]=\"{'changecolor': valid,'btn-raised':animate,   'd-flex justify-content-center':\n    !text}\" (click)=\"click($event)\" [matTooltip]=\"showHelpIcon?null:(help)\">\n    <div class=\"w-100\" [hidden]=\"loading\">\n      <span [ngClass]=\"{'pe-1 ms-1':!iconBtn}\" *ngIf=\"iconPosition=='left' && (icon||customIcon)\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n        <i *ngIf=\"customIcon\" class=\"{{customIcon}}\"></i>\n      </span>\n      <ng-container *ngIf=\"text; else elseTemplate\">\n        {{text}}\n      </ng-container>\n      <ng-template #elseTemplate>\n        <span appTranslator>\n          <ng-content></ng-content>\n        </span>\n      </ng-template>\n      <span [ngClass]=\"{'ps-1':!iconBtn}\" *ngIf=\"iconPosition=='right'\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n      </span>\n    </div>\n    <ng-container *ngIf=\"loading\">\n      <div class=\"lds-ellipsis\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </ng-container>\n  </button>\n</span>\n<mat-menu #menu=\"matMenu\" xPosition=\"after\" class=\"rounded-16\">\n  <button mat-button mat-menu-item (click)=\"isDisabled?item.action():null\"\n    *ngFor=\"let item of subButtons\">{{item.label}}</button>\n</mat-menu>", styles: [".lite{padding:0}.disabled{cursor:not-allowed}.invalid{border:3px solid var(--bs-danger)}.lds-ellipsis{display:inline-block;position:relative;width:70px;height:80px}.lds-ellipsis div{position:absolute;top:35px;width:10px;height:10px;border-radius:50%;background:#fff;background:var(--primary);animation-timing-function:cubic-bezier(0,1,1,0)}.btn-primary .lds-ellipsis div,.btn-danger .lds-ellipsis div,.btn-dark .lds-ellipsis div{background:#fff}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}.mini button{padding:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.BtnService }]; }, propDecorators: { formSchema: [{
                type: Input
            }], _icon: [{
                type: Input,
                args: ['icon']
            }], _type: [{
                type: Input,
                args: ['type']
            }], _group: [{
                type: Input,
                args: ['group']
            }], actionType: [{
                type: Input
            }], animate: [{
                type: Input
            }], badge: [{
                type: Input
            }], class: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], disabled: [{
                type: Input
            }], form: [{
                type: Input
            }], help: [{
                type: Input
            }], iconBtn: [{
                type: Input
            }], lite: [{
                type: Input
            }], loading: [{
                type: Input
            }], mclass: [{
                type: Input
            }], showHelpIcon: [{
                type: Input
            }], mini: [{
                type: Input
            }], text: [{
                type: Input
            }], valid: [{
                type: Input
            }], subButtons: [{
                type: Input
            }], onFormInvalid: [{
                type: Input
            }], mclick: [{
                type: Output
            }] } });
var OnFormInvalid;
(function (OnFormInvalid) {
    OnFormInvalid["disable"] = "disable";
    OnFormInvalid["warn"] = "warn";
})(OnFormInvalid || (OnFormInvalid = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2J0bi9idG4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvYnRuL2J0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQWlCdkQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsSUFBbUIsS0FBSyxDQUFDLENBQWdDO1FBQ3ZELG9DQUFvQztRQUNwQyx3Q0FBd0M7UUFDeEMsd0JBQXdCO1FBQ3hCLG9DQUFvQztRQUNwQyxRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO2dCQUNyQyxNQUFNO1lBRVI7Z0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2Qs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QkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU07O0FBeURULElBQUssYUFHSjtBQUhELFdBQUssYUFBYTtJQUNoQixvQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhJLGFBQWEsS0FBYixhQUFhLFFBR2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJRm9ybVNjaGVtYSB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLXNjaGVtYS5tb2RlbCc7XG5pbXBvcnQgeyBJY29uVHlwZSwgQnRuVHlwZSwgQnRuR3JvdXAsIElCdG4gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgubW9kZWwnO1xuaW1wb3J0IHsgU1ZHSWNvblR5cGUgfSBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBCdG5TZXJ2aWNlIH0gZnJvbSAnLi9idG4uc2VydmljZSc7XG5pbXBvcnQgeyBTdmdJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEJhZGdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTmdDbGFzcywgTmdJZiwgTmdGb3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnRuLGJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idG4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idG4uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nQ2xhc3MsXG4gICAgTmdJZixcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgU3ZnSWNvbkNvbXBvbmVudCxcbiAgICBOZ0ZvcixcbiAgXSxcbn0pIC8vIEluaGVyaXRlZFxuZXhwb3J0IGNsYXNzIEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBUbyBiZSBwYXNzZWQgd2hlbiB0byBjaGVjayBmb3Igc3BlY2lmaWMgaW52YWxpZCBmb3JtIGZpZWxkcyAqL1xuICBASW5wdXQoKSBmb3JtU2NoZW1hOiBJRm9ybVNjaGVtYTx0eXBlb2YgdGhpcy5mb3JtPltdO1xuICBmb3JtSXNJbnZhbGlkOiBib29sZWFuO1xuICBASW5wdXQoJ2ljb24nKSBzZXQgX2ljb24odjogU1ZHSWNvblR5cGUgfCAnZWRpdCcgfCAnbW9yZScpIHtcbiAgICAvLyBjb25zdCByZXMgPSB0aGlzLmJ0blMuZ2V0SWNvbih2KTtcbiAgICAvLyB0aGlzLmljb25Qb3NpdGlvbiA9IHJlcy5pY29uUG9zaXRpb247XG4gICAgLy8gdGhpcy5pY29uID0gcmVzLmljb247XG4gICAgLy8gdGhpcy5jdXN0b21JY29uID0gcmVzLmljb25TdHJpbmc7XG4gICAgc3dpdGNoICh2KSB7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5jdXN0b21JY29uID0gJ2ZhIGZhLXBlbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9yZSc6XG4gICAgICAgIHRoaXMuY3VzdG9tSWNvbiA9ICdmYSBmYS1lbGxpcHNpcy12JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuaWNvbiA9IHY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ3R5cGUnKSBzZXQgX3R5cGUodjogQnRuVHlwZSkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgdGhpcy5fbWNsYXNzID0gdGhpcy5idG5TLmJ0bkNsYXNzZXNbdiB8fCAncHJpbWFyeSddO1xuICB9XG4gIEBJbnB1dCgnZ3JvdXAnKSBzZXQgX2dyb3VwKHY6IEJ0bkdyb3VwKSB7XG4gICAgc3dpdGNoICh2KSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICB0aGlzLl90eXBlID0gJ291dGxpbmUnO1xuICAgICAgICAvLyB0aGlzLl9pY29uID0gJ2FkZCc7XG4gICAgICAgIHRoaXMuaWNvbkJ0biA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvbmUnOlxuICAgICAgICB0aGlzLl90eXBlID0gJ3NlY29uZGFyeSc7XG4gICAgICAgIC8vIHRoaXMuX2ljb24gPSAnY2xvbmUnO1xuICAgICAgICB0aGlzLnRleHQgPSAnQ2xvbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NyZWF0ZSc6XG4gICAgICAgIHRoaXMuX3R5cGUgPSAnb3V0bGluZSc7XG4gICAgICAgIC8vIHRoaXMuX2ljb24gPSAnYWRkJztcbiAgICAgICAgdGhpcy50ZXh0ID0gJ0NyZWF0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICB0aGlzLl90eXBlID0gJ2Rhbmdlci1vdXRsaW5lJztcbiAgICAgICAgdGhpcy5jdXN0b21JY29uID0gdGhpcy5idG5TLmdldEljb24oJ2Nsb3NlJykuaWNvblN0cmluZztcbiAgICAgICAgdGhpcy5pY29uQnRuID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICB0aGlzLl90eXBlID0gJ2Rhbmdlci1vdXRsaW5lJztcbiAgICAgICAgLy8gdGhpcy5faWNvbiA9ICdkZWxldGUnO1xuICAgICAgICB0aGlzLmljb25CdG4gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rvd25sb2FkJzpcbiAgICAgICAgdGhpcy5fdHlwZSA9ICdzZWNvbmRhcnknO1xuICAgICAgICAvLyB0aGlzLl9pY29uID0gJ2Rvd25sb2FkJztcbiAgICAgICAgdGhpcy5pY29uQnRuID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5fdHlwZSA9ICdzZWNvbmRhcnknO1xuICAgICAgICAvLyB0aGlzLl9pY29uID0gJ2VkaXQnO1xuICAgICAgICB0aGlzLmljb25CdG4gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgICB0aGlzLl90eXBlID0gJ3NlY29uZGFyeSc7XG4gICAgICAgIHRoaXMuY3VzdG9tSWNvbiA9ICdmYSBmYS1saW5rJztcbiAgICAgICAgdGhpcy5pY29uQnRuID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICB0aGlzLl90eXBlID0gJ3NlY29uZGFyeSc7XG4gICAgICAgIC8vIHRoaXMuX2ljb24gPSAnc2VhcmNoJztcbiAgICAgICAgdGhpcy5pY29uQnRuID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgdGhpcy5fdHlwZSA9ICdzZWNvbmRhcnknO1xuICAgICAgICAvLyB0aGlzLl9pY29uID0gJ3Nob3cnO1xuICAgICAgICB0aGlzLnRleHQgPSAnU2hvdyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VibWl0JzpcbiAgICAgICAgdGhpcy5fdHlwZSA9ICdwcmltYXJ5JztcbiAgICAgICAgdGhpcy50ZXh0ID0gJ1N1Ym1pdCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBfbWNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGlvblR5cGU6ICdzdWJtaXQnIHwgJ2J1dHRvbicgfCAncmVzZXQnID0gJ2J1dHRvbic7XG4gIEBJbnB1dCgpIGFuaW1hdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgYmFkZ2U6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXAgfCBGb3JtQ29udHJvbCB8IEZvcm1BcnJheTtcbiAgQElucHV0KCkgaGVscDogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uQnRuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxpdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1jbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93SGVscEljb24gPSB0cnVlO1xuICBASW5wdXQoKSBtaW5pOiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbGlkID0gdHJ1ZTtcbiAgQElucHV0KCkgc3ViQnV0dG9uczogSUJ0bltdO1xuICBASW5wdXQoKSBvbkZvcm1JbnZhbGlkOiBrZXlvZiB0eXBlb2YgT25Gb3JtSW52YWxpZCA9IE9uRm9ybUludmFsaWQuZGlzYWJsZTtcbiAgQE91dHB1dCgpIG1jbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaWNvbjogYW55O1xuICBpY29uUG9zaXRpb246IHN0cmluZyA9ICdsZWZ0JztcbiAgY29uc3RydWN0b3IocHVibGljIGJ0blM6IEJ0blNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9tY2xhc3MpIHRoaXMuX3R5cGUgPSAncHJpbWFyeSc7XG4gICAgbGV0IGZvcm1TdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybVNjaGVtYT8ubGVuZ3RoKVxuICAgICAgZm9ybVN1YiA9IHRoaXMuZm9ybS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICAvLyB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIC8vIGlmICh0aGlzLmZvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcbiAgICAgICAgLy8gICBkZWJ1Z2dlcjtcbiAgICAgICAgLy8gICB0aGlzLmZvcm1Jc0ludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgLy8gICBmb3IgKGNvbnN0IHggb2YgdGhpcy5mb3JtU2NoZW1hKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5mb3JtLmNvbnRyb2xzW3guZmllbGRdLnZhbGlkO1xuICAgICAgICAvLyAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIC8vICAgICAgIHRoaXMuZm9ybUlzSW52YWxpZCA9IHRydWU7XG4gICAgICAgIC8vICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHRoaXMuZm9ybUlzSW52YWxpZCA9IHRoaXMuZm9ybVNjaGVtYS5zb21lKFxuICAgICAgICAgIChmKSA9PiAoPEZvcm1Hcm91cD50aGlzLmZvcm0pLmNvbnRyb2xzW2YuZmllbGQ/LnRvU3RyaW5nKCldPy5pbnZhbGlkXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICBlbHNlIGZvcm1TdWI/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbiAgY2hlY2tGb3JtKCkge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgLy8gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcbiAgICB9XG4gIH1cbiAgY2xpY2soJGV2ZW50Pykge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZykgdGhpcy5tY2xpY2suZW1pdCgkZXZlbnQpO1xuICB9XG4gIGdldCBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmRpc2FibGVkIHx8XG4gICAgICAhdGhpcy52YWxpZCB8fFxuICAgICAgdGhpcy5mb3JtSXNJbnZhbGlkIHx8XG4gICAgICAoIXRoaXMuZm9ybVNjaGVtYSAmJiAodGhpcy5mb3JtPy5pbnZhbGlkIHx8IHRoaXMuZm9ybT8ucGVuZGluZykpXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGxvYWRlciBzdGF0ZVxuICAgKiBAcGFyYW0gdmFsdWUgTG9hZGVyIHN0YXRlXG4gICAqL1xuICBzZXRMb2FkZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB2YWx1ZTtcbiAgfVxufVxuZW51bSBPbkZvcm1JbnZhbGlkIHtcbiAgZGlzYWJsZSA9ICdkaXNhYmxlJyxcbiAgd2FybiA9ICd3YXJuJyxcbn1cbiIsIjxzcGFuIGNsYXNzPVwiICB0ZXh0LWNlbnRlciBkLWZsZXggIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgW25nQ2xhc3NdPVwie21pbml9XCIgKGNsaWNrKT1cImNoZWNrRm9ybSgpXCI+XG4gIDxpICpuZ0lmPVwic2hvd0hlbHBJY29uICYmIGhlbHBcIiBjbGFzcz1cImZhIGZhLWluZm8tY2lyY2xlIG1lLTIgdGV4dC1wcmltYXJ5XCIgW21hdFRvb2x0aXBdPVwiaGVscFwiPjwvaT5cbiAgPGJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwic3ViQnV0dG9ucz8ubGVuZ3RoP21lbnU6bnVsbFwiIHR5cGU9XCJ7e2FjdGlvblR5cGV9fVwiIGNsYXNzPVwie3ttY2xhc3N9fSB7e19tY2xhc3N9fSBcIlxuICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCIgW21hdEJhZGdlXT1cImJhZGdlXCIgW25nQ2xhc3NdPVwieydjaGFuZ2Vjb2xvcic6IHZhbGlkLCdidG4tcmFpc2VkJzphbmltYXRlLCAgICdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic6XG4gICAgIXRleHR9XCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiBbbWF0VG9vbHRpcF09XCJzaG93SGVscEljb24/bnVsbDooaGVscClcIj5cbiAgICA8ZGl2IGNsYXNzPVwidy0xMDBcIiBbaGlkZGVuXT1cImxvYWRpbmdcIj5cbiAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsncGUtMSBtcy0xJzohaWNvbkJ0bn1cIiAqbmdJZj1cImljb25Qb3NpdGlvbj09J2xlZnQnICYmIChpY29ufHxjdXN0b21JY29uKVwiPlxuICAgICAgICA8c3ZnLWljb24gKm5nSWY9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiPjwvc3ZnLWljb24+XG4gICAgICAgIDxpICpuZ0lmPVwiY3VzdG9tSWNvblwiIGNsYXNzPVwie3tjdXN0b21JY29ufX1cIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGV4dDsgZWxzZSBlbHNlVGVtcGxhdGVcIj5cbiAgICAgICAge3t0ZXh0fX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIGFwcFRyYW5zbGF0b3I+XG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieydwcy0xJzohaWNvbkJ0bn1cIiAqbmdJZj1cImljb25Qb3NpdGlvbj09J3JpZ2h0J1wiPlxuICAgICAgICA8c3ZnLWljb24gKm5nSWY9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiPjwvc3ZnLWljb24+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2J1dHRvbj5cbjwvc3Bhbj5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIiB4UG9zaXRpb249XCJhZnRlclwiIGNsYXNzPVwicm91bmRlZC0xNlwiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiaXNEaXNhYmxlZD9pdGVtLmFjdGlvbigpOm51bGxcIlxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN1YkJ1dHRvbnNcIj57e2l0ZW0ubGFiZWx9fTwvYnV0dG9uPlxuPC9tYXQtbWVudT4iXX0=