import { Component, Input, Pipe, } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { EValidationType } from '../../../models/index.model';
import { configValidationMessages } from '../../../../config/validation-messages.config';
import * as i0 from "@angular/core";
export class ErrorMessagesPipe {
    transform(validations, label, maxLength, minLength, control) {
        let msg = validations
            ?.filter((error) => control?.errors[error.type])
            ?.map((error) => this.errMsgPipe.transform(error, label, maxLength, minLength, control?.errors[error.type]))
            .join('\n');
        // debugger
        return msg;
    }
    constructor(errMsgPipe) {
        this.errMsgPipe = errMsgPipe;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagesPipe, deps: [{ token: ErrorMessagePipe }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagesPipe, isStandalone: true, name: "errorMessages" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagesPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'errorMessages',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: ErrorMessagePipe }]; } });
export class ErrorMessagePipe {
    transform(errObj, label, maxLength, minLength, controlMessage) {
        let msg = errObj.type == EValidationType.custom
            ? controlMessage
            : errObj.message
                ? errObj.message.startsWith(' ')
                    ? (label || 'Field') + errObj.message
                    : errObj.message
                : null;
        msg = msg?.replace('{{maxLength}}', maxLength?.toString());
        msg = msg?.replace('{{minLength}}', minLength?.toString());
        return msg;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagePipe, isStandalone: true, name: "errorMessage" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'errorMessage',
                    standalone: true,
                }]
        }] });
