import { Component, Input, ViewChildren } from '@angular/core';
import { FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { InputBasicComponent } from '../input.component';
import { NgFor, NgClass } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class OtpInputComponent extends InputBasicComponent {
    constructor() {
        super(...arguments);
        this.subForm = new FormArray([]);
    }
    set _otpLength(v) {
        this.otpLength = v;
        this.genForm(v);
    }
    ngOnInit() {
        super.ngOnInit();
        this.control.valueChanges.pipe().subscribe((r) => {
            if (!r)
                this.subForm.reset();
        });
        this.subForm.valueChanges.pipe(debounceTime(1000)).subscribe((r) => {
            if (r.join(''))
                this.control?.patchValue(r.join(''));
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => {
            for (const elRef of this.otpInputRef) {
                elRef.nativeElement.onpaste = (e) => {
                    let pastedText = undefined;
                    if (window['clipboardData'] && window['clipboardData'].getData) {
                        // IE
                        pastedText = window['clipboardData'].getData('Text');
                    }
                    else if (e.clipboardData && e.clipboardData.getData) {
                        pastedText = e.clipboardData.getData('text/plain');
                    }
                    this.subForm.controls.forEach((x, i) => {
                        x.patchValue(pastedText[i] || undefined);
                    }); // Process and handle text...
                    return false; // Prevent the default handler from running.
                };
            }
        }, 1000);
    }
    genForm(otpLength = this.otpLength) {
        for (let index = 0; index < otpLength; index++) {
            const form = new FormControl(null, [
                Validators.required,
                Validators.maxLength(1),
            ]);
            form.valueChanges.subscribe((r) => {
                if (this.type == 'number' && r && !/^\d+$/.test(r))
                    form.reset();
                else if (r?.length == 1) {
                    document.getElementById(this.id + (index + 1))?.focus();
                }
            });
            this.subForm.insert(index, form);
        }
    }
    onChange(e, form) {
        // console.log(e);
        form.patchValue(e.data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OtpInputComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: OtpInputComponent, isStandalone: true, selector: "app-otp-input", inputs: { _otpLength: ["otpLength", "_otpLength"] }, viewQueries: [{ propertyName: "otpInputRef", predicate: ["otpInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"d-inline-flex  justify-content-center  \" >\n    <ng-container *ngFor=\"let f of subForm.controls; let i = index\">\n        <div class=\" otpi\">\n            <input #otpInput id=\"{{id}}{{i}}\" [ngClass]=\"{hasValue:f.value}\"  (input)=\"onChange($event,f)\" [formControl]=\"f\">\n        </div>\n    </ng-container>\n</div>", styles: [".otpi{margin:0 4px}.otpi input{background:#ffffff;height:64px;width:64px;font-size:16px;text-align:center;border:1px solid #e0e0e0;border-radius:8px}.otpi input.hasValue{color:var(--primary);border:1px solid var(--primary)}.otpi input:focus-visible{outline:none!important}@media screen and (max-width: 1024px){.otpi input{height:50px;width:50px;font-size:14px}}\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OtpInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-otp-input', standalone: true, imports: [
                        NgFor,
                        FormsModule,
                        NgClass,
                        ReactiveFormsModule,
                    ], template: "<div class=\"d-inline-flex  justify-content-center  \" >\n    <ng-container *ngFor=\"let f of subForm.controls; let i = index\">\n        <div class=\" otpi\">\n            <input #otpInput id=\"{{id}}{{i}}\" [ngClass]=\"{hasValue:f.value}\"  (input)=\"onChange($event,f)\" [formControl]=\"f\">\n        </div>\n    </ng-container>\n</div>", styles: [".otpi{margin:0 4px}.otpi input{background:#ffffff;height:64px;width:64px;font-size:16px;text-align:center;border:1px solid #e0e0e0;border-radius:8px}.otpi input.hasValue{color:var(--primary);border:1px solid var(--primary)}.otpi input:focus-visible{outline:none!important}@media screen and (max-width: 1024px){.otpi input{height:50px;width:50px;font-size:14px}}\n"] }]
        }], propDecorators: { _otpLength: [{
                type: Input,
                args: ['otpLength']
            }], otpInputRef: [{
                type: ViewChildren,
                args: ['otpInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L290cC1pbnB1dC9vdHAtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvb3RwLWlucHV0L290cC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTSxZQUFZLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWNqRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1CO0lBWjFEOztRQWFFLFlBQU8sR0FBRyxJQUFJLFNBQVMsQ0FBc0IsRUFBRSxDQUFDLENBQUM7S0E0RGxEO0lBMURDLElBQXdCLFVBQVUsQ0FBQyxDQUFTO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUlRLFFBQVE7UUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZ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RUQsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFpQjtRQUMzQixrQkFBa0I7UUFFbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs4R0E1RFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsaVBDdkI5QixxVkFNTSxxYURXRSxLQUFLLGtIQUNMLFdBQVcsdVpBQ1gsT0FBTyxtRkFDUCxtQkFBbUI7OzJGQUdkLGlCQUFpQjtrQkFaN0IsU0FBUzsrQkFDSSxlQUFlLGNBR2IsSUFBSSxXQUNQO3dCQUNMLEtBQUs7d0JBQ0wsV0FBVzt3QkFDWCxPQUFPO3dCQUNQLG1CQUFtQjtxQkFDdEI7OEJBS3FCLFVBQVU7c0JBQWpDLEtBQUs7dUJBQUMsV0FBVztnQkFJUSxXQUFXO3NCQUFwQyxZQUFZO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXksIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbnB1dEJhc2ljQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5nRm9yLCBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtb3RwLWlucHV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vb3RwLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9vdHAtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmdGb3IsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBOZ0NsYXNzLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIE90cElucHV0Q29tcG9uZW50IGV4dGVuZHMgSW5wdXRCYXNpY0NvbXBvbmVudCB7XG4gIHN1YkZvcm0gPSBuZXcgRm9ybUFycmF5PEZvcm1Db250cm9sPHN0cmluZz4+KFtdKTtcbiAgb3RwTGVuZ3RoPzogbnVtYmVyO1xuICBASW5wdXQoJ290cExlbmd0aCcpIHNldCBfb3RwTGVuZ3RoKHY6IG51bWJlcikge1xuICAgIHRoaXMub3RwTGVuZ3RoID0gdjtcbiAgICB0aGlzLmdlbkZvcm0odik7XG4gIH1cbiAgQFZpZXdDaGlsZHJlbignb3RwSW5wdXQnKSBvdHBJbnB1dFJlZjogUXVlcnlMaXN0PFxuICAgIEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD5cbiAgPjtcbiAgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoKS5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgIGlmICghcikgdGhpcy5zdWJGb3JtLnJlc2V0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWJGb3JtLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgxMDAwKSkuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICBpZiAoci5qb2luKCcnKSkgdGhpcy5jb250cm9sPy5wYXRjaFZhbHVlKHIuam9pbignJykpO1xuICAgIH0pO1xuICB9XG4gIG92ZXJyaWRlIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZWxSZWYgb2YgdGhpcy5vdHBJbnB1dFJlZikge1xuICAgICAgICBlbFJlZi5uYXRpdmVFbGVtZW50Lm9ucGFzdGUgPSAoZSkgPT4ge1xuICAgICAgICAgIGxldCBwYXN0ZWRUZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmICh3aW5kb3dbJ2NsaXBib2FyZERhdGEnXSAmJiB3aW5kb3dbJ2NsaXBib2FyZERhdGEnXS5nZXREYXRhKSB7XG4gICAgICAgICAgICAvLyBJRVxuICAgICAgICAgICAgcGFzdGVkVGV4dCA9IHdpbmRvd1snY2xpcGJvYXJkRGF0YSddLmdldERhdGEoJ1RleHQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUuY2xpcGJvYXJkRGF0YSAmJiBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSkge1xuICAgICAgICAgICAgcGFzdGVkVGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3ViRm9ybS5jb250cm9scy5mb3JFYWNoKCh4LCBpKSA9PiB7XG4gICAgICAgICAgICB4LnBhdGNoVmFsdWUocGFzdGVkVGV4dFtpXSB8fCB1bmRlZmluZWQpO1xuICAgICAgICAgIH0pOyAvLyBQcm9jZXNzIGFuZCBoYW5kbGUgdGV4dC4uLlxuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBoYW5kbGVyIGZyb20gcnVubmluZy5cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGdlbkZvcm0ob3RwTGVuZ3RoID0gdGhpcy5vdHBMZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3RwTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1Db250cm9sPHN0cmluZz4obnVsbCwgW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxKSxcbiAgICAgIF0pO1xuICAgICAgZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ251bWJlcicgJiYgciAmJiAhL15cXGQrJC8udGVzdChyKSkgZm9ybS5yZXNldCgpO1xuICAgICAgICBlbHNlIGlmIChyPy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAoaW5kZXggKyAxKSk/LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWJGb3JtLmluc2VydChpbmRleCwgZm9ybSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZSwgZm9ybTogRm9ybUNvbnRyb2wpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcblxuICAgIGZvcm0ucGF0Y2hWYWx1ZShlLmRhdGEpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtZmxleCAganVzdGlmeS1jb250ZW50LWNlbnRlciAgXCIgPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2Ygc3ViRm9ybS5jb250cm9sczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiIG90cGlcIj5cbiAgICAgICAgICAgIDxpbnB1dCAjb3RwSW5wdXQgaWQ9XCJ7e2lkfX17e2l9fVwiIFtuZ0NsYXNzXT1cIntoYXNWYWx1ZTpmLnZhbHVlfVwiICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50LGYpXCIgW2Zvcm1Db250cm9sXT1cImZcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj4iXX0=