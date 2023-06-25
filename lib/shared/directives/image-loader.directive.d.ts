import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ImageLoaderDirective {
    elRef: ElementRef<HTMLElement | HTMLImageElement>;
    /**
     * Path to image.
     */
    src: string;
    el: HTMLElement | HTMLImageElement;
    /**
     * Path to image. It should be set last.
     * Minified images' names should end with .min
     * @exmaple logo.min.png, house.min.svg
     */
    set imageLoader(v: string);
    /**
     * States whether the image src should be used as the background image of the element or the src of an image element.
     * Default is 'img'
     */
    imgType: EImgType;
    constructor(elRef: ElementRef<HTMLElement | HTMLImageElement>);
    ngAfterViewInit(): void;
    setImage(src?: string, imgType?: "img" | "bg"): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageLoaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImageLoaderDirective, "[imageLoader]", never, { "imageLoader": { "alias": "imageLoader"; "required": false; }; "imgType": { "alias": "imgType"; "required": false; }; }, {}, never, never, true, never>;
}
/**Image type enum obj */
declare const imgTypeEnum: {
    bg: boolean;
    img: boolean;
};
/**
 * Image type enum
 */
type EImgType = keyof typeof imgTypeEnum;
export {};