export class ValidationMessageComponent {
    set _validationKey(v) {
        // debugger;
        this.validationType = v;
        this.validations = configValidationMessages[this.validationType];
    }
    constructor() { }
    ngOnInit() {
        if (!this.validationType)
            this._validationKey = EValidationType.normal;
    }
    get label() {
        return this._label || this.input?.label;
    }
    get control() {
        return this._control || this.input?.control;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ValidationMessageComponent, isStandalone: true, selector: "app-validation-message", inputs: { _validationKey: ["validationKey", "_validationKey"], _control: ["control", "_control"], input: "input", _label: ["label", "_label"], minLength: "minLength", maxLength: "maxLength", customMessage: "customMessage" }, providers: [ErrorMessagePipe], ngImport: i0, template: "<div class=\"text-danger\">\n  <ng-container *ngIf=\"control?.errors && (control?.dirty || control?.touched)\">\n    <ng-container *ngFor=\"let error of validations\">\n      <span class=\"me-2\" *ngIf=\"control?.errors[error.type] as controlMessage\"> \n        {{((error|errorMessage:label:maxLength:minLength:controlMessage)||customMessage)}}\n      </span>\n    </ng-container>\n  </ng-container>\n</div>\n", styles: [".text-danger{height:25px;margin-top:5px;overflow:auto}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: ErrorMessagePipe, name: "errorMessage" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-validation-message', standalone: true, imports: [NgIf, NgFor, ErrorMessagesPipe, ErrorMessagePipe], providers: [ErrorMessagePipe], template: "<div class=\"text-danger\">\n  <ng-container *ngIf=\"control?.errors && (control?.dirty || control?.touched)\">\n    <ng-container *ngFor=\"let error of validations\">\n      <span class=\"me-2\" *ngIf=\"control?.errors[error.type] as controlMessage\"> \n        {{((error|errorMessage:label:maxLength:minLength:controlMessage)||customMessage)}}\n      </span>\n    </ng-container>\n  </ng-container>\n</div>\n", styles: [".text-danger{height:25px;margin-top:5px;overflow:auto}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { _validationKey: [{
                type: Input,
                args: ['validationKey']
            }], _control: [{
                type: Input,
                args: ['control']
            }], input: [{
                type: Input
            }], _label: [{
                type: Input,
                args: ['label']
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], customMessage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxJQUFJLEdBR0wsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFzQixNQUFNLDZCQUE2QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQU16RixNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFNBQVMsQ0FDUCxXQUFpQyxFQUNqQyxLQUFhLEVBQ2IsU0FBaUIsRUFDakIsU0FBaUIsRUFDakIsT0FBb0I7UUFFcEIsSUFBSSxHQUFHLEdBQUcsV0FBVztZQUNuQixFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUN2QixLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQzVCLENBQ0Y7YUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxXQUFXO1FBQ1gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsWUFBbUIsVUFBNEI7UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7SUFBRyxDQUFDOzhHQXZCeEMsaUJBQWlCOzRHQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBSjdCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7QUErQkQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixTQUFTLENBQ1AsTUFBMEIsRUFDMUIsS0FBYyxFQUNkLFNBQWtCLEVBQ2xCLFNBQWtCLEVBQ2xCLGNBQW9CO1FBRXBCLElBQUksR0FBRyxHQUNMLE1BQU0sQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLE1BQU07WUFDbkMsQ0FBQyxDQUFDLGNBQWM7WUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPO2dCQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO29CQUM5QixDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU87b0JBQ3JDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNYLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRCxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzhHQW5CVSxnQkFBZ0I7NEdBQWhCLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFKNUIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsY0FBYztvQkFDcEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOztBQStCRCxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDLElBQTRCLGNBQWMsQ0FBQyxDQUFrQjtRQUMzRCxZQUFZO1FBQ1osSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQVFELGdCQUFlLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7SUFDOUMsQ0FBQzs4R0F4QlUsMEJBQTBCO2tHQUExQiwwQkFBMEIsc1NBRjFCLENBQUMsZ0JBQWdCLENBQUMsMEJDNUUvQiw0WkFTQSxrSERrRVksSUFBSSw2RkFBRSxLQUFLLDhHQTNCVixnQkFBZ0I7OzJGQThCaEIsMEJBQTBCO2tCQVJ0QyxTQUFTOytCQUNFLHdCQUF3QixjQUd0QixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLGFBQ2hELENBQUMsZ0JBQWdCLENBQUM7MEVBSUQsY0FBYztzQkFBekMsS0FBSzt1QkFBQyxlQUFlO2dCQUtKLFFBQVE7c0JBQXpCLEtBQUs7dUJBQUMsU0FBUztnQkFDUCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ1UsTUFBTTtzQkFBckIsS0FBSzt1QkFBQyxPQUFPO2dCQUNMLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7IFxuaW1wb3J0IHsgSW5wdXRCYXNpY0NvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0lmLCBOZ0ZvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFVmFsaWRhdGlvblR5cGUsIElWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbmRleC5tb2RlbCc7IFxuaW1wb3J0IHsgY29uZmlnVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL3ZhbGlkYXRpb24tbWVzc2FnZXMuY29uZmlnJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZXJyb3JNZXNzYWdlcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWxpZGF0aW9uczogSVZhbGlkYXRpb25NZXNzYWdlW10sXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBtYXhMZW5ndGg6IG51bWJlcixcbiAgICBtaW5MZW5ndGg6IG51bWJlcixcbiAgICBjb250cm9sOiBGb3JtQ29udHJvbFxuICApOiBzdHJpbmcge1xuICAgIGxldCBtc2cgPSB2YWxpZGF0aW9uc1xuICAgICAgPy5maWx0ZXIoKGVycm9yKSA9PiBjb250cm9sPy5lcnJvcnNbZXJyb3IudHlwZV0pXG4gICAgICA/Lm1hcCgoZXJyb3IpID0+XG4gICAgICAgIHRoaXMuZXJyTXNnUGlwZS50cmFuc2Zvcm0oXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgbWF4TGVuZ3RoLFxuICAgICAgICAgIG1pbkxlbmd0aCxcbiAgICAgICAgICBjb250cm9sPy5lcnJvcnNbZXJyb3IudHlwZV1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgcmV0dXJuIG1zZztcbiAgfVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyTXNnUGlwZTogRXJyb3JNZXNzYWdlUGlwZSkge31cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZXJyb3JNZXNzYWdlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNZXNzYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgZXJyT2JqOiBJVmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgbGFiZWw/OiBzdHJpbmcsXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxuICAgIG1pbkxlbmd0aD86IG51bWJlcixcbiAgICBjb250cm9sTWVzc2FnZT86IGFueVxuICApOiBzdHJpbmcge1xuICAgIGxldCBtc2cgPVxuICAgICAgZXJyT2JqLnR5cGUgPT0gRVZhbGlkYXRpb25UeXBlLmN1c3RvbVxuICAgICAgICA/IGNvbnRyb2xNZXNzYWdlXG4gICAgICAgIDogZXJyT2JqLm1lc3NhZ2VcbiAgICAgICAgPyBlcnJPYmoubWVzc2FnZS5zdGFydHNXaXRoKCcgJylcbiAgICAgICAgICA/IChsYWJlbCB8fCAnRmllbGQnKSArIGVyck9iai5tZXNzYWdlXG4gICAgICAgICAgOiBlcnJPYmoubWVzc2FnZVxuICAgICAgICA6IG51bGw7XG4gICAgbXNnID0gbXNnPy5yZXBsYWNlKCd7e21heExlbmd0aH19JywgbWF4TGVuZ3RoPy50b1N0cmluZygpKTtcbiAgICBtc2cgPSBtc2c/LnJlcGxhY2UoJ3t7bWluTGVuZ3RofX0nLCBtaW5MZW5ndGg/LnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBtc2c7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXZhbGlkYXRpb24tbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nRm9yLCBFcnJvck1lc3NhZ2VzUGlwZSwgRXJyb3JNZXNzYWdlUGlwZV0sXG4gIHByb3ZpZGVyczogW0Vycm9yTWVzc2FnZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHZhbGlkYXRpb25UeXBlOiBFVmFsaWRhdGlvblR5cGU7XG4gIEBJbnB1dCgndmFsaWRhdGlvbktleScpIHNldCBfdmFsaWRhdGlvbktleSh2OiBFVmFsaWRhdGlvblR5cGUpIHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICB0aGlzLnZhbGlkYXRpb25UeXBlID0gdjtcbiAgICB0aGlzLnZhbGlkYXRpb25zID0gY29uZmlnVmFsaWRhdGlvbk1lc3NhZ2VzW3RoaXMudmFsaWRhdGlvblR5cGVdO1xuICB9XG4gIEBJbnB1dCgnY29udHJvbCcpIF9jb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIEBJbnB1dCgpIGlucHV0OiBJbnB1dEJhc2ljQ29tcG9uZW50O1xuICBASW5wdXQoJ2xhYmVsJykgX2xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlcjtcbiAgQElucHV0KCkgY3VzdG9tTWVzc2FnZTogJ1ZhbHVlIGlzIGludmFsaWQnO1xuICB2YWxpZGF0aW9uczogSVZhbGlkYXRpb25NZXNzYWdlW107XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGlvblR5cGUpIHRoaXMuX3ZhbGlkYXRpb25LZXkgPSBFVmFsaWRhdGlvblR5cGUubm9ybWFsO1xuICB9XG4gIGdldCBsYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWwgfHwgdGhpcy5pbnB1dD8ubGFiZWw7XG4gIH1cbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2wgfHwgdGhpcy5pbnB1dD8uY29udHJvbDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sPy5lcnJvcnMgJiYgKGNvbnRyb2w/LmRpcnR5IHx8IGNvbnRyb2w/LnRvdWNoZWQpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgdmFsaWRhdGlvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWUtMlwiICpuZ0lmPVwiY29udHJvbD8uZXJyb3JzW2Vycm9yLnR5cGVdIGFzIGNvbnRyb2xNZXNzYWdlXCI+IFxuICAgICAgICB7eygoZXJyb3J8ZXJyb3JNZXNzYWdlOmxhYmVsOm1heExlbmd0aDptaW5MZW5ndGg6Y29udHJvbE1lc3NhZ2UpfHxjdXN0b21NZXNzYWdlKX19XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=