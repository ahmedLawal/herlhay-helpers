import { ErrorHandler, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GlobalErrorHandlerService extends ErrorHandler {
    constructor() {
        super();
    }
    handleError(error) {
        // debugger
        if (/Loading chunk [\d]+ failed/.test(error?.message))
            window.location.reload();
        if (/NG0100: ExpressionChangedAfterItHasBeenCheckedError/.test(error?.message))
            return;
        else
            super.handleError(error);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GlobalErrorHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GlobalErrorHandlerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GlobalErrorHandlerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NlcnZpY2VzL2dsb2JhbC1lcnJvci1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3pELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxZQUFZO0lBQ3pEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRVEsV0FBVyxDQUFDLEtBQVU7UUFDN0IsV0FBVztRQUNYLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLHFEQUFxRCxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzVFLE9BQU87O1lBQ0osS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzhHQVpVLHlCQUF5QjtrSEFBekIseUJBQXlCLGNBRnhCLE1BQU07OzJGQUVQLHlCQUF5QjtrQkFIckMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEVycm9ySGFuZGxlclNlcnZpY2UgZXh0ZW5kcyBFcnJvckhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb3ZlcnJpZGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgaWYgKC9Mb2FkaW5nIGNodW5rIFtcXGRdKyBmYWlsZWQvLnRlc3QoZXJyb3I/Lm1lc3NhZ2UpKVxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIGlmICgvTkcwMTAwOiBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yLy50ZXN0KGVycm9yPy5tZXNzYWdlKSlcbiAgICAgIHJldHVybjtcbiAgICBlbHNlIHN1cGVyLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgfVxufVxuIl19