import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export class AutocompleteService {
    constructor() { }
    filterOptions(query, options) {
        return new Observable((sub) => {
            const filterValue = this.normalizeValue(query);
            sub.next(filterValue
                ? options?.filter((option) => this.normalizeValue(option.label)?.includes(filterValue))
                : options);
        });
    }
    normalizeValue(value) {
        return value?.toString()?.toLowerCase().replace(/\s/g, '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU1sQyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLGdCQUFlLENBQUM7SUFDaEIsYUFBYSxDQUFDLEtBQWEsRUFBRSxPQUFrQjtRQUM3QyxPQUFPLElBQUksVUFBVSxDQUFZLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsSUFBSSxDQUNOLFdBQVc7Z0JBQ1QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQ3pEO2dCQUNILENBQUMsQ0FBQyxPQUFPLENBQ1osQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs4R0FqQlUsbUJBQW1CO2tIQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElPcHRpb24gfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgZmlsdGVyT3B0aW9ucyhxdWVyeTogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9uW10pIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8SU9wdGlvbltdPigoc3ViKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUocXVlcnkpO1xuICAgICAgc3ViLm5leHQoXG4gICAgICAgIGZpbHRlclZhbHVlXG4gICAgICAgICAgPyBvcHRpb25zPy5maWx0ZXIoKG9wdGlvbikgPT5cbiAgICAgICAgICAgICAgdGhpcy5ub3JtYWxpemVWYWx1ZShvcHRpb24ubGFiZWwpPy5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG9wdGlvbnNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBub3JtYWxpemVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWU/LnRvU3RyaW5nKCk/LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgfVxufVxuIl19