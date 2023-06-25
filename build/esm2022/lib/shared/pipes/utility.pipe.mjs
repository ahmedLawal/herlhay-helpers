import { CommonModule, DatePipe } from '@angular/common';
import { NgModule, Pipe } from '@angular/core';
import { EPageType } from '../models/index.model';
import { HHFunctions } from '../functions/base-functions';
import * as i0 from "@angular/core";
import * as i1 from "../../services/number-to-words.service";
import * as i2 from "../../services/utility.service";
import * as i3 from "@angular/common";
export class NumberToWordsPipe {
    transform(value, suffix) {
        if (value && this.ntw.isInteger(value))
            return this.ntw.numToWords(value) + suffix;
        return value;
    }
    constructor(ntw) {
        this.ntw = ntw;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsPipe, deps: [{ token: i1.NumberToWordsService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsPipe, isStandalone: true, name: "numberToWords" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'numberToWords',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.NumberToWordsService }]; } });
export class ArraySplitter {
    transform(arr, arrLength, startIndex, endIndex) {
        return arr ? arr.slice(startIndex, endIndex ? endIndex + 1 : undefined) : [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ArraySplitter, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ArraySplitter, isStandalone: true, name: "arraySplitter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ArraySplitter, decorators: [{
            type: Pipe,
            args: [{
                    name: 'arraySplitter',
                    standalone: true,
                }]
        }] });
export class GenderPipe {
    transform(value) {
        return value == 'M' ? 'Male' : value == 'F' ? 'Female' : value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GenderPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GenderPipe, isStandalone: true, name: "gender" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GenderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'gender',
                    standalone: true,
                }]
        }] });
export class RoundPipe {
    /**
     * Use the Math.round function
     */
    transform(value) {
        return Math.round(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RoundPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: RoundPipe, isStandalone: true, name: "round" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RoundPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'round',
                    standalone: true,
                }]
        }] });
export class SecondsToTimePipe {
    transform(value) {
        const timeLeft = this.uS.secondsToHourMinSec(value);
        return `${timeLeft.hours ? timeLeft.hours + 'hrs' : ''}
  ${timeLeft.mins ? timeLeft.mins + 'min' : ''} ${timeLeft.secs ? timeLeft.secs + 's' : ''}`;
    }
    constructor(uS) {
        this.uS = uS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SecondsToTimePipe, deps: [{ token: i2.UtilityService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: SecondsToTimePipe, isStandalone: true, name: "secondsToTime" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SecondsToTimePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'secondsToTime',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i2.UtilityService }]; } });
export class GetValueLabel {
    /**
     * Converts a string into a Select option
     * @param value The value to search for in the options list
     * @param options The list of items to search in
     * @param labelField The field that holds the description field
     * @param valueField The field that holds the value field
     * @returns A concatenation of the value and description (value - description)
     */
    transform(value, options, labelField = 'description', valueField = 'code') {
        if (!value)
            return '';
        if (!options)
            return value;
        const item = options.find((x) => x[valueField] == value);
        if (!item)
            return value;
        return value + ' - ' + item[labelField] || item['title'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetValueLabel, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GetValueLabel, isStandalone: true, name: "getValueLabel" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetValueLabel, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getValueLabel',
                    standalone: true,
                }]
        }] });
export class ValueFormatterPipe {
    async transform(val, formatter) {
        return formatter ? formatter(val) : val;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValueFormatterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ValueFormatterPipe, isStandalone: true, name: "valueFormatter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValueFormatterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'valueFormatter',
                    standalone: true,
                }]
        }] });
export class FunctionCaller {
    /**
     * Calls a function in the template
     * @param func Function to be called
     * @param args
     * @returns
     */
    transform(func, ...args) {
        return func ? func(...args) : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller, isStandalone: true, name: "functionCaller" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller, decorators: [{
            type: Pipe,
            args: [{
                    name: 'functionCaller',
                    standalone: true,
                }]
        }] });
export class FunctionCaller1 extends FunctionCaller {
    transform(func, param) {
        return super.transform(func, param);
        // return param ? func(param) : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller1, deps: null, target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller1, isStandalone: true, name: "functionCaller1" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller1, decorators: [{
            type: Pipe,
            args: [{
                    name: 'functionCaller1',
                    standalone: true,
                }]
        }] });
export class FunctionCaller2 extends FunctionCaller {
    transform(func, param1, param2) {
        return super.transform(func, param1, param2);
        // console.log('using')
        // if(func) debugger
        return func ? func(param1, param2) : null;
        // return param1 ? (param2 ? func(param1, param2) : null) : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller2, deps: null, target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller2, isStandalone: true, name: "functionCaller2" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller2, decorators: [{
            type: Pipe,
            args: [{
                    name: 'functionCaller2',
                    standalone: true,
                }]
        }] });
export class FunctionCaller3 {
    transform(func, param1, param2, param3) {
        return func(param1, param2, param3);
        // return param1 ? (param2 ? func(param1, param2) : null) : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller3, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller3, isStandalone: true, name: "functionCaller3" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FunctionCaller3, decorators: [{
            type: Pipe,
            args: [{
                    name: 'functionCaller3',
                    standalone: true,
                }]
        }] });
