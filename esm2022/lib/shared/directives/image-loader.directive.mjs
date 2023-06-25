import { Directive, Input } from '@angular/core';
import { Config } from '../../config/index.config';
import * as i0 from "@angular/core";
export class ImageLoaderDirective {
    /**
     * Path to image. It should be set last.
     * Minified images' names should end with .min
     * @exmaple logo.min.png, house.min.svg
     */
    set imageLoader(v) {
        this.src = v;
        this.setImage();
    }
    constructor(elRef) {
        this.elRef = elRef;
        /**
         * States whether the image src should be used as the background image of the element or the src of an image element.
         * Default is 'img'
         */
        this.imgType = 'img';
    }
    ngAfterViewInit() {
        this.el = this.elRef.nativeElement;
        this.setImage();
    }
    setImage(src = this.src, imgType = this.imgType) {
        // debugger
        if (!this.el)
            return;
        const minSRC = getMinPath(src);
        if (imgType == 'bg') {
            const el = this.el;
            el.style.backgroundImage = `url(${src})`;
            if (minSRC)
                loadImage(minSRC).then((r) => (el.style.backgroundImage =
                    el.style.backgroundImage ||
                        `url(${r || Config.placeholderImage})`));
            loadImage(src).then((r) => r ? (el.style.backgroundImage = `url(${r})`) : null);
        }
        else {
            const el = this.el;
            if (!src) {
                el.src = Config.placeholderImage;
                return;
            }
            loadImage(src).then((img) => (img ? (el.src = img) : null));
            if (minSRC)
                el.src = el.src || minSRC;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ImageLoaderDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: ImageLoaderDirective, isStandalone: true, selector: "[imageLoader]", inputs: { imageLoader: "imageLoader", imgType: "imgType" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ImageLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[imageLoader]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { imageLoader: [{
                type: Input
            }], imgType: [{
                type: Input
            }] } });
const imgTypes = [
    '.png',
    '.jpeg',
    '.jpg',
    '.png',
    '.gif',
    '.tiff',
    '.psd',
    '.pdf',
    '.eps',
    '.ai',
    '.indd',
    '.raw',
];
function getMinPath(src) {
    for (const imgType of imgTypes) {
        const ind = src?.toLowerCase().indexOf(imgType);
        if (ind > -1) {
            return src.slice(0, ind) + '.min' + src.slice(ind);
        }
    }
    return undefined;
}
function loadImage(src) {
    return new Promise((res) => {
        try {
            const img = document.createElement('img');
            img.src = src;
            // debugger;
            img.onload = (e) => {
                res(src);
            };
        }
        catch (error) {
            res(undefined);
            console.error(error);
        }
    });
}
/**Image type enum obj */
const imgTypeEnum = {
    bg: true,
    img: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbG9hZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9kaXJlY3RpdmVzL2ltYWdlLWxvYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQU1uRCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9COzs7O09BSUc7SUFDSCxJQUFhLFdBQVcsQ0FBQyxDQUFTO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFPRCxZQUFtQixLQUFpRDtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUE0QztRQU5wRTs7O1dBR0c7UUFDTSxZQUFPLEdBQWEsS0FBSyxDQUFDO0lBRW9DLENBQUM7SUFFeEUsZUFBZTtRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBYyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztRQUNyRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztRQUNyQixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ25CLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFpQixDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDekMsSUFBSSxNQUFNO2dCQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDSixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZTtvQkFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlO3dCQUN4QixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUM1QyxDQUFDO1lBQ0osU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDcEQsQ0FBQztTQUNIO2FBQU07WUFDTCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBc0IsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNSLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUNqQyxPQUFPO2FBQ1I7WUFDRCxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksTUFBTTtnQkFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUUsTUFBTSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs4R0F0RFUsb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtpR0FZYyxXQUFXO3NCQUF2QixLQUFLO2dCQVFHLE9BQU87c0JBQWYsS0FBSzs7QUFzQ1IsTUFBTSxRQUFRLEdBQUc7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixLQUFLO0lBQ0wsT0FBTztJQUNQLE1BQU07Q0FDUCxDQUFDO0FBRUYsU0FBUyxVQUFVLENBQUMsR0FBVztJQUM3QixLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtRQUM5QixNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1osT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRDtLQUNGO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQUNELFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDNUIsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2QsWUFBWTtZQUNaLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCx5QkFBeUI7QUFDekIsTUFBTSxXQUFXLEdBQUc7SUFDbEIsRUFBRSxFQUFFLElBQUk7SUFDUixHQUFHLEVBQUUsSUFBSTtDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7IFxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4LmNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbWFnZUxvYWRlcl0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlckRpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBQYXRoIHRvIGltYWdlLlxuICAgKi9cbiAgc3JjOiBzdHJpbmc7XG4gIGVsOiBIVE1MRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIC8qKlxuICAgKiBQYXRoIHRvIGltYWdlLiBJdCBzaG91bGQgYmUgc2V0IGxhc3QuXG4gICAqIE1pbmlmaWVkIGltYWdlcycgbmFtZXMgc2hvdWxkIGVuZCB3aXRoIC5taW5cbiAgICogQGV4bWFwbGUgbG9nby5taW4ucG5nLCBob3VzZS5taW4uc3ZnXG4gICAqL1xuICBASW5wdXQoKSBzZXQgaW1hZ2VMb2FkZXIodjogc3RyaW5nKSB7XG4gICAgdGhpcy5zcmMgPSB2O1xuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuICAvKipcbiAgICogU3RhdGVzIHdoZXRoZXIgdGhlIGltYWdlIHNyYyBzaG91bGQgYmUgdXNlZCBhcyB0aGUgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgZWxlbWVudCBvciB0aGUgc3JjIG9mIGFuIGltYWdlIGVsZW1lbnQuXG4gICAqIERlZmF1bHQgaXMgJ2ltZydcbiAgICovXG4gIEBJbnB1dCgpIGltZ1R5cGU6IEVJbWdUeXBlID0gJ2ltZyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudD4pIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgc2V0SW1hZ2Uoc3JjOiBzdHJpbmcgPSB0aGlzLnNyYywgaW1nVHlwZSA9IHRoaXMuaW1nVHlwZSkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgaWYgKCF0aGlzLmVsKSByZXR1cm47XG4gICAgY29uc3QgbWluU1JDID0gZ2V0TWluUGF0aChzcmMpO1xuICAgIGlmIChpbWdUeXBlID09ICdiZycpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzcmN9KWA7XG4gICAgICBpZiAobWluU1JDKVxuICAgICAgICBsb2FkSW1hZ2UobWluU1JDKS50aGVuKFxuICAgICAgICAgIChyKSA9PlxuICAgICAgICAgICAgKGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSB8fFxuICAgICAgICAgICAgICBgdXJsKCR7ciB8fCBDb25maWcucGxhY2Vob2xkZXJJbWFnZX0pYClcbiAgICAgICAgKTtcbiAgICAgIGxvYWRJbWFnZShzcmMpLnRoZW4oKHIpID0+XG4gICAgICAgIHIgPyAoZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3J9KWApIDogbnVsbFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICBpZiAoIXNyYykge1xuICAgICAgICBlbC5zcmMgPSBDb25maWcucGxhY2Vob2xkZXJJbWFnZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbG9hZEltYWdlKHNyYykudGhlbigoaW1nKSA9PiAoaW1nID8gKGVsLnNyYyA9IGltZykgOiBudWxsKSk7XG4gICAgICBpZiAobWluU1JDKSBlbC5zcmMgPSBlbC5zcmN8fG1pblNSQztcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaW1nVHlwZXMgPSBbXG4gICcucG5nJyxcbiAgJy5qcGVnJyxcbiAgJy5qcGcnLFxuICAnLnBuZycsXG4gICcuZ2lmJyxcbiAgJy50aWZmJyxcbiAgJy5wc2QnLFxuICAnLnBkZicsXG4gICcuZXBzJyxcbiAgJy5haScsXG4gICcuaW5kZCcsXG4gICcucmF3Jyxcbl07XG5cbmZ1bmN0aW9uIGdldE1pblBhdGgoc3JjOiBzdHJpbmcpIHtcbiAgZm9yIChjb25zdCBpbWdUeXBlIG9mIGltZ1R5cGVzKSB7XG4gICAgY29uc3QgaW5kID0gc3JjPy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW1nVHlwZSk7XG4gICAgaWYgKGluZCA+IC0xKSB7XG4gICAgICByZXR1cm4gc3JjLnNsaWNlKDAsIGluZCkgKyAnLm1pbicgKyBzcmMuc2xpY2UoaW5kKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGxvYWRJbWFnZShzcmM6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgaW1nLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIHJlcyhzcmMpO1xuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzKHVuZGVmaW5lZCk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipJbWFnZSB0eXBlIGVudW0gb2JqICovXG5jb25zdCBpbWdUeXBlRW51bSA9IHtcbiAgYmc6IHRydWUsXG4gIGltZzogdHJ1ZSxcbn07XG4vKipcbiAqIEltYWdlIHR5cGUgZW51bVxuICovXG50eXBlIEVJbWdUeXBlID0ga2V5b2YgdHlwZW9mIGltZ1R5cGVFbnVtO1xuIl19