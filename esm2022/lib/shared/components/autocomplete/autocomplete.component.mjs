import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { merge } from 'rxjs';
import { debounceTime, filter, mergeMap, startWith } from 'rxjs/operators';
import { InputBasicComponent } from '../input/input.component';
import { ToAnyPipe } from '../../pipes/utility.pipe';
import { InputClassPipe } from '../input/inputs-pipes.pipe';
import { ValidationMessageComponent } from '../input/validation-message/validation-message.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { InfoIconComponent } from '../info-icon/info-icon.component';
import { NgIf, NgFor, NgClass } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../input/input.service";
import * as i2 from "./autocomplete.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/tooltip";
export class AutocompleteComponent extends InputBasicComponent {
    constructor(iS, autoS) {
        super(iS);
        this.iS = iS;
        this.autoS = autoS;
        this.validate = true;
        this.displayWith = (val) => {
            return this.options?.find((x) => x.value == val)?.label || val;
        };
        this.includesOption = (control) => {
            const val = control?.value;
            if (!val)
                return null;
            if (!this.options || this.options.length === 0)
                return null;
            // debugger
            if (this.options.find((x) => x.value == val))
                return null;
            else
                return { notFound: true };
        };
    }
    ngOnInit() {
        super.ngOnInit();
        this.control?.addValidators(this.includesOption.bind(this));
        this.control?.valueChanges.subscribe((r) => {
            // debugger
            super.change({ target: { value: r } });
        });
        // this.options$.subscribe((r) => {
        //   if (this.debug) debugger;
        //   (this.control as FormControl)?.patchValue(this.control?.value,{emitEvent:false});
        //   if (this.control.disabled) this.control.disable({ emitEvent: false });
        // });
        merge(this.control.valueChanges.pipe(startWith('')), this.options$)
            .pipe(
        // filter((r) => !this.filterFunc),
        mergeMap((r) => this.autoS.filterOptions(this.control.value, this.options)))
            .subscribe((r) => {
            this.filteredOptions = r;
        });
        this.control.valueChanges
            .pipe(startWith(''))
            .pipe(debounceTime(1000), filter((r) => !!this.filterFunc), mergeMap((r) => this.filterFunc(this.control.value, this.options)))
            .subscribe((r) => {
            this._options = r;
        });
    }
    selected($event) {
        this.filteredOptions = this.options;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteComponent, deps: [{ token: i1.InputService }, { token: i2.AutocompleteService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: AutocompleteComponent, isStandalone: true, selector: "app-autocomplete", inputs: { validate: "validate", filterFunc: "filterFunc" }, usesInheritance: true, ngImport: i0, template: "<div class=\"row align-items-center\">\n  <div class=\"{{stacked?'col-12':'col-md'}} position-relative\">\n    <form [formGroup]=\"form|toAny\">\n\n      <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\">{{label}}\n        <span *ngIf=\"hint\" class=\"ms-8\">\n          <info-icon [text]=\"hint\" />\n        </span>\n      </div>\n      <div class=\"position-relative\">\n        <div class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <input type=\"text\" data-noformat=\"true\" [formControlName]=\"name|toAny \" placeholder=\"{{placeholder||label}}\"\n          id=\"{{id}}\" [class]=\"inpCl|inputClass:valid:invalid:showValidation\" [required]=\"required\"\n          [readonly]=\"readonly\" #trigger=\"matAutocompleteTrigger\" [matAutocomplete]=\"auto\" #inp>\n        <i class=\"input-icon fa fa-chevron-down\" (click)=\"$event.stopPropagation(); trigger.openPanel()\"></i>\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngIf=\"showEmptyOption\" [value]=\"null\">\n\n          </mat-option>\n          <mat-option *ngFor=\"let item of filteredOptions ; trackBy:iS.trackByValue\" [value]=\"item.value\">\n            <div class=\"option\" [matTooltip]=\"item.label\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n              {{item.label}}</div>\n          </mat-option>\n        </mat-autocomplete>\n        <ng-container *ngIf=\"control?.dirty && showValidation && showValidationIcon \">\n          <div [ngClass]=\"{valid:control?.valid}\" class=\" validity-icon\"><i class=\"fa fa-check\"></i></div>\n          <div [ngClass]=\"{pending:control?.pending}\" class=\" validity-icon\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n          <div [ngClass]=\"{invalid:control?.invalid}\" class=\" validity-icon\"><i class=\"fa fa-times\"></i></div>\n        </ng-container>\n      </div>\n    </form>\n  </div>\n</div>\n<app-validation-message *ngIf=\"showValidationMsg\" [control]=\"control\" [label]=\"label\"></app-validation-message>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n", "i.input-icon{position:absolute;top:calc((100% - 10px)/2);right:15px;opacity:.4;font-size:10px}.option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}input{padding:11px 16px;font-style:normal;font-weight:500;font-size:16px;line-height:18px;width:100%;display:flex;align-items:center;height:51px;color:#828282}input:active,input:focus{background-color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: InfoIconComponent, selector: "info-icon", inputs: ["text", "coloured", "left", "right"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: ValidationMessageComponent, selector: "app-validation-message", inputs: ["validationKey", "control", "input", "label", "minLength", "maxLength", "customMessage"] }, { kind: "pipe", type: InputClassPipe, name: "inputClass" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-autocomplete', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        NgIf,
                        InfoIconComponent,
                        SvgIconComponent,
                        MatAutocompleteModule,
                        MatOptionModule,
                        NgFor,
                        MatTooltipModule,
                        NgClass,
                        ValidationMessageComponent,
                        InputClassPipe,
                        ToAnyPipe,
                    ], template: "<div class=\"row align-items-center\">\n  <div class=\"{{stacked?'col-12':'col-md'}} position-relative\">\n    <form [formGroup]=\"form|toAny\">\n\n      <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\">{{label}}\n        <span *ngIf=\"hint\" class=\"ms-8\">\n          <info-icon [text]=\"hint\" />\n        </span>\n      </div>\n      <div class=\"position-relative\">\n        <div class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <input type=\"text\" data-noformat=\"true\" [formControlName]=\"name|toAny \" placeholder=\"{{placeholder||label}}\"\n          id=\"{{id}}\" [class]=\"inpCl|inputClass:valid:invalid:showValidation\" [required]=\"required\"\n          [readonly]=\"readonly\" #trigger=\"matAutocompleteTrigger\" [matAutocomplete]=\"auto\" #inp>\n        <i class=\"input-icon fa fa-chevron-down\" (click)=\"$event.stopPropagation(); trigger.openPanel()\"></i>\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngIf=\"showEmptyOption\" [value]=\"null\">\n\n          </mat-option>\n          <mat-option *ngFor=\"let item of filteredOptions ; trackBy:iS.trackByValue\" [value]=\"item.value\">\n            <div class=\"option\" [matTooltip]=\"item.label\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n              {{item.label}}</div>\n          </mat-option>\n        </mat-autocomplete>\n        <ng-container *ngIf=\"control?.dirty && showValidation && showValidationIcon \">\n          <div [ngClass]=\"{valid:control?.valid}\" class=\" validity-icon\"><i class=\"fa fa-check\"></i></div>\n          <div [ngClass]=\"{pending:control?.pending}\" class=\" validity-icon\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n          <div [ngClass]=\"{invalid:control?.invalid}\" class=\" validity-icon\"><i class=\"fa fa-times\"></i></div>\n        </ng-container>\n      </div>\n    </form>\n  </div>\n</div>\n<app-validation-message *ngIf=\"showValidationMsg\" [control]=\"control\" [label]=\"label\"></app-validation-message>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n", "i.input-icon{position:absolute;top:calc((100% - 10px)/2);right:15px;opacity:.4;font-size:10px}.option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}input{padding:11px 16px;font-style:normal;font-weight:500;font-size:16px;line-height:18px;width:100%;display:flex;align-items:center;height:51px;color:#828282}input:active,input:focus{background-color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.InputService }, { type: i2.AutocompleteService }]; }, propDecorators: { validate: [{
                type: Input
            }], filterFunc: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQWdDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hHLE9BQU8sRUFBZ0MscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRyxPQUFPLEVBQUUsS0FBSyxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFHeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENB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RSxFQUFFLENBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3pELENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBVSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFvQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs4R0F4RFUscUJBQXFCO2tHQUFyQixxQkFBcUIsK0pDdENsQyx5bkVBbUMrRywyMEVEWnZHLFdBQVcsdzNCQUNYLG1CQUFtQixnVkFDbkIsSUFBSSw2RkFDSixpQkFBaUIscUdBQ2pCLGdCQUFnQiwrRUFDaEIscUJBQXFCLGdjQUNyQixlQUFlLCtCQUNmLEtBQUssa0hBQ0wsZ0JBQWdCLCtIQUNoQixPQUFPLG9GQUNQLDBCQUEwQixpS0FDMUIsY0FBYyw4Q0FDZCxTQUFTOzsyRkFHSixxQkFBcUI7a0JBckJqQyxTQUFTOytCQUNJLGtCQUFrQixjQUdoQixJQUFJLFdBQ1A7d0JBQ0wsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLElBQUk7d0JBQ0osaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsZUFBZTt3QkFDZixLQUFLO3dCQUNMLGdCQUFnQjt3QkFDaEIsT0FBTzt3QkFDUCwwQkFBMEI7d0JBQzFCLGNBQWM7d0JBQ2QsU0FBUztxQkFDWjtxSUFVTSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtZXJnZU1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5wdXRCYXNpY0NvbXBvbmVudCwgSU9wdGlvbiB9IGZyb20gJy4uL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dFNlcnZpY2UgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRvQW55UGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL3V0aWxpdHkucGlwZSc7XG5pbXBvcnQgeyBJbnB1dENsYXNzUGlwZSB9IGZyb20gJy4uL2lucHV0L2lucHV0cy1waXBlcy5waXBlJztcbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQvdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0T3B0aW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBTdmdJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEluZm9JY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5mby1pY29uL2luZm8taWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdJZiwgTmdGb3IsIE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1hdXRvY29tcGxldGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcycsICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgTmdJZixcbiAgICAgICAgSW5mb0ljb25Db21wb25lbnQsXG4gICAgICAgIFN2Z0ljb25Db21wb25lbnQsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgICAgICBOZ0ZvcixcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTmdDbGFzcyxcbiAgICAgICAgVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQsXG4gICAgICAgIElucHV0Q2xhc3NQaXBlLFxuICAgICAgICBUb0FueVBpcGUsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlQ29tcG9uZW50PFxuICBURm9ybUdyb3VwIGV4dGVuZHMge1xuICAgIFtLIGluIGtleW9mIFRGb3JtR3JvdXBdOiBBYnN0cmFjdENvbnRyb2w8YW55LCBhbnk+O1xuICB9ID0gYW55LFxuICBUQ29udHJvbCA9IGFueSxcbiAgVE9wdGlvbiA9IGFueVxuPiBleHRlbmRzIElucHV0QmFzaWNDb21wb25lbnQ8VEZvcm1Hcm91cCwgVENvbnRyb2wsIFRPcHRpb24+IHtcbiAgZmlsdGVyZWRPcHRpb25zOiBJT3B0aW9uW107XG4gIEBJbnB1dCgpIHZhbGlkYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgZmlsdGVyRnVuYzogKC4uLmFyZ3MpID0+IE9ic2VydmFibGU8YW55W10+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgb3ZlcnJpZGUgaVM6IElucHV0U2VydmljZSxcbiAgICBwdWJsaWMgYXV0b1M6IEF1dG9jb21wbGV0ZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoaVMpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmNvbnRyb2w/LmFkZFZhbGlkYXRvcnModGhpcy5pbmNsdWRlc09wdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNvbnRyb2w/LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICBzdXBlci5jaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6IHIgfSB9KTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLm9wdGlvbnMkLnN1YnNjcmliZSgocikgPT4ge1xuICAgIC8vICAgaWYgKHRoaXMuZGVidWcpIGRlYnVnZ2VyO1xuICAgIC8vICAgKHRoaXMuY29udHJvbCBhcyBGb3JtQ29udHJvbCk/LnBhdGNoVmFsdWUodGhpcy5jb250cm9sPy52YWx1ZSx7ZW1pdEV2ZW50OmZhbHNlfSk7XG4gICAgLy8gICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkKSB0aGlzLmNvbnRyb2wuZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgLy8gfSk7XG5cbiAgICBtZXJnZSh0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKCcnKSksIHRoaXMub3B0aW9ucyQpXG4gICAgICAucGlwZShcbiAgICAgICAgLy8gZmlsdGVyKChyKSA9PiAhdGhpcy5maWx0ZXJGdW5jKSxcbiAgICAgICAgbWVyZ2VNYXAoKHIpID0+XG4gICAgICAgICAgdGhpcy5hdXRvUy5maWx0ZXJPcHRpb25zKHRoaXMuY29udHJvbC52YWx1ZSBhcyBhbnksIHRoaXMub3B0aW9ucylcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHI7XG4gICAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShzdGFydFdpdGgoJycpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDAwKSxcbiAgICAgICAgZmlsdGVyKChyKSA9PiAhIXRoaXMuZmlsdGVyRnVuYyksXG4gICAgICAgIG1lcmdlTWFwKChyKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVyRnVuYyh0aGlzLmNvbnRyb2wudmFsdWUgYXMgYW55LCB0aGlzLm9wdGlvbnMpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHIgYXMgYW55W107XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdGVkKCRldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCkge1xuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB9XG4gIFxuICBkaXNwbGF5V2l0aCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnM/LmZpbmQoKHgpID0+IHgudmFsdWUgPT0gdmFsKT8ubGFiZWwgfHwgdmFsO1xuICB9O1xuXG4gIGluY2x1ZGVzT3B0aW9uID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IGNvbnRyb2w/LnZhbHVlO1xuICAgIGlmICghdmFsKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZmluZCgoeCkgPT4geC52YWx1ZSA9PSB2YWwpKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07XG4gIH07XG59XG4iLCI8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICA8ZGl2IGNsYXNzPVwie3tzdGFja2VkPydjb2wtMTInOidjb2wtbWQnfX0gcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm18dG9BbnlcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItOFwiICpuZ0lmPVwic2hvd1NlcGVyYXRlTGFiZWxcIj57e2xhYmVsfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJoaW50XCIgY2xhc3M9XCJtcy04XCI+XG4gICAgICAgICAgPGluZm8taWNvbiBbdGV4dF09XCJoaW50XCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZWZpeC1pY29uXCIgKm5nSWY9XCJpY29uXCI+XG4gICAgICAgICAgPHN2Zy1pY29uIFtpY29uXT1cImljb25cIiAoY2xpY2spPVwibG9nKClcIj48L3N2Zy1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1ub2Zvcm1hdD1cInRydWVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cIm5hbWV8dG9BbnkgXCIgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfHxsYWJlbH19XCJcbiAgICAgICAgICBpZD1cInt7aWR9fVwiIFtjbGFzc109XCJpbnBDbHxpbnB1dENsYXNzOnZhbGlkOmludmFsaWQ6c2hvd1ZhbGlkYXRpb25cIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiICN0cmlnZ2VyPVwibWF0QXV0b2NvbXBsZXRlVHJpZ2dlclwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiICNpbnA+XG4gICAgICAgIDxpIGNsYXNzPVwiaW5wdXQtaWNvbiBmYSBmYS1jaGV2cm9uLWRvd25cIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB0cmlnZ2VyLm9wZW5QYW5lbCgpXCI+PC9pPlxuICAgICAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiIFtkaXNwbGF5V2l0aF09XCJkaXNwbGF5V2l0aFwiIChvcHRpb25TZWxlY3RlZCk9XCJzZWxlY3RlZCgkZXZlbnQpXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nSWY9XCJzaG93RW1wdHlPcHRpb25cIiBbdmFsdWVdPVwibnVsbFwiPlxuXG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlcmVkT3B0aW9ucyA7IHRyYWNrQnk6aVMudHJhY2tCeVZhbHVlXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIiBbbWF0VG9vbHRpcF09XCJpdGVtLmxhYmVsXCIgW21hdFRvb2x0aXBEaXNhYmxlZF09XCJlbGUuc2Nyb2xsV2lkdGg8PWVsZS5vZmZzZXRXaWR0aFwiICNlbGU+XG4gICAgICAgICAgICAgIHt7aXRlbS5sYWJlbH19PC9kaXY+XG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sPy5kaXJ0eSAmJiBzaG93VmFsaWRhdGlvbiAmJiBzaG93VmFsaWRhdGlvbkljb24gXCI+XG4gICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7dmFsaWQ6Y29udHJvbD8udmFsaWR9XCIgY2xhc3M9XCIgdmFsaWRpdHktaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+PC9kaXY+XG4gICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7cGVuZGluZzpjb250cm9sPy5wZW5kaW5nfVwiIGNsYXNzPVwiIHZhbGlkaXR5LWljb25cIj48aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIntpbnZhbGlkOmNvbnRyb2w/LmludmFsaWR9XCIgY2xhc3M9XCIgdmFsaWRpdHktaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGFwcC12YWxpZGF0aW9uLW1lc3NhZ2UgKm5nSWY9XCJzaG93VmFsaWRhdGlvbk1zZ1wiIFtjb250cm9sXT1cImNvbnRyb2xcIiBbbGFiZWxdPVwibGFiZWxcIj48L2FwcC12YWxpZGF0aW9uLW1lc3NhZ2U+Il19