export class HttpListCaller {
    // transform<T>(httpObservable: any) {
    transform(httpObservable) {
        // console.log('ran functionCaller', httpObservable);
        return httpObservable();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller, isStandalone: true, name: "httpListCaller" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller, decorators: [{
            type: Pipe,
            args: [{
                    name: 'httpListCaller',
                    standalone: true,
                }]
        }] });
export class HttpListCaller1 {
    transform(httpObservable, param) {
        // console.log('ran functionCaller1', httpObservable);
        return httpObservable(param);
        // return param ? httpObservable(param) : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller1, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller1, isStandalone: true, name: "httpListCaller1" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller1, decorators: [{
            type: Pipe,
            args: [{
                    name: 'httpListCaller1',
                    standalone: true,
                }]
        }] });
export class HttpListCaller2 {
    transform(httpObservable, param1, param2) {
        // console.log('ran httpListCaller2', httpObservable);
        return httpObservable(param1, param2);
        // return param1 ? (param2 ? httpObservable(param1, param2) : null) : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller2, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller2, isStandalone: true, name: "httpListCaller2" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HttpListCaller2, decorators: [{
            type: Pipe,
            args: [{
                    name: 'httpListCaller2',
                    standalone: true,
                }]
        }] });
export class IsShowPage {
    transform(type) {
        return type == EPageType.viewPage ? true : false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IsShowPage, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: IsShowPage, isStandalone: true, name: "isShowPage" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IsShowPage, decorators: [{
            type: Pipe,
            args: [{
                    name: 'isShowPage',
                    standalone: true,
                }]
        }] });
export class IsClonePage {
    transform(type) {
        return type == EPageType.clonePage ? true : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IsClonePage, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: IsClonePage, isStandalone: true, name: "isClonePage" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IsClonePage, decorators: [{
            type: Pipe,
            args: [{
                    name: 'isClonePage',
                    standalone: true,
                }]
        }] });
export class FilterArrayPipe {
    transform(arr, value, key, filterFunction) {
        if (!arr) {
            return [];
        }
        if (filterFunction)
            return arr.filter(filterFunction);
        else
            return arr.filter((x) => x[key] == value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterArrayPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FilterArrayPipe, isStandalone: true, name: "filterArray" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterArrayPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'filterArray',
                    standalone: true,
                }]
        }] });
export class FilterArrayByStringPipe {
    /**
     * Filter array using a pipe
     * @param arr Array to filter
     * @param value Value to filter for
     * @param keys Fields to check for match in
     * @param filterFunction Fitler function to use instead of value and keys
     * @returns
     */
    transform(arr, value, keys, filterFunction) {
        if (!arr) {
            return [];
        }
        if (!value)
            return arr;
        if (filterFunction)
            return arr.filter(filterFunction);
        else {
            // debugger;
            const vl = value?.toString()?.trim()?.toLowerCase();
            const ret = [];
            const addedMap = {};
            for (const key of keys) {
                for (const item of arr) {
                    if (addedMap[item['id']])
                        continue;
                    if (item[key]?.toString()?.toLowerCase()?.startsWith(vl)) {
                        ret.push(item);
                        addedMap[item['id']] = true;
                    }
                }
            }
            for (const key of keys) {
                for (const item of arr) {
                    if (addedMap[item['id']])
                        continue;
                    if (item[key]?.toString()?.toLowerCase()?.includes(vl)) {
                        ret.push(item);
                        addedMap[item['id']] = true;
                    }
                }
            }
            return ret;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterArrayByStringPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FilterArrayByStringPipe, isStandalone: true, name: "filterArrayByString" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterArrayByStringPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'filterArrayByString',
                    standalone: true,
                }]
        }] });
export class FilterFormArrayPipe {
    transform(arr, value, key = 'id') {
        if (!arr || !arr.length)
            return arr;
        debugger;
        return arr.filter((x) => x.value[key] == value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterFormArrayPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FilterFormArrayPipe, isStandalone: true, name: "filterFormArray" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterFormArrayPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'filterFormArray',
                    standalone: true,
                }]
        }] });
export class SortPipe {
    transform(arr, direction = 0, sortField) {
        //    console.log('SORTTER', arr, direction, sortField);
        // debugger;
        if (!arr) {
            return null;
        }
        if (direction > -1 && direction < 2) {
            return this.sort(arr, direction, sortField);
        }
        else {
            return arr;
        }
    }
    sort(arr, direction, sortField) {
        if (sortField) {
            return arr.sort2(sortField, true, direction ? true : false);
        }
        else {
            return arr.sort((x, y) => (direction ? y - x : x - y));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SortPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: SortPipe, isStandalone: true, name: "sort" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SortPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'sort',
                    standalone: true,
                }]
        }] });
export class ToAnyPipe {
    transform(value, isArray = false) {
        return isArray ? value : value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToAnyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ToAnyPipe, isStandalone: true, name: "toAny" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToAnyPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'toAny',
                    standalone: true,
                }]
        }] });
