import { CommonModule } from '@angular/common';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./input.service";
export class FilterOptions {
    transform(arr = [], query, field = 'label') {
        query = query?.toLowerCase()?.trim();
        arr = arr ? arr : [];
        return [
            ...arr.filter((x) => x[field].toLowerCase().startsWith(query)),
            ...(arr
                .filter((x) => !x[field].toLowerCase().startsWith(query))
                ?.filter((x) => x[field].toLowerCase().includes(query)) || []),
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterOptions, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FilterOptions, isStandalone: true, name: "filterOptions" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterOptions, decorators: [{
            type: Pipe,
            args: [{
                    name: 'filterOptions',
                    standalone: true,
                }]
        }] });
export class OptionerPipe {
    transform(options, labelField, idField, basic) {
        if (options) {
            if (labelField && idField) {
                return basic
                    ? options.map((x) => ({
                        label: this.arrToStr(labelField, x),
                        value: x[idField],
                    }))
                    : options.map((x) => ({
                        label: this.arrToStr(labelField, x),
                        value: x,
                    }));
            }
            else {
                return options.map((x) => ({
                    label: x,
                    value: x,
                }));
            }
        }
        else {
            return [];
        }
    }
    arrToStr(labelField, x) {
        const fs = labelField.split('|');
        if (fs.length > 1) {
            let l = '';
            fs.forEach((field) => {
                l += x[field] + ' ';
            });
            return l;
        }
        else {
            return x[labelField];
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionerPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: OptionerPipe, isStandalone: true, name: "optioner" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionerPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'optioner',
                    standalone: true
                }]
        }] });
export class ValidationMsg {
    transform(message, prefix, suffix) {
        return ((prefix ? prefix + ' ' : '') + message + (suffix ? ' ' + suffix : ''));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMsg, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ValidationMsg, isStandalone: true, name: "validationMsg" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMsg, decorators: [{
            type: Pipe,
            args: [{
                    name: 'validationMsg',
                    standalone: true,
                }]
        }] });
export class Validator {
    transform(validation, control, update) {
        return (control &&
            control?.hasError(validation?.type) &&
            (control?.touched || control?.dirty));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: Validator, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: Validator, isStandalone: true, name: "validator" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: Validator, decorators: [{
            type: Pipe,
            args: [{
                    name: 'validator',
                    standalone: true,
                }]
        }] });
export class OptionLabeller {
    transform(option, formatter, optionType, labelField) {
        if (formatter)
            return formatter(option);
        if (optionType)
            return this.iS.optionLabellerFunctions[optionType](option).label;
        if (labelField)
            return option[labelField];
        return option;
    }
    constructor(iS) {
        this.iS = iS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionLabeller, deps: [{ token: i1.InputService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: OptionLabeller, isStandalone: true, name: "optionLabeller" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionLabeller, decorators: [{
            type: Pipe,
            args: [{
                    name: 'optionLabeller',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.InputService }]; } });
export class OptionsFormatter {
    transform(options, valueField, formatter, optionType, labelField) {
        return this.iS.optionsFormatter(options, valueField, formatter, optionType, labelField);
    }
    constructor(iS) {
        this.iS = iS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionsFormatter, deps: [{ token: i1.InputService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: OptionsFormatter, isStandalone: true, name: "optionsFormatter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionsFormatter, decorators: [{
            type: Pipe,
            args: [{
                    name: 'optionsFormatter',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.InputService }]; } });
export class InputClassPipe {
    transform(inpCl, valid, invalid, showValidation) {
        let cls = inpCl + '  ';
        if (showValidation) {
            cls += valid ? ' bordercheck' : invalid ? ' borderuncheck' : '';
        }
        return cls;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: InputClassPipe, isStandalone: true, name: "inputClass" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputClassPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'inputClass',
                    standalone: true
                }]
        }] });
