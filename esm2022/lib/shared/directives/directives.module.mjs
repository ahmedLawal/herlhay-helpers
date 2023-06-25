import { NgModule } from '@angular/core';
import { ImageLoaderDirective } from './image-loader.directive';
import { DragDropFileUploadDirective } from './drag-drop-file-upload.directive';
import { desktopClassDirective, hideDesktopDirective, hideMobileDirective, mobileClassDirective, ResponsivenessDirective, } from './responsiveness.directive';
import { MrouterLinkirective } from './router.directive';
import * as i0 from "@angular/core";
const comp = [
    desktopClassDirective,
    DragDropFileUploadDirective,
    hideDesktopDirective,
    hideMobileDirective,
    ImageLoaderDirective,
    mobileClassDirective,
    MrouterLinkirective,
    ResponsivenessDirective,
];
export class DirectivesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: DirectivesModule, imports: [desktopClassDirective,
            DragDropFileUploadDirective,
            hideDesktopDirective,
            hideMobileDirective,
            ImageLoaderDirective,
            mobileClassDirective,
            MrouterLinkirective,
            ResponsivenessDirective], exports: [desktopClassDirective,
            DragDropFileUploadDirective,
            hideDesktopDirective,
            hideMobileDirective,
            ImageLoaderDirective,
            mobileClassDirective,
            MrouterLinkirective,
            ResponsivenessDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: DirectivesModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: comp,
                    exports: comp,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsdUJBQXVCLEdBQ3hCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXpELE1BQU0sSUFBSSxHQUFHO0lBQ1gscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUN4QixDQUFDO0FBS0YsTUFBTSxPQUFPLGdCQUFnQjs4R0FBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0IsWUFiM0IscUJBQXFCO1lBQ3JCLDJCQUEyQjtZQUMzQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLHVCQUF1QixhQVB2QixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsdUJBQXVCOytHQU1aLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFKNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsSUFBSTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUxvYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcmFnRHJvcEZpbGVVcGxvYWREaXJlY3RpdmUgfSBmcm9tICcuL2RyYWctZHJvcC1maWxlLXVwbG9hZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgZGVza3RvcENsYXNzRGlyZWN0aXZlLFxuICBoaWRlRGVza3RvcERpcmVjdGl2ZSxcbiAgaGlkZU1vYmlsZURpcmVjdGl2ZSxcbiAgbW9iaWxlQ2xhc3NEaXJlY3RpdmUsXG4gIFJlc3BvbnNpdmVuZXNzRGlyZWN0aXZlLFxufSBmcm9tICcuL3Jlc3BvbnNpdmVuZXNzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNcm91dGVyTGlua2lyZWN0aXZlIH0gZnJvbSAnLi9yb3V0ZXIuZGlyZWN0aXZlJztcblxuY29uc3QgY29tcCA9IFtcbiAgZGVza3RvcENsYXNzRGlyZWN0aXZlLFxuICBEcmFnRHJvcEZpbGVVcGxvYWREaXJlY3RpdmUsXG4gIGhpZGVEZXNrdG9wRGlyZWN0aXZlLFxuICBoaWRlTW9iaWxlRGlyZWN0aXZlLFxuICBJbWFnZUxvYWRlckRpcmVjdGl2ZSxcbiAgbW9iaWxlQ2xhc3NEaXJlY3RpdmUsXG4gIE1yb3V0ZXJMaW5raXJlY3RpdmUsXG4gIFJlc3BvbnNpdmVuZXNzRGlyZWN0aXZlLCBcbl07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBjb21wLFxuICBleHBvcnRzOiBjb21wLFxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmVzTW9kdWxlIHt9XG4iXX0=