import * as i0 from "@angular/core";
export declare class NumberToWordsService {
    num: (x: any) => number;
    isEmpty: (xs: any) => boolean;
    not: (x: any) => boolean;
    chunk: (n: any) => (xs: any) => any[];
    comp: (f: any) => (g: any) => (x: any) => any;
    reverse: (xs: any) => any;
    arr: (x: any) => unknown[];
    constructor();
    transform(value: any): string;
    isInteger: (x: any) => boolean;
    numToWords: (n: any) => any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberToWordsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NumberToWordsService>;
}
