import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, } from '@angular/router';
import jfd from 'js-file-download';
import { Config } from '../config/index.config';
import { saveAs } from 'file-saver';
import { HHenvironment } from '../../environments/environment';
import { cloneDeep } from 'lodash-es';
import { isObservable, merge, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, filter, map, mergeMap, tap } from 'rxjs/operators';
import { EValidationType, EPeriod } from '../shared/models/index.model';
import * as $ from 'jquery';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Papa from 'papaparse';
import { Breakpoints } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/snack-bar";
import * as i3 from "@angular/router";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@angular/common";
import * as i6 from "../shared/pipes/utility.pipe";
import * as i7 from "../shared/components/confirm-dialog/confirm-dialog.service";
import * as i8 from "./mix-panel.service";
import * as i9 from "@angular/cdk/layout";
export class UtilityService {
    constructor(dialog, snackBar, router, titleS, location, numberPipe, currencyPipe, titleCasePipe, customDatePipe, confirmDialogService, mixPanelService, responsive) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.titleS = titleS;
        this.location = location;
        this.numberPipe = numberPipe;
        this.currencyPipe = currencyPipe;
        this.titleCasePipe = titleCasePipe;
        this.customDatePipe = customDatePipe;
        this.confirmDialogService = confirmDialogService;
        this.mixPanelService = mixPanelService;
        this.responsive = responsive;
        this.config = Config;
        this.downloader = jfd;
        this.$ = $;
        this.eValidationType = EValidationType;
        this.ePeriod = EPeriod;
        this.environment = HHenvironment;
        /**
         * Emits true if mobile
         */
        this.mobileQueryChanged = new ReplaySubject();
        this.back = () => this.location.back();
        this.imageTypes = {
            'image/apng': true,
            'image/avif': true,
            'image/gif': true,
            'image/jpeg': true,
            'image/png': true,
            'image/svg+xml': true,
            'image/webp': true,
        };
        this.xOrY = (x, y = '-') => `${x == null ? y : x}`;
        /**
         * Convert Date string to Date Time string
         * @param dateStr Date string
         * @example '2022-01-25'
         * @param config Configuration for the conversion
         * @returns Returns a Date Time string
         * @example '2022-01-25T00:00:00Z' or '2022-01-25 00:00:00'
         */
        this.dateToDateTime = (dateStr, config) => {
            const omitT = !!config?.omitT;
            if (!dateStr)
                return null;
            if (dateStr.includes('T'))
                return dateStr;
            return dateStr + (omitT ? ' 00:00:00' : 'T00:00:00Z');
        };
        /**
         * Handles the deletion of rows from a FormArray
         * @param index Index of the row to delete
         * @param fa The FormArray that holds the rows
         * @param deleteService The deletion service to be called (It should be an anonymous function)
         * @param addRowFunc The function (anonymous) that adds a new row to the FormArray
         * @param emitEvent Specify whether to emit an event when manipulating the FormArray
         * @returns
         */
        this.handleFormRowDelete = (index, fa, deleteService, addRowFunc, emitEvent = true) => {
            return new Promise((sub) => {
                const id = cloneDeep(fa.controls[index]?.value?.id);
                // debugger;
                if (fa.controls.length == 1 && id) {
                    fa.removeAt(index, { emitEvent });
                    addRowFunc();
                }
                else if (fa.controls.length > 1)
                    fa.removeAt(index, { emitEvent });
                else if (fa.controls.length == 1)
                    fa.controls[0].reset();
                if (id && deleteService) {
                    const req = deleteService(id);
                    if (req['toPromise']) {
                        sub(req['toPromise']());
                    }
                    else {
                        sub(req);
                    }
                }
                else {
                    sub(null);
                }
            });
        };
        this.formatCount = (num) => {
            if (!num) {
                return 0 + '';
            }
            else {
                // hundreds
                if (num <= 999) {
                    return num + '';
                }
                // thousands
                else if (num >= 1000 && num <= 9999) {
                    return this.numberPipe.transform(num / 1000, '1.0-3') + 'K';
                }
                else if (num >= 10000 && num <= 999999) {
                    return this.numberPipe.transform(num / 1000, '1.0-1') + 'K';
                }
                // millions
                else if (num >= 1000000 && num <= 9999999) {
                    return this.numberPipe.transform(num / 1000000, '1.0-3') + 'M';
                }
                else if (num >= 10000000 && num <= 999999999) {
                    return this.numberPipe.transform(num / 1000000, '1.0-1') + 'M';
                }
                // billions
                else if (num >= 1000000000 && num <= 999999999999) {
                    return this.numberPipe.transform(num / 1000000000, '1.0-3') + 'B';
                }
                else
                    return num + '';
            }
        };
        /**
         * Handles the deletion of rows from an array
         * @param index Index of the row to delete
         * @param arr The array that holds the rows
         * @param deleteService The deletion service to be called (It should be an anonymous function)
         * @param addRowFunc The function (anonymous) that adds a new row to the array
         * @param cb The function to callback with the response of the deletion service as the input parameter
         */
        this.handleRowDelete = async (index, arr, deleteService, addRowFunc, cb) => {
            const id = arr[index]?.id;
            // debugger;
            if (id && deleteService) {
                const req = deleteService(id);
                if (typeof req['toPromise'] == 'function')
                    cb ? cb(await req['toPromise']()) : req['toPromise']();
                else
                    cb ? cb(await req) : null;
            }
            if (arr.length == 1) {
                arr.splice(index, 1);
                addRowFunc();
            }
            else if (arr.length > 1)
                arr.splice(index, 1);
        };
        /**
         * To handle the patching of a FormArray
         * @param arr The array that contains the data
         * @param addFunc The function that performs addition of single entries
         * @param formArr The FormArray that will hold the array's data
         */
        this.initPatchFormArray = (arr, addFunc, formArr) => {
            // debugger
            if (arr?.length) {
                if (formArr.length)
                    formArr.clear();
                for (const item of arr) {
                    addFunc(formArr.length, item, formArr);
                }
            }
            else {
                if (!formArr.length)
                    addFunc(formArr.length, null, formArr);
            }
        };
        this.isPromise = (func) => {
            return typeof func === 'object' && typeof func.then === 'function';
        };
        this.isAsync = (func) => {
            return (func.constructor.name === 'AsyncFunction' ||
                (typeof func === 'function' && this.isPromise(func())));
        };
        this.isObservable = (func) => {
            // return typeof func === 'object' && typeof func.subscribe === 'function';
            // return typeof func === 'object' && func instanceof Observable;
            // return typeof func === 'object' && func instanceof Observable<T>;
            return typeof func === 'object' && isObservable(func);
            return typeof func === 'object' && typeof func.toPromise === 'function';
        };
        this.promisifyVal = (val) => {
            if (this.isAsync(val)) {
                return Promise.resolve(val);
            }
            else if (this.isObservable(val)) {
                return Promise.resolve(val.toPromise());
            }
            else {
                return Promise.resolve(val);
            }
        };
        /**
         * @param arr Array of observables to fetch
         * @returns An array of the responses merged together. It emits the merged responses as they are fetched and closes once alll the responses have been fetched
         */
        this.mergeArrObservables = (arr) => {
            return new Observable((sub) => {
                const ret = [];
                let responseCount = 0;
                merge(...arr.map((x) => x.$func?.pipe(catchError((e) => {
                    console.error(e);
                    return of([]);
                }), tap((r) => {
                    responseCount++;
                })))).subscribe((r) => {
                    ret.push(...r);
                    sub.next(ret);
                    if (responseCount == arr.filter((x) => x.$func).length) {
                        // debugger
                        sub.complete();
                    }
                });
            });
        };
        this.objIsEmpty = (obj, exclusionFields) => {
            if (!obj)
                return true;
            for (const key in obj) {
                if (exclusionFields?.includes(key))
                    continue;
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (obj[key])
                        return false;
                }
            }
            return true;
        };
        this.dataGen = (keys, length = 10) => {
            const ret = [];
            for (let i = 0; i < length; i++) {
                let t = {};
                for (const key of keys) {
                    t[key] = this.textGen();
                }
                ret.push(t);
            }
            return ret;
        };
        this.textGen = () => 'random' + Math.round(Math.random() * 1000);
        this.dialogOpener = (comp, config, valueCB, noValueCB) => this.dialogOpenerRef(comp, config)
            .afterClosed()
            .subscribe((r) => {
            if (r != null && r != undefined) {
                valueCB(r);
            }
            else if (noValueCB) {
                noValueCB();
            }
        });
        this.dialogOpenerRef = (comp, config) => this.dialog.open(comp, config);
        this.findLabelByItem = (item, arr, labelField, keyField = 'code') => {
            if (!item)
                return null;
            const obj = arr?.find((x) => x[keyField] == item);
            if (!obj)
                return item;
            else
                return `${item} - ${obj[labelField || 'title'] || obj[labelField || 'description']}`;
        };
        this.go = (value, extra) => {
            this.router.navigate([value], extra);
        };
        /**
         * Route to component
         * @param route Route of path to component
         * @param extra
         */
        this.goR = (route, extra) => {
            // if (!environment.activatedRoute) debugger;
            this.router.navigate([route], {
                relativeTo: HHenvironment.activatedRoute,
                ...extra,
            });
            // debugger;
        };
        /**
         * Route to the redirect component
         * @param route Absolute path to redirect to
         * @param config Configuration for the redirection
         */
        this.redirect = (route, config) => {
            // if (!environment.activatedRoute) debugger;
            const queryParams = { i: (config?.isExternal ? 1 : 0) || 0, r: route };
            if (config?.newTab)
                this.openInTab('/redirect', queryParams);
            else
                this.router.navigate([`/redirect`], {
                    relativeTo: HHenvironment.activatedRoute,
                    queryParams,
                });
            // debugger;
        };
        this.moneyParser = (amount, currency = HHenvironment.currency) => {
            if (amount == 'NaN' || amount == undefined || amount == null)
                return undefined;
            return this.currencyPipe.transform(amount, currency || ' ');
        };
        this.secondsToHourMinSec = (seconds) => {
            if (!seconds)
                return { secs: null, hours: null, mins: null };
            const hours = Math.floor(seconds / 3600) || 0, secondsExHours = seconds % 3600 || 0, mins = Math.floor(secondsExHours / 60) || 0, secs = secondsExHours % 60;
            return { hours, mins, secs };
        };
        this.minutesToDayHourMin = (minutes) => {
            if (!minutes)
                return { days: null, hours: null, mins: null };
            const days = Math.floor(minutes / 1440) || 0, miniutesExDays = minutes % 1440 || 0, hours = Math.floor(miniutesExDays / 60) || 0, mins = miniutesExDays % 60 || 0;
            return { days, hours, mins };
        };
        this.minutesToDayHourMinStr = (minutes) => {
            if (!minutes)
                return null;
            const ret = this.minutesToDayHourMin(minutes);
            return `${ret.days} ${ret.hours}:${ret.mins}`.trim();
        };
        this.minutesToDayHourMinStr2 = (minutes) => {
            if (!minutes)
                return null;
            const ret = this.minutesToDayHourMin(minutes);
            return `${ret.days}days ${ret.hours}hrs ${ret.mins}mins`.trim();
        };
        this.dayHourMinToHourMinutes = (dys, hrs, mins) => {
            if (!dys && !hrs && !mins)
                return '';
            const dysToHrs = (dys || 0) * 24;
            hrs = (+hrs || 0) + dysToHrs;
            return (hrs || '00') + ':' + (mins || '00');
        };
        this.disableOrEnableInputs = (controls, disable) => {
            if (disable)
                this.disableInputs(controls);
            else
                this.enableInputs(controls);
        };
        this.disableInputs = (controls) => {
            for (const control of controls) {
                control?.disable({ emitEvent: false });
            }
        };
        this.enableInputs = (controls) => {
            for (const control of controls) {
                control?.enable({ emitEvent: false });
            }
        };
        this.dayHourMinToMinutes = (dys, hrs, mins) => {
            if (!dys && !hrs && !mins)
                return 0;
            const dysToHrs = (dys || 0) * 24;
            hrs = (+hrs || 0) + dysToHrs;
            return (hrs || 0) * 60 + mins;
        };
        this.hourMinToMinutes = (hrs, mins) => {
            if (!hrs && !mins)
                return null;
            return (hrs || 0) * 60 + mins;
        };
        this.hourMinToMinutes2 = (hrsMins) => {
            const [hrs, mins] = hrsMins?.split(':') || [0, 0];
            return this.hourMinToMinutes(+hrs, +mins);
        };
        this.scrollToTop = (timeout = 100) => setTimeout(() => {
            document.querySelector('.ddd')?.scrollIntoView({ behavior: 'smooth' });
            // this.uS.scrollToTop();
        }, timeout);
        /**
         *
         * @returns The current date time local that can be used to set the datetime-local input
         */
        this.getLocalDateTimeNow = () => {
            const dt = new Date().toISOString().split('T');
            return dt[0] + 'T' + dt[1].split(':').slice(0, 2).join(':');
        };
        /** @returns The current date local that can be used to set the date input */
        this.localDateNow = () => {
            return new Date().toISOString().split('T')[0];
        };
        this.dateFormat = (date, format = 1) => {
            if (!date)
                return null;
            const d = new Date(date);
            if (format == 1) {
                return d.toDateString();
            }
            else if (format == 2) {
                return d.getDate() + ' ' + Config.Months[d.getMonth()];
            }
            else if (format == 3) {
                return d.toDateString() + ', ' + this.timeFormat(d.toLocaleTimeString());
            }
            else if (format == 4) {
                return Config.Months[d.getMonth()] + ' ' + d.getDate();
            }
            else {
                return '';
            }
        };
        this.toJavaDateString = (isoDateString = new Date().toISOString()) => {
            if (!isoDateString)
                return null;
            return `${isoDateString.slice(0, 19)}`;
            return `${isoDateString.slice(0, 10)} ${isoDateString.slice(11, 19)}`;
        };
        this.timeFormat = (time) => {
            const timeArr = time.split(' ');
            timeArr[0] = timeArr[0].split(':').splice(0, 2).join(':');
            return timeArr.join(' ');
        };
        /**
         * Fri Feb 03 2023, 23:59
         * @param timestamp
         * @returns
         */
        this.fullDateTime = (timestamp) => {
            // debugger
            return this.dateFormat(timestamp, 3);
        };
        /**
         *
         * @param timestamp
         * @returns
         */
        this.fullDateTimeLean = (timestamp) => {
            return this.customDatePipe.transform2(timestamp, 'dd/MM/yyyy hh:mm a');
        };
        this.dateFormatterUX = (date) => {
            if (!date)
                return undefined;
            return this.customDatePipe.transform(date, false);
        };
        this.dateFormatter = (date) => {
            return this.dateFormat(date, 1);
        };
        this.dateTimeFormatter = (date) => {
            return this.customDatePipe.transform(date, true);
        };
        this.daysFormatter = (days) => {
            if (!days) {
                return '-';
            }
            let yr, mt, dy, ret, _yr = 365, _mt = 30;
            if (days > _yr) {
                yr = Math.floor(days / _yr);
            }
            if (days > _mt) {
                mt = Math.floor((days % _yr) / _mt);
            }
            dy = (days % _yr) % _mt;
            ret = `${yr ? this.pluarlizer(yr, 'yr') : ''} ${mt ? this.pluarlizer(mt, 'mth') : ''} ${this.pluarlizer(dy, 'dy')}`;
            return ret;
        };
        this.monthsFormatter = (months) => {
            if (!months) {
                return '-';
            }
            let yr, mt, ret, _yr = 12;
            if (months > _yr) {
                yr = Math.floor(months / _yr);
            }
            mt = months % _yr;
            ret = `${yr ? this.pluarlizer(yr, 'yr') : ''} ${mt ? this.pluarlizer(mt, 'mth') : ''}`;
            return ret;
        };
        this.pluarlizer = (val, txt, plural) => {
            plural = plural || txt + 's';
            return val + (val == 1 ? txt : plural);
        };
        this.decimalToPercentage = (dec) => {
            return dec * 100 + '%';
        };
        this.logForm = (form) => {
            console.log('FORM', form, 'VALUES', form.value);
        };
        this.onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index;
        };
        /**
         * Delete null or undefined fields from an object
         * @param obj Object to delete from
         * @returns
         */
        this.deleteNull = (obj) => {
            for (const key in obj) {
                if (typeof obj[key] == 'object' && obj != null)
                    obj[key] = this.deleteNull(obj[key]);
                if (obj[key] === null || obj[key] === undefined || obj[key] === '')
                    delete obj[key];
            }
            if (!obj || !Object.keys(obj).length)
                return null;
            else
                return obj;
        };
        /**
         * Convert an object into textshowing the field and values
         * @param obj
         * @returns
         */
        this.objectToText = (obj) => {
            return Object.entries(this.deleteNull(cloneDeep(obj)))
                .map((r) => r[0] + ' ' + r[1])
                .join(' / ');
        };
        this.onRouteChange = (route, router, onRouteChangeCB) => router.events
            .pipe(tap((event) => {
            if (event instanceof NavigationStart) {
                HHenvironment.loading = true;
            }
            else if (event instanceof NavigationCancel) {
                HHenvironment.loading = false;
            }
        }), filter((event) => event instanceof NavigationEnd), tap((event) => {
            HHenvironment.loading = false;
        }), map(() => route), map((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            // debugger
            HHenvironment.activatedRoute = route;
            return route;
        }), filter((route) => route.outlet === 'primary'), mergeMap((route) => route.data))
            .subscribe((params) => {
            onRouteChangeCB(params);
        });
        this.confirm = this.confirmDialogService.confirm;
        this.track = this.mixPanelService.track;
        responsive.observe([Breakpoints.HandsetPortrait]).subscribe((result) => {
            const breakpoints = result.breakpoints;
            if (breakpoints[Breakpoints.HandsetPortrait]) {
                console.log('screens matches ' + Breakpoints.HandsetPortrait);
                this.isMobile = true;
                this.mobileQueryChanged.next(true);
            }
            else {
                this.isMobile = false;
                this.mobileQueryChanged.next(false);
            }
        });
    }
    onlyOneInput(inputs) {
        const nInputs = inputs?.map((inp) => ({ id: this.genRandomID, inp })) || [];
        merge(...nInputs.map((i) => i.inp.valueChanges.pipe(map((val) => ({ id: i.id, val }))))).subscribe((r) => {
            // debugger
            if (r.val)
                nInputs.filter((x) => x.id != r.id).forEach((x) => x.inp.disable({ emitEvent: false }));
            else
                nInputs.filter((x) => x.id != r.id).forEach((x) => x.inp.enable({ emitEvent: false }));
        });
    }
    async copyString(str) {
        try {
            const elem = document.createElement('textarea');
            elem.value = str;
            document.body.appendChild(elem);
            elem.select();
            document.execCommand('copy');
            document.body.removeChild(elem);
            this.notify('Copied');
        }
        catch (e) {
            console.error(e);
        }
    }
    async copyObject(payload) {
        try {
            return this.copyString(JSON.stringify(payload));
        }
        catch (e) {
            console.error(e);
        }
    }
    toTitleCase(text) {
        return this.titleCasePipe.transform(text);
    }
    /**
     * Set an Object's field if the object exists or don't if the object doesn't
     * @param obj Object holding the field
     * @param fieldName Name of the field to set
     * @param val Value to set the field with
     * @returns Returns the object holding the data
     */
    setterWithNull(obj, kvps) {
        if (!obj)
            return null;
        for (const key in kvps) {
            obj[key] = kvps[key];
        }
        return obj;
    }
    /**
     * (Set an Object's field if the object exists or don't if the object doesn't) for multiple entries
     * @param items Array of objects and their modifications
     */
    setterWithNullArray(items) {
        for (const item of items) {
            this.setterWithNull(item.obj, item.kvps);
        }
    }
    removeDuplicate(list, keyField = 'code') {
        if (!list)
            return null;
        list = list.filter((x) => x);
        const ret = [], duplicateMap = {};
        for (const item of list) {
            if (duplicateMap[item[keyField]])
                continue;
            ret.push(item);
            duplicateMap[item[keyField]] = item;
        }
        return ret;
    }
    get genRandomID() {
        return this.generateUUID();
        // return Math.round(Math.random() * 1000000000000000);
    }
    trackByCode(index, item) {
        return item?.code;
    }
    trackByID(index, item) {
        return item?.id;
    }
    /**
     * Open route in a new tab
     * @param route Route path
     */
    openInTab(route, queryParams) {
        // debugger;
        const _route = route + this.objectToQueryParams(queryParams);
        HHenvironment.isEmbedMode ? this.goR(route, { queryParams }) : window.open(_route, '_blank');
    }
    /**
     * Converts object to query parameters
     * @param parameters Query object
     * @returns
     */
    objectToQueryParams(parameters) {
        if (!parameters)
            return '';
        return ('?' +
            Object.keys(parameters)
                .filter((key) => parameters[key]?.toString()?.trim() != null)
                .map((key) => `${key}=${parameters[key]?.toString()?.trim()}`)
                .join('&'));
    }
    extractUpload(event) {
        return event.target.files || [];
    }
    notify(message, cls = 1, duration = 10000, title = 'x') {
        message = typeof message == 'string' ? message : cls == 0 ? 'An error occurred' : '';
        return this.snackBar.open(message, title, {
            duration,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: cls == 1
                ? 'text-success'
                : cls == 2
                    ? 'text-info'
                    : cls == 3
                        ? 'text-warning'
                        : 'text-danger',
        });
    }
    toCSV(data, headerNames, filename) {
        const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
        let csv = data.map((row) => headerNames.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(','));
        csv.unshift(headerNames.join(','));
        let csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        saveAs(blob, filename + '.csv');
    }
    isPictureFormat(fileName) {
        if (!fileName)
            return false;
        const PICTURE_FORMATS = ['.jpg', '.jpeg', '.png', '.gif'];
        return PICTURE_FORMATS.some((format) => fileName.endsWith(format));
    }
    objectToArray(obj) {
        const ret = [];
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                ret.push(obj[key]);
            }
        }
        return ret;
    }
    /**
     * Download file from link
     * @param url Link to download file
     * @param filename Name of file including extension
     */
    async downloadFromLink(url, filename) {
        console.log('download link', url);
        // debugger
        let downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.target = '_blank';
        downloadLink.setAttribute('download', filename);
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
    exportHTMLToPDF(content, fileName, config) {
        return html2canvas(content).then(async (canvas) => {
            let fileWidth = config?.width;
            let fileHeight = config?.height || (canvas.height * fileWidth) / canvas.width;
            // fileHeight = canvas.height
            // fileWidth = canvas.width
            // debugger
            console.log(canvas.width, canvas.height, [fileWidth, fileHeight]);
            const FILEURI = canvas.toDataURL('image/png', 1);
            let PDF = new jsPDF(config?.orientation || 'p', 'px', [fileWidth, fileHeight], true);
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            return await PDF.save(fileName + '.pdf', {
                returnPromise: true,
            });
        });
    }
    async exportHTMLsToPDF(contents, fileName, config) {
        if (!contents)
            return;
        let PDF = new jsPDF(config?.orientation || 'p', 'px');
        let position = 0;
        await Promise.all(contents.map((el, i) => {
            const content = el.nativeElement;
            return html2canvas(content).then(async (canvas) => {
                let fileWidth = config?.width;
                let fileHeight = config?.height || (canvas.height * fileWidth) / canvas.width;
                console.log(canvas.width, canvas.height, [fileWidth, fileHeight]);
                const FILEURI = canvas.toDataURL('image/png', 1);
                PDF.addPage();
                PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            });
        }));
        return await PDF.save(fileName + '.pdf', {
            returnPromise: true,
        });
    }
    arrayToCSV(data, filename, headerMap) {
        const csv = Papa.unparse(data, {
            header: false,
            columns: headerMap?.map((x) => x.f?.toString()),
        });
        this.downloader(headerMap.map((fieldName) => fieldName.t).join(',') + `\r\n` + csv, filename?.endsWith('.csv') ? filename : filename + '.csv');
    }
    noAccessNotify() {
        this.notify(`Sorry, you don't have access to the module`, 0);
    }
    addDaysToDate(days, date) {
        if (!date)
            return undefined;
        return new Date(new Date(date).getTime() + Config.TimeStampDay * +days)
            .toISOString()
            .split('T')[0];
    }
    validatePhonenumber(control) {
        return control.value?.startsWith('0')
            ? /^\d+$/.test(control?.value)
                ? null
                : { custom: `Telephone number must be in digits` }
            : { custom: `Telephone number must start with 0 and 11 digits` };
    }
    get genPhoneNumber() {
        return ('0' +
            new Array(10)
                .fill(1)
                .map((x) => Math.round(Math.random() * 9))
                .join(''));
    }
    generateUUID() {
        let d = new Date().getTime();
        let d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16; //random number between 0 and 16
            if (d > 0) {
                //Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            }
            else {
                //Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityService, deps: [{ token: i1.MatDialog }, { token: i2.MatSnackBar }, { token: i3.Router }, { token: i4.Title }, { token: i5.Location }, { token: i5.DecimalPipe }, { token: i5.CurrencyPipe }, { token: i5.TitleCasePipe }, { token: i6.CustomDatePipe }, { token: i7.ConfirmDialogService }, { token: i8.MixPanelService }, { token: i9.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }, { type: i2.MatSnackBar }, { type: i3.Router }, { type: i4.Title }, { type: i5.Location }, { type: i5.DecimalPipe }, { type: i5.CurrencyPipe }, { type: i5.TitleCasePipe }, { type: i6.CustomDatePipe }, { type: i7.ConfirmDialogService }, { type: i8.MixPanelService }, { type: i9.BreakpointObserver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBYyxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFPbEUsT0FBTyxFQUlMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sR0FBRyxNQUFNLGtCQUFrQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBeUIsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0YsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFDN0IsT0FBTyxFQUFzQixXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFRdEUsTUFBTSxPQUFPLGNBQWM7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QUMsMERBQTBEO1FBQ3RKLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25FLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7WUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNULDhCQUE4QjtnQkFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCwrQ0FBK0M7Z0JBQy9DLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQXh6QlUsY0FBYztrSEFBZCxjQUFjLGNBRmIsTUFBTTs7MkZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXJyZW5jeVBpcGUsIERlY2ltYWxQaXBlLCBMb2NhdGlvbiwgVGl0bGVDYXNlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERpYWxvZyBhcyBNYXREaWFsb2csXG4gIE1hdERpYWxvZ0NvbmZpZyBhcyBNYXREaWFsb2dDb25maWcsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgUm91dGVyLFxuICBOYXZpZ2F0aW9uRXh0cmFzLFxuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgTmF2aWdhdGlvbkNhbmNlbCxcbiAgTmF2aWdhdGlvbkVuZCxcbiAgTmF2aWdhdGlvblN0YXJ0LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IGpmZCBmcm9tICdqcy1maWxlLWRvd25sb2FkJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBISGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgVW50eXBlZEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFVmFsaWRhdGlvblR5cGUsIEN1c3RvbVZhbGlkYXRpb25FcnJvciwgRVBlcmlvZCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvaW5kZXgubW9kZWwnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgTWl4UGFuZWxTZXJ2aWNlIH0gZnJvbSAnLi9taXgtcGFuZWwuc2VydmljZSc7XG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVDb2wgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy90YWJsZS1wbGFpbi90YWJsZS5tb2RlbCc7XG5pbXBvcnQgeyBDdXN0b21EYXRlUGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy91dGlsaXR5LnBpcGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xuICBjb25maWcgPSBDb25maWc7XG4gIGRvd25sb2FkZXIgPSBqZmQ7XG4gICQgPSAkO1xuICBlVmFsaWRhdGlvblR5cGUgPSBFVmFsaWRhdGlvblR5cGU7XG4gIGVQZXJpb2QgPSBFUGVyaW9kO1xuICBlbnZpcm9ubWVudCA9IEhIZW52aXJvbm1lbnQ7XG4gIC8qKlxuICAgKiBFbWl0cyB0cnVlIGlmIG1vYmlsZVxuICAgKi9cbiAgbW9iaWxlUXVlcnlDaGFuZ2VkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgaXNNb2JpbGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyB0aXRsZVM6IFRpdGxlLFxuICAgIHB1YmxpYyBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHVibGljIG51bWJlclBpcGU6IERlY2ltYWxQaXBlLFxuICAgIHB1YmxpYyBjdXJyZW5jeVBpcGU6IEN1cnJlbmN5UGlwZSxcbiAgICBwdWJsaWMgdGl0bGVDYXNlUGlwZTogVGl0bGVDYXNlUGlwZSxcbiAgICBwdWJsaWMgY3VzdG9tRGF0ZVBpcGU6IEN1c3RvbURhdGVQaXBlLFxuICAgIHB1YmxpYyBjb25maXJtRGlhbG9nU2VydmljZTogQ29uZmlybURpYWxvZ1NlcnZpY2UsXG4gICAgcHVibGljIG1peFBhbmVsU2VydmljZTogTWl4UGFuZWxTZXJ2aWNlLFxuICAgIHB1YmxpYyByZXNwb25zaXZlOiBCcmVha3BvaW50T2JzZXJ2ZXJcbiAgKSB7XG4gICAgcmVzcG9uc2l2ZS5vYnNlcnZlKFtCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXRdKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgYnJlYWtwb2ludHMgPSByZXN1bHQuYnJlYWtwb2ludHM7XG5cbiAgICAgIGlmIChicmVha3BvaW50c1tCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXRdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JlZW5zIG1hdGNoZXMgJyArIEJyZWFrcG9pbnRzLkhhbmRzZXRQb3J0cmFpdCk7XG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vYmlsZVF1ZXJ5Q2hhbmdlZC5uZXh0KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vYmlsZVF1ZXJ5Q2hhbmdlZC5uZXh0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJhY2sgPSAoKSA9PiB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgaW1hZ2VUeXBlczogeyBbdHlwZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge1xuICAgICdpbWFnZS9hcG5nJzogdHJ1ZSxcbiAgICAnaW1hZ2UvYXZpZic6IHRydWUsXG4gICAgJ2ltYWdlL2dpZic6IHRydWUsXG4gICAgJ2ltYWdlL2pwZWcnOiB0cnVlLFxuICAgICdpbWFnZS9wbmcnOiB0cnVlLFxuICAgICdpbWFnZS9zdmcreG1sJzogdHJ1ZSxcbiAgICAnaW1hZ2Uvd2VicCc6IHRydWUsXG4gIH07XG4gIG9ubHlPbmVJbnB1dChpbnB1dHM6IEZvcm1Db250cm9sW10pIHtcbiAgICBjb25zdCBuSW5wdXRzID0gaW5wdXRzPy5tYXAoKGlucCkgPT4gKHsgaWQ6IHRoaXMuZ2VuUmFuZG9tSUQsIGlucCB9KSkgfHwgW107XG4gICAgbWVyZ2UoXG4gICAgICAuLi5uSW5wdXRzLm1hcCgoaSkgPT4gaS5pbnAudmFsdWVDaGFuZ2VzLnBpcGUobWFwKCh2YWwpID0+ICh7IGlkOiBpLmlkLCB2YWwgfSkpKSlcbiAgICApLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIGlmIChyLnZhbClcbiAgICAgICAgbklucHV0cy5maWx0ZXIoKHgpID0+IHguaWQgIT0gci5pZCkuZm9yRWFjaCgoeCkgPT4geC5pbnAuZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSkpO1xuICAgICAgZWxzZSBuSW5wdXRzLmZpbHRlcigoeCkgPT4geC5pZCAhPSByLmlkKS5mb3JFYWNoKCh4KSA9PiB4LmlucC5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNvcHlTdHJpbmcoc3RyOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBlbGVtLnZhbHVlID0gc3RyO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgIGVsZW0uc2VsZWN0KCk7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgIHRoaXMubm90aWZ5KCdDb3BpZWQnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvcHlPYmplY3QocGF5bG9hZDogT2JqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLmNvcHlTdHJpbmcoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIHhPclkgPSAoeCwgeSA9ICctJykgPT4gYCR7eCA9PSBudWxsID8geSA6IHh9YDtcbiAgdG9UaXRsZUNhc2UodGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVDYXNlUGlwZS50cmFuc2Zvcm0odGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBEYXRlIHN0cmluZyB0byBEYXRlIFRpbWUgc3RyaW5nXG4gICAqIEBwYXJhbSBkYXRlU3RyIERhdGUgc3RyaW5nXG4gICAqIEBleGFtcGxlICcyMDIyLTAxLTI1J1xuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBjb252ZXJzaW9uXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBEYXRlIFRpbWUgc3RyaW5nXG4gICAqIEBleGFtcGxlICcyMDIyLTAxLTI1VDAwOjAwOjAwWicgb3IgJzIwMjItMDEtMjUgMDA6MDA6MDAnXG4gICAqL1xuICBkYXRlVG9EYXRlVGltZSA9IChcbiAgICBkYXRlU3RyOiBzdHJpbmcsXG4gICAgY29uZmlnPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBVc2UgdGhlIHl5eXktbW0tZGQgaGg6bW06c3MgZm9ybWF0XG4gICAgICAgKi9cbiAgICAgIG9taXRUPzogYm9vbGVhbjtcbiAgICB9XG4gICkgPT4ge1xuICAgIGNvbnN0IG9taXRUID0gISFjb25maWc/Lm9taXRUO1xuICAgIGlmICghZGF0ZVN0cikgcmV0dXJuIG51bGw7XG4gICAgaWYgKGRhdGVTdHIuaW5jbHVkZXMoJ1QnKSkgcmV0dXJuIGRhdGVTdHI7XG4gICAgcmV0dXJuIGRhdGVTdHIgKyAob21pdFQgPyAnIDAwOjAwOjAwJyA6ICdUMDA6MDA6MDBaJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBhbiBPYmplY3QncyBmaWVsZCBpZiB0aGUgb2JqZWN0IGV4aXN0cyBvciBkb24ndCBpZiB0aGUgb2JqZWN0IGRvZXNuJ3RcbiAgICogQHBhcmFtIG9iaiBPYmplY3QgaG9sZGluZyB0aGUgZmllbGRcbiAgICogQHBhcmFtIGZpZWxkTmFtZSBOYW1lIG9mIHRoZSBmaWVsZCB0byBzZXRcbiAgICogQHBhcmFtIHZhbCBWYWx1ZSB0byBzZXQgdGhlIGZpZWxkIHdpdGhcbiAgICogQHJldHVybnMgUmV0dXJucyB0aGUgb2JqZWN0IGhvbGRpbmcgdGhlIGRhdGFcbiAgICovXG4gIHNldHRlcldpdGhOdWxsPFQ+KG9iajogVCwga3ZwczogUGFydGlhbDxUPikge1xuICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBrdnBzKSB7XG4gICAgICBvYmpba2V5XSA9IGt2cHNba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiAoU2V0IGFuIE9iamVjdCdzIGZpZWxkIGlmIHRoZSBvYmplY3QgZXhpc3RzIG9yIGRvbid0IGlmIHRoZSBvYmplY3QgZG9lc24ndCkgZm9yIG11bHRpcGxlIGVudHJpZXNcbiAgICogQHBhcmFtIGl0ZW1zIEFycmF5IG9mIG9iamVjdHMgYW5kIHRoZWlyIG1vZGlmaWNhdGlvbnNcbiAgICovXG4gIHNldHRlcldpdGhOdWxsQXJyYXk8VD4oaXRlbXM6IHsgb2JqOiBUOyBrdnBzOiBQYXJ0aWFsPFQ+IH1bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgdGhpcy5zZXR0ZXJXaXRoTnVsbChpdGVtLm9iaiwgaXRlbS5rdnBzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZGVsZXRpb24gb2Ygcm93cyBmcm9tIGEgRm9ybUFycmF5XG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgKiBAcGFyYW0gZmEgVGhlIEZvcm1BcnJheSB0aGF0IGhvbGRzIHRoZSByb3dzXG4gICAqIEBwYXJhbSBkZWxldGVTZXJ2aWNlIFRoZSBkZWxldGlvbiBzZXJ2aWNlIHRvIGJlIGNhbGxlZCAoSXQgc2hvdWxkIGJlIGFuIGFub255bW91cyBmdW5jdGlvbilcbiAgICogQHBhcmFtIGFkZFJvd0Z1bmMgVGhlIGZ1bmN0aW9uIChhbm9ueW1vdXMpIHRoYXQgYWRkcyBhIG5ldyByb3cgdG8gdGhlIEZvcm1BcnJheVxuICAgKiBAcGFyYW0gZW1pdEV2ZW50IFNwZWNpZnkgd2hldGhlciB0byBlbWl0IGFuIGV2ZW50IHdoZW4gbWFuaXB1bGF0aW5nIHRoZSBGb3JtQXJyYXlcbiAgICogQHJldHVybnNcbiAgICovXG4gIGhhbmRsZUZvcm1Sb3dEZWxldGUgPSAoXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBmYTogVW50eXBlZEZvcm1BcnJheSxcbiAgICBkZWxldGVTZXJ2aWNlOiAoLi4uYXJncykgPT4gUHJvbWlzZTxhbnk+IHwgT2JzZXJ2YWJsZTxhbnk+LFxuICAgIGFkZFJvd0Z1bmM6ICguLi5hcmdzKSA9PiBhbnksXG4gICAgZW1pdEV2ZW50ID0gdHJ1ZVxuICApID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55Pigoc3ViKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGNsb25lRGVlcChmYS5jb250cm9sc1tpbmRleF0/LnZhbHVlPy5pZCk7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIGlmIChmYS5jb250cm9scy5sZW5ndGggPT0gMSAmJiBpZCkge1xuICAgICAgICBmYS5yZW1vdmVBdChpbmRleCwgeyBlbWl0RXZlbnQgfSk7XG4gICAgICAgIGFkZFJvd0Z1bmMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZmEuY29udHJvbHMubGVuZ3RoID4gMSkgZmEucmVtb3ZlQXQoaW5kZXgsIHsgZW1pdEV2ZW50IH0pO1xuICAgICAgZWxzZSBpZiAoZmEuY29udHJvbHMubGVuZ3RoID09IDEpIGZhLmNvbnRyb2xzWzBdLnJlc2V0KCk7XG5cbiAgICAgIGlmIChpZCAmJiBkZWxldGVTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnN0IHJlcSA9IGRlbGV0ZVNlcnZpY2UoaWQpO1xuICAgICAgICBpZiAocmVxWyd0b1Byb21pc2UnXSkge1xuICAgICAgICAgIHN1YihyZXFbJ3RvUHJvbWlzZSddKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1YihyZXEgYXMgYW55KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ViKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvcm1hdENvdW50ID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFudW0pIHtcbiAgICAgIHJldHVybiAwICsgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGh1bmRyZWRzXG4gICAgICBpZiAobnVtIDw9IDk5OSkge1xuICAgICAgICByZXR1cm4gbnVtICsgJyc7XG4gICAgICB9XG4gICAgICAvLyB0aG91c2FuZHNcbiAgICAgIGVsc2UgaWYgKG51bSA+PSAxMDAwICYmIG51bSA8PSA5OTk5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlclBpcGUudHJhbnNmb3JtKG51bSAvIDEwMDAsICcxLjAtMycpICsgJ0snO1xuICAgICAgfSBlbHNlIGlmIChudW0gPj0gMTAwMDAgJiYgbnVtIDw9IDk5OTk5OSkge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybShudW0gLyAxMDAwLCAnMS4wLTEnKSArICdLJztcbiAgICAgIH1cbiAgICAgIC8vIG1pbGxpb25zXG4gICAgICBlbHNlIGlmIChudW0gPj0gMTAwMDAwMCAmJiBudW0gPD0gOTk5OTk5OSkge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybShudW0gLyAxMDAwMDAwLCAnMS4wLTMnKSArICdNJztcbiAgICAgIH0gZWxzZSBpZiAobnVtID49IDEwMDAwMDAwICYmIG51bSA8PSA5OTk5OTk5OTkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyUGlwZS50cmFuc2Zvcm0obnVtIC8gMTAwMDAwMCwgJzEuMC0xJykgKyAnTSc7XG4gICAgICB9XG4gICAgICAvLyBiaWxsaW9uc1xuICAgICAgZWxzZSBpZiAobnVtID49IDEwMDAwMDAwMDAgJiYgbnVtIDw9IDk5OTk5OTk5OTk5OSkge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybShudW0gLyAxMDAwMDAwMDAwLCAnMS4wLTMnKSArICdCJztcbiAgICAgIH0gZWxzZSByZXR1cm4gbnVtICsgJyc7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZGVsZXRpb24gb2Ygcm93cyBmcm9tIGFuIGFycmF5XG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0aGF0IGhvbGRzIHRoZSByb3dzXG4gICAqIEBwYXJhbSBkZWxldGVTZXJ2aWNlIFRoZSBkZWxldGlvbiBzZXJ2aWNlIHRvIGJlIGNhbGxlZCAoSXQgc2hvdWxkIGJlIGFuIGFub255bW91cyBmdW5jdGlvbilcbiAgICogQHBhcmFtIGFkZFJvd0Z1bmMgVGhlIGZ1bmN0aW9uIChhbm9ueW1vdXMpIHRoYXQgYWRkcyBhIG5ldyByb3cgdG8gdGhlIGFycmF5XG4gICAqIEBwYXJhbSBjYiBUaGUgZnVuY3Rpb24gdG8gY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2Ugb2YgdGhlIGRlbGV0aW9uIHNlcnZpY2UgYXMgdGhlIGlucHV0IHBhcmFtZXRlclxuICAgKi9cbiAgaGFuZGxlUm93RGVsZXRlID0gYXN5bmMgPFQ+KFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgYXJyOiBhbnlbXSxcbiAgICBkZWxldGVTZXJ2aWNlOiAoLi4uYXJncykgPT4gUHJvbWlzZTxUPiB8IE9ic2VydmFibGU8VD4sXG4gICAgYWRkUm93RnVuYzogKC4uLmFyZ3MpID0+IGFueSxcbiAgICBjYj86IChhbnkpID0+IGFueVxuICApID0+IHtcbiAgICBjb25zdCBpZCA9IGFycltpbmRleF0/LmlkO1xuICAgIC8vIGRlYnVnZ2VyO1xuXG4gICAgaWYgKGlkICYmIGRlbGV0ZVNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IHJlcSA9IGRlbGV0ZVNlcnZpY2UoaWQpO1xuICAgICAgaWYgKHR5cGVvZiByZXFbJ3RvUHJvbWlzZSddID09ICdmdW5jdGlvbicpXG4gICAgICAgIGNiID8gY2IoYXdhaXQgcmVxWyd0b1Byb21pc2UnXSgpKSA6IHJlcVsndG9Qcm9taXNlJ10oKTtcbiAgICAgIGVsc2UgY2IgPyBjYihhd2FpdCByZXEpIDogbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoYXJyLmxlbmd0aCA9PSAxKSB7XG4gICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGFkZFJvd0Z1bmMoKTtcbiAgICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPiAxKSBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICAvKipcbiAgICogVG8gaGFuZGxlIHRoZSBwYXRjaGluZyBvZiBhIEZvcm1BcnJheVxuICAgKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhXG4gICAqIEBwYXJhbSBhZGRGdW5jIFRoZSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIGFkZGl0aW9uIG9mIHNpbmdsZSBlbnRyaWVzXG4gICAqIEBwYXJhbSBmb3JtQXJyIFRoZSBGb3JtQXJyYXkgdGhhdCB3aWxsIGhvbGQgdGhlIGFycmF5J3MgZGF0YVxuICAgKi9cbiAgaW5pdFBhdGNoRm9ybUFycmF5ID0gKFxuICAgIGFycjogYW55W10sXG4gICAgYWRkRnVuYzogKGk6IG51bWJlciwgZGF0YT86IGFueSwgZm9ybUFycj86IEZvcm1BcnJheSkgPT4gdm9pZCxcbiAgICBmb3JtQXJyOiBGb3JtQXJyYXlcbiAgKSA9PiB7XG4gICAgLy8gZGVidWdnZXJcbiAgICBpZiAoYXJyPy5sZW5ndGgpIHtcbiAgICAgIGlmIChmb3JtQXJyLmxlbmd0aCkgZm9ybUFyci5jbGVhcigpO1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICBhZGRGdW5jKGZvcm1BcnIubGVuZ3RoLCBpdGVtLCBmb3JtQXJyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFmb3JtQXJyLmxlbmd0aCkgYWRkRnVuYyhmb3JtQXJyLmxlbmd0aCwgbnVsbCwgZm9ybUFycik7XG4gICAgfVxuICB9O1xuICBwcml2YXRlIGlzUHJvbWlzZSA9IChmdW5jKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZnVuYy50aGVuID09PSAnZnVuY3Rpb24nO1xuICB9O1xuICBpc0FzeW5jID0gKGZ1bmMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgZnVuYy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXN5bmNGdW5jdGlvbicgfHxcbiAgICAgICh0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmlzUHJvbWlzZShmdW5jKCkpKVxuICAgICk7XG4gIH07XG5cbiAgaXNPYnNlcnZhYmxlID0gPFQ+KGZ1bmMpID0+IHtcbiAgICAvLyByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBmdW5jLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAvLyByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdvYmplY3QnICYmIGZ1bmMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlO1xuICAgIC8vIHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ29iamVjdCcgJiYgZnVuYyBpbnN0YW5jZW9mIE9ic2VydmFibGU8VD47XG4gICAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnb2JqZWN0JyAmJiBpc09ic2VydmFibGUoZnVuYyk7XG4gICAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZnVuYy50b1Byb21pc2UgPT09ICdmdW5jdGlvbic7XG4gIH07XG4gIHByb21pc2lmeVZhbCA9IDxUPih2YWw6IFQgfCBQcm9taXNlPFQ+IHwgT2JzZXJ2YWJsZTxUPikgPT4ge1xuICAgIGlmICh0aGlzLmlzQXN5bmModmFsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWwgYXMgUHJvbWlzZTxUPik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzT2JzZXJ2YWJsZSh2YWwpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCh2YWwgYXMgT2JzZXJ2YWJsZTxUPikudG9Qcm9taXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbCBhcyBUKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhcnIgQXJyYXkgb2Ygb2JzZXJ2YWJsZXMgdG8gZmV0Y2hcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdGhlIHJlc3BvbnNlcyBtZXJnZWQgdG9nZXRoZXIuIEl0IGVtaXRzIHRoZSBtZXJnZWQgcmVzcG9uc2VzIGFzIHRoZXkgYXJlIGZldGNoZWQgYW5kIGNsb3NlcyBvbmNlIGFsbGwgdGhlIHJlc3BvbnNlcyBoYXZlIGJlZW4gZmV0Y2hlZFxuICAgKi9cbiAgbWVyZ2VBcnJPYnNlcnZhYmxlcyA9IDxUPihhcnI6IHsgJGZ1bmM6IE9ic2VydmFibGU8VFtdPiB9W10pID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VFtdPigoc3ViKSA9PiB7XG4gICAgICBjb25zdCByZXQ6IFRbXSA9IFtdO1xuICAgICAgbGV0IHJlc3BvbnNlQ291bnQgPSAwO1xuICAgICAgbWVyZ2UoXG4gICAgICAgIC4uLmFyci5tYXAoKHgpID0+XG4gICAgICAgICAgeC4kZnVuYz8ucGlwZShcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFwKChyKSA9PiB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlQ291bnQrKztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICByZXQucHVzaCguLi5yKTtcbiAgICAgICAgc3ViLm5leHQocmV0KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlQ291bnQgPT0gYXJyLmZpbHRlcigoeCkgPT4geC4kZnVuYykubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICBzdWIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJlbW92ZUR1cGxpY2F0ZTxUPihsaXN0OiBUW10sIGtleUZpZWxkID0gJ2NvZGUnKSB7XG4gICAgaWYgKCFsaXN0KSByZXR1cm4gbnVsbDtcbiAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKHgpID0+IHgpO1xuICAgIGNvbnN0IHJldDogVFtdID0gW10sXG4gICAgICBkdXBsaWNhdGVNYXA6IHsgW3g6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmIChkdXBsaWNhdGVNYXBbaXRlbVtrZXlGaWVsZF1dKSBjb250aW51ZTtcbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgICAgZHVwbGljYXRlTWFwW2l0ZW1ba2V5RmllbGRdXSA9IGl0ZW07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgZ2V0IGdlblJhbmRvbUlEKCkge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpO1xuICAgIC8vIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwMDAwKTtcbiAgfVxuXG4gIG9iaklzRW1wdHkgPSAob2JqLCBleGNsdXNpb25GaWVsZHM/OiBzdHJpbmdbXSkgPT4ge1xuICAgIGlmICghb2JqKSByZXR1cm4gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChleGNsdXNpb25GaWVsZHM/LmluY2x1ZGVzKGtleSkpIGNvbnRpbnVlO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgaWYgKG9ialtrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBkYXRhR2VuID0gPFQgPSBhbnk+KGtleXM6IHN0cmluZ1tdLCBsZW5ndGggPSAxMCkgPT4ge1xuICAgIGNvbnN0IHJldDogYW55W10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdDogYW55ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIHRba2V5XSA9IHRoaXMudGV4dEdlbigpO1xuICAgICAgfVxuICAgICAgcmV0LnB1c2godCk7XG4gICAgfVxuICAgIHJldHVybiByZXQgYXMgVFtdO1xuICB9O1xuICB0ZXh0R2VuID0gKCkgPT4gJ3JhbmRvbScgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgdHJhY2tCeUNvZGUoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIGl0ZW0/LmNvZGU7XG4gIH1cbiAgdHJhY2tCeUlEKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkge1xuICAgIHJldHVybiBpdGVtPy5pZDtcbiAgfVxuICBkaWFsb2dPcGVuZXIgPSAoY29tcDogYW55LCBjb25maWc6IE1hdERpYWxvZ0NvbmZpZywgdmFsdWVDQjogKHIpID0+IGFueSwgbm9WYWx1ZUNCPzogYW55KSA9PlxuICAgIHRoaXMuZGlhbG9nT3BlbmVyUmVmKGNvbXAsIGNvbmZpZylcbiAgICAgIC5hZnRlckNsb3NlZCgpXG4gICAgICAuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICAgIGlmIChyICE9IG51bGwgJiYgciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWx1ZUNCKHIpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vVmFsdWVDQikge1xuICAgICAgICAgIG5vVmFsdWVDQigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgZGlhbG9nT3BlbmVyUmVmID0gKGNvbXA6IGFueSwgY29uZmlnOiBNYXREaWFsb2dDb25maWcpID0+IHRoaXMuZGlhbG9nLm9wZW4oY29tcCwgY29uZmlnKTtcbiAgZmluZExhYmVsQnlJdGVtID0gKGl0ZW0sIGFycjogYW55W10sIGxhYmVsRmllbGQ/OiBzdHJpbmcsIGtleUZpZWxkOiBzdHJpbmcgPSAnY29kZScpID0+IHtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG9iaiA9IGFycj8uZmluZCgoeCkgPT4geFtrZXlGaWVsZF0gPT0gaXRlbSk7XG4gICAgaWYgKCFvYmopIHJldHVybiBpdGVtO1xuICAgIGVsc2UgcmV0dXJuIGAke2l0ZW19IC0gJHtvYmpbbGFiZWxGaWVsZCB8fCAndGl0bGUnXSB8fCBvYmpbbGFiZWxGaWVsZCB8fCAnZGVzY3JpcHRpb24nXX1gO1xuICB9O1xuXG4gIGdvID0gKHZhbHVlOiBzdHJpbmcsIGV4dHJhPzogTmF2aWdhdGlvbkV4dHJhcykgPT4ge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt2YWx1ZV0sIGV4dHJhKTtcbiAgfTtcbiAgLyoqXG4gICAqIFJvdXRlIHRvIGNvbXBvbmVudFxuICAgKiBAcGFyYW0gcm91dGUgUm91dGUgb2YgcGF0aCB0byBjb21wb25lbnRcbiAgICogQHBhcmFtIGV4dHJhXG4gICAqL1xuICBnb1IgPSAocm91dGU6IHN0cmluZywgZXh0cmE/OiBOYXZpZ2F0aW9uRXh0cmFzKSA9PiB7XG4gICAgLy8gaWYgKCFlbnZpcm9ubWVudC5hY3RpdmF0ZWRSb3V0ZSkgZGVidWdnZXI7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSwge1xuICAgICAgcmVsYXRpdmVUbzogSEhlbnZpcm9ubWVudC5hY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIC4uLmV4dHJhLFxuICAgIH0pO1xuICAgIC8vIGRlYnVnZ2VyO1xuICB9O1xuICAvKipcbiAgICogUm91dGUgdG8gdGhlIHJlZGlyZWN0IGNvbXBvbmVudFxuICAgKiBAcGFyYW0gcm91dGUgQWJzb2x1dGUgcGF0aCB0byByZWRpcmVjdCB0b1xuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSByZWRpcmVjdGlvblxuICAgKi9cbiAgcmVkaXJlY3QgPSAoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBjb25maWc/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZnkgaWYgdGhlIHJlZGlyZWN0IHJvdXRlIGlzIGFuIGFwcCByb3V0ZSBvciBleHRlcm5hbCByb3V0ZVxuICAgICAgICovXG4gICAgICBpc0V4dGVybmFsPzogYm9vbGVhbjtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmeSBpZiB0byBvcGVuIGluIGEgbmV3IHRhYiBvciBjdXJyZW50IHRhYlxuICAgICAgICovXG4gICAgICBuZXdUYWI/OiBib29sZWFuO1xuICAgIH1cbiAgKSA9PiB7XG4gICAgLy8gaWYgKCFlbnZpcm9ubWVudC5hY3RpdmF0ZWRSb3V0ZSkgZGVidWdnZXI7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IGk6IChjb25maWc/LmlzRXh0ZXJuYWwgPyAxIDogMCkgfHwgMCwgcjogcm91dGUgfTtcbiAgICBpZiAoY29uZmlnPy5uZXdUYWIpIHRoaXMub3BlbkluVGFiKCcvcmVkaXJlY3QnLCBxdWVyeVBhcmFtcyk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvcmVkaXJlY3RgXSwge1xuICAgICAgICByZWxhdGl2ZVRvOiBISGVudmlyb25tZW50LmFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIH0pO1xuICAgIC8vIGRlYnVnZ2VyO1xuICB9O1xuICAvKipcbiAgICogT3BlbiByb3V0ZSBpbiBhIG5ldyB0YWJcbiAgICogQHBhcmFtIHJvdXRlIFJvdXRlIHBhdGhcbiAgICovXG4gIG9wZW5JblRhYihyb3V0ZTogc3RyaW5nLCBxdWVyeVBhcmFtcz86IHsgW3g6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9KSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgY29uc3QgX3JvdXRlID0gcm91dGUgKyB0aGlzLm9iamVjdFRvUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICAgIEhIZW52aXJvbm1lbnQuaXNFbWJlZE1vZGUgPyB0aGlzLmdvUihyb3V0ZSwgeyBxdWVyeVBhcmFtcyB9KSA6IHdpbmRvdy5vcGVuKF9yb3V0ZSwgJ19ibGFuaycpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBvYmplY3QgdG8gcXVlcnkgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyBRdWVyeSBvYmplY3RcbiAgICogQHJldHVybnNcbiAgICovXG4gIG9iamVjdFRvUXVlcnlQYXJhbXMocGFyYW1ldGVycz86IE9iamVjdCkge1xuICAgIGlmICghcGFyYW1ldGVycykgcmV0dXJuICcnO1xuICAgIHJldHVybiAoXG4gICAgICAnPycgK1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBwYXJhbWV0ZXJzW2tleV0/LnRvU3RyaW5nKCk/LnRyaW0oKSAhPSBudWxsKVxuICAgICAgICAubWFwKChrZXkpID0+IGAke2tleX09JHtwYXJhbWV0ZXJzW2tleV0/LnRvU3RyaW5nKCk/LnRyaW0oKX1gKVxuICAgICAgICAuam9pbignJicpXG4gICAgKTtcbiAgfVxuICBtb25leVBhcnNlciA9IChhbW91bnQ6IHN0cmluZyB8IG51bWJlciwgY3VycmVuY3kgPSBISGVudmlyb25tZW50LmN1cnJlbmN5KSA9PiB7XG4gICAgaWYgKGFtb3VudCA9PSAnTmFOJyB8fCBhbW91bnQgPT0gdW5kZWZpbmVkIHx8IGFtb3VudCA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbmN5UGlwZS50cmFuc2Zvcm0oYW1vdW50LCBjdXJyZW5jeSB8fCAnICcpO1xuICB9O1xuICBleHRyYWN0VXBsb2FkKGV2ZW50OiBhbnkpIHtcbiAgICByZXR1cm4gKGV2ZW50LnRhcmdldC5maWxlcyBhcyBGaWxlW10pIHx8IFtdO1xuICB9XG5cbiAgc2Vjb25kc1RvSG91ck1pblNlYyA9IChzZWNvbmRzOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXNlY29uZHMpIHJldHVybiB7IHNlY3M6IG51bGwsIGhvdXJzOiBudWxsLCBtaW5zOiBudWxsIH07XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKSB8fCAwLFxuICAgICAgc2Vjb25kc0V4SG91cnMgPSBzZWNvbmRzICUgMzYwMCB8fCAwLFxuICAgICAgbWlucyA9IE1hdGguZmxvb3Ioc2Vjb25kc0V4SG91cnMgLyA2MCkgfHwgMCxcbiAgICAgIHNlY3MgPSBzZWNvbmRzRXhIb3VycyAlIDYwO1xuICAgIHJldHVybiB7IGhvdXJzLCBtaW5zLCBzZWNzIH07XG4gIH07XG4gIG1pbnV0ZXNUb0RheUhvdXJNaW4gPSAobWludXRlczogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFtaW51dGVzKSByZXR1cm4geyBkYXlzOiBudWxsLCBob3VyczogbnVsbCwgbWluczogbnVsbCB9O1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyAxNDQwKSB8fCAwLFxuICAgICAgbWluaXV0ZXNFeERheXMgPSBtaW51dGVzICUgMTQ0MCB8fCAwLFxuICAgICAgaG91cnMgPSBNYXRoLmZsb29yKG1pbml1dGVzRXhEYXlzIC8gNjApIHx8IDAsXG4gICAgICBtaW5zID0gbWluaXV0ZXNFeERheXMgJSA2MCB8fCAwO1xuICAgIHJldHVybiB7IGRheXMsIGhvdXJzLCBtaW5zIH07XG4gIH07XG4gIG1pbnV0ZXNUb0RheUhvdXJNaW5TdHIgPSAobWludXRlczogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFtaW51dGVzKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByZXQgPSB0aGlzLm1pbnV0ZXNUb0RheUhvdXJNaW4obWludXRlcyk7XG4gICAgcmV0dXJuIGAke3JldC5kYXlzfSAke3JldC5ob3Vyc306JHtyZXQubWluc31gLnRyaW0oKTtcbiAgfTtcbiAgbWludXRlc1RvRGF5SG91ck1pblN0cjIgPSAobWludXRlczogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFtaW51dGVzKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByZXQgPSB0aGlzLm1pbnV0ZXNUb0RheUhvdXJNaW4obWludXRlcyk7XG4gICAgcmV0dXJuIGAke3JldC5kYXlzfWRheXMgJHtyZXQuaG91cnN9aHJzICR7cmV0Lm1pbnN9bWluc2AudHJpbSgpO1xuICB9O1xuICBkYXlIb3VyTWluVG9Ib3VyTWludXRlcyA9IChkeXM6IG51bWJlciwgaHJzOiBudW1iZXIsIG1pbnM6IG51bWJlcikgPT4ge1xuICAgIGlmICghZHlzICYmICFocnMgJiYgIW1pbnMpIHJldHVybiAnJztcbiAgICBjb25zdCBkeXNUb0hycyA9IChkeXMgfHwgMCkgKiAyNDtcbiAgICBocnMgPSAoK2hycyB8fCAwKSArIGR5c1RvSHJzO1xuICAgIHJldHVybiAoaHJzIHx8ICcwMCcpICsgJzonICsgKG1pbnMgfHwgJzAwJyk7XG4gIH07XG4gIGRpc2FibGVPckVuYWJsZUlucHV0cyA9IChjb250cm9sczogQWJzdHJhY3RDb250cm9sW10sIGRpc2FibGU6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoZGlzYWJsZSkgdGhpcy5kaXNhYmxlSW5wdXRzKGNvbnRyb2xzKTtcbiAgICBlbHNlIHRoaXMuZW5hYmxlSW5wdXRzKGNvbnRyb2xzKTtcbiAgfTtcbiAgZGlzYWJsZUlucHV0cyA9IChjb250cm9sczogQWJzdHJhY3RDb250cm9sW10pID0+IHtcbiAgICBmb3IgKGNvbnN0IGNvbnRyb2wgb2YgY29udHJvbHMpIHtcbiAgICAgIGNvbnRyb2w/LmRpc2FibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcbiAgZW5hYmxlSW5wdXRzID0gKGNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXSkgPT4ge1xuICAgIGZvciAoY29uc3QgY29udHJvbCBvZiBjb250cm9scykge1xuICAgICAgY29udHJvbD8uZW5hYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG4gIGRheUhvdXJNaW5Ub01pbnV0ZXMgPSAoZHlzOiBudW1iZXIsIGhyczogbnVtYmVyLCBtaW5zOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIWR5cyAmJiAhaHJzICYmICFtaW5zKSByZXR1cm4gMDtcbiAgICBjb25zdCBkeXNUb0hycyA9IChkeXMgfHwgMCkgKiAyNDtcbiAgICBocnMgPSAoK2hycyB8fCAwKSArIGR5c1RvSHJzO1xuICAgIHJldHVybiAoaHJzIHx8IDApICogNjAgKyBtaW5zO1xuICB9O1xuICBob3VyTWluVG9NaW51dGVzID0gKGhyczogbnVtYmVyLCBtaW5zOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIWhycyAmJiAhbWlucykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIChocnMgfHwgMCkgKiA2MCArIG1pbnM7XG4gIH07XG4gIGhvdXJNaW5Ub01pbnV0ZXMyID0gKGhyc01pbnM6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IFtocnMsIG1pbnNdID0gaHJzTWlucz8uc3BsaXQoJzonKSB8fCBbMCwgMF07XG4gICAgcmV0dXJuIHRoaXMuaG91ck1pblRvTWludXRlcygraHJzLCArbWlucyk7XG4gIH07XG4gIG5vdGlmeShtZXNzYWdlOiBzdHJpbmcsIGNsczogMCB8IDEgfCAyIHwgMyA9IDEsIGR1cmF0aW9uID0gMTAwMDAsIHRpdGxlID0gJ3gnKSB7XG4gICAgbWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09ICdzdHJpbmcnID8gbWVzc2FnZSA6IGNscyA9PSAwID8gJ0FuIGVycm9yIG9jY3VycmVkJyA6ICcnO1xuICAgIHJldHVybiB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgdGl0bGUsIHtcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXG4gICAgICBwYW5lbENsYXNzOlxuICAgICAgICBjbHMgPT0gMVxuICAgICAgICAgID8gJ3RleHQtc3VjY2VzcydcbiAgICAgICAgICA6IGNscyA9PSAyXG4gICAgICAgICAgPyAndGV4dC1pbmZvJ1xuICAgICAgICAgIDogY2xzID09IDNcbiAgICAgICAgICA/ICd0ZXh0LXdhcm5pbmcnXG4gICAgICAgICAgOiAndGV4dC1kYW5nZXInLFxuICAgIH0pO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AgPSAodGltZW91dCA9IDEwMCkgPT5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZGQnKT8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAvLyB0aGlzLnVTLnNjcm9sbFRvVG9wKCk7XG4gICAgfSwgdGltZW91dCk7XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGRhdGUgdGltZSBsb2NhbCB0aGF0IGNhbiBiZSB1c2VkIHRvIHNldCB0aGUgZGF0ZXRpbWUtbG9jYWwgaW5wdXRcbiAgICovXG4gIGdldExvY2FsRGF0ZVRpbWVOb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKTtcbiAgICByZXR1cm4gZHRbMF0gKyAnVCcgKyBkdFsxXS5zcGxpdCgnOicpLnNsaWNlKDAsIDIpLmpvaW4oJzonKTtcbiAgfTtcbiAgLyoqIEByZXR1cm5zIFRoZSBjdXJyZW50IGRhdGUgbG9jYWwgdGhhdCBjYW4gYmUgdXNlZCB0byBzZXQgdGhlIGRhdGUgaW5wdXQgKi9cbiAgbG9jYWxEYXRlTm93ID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgfTtcbiAgZGF0ZUZvcm1hdCA9IChkYXRlOiBhbnksIGZvcm1hdCA9IDEpID0+IHtcbiAgICBpZiAoIWRhdGUpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBpZiAoZm9ybWF0ID09IDEpIHtcbiAgICAgIHJldHVybiBkLnRvRGF0ZVN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09IDIpIHtcbiAgICAgIHJldHVybiBkLmdldERhdGUoKSArICcgJyArIENvbmZpZy5Nb250aHNbZC5nZXRNb250aCgpXTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PSAzKSB7XG4gICAgICByZXR1cm4gZC50b0RhdGVTdHJpbmcoKSArICcsICcgKyB0aGlzLnRpbWVGb3JtYXQoZC50b0xvY2FsZVRpbWVTdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQgPT0gNCkge1xuICAgICAgcmV0dXJuIENvbmZpZy5Nb250aHNbZC5nZXRNb250aCgpXSArICcgJyArIGQuZ2V0RGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuICB0b0phdmFEYXRlU3RyaW5nID0gKGlzb0RhdGVTdHJpbmc6IHN0cmluZyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSkgPT4ge1xuICAgIGlmICghaXNvRGF0ZVN0cmluZykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGAke2lzb0RhdGVTdHJpbmcuc2xpY2UoMCwgMTkpfWA7XG4gICAgcmV0dXJuIGAke2lzb0RhdGVTdHJpbmcuc2xpY2UoMCwgMTApfSAke2lzb0RhdGVTdHJpbmcuc2xpY2UoMTEsIDE5KX1gO1xuICB9O1xuICB0aW1lRm9ybWF0ID0gKHRpbWU/OiBhbnkpID0+IHtcbiAgICBjb25zdCB0aW1lQXJyOiBhbnlbXSA9IHRpbWUuc3BsaXQoJyAnKTtcbiAgICB0aW1lQXJyWzBdID0gdGltZUFyclswXS5zcGxpdCgnOicpLnNwbGljZSgwLCAyKS5qb2luKCc6Jyk7XG4gICAgcmV0dXJuIHRpbWVBcnIuam9pbignICcpO1xuICB9O1xuICAvKipcbiAgICogRnJpIEZlYiAwMyAyMDIzLCAyMzo1OVxuICAgKiBAcGFyYW0gdGltZXN0YW1wXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBmdWxsRGF0ZVRpbWUgPSAodGltZXN0YW1wOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXQodGltZXN0YW1wLCAzKTtcbiAgfTtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0aW1lc3RhbXBcbiAgICogQHJldHVybnNcbiAgICovXG4gIGZ1bGxEYXRlVGltZUxlYW4gPSAodGltZXN0YW1wOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21EYXRlUGlwZS50cmFuc2Zvcm0yKHRpbWVzdGFtcCBhcyBhbnksICdkZC9NTS95eXl5IGhoOm1tIGEnKTtcbiAgfTtcbiAgZGF0ZUZvcm1hdHRlclVYID0gKGRhdGU6IGFueSkgPT4ge1xuICAgIGlmICghZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21EYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgZmFsc2UpO1xuICB9O1xuICBkYXRlRm9ybWF0dGVyID0gKGRhdGU6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXQoZGF0ZSwgMSk7XG4gIH07XG4gIGRhdGVUaW1lRm9ybWF0dGVyID0gKGRhdGU6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbURhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCB0cnVlKTtcbiAgfTtcbiAgZGF5c0Zvcm1hdHRlciA9IChkYXlzOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIWRheXMpIHtcbiAgICAgIHJldHVybiAnLSc7XG4gICAgfVxuICAgIGxldCB5cjogbnVtYmVyLFxuICAgICAgbXQ6IG51bWJlcixcbiAgICAgIGR5OiBudW1iZXIsXG4gICAgICByZXQ6IHN0cmluZyxcbiAgICAgIF95ciA9IDM2NSxcbiAgICAgIF9tdCA9IDMwO1xuICAgIGlmIChkYXlzID4gX3lyKSB7XG4gICAgICB5ciA9IE1hdGguZmxvb3IoZGF5cyAvIF95cik7XG4gICAgfVxuICAgIGlmIChkYXlzID4gX210KSB7XG4gICAgICBtdCA9IE1hdGguZmxvb3IoKGRheXMgJSBfeXIpIC8gX210KTtcbiAgICB9XG4gICAgZHkgPSAoZGF5cyAlIF95cikgJSBfbXQ7XG4gICAgcmV0ID0gYCR7eXIgPyB0aGlzLnBsdWFybGl6ZXIoeXIsICd5cicpIDogJyd9ICR7XG4gICAgICBtdCA/IHRoaXMucGx1YXJsaXplcihtdCwgJ210aCcpIDogJydcbiAgICB9ICR7dGhpcy5wbHVhcmxpemVyKGR5LCAnZHknKX1gO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG4gIG1vbnRoc0Zvcm1hdHRlciA9IChtb250aHM6IG51bWJlcikgPT4ge1xuICAgIGlmICghbW9udGhzKSB7XG4gICAgICByZXR1cm4gJy0nO1xuICAgIH1cbiAgICBsZXQgeXI6IG51bWJlcixcbiAgICAgIG10OiBudW1iZXIsXG4gICAgICByZXQ6IHN0cmluZyxcbiAgICAgIF95ciA9IDEyO1xuICAgIGlmIChtb250aHMgPiBfeXIpIHtcbiAgICAgIHlyID0gTWF0aC5mbG9vcihtb250aHMgLyBfeXIpO1xuICAgIH1cbiAgICBtdCA9IG1vbnRocyAlIF95cjtcbiAgICByZXQgPSBgJHt5ciA/IHRoaXMucGx1YXJsaXplcih5ciwgJ3lyJykgOiAnJ30gJHttdCA/IHRoaXMucGx1YXJsaXplcihtdCwgJ210aCcpIDogJyd9YDtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuICBwbHVhcmxpemVyID0gKHZhbDogbnVtYmVyLCB0eHQ6IHN0cmluZywgcGx1cmFsPzogc3RyaW5nKSA9PiB7XG4gICAgcGx1cmFsID0gcGx1cmFsIHx8IHR4dCArICdzJztcbiAgICByZXR1cm4gdmFsICsgKHZhbCA9PSAxID8gdHh0IDogcGx1cmFsKTtcbiAgfTtcbiAgZGVjaW1hbFRvUGVyY2VudGFnZSA9IChkZWM6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBkZWMgKiAxMDAgKyAnJSc7XG4gIH07XG4gIGxvZ0Zvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdGT1JNJywgZm9ybSwgJ1ZBTFVFUycsIGZvcm0udmFsdWUgYXMgYW55KTtcbiAgfTtcblxuICB0b0NTVihkYXRhOiBhbnlbXSwgaGVhZGVyTmFtZXM6IHN0cmluZ1tdLCBmaWxlbmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVwbGFjZXIgPSAoa2V5LCB2YWx1ZSkgPT4gKHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZSk7IC8vIHNwZWNpZnkgaG93IHlvdSB3YW50IHRvIGhhbmRsZSBudWxsIHZhbHVlcyBoZXJlXG5cbiAgICBsZXQgY3N2ID0gZGF0YS5tYXAoKHJvdykgPT5cbiAgICAgIGhlYWRlck5hbWVzLm1hcCgoZmllbGROYW1lKSA9PiBKU09OLnN0cmluZ2lmeShyb3dbZmllbGROYW1lXSwgcmVwbGFjZXIpKS5qb2luKCcsJylcbiAgICApO1xuICAgIGNzdi51bnNoaWZ0KGhlYWRlck5hbWVzLmpvaW4oJywnKSk7XG4gICAgbGV0IGNzdkFycmF5ID0gY3N2LmpvaW4oJ1xcclxcbicpO1xuXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2QXJyYXldLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSk7XG4gICAgc2F2ZUFzKGJsb2IsIGZpbGVuYW1lICsgJy5jc3YnKTtcbiAgfVxuXG4gIGlzUGljdHVyZUZvcm1hdChmaWxlTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFmaWxlTmFtZSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IFBJQ1RVUkVfRk9STUFUUyA9IFsnLmpwZycsICcuanBlZycsICcucG5nJywgJy5naWYnXTtcbiAgICByZXR1cm4gUElDVFVSRV9GT1JNQVRTLnNvbWUoKGZvcm1hdCkgPT4gZmlsZU5hbWUuZW5kc1dpdGgoZm9ybWF0KSk7XG4gIH1cbiAgb2JqZWN0VG9BcnJheTxUPihvYmo6IGFueSkge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgcmV0LnB1c2gob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0IGFzIFRbXTtcbiAgfVxuICBvbmx5VW5pcXVlID0gPFQ+KHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzZWxmOiBUW10pID0+IHtcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBudWxsIG9yIHVuZGVmaW5lZCBmaWVsZHMgZnJvbSBhbiBvYmplY3RcbiAgICogQHBhcmFtIG9iaiBPYmplY3QgdG8gZGVsZXRlIGZyb21cbiAgICogQHJldHVybnNcbiAgICovXG4gIGRlbGV0ZU51bGwgPSA8VD4ob2JqOiBUKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldID09ICdvYmplY3QnICYmIG9iaiAhPSBudWxsKSBvYmpba2V5XSA9IHRoaXMuZGVsZXRlTnVsbChvYmpba2V5XSk7XG4gICAgICBpZiAob2JqW2tleV0gPT09IG51bGwgfHwgb2JqW2tleV0gPT09IHVuZGVmaW5lZCB8fCBvYmpba2V5XSA9PT0gJycpIGRlbGV0ZSBvYmpba2V5XTtcbiAgICB9XG4gICAgaWYgKCFvYmogfHwgIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHJldHVybiBvYmo7XG4gIH07XG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIHRleHRzaG93aW5nIHRoZSBmaWVsZCBhbmQgdmFsdWVzXG4gICAqIEBwYXJhbSBvYmpcbiAgICogQHJldHVybnNcbiAgICovXG4gIG9iamVjdFRvVGV4dCA9IChvYmopID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5kZWxldGVOdWxsKGNsb25lRGVlcChvYmopKSlcbiAgICAgIC5tYXAoKHIpID0+IHJbMF0gKyAnICcgKyByWzFdKVxuICAgICAgLmpvaW4oJyAvICcpO1xuICB9O1xuICAvKipcbiAgICogRG93bmxvYWQgZmlsZSBmcm9tIGxpbmtcbiAgICogQHBhcmFtIHVybCBMaW5rIHRvIGRvd25sb2FkIGZpbGVcbiAgICogQHBhcmFtIGZpbGVuYW1lIE5hbWUgb2YgZmlsZSBpbmNsdWRpbmcgZXh0ZW5zaW9uXG4gICAqL1xuICBhc3luYyBkb3dubG9hZEZyb21MaW5rKHVybDogc3RyaW5nLCBmaWxlbmFtZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGxpbmsnLCB1cmwpO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgbGV0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHVybDtcbiAgICBkb3dubG9hZExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZG93bmxvYWRMaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlbmFtZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICB9XG5cbiAgZXhwb3J0SFRNTFRvUERGKFxuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50LFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgY29uZmlnOiB7XG4gICAgICB3aWR0aD86IG51bWJlcjtcbiAgICAgIGhlaWdodD86IG51bWJlcjtcbiAgICAgIG9yaWVudGF0aW9uPzogJ3AnIHwgJ3BvcnRyYWl0JyB8ICdsJyB8ICdsYW5kc2NhcGUnO1xuICAgIH1cbiAgKSB7XG4gICAgcmV0dXJuIGh0bWwyY2FudmFzKGNvbnRlbnQpLnRoZW4oYXN5bmMgKGNhbnZhcykgPT4ge1xuICAgICAgbGV0IGZpbGVXaWR0aCA9IGNvbmZpZz8ud2lkdGg7XG4gICAgICBsZXQgZmlsZUhlaWdodCA9IGNvbmZpZz8uaGVpZ2h0IHx8IChjYW52YXMuaGVpZ2h0ICogZmlsZVdpZHRoKSAvIGNhbnZhcy53aWR0aDtcbiAgICAgIC8vIGZpbGVIZWlnaHQgPSBjYW52YXMuaGVpZ2h0XG4gICAgICAvLyBmaWxlV2lkdGggPSBjYW52YXMud2lkdGhcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICBjb25zb2xlLmxvZyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIFtmaWxlV2lkdGgsIGZpbGVIZWlnaHRdKTtcbiAgICAgIGNvbnN0IEZJTEVVUkkgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnLCAxKTtcbiAgICAgIGxldCBQREYgPSBuZXcganNQREYoY29uZmlnPy5vcmllbnRhdGlvbiB8fCAncCcsICdweCcsIFtmaWxlV2lkdGgsIGZpbGVIZWlnaHRdLCB0cnVlKTtcbiAgICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgICBQREYuYWRkSW1hZ2UoRklMRVVSSSwgJ1BORycsIDAsIHBvc2l0aW9uLCBmaWxlV2lkdGgsIGZpbGVIZWlnaHQpO1xuICAgICAgcmV0dXJuIGF3YWl0IFBERi5zYXZlKGZpbGVOYW1lICsgJy5wZGYnLCB7XG4gICAgICAgIHJldHVyblByb21pc2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGV4cG9ydEhUTUxzVG9QREYoXG4gICAgY29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50Pj4sXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICBjb25maWc6IHtcbiAgICAgIHdpZHRoPzogbnVtYmVyO1xuICAgICAgaGVpZ2h0PzogbnVtYmVyO1xuICAgICAgb3JpZW50YXRpb24/OiAncCcgfCAncG9ydHJhaXQnIHwgJ2wnIHwgJ2xhbmRzY2FwZSc7XG4gICAgfVxuICApIHtcbiAgICBpZiAoIWNvbnRlbnRzKSByZXR1cm47XG5cbiAgICBsZXQgUERGID0gbmV3IGpzUERGKGNvbmZpZz8ub3JpZW50YXRpb24gfHwgJ3AnLCAncHgnKTtcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgY29udGVudHMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGh0bWwyY2FudmFzKGNvbnRlbnQpLnRoZW4oYXN5bmMgKGNhbnZhcykgPT4ge1xuICAgICAgICAgIGxldCBmaWxlV2lkdGggPSBjb25maWc/LndpZHRoO1xuICAgICAgICAgIGxldCBmaWxlSGVpZ2h0ID0gY29uZmlnPy5oZWlnaHQgfHwgKGNhbnZhcy5oZWlnaHQgKiBmaWxlV2lkdGgpIC8gY2FudmFzLndpZHRoO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgW2ZpbGVXaWR0aCwgZmlsZUhlaWdodF0pO1xuICAgICAgICAgIGNvbnN0IEZJTEVVUkkgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnLCAxKTtcbiAgICAgICAgICBQREYuYWRkUGFnZSgpO1xuICAgICAgICAgIFBERi5hZGRJbWFnZShGSUxFVVJJLCAnUE5HJywgMCwgcG9zaXRpb24sIGZpbGVXaWR0aCwgZmlsZUhlaWdodCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCBQREYuc2F2ZShmaWxlTmFtZSArICcucGRmJywge1xuICAgICAgcmV0dXJuUHJvbWlzZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGFycmF5VG9DU1YoZGF0YTogYW55W10sIGZpbGVuYW1lOiBzdHJpbmcsIGhlYWRlck1hcDogVGFibGVDb2xbXSkge1xuICAgIGNvbnN0IGNzdiA9IFBhcGEudW5wYXJzZShkYXRhLCB7XG4gICAgICBoZWFkZXI6IGZhbHNlLFxuICAgICAgY29sdW1uczogaGVhZGVyTWFwPy5tYXAoKHgpID0+IHguZj8udG9TdHJpbmcoKSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmRvd25sb2FkZXIoXG4gICAgICBoZWFkZXJNYXAubWFwKChmaWVsZE5hbWUpID0+IGZpZWxkTmFtZS50KS5qb2luKCcsJykgKyBgXFxyXFxuYCArIGNzdixcbiAgICAgIGZpbGVuYW1lPy5lbmRzV2l0aCgnLmNzdicpID8gZmlsZW5hbWUgOiBmaWxlbmFtZSArICcuY3N2J1xuICAgICk7XG4gIH1cbiAgbm9BY2Nlc3NOb3RpZnkoKSB7XG4gICAgdGhpcy5ub3RpZnkoYFNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIG1vZHVsZWAsIDApO1xuICB9XG4gIGFkZERheXNUb0RhdGUoZGF5czogbnVtYmVyLCBkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCFkYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBuZXcgRGF0ZShuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkgKyBDb25maWcuVGltZVN0YW1wRGF5ICogK2RheXMpXG4gICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgLnNwbGl0KCdUJylbMF07XG4gIH1cbiAgdmFsaWRhdGVQaG9uZW51bWJlcihjb250cm9sOiBGb3JtQ29udHJvbDxzdHJpbmc+KTogQ3VzdG9tVmFsaWRhdGlvbkVycm9yIHtcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZT8uc3RhcnRzV2l0aCgnMCcpXG4gICAgICA/IC9eXFxkKyQvLnRlc3QoY29udHJvbD8udmFsdWUpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHsgY3VzdG9tOiBgVGVsZXBob25lIG51bWJlciBtdXN0IGJlIGluIGRpZ2l0c2AgfVxuICAgICAgOiB7IGN1c3RvbTogYFRlbGVwaG9uZSBudW1iZXIgbXVzdCBzdGFydCB3aXRoIDAgYW5kIDExIGRpZ2l0c2AgfTtcbiAgfVxuICBnZXQgZ2VuUGhvbmVOdW1iZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICcwJyArXG4gICAgICBuZXcgQXJyYXkoMTApXG4gICAgICAgIC5maWxsKDEpXG4gICAgICAgIC5tYXAoKHgpID0+IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpKVxuICAgICAgICAuam9pbignJylcbiAgICApO1xuICB9XG4gIGdlbmVyYXRlVVVJRCgpIHtcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBkMiA9XG4gICAgICAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cgJiYgcGVyZm9ybWFuY2Uubm93KCkgKiAxMDAwKSB8fCAwOyAvL1RpbWUgaW4gbWljcm9zZWNvbmRzIHNpbmNlIHBhZ2UtbG9hZCBvciAwIGlmIHVuc3VwcG9ydGVkXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKSAqIDE2OyAvL3JhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxNlxuICAgICAgaWYgKGQgPiAwKSB7XG4gICAgICAgIC8vVXNlIHRpbWVzdGFtcCB1bnRpbCBkZXBsZXRlZFxuICAgICAgICByID0gKGQgKyByKSAlIDE2IHwgMDtcbiAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vVXNlIG1pY3Jvc2Vjb25kcyBzaW5jZSBwYWdlLWxvYWQgaWYgc3VwcG9ydGVkXG4gICAgICAgIHIgPSAoZDIgKyByKSAlIDE2IHwgMDtcbiAgICAgICAgZDIgPSBNYXRoLmZsb29yKGQyIC8gMTYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XG4gICAgfSk7XG4gIH1cblxuICBvblJvdXRlQ2hhbmdlID0gKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBvblJvdXRlQ2hhbmdlQ0I6IChyb3V0ZURhdGFQYXJhbXM6IGFueSkgPT4gYW55XG4gICkgPT5cbiAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICAgICAgSEhlbnZpcm9ubWVudC5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCkge1xuICAgICAgICAgICAgSEhlbnZpcm9ubWVudC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgdGFwKChldmVudCkgPT4ge1xuICAgICAgICAgIEhIZW52aXJvbm1lbnQubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKCgpID0+IHJvdXRlKSxcbiAgICAgICAgbWFwKChyb3V0ZSkgPT4ge1xuICAgICAgICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICByb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgSEhlbnZpcm9ubWVudC5hY3RpdmF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigocm91dGUpID0+IHJvdXRlLm91dGxldCA9PT0gJ3ByaW1hcnknKSxcbiAgICAgICAgbWVyZ2VNYXAoKHJvdXRlKSA9PiByb3V0ZS5kYXRhKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgIG9uUm91dGVDaGFuZ2VDQihwYXJhbXMpO1xuICAgICAgfSk7XG4gIGNvbmZpcm0gPSB0aGlzLmNvbmZpcm1EaWFsb2dTZXJ2aWNlLmNvbmZpcm07XG4gIHRyYWNrID0gdGhpcy5taXhQYW5lbFNlcnZpY2UudHJhY2s7XG59XG4iXX0=