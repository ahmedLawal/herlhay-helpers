import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class GetColFormattedPipe {
    transform(row, col) {
        return Promise.resolve((col.formatterRow
            ? col.formatterRow(row)
            : col.formatter
                ? col.formatter(row[col.f])
                : row[col.f]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetColFormattedPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GetColFormattedPipe, isStandalone: true, name: "getColFormatted" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetColFormattedPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getColFormatted',
                    standalone: true,
                }]
        }] });
export class GetRawFieldsPipe {
    transform(arr, showOptions = false, useSelection = false, placeSelectionAtRight = false) {
        const fields = arr.map((r) => r.f);
        showOptions ? fields.push('option') : null;
        const fieldsWithSelect = placeSelectionAtRight
            ? [...fields, useSelection ? 'mselect' : null]
            : [useSelection ? 'mselect' : null, ...fields];
        return fieldsWithSelect.filter((x) => x);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetRawFieldsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GetRawFieldsPipe, isStandalone: true, name: "getRawFields" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetRawFieldsPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getRawFields',
                    standalone: true,
                }]
        }] });
export class GetHeadersPipe {
    transform(arr) {
        return arr.map((r) => r.t);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetHeadersPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GetHeadersPipe, isStandalone: true, name: "getHeaders" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetHeadersPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getHeaders',
                    standalone: true,
                }]
        }] });
export class TableToStringPipe {
    async transform(arr, obj) {
        let str = '';
        for (const col of arr) {
            let transText = await this.cfS.transform(obj, col);
            str += `${col.t}:  ${transText}\n`;
        }
        return str;
    }
    constructor(cfS) {
        this.cfS = cfS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TableToStringPipe, deps: [{ token: GetColFormattedPipe }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: TableToStringPipe, isStandalone: true, name: "tableToString" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TableToStringPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'tableToString',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: GetColFormattedPipe }]; } });