const comps = [
    FilterOptions,
    Validator,
    ValidationMsg,
    OptionerPipe,
    OptionLabeller,
    OptionsFormatter,
    InputClassPipe,
];
const modules = [FormsModule];
export class InputPipesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, imports: [CommonModule, FormsModule, FilterOptions, Validator, ValidationMsg, OptionerPipe, OptionLabeller, OptionsFormatter, InputClassPipe], exports: [FilterOptions, Validator, ValidationMsg, OptionerPipe, OptionLabeller, OptionsFormatter, InputClassPipe, FormsModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, imports: [CommonModule, modules, FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...modules, ...comps],
                    exports: [...comps, ...modules],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLXBpcGVzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC9pbnB1dHMtcGlwZXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBbUIsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVM5RCxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsTUFBYSxFQUFFLEVBQUUsS0FBYSxFQUFFLFFBQWdCLE9BQU87UUFDL0QsS0FBSyxHQUFHLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyQixPQUFPO1lBQ0wsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELEdBQUcsQ0FBQyxHQUFHO2lCQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6RCxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENB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QztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7b0JBQzdDLE9BQU8sRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElPcHRpb24sIE9wdGlvbkxhYmVsVHlwZSB9IGZyb20gJy4vaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0U2VydmljZSB9IGZyb20gJy4vaW5wdXQuc2VydmljZSc7XG5pbXBvcnQgeyBJQ29kZVRpdGxlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2luZGV4Lm1vZGVsJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdmaWx0ZXJPcHRpb25zJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJPcHRpb25zIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShhcnI6IGFueVtdID0gW10sIHF1ZXJ5OiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcgPSAnbGFiZWwnKSB7XG4gICAgcXVlcnkgPSBxdWVyeT8udG9Mb3dlckNhc2UoKT8udHJpbSgpO1xuICAgIGFyciA9IGFyciA/IGFyciA6IFtdO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5hcnIuZmlsdGVyKCh4KSA9PiB4W2ZpZWxkXS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgocXVlcnkpKSxcbiAgICAgIC4uLihhcnJcbiAgICAgICAgLmZpbHRlcigoeCkgPT4gIXhbZmllbGRdLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChxdWVyeSkpXG4gICAgICAgID8uZmlsdGVyKCh4KSA9PiB4W2ZpZWxkXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkgfHwgW10pLFxuICAgIF07XG4gIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6ICdvcHRpb25lcicsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25lclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIG9wdGlvbnM6IGFueVtdLFxuICAgIGxhYmVsRmllbGQsXG4gICAgaWRGaWVsZD8sXG4gICAgYmFzaWM/OiBib29sZWFuXG4gICk6IHsgdmFsdWU6IGFueTsgbGFiZWw6IHN0cmluZyB9W10ge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAobGFiZWxGaWVsZCAmJiBpZEZpZWxkKSB7XG4gICAgICAgIHJldHVybiBiYXNpY1xuICAgICAgICAgID8gb3B0aW9ucy5tYXAoKHgpID0+ICh7XG4gICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmFyclRvU3RyKGxhYmVsRmllbGQsIHgpLFxuICAgICAgICAgICAgICB2YWx1ZTogeFtpZEZpZWxkXSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogb3B0aW9ucy5tYXAoKHgpID0+ICh7XG4gICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmFyclRvU3RyKGxhYmVsRmllbGQsIHgpLFxuICAgICAgICAgICAgICB2YWx1ZTogeCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm1hcCgoeCkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogeCxcbiAgICAgICAgICB2YWx1ZTogeCxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG4gIGFyclRvU3RyKGxhYmVsRmllbGQ6IHN0cmluZywgeCkge1xuICAgIGNvbnN0IGZzID0gbGFiZWxGaWVsZC5zcGxpdCgnfCcpO1xuICAgIGlmIChmcy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgbCA9ICcnO1xuICAgICAgZnMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgbCArPSB4W2ZpZWxkXSArICcgJztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB4W2xhYmVsRmllbGRdO1xuICAgIH1cbiAgfVxufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3ZhbGlkYXRpb25Nc2cnLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25Nc2cgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG1lc3NhZ2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nLCBzdWZmaXg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAocHJlZml4ID8gcHJlZml4ICsgJyAnIDogJycpICsgbWVzc2FnZSArIChzdWZmaXggPyAnICcgKyBzdWZmaXggOiAnJylcbiAgICApO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndmFsaWRhdG9yJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3IgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbGlkYXRpb24sIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgdXBkYXRlPykge1xuICAgIHJldHVybiAoXG4gICAgICBjb250cm9sICYmXG4gICAgICBjb250cm9sPy5oYXNFcnJvcih2YWxpZGF0aW9uPy50eXBlKSAmJlxuICAgICAgKGNvbnRyb2w/LnRvdWNoZWQgfHwgY29udHJvbD8uZGlydHkpXG4gICAgKTtcbiAgfVxufVxuQFBpcGUoe1xuICAgIG5hbWU6ICdvcHRpb25MYWJlbGxlcicsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uTGFiZWxsZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIG9wdGlvbjogYW55LFxuICAgIGZvcm1hdHRlcj8sXG4gICAgb3B0aW9uVHlwZT86IE9wdGlvbkxhYmVsVHlwZSxcbiAgICBsYWJlbEZpZWxkPzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKGZvcm1hdHRlcikgcmV0dXJuIGZvcm1hdHRlcihvcHRpb24pO1xuICAgIGlmIChvcHRpb25UeXBlKSByZXR1cm4gdGhpcy5pUy5vcHRpb25MYWJlbGxlckZ1bmN0aW9uc1tvcHRpb25UeXBlXShvcHRpb24pLmxhYmVsO1xuICAgIGlmIChsYWJlbEZpZWxkKSByZXR1cm4gb3B0aW9uW2xhYmVsRmllbGRdO1xuICAgIHJldHVybiBvcHRpb247XG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIGlTOiBJbnB1dFNlcnZpY2UpIHt9XG59XG5AUGlwZSh7XG4gICAgbmFtZTogJ29wdGlvbnNGb3JtYXR0ZXInLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNGb3JtYXR0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIG9wdGlvbnM6IGFueVtdLFxuICAgIHZhbHVlRmllbGQ/OiBzdHJpbmcsXG4gICAgZm9ybWF0dGVyPyxcbiAgICBvcHRpb25UeXBlPzogT3B0aW9uTGFiZWxUeXBlLFxuICAgIGxhYmVsRmllbGQ/OiBzdHJpbmdcbiAgKTogSU9wdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5pUy5vcHRpb25zRm9ybWF0dGVyKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHZhbHVlRmllbGQsXG4gICAgICBmb3JtYXR0ZXIsXG4gICAgICBvcHRpb25UeXBlLFxuICAgICAgbGFiZWxGaWVsZFxuICAgICk7XG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIGlTOiBJbnB1dFNlcnZpY2UpIHt9XG59XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnaW5wdXRDbGFzcycsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENsYXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgaW5wQ2w6IHN0cmluZyxcbiAgICB2YWxpZD86IGJvb2xlYW4sXG4gICAgaW52YWxpZD86IGJvb2xlYW4sXG4gICAgc2hvd1ZhbGlkYXRpb24/OiBib29sZWFuXG4gICkge1xuICAgIGxldCBjbHMgPSBpbnBDbCArICcgICc7XG4gICAgaWYgKHNob3dWYWxpZGF0aW9uKSB7XG4gICAgICBjbHMgKz0gdmFsaWQgPyAnIGJvcmRlcmNoZWNrJyA6IGludmFsaWQgPyAnIGJvcmRlcnVuY2hlY2snIDogJyc7XG4gICAgfVxuICAgIHJldHVybiBjbHM7XG4gIH1cbn1cblxuY29uc3QgY29tcHMgPSBbXG4gIEZpbHRlck9wdGlvbnMsXG4gIFZhbGlkYXRvcixcbiAgVmFsaWRhdGlvbk1zZyxcbiAgT3B0aW9uZXJQaXBlLFxuICBPcHRpb25MYWJlbGxlcixcbiAgT3B0aW9uc0Zvcm1hdHRlcixcbiAgSW5wdXRDbGFzc1BpcGUsXG5dO1xuY29uc3QgbW9kdWxlcyA9IFtGb3Jtc01vZHVsZV07XG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLm1vZHVsZXMsIC4uLmNvbXBzXSxcbiAgICBleHBvcnRzOiBbLi4uY29tcHMsIC4uLm1vZHVsZXNdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFBpcGVzTW9kdWxlIHt9XG4iXX0=