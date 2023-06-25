import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'no-access',
        loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
        data: {
            config: {
                status: '401',
                message: 'You do not have access to this page.',
            },
        },
    },
    {
        path: 'reset',
        data: { title: 'Reset' },
        loadChildren: () => import('./reset/reset.module').then((m) => m.ResetModule),
    },
    {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
    },
];
export class ExtraPagesRoutingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmEtcGFnZXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9leHRyYS1wYWdlcy9leHRyYS1wYWdlcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXZELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUNqQixNQUFNLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxJQUFJLENBQ25ELENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQzVCO1FBQ0gsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxzQ0FBc0M7YUFDaEQ7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDeEIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUNqQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDNUQ7SUFDRDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUNqQixNQUFNLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxJQUFJLENBQ25ELENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQzVCO0tBQ0o7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLHVCQUF1Qjs4R0FBdkIsdUJBQXVCOytHQUF2Qix1QkFBdUIsd0NBRnhCLFlBQVk7K0dBRVgsdUJBQXVCLFlBSHhCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQzdCLFlBQVk7OzJGQUVYLHVCQUF1QjtrQkFKbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnbm8tYWNjZXNzJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XG4gICAgICBpbXBvcnQoJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQubW9kdWxlJykudGhlbihcbiAgICAgICAgKG0pID0+IG0uUGFnZU5vdEZvdW5kTW9kdWxlXG4gICAgICApLFxuICAgIGRhdGE6IHsgXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgc3RhdHVzOiAnNDAxJyxcbiAgICAgICAgbWVzc2FnZTogJ1lvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlLicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncmVzZXQnLFxuICAgIGRhdGE6IHsgdGl0bGU6ICdSZXNldCcgfSxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XG4gICAgICBpbXBvcnQoJy4vcmVzZXQvcmVzZXQubW9kdWxlJykudGhlbigobSkgPT4gbS5SZXNldE1vZHVsZSksXG4gIH0sIFxuICB7XG4gICAgcGF0aDogJyoqJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XG4gICAgICBpbXBvcnQoJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQubW9kdWxlJykudGhlbihcbiAgICAgICAgKG0pID0+IG0uUGFnZU5vdEZvdW5kTW9kdWxlXG4gICAgICApLFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEV4dHJhUGFnZXNSb3V0aW5nTW9kdWxlIHt9XG4iXX0=