import { Component, Input, } from '@angular/core';
import { ModalComponent } from '../modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/utility.service";
export class MiniModalComponent extends ModalComponent {
    constructor(uS) {
        super(uS);
        this.uS = uS;
        this.height = 'calc(100vh - 64px)';
        this.showFooter = true;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     *
     * @param parent This is the element requesting for the modal to be opened. It will be used to determine the position of the modal
     */
    open(parent) {
        console.log('parent', parent, parent.getBoundingClientRect());
        const parentPost = parent.getBoundingClientRect();
        super.modalConfigMap = (config) => {
            config.position = {
                top: parentPost.bottom + 'px',
                left: `calc(${parentPost.left + 'px'} - 19vw)`,
            };
            config.maxHeight = '100vh';
            config.height = 'auto';
            config.width = 'auto';
            config.panelClass = 'mini-modal';
            config.disableClose = false,
                config.backdropClass = 'transparent';
            return config;
        };
        super.open();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MiniModalComponent, deps: [{ token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: MiniModalComponent, isStandalone: true, selector: "mini-modal", inputs: { height: "height", showFooter: "showFooter" }, usesInheritance: true, ngImport: i0, template: "<ng-template #temp>\n    <div class=\"mini-modal-content\">\n        <ng-content></ng-content>\n    </div>\n</ng-template>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MiniModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mini-modal', standalone: true, template: "<ng-template #temp>\n    <div class=\"mini-modal-content\">\n        <ng-content></ng-content>\n    </div>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i1.UtilityService }]; }, propDecorators: { height: [{
                type: Input
            }], showFooter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9taW5pLW1vZGFsL21pbmktbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbWluaS1tb2RhbC9taW5pLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBUXBELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxjQUFjO0lBR3BELFlBQTRCLEVBQWtCO1FBQzVDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQURnQixPQUFFLEdBQUYsRUFBRSxDQUFnQjtRQUY1QixXQUFNLEdBQVcsb0JBQW9CLENBQUM7UUFDL0MsZUFBVSxHQUFZLElBQUksQ0FBQztJQUdwQyxDQUFDO0lBRVEsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ00sSUFBSSxDQUFDLE1BQW1CO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQzdELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xELEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDakQsTUFBTSxDQUFDLFFBQVEsR0FBRztnQkFDaEIsR0FBRyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSTtnQkFDN0IsSUFBSSxFQUFFLFFBQVEsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVU7YUFDL0MsQ0FBQztZQUNGLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxZQUFZLEdBQUMsS0FBSztnQkFDekIsTUFBTSxDQUFDLGFBQWEsR0FBQyxhQUFhLENBQUE7WUFDbEMsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBQ0YsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQzs4R0FoQ1Usa0JBQWtCO2tHQUFsQixrQkFBa0IscUpDaEIvQiw0SEFJYzs7MkZEWUQsa0JBQWtCO2tCQU45QixTQUFTOytCQUNJLFlBQVksY0FHVixJQUFJO3FHQUdBLE1BQU07c0JBQXZCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtaW5pLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWluaS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbWluaS1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE1pbmlNb2RhbENvbXBvbmVudCBleHRlbmRzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgb3ZlcnJpZGUgaGVpZ2h0OiBzdHJpbmcgPSAnY2FsYygxMDB2aCAtIDY0cHgpJztcbiAgQElucHV0KCkgc2hvd0Zvb3RlcjogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvdmVycmlkZSB1UzogVXRpbGl0eVNlcnZpY2UpIHtcbiAgICBzdXBlcih1Uyk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwYXJlbnQgVGhpcyBpcyB0aGUgZWxlbWVudCByZXF1ZXN0aW5nIGZvciB0aGUgbW9kYWwgdG8gYmUgb3BlbmVkLiBJdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiB0aGUgbW9kYWxcbiAgICovXG4gIG92ZXJyaWRlIG9wZW4ocGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKCdwYXJlbnQnLCBwYXJlbnQscGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICBjb25zdCBwYXJlbnRQb3N0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyBcbiAgICBzdXBlci5tb2RhbENvbmZpZ01hcCA9IChjb25maWc6IE1hdERpYWxvZ0NvbmZpZykgPT4geyBcbiAgICAgIGNvbmZpZy5wb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wOiBwYXJlbnRQb3N0LmJvdHRvbSArICdweCcsXG4gICAgICAgIGxlZnQ6IGBjYWxjKCR7cGFyZW50UG9zdC5sZWZ0ICsgJ3B4J30gLSAxOXZ3KWAsXG4gICAgICB9O1xuICAgICAgY29uZmlnLm1heEhlaWdodCA9ICcxMDB2aCc7XG4gICAgICBjb25maWcuaGVpZ2h0ICA9ICdhdXRvJztcbiAgICAgIGNvbmZpZy53aWR0aCA9ICdhdXRvJztcbiAgICAgIGNvbmZpZy5wYW5lbENsYXNzID0gJ21pbmktbW9kYWwnO1xuICAgICAgY29uZmlnLmRpc2FibGVDbG9zZT1mYWxzZSxcbiAgICAgIGNvbmZpZy5iYWNrZHJvcENsYXNzPSd0cmFuc3BhcmVudCdcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjdGVtcD5cbiAgICA8ZGl2IGNsYXNzPVwibWluaS1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+Il19