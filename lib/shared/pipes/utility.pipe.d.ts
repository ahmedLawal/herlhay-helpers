import { DatePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EPageType } from '../models/index.model';
import { UtilityService } from '../../services/utility.service';
import { NumberToWordsService } from '../../services/number-to-words.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class NumberToWordsPipe implements PipeTransform {
    ntw: NumberToWordsService;
    transform(value: any, suffix: string): string;
    constructor(ntw: NumberToWordsService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberToWordsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NumberToWordsPipe, "numberToWords", true>;
}
export declare class ArraySplitter implements PipeTransform {
    transform<T>(arr: T[], arrLength: number, startIndex: number, endIndex?: number): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ArraySplitter, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ArraySplitter, "arraySplitter", true>;
}
export declare class GenderPipe implements PipeTransform {
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GenderPipe, "gender", true>;
}
export declare class RoundPipe implements PipeTransform {
    /**
     * Use the Math.round function
     */
    transform(value: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoundPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<RoundPipe, "round", true>;
}
export declare class SecondsToTimePipe implements PipeTransform {
    uS: UtilityService;
    transform(value: number): string;
    constructor(uS: UtilityService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SecondsToTimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SecondsToTimePipe, "secondsToTime", true>;
}
export declare class GetValueLabel implements PipeTransform {
    /**
     * Converts a string into a Select option
     * @param value The value to search for in the options list
     * @param options The list of items to search in
     * @param labelField The field that holds the description field
     * @param valueField The field that holds the value field
     * @returns A concatenation of the value and description (value - description)
     */
    transform(value: string, options: any[], labelField?: string, valueField?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetValueLabel, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GetValueLabel, "getValueLabel", true>;
}
export declare class ValueFormatterPipe implements PipeTransform {
    transform(val: any, formatter: any): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueFormatterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ValueFormatterPipe, "valueFormatter", true>;
}
export declare class FunctionCaller implements PipeTransform {
    /**
     * Calls a function in the template
     * @param func Function to be called
     * @param args
     * @returns
     */
    transform<T, P>(func: (...args: P[]) => T, ...args: P[]): T;
    static ɵfac: i0.ɵɵFactoryDeclaration<FunctionCaller, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FunctionCaller, "functionCaller", true>;
}
export declare class FunctionCaller1 extends FunctionCaller {
    transform<T, P1>(func: (param: P1) => T, param: P1): T;
    static ɵfac: i0.ɵɵFactoryDeclaration<FunctionCaller1, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FunctionCaller1, "functionCaller1", true>;
}
export declare class FunctionCaller2 extends FunctionCaller {
    transform<T, P1, P2>(func: (param1: P1, param2: P2) => T, param1: P1, param2: P2): T;
    static ɵfac: i0.ɵɵFactoryDeclaration<FunctionCaller2, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FunctionCaller2, "functionCaller2", true>;
}
export declare class FunctionCaller3 implements PipeTransform {
    transform<T, P1, P2, P3>(func: (param1: P1, param2: P2, param3: P3) => T, param1: P1, param2: P2, param3: P3): T;
    static ɵfac: i0.ɵɵFactoryDeclaration<FunctionCaller3, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FunctionCaller3, "functionCaller3", true>;
}
export declare class HttpListCaller implements PipeTransform {
    transform<T>(httpObservable: () => Observable<T>): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpListCaller, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HttpListCaller, "httpListCaller", true>;
}
export declare class HttpListCaller1 implements PipeTransform {
    transform<T>(httpObservable: (param: any) => Observable<T>, param: any): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpListCaller1, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HttpListCaller1, "httpListCaller1", true>;
}
export declare class HttpListCaller2 implements PipeTransform {
    transform<T>(httpObservable: (param1: string, param2: string) => Observable<T>, param1: string, param2: string): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpListCaller2, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HttpListCaller2, "httpListCaller2", true>;
}
export declare class IsShowPage implements PipeTransform {
    transform(type: EPageType): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsShowPage, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsShowPage, "isShowPage", true>;
}
export declare class IsClonePage implements PipeTransform {
    transform(type: EPageType): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsClonePage, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsClonePage, "isClonePage", true>;
}
export declare class FilterArrayPipe implements PipeTransform {
    transform<T>(arr: T[], value: any, key: keyof T, filterFunction?: (value: T, index?: number, array?: T[]) => boolean): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterArrayPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterArrayPipe, "filterArray", true>;
}
export declare class FilterArrayByStringPipe implements PipeTransform {
    /**
     * Filter array using a pipe
     * @param arr Array to filter
     * @param value Value to filter for
     * @param keys Fields to check for match in
     * @param filterFunction Fitler function to use instead of value and keys
     * @returns
     */
    transform<T>(arr: T[], value: string, keys: (keyof T)[], filterFunction?: (value: T, index?: number, array?: T[]) => boolean): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterArrayByStringPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterArrayByStringPipe, "filterArrayByString", true>;
}
export declare class FilterFormArrayPipe implements PipeTransform {
    transform(arr: AbstractControl[], value: any, key?: string): AbstractControl<any, any>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterFormArrayPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterFormArrayPipe, "filterFormArray", true>;
}
export declare class SortPipe implements PipeTransform {
    transform<T>(arr: T[], direction?: 0 | 1, sortField?: keyof T): T[];
    sort<T>(arr: T[], direction: 0 | 1, sortField?: keyof T): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SortPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SortPipe, "sort", true>;
}
export declare class ToAnyPipe implements PipeTransform {
    transform(value: any, isArray?: boolean): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToAnyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ToAnyPipe, "toAny", true>;
}
export declare class ToAnyArrayPipe implements PipeTransform {
    transform(value: any): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ToAnyArrayPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ToAnyArrayPipe, "toAnyArray", true>;
}
export declare class TrimTextPipe implements PipeTransform {
    /**
     * Trims a string based on a specified length
     * @param value String to trim
     * @param length Length to begin trimming
     * @returns Trimmed string
     */
    transform(value: string, length: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrimTextPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TrimTextPipe, "trimText", true>;
}
export declare class XOrYPipe implements PipeTransform {
    private uS;
    transform(x: string, y?: string): string;
    constructor(uS: UtilityService);
    static ɵfac: i0.ɵɵFactoryDeclaration<XOrYPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<XOrYPipe, "xOrY", true>;
}
export declare class ReplaceAllPipe implements PipeTransform {
    transform(text: string, search: string, replacement: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplaceAllPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ReplaceAllPipe, "replaceAll", true>;
}
export declare class ValueOrXPipe implements PipeTransform {
    /**
     *
     * @param value Variable that holds the value to be checked for emptiness
     * @param replacement This is the value that will be set if the subject field is empty
     * @returns Return the value or the replacement value if value is empty
     */
    transform<T>(value: T, replacement?: string): string | T;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueOrXPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ValueOrXPipe, "valueOrX", true>;
}
export declare class StrConcatenatorPipe implements PipeTransform {
    transform<T>(text1: string, text2: string, joiner?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StrConcatenatorPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<StrConcatenatorPipe, "strConcatenator", true>;
}
export declare class CustomDatePipe implements PipeTransform {
    datePipe: DatePipe;
    transform(date: string, showTime?: boolean): string;
    transform2(date: string, formatStr: string): string;
    constructor(datePipe: DatePipe);
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CustomDatePipe, "customDate", true>;
}
export declare class UtilityPipesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UtilityPipesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UtilityPipesModule, never, [typeof i1.CommonModule, typeof ArraySplitter, typeof CustomDatePipe, typeof FilterArrayByStringPipe, typeof FilterArrayPipe, typeof FilterFormArrayPipe, typeof FunctionCaller, typeof FunctionCaller1, typeof FunctionCaller2, typeof FunctionCaller3, typeof GenderPipe, typeof GetValueLabel, typeof HttpListCaller, typeof HttpListCaller1, typeof HttpListCaller2, typeof IsClonePage, typeof IsShowPage, typeof NumberToWordsPipe, typeof ReplaceAllPipe, typeof RoundPipe, typeof SecondsToTimePipe, typeof SortPipe, typeof StrConcatenatorPipe, typeof ToAnyArrayPipe, typeof ToAnyPipe, typeof TrimTextPipe, typeof ValueFormatterPipe, typeof ValueOrXPipe, typeof XOrYPipe], [typeof ArraySplitter, typeof CustomDatePipe, typeof FilterArrayByStringPipe, typeof FilterArrayPipe, typeof FilterFormArrayPipe, typeof FunctionCaller, typeof FunctionCaller1, typeof FunctionCaller2, typeof FunctionCaller3, typeof GenderPipe, typeof GetValueLabel, typeof HttpListCaller, typeof HttpListCaller1, typeof HttpListCaller2, typeof IsClonePage, typeof IsShowPage, typeof NumberToWordsPipe, typeof ReplaceAllPipe, typeof RoundPipe, typeof SecondsToTimePipe, typeof SortPipe, typeof StrConcatenatorPipe, typeof ToAnyArrayPipe, typeof ToAnyPipe, typeof TrimTextPipe, typeof ValueFormatterPipe, typeof ValueOrXPipe, typeof XOrYPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UtilityPipesModule>;
}