const pipes = [
    GetColFormattedPipe,
    GetHeadersPipe,
    GetRawFieldsPipe,
    TableToStringPipe,
];
export class TablePipesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, imports: [CommonModule, GetColFormattedPipe, GetHeadersPipe, GetRawFieldsPipe, TableToStringPipe], exports: [GetColFormattedPipe, GetHeadersPipe, GetRawFieldsPipe, TableToStringPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, providers: [GetColFormattedPipe], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: pipes,
                    imports: [CommonModule, ...pipes],
                    providers: [GetColFormattedPipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlLXBsYWluL3RhYmxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsU0FBUyxDQUFDLEdBQVEsRUFBRSxHQUFhO1FBQy9CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FDcEIsQ0FBQyxHQUFHLENBQUMsWUFBWTtZQUNmLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVM7Z0JBQ2YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7OEdBVFUsbUJBQW1COzRHQUFuQixtQkFBbUI7OzJGQUFuQixtQkFBbUI7a0JBSi9CLElBQUk7bUJBQUM7b0JBQ0YsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsVUFBVSxFQUFFLElBQUk7aUJBQ25COztBQWlCRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFNBQVMsQ0FDUCxHQUFlLEVBQ2YsY0FBc0IsS0FBSyxFQUMzQixZQUFZLEdBQUcsS0FBSyxFQUNwQixxQkFBcUIsR0FBRyxLQUFLO1FBRTdCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLGdCQUFnQixHQUFHLHFCQUFxQjtZQUM1QyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNqRCxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFhLENBQUM7SUFDdkQsQ0FBQzs4R0FiVSxnQkFBZ0I7NEdBQWhCLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFKNUIsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUsY0FBYztvQkFDcEIsVUFBVSxFQUFFLElBQUk7aUJBQ25COztBQXFCRCxNQUFNLE9BQU8sY0FBYztJQUN6QixTQUFTLENBQUMsR0FBZTtRQUN2QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzhHQUhVLGNBQWM7NEdBQWQsY0FBYzs7MkZBQWQsY0FBYztrQkFKMUIsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsVUFBVSxFQUFFLElBQUk7aUJBQ25COztBQVdELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFlLEVBQUUsR0FBUTtRQUN2QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRztZQUN2QixJQUFJLFNBQVMsR0FBSSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNqRCxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLFNBQVMsSUFBSSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsWUFBbUIsR0FBd0I7UUFBeEIsUUFBRyxHQUFILEdBQUcsQ0FBcUI7SUFBRyxDQUFDOzhHQVRwQyxpQkFBaUI7NEdBQWpCLGlCQUFpQjs7MkZBQWpCLGlCQUFpQjtrQkFKN0IsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUsZUFBZTtvQkFDckIsVUFBVSxFQUFFLElBQUk7aUJBQ25COztBQWFELE1BQU0sS0FBSyxHQUFHO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ2xCLENBQUM7QUFNRixNQUFNLE9BQU8sZ0JBQWdCOzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixZQUhmLFlBQVksRUFsRWIsbUJBQW1CLEVBb0NuQixjQUFjLEVBcEJkLGdCQUFnQixFQThCaEIsaUJBQWlCLGFBOUNqQixtQkFBbUIsRUFvQ25CLGNBQWMsRUFwQmQsZ0JBQWdCLEVBOEJoQixpQkFBaUI7K0dBdUJqQixnQkFBZ0IsYUFGZCxDQUFDLG1CQUFtQixDQUFDLFlBRHRCLFlBQVk7OzJGQUdiLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxLQUFLLENBQUM7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyBcbmltcG9ydCB7IFRhYmxlQ29sIH0gZnJvbSAnLi90YWJsZS5tb2RlbCc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZ2V0Q29sRm9ybWF0dGVkJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBHZXRDb2xGb3JtYXR0ZWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShyb3c6IGFueSwgY29sOiBUYWJsZUNvbCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAoY29sLmZvcm1hdHRlclJvd1xuICAgICAgICA/IGNvbC5mb3JtYXR0ZXJSb3cocm93KVxuICAgICAgICA6IGNvbC5mb3JtYXR0ZXJcbiAgICAgICAgPyBjb2wuZm9ybWF0dGVyKHJvd1tjb2wuZl0pXG4gICAgICAgIDogcm93W2NvbC5mXSkgIFxuICAgICk7XG4gIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6ICdnZXRSYXdGaWVsZHMnLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEdldFJhd0ZpZWxkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIGFycjogVGFibGVDb2xbXSxcbiAgICBzaG93T3B0aW9uczpib29sZWFuID0gZmFsc2UsXG4gICAgdXNlU2VsZWN0aW9uID0gZmFsc2UsXG4gICAgcGxhY2VTZWxlY3Rpb25BdFJpZ2h0ID0gZmFsc2UsIC8vIHRoZSBwYXJhbWV0ZXIgaXMgdG8gc3VwcG9ydCBzZXR0aW5nIHRoZSBzZWxlY3Rpb24gY2hlY2tib3hlcyBhcyB0aGUgbGFzdCBpdGVtIGluc3RlYWQgb2YgdGhlIGZpcnN0XG4gICk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWVsZHMgPSBhcnIubWFwKChyKSA9PiByLmYpO1xuICAgIHNob3dPcHRpb25zID8gZmllbGRzLnB1c2goJ29wdGlvbicpIDogbnVsbDtcbiAgICBjb25zdCBmaWVsZHNXaXRoU2VsZWN0ID0gcGxhY2VTZWxlY3Rpb25BdFJpZ2h0XG4gICAgICA/IFsuLi5maWVsZHMsIHVzZVNlbGVjdGlvbiA/ICdtc2VsZWN0JyA6IG51bGxdXG4gICAgICA6IFt1c2VTZWxlY3Rpb24gPyAnbXNlbGVjdCcgOiBudWxsLCAuLi5maWVsZHNdO1xuICAgIHJldHVybiBmaWVsZHNXaXRoU2VsZWN0LmZpbHRlcigoeCkgPT4geCkgYXMgc3RyaW5nW107XG4gIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6ICdnZXRIZWFkZXJzJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBHZXRIZWFkZXJzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oYXJyOiBUYWJsZUNvbFtdKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBhcnIubWFwKChyKSA9PiByLnQpO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndGFibGVUb1N0cmluZycsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVUb1N0cmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgYXN5bmMgdHJhbnNmb3JtKGFycjogVGFibGVDb2xbXSwgb2JqOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiBhcnIpICB7XG4gICAgIGxldCB0cmFuc1RleHQgPSAgYXdhaXQgdGhpcy5jZlMudHJhbnNmb3JtKG9iaixjb2wpXG4gICAgICBzdHIgKz0gYCR7Y29sLnR9OiAgJHt0cmFuc1RleHR9XFxuYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2ZTOiBHZXRDb2xGb3JtYXR0ZWRQaXBlKSB7fVxufVxuXG5jb25zdCBwaXBlcyA9IFtcbiAgR2V0Q29sRm9ybWF0dGVkUGlwZSxcbiAgR2V0SGVhZGVyc1BpcGUsXG4gIEdldFJhd0ZpZWxkc1BpcGUsXG4gIFRhYmxlVG9TdHJpbmdQaXBlLFxuXTtcbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogcGlwZXMsXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgLi4ucGlwZXNdLFxuICAgIHByb3ZpZGVyczogW0dldENvbEZvcm1hdHRlZFBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVBpcGVzTW9kdWxlIHt9XG4iXX0=