export class ToAnyArrayPipe {
    transform(value) {
        return value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToAnyArrayPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ToAnyArrayPipe, isStandalone: true, name: "toAnyArray" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToAnyArrayPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'toAnyArray',
                    standalone: true,
                }]
        }] });
export class TrimTextPipe {
    /**
     * Trims a string based on a specified length
     * @param value String to trim
     * @param length Length to begin trimming
     * @returns Trimmed string
     */
    transform(value, length) {
        return !value || length == null || value.length < length
            ? value
            : value.substring(0, length) + '...';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TrimTextPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: TrimTextPipe, isStandalone: true, name: "trimText" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TrimTextPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'trimText',
                    standalone: true,
                }]
        }] });
export class XOrYPipe {
    transform(x, y = '-') {
        return this.uS.xOrY(x, y);
    }
    constructor(uS) {
        this.uS = uS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: XOrYPipe, deps: [{ token: i2.UtilityService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: XOrYPipe, isStandalone: true, name: "xOrY" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: XOrYPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'xOrY',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i2.UtilityService }]; } });
export class ReplaceAllPipe {
    transform(text, search, replacement) {
        return text ? text.split(search).join(replacement) : text;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ReplaceAllPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ReplaceAllPipe, isStandalone: true, name: "replaceAll" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ReplaceAllPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'replaceAll',
                    standalone: true,
                }]
        }] });
export class ValueOrXPipe {
    /**
     *
     * @param value Variable that holds the value to be checked for emptiness
     * @param replacement This is the value that will be set if the subject field is empty
     * @returns Return the value or the replacement value if value is empty
     */
    transform(value, replacement = '-') {
        return value == null || value == undefined ? replacement : value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValueOrXPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ValueOrXPipe, isStandalone: true, name: "valueOrX" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValueOrXPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'valueOrX',
                    standalone: true,
                }]
        }] });
export class StrConcatenatorPipe {
    transform(text1, text2, joiner = ' - ') {
        return HHFunctions.strConcatenator(text1, text2, joiner);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StrConcatenatorPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: StrConcatenatorPipe, isStandalone: true, name: "strConcatenator" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StrConcatenatorPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'strConcatenator',
                    standalone: true,
                }]
        }] });
export class CustomDatePipe {
    transform(date, showTime = false) {
        let d = showTime ? 'dd MMM.' : 'dd MMM. YYYY';
        let fulldate = '';
        if (new Date(date).getDay() == new Date().getDay()) {
            fulldate = 'Today';
            d = '';
        }
        else if (new Date(date).getDay() - new Date().getDay() == 1) {
            fulldate = 'Yesterday';
            d = '';
        }
        return (fulldate + this.datePipe.transform(date, showTime ? d + ' hh:mma' : d))?.trim();
    }
    transform2(date, formatStr) {
        return this.datePipe.transform(date, formatStr);
    }
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CustomDatePipe, deps: [{ token: i3.DatePipe }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: CustomDatePipe, isStandalone: true, name: "customDate" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CustomDatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'customDate',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i3.DatePipe }]; } });
const comps = [
    ArraySplitter,
    CustomDatePipe,
    FilterArrayByStringPipe,
    FilterArrayPipe,
    FilterFormArrayPipe,
    FunctionCaller,
    FunctionCaller1,
    FunctionCaller2,
    FunctionCaller3,
    GenderPipe,
    GetValueLabel,
    HttpListCaller,
    HttpListCaller1,
    HttpListCaller2,
    IsClonePage,
    IsShowPage,
    NumberToWordsPipe,
    ReplaceAllPipe,
    RoundPipe,
    SecondsToTimePipe,
    SortPipe,
    StrConcatenatorPipe,
    ToAnyArrayPipe,
    ToAnyPipe,
    TrimTextPipe,
    ValueFormatterPipe,
    ValueOrXPipe,
    XOrYPipe,
];
const modules = [];
export class UtilityPipesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, imports: [CommonModule, ArraySplitter, CustomDatePipe, FilterArrayByStringPipe, FilterArrayPipe, FilterFormArrayPipe, FunctionCaller, FunctionCaller1, FunctionCaller2, FunctionCaller3, GenderPipe, GetValueLabel, HttpListCaller, HttpListCaller1, HttpListCaller2, IsClonePage, IsShowPage, NumberToWordsPipe, ReplaceAllPipe, RoundPipe, SecondsToTimePipe, SortPipe, StrConcatenatorPipe, ToAnyArrayPipe, ToAnyPipe, TrimTextPipe, ValueFormatterPipe, ValueOrXPipe, XOrYPipe], exports: [ArraySplitter, CustomDatePipe, FilterArrayByStringPipe, FilterArrayPipe, FilterFormArrayPipe, FunctionCaller, FunctionCaller1, FunctionCaller2, FunctionCaller3, GenderPipe, GetValueLabel, HttpListCaller, HttpListCaller1, HttpListCaller2, IsClonePage, IsShowPage, NumberToWordsPipe, ReplaceAllPipe, RoundPipe, SecondsToTimePipe, SortPipe, StrConcatenatorPipe, ToAnyArrayPipe, ToAnyPipe, TrimTextPipe, ValueFormatterPipe, ValueOrXPipe, XOrYPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, providers: [DatePipe], imports: [CommonModule, modules] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...modules, ...comps],
                    exports: [...comps, ...modules],
                    providers: [DatePipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL3BpcGVzL3V0aWxpdHkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUc5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQVExRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBYztRQUNsQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUVuRixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxZQUFtQixHQUF5QjtRQUF6QixRQUFHLEdBQUgsR0FBRyxDQUFzQjtJQUFHLENBQUM7OEdBTnJDLGlCQUFpQjs0R0FBakIsaUJBQWlCOzsyRkFBakIsaUJBQWlCO2tCQUo3QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxlQUFlO29CQUNyQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7O0FBY0QsTUFBTSxPQUFPLGFBQWE7SUFDeEIsU0FBUyxDQUFJLEdBQVEsRUFBRSxTQUFpQixFQUFFLFVBQWtCLEVBQUUsUUFBaUI7UUFDN0UsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMs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RUF4VWQsU0FBUyxFQVlULGlCQUFpQixFQWtQakIsUUFBUSxFQW9HUixtQkFBbUIsRUFqRW5CLGNBQWMsRUFWZCxTQUFTLEVBb0JULFlBQVksRUF2UFosa0JBQWtCLEVBOFJsQixZQUFZLEVBckJaLFFBQVE7K0dBcUdSLGtCQUFrQixhQUZsQixDQUFDLFFBQVEsQ0FBQyxZQUZYLFlBQVksRUFBSyxPQUFPOzsyRkFJdkIsa0JBQWtCO2tCQUw5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztvQkFDN0MsT0FBTyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFUGFnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgubW9kZWwnO1xuaW1wb3J0IHsgSEhGdW5jdGlvbnMgfSBmcm9tICcuLi9mdW5jdGlvbnMvYmFzZS1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTnVtYmVyVG9Xb3Jkc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9udW1iZXItdG8td29yZHMuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ251bWJlclRvV29yZHMnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJUb1dvcmRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSAmJiB0aGlzLm50dy5pc0ludGVnZXIodmFsdWUpKSByZXR1cm4gdGhpcy5udHcubnVtVG9Xb3Jkcyh2YWx1ZSkgKyBzdWZmaXg7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIG50dzogTnVtYmVyVG9Xb3Jkc1NlcnZpY2UpIHt9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FycmF5U3BsaXR0ZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBBcnJheVNwbGl0dGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybTxUPihhcnI6IFRbXSwgYXJyTGVuZ3RoOiBudW1iZXIsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gYXJyID8gYXJyLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4ID8gZW5kSW5kZXggKyAxIDogdW5kZWZpbmVkKSA6IFtdO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2dlbmRlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEdlbmRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gJ00nID8gJ01hbGUnIDogdmFsdWUgPT0gJ0YnID8gJ0ZlbWFsZScgOiB2YWx1ZTtcbiAgfVxufVxuQFBpcGUoe1xuICBuYW1lOiAncm91bmQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBSb3VuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIFVzZSB0aGUgTWF0aC5yb3VuZCBmdW5jdGlvblxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gIH1cbn1cbkBQaXBlKHtcbiAgbmFtZTogJ3NlY29uZHNUb1RpbWUnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTZWNvbmRzVG9UaW1lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHRpbWVMZWZ0ID0gdGhpcy51Uy5zZWNvbmRzVG9Ib3VyTWluU2VjKHZhbHVlKTtcbiAgICByZXR1cm4gYCR7dGltZUxlZnQuaG91cnMgPyB0aW1lTGVmdC5ob3VycyArICdocnMnIDogJyd9XG4gICR7dGltZUxlZnQubWlucyA/IHRpbWVMZWZ0Lm1pbnMgKyAnbWluJyA6ICcnfSAke3RpbWVMZWZ0LnNlY3MgPyB0aW1lTGVmdC5zZWNzICsgJ3MnIDogJyd9YDtcbiAgfVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdVM6IFV0aWxpdHlTZXJ2aWNlKSB7fVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdnZXRWYWx1ZUxhYmVsJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgR2V0VmFsdWVMYWJlbCBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogQ29udmVydHMgYSBzdHJpbmcgaW50byBhIFNlbGVjdCBvcHRpb25cbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yIGluIHRoZSBvcHRpb25zIGxpc3RcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGxpc3Qgb2YgaXRlbXMgdG8gc2VhcmNoIGluXG4gICAqIEBwYXJhbSBsYWJlbEZpZWxkIFRoZSBmaWVsZCB0aGF0IGhvbGRzIHRoZSBkZXNjcmlwdGlvbiBmaWVsZFxuICAgKiBAcGFyYW0gdmFsdWVGaWVsZCBUaGUgZmllbGQgdGhhdCBob2xkcyB0aGUgdmFsdWUgZmllbGRcbiAgICogQHJldHVybnMgQSBjb25jYXRlbmF0aW9uIG9mIHRoZSB2YWx1ZSBhbmQgZGVzY3JpcHRpb24gKHZhbHVlIC0gZGVzY3JpcHRpb24pXG4gICAqL1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlbXSxcbiAgICBsYWJlbEZpZWxkID0gJ2Rlc2NyaXB0aW9uJyxcbiAgICB2YWx1ZUZpZWxkID0gJ2NvZGUnXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIHZhbHVlO1xuICAgIGNvbnN0IGl0ZW0gPSBvcHRpb25zLmZpbmQoKHgpID0+IHhbdmFsdWVGaWVsZF0gPT0gdmFsdWUpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSArICcgLSAnICsgaXRlbVtsYWJlbEZpZWxkXSB8fCBpdGVtWyd0aXRsZSddO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3ZhbHVlRm9ybWF0dGVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVmFsdWVGb3JtYXR0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGFzeW5jIHRyYW5zZm9ybSh2YWwsIGZvcm1hdHRlcjogYW55KSB7XG4gICAgcmV0dXJuIGZvcm1hdHRlciA/IGZvcm1hdHRlcih2YWwpIDogdmFsO1xuICB9XG59XG5AUGlwZSh7XG4gIG5hbWU6ICdmdW5jdGlvbkNhbGxlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uQ2FsbGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBDYWxscyBhIGZ1bmN0aW9uIGluIHRoZSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogQHJldHVybnNcbiAgICovXG4gIHRyYW5zZm9ybTxULCBQPihmdW5jOiAoLi4uYXJnczogUFtdKSA9PiBULCAuLi5hcmdzOiBQW10pIHtcbiAgICByZXR1cm4gZnVuYyA/IGZ1bmMoLi4uYXJncykgOiBudWxsO1xuICB9XG59XG5AUGlwZSh7XG4gIG5hbWU6ICdmdW5jdGlvbkNhbGxlcjEnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkNhbGxlcjEgZXh0ZW5kcyBGdW5jdGlvbkNhbGxlciB7XG4gIG92ZXJyaWRlIHRyYW5zZm9ybTxULCBQMT4oZnVuYzogKHBhcmFtOiBQMSkgPT4gVCwgcGFyYW06IFAxKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybShmdW5jLCBwYXJhbSk7XG4gICAgLy8gcmV0dXJuIHBhcmFtID8gZnVuYyhwYXJhbSkgOiBudWxsO1xuICB9XG59XG5AUGlwZSh7XG4gIG5hbWU6ICdmdW5jdGlvbkNhbGxlcjInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkNhbGxlcjIgZXh0ZW5kcyBGdW5jdGlvbkNhbGxlciB7XG4gIG92ZXJyaWRlIHRyYW5zZm9ybTxULCBQMSwgUDI+KGZ1bmM6IChwYXJhbTE6IFAxLCBwYXJhbTI6IFAyKSA9PiBULCBwYXJhbTE6IFAxLCBwYXJhbTI6IFAyKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybShmdW5jLCBwYXJhbTEsIHBhcmFtMik7XG4gICAgLy8gY29uc29sZS5sb2coJ3VzaW5nJylcbiAgICAvLyBpZihmdW5jKSBkZWJ1Z2dlclxuICAgIHJldHVybiBmdW5jID8gZnVuYyhwYXJhbTEsIHBhcmFtMikgOiBudWxsO1xuICAgIC8vIHJldHVybiBwYXJhbTEgPyAocGFyYW0yID8gZnVuYyhwYXJhbTEsIHBhcmFtMikgOiBudWxsKSA6IG51bGw7XG4gIH1cbn1cbkBQaXBlKHtcbiAgbmFtZTogJ2Z1bmN0aW9uQ2FsbGVyMycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uQ2FsbGVyMyBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm08VCwgUDEsIFAyLCBQMz4oXG4gICAgZnVuYzogKHBhcmFtMTogUDEsIHBhcmFtMjogUDIsIHBhcmFtMzogUDMpID0+IFQsXG4gICAgcGFyYW0xOiBQMSxcbiAgICBwYXJhbTI6IFAyLFxuICAgIHBhcmFtMzogUDNcbiAgKSB7XG4gICAgcmV0dXJuIGZ1bmMocGFyYW0xLCBwYXJhbTIsIHBhcmFtMyk7XG4gICAgLy8gcmV0dXJuIHBhcmFtMSA/IChwYXJhbTIgPyBmdW5jKHBhcmFtMSwgcGFyYW0yKSA6IG51bGwpIDogbnVsbDtcbiAgfVxufVxuQFBpcGUoe1xuICBuYW1lOiAnaHR0cExpc3RDYWxsZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBIdHRwTGlzdENhbGxlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvLyB0cmFuc2Zvcm08VD4oaHR0cE9ic2VydmFibGU6IGFueSkge1xuICB0cmFuc2Zvcm08VD4oaHR0cE9ic2VydmFibGU6ICgpID0+IE9ic2VydmFibGU8VD4pIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmFuIGZ1bmN0aW9uQ2FsbGVyJywgaHR0cE9ic2VydmFibGUpO1xuICAgIHJldHVybiBodHRwT2JzZXJ2YWJsZSgpO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2h0dHBMaXN0Q2FsbGVyMScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBMaXN0Q2FsbGVyMSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm08VD4oaHR0cE9ic2VydmFibGU6IChwYXJhbTogYW55KSA9PiBPYnNlcnZhYmxlPFQ+LCBwYXJhbTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JhbiBmdW5jdGlvbkNhbGxlcjEnLCBodHRwT2JzZXJ2YWJsZSk7XG4gICAgcmV0dXJuIGh0dHBPYnNlcnZhYmxlKHBhcmFtKTtcbiAgICAvLyByZXR1cm4gcGFyYW0gPyBodHRwT2JzZXJ2YWJsZShwYXJhbSkgOiBudWxsO1xuICB9XG59XG5AUGlwZSh7XG4gIG5hbWU6ICdodHRwTGlzdENhbGxlcjInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBIdHRwTGlzdENhbGxlcjIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtPFQ+KFxuICAgIGh0dHBPYnNlcnZhYmxlOiAocGFyYW0xOiBzdHJpbmcsIHBhcmFtMjogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPFQ+LFxuICAgIHBhcmFtMTogc3RyaW5nLFxuICAgIHBhcmFtMjogc3RyaW5nXG4gICkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyYW4gaHR0cExpc3RDYWxsZXIyJywgaHR0cE9ic2VydmFibGUpO1xuICAgIHJldHVybiBodHRwT2JzZXJ2YWJsZShwYXJhbTEsIHBhcmFtMik7XG4gICAgLy8gcmV0dXJuIHBhcmFtMSA/IChwYXJhbTIgPyBodHRwT2JzZXJ2YWJsZShwYXJhbTEsIHBhcmFtMikgOiBudWxsKSA6IG51bGw7XG4gIH1cbn1cbkBQaXBlKHtcbiAgbmFtZTogJ2lzU2hvd1BhZ2UnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBJc1Nob3dQYWdlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0eXBlOiBFUGFnZVR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PSBFUGFnZVR5cGUudmlld1BhZ2UgPyB0cnVlIDogZmFsc2U7XG4gIH1cbn1cbkBQaXBlKHtcbiAgbmFtZTogJ2lzQ2xvbmVQYWdlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSXNDbG9uZVBhZ2UgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHR5cGU6IEVQYWdlVHlwZSkge1xuICAgIHJldHVybiB0eXBlID09IEVQYWdlVHlwZS5jbG9uZVBhZ2UgPyB0cnVlIDogbnVsbDtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdmaWx0ZXJBcnJheScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckFycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm08VD4oXG4gICAgYXJyOiBUW10sXG4gICAgdmFsdWU6IGFueSxcbiAgICBrZXk6IGtleW9mIFQsXG4gICAgZmlsdGVyRnVuY3Rpb24/OiAodmFsdWU6IFQsIGluZGV4PzogbnVtYmVyLCBhcnJheT86IFRbXSkgPT4gYm9vbGVhblxuICApIHtcbiAgICBpZiAoIWFycikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyRnVuY3Rpb24pIHJldHVybiBhcnIuZmlsdGVyKGZpbHRlckZ1bmN0aW9uKTtcbiAgICBlbHNlIHJldHVybiBhcnIuZmlsdGVyKCh4KSA9PiB4W2tleV0gPT0gdmFsdWUpO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2ZpbHRlckFycmF5QnlTdHJpbmcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBcnJheUJ5U3RyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogRmlsdGVyIGFycmF5IHVzaW5nIGEgcGlwZVxuICAgKiBAcGFyYW0gYXJyIEFycmF5IHRvIGZpbHRlclxuICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gZmlsdGVyIGZvclxuICAgKiBAcGFyYW0ga2V5cyBGaWVsZHMgdG8gY2hlY2sgZm9yIG1hdGNoIGluXG4gICAqIEBwYXJhbSBmaWx0ZXJGdW5jdGlvbiBGaXRsZXIgZnVuY3Rpb24gdG8gdXNlIGluc3RlYWQgb2YgdmFsdWUgYW5kIGtleXNcbiAgICogQHJldHVybnNcbiAgICovXG4gIHRyYW5zZm9ybTxUPihcbiAgICBhcnI6IFRbXSxcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIGtleXM6IChrZXlvZiBUKVtdLFxuICAgIGZpbHRlckZ1bmN0aW9uPzogKHZhbHVlOiBULCBpbmRleD86IG51bWJlciwgYXJyYXk/OiBUW10pID0+IGJvb2xlYW5cbiAgKSB7XG4gICAgaWYgKCFhcnIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGFycjtcbiAgICBpZiAoZmlsdGVyRnVuY3Rpb24pIHJldHVybiBhcnIuZmlsdGVyKGZpbHRlckZ1bmN0aW9uKTtcbiAgICBlbHNlIHtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgY29uc3QgdmwgPSB2YWx1ZT8udG9TdHJpbmcoKT8udHJpbSgpPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgcmV0OiBUW10gPSBbXTtcbiAgICAgIGNvbnN0IGFkZGVkTWFwOiB7IFtpZDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgICAgICBpZiAoYWRkZWRNYXBbaXRlbVsnaWQnXV0pIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICgoPHN0cmluZz5pdGVtW2tleV0pPy50b1N0cmluZygpPy50b0xvd2VyQ2FzZSgpPy5zdGFydHNXaXRoKHZsKSkge1xuICAgICAgICAgICAgcmV0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICBhZGRlZE1hcFtpdGVtWydpZCddXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgICAgICBpZiAoYWRkZWRNYXBbaXRlbVsnaWQnXV0pIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICgoPHN0cmluZz5pdGVtW2tleV0pPy50b1N0cmluZygpPy50b0xvd2VyQ2FzZSgpPy5pbmNsdWRlcyh2bCkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgYWRkZWRNYXBbaXRlbVsnaWQnXV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyRm9ybUFycmF5JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyRm9ybUFycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oYXJyOiBBYnN0cmFjdENvbnRyb2xbXSwgdmFsdWU6IGFueSwga2V5ID0gJ2lkJykge1xuICAgIGlmICghYXJyIHx8ICFhcnIubGVuZ3RoKSByZXR1cm4gYXJyO1xuICAgIGRlYnVnZ2VyO1xuICAgIHJldHVybiBhcnIuZmlsdGVyKCh4KSA9PiB4LnZhbHVlW2tleV0gPT0gdmFsdWUpO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NvcnQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm08VD4oYXJyOiBUW10sIGRpcmVjdGlvbjogMCB8IDEgPSAwLCBzb3J0RmllbGQ/OiBrZXlvZiBUKSB7XG4gICAgLy8gICAgY29uc29sZS5sb2coJ1NPUlRURVInLCBhcnIsIGRpcmVjdGlvbiwgc29ydEZpZWxkKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBpZiAoIWFycikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPiAtMSAmJiBkaXJlY3Rpb24gPCAyKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3J0KGFyciwgZGlyZWN0aW9uLCBzb3J0RmllbGQgYXMgYW55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gIH1cbiAgc29ydDxUPihhcnI6IFRbXSwgZGlyZWN0aW9uOiAwIHwgMSwgc29ydEZpZWxkPzoga2V5b2YgVCkge1xuICAgIGlmIChzb3J0RmllbGQpIHtcbiAgICAgIHJldHVybiBhcnIuc29ydDIoc29ydEZpZWxkLCB0cnVlLCBkaXJlY3Rpb24gPyB0cnVlIDogZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyLnNvcnQoKHg6IGFueSwgeTogYW55KSA9PiAoZGlyZWN0aW9uID8geSAtIHggOiB4IC0geSkpO1xuICAgIH1cbiAgfVxufVxuQFBpcGUoe1xuICBuYW1lOiAndG9BbnknLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBUb0FueVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGlzQXJyYXkgPSBmYWxzZSkge1xuICAgIHJldHVybiBpc0FycmF5ID8gKHZhbHVlIGFzIGFueVtdKSA6IHZhbHVlO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RvQW55QXJyYXknLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBUb0FueUFycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSkge1xuICAgIHJldHVybiB2YWx1ZSBhcyBhbnlbXTtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICd0cmltVGV4dCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRyaW1UZXh0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogVHJpbXMgYSBzdHJpbmcgYmFzZWQgb24gYSBzcGVjaWZpZWQgbGVuZ3RoXG4gICAqIEBwYXJhbSB2YWx1ZSBTdHJpbmcgdG8gdHJpbVxuICAgKiBAcGFyYW0gbGVuZ3RoIExlbmd0aCB0byBiZWdpbiB0cmltbWluZ1xuICAgKiBAcmV0dXJucyBUcmltbWVkIHN0cmluZ1xuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICF2YWx1ZSB8fCBsZW5ndGggPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPCBsZW5ndGhcbiAgICAgID8gdmFsdWVcbiAgICAgIDogdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICd4T3JZJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgWE9yWVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHg6IHN0cmluZywgeSA9ICctJykge1xuICAgIHJldHVybiB0aGlzLnVTLnhPclkoeCwgeSk7XG4gIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1UzogVXRpbGl0eVNlcnZpY2UpIHt9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3JlcGxhY2VBbGwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBSZXBsYWNlQWxsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgcmVwbGFjZW1lbnQ6IHN0cmluZykge1xuICAgIHJldHVybiB0ZXh0ID8gdGV4dC5zcGxpdChzZWFyY2gpLmpvaW4ocmVwbGFjZW1lbnQpIDogdGV4dDtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICd2YWx1ZU9yWCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFZhbHVlT3JYUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFZhcmlhYmxlIHRoYXQgaG9sZHMgdGhlIHZhbHVlIHRvIGJlIGNoZWNrZWQgZm9yIGVtcHRpbmVzc1xuICAgKiBAcGFyYW0gcmVwbGFjZW1lbnQgVGhpcyBpcyB0aGUgdmFsdWUgdGhhdCB3aWxsIGJlIHNldCBpZiB0aGUgc3ViamVjdCBmaWVsZCBpcyBlbXB0eVxuICAgKiBAcmV0dXJucyBSZXR1cm4gdGhlIHZhbHVlIG9yIHRoZSByZXBsYWNlbWVudCB2YWx1ZSBpZiB2YWx1ZSBpcyBlbXB0eVxuICAgKi9cbiAgdHJhbnNmb3JtPFQ+KHZhbHVlOiBULCByZXBsYWNlbWVudDogc3RyaW5nID0gJy0nKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkID8gcmVwbGFjZW1lbnQgOiB2YWx1ZTtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdzdHJDb25jYXRlbmF0b3InLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJDb25jYXRlbmF0b3JQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybTxUPih0ZXh0MTogc3RyaW5nLCB0ZXh0Mjogc3RyaW5nLCBqb2luZXI6IHN0cmluZyA9ICcgLSAnKSB7XG4gICAgcmV0dXJuIEhIRnVuY3Rpb25zLnN0ckNvbmNhdGVuYXRvcih0ZXh0MSwgdGV4dDIsIGpvaW5lcik7XG4gIH1cbn1cbkBQaXBlKHtcbiAgbmFtZTogJ2N1c3RvbURhdGUnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21EYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogc3RyaW5nLCBzaG93VGltZSA9IGZhbHNlKSB7XG4gICAgbGV0IGQgPSBzaG93VGltZSA/ICdkZCBNTU0uJyA6ICdkZCBNTU0uIFlZWVknO1xuICAgIGxldCBmdWxsZGF0ZTogc3RyaW5nID0gJyc7XG4gICAgaWYgKG5ldyBEYXRlKGRhdGUpLmdldERheSgpID09IG5ldyBEYXRlKCkuZ2V0RGF5KCkpIHtcbiAgICAgIGZ1bGxkYXRlID0gJ1RvZGF5JztcbiAgICAgIGQgPSAnJztcbiAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKGRhdGUpLmdldERheSgpIC0gbmV3IERhdGUoKS5nZXREYXkoKSA9PSAxKSB7XG4gICAgICBmdWxsZGF0ZSA9ICdZZXN0ZXJkYXknO1xuICAgICAgZCA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gKGZ1bGxkYXRlICsgdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgc2hvd1RpbWUgPyBkICsgJyBoaDptbWEnIDogZCkpPy50cmltKCk7XG4gIH1cbiAgdHJhbnNmb3JtMihkYXRlOiBzdHJpbmcsIGZvcm1hdFN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGZvcm1hdFN0cik7XG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIGRhdGVQaXBlOiBEYXRlUGlwZSkge31cbn1cblxuY29uc3QgY29tcHMgPSBbXG4gIEFycmF5U3BsaXR0ZXIsIFxuICBDdXN0b21EYXRlUGlwZSxcbiAgRmlsdGVyQXJyYXlCeVN0cmluZ1BpcGUsXG4gIEZpbHRlckFycmF5UGlwZSxcbiAgRmlsdGVyRm9ybUFycmF5UGlwZSxcbiAgRnVuY3Rpb25DYWxsZXIsXG4gIEZ1bmN0aW9uQ2FsbGVyMSxcbiAgRnVuY3Rpb25DYWxsZXIyLFxuICBGdW5jdGlvbkNhbGxlcjMsXG4gIEdlbmRlclBpcGUsXG4gIEdldFZhbHVlTGFiZWwsXG4gIEh0dHBMaXN0Q2FsbGVyLFxuICBIdHRwTGlzdENhbGxlcjEsXG4gIEh0dHBMaXN0Q2FsbGVyMixcbiAgSXNDbG9uZVBhZ2UsXG4gIElzU2hvd1BhZ2UsXG4gIE51bWJlclRvV29yZHNQaXBlLFxuICBSZXBsYWNlQWxsUGlwZSxcbiAgUm91bmRQaXBlLFxuICBTZWNvbmRzVG9UaW1lUGlwZSxcbiAgU29ydFBpcGUsXG4gIFN0ckNvbmNhdGVuYXRvclBpcGUsXG4gIFRvQW55QXJyYXlQaXBlLFxuICBUb0FueVBpcGUsXG4gIFRyaW1UZXh0UGlwZSxcbiAgVmFsdWVGb3JtYXR0ZXJQaXBlLFxuICBWYWx1ZU9yWFBpcGUsXG4gIFhPcllQaXBlLFxuXTtcbmNvbnN0IG1vZHVsZXMgPSBbXTtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLm1vZHVsZXMsIC4uLmNvbXBzXSxcbiAgZXhwb3J0czogWy4uLmNvbXBzLCAuLi5tb2R1bGVzXSxcbiAgcHJvdmlkZXJzOiBbRGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVdGlsaXR5UGlwZXNNb2R1bGUge31cbiJdfQ==