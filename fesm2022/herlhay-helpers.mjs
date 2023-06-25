import * as i2$2 from '@angular/forms';
import { FormArray, FormControl, Validators, FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
import * as i0 from '@angular/core';
import { Injectable, Pipe, NgModule, Component, Inject, ErrorHandler, InjectionToken, Input, ViewChild, EventEmitter, Output, forwardRef, Directive, HostBinding, HostListener, ViewChildren, ViewEncapsulation } from '@angular/core';
import * as i2$1 from '@angular/common/http';
import { HttpHeaders, HttpRequest, HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { lastValueFrom, ReplaySubject, isObservable, Observable, merge, of, throwError, BehaviorSubject, timeout, interval, concat, Subject, debounceTime as debounceTime$1 } from 'rxjs';
import { catchError, tap, filter, map, mergeMap, retry, first, startWith, debounceTime, switchMap } from 'rxjs/operators';
import { AES, enc } from 'crypto-js';
import * as i1$1 from '@angular/router';
import { NavigationStart, NavigationCancel, NavigationEnd, RouterLink, RouterModule } from '@angular/router';
import jfd from 'js-file-download';
import { saveAs } from 'file-saver';
import * as $ from 'jquery';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Papa from 'papaparse';
import * as i9 from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i2 from '@angular/material/snack-bar';
import * as i4 from '@angular/platform-browser';
import * as i5 from '@angular/common';
import { CommonModule, DatePipe, DOCUMENT, NgIf, NgFor, NgClass, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe, TitleCasePipe, NgStyle } from '@angular/common';
import mixpanel from 'mixpanel-browser';
import * as i1$2 from '@angular/service-worker';
import { io } from 'socket.io-client';
import * as i4$3 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i8 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i6$1 from '@angular/material/checkbox';
import { MatCheckboxChange, MatCheckboxModule, _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import * as i5$1 from '@angular/material/slide-toggle';
import { MatSlideToggleChange, MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import * as i10 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i9$1 from '@angular/material/core';
import { MatOptionModule, MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import * as i7 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4$1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';
import * as i6 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i4$2 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import * as i4$4 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i7$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3$1 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import { SelectionModel } from '@angular/cdk/collections';
import * as i8$1 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i3$2 from '@angular/material/sort';
import { MatSort, MatSortModule } from '@angular/material/sort';
import * as i2$3 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i1$3 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i1$4 from '@ng-idle/core';
import { DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import * as i1$5 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

// declare interface String {
//   stripSlash(): string;
//   lastStripSlash(): string;
//   unStrip(): string;
// }
//#region  string */
String.prototype.stripChar = function (character = '/') {
    return (this + '').replace(character, '');
};
String.prototype.lastStripChar = function (character = '/') {
    return this[this?.length - 1] == character
        ? this.slice(0, this.length - 1)
        : this;
};
String.prototype.unChar = function (character = '/', replacement = '') {
    let te = '';
    for (let i = 0; i < this.length; i++) {
        const e = this[i];
        te += e != character ? e : '';
    }
    return te.split(character).join(replacement);
};
String.prototype.toSentenceCase = function () {
    return this.replace(/([A-Z])/g, ' $1');
};
String.prototype.replaceAllSubStr = function (character = '/', replacement = '') {
    return this.split(character).join(replacement);
};
String.prototype.addPrecedingChar = function (character, expectedLength) {
    if (this.length >= expectedLength)
        return this;
    return character.repeat(expectedLength - this.length) + this;
};
String.prototype.toCamelCase = function () {
    return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0)
            return ''; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};
String.prototype.toTitleCase = function () {
    const result = this.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
};
//#endregion
//#region  array */
Array.prototype.merge = function () {
    let r = '';
    for (const i of this) {
        r += i;
    }
    return r;
};
Array.prototype.reverseIndex = function (index = 0) {
    return this[this?.length - (1 + index)];
};
Array.prototype.lastItem = function () {
    return this.reverseIndex();
};
Array.prototype.sort2 = function (field, isString = true, reverse = false) {
    if (reverse) {
        return isString
            ? this.filter((x) => x).sort((b, a) => sortAlphaNum(a[field], b[field]))
            : this.filter((x) => x).sort((b, a) => (+a[field] || 0) - (+b[field] || 0));
    }
    else {
        return isString
            ? this.filter((x) => x).sort((a, b) => sortAlphaNum(a[field], b[field]))
            : this.filter((x) => x).sort((a, b) => (+a[field] || 0) - (+b[field] || 0));
    }
};
var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;
function sortAlphaNum(a, b) {
    var aA = a?.toLowerCase()?.replace(reA, '');
    var bA = b?.toLowerCase()?.replace(reA, '');
    if (aA === bA) {
        var aN = parseInt(a?.replace(reN, ''), 10);
        var bN = parseInt(b?.replace(reN, ''), 10);
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    }
    else {
        return aA > bA ? 1 : -1;
    }
}
Array.prototype.removeEmptyItems = function (expectedFields, config) {
    // debugger;
    const ignoreBooleanFields = config?.ignoreBooleanFields == true;
    const fieldsType = config?.fieldsType || 'included';
    if (!this.length)
        return this;
    let fieldList;
    if (fieldsType == 'included')
        fieldList = expectedFields?.length
            ? expectedFields
            : Object.keys(this[0]);
    else if (fieldsType == 'excluded')
        fieldList = expectedFields?.length
            ? Object.keys(this[0]).filter((x) => !expectedFields.includes(x))
            : Object.keys(this[0]);
    const removedItems = [];
    if (fieldList) {
        for (let i = 0; i < this.length; i++) {
            if (ignoreBooleanFields && i == 0) {
                fieldList = fieldList.filter((f) => typeof this[0][f] != 'boolean');
            }
            const item = this[i];
            if (fieldList.some((f) => item[f] != null))
                continue;
            removedItems.push(...this.splice(i, 1));
            i = i--;
        }
    }
    return removedItems;
};
//#endregion
//#region Function
Function.prototype.clone = function () {
    var that = this;
    var temp = function temporary() {
        return that.apply(this, arguments);
    };
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            temp[key] = this[key];
        }
    }
    return temp;
};
//#endregion
//#region FORMARRAY
FormArray.prototype.cAddItem = function (index, val) {
    const form = cloneDeep(this.cFormStructure);
    if (val) {
        form.patchValue(val);
    }
    this.insert(index, form);
    return this;
};
FormArray.prototype.cRemoveItem = function (index, deleteService, addRowFunc, emitEvent = true) {
    return new Promise((sub) => {
        const id = this.controls[index]?.value?.id;
        // debugger;
        if (id && deleteService) {
            const req = deleteService(id);
            let ps = null;
            if (req['toPromise']) {
                ps = req['toPromise']();
            }
            ps?.then((r) => {
                sub(this);
            });
        }
        if (this.controls.length == 1 && id) {
            this.removeAt(index, { emitEvent });
            if (addRowFunc)
                addRowFunc();
            else
                this.cAddItem();
        }
        else if (this.controls.length > 1)
            this.removeAt(index, { emitEvent });
        else if (this.controls.length == 1) {
            this.controls[0].reset();
        }
    });
};

var prototypes = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var Forms;
(function (Forms) {
    class ConfigForms {
        matches(formGroup, field1 = 'password', field2 = 'rpassword') {
            if (formGroup.get(field1).value !== formGroup.get(field2).value) {
                formGroup.get(field1).setErrors({ noMatch: true }, { emitEvent: true });
                formGroup.get(field2).setErrors({ noMatch: true }, { emitEvent: true });
            }
            else {
                formGroup.get(field1).setErrors(null, { emitEvent: true });
                formGroup.get(field2).setErrors(null, { emitEvent: true });
            }
            console.log(formGroup);
        }
        matches2(formGroup, field1, field2) {
            return formGroup.get(field1).value === formGroup.get(field2).value
                ? null
                : { noMatch: true };
        }
        email(required = true, value = '') {
            return new FormControl(value, Validators.compose([
                ...(required ? [Validators.required] : []),
                Validators.pattern(configPatterns.email),
            ]));
        }
        name(required = true, minLength = 2, value = '') {
            return new FormControl(value, Validators.compose([
                ...(required ? [Validators.required] : []),
                Validators.minLength(minLength),
                Validators.pattern(configPatterns.name),
            ]));
        }
        array(required = false, value = []) {
            return new FormControl(value, required ? [Validators.required] : []);
        }
        boolean(required = false, value = false) {
            return new FormControl(value, required ? [Validators.required] : []);
        }
        username(required = true, minLength = 3, maxLength = 10, value = '') {
            return new FormControl(value, [
                ...(required ? [Validators.required] : []),
                Validators.minLength(minLength),
                Validators.maxLength(maxLength),
                Validators.pattern(configPatterns.username),
            ]);
        }
        default(value, validatorOrOpts, asyncValidator) {
            return new FormControl(value, validatorOrOpts, asyncValidator);
        }
        number(required = false, value = null, maxLength = 100000) {
            return new FormControl(value, [
                ...(required ? [Validators.required] : []),
                Validators.pattern(configPatterns.number),
                Validators.maxLength(maxLength),
            ]);
        }
        integer(required = true, value = null, maxLength = 100000) {
            return new FormControl(value, [
                ...(required ? [Validators.required] : []),
                Validators.pattern(configPatterns.integer),
                Validators.maxLength(maxLength),
            ]);
        }
        postalCode(required = true, value = null) {
            return new FormControl(value, [
                Validators.pattern(configPatterns.postal),
                ...(required ? [Validators.required] : []),
            ]);
        }
        phone(required = true, value = '') {
            return new FormControl(value, [
                ...(required ? [Validators.required] : []),
                Validators.minLength(11),
                Validators.pattern(configPatterns.phone),
            ]);
        }
        requiredMinLength(length, value = '') {
            return new FormControl(value, [
                Validators.required,
                Validators.minLength(length),
            ]);
        }
        requiredMinMaxLength(min, max) {
            return new FormControl('', [
                Validators.required,
                Validators.minLength(min),
                Validators.maxLength(max),
            ]);
        }
        required(value = null) {
            return new FormControl(value, Validators.required);
        }
        minLength(length = 3, value = '') {
            return new FormControl(value, [
                Validators.minLength(length),
                Validators.required,
            ]);
        }
        url(value = '', required = true) {
            return new FormControl(value, Validators.compose([
                ...(required ? [Validators.required] : []),
                Validators.pattern(configPatterns.url),
            ]));
        }
        pattern(pattern, required = false, value) {
            return new FormControl(value, Validators.compose([
                ...(required ? [Validators.required] : []),
                Validators.pattern(pattern),
            ]));
        }
    }
    Forms.ConfigForms = ConfigForms;
})(Forms || (Forms = {}));
const configForms = new Forms.ConfigForms();
const configPatterns = {
    date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    integer: /^[0-9]+$/,
    name: /^[a-zA-Z0-9- ]+$/,
    number: /^-?[0-9,\.]+$/,
    phone: /^[+]*[0-9]+$/,
    postal: /^([0-9]{5})([\-]{1}[0-9]{4})?$|^([0-9]{6})?$/,
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
    username: /^[a-zA-Z0-9-]+$/,
    website: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
};

class FCInput {
    constructor(label, name, formControl, type, required, placeholder, vms, prefix, suffix) {
        this.name = name || 'fn' + Math.round(Math.random() * 100000);
        this.label = label;
        this.formControl = formControl || configForms.default();
        this.type = type || 'text';
        this.required = required || false;
        this.vms = vms || [];
        this.placeholder = placeholder;
        this.prefix = prefix;
        this.suffix = suffix;
    }
}
class CInput {
    get isEmpty() {
        return this.value == null || this.value == undefined;
    }
    constructor(label, name, value, type, required, placeholder, vms, prefix, suffix) {
        this.name = name;
        this.id = 'inputID' + Math.round(Math.random() * 10000000);
        this.label = label;
        this.value = value;
        this.type = type || 'text';
        this.required = required || false;
        this.placeholder = placeholder;
    }
}
class KVP {
    constructor(key, value, cls) {
        this.key = key;
        this.value = value;
        this.cls = cls;
    }
}
class FKVP extends KVP {
    constructor(key, label, editable, value, inputType, hint, action, formatter, cls, route) {
        super(key, value, cls);
        this.inputType = inputType;
        this.label = label;
        this.hint = hint;
        this.editable = editable;
        this.action = action;
        this.formatter = formatter;
        this.route = route;
    }
}
class Lbl {
    constructor(key, value, hint, cls) {
        this.key = key;
        this.value = value || '-';
        this.hint = hint;
        this.cls = cls;
    }
}
class Btn {
    constructor(key, action, type, icon, cls, help, showHelpIcon, loading, disabled) {
        this.key = key;
        this.action = action;
        this.type = type;
        this.icon = icon;
        this.cls = cls;
        this.help = help;
        this.showHelpIcon = showHelpIcon;
        this.loading = loading;
        this.disabled = disabled;
    }
}
class BtnLg {
    constructor(key, value, action, cls, extra) {
        this.key = key;
        this.value = value || '-';
        this.action = action;
        this.cls = cls;
        this.extra = extra;
    }
}
var EMenuLocation;
(function (EMenuLocation) {
    EMenuLocation["viewPage1"] = "viewPage";
})(EMenuLocation || (EMenuLocation = {}));
var Day;
(function (Day) {
    Day["sunday"] = "Sunday";
    Day["monday"] = "Monday";
    Day["tuesday"] = "Tuesday";
    Day["wednesday"] = "Wednesday";
    Day["thursday"] = "Thursday";
    Day["friday"] = "Friday";
    Day["saturday"] = "Saturday";
})(Day || (Day = {}));
var EPageType;
(function (EPageType) {
    EPageType["clonePage"] = "Clone";
    EPageType["editPage"] = "Edit";
    EPageType["viewPage"] = "View";
    EPageType["createPage"] = "Create";
    EPageType["indexPage"] = "Index";
})(EPageType || (EPageType = {}));
var ELanguage;
(function (ELanguage) {
    ELanguage["EN"] = "EN";
    ELanguage["FR"] = "FR";
})(ELanguage || (ELanguage = {}));
var EValidationType;
(function (EValidationType) {
    EValidationType["email"] = "email";
    EValidationType["entityNumber"] = "entityNumber";
    EValidationType["maxlength"] = "maxlength";
    EValidationType["minlength"] = "minlength";
    EValidationType["mobile"] = "mobile";
    EValidationType["name"] = "name";
    EValidationType["normal"] = "normal";
    EValidationType["passwordNotMatch"] = "passwordNotMatch";
    EValidationType["pattern"] = "pattern";
    EValidationType["required"] = "required";
    EValidationType["unique"] = "unique";
    EValidationType["custom"] = "custom";
})(EValidationType || (EValidationType = {}));
var EMenuType;
(function (EMenuType) {
    EMenuType["horizontal"] = "H";
    EMenuType["vertical"] = "V";
})(EMenuType || (EMenuType = {}));
class Constant {
}
var EPeriod;
(function (EPeriod) {
    EPeriod["daily"] = "daily";
    EPeriod["weekly"] = "weekly";
    EPeriod["monthly"] = "monthly";
    EPeriod["annually"] = "annually";
    EPeriod["yearly"] = "yearly";
    EPeriod["today"] = "today";
    EPeriod["week"] = "week";
    EPeriod["month"] = "month";
    EPeriod["year"] = "year";
    EPeriod["annual"] = "annual";
})(EPeriod || (EPeriod = {}));

class Config {
    static { this.logoLightPath = `/assets/images/iras.light.logo.svg`; }
    static { this.logoDarkPath = `/assets/images/iras.dark.logo.svg`; }
    static { this.Optioner = [
        { num: 1, letter: 'a' },
        { num: 2, letter: 'b' },
        { num: 3, letter: 'c' },
        { num: 4, letter: 'd' },
        { num: 5, letter: 'e' },
        { num: 6, letter: 'f' },
        { num: 7, letter: 'g' },
        { num: 8, letter: 'h' },
        { num: 9, letter: 'i' },
        { num: 10, letter: 'j' },
    ]; }
    static { this.Months = [
        { id: 0, short: 'Jan', long: 'January' },
        { id: 1, short: 'Feb', long: 'February' },
        { id: 2, short: 'Mar', long: 'March' },
        { id: 3, short: 'Apr', long: 'April' },
        { id: 4, short: 'May', long: 'May' },
        { id: 5, short: 'Jun', long: 'June' },
        { id: 6, short: 'Jul', long: 'July' },
        { id: 7, short: 'Aug', long: 'August' },
        { id: 8, short: 'Sep', long: 'September' },
        { id: 9, short: 'Oct', long: 'October' },
        { id: 10, short: 'Nov', long: 'November' },
        { id: 11, short: 'Dec', long: 'December' },
    ]; }
    static { this.Days = [
        { index: 0, day: Day.sunday },
        { index: 1, day: Day.monday },
        { index: 2, day: Day.tuesday },
        { index: 3, day: Day.wednesday },
        { index: 4, day: Day.thursday },
        { index: 5, day: Day.friday },
        { index: 6, day: Day.saturday },
    ]; }
    static { this.Numbers = [
        { num: 1, label: 'First' },
        { num: 2, label: 'Second' },
        { num: 3, label: 'Third' },
        { num: 4, label: 'Fourth' },
        { num: 5, label: 'Fifth' },
        { num: 6, label: 'Sixth' },
        { num: 7, label: 'Seventh' },
        { num: 8, label: 'Eighth' },
        { num: 9, label: 'Ninth' },
        { num: 10, label: 'Tenth' },
    ]; }
    static { this.sexes = ['Female', 'Male']; }
    static { this.Currency = '₦'; }
    static { this.TimeStampDay = 86400000; }
    static { this.TimeStampWeek = 604800000; }
    static { this.placeholderImage = `/assets/images/placeholder.jpg`; }
    static { this.periods = [
        { id: EPeriod.today, name: 'Today' },
        { id: EPeriod.week, name: 'This Week' },
        { id: EPeriod.month, name: 'This Month' },
        { id: EPeriod.year, name: 'This Year' },
    ]; }
    static { this.periodsWithAnnual = [
        { id: EPeriod.today, name: 'Today' },
        { id: EPeriod.week, name: 'This Week' },
        { id: EPeriod.month, name: 'This Month' },
        { id: EPeriod.annual, name: 'This Year' },
    ]; }
    static { this.periodAdverbs = [
        { id: EPeriod.daily, name: 'Daily' },
        { id: EPeriod.weekly, name: 'Weekly' },
        { id: EPeriod.monthly, name: 'Monthly' },
        { id: EPeriod.annually, name: 'Annually' },
    ]; }
    static { this.organisationPlaceholder = '{{org}}'; }
    static { this.infoMail = 'info@iras.ng'; }
    static { this.salesMail = 'sales@iras.ng'; }
    static { this.supportMail = 'support@iras.ng'; }
    static { this.supportURL = 'https://support.iras.ng/'; }
}

class Loader {
    constructor() {
        this._pageLoaders = [];
    }
    get isLoading() {
        return this._pageLoaders?.length > 0;
    }
    startPl(value = 1) {
        for (let index = 0; index < value; index++) {
            this._pageLoaders.push(1);
        }
        // console.log('length at start',this._pageLoaders.length)
        return this._pageLoaders?.length;
    }
    restartPl() {
        this._pageLoaders = [];
        this.startPl();
    }
    stopPl(value = 1) {
        for (let index = 0; index < value; index++) {
            this._pageLoaders.pop();
        }
        if (!this._pageLoaders?.length && this.onLoaderStopped)
            this.onLoaderStopped();
        // console.log('length at end', this._pageLoaders.length)
        return this._pageLoaders?.length;
    }
    stopAllPls() {
        this._pageLoaders = [];
    }
}

/**
 * Class for the environment object
 */
class Environment {
    /**
     * Set the value of the page loader
     */
    set loading(v) {
        if (v)
            this.pageLoader.startPl();
        else
            this.pageLoader.stopPl();
    }
    /**
     *
     * @param production Specify whether it is a production environment
     * @param name Name of the environment
     * @param apiBaseUrl Base url of the server api
     */
    constructor(production, name, apiBaseUrl) {
        this.production = production;
        this.apiBaseUrl = apiBaseUrl;
        /**
         * Defualt app currency
         */
        this.currency = '₦';
        /**
         * name of local storage location
         */
        this.storageKey = 'localStorage';
        /**
         * Name of the app
         */
        this.appName = 'iRAS';
        /**
         * storage key for user object
         */
        this.userStorageKey = 'user';
        /**
         * storage key for embedded user object
         */
        this.enbeddedUserStorageKey = 'enbedded-user';
        /**
         * storage key for super user object
         */
        this.adminUserStorageKey = 'super-user';
        /**
         * page loader object
         */
        this.pageLoader = new Loader();
        /** API Request timeout period
         *  Enter value in millisecond or Date object
         */
        this.requestTimeout = new Date(Config.TimeStampDay * 365 + Date.now());
        this.embedKey = 'weffwdfuion';
        if (!production)
            this.debug = true;
        this.name = name;
    }
    updateEnvironment(env) {
        Object.assign(this, env);
    }
    /**
     * Whether it is the dev environment or not
     */
    get isDev() {
        return !this.production;
    }
}

/**
 * Environment object
 */
const HHenvironment = new Environment(false, 'dev');

const configValidationMessages = {
    normal: [
        { type: 'required', message: ' is required.' },
        {
            type: 'maxLength',
            message: ' must be at most {{maxLength}} characters long.',
        },
        {
            type: 'maxlength',
            message: ' must be at most {{maxLength}} characters long.',
        },
        {
            type: 'minLength',
            message: ' must be at least {{minLength}} characters long.',
        },
        {
            type: 'minlength',
            message: ' must be at least {{minLength}} characters long.',
        },
        {
            type: 'notUnique',
            message: ' already exists.',
        },
        {
            type: 'date',
            message: 'Date should be in the dd/mm/yyyy format',
        },
        {
            type: 'used',
            message: ' has already been used.',
        },
        { type: 'email', message: ' is invalid.' },
        { type: 'pattern', message: ' is invalid.' },
        { type: 'notFound', message: " doesn't exist" },
        { type: 'custom' },
    ],
    address: [
        { type: 'required', message: 'Address is required.' },
        {
            type: 'minlength',
            message: 'Address must be at least 3 characters long.',
        },
    ],
    addressLGA: [
        {
            type: 'required',
            message: 'Local government of address is required.',
        },
        {
            type: 'minlength',
            message: 'Local government of address must be at least 2 characters long.',
        },
    ],
    className: [
        { type: 'required', message: 'Class name is required.' },
        {
            type: 'minlength',
            message: 'Class name must be at least 2 characters long.',
        },
    ],
    classSection: [
        { type: 'required', message: 'Class section is required.' },
        {
            type: 'minlength',
            message: 'Class section must be at least 1 character long.',
        },
    ],
    email: [
        { type: 'required', message: 'Email is required.' },
        {
            type: 'minlength',
            message: 'Email must be at least 5 characters long.',
        },
        { type: 'pattern', message: 'Email must be valid.' },
        { type: 'email', message: 'Email must be valid' },
        {
            type: 'notUnique',
            message: 'Email already exists.',
        },
        {
            type: 'equalToOther',
            message: "Alternate email can't be the same as email",
        },
    ],
    entityNumber: [
        { type: 'required', message: ' is required.' },
        {
            type: 'invalid',
            message: ' is invalid.',
        },
        { type: 'notFound', message: ' was not found.' },
        {
            type: 'notUnique',
            message: ' already exists.',
        },
    ],
    firstname: [
        { type: 'required', message: 'First Name is required.' },
        {
            type: 'minlength',
            message: 'Name must be at least 2 characters long.',
        },
    ],
    lastname: [
        { type: 'required', message: 'Last Name is required.' },
        {
            type: 'minlength',
            message: 'Name must be at least 2 characters long.',
        },
    ],
    lga: [
        {
            type: 'required',
            message: 'Local government of origin is required.',
        },
        {
            type: 'minlength',
            message: 'Local government of origin must be at least 2 characters long.',
        },
    ],
    maidenName: [
        { type: 'required', message: 'Maiden Name is required.' },
        {
            type: 'minlength',
            message: 'Maiden Name must be at least 2 characters long.',
        },
    ],
    mobile: [
        { type: 'required', message: 'Phone number is required.' },
        {
            type: 'minlength',
            message: 'Phone number must be at least 11 characters long.',
        },
        {
            type: 'notUnique',
            message: 'Phone number already exists.',
        },
        {
            type: 'equalToOther',
            message: "Alternate phone number can't be the same as phone number",
        },
        {
            type: 'invalid',
            message: 'Phone number is invalid',
        },
        {
            type: 'countryCode',
            message: 'Country code is invalid',
        },
    ],
    name: [
        { type: 'required', message: ' is required.' },
        {
            type: 'pattern',
            message: " can only contain letters, numbers and '-'.",
        },
        {
            type: 'minlength',
            message: ' must be at least 2 characters long.',
        },
    ],
    numbers: [
        {
            type: 'pattern',
            message: 'This field must be a number.',
        },
        { type: 'required', message: 'A value is required.' },
    ],
    occupation: [
        { type: 'required', message: 'Occupation is required.' },
        {
            type: 'minlength',
            message: 'Occupation must be at least 2 characters long.',
        },
    ],
    othername: [
        { type: 'required', message: 'Other Name is required.' },
        {
            type: 'minlength',
            message: 'Name must be at least 2 characters long.',
        },
    ],
    password: [
        { type: 'required', message: 'Password is required.' },
        {
            type: 'minlength',
            message: 'Password must be at least 6 characters long.',
        },
        {
            type: 'maxlength',
            message: 'Password must be at most 6 characters long.',
        },
        { type: 'passwordNotMatch', message: 'Passwords are not the same' },
    ],
    pattern: [
        { type: 'required', message: 'Field is required.' },
        { type: 'pattern', message: 'Field is invalid.' },
    ],
    required: [
        {
            type: 'required',
            message: ' is required.',
        },
        {
            type: 'minlength',
            message: ' must be at least 2 characters long.',
        },
    ],
    sex: [
        {
            type: 'required',
            message: 'Sex is required.',
        },
    ],
    subjectName: [
        { type: 'required', message: 'Subject name is required.' },
        {
            type: 'minlength',
            message: 'Subject name must be at least 2 characters long.',
        },
    ],
    unique: [
        {
            type: 'notUnique',
            message: ' already exists.',
        },
    ],
    username: [
        {
            type: 'required',
            message: 'is required.',
        },
        {
            type: 'pattern',
            message: "Only letters,numbers and '_' are allowed.",
        },
    ],
    url: [
        {
            type: 'required',
            message: 'URL is required.',
        },
        {
            type: 'pattern',
            message: 'It does not match a URL',
        },
    ],
};

/**
 * Encryption Decryption service
 */
class EncryptorService {
    /**
     * Encryption Decryption service
     */
    constructor() {
        this.RESPONSE_AESKEY = 'prao7lqjpgymv60eltc6tbdiahe69wf4';
        this.secret = this.RESPONSE_AESKEY;
        this.plusDelimiter = '~---~~';
        this.encryptText = (data, key = this.secret) => {
            let encText = AES.encrypt(JSON.stringify(data), key).toString();
            // enc = enc.split('/').join(this.delimiter);
            encText = encText.split('+').join(this.plusDelimiter);
            return encText;
        };
        this.decryptText = (data, key = this.secret) => {
            const encText = data.split(this.plusDelimiter).join('+');
            return JSON.parse(AES.decrypt(encText, key).toString(enc.Utf8));
        };
        /**
         * Encrypts an item
         * @param data Item
         * @returns Encrypted Object
         */
        this.encryptItem = (data) => {
            try {
                if (this.RESPONSE_AESKEY) {
                    return AES.encrypt(JSON.stringify(data), this.RESPONSE_AESKEY).toString();
                }
                throw new Error('AES and IV keys must be set');
            }
            catch (error) {
                throw error;
            }
        };
        /**
         * Decrypts an encrypted item
         * @param data Encrypted string
         * @returns Decrypted Object
         */
        this.decryptItem = (data) => {
            try {
                if (this.RESPONSE_AESKEY) {
                    // debugger
                    if (typeof data != 'string')
                        return data;
                    const decryptedData = AES.decrypt(data, this.RESPONSE_AESKEY || '');
                    const d = JSON.parse(decryptedData.toString(enc.Utf8));
                    console.log(d);
                    return d;
                }
                throw new Error('AES and IV keys must be set');
            }
            catch (error) {
                throw error;
            }
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: EncryptorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: EncryptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: EncryptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

var HHFunctions;
(function (HHFunctions) {
    /**
     *
     * @param route
     * @param indexComponent
     * @param indexLazyModule
     * @example
     * ```ts
     * EVFunctions.extendRoute(
     *  {
     *     path: '',
     *     data: { title: 'CRM / Setups / Segment' },
     *     loadChildren: () => import('./create-segment/create-segment.module')
     *       .then((m) => m.CreateSegmentModule),
     *  },
     *  null,
     *  () => import('./segments-index/segments-index.module')
     *     .then((m) => m.SegmentsIndexModule));
     * ```
     * @returns
     */
    function extendRoute(route, indexComponent, indexLazyModule) {
        const routes = [
            {
                path: '',
                data: {
                    ...route.data,
                    title: route.data['title'],
                    type: EPageType.indexPage,
                },
                component: indexComponent,
                loadChildren: indexLazyModule,
            },
            {
                path: 'index',
                data: {
                    ...route.data,
                    title: route.data['title'],
                    type: EPageType.indexPage,
                },
                component: indexComponent,
                loadChildren: indexLazyModule,
            },
            {
                path: 'add',
                data: {
                    ...route.data,
                    title: pageTitler(route.data['title'], 'Add'),
                    type: EPageType.createPage,
                },
                component: route.component,
                loadChildren: route.loadChildren,
            },
            {
                path: 'edit',
                data: {
                    ...route.data,
                    title: pageTitler(route.data['title'], 'Edit'),
                    type: EPageType.editPage,
                },
                component: route.component,
                loadChildren: route.loadChildren,
            },
            {
                path: 'view',
                data: {
                    ...route.data,
                    title: pageTitler(route.data['title'], 'View'),
                    type: EPageType.viewPage,
                },
                component: route.component,
                loadChildren: route.loadChildren,
            },
        ];
        if (!indexComponent && !indexLazyModule) {
            routes.splice(0, 2);
        }
        return routes;
    }
    HHFunctions.extendRoute = extendRoute;
    function strConcatenator(field1, field2, joiner = ' ') {
        // debugger
        // console.log('field1',field1)
        field1 = field1?.toString()?.trim();
        field2 = field2?.toString()?.trim();
        if (field1 != null && field2 != null)
            return field1 + joiner + field2;
        else
            return field1 || field2;
    }
    HHFunctions.strConcatenator = strConcatenator;
    function nameExtractor(obj) {
        return (obj?.name ||
            obj?.fullName ||
            obj?.fullname ||
            strConcatenator(obj?.firstName, obj?.lastName));
    }
    HHFunctions.nameExtractor = nameExtractor;
    function pageTitler(title, infix) {
        if (!title)
            return '';
        if (!infix)
            return title;
        const split = title.split('/'), lastSplit = split.pop(), prefix = split.join('/');
        return (prefix ? prefix + ' / ' : ' ') + infix + ' ' + lastSplit;
    }
    function redirectRouteForUM(route, prefix) {
        const oPath = route?.path + '', nPath = prefix + oPath;
        route.path = nPath;
        const routes = [
            {
                path: oPath,
                redirectTo: nPath,
            },
            route,
        ];
        return routes;
    }
    HHFunctions.redirectRouteForUM = redirectRouteForUM;
})(HHFunctions || (HHFunctions = {}));

class NumberToWordsService {
    constructor() {
        this.isInteger = (x) => {
            return x % 1 === 0;
        };
        this.numToWords = (n) => {
            let a = [
                '',
                'one',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine',
                'ten',
                'eleven',
                'twelve',
                'thirteen',
                'fourteen',
                'fifteen',
                'sixteen',
                'seventeen',
                'eighteen',
                'nineteen',
            ];
            let b = [
                '',
                '',
                'twenty',
                'thirty',
                'forty',
                'fifty',
                'sixty',
                'seventy',
                'eighty',
                'ninety',
            ];
            let g = [
                '',
                'thousand',
                'million',
                'billion',
                'trillion',
                'quadrillion',
                'quintillion',
                'sextillion',
                'septillion',
                'octillion',
                'nonillion',
            ];
            // this part is really nasty still
            // it might edit this again later to show how Monoids could fix this up
            let makeGroup = ([ones, tens, huns]) => {
                return [
                    this.num(huns) === 0 ? '' : a[huns] + ' hundred ',
                    this.num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + '-') || '',
                    a[tens + ones] || a[ones],
                ].join('');
            };
            // "thousands" constructor; no real good names for this, i guess
            let thousand = (group, i) => (group === '' ? group : `${group} ${g[i]}`);
            // execute !
            if (typeof n === 'number')
                return this.numToWords(String(n));
            if (n === '0')
                return 'zero';
            return this.comp(this.chunk(3))(this.reverse)(this.arr(n))
                .map(makeGroup)
                .map(thousand)
                .filter(this.comp(this.not)(this.isEmpty))
                .reverse()
                .join(' ');
        };
        this.arr = (x) => Array.from(x);
        this.num = (x) => Number(x) || 0;
        const str = (x) => String(x);
        this.isEmpty = (xs) => xs.length === 0;
        const take = (n) => (xs) => xs.slice(0, n);
        const drop = (n) => (xs) => xs.slice(n);
        this.reverse = (xs) => xs.slice(0).reverse();
        this.comp = (f) => (g) => (x) => f(g(x));
        this.not = (x) => !x;
        this.chunk = (n) => (xs) => this.isEmpty(xs) ? [] : [take(n)(xs), ...this.chunk(n)(drop(n)(xs))];
    }
    transform(value) {
        if (value && this.isInteger(value))
            return this.numToWords(value);
        return value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class NumberToWordsPipe {
    transform(value, suffix) {
        if (value && this.ntw.isInteger(value))
            return this.ntw.numToWords(value) + suffix;
        return value;
    }
    constructor(ntw) {
        this.ntw = ntw;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsPipe, deps: [{ token: NumberToWordsService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsPipe, isStandalone: true, name: "numberToWords" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'numberToWords',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: NumberToWordsService }]; } });
class ArraySplitter {
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
class GenderPipe {
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
class RoundPipe {
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
class SecondsToTimePipe {
    transform(value) {
        const timeLeft = this.uS.secondsToHourMinSec(value);
        return `${timeLeft.hours ? timeLeft.hours + 'hrs' : ''}
  ${timeLeft.mins ? timeLeft.mins + 'min' : ''} ${timeLeft.secs ? timeLeft.secs + 's' : ''}`;
    }
    constructor(uS) {
        this.uS = uS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SecondsToTimePipe, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: SecondsToTimePipe, isStandalone: true, name: "secondsToTime" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SecondsToTimePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'secondsToTime',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; } });
class GetValueLabel {
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
class ValueFormatterPipe {
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
class FunctionCaller {
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
class FunctionCaller1 extends FunctionCaller {
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
class FunctionCaller2 extends FunctionCaller {
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
class FunctionCaller3 {
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
class HttpListCaller {
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
class HttpListCaller1 {
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
class HttpListCaller2 {
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
class IsShowPage {
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
class IsClonePage {
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
class FilterArrayPipe {
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
class FilterArrayByStringPipe {
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
class FilterFormArrayPipe {
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
class SortPipe {
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
class ToAnyPipe {
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
class ToAnyArrayPipe {
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
class TrimTextPipe {
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
class XOrYPipe {
    transform(x, y = '-') {
        return this.uS.xOrY(x, y);
    }
    constructor(uS) {
        this.uS = uS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: XOrYPipe, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: XOrYPipe, isStandalone: true, name: "xOrY" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: XOrYPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'xOrY',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; } });
class ReplaceAllPipe {
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
class ValueOrXPipe {
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
class StrConcatenatorPipe {
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
class CustomDatePipe {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CustomDatePipe, deps: [{ token: i5.DatePipe }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: CustomDatePipe, isStandalone: true, name: "customDate" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CustomDatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'customDate',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i5.DatePipe }]; } });
const comps$1 = [
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
const modules$1 = [];
class UtilityPipesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, imports: [CommonModule, ArraySplitter, CustomDatePipe, FilterArrayByStringPipe, FilterArrayPipe, FilterFormArrayPipe, FunctionCaller, FunctionCaller1, FunctionCaller2, FunctionCaller3, GenderPipe, GetValueLabel, HttpListCaller, HttpListCaller1, HttpListCaller2, IsClonePage, IsShowPage, NumberToWordsPipe, ReplaceAllPipe, RoundPipe, SecondsToTimePipe, SortPipe, StrConcatenatorPipe, ToAnyArrayPipe, ToAnyPipe, TrimTextPipe, ValueFormatterPipe, ValueOrXPipe, XOrYPipe], exports: [ArraySplitter, CustomDatePipe, FilterArrayByStringPipe, FilterArrayPipe, FilterFormArrayPipe, FunctionCaller, FunctionCaller1, FunctionCaller2, FunctionCaller3, GenderPipe, GetValueLabel, HttpListCaller, HttpListCaller1, HttpListCaller2, IsClonePage, IsShowPage, NumberToWordsPipe, ReplaceAllPipe, RoundPipe, SecondsToTimePipe, SortPipe, StrConcatenatorPipe, ToAnyArrayPipe, ToAnyPipe, TrimTextPipe, ValueFormatterPipe, ValueOrXPipe, XOrYPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, providers: [DatePipe], imports: [CommonModule, modules$1] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...modules$1, ...comps$1],
                    exports: [...comps$1, ...modules$1],
                    providers: [DatePipe],
                }]
        }] });

class ConfirmDialogComponent {
    constructor(text, dialogRef) {
        this.text = text;
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    yes() {
        this.dialogRef.close(true);
    }
    no() {
        this.dialogRef.close(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ConfirmDialogComponent, isStandalone: true, selector: "app-confirm-dialog", ngImport: i0, template: "<div class=\"text-center\">\n  <div class=\"font-weight-bold d-inline-block bg-peimary text-light mt-3 rounded ps-4 pe-4 pt-1 pb-1\">\n    CONFIRM\n  </div>\n  <div class=\" \">\n    <span class=\"fa fa-warning que text-peimary\">\n\n    </span>\n  </div>\n\n  <div class=\"card-body overflow-auto pre-line\" [innerHTML]=\"text\">\n  </div>\n\n  <div class=\"p-1 p-md-4 \">\n    <div class=\"justify-content-between d-flex align-items-center\">\n      <div class=\"col-5 ps-0\">\n        <button class=\"btn btn-outline-danger m-0 w-100\" (click)=\"no()\">No</button>\n      </div>\n      <div class=\"col-5 pe-0 text-right\">\n        <button class=\"btn btn-outline-success m-0 w-100\" (click)=\"yes()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".que{font-size:100px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-confirm-dialog', standalone: true, template: "<div class=\"text-center\">\n  <div class=\"font-weight-bold d-inline-block bg-peimary text-light mt-3 rounded ps-4 pe-4 pt-1 pb-1\">\n    CONFIRM\n  </div>\n  <div class=\" \">\n    <span class=\"fa fa-warning que text-peimary\">\n\n    </span>\n  </div>\n\n  <div class=\"card-body overflow-auto pre-line\" [innerHTML]=\"text\">\n  </div>\n\n  <div class=\"p-1 p-md-4 \">\n    <div class=\"justify-content-between d-flex align-items-center\">\n      <div class=\"col-5 ps-0\">\n        <button class=\"btn btn-outline-danger m-0 w-100\" (click)=\"no()\">No</button>\n      </div>\n      <div class=\"col-5 pe-0 text-right\">\n        <button class=\"btn btn-outline-success m-0 w-100\" (click)=\"yes()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".que{font-size:100px}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.MatDialogRef }]; } });

class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    confirm(text) {
        return lastValueFrom(this.dialog
            .open(ConfirmDialogComponent, {
            data: text,
            height: 'auto',
            width: '450px',
            autoFocus: false,
        })
            .afterClosed()).then((r) => {
            if (r) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ConfirmDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });

class MixPanelService {
    constructor() {
        this.token = HHenvironment.mixPanelToken;
        if (HHenvironment.production && this.token && this.identifier)
            this.init();
    }
    /**
     * Initialize mixpanel.
     * @memberof MixpanelService
     */
    init() {
        // debugger;
        if (!this.token)
            return;
        mixpanel.init(this.token);
        mixpanel.identify(this.identifier);
    }
    /**
     * Push new action to mixpanel.
     *
     * @param {string} actionName Name of the action to track.
     * @param {*} [action={}] Actions object with custom properties.
     * @memberof MixpanelService
     */
    track(actionName, config) {
        try {
            if (HHenvironment.production && this.token)
                mixpanel.track((actionName + (config?.status == 1 ? 'successful' : 'failed')).toUpperCase(), config?.action);
        }
        catch (error) {
            console.error(`Mixpanel failed`);
            console.error(error);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MixPanelService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MixPanelService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MixPanelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class UtilityService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityService, deps: [{ token: i1.MatDialog }, { token: i2.MatSnackBar }, { token: i1$1.Router }, { token: i4.Title }, { token: i5.Location }, { token: i5.DecimalPipe }, { token: i5.CurrencyPipe }, { token: i5.TitleCasePipe }, { token: CustomDatePipe }, { token: ConfirmDialogService }, { token: MixPanelService }, { token: i9.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: UtilityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }, { type: i2.MatSnackBar }, { type: i1$1.Router }, { type: i4.Title }, { type: i5.Location }, { type: i5.DecimalPipe }, { type: i5.CurrencyPipe }, { type: i5.TitleCasePipe }, { type: CustomDatePipe }, { type: ConfirmDialogService }, { type: MixPanelService }, { type: i9.BreakpointObserver }]; } });

class CacheService {
    constructor(uS) {
        this.uS = uS;
        this._cache = {};
        this.has = (key) => !!this._cache[key];
        this.getItem = (key) => this._cache[key];
    }
    get cache() {
        return this._cache;
    }
    setItem(key, data) {
        this._cache[key] = data;
        // return this._cache;
    }
    getAndSet(key, newValue) {
        return new Observable((next) => {
            next.next(this.getItem(key));
            if (newValue) {
                this.uS.promisifyVal(newValue).then(async (res) => {
                    this.setItem(key, res);
                    next.next(res);
                    next.complete();
                });
            }
            else
                next.complete();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CacheService, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CacheService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CacheService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; } });

/**
 * Storage service
 */
class StorageService {
    /**
     * Specify whether it is a production environment
     */
    get isProduction() {
        return HHenvironment.production;
    }
    /**
     * name of local storage location
     */
    get storageKey() {
        return HHenvironment.storageKey;
    }
    constructor(eS) {
        this.eS = eS;
        /**
         * Encrypts an item
         * @param data Item
         * @returns Encrypted Object
         */
        this.encrypt = this.eS.encryptItem;
        /**
         * Decrypts an encrypted item
         * @param data Encrypted string
         * @returns Decrypted Object
         */
        this.decrypt = this.eS.decryptItem;
        /**
         * Saves an item to the app storage
         * @param key Name of item
         * @param data Item
         * @returns Item
         */
        this.saveItem = (key, data) => {
            try {
                window[this.storageKey].setItem(key, !(data == null || data == undefined)
                    ? this.isProduction
                        ? this.encrypt(data)
                        : JSON.stringify(data)
                    : '');
                return data;
            }
            catch (error) {
                if (error.name == 'QuotaExceededError') {
                    this.clear();
                    return this.saveItem(key, data);
                }
                else {
                    return null;
                }
            }
        };
        /**
         * Saves an item to the app storage asynchronously
         * @param key Name of item
         * @param data Item
         * @returns Item
         */
        this.saveItemA = (key, data) => new Promise((resolve) => {
            resolve(this.saveItem(key, data));
        });
        /**
         * Get an item from the app storage
         * @param key name of item
         * @param shouldThrow Whether to throw an error if it is not found
         * @returns Item
         */
        this.getItem = (key, shouldThrow = false) => {
            if (!key)
                return null;
            const encryptedRes = window[this.storageKey].getItem(key);
            try {
                return this.isProduction
                    ? encryptedRes
                        ? this.decrypt(encryptedRes)
                        : null
                    : JSON.parse(encryptedRes);
            }
            catch (e) {
                console.error(e);
                this.saveItem('_temp' + key, encryptedRes);
                this.removeItem(key);
                if (shouldThrow) {
                    throw new Error('Item not found');
                }
                else {
                    return null;
                }
            }
        };
        /**
         * Get an item from the app storage asynchronously
         * @param key name of item
         * @param shouldThrow  Whether to throw an error if it is not found
         * @returns item
         */
        this.getItemA = (key, shouldThrow = false) => {
            return new Promise((resolve, reject) => {
                try {
                    resolve(this.getItem(key, shouldThrow));
                }
                catch (error) {
                    reject(error);
                }
            });
        };
        /**
         * Remove and item from the app storage
         * @param key name of item
         * @returns
         */
        this.removeItem = (key) => {
            try {
                window[this.storageKey].removeItem(key);
            }
            catch (error) { }
        };
        /**
         * Clear the app storage
         * @returns
         */
        this.clear = () => {
            return window[this.storageKey].clear();
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StorageService, deps: [{ token: EncryptorService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StorageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: EncryptorService }]; } });

class LocalCacheService extends CacheService {
    constructor(sS, uS) {
        super(uS);
        this.sS = sS;
        this.uS = uS;
        this.cacheKey = 'cacheKey';
        this.cacheCreatedDateKey = 'cacheCreatedDateKey';
        this.validityDays = 7;
        this.oneDayTimestamp = 86400000;
        try {
            const createdDate = sS.getItem(this.cacheCreatedDateKey);
            if (!createdDate)
                this.sS.saveItem(this.cacheCreatedDateKey, Date.now());
            else if (createdDate + this.validityDays * this.oneDayTimestamp <=
                Date.now()) {
                this.sS.saveItem(this.cacheCreatedDateKey, Date.now());
                this.sS.removeItem(this.cacheKey);
            }
            sS.getItemA(this.cacheKey).then((r) => {
                try {
                    for (const key in r) {
                        if (Object.prototype.hasOwnProperty.call(r, key)) {
                            this.setItem(key, r[key]);
                        }
                    }
                }
                catch (error) {
                    console.error(error);
                }
            });
        }
        catch (e) {
            console.error(e);
            this.sS.removeItem(this.cacheKey);
        }
    }
    saveToLocal() {
        // console.log('saving to cache', JSON.stringify(super.cache));
        this.sS.saveItemA(this.cacheKey, super.cache);
    }
    setItem(key, data) {
        super.setItem(key, data);
        this.saveToLocal();
    }
    getAndSet(key, addFunc) {
        // debugger;
        return super
            .getAndSet(key, addFunc)
            .pipe(tap((r) => this.saveToLocal()));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LocalCacheService, deps: [{ token: StorageService }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LocalCacheService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LocalCacheService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: StorageService }, { type: UtilityService }]; } });

class ApiService {
    get baseURL() {
        return HHenvironment.apiBaseUrl;
    }
    get headers() {
        return {
            'Content-Type': 'application/json',
        };
    }
    get fileHeaders() {
        return {
            enctype: 'multipart/form-data',
        };
    }
    constructor(eS, http, cacheS, lCacheS) {
        this.eS = eS;
        this.http = http;
        this.cacheS = cacheS;
        this.lCacheS = lCacheS;
        this.showRoutes = 0;
        this.retryCount = 0;
        /**
         * Encrypts an item
         * @param data Item
         * @returns Encrypted Object
         */
        this.encrypt = (obj) => {
            if (!HHenvironment.encryptAPIRequests)
                return obj;
            const ret = {
                data: this.eS.encryptItem(obj),
            };
            console.log(ret);
            return ret;
        };
        /**
         * Decrypts an encrypted item
         * @param data Encrypted string
         * @returns Decrypted Object
         */
        this.decrypt = (obj) => {
            if (!HHenvironment.encryptAPIRequests)
                return obj;
            if (typeof obj?.data == 'string')
                if (obj.status == 'success')
                    return this.eS.decryptItem(obj?.data);
                else
                    throw this.eS.decryptItem(obj?.data);
            else
                return obj;
        };
        this.handleRequestError = (err) => {
            // debugger;
            const error = err.error.data
                ? this.eS.decryptItem(err.error.data)
                : { message: err.statusText };
            return throwError(() => error?.message);
        };
        //#endregion
        //#region GET
        this.get = (route, parameters, extras) => {
            this.logRoutes('get', route, parameters);
            return new Observable((res) => {
                const query = route + this.getRequestParse(parameters);
                // if (this.cacheS.has(query)) {
                //   res.next(this.cacheS.getItem<T>(route));
                // }
                this.http
                    .get(this.baseURL + query, {
                    headers: new HttpHeaders(this.headers),
                    responseType: 'json',
                    ...extras?.options,
                })
                    .pipe(retry(this.retryCount), map((r) => (extras?.dontDecryptResponse ? r : this.decrypt(r))), tap((x) => (this.showRoutes ? console.log(x) : null)), catchError(this.handleRequestError))
                    .toPromise()
                    .then((r) => {
                    res.next(r);
                    this.cacheS.setItem(query, r);
                    res.complete();
                })
                    .catch((err) => res.error(err));
            });
        };
        this.getText = (route, parameters) => this.get(route, parameters, {
            options: {
                headers: new HttpHeaders(this.headers),
                responseType: 'text',
            },
        });
        this.getFile = (route, parameters) => this.get(route, parameters, {
            options: {
                headers: new HttpHeaders(this.headers),
                responseType: 'arrayBuffer',
            },
        });
        this.getWithBody = (route, body, extras) => {
            this.logRoutes('get', route);
            // debugger
            const req = new HttpRequest('GET', this.baseURL + route, HHenvironment.encryptAPIRequests ? this.encrypt(body) : body, extras?.options || {
                headers: new HttpHeaders(this.headers),
                responseType: 'json',
            });
            return this.http.request(req).pipe(map((r) => (HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
        };
        this.getFromlocal = (route, parameters, options) => {
            return new Observable((res) => {
                const query = route + this.getRequestParse(parameters);
                if (this.lCacheS.has(query)) {
                    res.next(this.lCacheS.getItem(query));
                    res.complete();
                }
                else
                    this.get(query, null, options)
                        .toPromise()
                        .then((r) => {
                        // if (!this.cS.has(route))
                        res.next(r);
                        this.lCacheS.setItem(query, r);
                        res.complete();
                    });
            });
        };
        this.getWithLocalCache = (route, parameters, options) => {
            return new Observable((res) => {
                const query = route + this.getRequestParse(parameters);
                if (this.lCacheS.has(query)) {
                    res.next(this.lCacheS.getItem(query));
                }
                this.get(query, null, options)
                    .toPromise()
                    .then((r) => {
                    // if (!this.cS.has(route))
                    res.next(r);
                    this.lCacheS.setItem(query, r);
                    res.complete();
                })
                    .catch((e) => {
                    res.error(e);
                    res.complete();
                });
            });
        };
        this.getAll = (route, query, dataFieldName, extras) => {
            return new Observable((sub) => {
                let data = [];
                // debugger;
                const fetchdata = (page) => this.get(route, { ...query, page }).subscribe((r) => {
                    // debugger;
                    data = data.concat(r[dataFieldName]?.data);
                    sub.next(data);
                    // const d1 = data?.length;
                    // const d2 = !!data?.length;
                    // const d3 = r[dataFieldName];
                    // const d4 = r[dataFieldName]?.total;
                    // const d5 = data?.length <= r[dataFieldName]?.total;
                    // const d6 = !!data?.length && data?.length <= r[dataFieldName]?.total;
                    // debugger;
                    if (!!r[dataFieldName]?.data?.length && data?.length < r[dataFieldName]?.total)
                        fetchdata(++page);
                    else
                        sub.complete();
                });
                fetchdata(1);
            });
        };
        //#endregion
        //#region DELETE
        this.delete = (route, options) => {
            this.logRoutes('delete', route);
            return this.http
                .delete(this.baseURL + route, options || {
                headers: new HttpHeaders(this.headers),
                responseType: 'json',
            })
                .pipe(map((r) => this.decrypt(r)), catchError(this.handleRequestError));
        };
        this.deleteWithBody = (route, body, options) => {
            this.logRoutes('delete', route);
            const req = new HttpRequest('DELETE', this.baseURL + route, HHenvironment.encryptAPIRequests ? this.encrypt(body) : body, options || {
                headers: new HttpHeaders(this.headers),
                responseType: 'json',
            });
            return this.http.request(req).pipe(map((r) => this.decrypt(r)), catchError(this.handleRequestError));
        };
        this.deleteText = (route) => this.delete(route, {
            headers: new HttpHeaders(this.headers),
            responseType: 'text',
        });
    }
    logRoutes(method, route, ...extras) {
        if (this.showRoutes) {
            console.log(method, route, ...extras);
        }
    }
    //#region PATCH
    patch(route, body, extras) {
        this.logRoutes('post', route, body);
        console.log(body);
        return this.http
            .patch(encodeURI(this.baseURL + route), !HHenvironment.encryptAPIRequests || extras?.dontEncrypt ? body : this.encrypt(body), {
            headers: new HttpHeaders(this.headers),
            responseType: 'json',
            ...extras?.options,
        })
            .pipe(map((r) => (HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
    }
    patchFile(route, body) {
        return this.patch(route, body, {
            options: {
                headers: new HttpHeaders(this.fileHeaders),
                responseType: 'json',
            },
            dontEncrypt: true,
        });
    }
    //#endregion
    //#region POST
    post(route, body, extras) {
        this.logRoutes('post', route, body);
        console.log(body);
        return this.http
            .post(encodeURI(this.baseURL + route), !HHenvironment.encryptAPIRequests || extras?.dontEncrypt ? body : this.encrypt(body), {
            headers: new HttpHeaders(this.headers),
            responseType: 'json',
            ...extras?.options,
        })
            .pipe(map((r) => (HHenvironment.encryptAPIRequests ? this.decrypt(r) : r)), catchError(this.handleRequestError));
    }
    postWithProgress(route, body) {
        return new Observable((sub) => {
            const fd = new FormData();
            this.logRoutes('post', route, body);
            Object.keys(body).forEach((key) => fd.append(key, body[key]));
            this.http
                .post(encodeURI(this.baseURL + route), fd, {
                headers: new HttpHeaders(this.fileHeaders),
                reportProgress: true,
                observe: 'events',
            })
                .subscribe({
                next: (event) => {
                    // debugger
                    if (event.type === HttpEventType.UploadProgress)
                        sub.next({
                            progress: (100 * event.loaded) / event.total,
                            uploaded: event.loaded == event.total,
                        });
                    else if (event.type === HttpEventType.Response) {
                        // debugger
                        sub.next({
                            body: this.decrypt(event.body),
                            uploaded: true,
                        });
                    }
                },
                error: (error) => {
                    sub.error(error?.error?.message || error?.statusText);
                    sub.complete();
                },
            });
        });
    }
    postFile(route, body) {
        return this.post(route, body, {
            options: {
                headers: new HttpHeaders(this.fileHeaders),
                responseType: 'json',
            },
            dontEncrypt: true,
        });
    }
    postString(route, body) {
        return this.post(route, body, {
            options: {
                headers: new HttpHeaders({
                    'Content-Type': 'text/plain',
                }),
                responseType: 'text',
            },
        });
    }
    getRequestParse(parameters) {
        if (!parameters)
            return '';
        return ('?' +
            Object.keys(parameters)
                .filter((key) => parameters[key]?.toString()?.trim() != null)
                .map((key) => `${key}=${parameters[key]?.toString()?.trim()}`)
                .join('&'));
    }
    //#endregion
    //#region PUT
    put(route, body, extras) {
        this.logRoutes('put', route, body);
        let query = route + '', nbody = body;
        if (extras?.requestType == 'queryParams') {
            query += this.getRequestParse(body);
            nbody = null;
        }
        console.log(body);
        return this.http
            .put(this.baseURL + query, extras?.dontEncrypt ? body : this.encrypt(nbody), {
            headers: new HttpHeaders(this.headers),
            responseType: 'json',
            ...extras?.options,
        })
            .pipe(map((r) => this.decrypt(r)), catchError(this.handleRequestError));
    }
    putFile(route, body) {
        return this.put(route, body, {
            options: {
                headers: new HttpHeaders(this.fileHeaders),
                responseType: 'json',
            },
            dontEncrypt: true,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ApiService, deps: [{ token: EncryptorService }, { token: i2$1.HttpClient }, { token: CacheService }, { token: LocalCacheService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ApiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: EncryptorService }, { type: i2$1.HttpClient }, { type: CacheService }, { type: LocalCacheService }]; } });

class AppService {
    get currentTopMenu() {
        return this._currentTopMenu;
    }
    set currentTopMenu(value) {
        this._currentTopMenu = value;
        // debugger
    }
    constructor(titleS, apiS, sS) {
        this.titleS = titleS;
        this.apiS = apiS;
        this.sS = sS;
        this.topMenu = HHenvironment.menus;
        this.setFullscreenMode = new BehaviorSubject(false);
        this.addTitle = (title) => {
            HHenvironment.pageTitle = title;
            this.titleS.setTitle((title ? title + ' | ' : '') +
                HHenvironment.appName +
                ' | ' +
                HHenvironment.name);
        };
    }
    setDefaultClass() { }
    //#region pagename
    get pageName() {
        return this._pageName;
    }
    set pageName(value) {
        this._pageName = value;
        this.addTitle(this._pageName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AppService, deps: [{ token: i4.Title }, { token: ApiService }, { token: StorageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AppService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i4.Title }, { type: ApiService }, { type: StorageService }]; } });

class AuthenticationInterceptorService {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        debugger;
        if (HHenvironment.token && req.url.startsWith(HHenvironment.apiBaseUrl)) {
            const reqAuth = req.clone({
                url: req.url,
                headers: req.headers
                    .set('Authorization', `Bearer ${HHenvironment?.token}`)
            });
            return next.handle(reqAuth).pipe(tap({
                next: (event) => { },
                error: (e) => {
                    // debugger
                    if (e['status'] == 401 && location.pathname != '/auth/login') {
                        console.error(`About to be loggeed out due to 401 `, e, req);
                        localStorage.clear();
                        sessionStorage.clear();
                        location.href = '/auth/login';
                    }
                },
            }));
        }
        else
            return next.handle(req);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AuthenticationInterceptorService, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AuthenticationInterceptorService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AuthenticationInterceptorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.Router }]; } });

class GlobalErrorHandlerService extends ErrorHandler {
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

class MultiTenantInterceptorService {
    constructor(router) {
        this.router = router;
        this.activeSubdomainSite = 'localhost';
        this.whiteList = ['localhost', 'payer', 'www', 'orange-dev'];
        this.getActiveSite = () => {
            if (HHenvironment.activeSubdomainSite) {
                this.activeSubdomainSite = HHenvironment.activeSubdomainSite;
            }
            let url = location.hostname;
            url = url.split('www.').filter((x) => x)[0];
            url = url.split('iras.ng')[0];
            url = url.split('.')[0];
            if (url?.length > 0)
                this.activeSubdomainSite = url;
            else
                this.activeSubdomainSite = null;
            this.activeSubdomainSite = this.activeSubdomainSite?.toLowerCase();
            return this.activeSubdomainSite;
        };
        // intercept = () => {
        //   this.getActiveSite();
        // };
        this.isClientAdminSubdomain = () => {
            this.getActiveSite();
            return this.activeSubdomainSite
                ? !this.whiteList.includes(this.activeSubdomainSite)
                : false;
        };
        this.canViewGeneralSite = () => {
            // debugger;
            this.getActiveSite();
            if (!this.activeSubdomainSite ||
                this.whiteList.includes(this.activeSubdomainSite))
                return true;
            else {
                this.router.navigateByUrl('/dashboard');
                return false;
            }
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MultiTenantInterceptorService, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MultiTenantInterceptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MultiTenantInterceptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }]; } });

class RequestLoggerInterceptorService {
    constructor() { }
    intercept(req, next) {
        HHenvironment.pageLoader.startPl();
        return next.handle(req).pipe(tap((event) => {
            if (event instanceof HttpResponse ||
                event instanceof HttpErrorResponse) {
                HHenvironment.pageLoader.stopPl();
            }
        }, (err) => {
            HHenvironment.pageLoader.stopPl();
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestLoggerInterceptorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestLoggerInterceptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestLoggerInterceptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

const DEFAULT_TIMEOUT = new InjectionToken('defaultTimeout');
class RequestTimeoutInterceptorService {
    constructor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    intercept(req, next) {
        // if (+req.headers.get('timeout') || environment.requestTimeout)
        //   console.log(
        //     'timeout',
        //     +req.headers.get('timeout') ,
        //       environment.requestTimeout ,
        //       this.defaultTimeout
        //   );
        // console.log(
        //   +req.headers.get('timeout') ,
        //     environment.requestTimeout ,
        //     this.defaultTimeout
        // );
        const tout = +req.headers.get('timeout') ||
            HHenvironment.requestTimeout ||
            this.defaultTimeout;
        // console.log('timeout period',tout);
        // return next.handle(req)
        return next
            .handle(req)
            .pipe(timeout(new Date(Config.TimeStampDay * 365 + Date.now())));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestTimeoutInterceptorService, deps: [{ token: DEFAULT_TIMEOUT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestTimeoutInterceptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: RequestTimeoutInterceptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DEFAULT_TIMEOUT]
                }] }]; } });

class PromptUpdateService {
    constructor(swUpdate, uS) {
        this.uS = uS;
        swUpdate.versionUpdates
            .pipe(filter((evt) => evt.type === 'VERSION_READY'))
            .subscribe((evt) => {
            this.prompter();
        });
    }
    prompter(reason) {
        // document.location.reload();
        return;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PromptUpdateService, deps: [{ token: i1$2.SwUpdate }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PromptUpdateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PromptUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$2.SwUpdate }, { type: UtilityService }]; } });

class CheckForUpdateService {
    constructor(appRef, updates, puS) {
        this.appRef = appRef;
        this.updates = updates;
        this.puS = puS;
        this.init();
    }
    init(itvl, cb) {
        // Allow the app to stabilize first, before starting
        // polling for updates with `interval()`.
        const appIsStable$ = this.appRef.isStable.pipe(first((isStable) => {
            console.log('checking for stability ', isStable);
            return isStable === true;
        }));
        // const everySixHours$ = interval(itvl ||  1000);
        const everySixHours$ = interval(itvl || 30 * 60 * 1000);
        const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
        everySixHours$.subscribe(async () => {
            try {
                console.log('checking update');
                // alert('checking update');
                const updateFound = await this.updates.checkForUpdate();
                if (updateFound)
                    cb ? cb() : this.puS.prompter();
                else
                    console.log('found no update');
            }
            catch (err) {
                if (this.updates.isEnabled)
                    console.error('Failed to check for updates:', err);
                else
                    console.log('found no update');
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CheckForUpdateService, deps: [{ token: i0.ApplicationRef }, { token: i1$2.SwUpdate }, { token: PromptUpdateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CheckForUpdateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CheckForUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.ApplicationRef }, { type: i1$2.SwUpdate }, { type: PromptUpdateService }]; } });

class HandleUnrecoverableStateService {
    constructor(updates, uS, puS) {
        this.uS = uS;
        this.puS = puS;
        updates.unrecoverable.subscribe((event) => {
            console.log(event.reason);
            alert(event.reason);
            this.puS.prompter('An error occurred that we cannot recover from:\n' + event.reason);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HandleUnrecoverableStateService, deps: [{ token: i1$2.SwUpdate }, { token: UtilityService }, { token: PromptUpdateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HandleUnrecoverableStateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: HandleUnrecoverableStateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$2.SwUpdate }, { type: UtilityService }, { type: PromptUpdateService }]; } });

class LogUpdateService {
    constructor(updates, uS) {
        // console.log('logging');
        this.uS = uS;
        updates.versionUpdates.subscribe((evt) => {
            let message;
            switch (evt.type) {
                case 'VERSION_DETECTED':
                    message = `Downloading new app version`;
                    console.log(`${message}: ${evt.version.hash}`);
                    // this.uS.notify(message, 2);
                    break;
                case 'VERSION_READY':
                    message = `New app version ready for use`;
                    console.log(`Current app version: ${evt.currentVersion.hash}`);
                    console.log(`${message}: ${evt.latestVersion.hash}`);
                    // this.uS.notify(message, 1);
                    break;
                case 'VERSION_INSTALLATION_FAILED':
                    message = `Failed to install app version`;
                    console.log(`${message} '${evt.version.hash}': ${evt.error}`);
                    // this.uS.notify(message, 0);
                    break;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LogUpdateService, deps: [{ token: i1$2.SwUpdate }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LogUpdateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LogUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$2.SwUpdate }, { type: UtilityService }]; } });

class ServiceWorkerService {
    constructor(puS, luS, huS, cfuS, uS) {
        this.puS = puS;
        this.luS = luS;
        this.huS = huS;
        this.cfuS = cfuS;
        this.uS = uS;
    }
    async getUpdates(cb) {
        console.log('checking update 1');
        const appIsStable$ = this.cfuS.appRef.isStable.pipe(first((isStable) => {
            console.log('checking for stability ', isStable);
            return isStable === true;
        }));
        console.log('checking update 2');
        // appIsStable$.subscribe(async () => {
        try {
            console.log('checking update 3');
            const updateFound = await this.cfuS.updates.checkForUpdate();
            if (updateFound)
                this.puS.prompter();
            // else this.uS.info(`No new versions were found`, 1);
            if (cb)
                cb();
        }
        catch (err) {
            // this.uS.info(`Failed to check for updates`, 0);
            console.error('Failed to check for updates:', err);
            if (cb)
                cb();
        }
        // });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ServiceWorkerService, deps: [{ token: PromptUpdateService }, { token: LogUpdateService }, { token: HandleUnrecoverableStateService }, { token: CheckForUpdateService }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ServiceWorkerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ServiceWorkerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: PromptUpdateService }, { type: LogUpdateService }, { type: HandleUnrecoverableStateService }, { type: CheckForUpdateService }, { type: UtilityService }]; } });

class TawkIoService {
    constructor(rendererFactory, _document, LocalStorageService) {
        this.rendererFactory = rendererFactory;
        this._document = _document;
        this.LocalStorageService = LocalStorageService;
        this.loadSubject = new Subject();
        if (HHenvironment?.tawkIOConfig?.propertyId) {
            this.renderer = rendererFactory.createRenderer(null, null);
            this.load();
        }
    }
    load() {
        if (this.loaded)
            return;
        const s = this.renderer.createElement('script');
        s.type = 'text/javascript';
        s.text =
            'var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); ' +
                '(function(){ ' +
                'var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; ' +
                's1.async=true; ' +
                `s1.src='https://embed.tawk.to/${HHenvironment.tawkIOConfig.propertyId}/${HHenvironment.tawkIOConfig.widgetId}'; ` +
                "s1.charset='UTF-8'; " +
                "s1.setAttribute('crossorigin','*'); " +
                's0.parentNode.insertBefore(s1,s0); ' +
                '})();';
        this.renderer.appendChild(this._document.body, s);
        Tawk_API.onLoad = this.loadedEvent.bind(this);
    }
    loadedEvent() {
        this.loaded = true;
        this.loadSubject.next(this.loaded);
    }
    UpdateTawkUser(user) {
        this.loadedWrapper(() => {
            this.updateAtrributes(user);
        });
    }
    loadedWrapper(func) {
        if (!this.loaded) {
            var sub = this.loadSubject.asObservable().subscribe({
                next: () => {
                    func();
                    sub.unsubscribe();
                },
                error: () => { },
            });
        }
        else {
            func();
        }
    }
    ExpandChatWindow(show = false) {
        this.loadedWrapper(() => (show ? Tawk_API.maximize() : Tawk_API.minimize()));
    }
    SetChatVisibility(show = false) {
        this.loadedWrapper(() => (show ? Tawk_API.showWidget() : Tawk_API.hideWidget()));
    }
    updateAtrributes(user) {
        Tawk_API.setAttributes({
            name: `${user.firstname} ${user.surname}`,
            email: user.email,
            id: user.id,
        }, function (error) { });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TawkIoService, deps: [{ token: i0.RendererFactory2 }, { token: DOCUMENT }, { token: StorageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TawkIoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TawkIoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: StorageService }]; } });

class WebsocketService {
    constructor(uS) {
        this.uS = uS;
        this.sockets = {
            coreEV: HHenvironment.useWebSocket ? new IRSocket() : null,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: WebsocketService, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: WebsocketService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: WebsocketService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; } });
class IRSocket {
    get id() {
        return this.socket?.id;
    }
    get isConnected() {
        return this.socket?.connected;
    }
    /**
     *
     * @param basePath Websocket url as a prefix. Defaults to use the base api to form a websocket URL
     * @param path Path to the websocket to listen to.
     */
    constructor(basePath, path) {
        this.maxRetryCount = 5;
        this.onConnectionError = new ReplaySubject();
        this.onDisconnect = new ReplaySubject();
        this.listeners = {};
        this.retryCount = 0;
        this.route =
            basePath ||
                HHenvironment.apiBaseUrl
                    ?.replace('https', 'wss')
                    ?.replace('http', 'ws')
                    .replace('/api/', '/');
        // if (!this.route.endsWith('/')) this.route += '/';
        if (this.route.endsWith('/'))
            this.route;
        // console.log(this.route);
        // debugger;
        this.socket = io(this.route);
        // this.socket = io();
        this.socket.on('connect', () => {
            // console.log(this.socket.connected); // true
        });
        this.socket.on('connect_error', (e) => {
            if (this.retryCount < this.maxRetryCount)
                this.onConnectionError.next(e);
            else {
                setTimeout(() => {
                    this.retryCount++;
                    this.socket.connect();
                }, 700);
            }
            // console.log(this.socket.connected); // true
        });
        this.addListener(path);
        this.socket.on('disconnect', (e) => {
            this.onDisconnect.next(e);
            // console.log(this.socket.connected); // false
        });
    }
    /**
     *
     * @param path
     * @param identifier @defualt environment.user.user.id
     * @returns
     */
    addListener(path, identifier = this.identifier) {
        if (path) {
            if (!this.listeners[path]) {
                this.listeners[path] = new ReplaySubject();
                console.log(path + (identifier ? '-' + identifier : ''));
                this.socket.on(path + (identifier ? '-' + identifier : ''), (args) => {
                    console.log(args);
                    this.listeners[path].next(args);
                });
            }
            return this.listeners[path];
        }
        else
            return null;
    }
    removeListener(path) {
        if (path) {
            this.socket.off(path);
            this.listeners[path]?.complete();
            delete this.listeners[path];
        }
    }
}

class ProgressLoader extends Loader {
    constructor(obj) {
        super();
        if (obj)
            Object.assign(this, obj);
    }
}
class ProgressLoaders {
    constructor() {
        this.loaders = [];
    }
    addLoader(loader) {
        loader = loader || new ProgressLoader();
        loader.timeAdded = Date.now();
        this.loaders.push(loader);
        return loader;
    }
    /**
     * Checks if all the loaders in the loaders array have stopped loaded
     */
    get isLoading() {
        return this.loaders?.some((x) => x.isLoading);
    }
    get latestLoaderLoading() {
        return this.loaders?.find((x) => x.isLoading);
    }
    get currentLoaderText() {
        return this.latestLoaderLoading?.loaderText;
    }
    resetLoaders() {
        this.loaders = [];
    }
    stopAllLoaders() {
        this.loaders?.forEach((x) => x.stopAllPls());
    }
}

class SelectionData {
    get selectedItem() {
        return this.selectedItems[0];
    }
    get count() {
        return this.selectedItems.length;
    }
    constructor(sourceArr) {
        this.selectedItems = [];
        this.selectedMap = {};
        this.sourceData = [];
        Object.assign(this.sourceData, sourceArr);
    }
    itemChanged(id, e) {
        if (e.checked)
            this.addSelectedItem(id);
        else
            this.removeSelectedItem(id);
    }
    addSelectedItem(id) {
        // debugger;
        if (this.selectedMap[id])
            return;
        const item = this.sourceData?.find((x) => x['id'] == id);
        if (item) {
            this.selectedMap[id] = true;
            this.selectedItems.push(item);
        }
    }
    removeSelectedItem(id) {
        this.selectedMap[id] = false;
        this.selectedItems = this.selectedItems?.filter((x) => x['id'] != id);
    }
    reset() {
        this.selectedItems = [];
        this.selectedMap = {};
    }
}

class InputService {
    constructor() {
        this.defaultValue = {
            showSeperateLabel: true,
            showValidationMsg: true,
        };
        this.labeller = (field1, field2) => {
            // debugger;
            field1 = field1?.toString()?.trim();
            field2 = field2?.toString()?.trim();
            if (field1 != null && field2 != null)
                return { value: field1, label: field1 + ' - ' + field2 };
            else
                return { value: field1, label: field1 || field2 };
        };
        this.optionsFormatter = (options, valueField, formatter, labelType, labelField, autoPickValueField) => {
            if (!options?.length)
                return [];
            if (formatter)
                return options.map((option) => ({
                    value: valueField && option ? option[valueField] : option,
                    label: formatter(option),
                }));
            if (labelType)
                return options.map((option) => {
                    const formattedOption = this.optionLabellerFunctions[labelType](option);
                    return {
                        value: valueField
                            ? option[valueField]
                            : autoPickValueField
                                ? formattedOption.value
                                : option,
                        label: formattedOption.label,
                    };
                });
            if (labelField)
                return options.map((option) => ({
                    value: valueField ? option[valueField] : option,
                    label: option[labelField],
                }));
            return options.map((option) => ({ value: option, label: option }));
        };
        const labeller = this.labeller;
        this.optionLabellerFunctions = {
            bnk: (option) => labeller(option?.accountName +
                '  |  ' +
                option?.accountNo +
                '  |  ' +
                option?.bankName +
                '  |  ' +
                option?.no, null),
            ccd: (option) => labeller(option?.companyCode, option?.description),
            cd: (option) => labeller(option?.code, option?.description),
            cdt: (option) => labeller(option?.code, option?.description || option?.title),
            cf: (option) => labeller(option?.code, option?.fullName),
            cmd: (option) => labeller(option?.company, option?.description),
            cn: (option) => labeller(option?.code, option?.name),
            ct: (option) => labeller(option?.code, option?.title),
            gd: (option) => labeller(option?.group, option?.description),
            ha: (option) => labeller(option?.hierAgentNo, option?.agentName),
            id: (option) => labeller(option?.id, option?.description),
            if: (option) => labeller(option?.id, option?.fullName),
            ifl: (option) => labeller(option?.userId, `${option?.firstName} ${option?.lastName}`),
            it: (option) => labeller(option?.id, option?.title),
            md: (option) => labeller(option?.mktEventCode, option?.description),
            pd: (option) => labeller(option?.payoutMethod, option?.description),
            nf: (option) => labeller(option?.no, option?.fullName),
            td: (option) => labeller(option?.type, option?.description),
            ud: (option) => labeller(option?.userMenu, option?.description),
            uf: (option) => labeller(option?.userName, option?.fullName),
            vl: (option) => labeller(null, option?.label),
            vv: (option) => labeller(option?.versionNo, option?.versionDate),
        };
    }
    trackByValue(index, item) {
        return item.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class FilterOptions {
    transform(arr = [], query, field = 'label') {
        query = query?.toLowerCase()?.trim();
        arr = arr ? arr : [];
        return [
            ...arr.filter((x) => x[field].toLowerCase().startsWith(query)),
            ...(arr
                .filter((x) => !x[field].toLowerCase().startsWith(query))
                ?.filter((x) => x[field].toLowerCase().includes(query)) || []),
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterOptions, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: FilterOptions, isStandalone: true, name: "filterOptions" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FilterOptions, decorators: [{
            type: Pipe,
            args: [{
                    name: 'filterOptions',
                    standalone: true,
                }]
        }] });
class OptionerPipe {
    transform(options, labelField, idField, basic) {
        if (options) {
            if (labelField && idField) {
                return basic
                    ? options.map((x) => ({
                        label: this.arrToStr(labelField, x),
                        value: x[idField],
                    }))
                    : options.map((x) => ({
                        label: this.arrToStr(labelField, x),
                        value: x,
                    }));
            }
            else {
                return options.map((x) => ({
                    label: x,
                    value: x,
                }));
            }
        }
        else {
            return [];
        }
    }
    arrToStr(labelField, x) {
        const fs = labelField.split('|');
        if (fs.length > 1) {
            let l = '';
            fs.forEach((field) => {
                l += x[field] + ' ';
            });
            return l;
        }
        else {
            return x[labelField];
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionerPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: OptionerPipe, isStandalone: true, name: "optioner" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionerPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'optioner',
                    standalone: true
                }]
        }] });
class ValidationMsg {
    transform(message, prefix, suffix) {
        return ((prefix ? prefix + ' ' : '') + message + (suffix ? ' ' + suffix : ''));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMsg, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ValidationMsg, isStandalone: true, name: "validationMsg" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMsg, decorators: [{
            type: Pipe,
            args: [{
                    name: 'validationMsg',
                    standalone: true,
                }]
        }] });
class Validator {
    transform(validation, control, update) {
        return (control &&
            control?.hasError(validation?.type) &&
            (control?.touched || control?.dirty));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: Validator, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: Validator, isStandalone: true, name: "validator" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: Validator, decorators: [{
            type: Pipe,
            args: [{
                    name: 'validator',
                    standalone: true,
                }]
        }] });
class OptionLabeller {
    transform(option, formatter, optionType, labelField) {
        if (formatter)
            return formatter(option);
        if (optionType)
            return this.iS.optionLabellerFunctions[optionType](option).label;
        if (labelField)
            return option[labelField];
        return option;
    }
    constructor(iS) {
        this.iS = iS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionLabeller, deps: [{ token: InputService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: OptionLabeller, isStandalone: true, name: "optionLabeller" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionLabeller, decorators: [{
            type: Pipe,
            args: [{
                    name: 'optionLabeller',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: InputService }]; } });
class OptionsFormatter {
    transform(options, valueField, formatter, optionType, labelField) {
        return this.iS.optionsFormatter(options, valueField, formatter, optionType, labelField);
    }
    constructor(iS) {
        this.iS = iS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionsFormatter, deps: [{ token: InputService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: OptionsFormatter, isStandalone: true, name: "optionsFormatter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OptionsFormatter, decorators: [{
            type: Pipe,
            args: [{
                    name: 'optionsFormatter',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: InputService }]; } });
class InputClassPipe {
    transform(inpCl, valid, invalid, showValidation) {
        let cls = inpCl + '  ';
        if (showValidation) {
            cls += valid ? ' bordercheck' : invalid ? ' borderuncheck' : '';
        }
        return cls;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: InputClassPipe, isStandalone: true, name: "inputClass" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputClassPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'inputClass',
                    standalone: true
                }]
        }] });
const comps = [
    FilterOptions,
    Validator,
    ValidationMsg,
    OptionerPipe,
    OptionLabeller,
    OptionsFormatter,
    InputClassPipe,
];
const modules = [FormsModule];
class InputPipesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, imports: [CommonModule, FormsModule, FilterOptions, Validator, ValidationMsg, OptionerPipe, OptionLabeller, OptionsFormatter, InputClassPipe], exports: [FilterOptions, Validator, ValidationMsg, OptionerPipe, OptionLabeller, OptionsFormatter, InputClassPipe, FormsModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, imports: [CommonModule, modules, FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...modules, ...comps],
                    exports: [...comps, ...modules],
                }]
        }] });

class ErrorMessagesPipe {
    transform(validations, label, maxLength, minLength, control) {
        let msg = validations
            ?.filter((error) => control?.errors[error.type])
            ?.map((error) => this.errMsgPipe.transform(error, label, maxLength, minLength, control?.errors[error.type]))
            .join('\n');
        // debugger
        return msg;
    }
    constructor(errMsgPipe) {
        this.errMsgPipe = errMsgPipe;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagesPipe, deps: [{ token: ErrorMessagePipe }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagesPipe, isStandalone: true, name: "errorMessages" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagesPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'errorMessages',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: ErrorMessagePipe }]; } });
class ErrorMessagePipe {
    transform(errObj, label, maxLength, minLength, controlMessage) {
        let msg = errObj.type == EValidationType.custom
            ? controlMessage
            : errObj.message
                ? errObj.message.startsWith(' ')
                    ? (label || 'Field') + errObj.message
                    : errObj.message
                : null;
        msg = msg?.replace('{{maxLength}}', maxLength?.toString());
        msg = msg?.replace('{{minLength}}', minLength?.toString());
        return msg;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagePipe, isStandalone: true, name: "errorMessage" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ErrorMessagePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'errorMessage',
                    standalone: true,
                }]
        }] });
class ValidationMessageComponent {
    set _validationKey(v) {
        // debugger;
        this.validationType = v;
        this.validations = configValidationMessages[this.validationType];
    }
    constructor() { }
    ngOnInit() {
        if (!this.validationType)
            this._validationKey = EValidationType.normal;
    }
    get label() {
        return this._label || this.input?.label;
    }
    get control() {
        return this._control || this.input?.control;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ValidationMessageComponent, isStandalone: true, selector: "app-validation-message", inputs: { _validationKey: ["validationKey", "_validationKey"], _control: ["control", "_control"], input: "input", _label: ["label", "_label"], minLength: "minLength", maxLength: "maxLength", customMessage: "customMessage" }, providers: [ErrorMessagePipe], ngImport: i0, template: "<div class=\"text-danger\">\n  <ng-container *ngIf=\"control?.errors && (control?.dirty || control?.touched)\">\n    <ng-container *ngFor=\"let error of validations\">\n      <span class=\"me-2\" *ngIf=\"control?.errors[error.type] as controlMessage\"> \n        {{((error|errorMessage:label:maxLength:minLength:controlMessage)||customMessage)}}\n      </span>\n    </ng-container>\n  </ng-container>\n</div>\n", styles: [".text-danger{height:25px;margin-top:5px;overflow:auto}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: ErrorMessagePipe, name: "errorMessage" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ValidationMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-validation-message', standalone: true, imports: [NgIf, NgFor, ErrorMessagesPipe, ErrorMessagePipe], providers: [ErrorMessagePipe], template: "<div class=\"text-danger\">\n  <ng-container *ngIf=\"control?.errors && (control?.dirty || control?.touched)\">\n    <ng-container *ngFor=\"let error of validations\">\n      <span class=\"me-2\" *ngIf=\"control?.errors[error.type] as controlMessage\"> \n        {{((error|errorMessage:label:maxLength:minLength:controlMessage)||customMessage)}}\n      </span>\n    </ng-container>\n  </ng-container>\n</div>\n", styles: [".text-danger{height:25px;margin-top:5px;overflow:auto}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { _validationKey: [{
                type: Input,
                args: ['validationKey']
            }], _control: [{
                type: Input,
                args: ['control']
            }], input: [{
                type: Input
            }], _label: [{
                type: Input,
                args: ['label']
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], customMessage: [{
                type: Input
            }] } });

class SvgIconService {
    constructor() {
        this.icons = {
            add: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1V9M9 5H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            attachment: `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3125 9.61605L7.90169 16.0269C7.19842 16.7301 6.24459 17.1252 5.25002 17.1252C4.25546 17.1252 3.30162 16.7301 2.59836 16.0269C1.89509 15.3236 1.5 14.3698 1.5 13.3752C1.5 12.3806 1.89509 11.4268 2.59836 10.7235L11.715 1.60688C11.9472 1.37477 12.2229 1.19067 12.5263 1.06509C12.8296 0.939516 13.1548 0.874923 13.4831 0.875C13.8114 0.875077 14.1365 0.939824 14.4399 1.06554C14.7432 1.19126 15.0187 1.37549 15.2509 1.60771C15.483 1.83993 15.6671 2.1156 15.7926 2.41897C15.9182 2.72234 15.9828 3.04747 15.9827 3.3758C15.9827 3.70413 15.9179 4.02924 15.7922 4.33255C15.6665 4.63586 15.4822 4.91143 15.25 5.14355L6.12669 14.2669C5.89001 14.4938 5.57366 14.6178 5.24581 14.6136C4.91797 14.6095 4.60488 14.4767 4.37402 14.2438C4.14317 14.011 4.01303 13.6968 4.01166 13.3689C4.01029 13.0411 4.13779 12.7258 4.36669 12.491L10.875 5.98271M6.13419 14.2585L6.12586 14.2669" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            back: `<svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 8.75L1 5M1 5L4.75 1.25M1 5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            'back-2': `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 16.5L7.25 9L14.75 1.5M8.75 16.5L1.25 9L8.75 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            billing: `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 5.375C17.25 7.653 13.556 9.5 9 9.5C4.444 9.5 0.75 7.653 0.75 5.375M17.25 5.375C17.25 3.097 13.556 1.25 9 1.25C4.444 1.25 0.75 3.097 0.75 5.375M17.25 5.375V16.625C17.25 18.903 13.556 20.75 9 20.75C4.444 20.75 0.75 18.903 0.75 16.625V5.375M17.25 5.375V9.125M0.75 5.375V9.125M17.25 9.125V12.875C17.25 15.153 13.556 17 9 17C4.444 17 0.75 15.153 0.75 12.875V9.125M17.25 9.125C17.25 11.403 13.556 13.25 9 13.25C4.444 13.25 0.75 11.403 0.75 9.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            'billing-2': `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.5V9.625M12.125 16.5V9.625M5.875 16.5V9.625M1.5 6.5L9 1.5L16.5 6.5M15.25 16.5V7.61C13.1824 7.2863 11.0928 7.12414 9 7.125C6.87417 7.125 4.78667 7.29167 2.75 7.61V16.5M1.5 16.5H16.5M9 4.625H9.00667V4.63167H9V4.625Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            close: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            country: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1V2M1 13V9M1 9L2.84667 8.538C4.23627 8.1907 5.70427 8.35197 6.98533 8.99267L7.05733 9.02867C8.31279 9.65614 9.74849 9.82363 11.1147 9.502L13.1907 9.014C12.9364 6.68788 12.9353 4.34103 13.1873 2.01467L11.114 2.50267C9.74795 2.82393 8.31252 2.6562 7.05733 2.02867L6.98533 1.99267C5.70427 1.35197 4.23627 1.1907 2.84667 1.538L1 2M1 9V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            calendar: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.9375 0.75V2.0625M9.0625 0.75V2.0625M0.75 9.9375V3.375C0.75 3.0269 0.888281 2.69306 1.13442 2.44692C1.38056 2.20078 1.7144 2.0625 2.0625 2.0625H9.9375C10.2856 2.0625 10.6194 2.20078 10.8656 2.44692C11.1117 2.69306 11.25 3.0269 11.25 3.375V9.9375M0.75 9.9375C0.75 10.2856 0.888281 10.6194 1.13442 10.8656C1.38056 11.1117 1.7144 11.25 2.0625 11.25H9.9375C10.2856 11.25 10.6194 11.1117 10.8656 10.8656C11.1117 10.6194 11.25 10.2856 11.25 9.9375M0.75 9.9375V5.5625C0.75 5.2144 0.888281 4.88056 1.13442 4.63442C1.38056 4.38828 1.7144 4.25 2.0625 4.25H9.9375C10.2856 4.25 10.6194 4.38828 10.8656 4.63442C11.1117 4.88056 11.25 5.2144 11.25 5.5625V9.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            comment: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 5.875H12.75M5.25 8.375H9M0.875 9.63334C0.875 10.9667 1.81083 12.1283 3.13083 12.3225C4.07167 12.4608 5.0225 12.5667 5.98333 12.6383C6.275 12.66 6.54167 12.8133 6.70417 13.0558L9 16.5L11.2958 13.0558C11.3764 12.9361 11.4831 12.8362 11.608 12.7639C11.733 12.6915 11.8727 12.6486 12.0167 12.6383C12.971 12.5671 13.9224 12.4617 14.8692 12.3225C16.1892 12.1283 17.125 10.9675 17.125 9.6325V4.6175C17.125 3.2825 16.1892 2.12167 14.8692 1.9275C12.9258 1.64226 10.9642 1.49938 9 1.5C7.00667 1.5 5.04667 1.64584 3.13083 1.9275C1.81083 2.12167 0.875 3.28334 0.875 4.6175V9.6325V9.63334Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            copy: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.5V3C10 2.60218 9.84196 2.22064 9.56066 1.93934C9.27936 1.65804 8.89782 1.5 8.5 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V8.5C1.5 8.89782 1.65804 9.27936 1.93934 9.56066C2.22064 9.84196 2.60218 10 3 10H4.5M10 4.5H11C11.3978 4.5 11.7794 4.65804 12.0607 4.93934C12.342 5.22064 12.5 5.60218 12.5 6V11C12.5 11.3978 12.342 11.7794 12.0607 12.0607C11.7794 12.342 11.3978 12.5 11 12.5H6C5.60218 12.5 5.22064 12.342 4.93934 12.0607C4.65804 11.7794 4.5 11.3978 4.5 11V10M10 4.5H6C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            dashboard: `<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 2.125C1.25 1.504 1.754 1 2.375 1H8.375C8.996 1 9.5 1.504 9.5 2.125V5.875C9.5 6.496 8.996 7 8.375 7H2.375C2.07663 7 1.79048 6.88147 1.5795 6.6705C1.36853 6.45952 1.25 6.17337 1.25 5.875V2.125ZM13.25 3.625C13.25 3.004 13.754 2.5 14.375 2.5H19.625C20.246 2.5 20.75 3.004 20.75 3.625V11.875C20.75 12.496 20.246 13 19.625 13H14.375C14.0766 13 13.7905 12.8815 13.5795 12.6705C13.3685 12.4595 13.25 12.1734 13.25 11.875V3.625ZM2.75 11.125C2.75 10.504 3.254 10 3.875 10H9.125C9.746 10 10.25 10.504 10.25 11.125V13.375C10.25 13.996 9.746 14.5 9.125 14.5H3.875C3.57663 14.5 3.29048 14.3815 3.0795 14.1705C2.86853 13.9595 2.75 13.6734 2.75 13.375V11.125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            'dashboard-2': `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 3C1.125 2.50272 1.32254 2.02581 1.67417 1.67417C2.02581 1.32254 2.50272 1.125 3 1.125H4.875C5.37228 1.125 5.84919 1.32254 6.20082 1.67417C6.55246 2.02581 6.75 2.50272 6.75 3V4.875C6.75 5.37228 6.55246 5.84919 6.20082 6.20082C5.84919 6.55246 5.37228 6.75 4.875 6.75H3C2.50272 6.75 2.02581 6.55246 1.67417 6.20082C1.32254 5.84919 1.125 5.37228 1.125 4.875V3ZM1.125 11.125C1.125 10.6277 1.32254 10.1508 1.67417 9.79917C2.02581 9.44754 2.50272 9.25 3 9.25H4.875C5.37228 9.25 5.84919 9.44754 6.20082 9.79917C6.55246 10.1508 6.75 10.6277 6.75 11.125V13C6.75 13.4973 6.55246 13.9742 6.20082 14.3258C5.84919 14.6775 5.37228 14.875 4.875 14.875H3C2.50272 14.875 2.02581 14.6775 1.67417 14.3258C1.32254 13.9742 1.125 13.4973 1.125 13V11.125ZM9.25 3C9.25 2.50272 9.44754 2.02581 9.79917 1.67417C10.1508 1.32254 10.6277 1.125 11.125 1.125H13C13.4973 1.125 13.9742 1.32254 14.3258 1.67417C14.6775 2.02581 14.875 2.50272 14.875 3V4.875C14.875 5.37228 14.6775 5.84919 14.3258 6.20082C13.9742 6.55246 13.4973 6.75 13 6.75H11.125C10.6277 6.75 10.1508 6.55246 9.79917 6.20082C9.44754 5.84919 9.25 5.37228 9.25 4.875V3ZM9.25 11.125C9.25 10.6277 9.44754 10.1508 9.79917 9.79917C10.1508 9.44754 10.6277 9.25 11.125 9.25H13C13.4973 9.25 13.9742 9.44754 14.3258 9.79917C14.6775 10.1508 14.875 10.6277 14.875 11.125V13C14.875 13.4973 14.6775 13.9742 14.3258 14.3258C13.9742 14.6775 13.4973 14.875 13 14.875H11.125C10.6277 14.875 10.1508 14.6775 9.79917 14.3258C9.44754 13.9742 9.25 13.4973 9.25 13V11.125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            delete: `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.82667 6.0001L8.596 12.0001M5.404 12.0001L5.17333 6.0001M11.8187 3.8601C12.0467 3.89477 12.2733 3.93144 12.5 3.97077M11.8187 3.86077L11.1067 13.1154C11.0776 13.4923 10.9074 13.8442 10.63 14.1009C10.3527 14.3577 9.9886 14.5002 9.61067 14.5001H4.38933C4.0114 14.5002 3.64735 14.3577 3.36999 14.1009C3.09262 13.8442 2.92239 13.4923 2.89333 13.1154L2.18133 3.8601M11.8187 3.8601C11.0492 3.74378 10.2758 3.6555 9.5 3.59544M1.5 3.9701C1.72667 3.93077 1.95333 3.8941 2.18133 3.8601M2.18133 3.8601C2.95076 3.74378 3.72416 3.6555 4.5 3.59544M9.5 3.59544V2.98477C9.5 2.1981 8.89333 1.5421 8.10667 1.51744C7.36908 1.49386 6.63092 1.49386 5.89333 1.51744C5.10667 1.5421 4.5 2.19877 4.5 2.98477V3.59544M9.5 3.59544C7.83581 3.46682 6.16419 3.46682 4.5 3.59544" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            'down-chevron': `<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6665 1L5.99984 5.66667L1.33317 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            dispatch: `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50008 6.33333H0.666748V1.33578C0.666748 0.874192 1.04617 0.5 1.49325 0.5H16.5069C16.9634 0.5 17.3334 0.8649 17.3334 1.33578V6.33333H16.5001V14.6679C16.5001 15.1275 16.1293 15.5 15.6722 15.5H2.32791C1.87071 15.5 1.50008 15.1271 1.50008 14.6679V6.33333ZM14.8334 6.33333H3.16675V13.8333H14.8334V6.33333ZM2.33341 2.16667V4.66667H15.6667V2.16667H2.33341ZM6.50008 8H11.5001V9.66667H6.50008V8Z" fill="currentColor"/></svg>`,
            grid: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 3C1.125 2.50272 1.32254 2.02581 1.67417 1.67417C2.02581 1.32254 2.50272 1.125 3 1.125H4.875C5.37228 1.125 5.84919 1.32254 6.20082 1.67417C6.55246 2.02581 6.75 2.50272 6.75 3V4.875C6.75 5.37228 6.55246 5.84919 6.20082 6.20082C5.84919 6.55246 5.37228 6.75 4.875 6.75H3C2.50272 6.75 2.02581 6.55246 1.67417 6.20082C1.32254 5.84919 1.125 5.37228 1.125 4.875V3ZM1.125 11.125C1.125 10.6277 1.32254 10.1508 1.67417 9.79917C2.02581 9.44754 2.50272 9.25 3 9.25H4.875C5.37228 9.25 5.84919 9.44754 6.20082 9.79917C6.55246 10.1508 6.75 10.6277 6.75 11.125V13C6.75 13.4973 6.55246 13.9742 6.20082 14.3258C5.84919 14.6775 5.37228 14.875 4.875 14.875H3C2.50272 14.875 2.02581 14.6775 1.67417 14.3258C1.32254 13.9742 1.125 13.4973 1.125 13V11.125ZM9.25 3C9.25 2.50272 9.44754 2.02581 9.79917 1.67417C10.1508 1.32254 10.6277 1.125 11.125 1.125H13C13.4973 1.125 13.9742 1.32254 14.3258 1.67417C14.6775 2.02581 14.875 2.50272 14.875 3V4.875C14.875 5.37228 14.6775 5.84919 14.3258 6.20082C13.9742 6.55246 13.4973 6.75 13 6.75H11.125C10.6277 6.75 10.1508 6.55246 9.79917 6.20082C9.44754 5.84919 9.25 5.37228 9.25 4.875V3ZM9.25 11.125C9.25 10.6277 9.44754 10.1508 9.79917 9.79917C10.1508 9.44754 10.6277 9.25 11.125 9.25H13C13.4973 9.25 13.9742 9.44754 14.3258 9.79917C14.6775 10.1508 14.875 10.6277 14.875 11.125V13C14.875 13.4973 14.6775 13.9742 14.3258 14.3258C13.9742 14.6775 13.4973 14.875 13 14.875H11.125C10.6277 14.875 10.1508 14.6775 9.79917 14.3258C9.44754 13.9742 9.25 13.4973 9.25 13V11.125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            email: `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2.5V9.5C14.5 9.89782 14.342 10.2794 14.0607 10.5607C13.7794 10.842 13.3978 11 13 11H3C2.60218 11 2.22064 10.842 1.93934 10.5607C1.65804 10.2794 1.5 9.89782 1.5 9.5V2.5M14.5 2.5C14.5 2.10218 14.342 1.72064 14.0607 1.43934C13.7794 1.15804 13.3978 1 13 1H3C2.60218 1 2.22064 1.15804 1.93934 1.43934C1.65804 1.72064 1.5 2.10218 1.5 2.5M14.5 2.5V2.662C14.5 2.9181 14.4345 3.16994 14.3096 3.39353C14.1848 3.61712 14.0047 3.80502 13.7867 3.93933L8.78667 7.016C8.55014 7.16169 8.2778 7.23883 8 7.23883C7.7222 7.23883 7.44986 7.16169 7.21333 7.016L2.21333 3.94C1.99528 3.80569 1.81525 3.61779 1.69038 3.3942C1.56551 3.1706 1.49997 2.91876 1.5 2.66267V2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            error: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5V7.5M13 7C13 7.78793 12.8448 8.56815 12.5433 9.2961C12.2417 10.0241 11.7998 10.6855 11.2426 11.2426C10.6855 11.7998 10.0241 12.2417 9.2961 12.5433C8.56815 12.8448 7.78793 13 7 13C6.21207 13 5.43185 12.8448 4.7039 12.5433C3.97595 12.2417 3.31451 11.7998 2.75736 11.2426C2.20021 10.6855 1.75825 10.0241 1.45672 9.2961C1.15519 8.56815 1 7.78793 1 7C1 5.4087 1.63214 3.88258 2.75736 2.75736C3.88258 1.63214 5.4087 1 7 1C8.5913 1 10.1174 1.63214 11.2426 2.75736C12.3679 3.88258 13 5.4087 13 7ZM7 9.5H7.00533V9.50533H7V9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            export: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 10V11.5C1 11.8978 1.15804 12.2794 1.43934 12.5607C1.72064 12.842 2.10218 13 2.5 13H11.5C11.8978 13 12.2794 12.842 12.5607 12.5607C12.842 12.2794 13 11.8978 13 11.5V10M4 4L7 1M7 1L10 4M7 1V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            enforcement: `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 12.5L11.25 1.25L9 9.5H17.25L6.75 20.75L9 12.5H0.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            flag: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5V2.75M1.5 2.75L3.80833 2.1725C5.54534 1.73837 7.38034 1.93996 8.98167 2.74083L9.07167 2.78583C10.6406 3.57025 12.4349 3.77991 14.1425 3.37833L16.7342 2.76833C16.4191 5.67629 16.4205 8.60984 16.7383 11.5175L14.1433 12.1275C12.4356 12.5295 10.641 12.3202 9.07167 11.5358L8.98167 11.4908C7.38034 10.69 5.54534 10.4884 3.80833 10.9225L1.5 11.5M1.5 2.75V11.5M1.5 16.5V11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            facebook: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.001 0C4.47813 0 0.000976562 4.47715 0.000976562 10C0.000976562 14.9913 3.65783 19.1283 8.4385 19.8785V12.8906H5.89941V10H8.4385V7.79688C8.4385 5.29063 9.9314 3.90625 12.2156 3.90625C13.3097 3.90625 14.4541 4.10156 14.4541 4.10156V6.5625H13.1931C11.9509 6.5625 11.5635 7.33334 11.5635 8.1242V10H14.3369L13.8936 12.8906H11.5635V19.8785C16.3441 19.1283 20.001 14.9913 20.001 10C20.001 4.47715 15.5238 0 10.001 0Z" fill="currentColor"/></svg>`,
            filter: `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5C0 0.367392 0.0526784 0.240215 0.146447 0.146447C0.240215 0.0526784 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526784 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759785 11.8536 0.853553C11.7598 0.947322 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947322 0.146447 0.853553C0.0526784 0.759785 0 0.632608 0 0.5ZM0 4C0 3.86739 0.0526784 3.74022 0.146447 3.64645C0.240215 3.55268 0.367392 3.5 0.5 3.5H11.5C11.6326 3.5 11.7598 3.55268 11.8536 3.64645C11.9473 3.74022 12 3.86739 12 4C12 4.13261 11.9473 4.25979 11.8536 4.35355C11.7598 4.44732 11.6326 4.5 11.5 4.5H0.5C0.367392 4.5 0.240215 4.44732 0.146447 4.35355C0.0526784 4.25979 0 4.13261 0 4ZM5.5 7.5C5.5 7.36739 5.55268 7.24021 5.64645 7.14645C5.74022 7.05268 5.86739 7 6 7H11.5C11.6326 7 11.7598 7.05268 11.8536 7.14645C11.9473 7.24021 12 7.36739 12 7.5C12 7.63261 11.9473 7.75979 11.8536 7.85355C11.7598 7.94732 11.6326 8 11.5 8H6C5.86739 8 5.74022 7.94732 5.64645 7.85355C5.55268 7.75979 5.5 7.63261 5.5 7.5Z" fill="currentColor"/></svg>`,
            hashtag: `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0625 4.8125H10.8125M1.1875 9.1875H9.9375M8.8875 1.3125L6.6125 12.6875M5.3875 1.3125L3.1125 12.6875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            home: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15.6659C15.5 15.8869 15.4122 16.0989 15.2559 16.2552C15.0996 16.4115 14.8877 16.4993 14.6667 16.4993H1.33333C1.11232 16.4993 0.900358 16.4115 0.744078 16.2552C0.587798 16.0989 0.5 15.8869 0.5 15.6659V6.90758C0.499912 6.78059 0.528848 6.65526 0.584597 6.54117C0.640346 6.42707 0.721433 6.32722 0.821667 6.24925L7.48833 1.06425C7.63462 0.950455 7.81467 0.888672 8 0.888672C8.18533 0.888672 8.36538 0.950455 8.51167 1.06425L15.1783 6.24925C15.2786 6.32722 15.3597 6.42707 15.4154 6.54117C15.4712 6.65526 15.5001 6.78059 15.5 6.90758V15.6659ZM13.8333 14.8326V7.31425L8 2.77758L2.16667 7.31425V14.8326H13.8333Z" fill="currentColor"/></svg>`,
            image: `<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 12.75L6.409 7.591C6.61793 7.38206 6.86597 7.21633 7.13896 7.10325C7.41194 6.99018 7.70452 6.93198 8 6.93198C8.29548 6.93198 8.58806 6.99018 8.86104 7.10325C9.13403 7.21633 9.38207 7.38206 9.591 7.591L14.75 12.75M13.25 11.25L14.659 9.841C14.8679 9.63206 15.116 9.46633 15.389 9.35325C15.6619 9.24018 15.9545 9.18198 16.25 9.18198C16.5455 9.18198 16.8381 9.24018 17.111 9.35325C17.384 9.46633 17.6321 9.63206 17.841 9.841L20.75 12.75M2.75 16.5H19.25C19.6478 16.5 20.0294 16.342 20.3107 16.0607C20.592 15.7794 20.75 15.3978 20.75 15V3C20.75 2.60218 20.592 2.22064 20.3107 1.93934C20.0294 1.65804 19.6478 1.5 19.25 1.5H2.75C2.35218 1.5 1.97064 1.65804 1.68934 1.93934C1.40804 2.22064 1.25 2.60218 1.25 3V15C1.25 15.3978 1.40804 15.7794 1.68934 16.0607C1.97064 16.342 2.35218 16.5 2.75 16.5ZM13.25 5.25H13.258V5.258H13.25V5.25ZM13.625 5.25C13.625 5.34946 13.5855 5.44484 13.5152 5.51517C13.4448 5.58549 13.3495 5.625 13.25 5.625C13.1505 5.625 13.0552 5.58549 12.9848 5.51517C12.9145 5.44484 12.875 5.34946 12.875 5.25C12.875 5.15054 12.9145 5.05516 12.9848 4.98484C13.0552 4.91451 13.1505 4.875 13.25 4.875C13.3495 4.875 13.4448 4.91451 13.5152 4.98484C13.5855 5.05516 13.625 5.15054 13.625 5.25V5.25Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            info: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 7C0.5 3.41 3.41 0.5 7 0.5C10.59 0.5 13.5 3.41 13.5 7C13.5 10.59 10.59 13.5 7 13.5C3.41 13.5 0.5 10.59 0.5 7ZM6.304 6.03867C7.068 5.65667 7.92867 6.34733 7.72133 7.176L7.24867 9.06667L7.27667 9.05333C7.39414 9.00169 7.52698 8.99719 7.64768 9.04077C7.76839 9.08435 7.86771 9.17267 7.9251 9.28745C7.98249 9.40223 7.99355 9.53468 7.956 9.65739C7.91844 9.7801 7.83514 9.88367 7.72333 9.94667L7.69667 9.96133C6.932 10.3433 6.07133 9.65267 6.27867 8.824L6.752 6.93333L6.724 6.94667C6.66503 6.97944 6.60003 6.99994 6.53292 7.00693C6.46581 7.01393 6.39798 7.00726 6.33352 6.98734C6.26905 6.96743 6.20929 6.93467 6.15782 6.89105C6.10635 6.84742 6.06424 6.79383 6.03403 6.7335C6.00382 6.67317 5.98613 6.60735 5.98204 6.54C5.97794 6.47266 5.98751 6.40518 6.01018 6.34163C6.03285 6.27808 6.06815 6.21978 6.11394 6.17023C6.15974 6.12069 6.21509 6.08092 6.27667 6.05333L6.304 6.03867ZM7 5C7.13261 5 7.25979 4.94732 7.35355 4.85355C7.44732 4.75979 7.5 4.63261 7.5 4.5C7.5 4.36739 7.44732 4.24021 7.35355 4.14645C7.25979 4.05268 7.13261 4 7 4C6.86739 4 6.74022 4.05268 6.64645 4.14645C6.55268 4.24021 6.5 4.36739 6.5 4.5C6.5 4.63261 6.55268 4.75979 6.64645 4.85355C6.74022 4.94732 6.86739 5 7 5Z" fill="currentColor"/></svg>`,
            linkedin: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3362 15.339H12.6707V11.1622C12.6707 10.1662 12.6505 8.8845 11.2817 8.8845C9.892 8.8845 9.6797 9.9683 9.6797 11.0887V15.339H7.0142V6.75H9.5747V7.9207H9.6092C9.967 7.2457 10.837 6.53325 12.1367 6.53325C14.8375 6.53325 15.337 8.3108 15.337 10.6245L15.3362 15.339ZM4.00373 5.57475C3.14573 5.57475 2.45648 4.88025 2.45648 4.026C2.45648 3.1725 3.14648 2.47875 4.00373 2.47875C4.85873 2.47875 5.55173 3.1725 5.55173 4.026C5.55173 4.88025 4.85798 5.57475 4.00373 5.57475ZM5.34023 15.339H2.66723V6.75H5.34023V15.339ZM16.6697 0H1.32923C0.594976 0 0.000976562 0.5805 0.000976562 1.29675V16.7033C0.000976562 17.4202 0.594976 18 1.32923 18H16.6675C17.401 18 18.001 17.4202 18.001 16.7033V1.29675C18.001 0.5805 17.401 0 16.6675 0H16.6697Z" fill="currentColor"/></svg>`,
            list: `<svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.625 1.75C0.625 1.45163 0.743527 1.16548 0.954505 0.954505C1.16548 0.743527 1.45163 0.625 1.75 0.625C2.04837 0.625 2.33452 0.743527 2.5455 0.954505C2.75647 1.16548 2.875 1.45163 2.875 1.75C2.875 2.04837 2.75647 2.33452 2.5455 2.5455C2.33452 2.75647 2.04837 2.875 1.75 2.875C1.45163 2.875 1.16548 2.75647 0.954505 2.5455C0.743527 2.33452 0.625 2.04837 0.625 1.75ZM5.5 1.75C5.5 1.55109 5.57902 1.36032 5.71967 1.21967C5.86032 1.07902 6.05109 1 6.25 1H18.25C18.4489 1 18.6397 1.07902 18.7803 1.21967C18.921 1.36032 19 1.55109 19 1.75C19 1.94891 18.921 2.13968 18.7803 2.28033C18.6397 2.42098 18.4489 2.5 18.25 2.5H6.25C6.05109 2.5 5.86032 2.42098 5.71967 2.28033C5.57902 2.13968 5.5 1.94891 5.5 1.75ZM0.625 7C0.625 6.70163 0.743527 6.41548 0.954505 6.2045C1.16548 5.99353 1.45163 5.875 1.75 5.875C2.04837 5.875 2.33452 5.99353 2.5455 6.2045C2.75647 6.41548 2.875 6.70163 2.875 7C2.875 7.29837 2.75647 7.58452 2.5455 7.7955C2.33452 8.00647 2.04837 8.125 1.75 8.125C1.45163 8.125 1.16548 8.00647 0.954505 7.7955C0.743527 7.58452 0.625 7.29837 0.625 7ZM5.5 7C5.5 6.80109 5.57902 6.61032 5.71967 6.46967C5.86032 6.32902 6.05109 6.25 6.25 6.25H18.25C18.4489 6.25 18.6397 6.32902 18.7803 6.46967C18.921 6.61032 19 6.80109 19 7C19 7.19891 18.921 7.38968 18.7803 7.53033C18.6397 7.67098 18.4489 7.75 18.25 7.75H6.25C6.05109 7.75 5.86032 7.67098 5.71967 7.53033C5.57902 7.38968 5.5 7.19891 5.5 7ZM0.625 12.25C0.625 11.9516 0.743527 11.6655 0.954505 11.4545C1.16548 11.2435 1.45163 11.125 1.75 11.125C2.04837 11.125 2.33452 11.2435 2.5455 11.4545C2.75647 11.6655 2.875 11.9516 2.875 12.25C2.875 12.5484 2.75647 12.8345 2.5455 13.0455C2.33452 13.2565 2.04837 13.375 1.75 13.375C1.45163 13.375 1.16548 13.2565 0.954505 13.0455C0.743527 12.8345 0.625 12.5484 0.625 12.25ZM5.5 12.25C5.5 12.0511 5.57902 11.8603 5.71967 11.7197C5.86032 11.579 6.05109 11.5 6.25 11.5H18.25C18.4489 11.5 18.6397 11.579 18.7803 11.7197C18.921 11.8603 19 12.0511 19 12.25C19 12.4489 18.921 12.6397 18.7803 12.7803C18.6397 12.921 18.4489 13 18.25 13H6.25C6.05109 13 5.86032 12.921 5.71967 12.7803C5.57902 12.6397 5.5 12.4489 5.5 12.25Z" fill="currentColor"/></svg>`,
            notification: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.5001C13.6569 22.5001 15 21.1569 15 19.5001C15 19.472 14.9996 19.444 14.9988 19.416C14.9922 19.1741 14.7823 18.9981 14.5403 18.9953L9.47169 18.9378C9.22965 18.9351 9.01585 19.1063 9.00379 19.348C9.00127 19.3984 9 19.4491 9 19.5001C9 21.1569 10.3431 22.5001 12 22.5001Z" fill="currentColor"/><path d="M5 9C5 5.13401 8.13401 1.5 12 1.5C15.866 1.5 19 5.13401 19 9V11.4607C19 12.7578 19.5547 13.9931 20.5242 14.8549C21.5645 15.7796 20.9104 17.5 19.5185 17.5H4.48147C3.08955 17.5 2.43545 15.7796 3.47579 14.8549C4.4453 13.9931 5 12.7578 5 11.4607V9Z" fill="currentColor"/></svg>`,
            organisation: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 13H12.5M2 1H12M2.5 1V13M11.5 1V13M5 3.5H6M5 5.5H6M5 7.5H6M8 3.5H9M8 5.5H9M8 7.5H9M5 13V10.75C5 10.336 5.336 10 5.75 10H8.25C8.664 10 9 10.336 9 10.75V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            password: `<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7V4.5C9 3.70435 8.68393 2.94129 8.12132 2.37868C7.55871 1.81607 6.79565 1.5 6 1.5C5.20435 1.5 4.44129 1.81607 3.87868 2.37868C3.31607 2.94129 3 3.70435 3 4.5V7M2.5 14.5H9.5C9.89782 14.5 10.2794 14.342 10.5607 14.0607C10.842 13.7794 11 13.3978 11 13V8.5C11 8.10218 10.842 7.72064 10.5607 7.43934C10.2794 7.15804 9.89782 7 9.5 7H2.5C2.10218 7 1.72064 7.15804 1.43934 7.43934C1.15804 7.72064 1 8.10218 1 8.5V13C1 13.3978 1.15804 13.7794 1.43934 14.0607C1.72064 14.342 2.10218 14.5 2.5 14.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            payment: `<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 5.25H20.75M1.25 6H20.75M4.25 11.25H10.25M4.25 13.5H7.25M3.5 16.5H18.5C19.0967 16.5 19.669 16.2629 20.091 15.841C20.5129 15.419 20.75 14.8467 20.75 14.25V3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75V14.25C1.25 14.8467 1.48705 15.419 1.90901 15.841C2.33097 16.2629 2.90326 16.5 3.5 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            printer: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.00016 11.6663H1.00016C0.823352 11.6663 0.653782 11.5961 0.528758 11.4711C0.403734 11.3461 0.333496 11.1765 0.333496 10.9997V4.33301C0.333496 4.1562 0.403734 3.98663 0.528758 3.8616C0.653782 3.73658 0.823352 3.66634 1.00016 3.66634H3.00016V0.999674C3.00016 0.822863 3.0704 0.653294 3.19542 0.52827C3.32045 0.403246 3.49002 0.333008 3.66683 0.333008H10.3335C10.5103 0.333008 10.6799 0.403246 10.8049 0.52827C10.9299 0.653294 11.0002 0.822863 11.0002 0.999674V3.66634H13.0002C13.177 3.66634 13.3465 3.73658 13.4716 3.8616C13.5966 3.98663 13.6668 4.1562 13.6668 4.33301V10.9997C13.6668 11.1765 13.5966 11.3461 13.4716 11.4711C13.3465 11.5961 13.177 11.6663 13.0002 11.6663H11.0002V12.9997C11.0002 13.1765 10.9299 13.3461 10.8049 13.4711C10.6799 13.5961 10.5103 13.6663 10.3335 13.6663H3.66683C3.49002 13.6663 3.32045 13.5961 3.19542 13.4711C3.0704 13.3461 3.00016 13.1765 3.00016 12.9997V11.6663ZM3.00016 10.333V9.66634C3.00016 9.48953 3.0704 9.31996 3.19542 9.19494C3.32045 9.06991 3.49002 8.99967 3.66683 8.99967H10.3335C10.5103 8.99967 10.6799 9.06991 10.8049 9.19494C10.9299 9.31996 11.0002 9.48953 11.0002 9.66634V10.333H12.3335V4.99967H1.66683V10.333H3.00016ZM4.3335 1.66634V3.66634H9.66683V1.66634H4.3335ZM4.3335 10.333V12.333H9.66683V10.333H4.3335ZM2.3335 5.66634H4.3335V6.99967H2.3335V5.66634Z" fill="currentColor"/></svg>`,
            profile: `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 5C12.75 5.99456 12.3549 6.94839 11.6516 7.65165C10.9484 8.35491 9.99454 8.75 8.99998 8.75C8.00541 8.75 7.05159 8.35491 6.34833 7.65165C5.64506 6.94839 5.24998 5.99456 5.24998 5C5.24998 4.00544 5.64506 3.05161 6.34833 2.34835C7.05159 1.64509 8.00541 1.25 8.99998 1.25C9.99454 1.25 10.9484 1.64509 11.6516 2.34835C12.3549 3.05161 12.75 4.00544 12.75 5V5ZM1.50098 19.118C1.53311 17.1504 2.33731 15.2742 3.74015 13.894C5.14299 12.5139 7.03206 11.7405 8.99998 11.7405C10.9679 11.7405 12.857 12.5139 14.2598 13.894C15.6626 15.2742 16.4668 17.1504 16.499 19.118C14.1464 20.1968 11.5881 20.7535 8.99998 20.75C6.32398 20.75 3.78398 20.166 1.50098 19.118Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            profiles: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5001 14.94C12.2109 15.1464 12.9474 15.2508 13.6876 15.25C14.8779 15.2517 16.0528 14.9803 17.1218 14.4567C17.1534 13.7098 16.9406 12.9729 16.5158 12.3578C16.0909 11.7427 15.4771 11.2828 14.7674 11.0479C14.0576 10.813 13.2907 10.8159 12.5827 11.0562C11.8748 11.2964 11.2645 11.7609 10.8443 12.3792M11.5001 14.94V14.9375C11.5001 14.01 11.2626 13.1375 10.8451 12.3792M11.5001 14.94V15.0283C9.89633 15.9942 8.05894 16.5032 6.18677 16.5C4.24427 16.5 2.42677 15.9625 0.875102 15.0283L0.874268 14.9375C0.873629 13.7579 1.26561 12.6116 1.98842 11.6794C2.71123 10.7472 3.72375 10.082 4.86634 9.78883C6.00894 9.49564 7.21662 9.59107 8.29899 10.0601C9.38136 10.5291 10.2768 11.345 10.8443 12.3792M9.0001 4.3125C9.0001 5.05842 8.70379 5.77379 8.17634 6.30124C7.64889 6.82868 6.93352 7.125 6.1876 7.125C5.44168 7.125 4.72631 6.82868 4.19886 6.30124C3.67142 5.77379 3.3751 5.05842 3.3751 4.3125C3.3751 3.56658 3.67142 2.85121 4.19886 2.32376C4.72631 1.79632 5.44168 1.5 6.1876 1.5C6.93352 1.5 7.64889 1.79632 8.17634 2.32376C8.70379 2.85121 9.0001 3.56658 9.0001 4.3125V4.3125ZM15.8751 6.1875C15.8751 6.76766 15.6446 7.32406 15.2344 7.7343C14.8242 8.14453 14.2678 8.375 13.6876 8.375C13.1074 8.375 12.551 8.14453 12.1408 7.7343C11.7306 7.32406 11.5001 6.76766 11.5001 6.1875C11.5001 5.60734 11.7306 5.05094 12.1408 4.6407C12.551 4.23047 13.1074 4 13.6876 4C14.2678 4 14.8242 4.23047 15.2344 4.6407C15.6446 5.05094 15.8751 5.60734 15.8751 6.1875V6.1875Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            reconcilitation: `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.875 11.0009L6.5 5.37589L10.0883 8.96505C11.1256 6.91988 12.837 5.29536 14.9333 4.36589L17.2167 3.34922M17.2167 3.34922L12.2667 1.44922M17.2167 3.34922L15.3167 8.30005" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            refresh: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.76667 2.23329C8.80001 1.26663 7.47334 0.666626 6.00001 0.666626C3.05334 0.666626 0.67334 3.05329 0.67334 5.99996C0.67334 8.94663 3.05334 11.3333 6.00001 11.3333C8.48667 11.3333 10.56 9.63329 11.1533 7.33329H9.76667C9.22001 8.88663 7.74001 9.99996 6.00001 9.99996C3.79334 9.99996 2.00001 8.20663 2.00001 5.99996C2.00001 3.79329 3.79334 1.99996 6.00001 1.99996C7.10667 1.99996 8.09334 2.45996 8.81334 3.18663L6.66667 5.33329H11.3333V0.666626L9.76667 2.23329Z" fill="currentColor"/></svg>`,
            reporting: `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11H9.75M6 14H9.75M6 17H9.75M12.75 17.75H15C15.5967 17.75 16.169 17.5129 16.591 17.091C17.0129 16.669 17.25 16.0967 17.25 15.5V5.108C17.25 3.973 16.405 3.01 15.274 2.916C14.9 2.88498 14.5256 2.85831 14.151 2.836M8.35 2.836C8.285 3.046 8.25 3.269 8.25 3.5C8.25 3.914 8.586 4.25 9 4.25H13.5C13.6989 4.25 13.8897 4.17098 14.0303 4.03033C14.171 3.88968 14.25 3.69891 14.25 3.5C14.2501 3.27491 14.2164 3.05109 14.15 2.836M8.35 2.836C8.49203 2.3767 8.77738 1.97493 9.16426 1.68954C9.55115 1.40414 10.0192 1.25011 10.5 1.25H12C13.012 1.25 13.867 1.918 14.15 2.836M8.35 2.836C7.974 2.859 7.6 2.886 7.226 2.916C6.095 3.01 5.25 3.973 5.25 5.108V7.25M5.25 7.25H1.875C1.254 7.25 0.75 7.754 0.75 8.375V19.625C0.75 20.246 1.254 20.75 1.875 20.75H11.625C12.246 20.75 12.75 20.246 12.75 19.625V8.375C12.75 7.754 12.246 7.25 11.625 7.25H5.25ZM3.75 11H3.758V11.008H3.75V11ZM3.75 14H3.758V14.008H3.75V14ZM3.75 17H3.758V17.008H3.75V17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            report: `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 10.875V8.6875C13.25 7.94158 12.9537 7.22621 12.4262 6.69876C11.8988 6.17132 11.1834 5.875 10.4375 5.875H9.1875C8.93886 5.875 8.7004 5.77623 8.52459 5.60041C8.34877 5.4246 8.25 5.18614 8.25 4.9375V3.6875C8.25 2.94158 7.95368 2.22621 7.42624 1.69876C6.89879 1.17132 6.18342 0.875 5.4375 0.875H3.875M4.5 12.75V13.375M7 10.875V13.375M9.5 9V13.375M5.75 0.875H1.6875C1.17 0.875 0.75 1.295 0.75 1.8125V16.1875C0.75 16.705 1.17 17.125 1.6875 17.125H12.3125C12.83 17.125 13.25 16.705 13.25 16.1875V8.375C13.25 6.38588 12.4598 4.47822 11.0533 3.0717C9.64678 1.66518 7.73912 0.875 5.75 0.875V0.875Z" stroke="#9FC7FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            revenue: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 5C7.51387 5 6.3055 5.36656 5.27769 6.05331C4.24988 6.74007 3.4488 7.71619 2.97576 8.85823C2.50271 10.0003 2.37894 11.2569 2.62009 12.4693C2.86125 13.6817 3.45651 14.7953 4.33059 15.6694C5.20466 16.5435 6.31831 17.1388 7.53069 17.3799C8.74307 17.6211 9.99974 17.4973 11.1418 17.0242C12.2838 16.5512 13.2599 15.7501 13.9467 14.7223C14.6334 13.6945 15 12.4861 15 11.25H8.75V5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.25 8.75H17.5C17.5 7.0924 16.8415 5.50268 15.6694 4.33058C14.4973 3.15848 12.9076 2.5 11.25 2.5V8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            search: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 13L9.53537 9.53537M9.53537 9.53537C10.4731 8.59765 10.9999 7.32583 10.9999 5.9997C10.9999 4.67357 10.4731 3.40175 9.53537 2.46403C8.59765 1.52632 7.32583 0.999512 5.9997 0.999512C4.67357 0.999512 3.40175 1.52632 2.46403 2.46403C1.52632 3.40175 0.999512 4.67357 0.999512 5.9997C0.999512 7.32583 1.52632 8.59765 2.46403 9.53537C3.40175 10.4731 4.67357 10.9999 5.9997 10.9999C7.32583 10.9999 8.59765 10.4731 9.53537 9.53537V9.53537Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            settings: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99503 3.28333C8.07003 2.83167 8.4617 2.5 8.92003 2.5H11.0809C11.5392 2.5 11.9309 2.83167 12.0059 3.28333L12.1834 4.35083C12.2359 4.6625 12.4442 4.9225 12.7209 5.07583C12.7825 5.10917 12.8434 5.145 12.9042 5.18167C13.1742 5.345 13.5042 5.39583 13.8 5.285L14.8142 4.905C15.022 4.82684 15.2509 4.82498 15.4599 4.89976C15.669 4.97454 15.8447 5.1211 15.9559 5.31333L17.0359 7.18583C17.1467 7.37809 17.1858 7.60344 17.1461 7.8218C17.1065 8.04017 16.9906 8.23737 16.8192 8.37833L15.9834 9.0675C15.7392 9.2675 15.6184 9.57833 15.6242 9.89417C15.6255 9.96499 15.6255 10.0358 15.6242 10.1067C15.6184 10.4217 15.7392 10.7317 15.9825 10.9317L16.82 11.6217C17.1734 11.9133 17.265 12.4167 17.0367 12.8133L15.955 14.6858C15.8441 14.878 15.6685 15.0246 15.4596 15.0996C15.2507 15.1745 15.022 15.1729 14.8142 15.095L13.8 14.715C13.5042 14.6042 13.175 14.655 12.9034 14.8183C12.8429 14.8551 12.7818 14.8906 12.72 14.925C12.4442 15.0775 12.2359 15.3375 12.1834 15.6492L12.0059 16.7158C11.9309 17.1683 11.5392 17.5 11.0809 17.5H8.9192C8.46086 17.5 8.0692 17.1683 7.9942 16.7167L7.8167 15.6492C7.76503 15.3375 7.5567 15.0775 7.28003 14.9242C7.21824 14.8901 7.15711 14.8548 7.0967 14.8183C6.82586 14.655 6.4967 14.6042 6.20003 14.715L5.18586 15.095C4.97814 15.1729 4.7495 15.1747 4.54061 15.0999C4.33172 15.0251 4.15612 14.8787 4.04503 14.6867L2.9642 12.8142C2.85331 12.6219 2.81424 12.3966 2.85391 12.1782C2.89358 11.9598 3.00944 11.7626 3.18086 11.6217L4.01753 10.9325C4.26086 10.7325 4.3817 10.4217 4.37586 10.1058C4.37456 10.035 4.37456 9.96416 4.37586 9.89333C4.3817 9.57833 4.26086 9.26833 4.01753 9.06833L3.18086 8.37833C3.00965 8.23741 2.89392 8.04036 2.85426 7.82219C2.81459 7.60401 2.85354 7.37884 2.9642 7.18667L4.04503 5.31417C4.15602 5.12178 4.33171 4.97505 4.54079 4.90011C4.74987 4.82518 4.97877 4.82691 5.1867 4.905L6.20003 5.285C6.4967 5.39583 6.82586 5.345 7.0967 5.18167C7.1567 5.145 7.21836 5.10917 7.28003 5.075C7.5567 4.9225 7.76503 4.6625 7.8167 4.35083L7.99503 3.28333V3.28333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10V10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            street: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 4.62525V11.5003M11.5 6.50025V13.3753M11.9192 16.2903L15.9817 14.2594C16.2992 14.1011 16.5 13.7761 16.5 13.4211V3.01692C16.5 2.32025 15.7667 1.86692 15.1433 2.17859L11.9192 3.79025C11.655 3.92275 11.3442 3.92275 11.0808 3.79025L6.91917 1.71025C6.78901 1.6452 6.64551 1.61133 6.5 1.61133C6.35449 1.61133 6.21098 1.6452 6.08083 1.71025L2.01833 3.74109C1.7 3.90025 1.5 4.22525 1.5 4.57942V14.9836C1.5 15.6803 2.23333 16.1336 2.85667 15.8219L6.08083 14.2103C6.345 14.0778 6.65583 14.0778 6.91917 14.2103L11.0808 16.2911C11.345 16.4228 11.6558 16.4228 11.9192 16.2911V16.2903Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            stacks: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75025 5.6875L1.3125 7L3.75025 8.3125M3.75025 5.6875L7 7.4375L10.2497 5.6875M3.75025 5.6875L1.3125 4.375L7 1.3125L12.6875 4.375L10.2497 5.6875M10.2497 5.6875L12.6875 7L10.2497 8.3125M10.2497 8.3125L12.6875 9.625L7 12.6875L1.3125 9.625L3.75025 8.3125M10.2497 8.3125L7 10.0625L3.75025 8.3125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            success: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L6.5 9L9 5.5M13 7C13 7.78793 12.8448 8.56815 12.5433 9.2961C12.2417 10.0241 11.7998 10.6855 11.2426 11.2426C10.6855 11.7998 10.0241 12.2417 9.2961 12.5433C8.56815 12.8448 7.78793 13 7 13C6.21207 13 5.43185 12.8448 4.7039 12.5433C3.97595 12.2417 3.31451 11.7998 2.75736 11.2426C2.20021 10.6855 1.75825 10.0241 1.45672 9.2961C1.15519 8.56815 1 7.78793 1 7C1 5.4087 1.63214 3.88258 2.75736 2.75736C3.88258 1.63214 5.4087 1 7 1C8.5913 1 10.1174 1.63214 11.2426 2.75736C12.3679 3.88258 13 5.4087 13 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            telephone: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5C1.5 10.0227 5.97733 14.5 11.5 14.5H13C13.3978 14.5 13.7794 14.342 14.0607 14.0607C14.342 13.7794 14.5 13.3978 14.5 13V12.0853C14.5 11.7413 14.266 11.4413 13.932 11.358L10.9833 10.6207C10.69 10.5473 10.382 10.6573 10.2013 10.8987L9.55467 11.7607C9.36667 12.0113 9.042 12.122 8.748 12.014C7.65659 11.6128 6.66544 10.9791 5.84319 10.1568C5.02094 9.33456 4.38725 8.34341 3.986 7.252C3.878 6.958 3.98867 6.63333 4.23933 6.44533L5.10133 5.79867C5.34333 5.618 5.45267 5.30933 5.37933 5.01667L4.642 2.068C4.60143 1.9058 4.50781 1.7618 4.37604 1.65889C4.24426 1.55598 4.08187 1.50006 3.91467 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            twitter: `<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2125 2.65605C20.4491 2.99375 19.6395 3.21555 18.8106 3.31411C19.6839 2.79132 20.3374 1.9689 20.6493 1.00005C19.8287 1.48761 18.9305 1.83077 17.9938 2.01461C17.2031 1.17106 16.098 0.693029 14.9418 0.694339C12.6326 0.694339 10.7597 2.56661 10.7597 4.87683C10.7597 5.20458 10.7973 5.52242 10.8676 5.82909C7.39048 5.65404 4.31008 3.99005 2.24678 1.45941C1.87529 2.09767 1.68006 2.82318 1.68105 3.56167C1.68105 5.01259 2.41961 6.29324 3.5415 7.043C2.87738 7.022 2.22789 6.84264 1.64719 6.51973C1.64655 6.5373 1.64654 6.55487 1.64654 6.57148C1.64654 8.5984 3.0882 10.2892 5.002 10.6731C4.64281 10.7703 4.27233 10.8194 3.90022 10.8191C3.62997 10.8191 3.36772 10.7942 3.1128 10.7453C3.64532 12.4065 5.18886 13.6159 7.0196 13.6491C5.53813 14.8118 3.70869 15.4426 1.82543 15.4399C1.49212 15.4402 1.15909 15.4205 0.828125 15.3811C2.74004 16.6102 4.96552 17.2625 7.23842 17.2601C14.9316 17.2601 19.138 10.8875 19.138 5.36111C19.138 5.1803 19.1336 4.99886 19.1256 4.81997C19.9443 4.22845 20.651 3.49567 21.2125 2.65605Z" fill="currentColor"/></svg>`,
            up: `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66663 4.66669L4.99996 1.33335M4.99996 1.33335L8.33329 4.66669M4.99996 1.33335V10.6667" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            upload: `<svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2.25H9.52C8.71825 2.25015 7.93765 2.50725 7.29274 2.98358C6.64783 3.45992 6.17256 4.1304 5.93667 4.89667L1.91667 17.9617C1.80656 18.3185 1.75039 18.6899 1.75 19.0633V26C1.75 26.9946 2.14509 27.9484 2.84835 28.6516C3.55161 29.3549 4.50544 29.75 5.5 29.75H30.5C31.4946 29.75 32.4484 29.3549 33.1516 28.6516C33.8549 27.9484 34.25 26.9946 34.25 26V19.0633C34.25 18.69 34.1933 18.3183 34.0833 17.9617L30.0667 4.89667C29.8308 4.1304 29.3555 3.45992 28.7106 2.98358C28.0657 2.50725 27.2851 2.25015 26.4833 2.25H23M1.75 18.5H8.18333C8.87966 18.5002 9.56219 18.6942 10.1545 19.0604C10.7467 19.4266 11.2253 19.9505 11.5367 20.5733L11.9633 21.4267C12.2748 22.0498 12.7537 22.5738 13.3463 22.94C13.9388 23.3062 14.6217 23.5001 15.3183 23.5H20.6817C21.3783 23.5001 22.0612 23.3062 22.6537 22.94C23.2463 22.5738 23.7252 22.0498 24.0367 21.4267L24.4633 20.5733C24.7748 19.9502 25.2537 19.4262 25.8463 19.06C26.4388 18.6938 27.1217 18.4999 27.8183 18.5H34.25M18 1V14.75M18 14.75L13 9.75M18 14.75L23 9.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            user: `<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49982 4C8.49982 4.66304 8.23643 5.29893 7.76759 5.76777C7.29875 6.23661 6.66286 6.5 5.99982 6.5C5.33678 6.5 4.7009 6.23661 4.23205 5.76777C3.76321 5.29893 3.49982 4.66304 3.49982 4C3.49982 3.33696 3.76321 2.70107 4.23205 2.23223C4.7009 1.76339 5.33678 1.5 5.99982 1.5C6.66286 1.5 7.29875 1.76339 7.76759 2.23223C8.23643 2.70107 8.49982 3.33696 8.49982 4V4ZM1.00049 13.412C1.02191 12.1002 1.55805 10.8494 2.49327 9.92936C3.4285 9.00929 4.68788 8.49365 5.99982 8.49365C7.31176 8.49365 8.57114 9.00929 9.50637 9.92936C10.4416 10.8494 10.9777 12.1002 10.9992 13.412C9.43075 14.1312 7.72525 14.5023 5.99982 14.5C4.21582 14.5 2.52249 14.1107 1.00049 13.412Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            'user-card': `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H12.5M10 6H12.5M10 8H12.5M3 11H13C13.3978 11 13.7794 10.842 14.0607 10.5607C14.342 10.2794 14.5 9.89782 14.5 9.5V2.5C14.5 2.10218 14.342 1.72064 14.0607 1.43934C13.7794 1.15804 13.3978 1 13 1H3C2.60218 1 2.22064 1.15804 1.93934 1.43934C1.65804 1.72064 1.5 2.10218 1.5 2.5V9.5C1.5 9.89782 1.65804 10.2794 1.93934 10.5607C2.22064 10.842 2.60218 11 3 11ZM7 4.25C7 4.41415 6.96767 4.5767 6.90485 4.72835C6.84203 4.88001 6.74996 5.01781 6.63388 5.13388C6.51781 5.24996 6.38001 5.34203 6.22835 5.40485C6.0767 5.46767 5.91415 5.5 5.75 5.5C5.58585 5.5 5.4233 5.46767 5.27165 5.40485C5.11999 5.34203 4.98219 5.24996 4.86612 5.13388C4.75004 5.01781 4.65797 4.88001 4.59515 4.72835C4.53233 4.5767 4.5 4.41415 4.5 4.25C4.5 3.91848 4.6317 3.60054 4.86612 3.36612C5.10054 3.1317 5.41848 3 5.75 3C6.08152 3 6.39946 3.1317 6.63388 3.36612C6.8683 3.60054 7 3.91848 7 4.25ZM7.86267 8.474C7.2122 8.82047 6.48632 9.00114 5.74933 9C5.0128 9.00092 4.2874 8.82025 3.63733 8.474C3.79619 8.0415 4.08396 7.66817 4.46178 7.40445C4.83959 7.14072 5.28925 6.99931 5.75 6.99931C6.21075 6.99931 6.66041 7.14072 7.03822 7.40445C7.41604 7.66817 7.70381 8.0415 7.86267 8.474Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            validation: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.75L9.25 13L13 7.75M19 10C19 11.268 18.37 12.39 17.407 13.068C17.5108 13.6608 17.4701 14.2698 17.2886 14.8436C17.107 15.4173 16.7899 15.9388 16.364 16.364C15.9388 16.7899 15.4173 17.107 14.8436 17.2886C14.2698 17.4701 13.6608 17.5108 13.068 17.407C12.7222 17.8995 12.2629 18.3014 11.7288 18.5787C11.1948 18.856 10.6017 19.0005 10 19C8.732 19 7.61 18.37 6.932 17.407C6.33923 17.5107 5.73021 17.47 5.15649 17.2885C4.58276 17.1069 4.06122 16.7898 3.636 16.364C3.21013 15.9388 2.89298 15.4173 2.71142 14.8436C2.52987 14.2698 2.48925 13.6608 2.593 13.068C2.10052 12.7222 1.69862 12.2629 1.42133 11.7288C1.14403 11.1948 0.999511 10.6017 1 10C1 8.732 1.63 7.61 2.593 6.932C2.48925 6.33923 2.52987 5.73019 2.71142 5.15645C2.89298 4.58271 3.21013 4.06117 3.636 3.636C4.06122 3.21019 4.58276 2.8931 5.15649 2.71154C5.73021 2.52999 6.33923 2.48933 6.932 2.593C7.27785 2.10058 7.73722 1.69873 8.27126 1.42144C8.80529 1.14415 9.39827 0.999595 10 1C11.268 1 12.39 1.63 13.068 2.593C13.6608 2.48933 14.2698 2.52999 14.8435 2.71154C15.4172 2.8931 15.9388 3.21019 16.364 3.636C16.7898 4.06122 17.1069 4.58276 17.2885 5.15649C17.47 5.73021 17.5107 6.33923 17.407 6.932C17.8995 7.27779 18.3014 7.73715 18.5787 8.2712C18.856 8.80525 19.0005 9.39825 19 10V10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        };
        this.registerSVGIcons = (icons) => {
            for (const item of icons) {
                this.icons[item.iconName] = item.svgStr;
            }
        };
    }
    getSVG(icon) {
        // const ret:{icon?:IconType}={}
        return { icon: this.icons[icon] };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class SvgIconComponent {
    set _icon(v) {
        this.icon = this.svgIconS.getSVG(v).icon;
        if (this.icon)
            this.icon = this.icon.replaceAllSubStr('{{color}}', this.config.color);
        //  if(v) debugger
        this.ngAfterViewInit();
    }
    constructor(svgIconS) {
        this.svgIconS = svgIconS;
        this.class = 'svg-icon';
        this.config = { color: `currentColor`, onhover: `var(--primary)` };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.icon && this.iconRef?.nativeElement)
            this.iconRef.nativeElement.innerHTML = this.icon;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconComponent, deps: [{ token: SvgIconService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: SvgIconComponent, isStandalone: true, selector: "svg-icon", inputs: { class: "class", _icon: ["icon", "_icon"] }, viewQueries: [{ propertyName: "iconRef", first: true, predicate: ["iconTag"], descendants: true }], ngImport: i0, template: "<span class=\"{{class}} svg-icon\" #iconTag>\n    <!-- {{icon}} -->\n    <!-- <img class=\"svg-icon\" src=\"{{icon}}\"> -->\n</span>", styles: ["span{color:inherit}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'svg-icon', standalone: true, template: "<span class=\"{{class}} svg-icon\" #iconTag>\n    <!-- {{icon}} -->\n    <!-- <img class=\"svg-icon\" src=\"{{icon}}\"> -->\n</span>", styles: ["span{color:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: SvgIconService }]; }, propDecorators: { class: [{
                type: Input
            }], _icon: [{
                type: Input,
                args: ['icon']
            }], iconRef: [{
                type: ViewChild,
                args: ['iconTag']
            }] } });

class BtnService {
    constructor() {
        this.btnClasses = {
            primary: 'btn btn-primary w-100',
            secondary: 'btn btn-secondary   w-100',
            light: 'btn btn-light  w-100',
            outline: 'btn btn-outline-primary w-100',
            'outline-light': 'btn btn-outline-light w-100',
            clear: 'btn btn-clear w-100',
            'clear-pm': 'btn btn-clear text-primary w-100',
            'dark-outline': 'btn btn-outline-dark w-100',
            'outline-nm': 'btn btn-outline-primary w-100',
            dark: 'btn btn-dark w-100',
            danger: 'btn btn-danger w-100',
            'danger-outline': 'btn btn-outline-danger w-100',
            close: 'btn  text-danger',
            success: 'btn btn-success w-100',
        };
        this.getIcon = (iconType) => {
            let icon, iconString, iconPosition = 'left';
            switch (iconType) {
                case 'calendar':
                    iconString = 'fas fa-calendar-alt';
                    break;
                case 'close':
                    iconString = 'fa fa-close';
                    break;
                case 'link':
                    iconString = 'fas fa-chain';
                    break;
                default:
                    icon = null;
                    break;
            }
            return { icon, iconPosition, iconString };
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class BtnComponent {
    set _icon(v) {
        // const res = this.btnS.getIcon(v);
        // this.iconPosition = res.iconPosition;
        // this.icon = res.icon;
        // this.customIcon = res.iconString;
        switch (v) {
            case 'edit':
                this.customIcon = 'fa fa-pen';
                break;
            case 'more':
                this.customIcon = 'fa fa-ellipsis-v';
                break;
            default:
                this.icon = v;
                break;
        }
    }
    set _type(v) {
        // debugger
        this._mclass = this.btnS.btnClasses[v || 'primary'];
    }
    set _group(v) {
        switch (v) {
            case 'add':
                this._type = 'outline';
                // this._icon = 'add';
                this.iconBtn = true;
                break;
            case 'clone':
                this._type = 'secondary';
                // this._icon = 'clone';
                this.text = 'Clone';
                break;
            case 'create':
                this._type = 'outline';
                // this._icon = 'add';
                this.text = 'Create';
                break;
            case 'close':
                this._type = 'danger-outline';
                this.customIcon = this.btnS.getIcon('close').iconString;
                this.iconBtn = true;
                break;
            case 'delete':
                this._type = 'danger-outline';
                // this._icon = 'delete';
                this.iconBtn = true;
                break;
            case 'download':
                this._type = 'secondary';
                // this._icon = 'download';
                this.iconBtn = true;
                break;
            case 'edit':
                this._type = 'secondary';
                // this._icon = 'edit';
                this.iconBtn = true;
                break;
            case 'link':
                this._type = 'secondary';
                this.customIcon = 'fa fa-link';
                this.iconBtn = true;
                break;
            case 'search':
                this._type = 'secondary';
                // this._icon = 'search';
                this.iconBtn = true;
                break;
            case 'show':
                this._type = 'secondary';
                // this._icon = 'show';
                this.text = 'Show';
                break;
            case 'submit':
                this._type = 'primary';
                this.text = 'Submit';
                break;
        }
    }
    constructor(btnS) {
        this.btnS = btnS;
        this.actionType = 'button';
        this.animate = false;
        this.disabled = false;
        this.iconBtn = false;
        this.showHelpIcon = true;
        this.valid = true;
        this.onFormInvalid = OnFormInvalid.disable;
        this.mclick = new EventEmitter();
        this.iconPosition = 'left';
    }
    ngOnInit() {
        if (!this._mclass)
            this._type = 'primary';
        let formSub;
        if (this.form && this.formSchema?.length)
            formSub = this.form.statusChanges.subscribe((r) => {
                // this.cdr.detectChanges();
                // if (this.form instanceof FormGroup) {
                //   debugger;
                //   this.formIsInvalid = false;
                //   for (const x of this.formSchema) {
                //     const isValid = this.form.controls[x.field].valid;
                //     if (!isValid) {
                //       this.formIsInvalid = true;
                //       break;
                //     }
                //   }
                // }
                this.formIsInvalid = this.formSchema.some((f) => this.form.controls[f.field?.toString()]?.invalid);
            });
        else
            formSub?.unsubscribe();
    }
    checkForm() {
        if (this.isDisabled && this.form) {
            this.form.markAllAsTouched();
            // this.cdr.detectChanges();
            console.log(this.form);
            console.log(this.form.getRawValue());
        }
    }
    click($event) {
        // debugger
        if (!this.isDisabled && !this.loading)
            this.mclick.emit($event);
    }
    get isDisabled() {
        return (this.disabled ||
            !this.valid ||
            this.formIsInvalid ||
            (!this.formSchema && (this.form?.invalid || this.form?.pending)));
    }
    /**
     * Set loader state
     * @param value Loader state
     */
    setLoader(value) {
        this.loading = value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnComponent, deps: [{ token: BtnService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: BtnComponent, isStandalone: true, selector: "app-btn,btn", inputs: { formSchema: "formSchema", _icon: ["icon", "_icon"], _type: ["type", "_type"], _group: ["group", "_group"], actionType: "actionType", animate: "animate", badge: "badge", class: "class", customIcon: "customIcon", disabled: "disabled", form: "form", help: "help", iconBtn: "iconBtn", lite: "lite", loading: "loading", mclass: "mclass", showHelpIcon: "showHelpIcon", mini: "mini", text: "text", valid: "valid", subButtons: "subButtons", onFormInvalid: "onFormInvalid" }, outputs: { mclick: "mclick" }, ngImport: i0, template: "<span class=\"  text-center d-flex  align-items-center justify-content-center\" [ngClass]=\"{mini}\" (click)=\"checkForm()\">\n  <i *ngIf=\"showHelpIcon && help\" class=\"fa fa-info-circle me-2 text-primary\" [matTooltip]=\"help\"></i>\n  <button [matMenuTriggerFor]=\"subButtons?.length?menu:null\" type=\"{{actionType}}\" class=\"{{mclass}} {{_mclass}} \"\n    [disabled]=\"isDisabled\" [matBadge]=\"badge\" [ngClass]=\"{'changecolor': valid,'btn-raised':animate,   'd-flex justify-content-center':\n    !text}\" (click)=\"click($event)\" [matTooltip]=\"showHelpIcon?null:(help)\">\n    <div class=\"w-100\" [hidden]=\"loading\">\n      <span [ngClass]=\"{'pe-1 ms-1':!iconBtn}\" *ngIf=\"iconPosition=='left' && (icon||customIcon)\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n        <i *ngIf=\"customIcon\" class=\"{{customIcon}}\"></i>\n      </span>\n      <ng-container *ngIf=\"text; else elseTemplate\">\n        {{text}}\n      </ng-container>\n      <ng-template #elseTemplate>\n        <span appTranslator>\n          <ng-content></ng-content>\n        </span>\n      </ng-template>\n      <span [ngClass]=\"{'ps-1':!iconBtn}\" *ngIf=\"iconPosition=='right'\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n      </span>\n    </div>\n    <ng-container *ngIf=\"loading\">\n      <div class=\"lds-ellipsis\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </ng-container>\n  </button>\n</span>\n<mat-menu #menu=\"matMenu\" xPosition=\"after\" class=\"rounded-16\">\n  <button mat-button mat-menu-item (click)=\"isDisabled?item.action():null\"\n    *ngFor=\"let item of subButtons\">{{item.label}}</button>\n</mat-menu>", styles: [".lite{padding:0}.disabled{cursor:not-allowed}.invalid{border:3px solid var(--bs-danger)}.lds-ellipsis{display:inline-block;position:relative;width:70px;height:80px}.lds-ellipsis div{position:absolute;top:35px;width:10px;height:10px;border-radius:50%;background:#fff;background:var(--primary);animation-timing-function:cubic-bezier(0,1,1,0)}.btn-primary .lds-ellipsis div,.btn-danger .lds-ellipsis div,.btn-dark .lds-ellipsis div{background:#fff}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}.mini button{padding:0!important}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i6.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i6.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i6.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i4$1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-btn,btn', standalone: true, imports: [
                        NgClass,
                        NgIf,
                        MatTooltipModule,
                        MatMenuModule,
                        MatBadgeModule,
                        SvgIconComponent,
                        NgFor,
                    ], template: "<span class=\"  text-center d-flex  align-items-center justify-content-center\" [ngClass]=\"{mini}\" (click)=\"checkForm()\">\n  <i *ngIf=\"showHelpIcon && help\" class=\"fa fa-info-circle me-2 text-primary\" [matTooltip]=\"help\"></i>\n  <button [matMenuTriggerFor]=\"subButtons?.length?menu:null\" type=\"{{actionType}}\" class=\"{{mclass}} {{_mclass}} \"\n    [disabled]=\"isDisabled\" [matBadge]=\"badge\" [ngClass]=\"{'changecolor': valid,'btn-raised':animate,   'd-flex justify-content-center':\n    !text}\" (click)=\"click($event)\" [matTooltip]=\"showHelpIcon?null:(help)\">\n    <div class=\"w-100\" [hidden]=\"loading\">\n      <span [ngClass]=\"{'pe-1 ms-1':!iconBtn}\" *ngIf=\"iconPosition=='left' && (icon||customIcon)\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n        <i *ngIf=\"customIcon\" class=\"{{customIcon}}\"></i>\n      </span>\n      <ng-container *ngIf=\"text; else elseTemplate\">\n        {{text}}\n      </ng-container>\n      <ng-template #elseTemplate>\n        <span appTranslator>\n          <ng-content></ng-content>\n        </span>\n      </ng-template>\n      <span [ngClass]=\"{'ps-1':!iconBtn}\" *ngIf=\"iconPosition=='right'\">\n        <svg-icon *ngIf=\"icon\" [icon]=\"icon\"></svg-icon>\n      </span>\n    </div>\n    <ng-container *ngIf=\"loading\">\n      <div class=\"lds-ellipsis\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </ng-container>\n  </button>\n</span>\n<mat-menu #menu=\"matMenu\" xPosition=\"after\" class=\"rounded-16\">\n  <button mat-button mat-menu-item (click)=\"isDisabled?item.action():null\"\n    *ngFor=\"let item of subButtons\">{{item.label}}</button>\n</mat-menu>", styles: [".lite{padding:0}.disabled{cursor:not-allowed}.invalid{border:3px solid var(--bs-danger)}.lds-ellipsis{display:inline-block;position:relative;width:70px;height:80px}.lds-ellipsis div{position:absolute;top:35px;width:10px;height:10px;border-radius:50%;background:#fff;background:var(--primary);animation-timing-function:cubic-bezier(0,1,1,0)}.btn-primary .lds-ellipsis div,.btn-danger .lds-ellipsis div,.btn-dark .lds-ellipsis div{background:#fff}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}.mini button{padding:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: BtnService }]; }, propDecorators: { formSchema: [{
                type: Input
            }], _icon: [{
                type: Input,
                args: ['icon']
            }], _type: [{
                type: Input,
                args: ['type']
            }], _group: [{
                type: Input,
                args: ['group']
            }], actionType: [{
                type: Input
            }], animate: [{
                type: Input
            }], badge: [{
                type: Input
            }], class: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], disabled: [{
                type: Input
            }], form: [{
                type: Input
            }], help: [{
                type: Input
            }], iconBtn: [{
                type: Input
            }], lite: [{
                type: Input
            }], loading: [{
                type: Input
            }], mclass: [{
                type: Input
            }], showHelpIcon: [{
                type: Input
            }], mini: [{
                type: Input
            }], text: [{
                type: Input
            }], valid: [{
                type: Input
            }], subButtons: [{
                type: Input
            }], onFormInvalid: [{
                type: Input
            }], mclick: [{
                type: Output
            }] } });
var OnFormInvalid;
(function (OnFormInvalid) {
    OnFormInvalid["disable"] = "disable";
    OnFormInvalid["warn"] = "warn";
})(OnFormInvalid || (OnFormInvalid = {}));

class InfoIconComponent {
    constructor() {
        this.coloured = true;
        this.left = false;
        this.right = true;
    }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InfoIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: InfoIconComponent, isStandalone: true, selector: "info-icon", inputs: { text: "text", coloured: "coloured", left: "left", right: "right" }, ngImport: i0, template: "<span class=\"d-flex align-items-center\">\n  <ng-container *ngIf=\"left && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"right && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n</span>\n\n\n<ng-template #iconTag>\n  <i class=\"fa fa-info-circle\" [matTooltip]=\"text\" matTooltipClass=\" \"></i>\n</ng-template>", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InfoIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'info-icon', standalone: true, imports: [
                        NgIf,
                        NgTemplateOutlet,
                        MatTooltipModule,
                    ], template: "<span class=\"d-flex align-items-center\">\n  <ng-container *ngIf=\"left && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"right && text\">\n    <ng-container *ngTemplateOutlet=\"iconTag\"></ng-container>\n  </ng-container>\n</span>\n\n\n<ng-template #iconTag>\n  <i class=\"fa fa-info-circle\" [matTooltip]=\"text\" matTooltipClass=\" \"></i>\n</ng-template>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { text: [{
                type: Input
            }], coloured: [{
                type: Input
            }], left: [{
                type: Input
            }], right: [{
                type: Input
            }] } });

class InputBasicComponent {
    /** FormGroup */
    set _form(v) {
        this.form = v;
        this.control = this.form ? this.form.controls[this.name] : null;
    }
    /** FormControlName */
    set _name(v) {
        if (!this.form)
            this.form = new FormGroup({ [v]: new FormControl() });
        this.name = v;
        this.control = this.form.controls[this.name];
    }
    set _validationKey(v) {
        // debugger;
        this.validationType = v;
        this.validations = configValidationMessages[this.validationType];
    }
    set _disabled(v) {
        if (this.debug)
            debugger;
        this.disabled = v;
        if (this.control?.parent?.disabled)
            return;
        if (v) {
            if (this.clearOnDisable)
                this.control?.reset();
            this.control?.disable();
        }
        else if (this.control?.disabled) {
            this.control?.enable();
        }
    }
    set _options(v) {
        // debugger
        // console.log('options', v);
        if (!v && this.optionsInitFunc)
            return;
        this.rawOptions = v;
        this.options = this.iS.optionsFormatter(v, this.valueField, this.optionFormatter, this.labelType, this.labelField, this.autoPickValueField);
        // debugger
        this.options$.next(this.options);
    }
    set _type(v) {
        this.oType = v;
        if (v == 'percentage') {
            this.type = 'number';
            this.max = 100;
            this.min = 0;
        }
        else
            this.type = v;
        // if (this.forcePatched) {
        //   this.control.reset();
        //   this.forcePatched = false;
        // }
        // if (v == 'checkbox' && (this.value == null || this.value == undefined)) {
        //   this.control?.patchValue(false);
        //   this.forcePatched = true;
        // }
    }
    set _value(v) {
        this.__value = v;
    }
    constructor(iS) {
        this.iS = iS;
        this.autocomplete = true;
        this.clearOnDisable = false;
        this.colored = true;
        this.checked = false; //optional checked option for checkboxes
        this.id = 'id' + Math.round(Math.random() * 1000000);
        this.inpCl = 'control-bg-gray';
        this.lblCl = '2';
        this.light = true;
        this.showEmptyOption = false;
        this.showSeperateLabel = this.iS.defaultValue.showSeperateLabel;
        this.showValidation = false;
        this.showValidationMsg = this.iS.defaultValue.showValidationMsg;
        this.stacked = true;
        this.theme = 1;
        this.translateOptions = false;
        this.mchange = new EventEmitter();
        this.validityChecked = new EventEmitter();
        this.mSelectOptionChange = new EventEmitter();
        this.mContextChange = new EventEmitter();
        this.options$ = new ReplaySubject();
        this.appearance = 'outline';
    }
    ngOnInit() {
        if (this.showLabel == null)
            this.showLabel = !!this.label;
        if (this.autoPickValueField) {
            this.labelType = 'cdt';
            this.valueField = 'code';
        }
        if (this.min == 0 && this.max == 100)
            this.oType = 'percentage';
        if (this.type == 'viewer' && (this.noFormat == null || this.noFormat == undefined))
            this.noFormat = true;
        if (!this.validationType)
            this._validationKey = EValidationType.normal;
        this.control?.valueChanges.subscribe((r) => {
            // this.validityChecked.emit(r);
            this.mchange.emit(r);
        });
        if (this.optionsInitFunc) {
            this.optionsInitFunc().subscribe((r) => {
                this._options = r;
                // this.optionsMap[scheme.field] = r;
            });
        }
    }
    ngAfterViewInit() {
        // this.viewInited = true;
        if (this.noPaste)
            document.getElementById(this.id).onpaste = (e) => e.preventDefault();
    }
    disableControl(control = this.control) {
        if (!this.disabled)
            return;
        control?.disable({ emitEvent: false });
    }
    get isRequired() {
        return this.required || this.control?.hasValidator(Validators.required);
    }
    change(e) {
        // debugger;
        let val = e;
        if (e instanceof MatCheckboxChange || e instanceof MatSlideToggleChange) {
            val = e.checked;
        }
        else {
            val = e.value || e?.target?.value;
        }
        if (this.type == 'number') {
            if (this.max && +val > this.max) {
                this.control.setValue(this.max);
            }
            else if (this.min != null && this.min != undefined && +val < this.min) {
                this.control.setValue(this.min);
            }
            if (this.decimalPoints != undefined && this.decimalPoints != null)
                this.control.setValue(+(+val).toFixed(this.decimalPoints));
        }
        this.__value = this.control.value;
        // this.mchange.emit(this.control.value);
        // debugger
        if (this.rawOptions) {
            this.selectionObject = this.rawOptions.find((x) => x[this.valueField] == this.__value);
            this.mSelectOptionChange.emit(this.selectionObject);
        }
        if (this.customSelectChangeAction) {
            this.mContextChange.emit(this.customSelectChangeAction(this.control.value, this.options, this.rawOptions));
        }
    }
    get valid() {
        return this.control?.valid && this.control?.touched;
    }
    get invalid() {
        return this.control?.invalid && this.control?.touched;
    }
    get value() {
        return this.control?.value;
    }
    get hasValue() {
        return !!this.control?.value?.toString()?.trim();
    }
    get invalidCheckbox() {
        return this.invalid && this.type == 'checkbox';
    }
    upload(e) {
        this.files = Array.from(e.target.files);
        this.control?.patchValue(this.files[0]);
        this.mchange.emit(e);
        this.imagePaths = [];
        this.files.forEach((f) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imagePaths.push(e.target.result);
            };
            reader.readAsDataURL(f);
        });
    }
    log() {
        console.log(this.form);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputBasicComponent, deps: [{ token: InputService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: InputBasicComponent, isStandalone: true, selector: "app-input", inputs: { accept: "accept", autocomplete: "autocomplete", autoPickValueField: "autoPickValueField", clearOnDisable: "clearOnDisable", cls: "cls", colored: "colored", checked: "checked", contextData: "contextData", dashboardInput: "dashboardInput", debug: "debug", decimalPoints: "decimalPoints", endLabel: "endLabel", endLabelTooltip: "endLabelTooltip", files: "files", _form: ["form", "_form"], noFormat: "noFormat", hide: "hide", hint: "hint", icon: "icon", id: "id", inpCl: "inpCl", label: "label", labelLink: "labelLink", labelField: "labelField", labelType: "labelType", lblCl: "lblCl", light: "light", loading: "loading", max: "max", min: "min", mini: "mini", multiple: "multiple", _name: ["name", "_name"], optionFormatter: "optionFormatter", optionsInitFunc: "optionsInitFunc", placeholder: "placeholder", prefix: "prefix", startField: "startField", endField: "endField", readonly: "readonly", required: "required", noPaste: "noPaste", showEmptyOption: "showEmptyOption", showLabel: "showLabel", showSeperateLabel: "showSeperateLabel", showValidation: "showValidation", showValidationMsg: "showValidationMsg", showValidationIcon: "showValidationIcon", small: "small", stacked: "stacked", suffix: "suffix", theme: "theme", translateOptions: "translateOptions", valueField: "valueField", vms: "vms", xsmall: "xsmall", appearance: "appearance", _validationKey: ["validationKey", "_validationKey"], _disabled: ["disabled", "_disabled"], customSelectChangeAction: "customSelectChangeAction", _options: ["options", "_options"], _type: ["type", "_type"], _value: ["mvalue", "_value"] }, outputs: { mchange: "mchange", validityChecked: "validityChecked", mSelectOptionChange: "mSelectOptionChange", mContextChange: "mContextChange" }, viewQueries: [{ propertyName: "inpTag", first: true, predicate: ["inp"], descendants: true }], ngImport: i0, template: "<div class=\"  {{type}}  \" [ngClass]=\"{showValidation,dashboardInput}\" [formGroup]=\"form\">\n  <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\" (click)=\"log()\">{{label}}\n    <span *ngIf=\"hint\" class=\"ms-8\">\n      <info-icon [text]=\"hint\" />\n    </span>\n  </div>\n  <ng-container [ngSwitch]=\"type\">\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'date-range'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <mat-date-range-input [formGroup]=\"control|toAny\" [rangePicker]=\"picker\">\n          <input formControlName=\"{{startField}}\" matStartDate placeholder=\"Start date\">\n          <input formControlName=\"{{endField}}\" matEndDate placeholder=\"End date\">\n        </mat-date-range-input>\n        <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n        <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-date-range-picker #picker>\n          <mat-date-range-picker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-date-range-picker-actions>\n        </mat-date-range-picker>\n      </mat-form-field>\n    </ng-container>\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'toggle'\">\n      <mat-slide-toggle [formControlName]=\"name|toAny\" [required]=\"required\" (change)=\"change($event)\">{{label}}\n      </mat-slide-toggle>\n    </ng-container>\n    <!-- CHECKBOX -->\n    <ng-container *ngSwitchCase=\"'checkbox'\">\n      <mat-checkbox #mc class=\"circle-checkbox\" [formControlName]=\"name|toAny\" [required]=\"required\"\n        (change)=\"change($event)\">\n        {{label}}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'checkedbox'\">\n      <input type=\"checkbox\" class=\"{{ inpCl }} d-inline-block form-control width-unset\" [checked]=\"checked\"\n        [attr.data-debug]=\"debug\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\" />\n    </ng-container>\n    <!-- FILE -->\n    <ng-container *ngSwitchCase=\"'file'\">\n      <input type=\"file\" id=\"{{ id }}\" class=\"p-8 {{inpCl | inputClass: valid:invalid:showValidation}}\"\n        (change)=\"upload($event)\" [accept]=\"accept\" [attr.multiple]=\"multiple\" />\n      <div *ngFor=\"let imagePath of imagePaths\">\n        <img src=\"{{imagePath}}\" alt=\"{{label}} image\" class=\"image-preview mt-8\">\n      </div>\n    </ng-container>\n    <!-- Date -->\n    <ng-container *ngSwitchCase=\"'date'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <input matInput [matDatepicker]=\"datepicker\" (selectionChange)=\"change($event)\" [required]=\"required\"\n          [min]=\"min\" [max]=\"max\" placeholder=\"{{placeholder||label}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n        <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #datepicker>\n          <mat-datepicker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-datepicker-actions>\n        </mat-datepicker>\n      </mat-form-field>\n    </ng-container>\n    <!-- SELECT -->\n    <ng-container *ngSwitchCase=\"'select'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <mat-select (selectionChange)=\"change($event)\" [required]=\"required\" placeholder=\"{{placeholder||label}}\"\n          [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n          <mat-option *ngIf=\"showEmptyOption\" selected></mat-option>\n          <mat-option *ngFor=\"let item of options; trackBy: iS.trackByValue\" [value]=\"item.value\" #inp>\n            {{ item.label }}\n          </mat-option>\n        </mat-select>\n\n        <div matSuffix *ngIf=\"showValidation\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n    <!-- TEXTAREA -->\n    <ng-container *ngSwitchCase=\"'textarea'\">\n      <textarea [formControlName]=\"name|toAny\" id=\"{{ id }}\" [class]=\"inpCl | inputClass: valid:invalid:showValidation\"\n        placeholder=\"{{label}}\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\"></textarea>\n    </ng-container>\n    <!-- Radio -->\n    <ng-container *ngSwitchCase=\"'radio'\">\n      <input type=\"radio\" [formControlName]=\"name|toAny\" id=\"{{ id }}\" [readonly]=\"readonly\" (change)=\"change($event)\"\n        [attr.data-noformat]=\"noFormat\" [value]=\"__value\" />\n    </ng-container>\n    <!-- Viewer -->\n    <ng-container *ngSwitchCase=\"'viewer'\">\n      <input type=\"text\" id=\"{{ id }}\" placeholder=\"{{ placeholder }}\" [attr.data-noformat]=\"noFormat\"\n        [class]=\"inpCl | inputClass: valid:invalid:showValidation\" [readonly]=\"true\" [value]=\"value\" />\n    </ng-container>\n    <!-- DEFAULT -->\n    <ng-container *ngSwitchDefault>\n      <mat-form-field [appearance]=\"appearance\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <div matPrefix class=\"prefix-text\" *ngIf=\"prefix\">\n          {{prefix}}\n        </div>\n        <input matInput type=\"{{showPassword?'text':type}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\"\n          [readonly]=\"readonly || disabled\" (change)=\"change($event)\" placeholder=\"{{placeholder||label}}\">\n\n        <div matSuffix class=\"d-flex align-items-center\" *ngIf=\"showValidation||type=='password'\">\n          <ng-container *ngIf=\"type=='password'\">\n            <span class=\"pointer showPassword\" (click)=\"showPassword=!showPassword\">\n              {{!showPassword?'Show':'hide'}}\n            </span>\n          </ng-container>\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success ms-8\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error ms-8\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n  </ng-container>\n</div>\n<div *ngIf=\"showValidationMsg\">\n  <app-validation-message #vmTag [label]=\"label\" [control]=\"control\" [maxLength]=\"max\" [minLength]=\"min\"></app-validation-message>\n</div>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i2$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: InfoIconComponent, selector: "info-icon", inputs: ["text", "coloured", "left", "right"] }, { kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i4$2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i4$2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i4$2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i4$2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i4$2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i4$2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i4$2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i4$2.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i4$2.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i4$2.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "directive", type: i5$1.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "component", type: i5$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: _MatSlideToggleRequiredValidatorModule }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i6$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i6$1.MatCheckboxRequiredValidator, selector: "mat-checkbox[required][formControlName],             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]" }, { kind: "ngmodule", type: _MatCheckboxRequiredValidatorModule }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i8.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i9$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: ValidationMessageComponent, selector: "app-validation-message", inputs: ["validationKey", "control", "input", "label", "minLength", "maxLength", "customMessage"] }, { kind: "pipe", type: InputClassPipe, name: "inputClass" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }, { kind: "pipe", type: ErrorMessagesPipe, name: "errorMessages" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputBasicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input', standalone: true, imports: [
                        NgClass,
                        FormsModule,
                        ReactiveFormsModule,
                        NgIf,
                        InfoIconComponent,
                        NgSwitch,
                        NgSwitchCase,
                        MatFormFieldModule,
                        MatDatepickerModule,
                        BtnComponent,
                        MatSlideToggleModule,
                        _MatSlideToggleRequiredValidatorModule,
                        MatCheckboxModule,
                        _MatCheckboxRequiredValidatorModule,
                        NgFor,
                        MatInputModule,
                        SvgIconComponent,
                        MatSelectModule,
                        MatOptionModule,
                        MatTooltipModule,
                        NgSwitchDefault,
                        ValidationMessageComponent,
                        InputClassPipe,
                        ToAnyPipe,
                        ErrorMessagesPipe,
                    ], template: "<div class=\"  {{type}}  \" [ngClass]=\"{showValidation,dashboardInput}\" [formGroup]=\"form\">\n  <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\" (click)=\"log()\">{{label}}\n    <span *ngIf=\"hint\" class=\"ms-8\">\n      <info-icon [text]=\"hint\" />\n    </span>\n  </div>\n  <ng-container [ngSwitch]=\"type\">\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'date-range'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <mat-date-range-input [formGroup]=\"control|toAny\" [rangePicker]=\"picker\">\n          <input formControlName=\"{{startField}}\" matStartDate placeholder=\"Start date\">\n          <input formControlName=\"{{endField}}\" matEndDate placeholder=\"End date\">\n        </mat-date-range-input>\n        <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n        <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-date-range-picker #picker>\n          <mat-date-range-picker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-date-range-picker-actions>\n        </mat-date-range-picker>\n      </mat-form-field>\n    </ng-container>\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'toggle'\">\n      <mat-slide-toggle [formControlName]=\"name|toAny\" [required]=\"required\" (change)=\"change($event)\">{{label}}\n      </mat-slide-toggle>\n    </ng-container>\n    <!-- CHECKBOX -->\n    <ng-container *ngSwitchCase=\"'checkbox'\">\n      <mat-checkbox #mc class=\"circle-checkbox\" [formControlName]=\"name|toAny\" [required]=\"required\"\n        (change)=\"change($event)\">\n        {{label}}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'checkedbox'\">\n      <input type=\"checkbox\" class=\"{{ inpCl }} d-inline-block form-control width-unset\" [checked]=\"checked\"\n        [attr.data-debug]=\"debug\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\" />\n    </ng-container>\n    <!-- FILE -->\n    <ng-container *ngSwitchCase=\"'file'\">\n      <input type=\"file\" id=\"{{ id }}\" class=\"p-8 {{inpCl | inputClass: valid:invalid:showValidation}}\"\n        (change)=\"upload($event)\" [accept]=\"accept\" [attr.multiple]=\"multiple\" />\n      <div *ngFor=\"let imagePath of imagePaths\">\n        <img src=\"{{imagePath}}\" alt=\"{{label}} image\" class=\"image-preview mt-8\">\n      </div>\n    </ng-container>\n    <!-- Date -->\n    <ng-container *ngSwitchCase=\"'date'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <input matInput [matDatepicker]=\"datepicker\" (selectionChange)=\"change($event)\" [required]=\"required\"\n          [min]=\"min\" [max]=\"max\" placeholder=\"{{placeholder||label}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n        <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #datepicker>\n          <mat-datepicker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-datepicker-actions>\n        </mat-datepicker>\n      </mat-form-field>\n    </ng-container>\n    <!-- SELECT -->\n    <ng-container *ngSwitchCase=\"'select'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <mat-select (selectionChange)=\"change($event)\" [required]=\"required\" placeholder=\"{{placeholder||label}}\"\n          [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n          <mat-option *ngIf=\"showEmptyOption\" selected></mat-option>\n          <mat-option *ngFor=\"let item of options; trackBy: iS.trackByValue\" [value]=\"item.value\" #inp>\n            {{ item.label }}\n          </mat-option>\n        </mat-select>\n\n        <div matSuffix *ngIf=\"showValidation\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n    <!-- TEXTAREA -->\n    <ng-container *ngSwitchCase=\"'textarea'\">\n      <textarea [formControlName]=\"name|toAny\" id=\"{{ id }}\" [class]=\"inpCl | inputClass: valid:invalid:showValidation\"\n        placeholder=\"{{label}}\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\"></textarea>\n    </ng-container>\n    <!-- Radio -->\n    <ng-container *ngSwitchCase=\"'radio'\">\n      <input type=\"radio\" [formControlName]=\"name|toAny\" id=\"{{ id }}\" [readonly]=\"readonly\" (change)=\"change($event)\"\n        [attr.data-noformat]=\"noFormat\" [value]=\"__value\" />\n    </ng-container>\n    <!-- Viewer -->\n    <ng-container *ngSwitchCase=\"'viewer'\">\n      <input type=\"text\" id=\"{{ id }}\" placeholder=\"{{ placeholder }}\" [attr.data-noformat]=\"noFormat\"\n        [class]=\"inpCl | inputClass: valid:invalid:showValidation\" [readonly]=\"true\" [value]=\"value\" />\n    </ng-container>\n    <!-- DEFAULT -->\n    <ng-container *ngSwitchDefault>\n      <mat-form-field [appearance]=\"appearance\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <div matPrefix class=\"prefix-text\" *ngIf=\"prefix\">\n          {{prefix}}\n        </div>\n        <input matInput type=\"{{showPassword?'text':type}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\"\n          [readonly]=\"readonly || disabled\" (change)=\"change($event)\" placeholder=\"{{placeholder||label}}\">\n\n        <div matSuffix class=\"d-flex align-items-center\" *ngIf=\"showValidation||type=='password'\">\n          <ng-container *ngIf=\"type=='password'\">\n            <span class=\"pointer showPassword\" (click)=\"showPassword=!showPassword\">\n              {{!showPassword?'Show':'hide'}}\n            </span>\n          </ng-container>\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success ms-8\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error ms-8\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n  </ng-container>\n</div>\n<div *ngIf=\"showValidationMsg\">\n  <app-validation-message #vmTag [label]=\"label\" [control]=\"control\" [maxLength]=\"max\" [minLength]=\"min\"></app-validation-message>\n</div>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n"] }]
        }], ctorParameters: function () { return [{ type: InputService }]; }, propDecorators: { accept: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], autoPickValueField: [{
                type: Input
            }], clearOnDisable: [{
                type: Input
            }], cls: [{
                type: Input
            }], colored: [{
                type: Input
            }], checked: [{
                type: Input
            }], contextData: [{
                type: Input
            }], dashboardInput: [{
                type: Input
            }], debug: [{
                type: Input
            }], decimalPoints: [{
                type: Input
            }], endLabel: [{
                type: Input
            }], endLabelTooltip: [{
                type: Input
            }], files: [{
                type: Input
            }], _form: [{
                type: Input,
                args: [{ required: true, alias: 'form' }]
            }], noFormat: [{
                type: Input
            }], hide: [{
                type: Input
            }], hint: [{
                type: Input
            }], icon: [{
                type: Input
            }], id: [{
                type: Input
            }], inpCl: [{
                type: Input
            }], label: [{
                type: Input
            }], labelLink: [{
                type: Input
            }], labelField: [{
                type: Input
            }], labelType: [{
                type: Input
            }], lblCl: [{
                type: Input
            }], light: [{
                type: Input
            }], loading: [{
                type: Input
            }], max: [{
                type: Input
            }], min: [{
                type: Input
            }], mini: [{
                type: Input
            }], multiple: [{
                type: Input
            }], _name: [{
                type: Input,
                args: ['name']
            }], optionFormatter: [{
                type: Input
            }], optionsInitFunc: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], prefix: [{
                type: Input
            }], startField: [{
                type: Input
            }], endField: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], noPaste: [{
                type: Input
            }], showEmptyOption: [{
                type: Input
            }], showLabel: [{
                type: Input
            }], showSeperateLabel: [{
                type: Input
            }], showValidation: [{
                type: Input
            }], showValidationMsg: [{
                type: Input
            }], showValidationIcon: [{
                type: Input
            }], small: [{
                type: Input
            }], stacked: [{
                type: Input
            }], suffix: [{
                type: Input
            }], theme: [{
                type: Input
            }], translateOptions: [{
                type: Input
            }], valueField: [{
                type: Input
            }], vms: [{
                type: Input
            }], xsmall: [{
                type: Input
            }], mchange: [{
                type: Output
            }], validityChecked: [{
                type: Output
            }], mSelectOptionChange: [{
                type: Output
            }], mContextChange: [{
                type: Output
            }], appearance: [{
                type: Input
            }], _validationKey: [{
                type: Input,
                args: ['validationKey']
            }], _disabled: [{
                type: Input,
                args: ['disabled']
            }], customSelectChangeAction: [{
                type: Input
            }], _options: [{
                type: Input,
                args: ['options']
            }], _type: [{
                type: Input,
                args: ['type']
            }], _value: [{
                type: Input,
                args: ['mvalue']
            }], inpTag: [{
                type: ViewChild,
                args: ['inp']
            }] } });

class AutocompleteService {
    constructor() { }
    filterOptions(query, options) {
        return new Observable((sub) => {
            const filterValue = this.normalizeValue(query);
            sub.next(filterValue
                ? options?.filter((option) => this.normalizeValue(option.label)?.includes(filterValue))
                : options);
        });
    }
    normalizeValue(value) {
        return value?.toString()?.toLowerCase().replace(/\s/g, '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class AutocompleteComponent extends InputBasicComponent {
    constructor(iS, autoS) {
        super(iS);
        this.iS = iS;
        this.autoS = autoS;
        this.validate = true;
        this.displayWith = (val) => {
            return this.options?.find((x) => x.value == val)?.label || val;
        };
        this.includesOption = (control) => {
            const val = control?.value;
            if (!val)
                return null;
            if (!this.options || this.options.length === 0)
                return null;
            // debugger
            if (this.options.find((x) => x.value == val))
                return null;
            else
                return { notFound: true };
        };
    }
    ngOnInit() {
        super.ngOnInit();
        this.control?.addValidators(this.includesOption.bind(this));
        this.control?.valueChanges.subscribe((r) => {
            // debugger
            super.change({ target: { value: r } });
        });
        // this.options$.subscribe((r) => {
        //   if (this.debug) debugger;
        //   (this.control as FormControl)?.patchValue(this.control?.value,{emitEvent:false});
        //   if (this.control.disabled) this.control.disable({ emitEvent: false });
        // });
        merge(this.control.valueChanges.pipe(startWith('')), this.options$)
            .pipe(
        // filter((r) => !this.filterFunc),
        mergeMap((r) => this.autoS.filterOptions(this.control.value, this.options)))
            .subscribe((r) => {
            this.filteredOptions = r;
        });
        this.control.valueChanges
            .pipe(startWith(''))
            .pipe(debounceTime(1000), filter((r) => !!this.filterFunc), mergeMap((r) => this.filterFunc(this.control.value, this.options)))
            .subscribe((r) => {
            this._options = r;
        });
    }
    selected($event) {
        this.filteredOptions = this.options;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteComponent, deps: [{ token: InputService }, { token: AutocompleteService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: AutocompleteComponent, isStandalone: true, selector: "app-autocomplete", inputs: { validate: "validate", filterFunc: "filterFunc" }, usesInheritance: true, ngImport: i0, template: "<div class=\"row align-items-center\">\n  <div class=\"{{stacked?'col-12':'col-md'}} position-relative\">\n    <form [formGroup]=\"form|toAny\">\n\n      <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\">{{label}}\n        <span *ngIf=\"hint\" class=\"ms-8\">\n          <info-icon [text]=\"hint\" />\n        </span>\n      </div>\n      <div class=\"position-relative\">\n        <div class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <input type=\"text\" data-noformat=\"true\" [formControlName]=\"name|toAny \" placeholder=\"{{placeholder||label}}\"\n          id=\"{{id}}\" [class]=\"inpCl|inputClass:valid:invalid:showValidation\" [required]=\"required\"\n          [readonly]=\"readonly\" #trigger=\"matAutocompleteTrigger\" [matAutocomplete]=\"auto\" #inp>\n        <i class=\"input-icon fa fa-chevron-down\" (click)=\"$event.stopPropagation(); trigger.openPanel()\"></i>\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngIf=\"showEmptyOption\" [value]=\"null\">\n\n          </mat-option>\n          <mat-option *ngFor=\"let item of filteredOptions ; trackBy:iS.trackByValue\" [value]=\"item.value\">\n            <div class=\"option\" [matTooltip]=\"item.label\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n              {{item.label}}</div>\n          </mat-option>\n        </mat-autocomplete>\n        <ng-container *ngIf=\"control?.dirty && showValidation && showValidationIcon \">\n          <div [ngClass]=\"{valid:control?.valid}\" class=\" validity-icon\"><i class=\"fa fa-check\"></i></div>\n          <div [ngClass]=\"{pending:control?.pending}\" class=\" validity-icon\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n          <div [ngClass]=\"{invalid:control?.invalid}\" class=\" validity-icon\"><i class=\"fa fa-times\"></i></div>\n        </ng-container>\n      </div>\n    </form>\n  </div>\n</div>\n<app-validation-message *ngIf=\"showValidationMsg\" [control]=\"control\" [label]=\"label\"></app-validation-message>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n", "i.input-icon{position:absolute;top:calc((100% - 10px)/2);right:15px;opacity:.4;font-size:10px}.option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}input{padding:11px 16px;font-style:normal;font-weight:500;font-size:16px;line-height:18px;width:100%;display:flex;align-items:center;height:51px;color:#828282}input:active,input:focus{background-color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: InfoIconComponent, selector: "info-icon", inputs: ["text", "coloured", "left", "right"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4$3.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i9$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i4$3.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: ValidationMessageComponent, selector: "app-validation-message", inputs: ["validationKey", "control", "input", "label", "minLength", "maxLength", "customMessage"] }, { kind: "pipe", type: InputClassPipe, name: "inputClass" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-autocomplete', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        NgIf,
                        InfoIconComponent,
                        SvgIconComponent,
                        MatAutocompleteModule,
                        MatOptionModule,
                        NgFor,
                        MatTooltipModule,
                        NgClass,
                        ValidationMessageComponent,
                        InputClassPipe,
                        ToAnyPipe,
                    ], template: "<div class=\"row align-items-center\">\n  <div class=\"{{stacked?'col-12':'col-md'}} position-relative\">\n    <form [formGroup]=\"form|toAny\">\n\n      <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\">{{label}}\n        <span *ngIf=\"hint\" class=\"ms-8\">\n          <info-icon [text]=\"hint\" />\n        </span>\n      </div>\n      <div class=\"position-relative\">\n        <div class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <input type=\"text\" data-noformat=\"true\" [formControlName]=\"name|toAny \" placeholder=\"{{placeholder||label}}\"\n          id=\"{{id}}\" [class]=\"inpCl|inputClass:valid:invalid:showValidation\" [required]=\"required\"\n          [readonly]=\"readonly\" #trigger=\"matAutocompleteTrigger\" [matAutocomplete]=\"auto\" #inp>\n        <i class=\"input-icon fa fa-chevron-down\" (click)=\"$event.stopPropagation(); trigger.openPanel()\"></i>\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngIf=\"showEmptyOption\" [value]=\"null\">\n\n          </mat-option>\n          <mat-option *ngFor=\"let item of filteredOptions ; trackBy:iS.trackByValue\" [value]=\"item.value\">\n            <div class=\"option\" [matTooltip]=\"item.label\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n              {{item.label}}</div>\n          </mat-option>\n        </mat-autocomplete>\n        <ng-container *ngIf=\"control?.dirty && showValidation && showValidationIcon \">\n          <div [ngClass]=\"{valid:control?.valid}\" class=\" validity-icon\"><i class=\"fa fa-check\"></i></div>\n          <div [ngClass]=\"{pending:control?.pending}\" class=\" validity-icon\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n          <div [ngClass]=\"{invalid:control?.invalid}\" class=\" validity-icon\"><i class=\"fa fa-times\"></i></div>\n        </ng-container>\n      </div>\n    </form>\n  </div>\n</div>\n<app-validation-message *ngIf=\"showValidationMsg\" [control]=\"control\" [label]=\"label\"></app-validation-message>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n", "i.input-icon{position:absolute;top:calc((100% - 10px)/2);right:15px;opacity:.4;font-size:10px}.option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}input{padding:11px 16px;font-style:normal;font-weight:500;font-size:16px;line-height:18px;width:100%;display:flex;align-items:center;height:51px;color:#828282}input:active,input:focus{background-color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: InputService }, { type: AutocompleteService }]; }, propDecorators: { validate: [{
                type: Input
            }], filterFunc: [{
                type: Input
            }] } });

class BtnLgComponent extends BtnComponent {
    constructor(btnS) {
        super(btnS);
        this.btnS = btnS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnLgComponent, deps: [{ token: BtnService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: BtnLgComponent, isStandalone: true, selector: "app-btn-lg", inputs: { queryParamsHandling: "queryParamsHandling", route: "route", value: "value", subText: "subText", subValue: "subValue" }, usesInheritance: true, ngImport: i0, template: "<span class=\"section-cards\">\n  <ng-container *ngIf=\"route; else elseTemplate\">\n    <button matRipple class=\"btn-large\" routerLink=\"{{route}}\" [queryParamsHandling]='queryParamsHandling'>\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <button matRipple class=\"btn-large\">\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-template>\n\n\n</span>\n<ng-template #btnContent>\n  <div>\n    <div class=\"title\" [innerHTML]=\"text\"> </div>\n    <div class=\"text\" [ngClass]=\"{detach:!!subText}\"[innerHTML]=\"value|toAny\"> </div>\n    <div class=\"sub-title\" *ngIf=\"subText\" [innerHTML]=\"subText\"> </div>\n    <div class=\"sub-text\" *ngIf=\"subValue\" [innerHTML]=\"subValue|toAny\"> </div>\n  </div>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatRippleModule }, { kind: "directive", type: i9$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnLgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-btn-lg', standalone: true, imports: [
                        NgIf,
                        MatRippleModule,
                        RouterLink,
                        NgTemplateOutlet,
                        NgClass,
                        ToAnyPipe,
                    ], template: "<span class=\"section-cards\">\n  <ng-container *ngIf=\"route; else elseTemplate\">\n    <button matRipple class=\"btn-large\" routerLink=\"{{route}}\" [queryParamsHandling]='queryParamsHandling'>\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <button matRipple class=\"btn-large\">\n      <ng-container *ngTemplateOutlet=\"btnContent\">\n      </ng-container>\n    </button>\n  </ng-template>\n\n\n</span>\n<ng-template #btnContent>\n  <div>\n    <div class=\"title\" [innerHTML]=\"text\"> </div>\n    <div class=\"text\" [ngClass]=\"{detach:!!subText}\"[innerHTML]=\"value|toAny\"> </div>\n    <div class=\"sub-title\" *ngIf=\"subText\" [innerHTML]=\"subText\"> </div>\n    <div class=\"sub-text\" *ngIf=\"subValue\" [innerHTML]=\"subValue|toAny\"> </div>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: BtnService }]; }, propDecorators: { queryParamsHandling: [{
                type: Input
            }], route: [{
                type: Input
            }], value: [{
                type: Input
            }], subText: [{
                type: Input
            }], subValue: [{
                type: Input
            }] } });

class BtnLinkComponent extends BtnComponent {
    constructor(btnS) {
        super(btnS);
        this.btnS = btnS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnLinkComponent, deps: [{ token: BtnService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: BtnLinkComponent, isStandalone: true, selector: "app-btn-link", inputs: { mqueryParamsHandling: "mqueryParamsHandling", route: "route", params: "params", emailTo: "emailTo" }, usesInheritance: true, ngImport: i0, template: "\n<ng-container [ngSwitch]=\"true\">\n    <ng-container *ngSwitchCase=\"!!route?.length\">\n    <a [routerLink]=\"[route]\" [queryParams]=\"params\" class=\"{{mclass}} {{_mclass}}\">{{text}}</a>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"!!emailTo?.length\">\n        <a href=\"mailto:{{emailTo}}\"class=\"{{mclass}} {{_mclass}}\">{{text}}</a>\n    </ng-container>\n    <ng-container *ngSwitchDefault>\n    <a class=\"{{mclass}} {{_mclass}}\">{{text}}</a>\n    </ng-container>\n</ng-container>", styles: [""], dependencies: [{ kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-btn-link', standalone: true, imports: [NgSwitch, NgSwitchCase, RouterLink, NgSwitchDefault], template: "\n<ng-container [ngSwitch]=\"true\">\n    <ng-container *ngSwitchCase=\"!!route?.length\">\n    <a [routerLink]=\"[route]\" [queryParams]=\"params\" class=\"{{mclass}} {{_mclass}}\">{{text}}</a>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"!!emailTo?.length\">\n        <a href=\"mailto:{{emailTo}}\"class=\"{{mclass}} {{_mclass}}\">{{text}}</a>\n    </ng-container>\n    <ng-container *ngSwitchDefault>\n    <a class=\"{{mclass}} {{_mclass}}\">{{text}}</a>\n    </ng-container>\n</ng-container>" }]
        }], ctorParameters: function () { return [{ type: BtnService }]; }, propDecorators: { mqueryParamsHandling: [{
                type: Input
            }], route: [{
                type: Input
            }], params: [{
                type: Input
            }], emailTo: [{
                type: Input
            }] } });

class ChipListAutocompleteComponent extends InputBasicComponent {
    constructor(iS, autoS) {
        super(iS);
        this.iS = iS;
        this.autoS = autoS;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.autoCompleteCtrl = new FormControl('');
    }
    ngOnInit() {
        super.ngOnInit();
        merge(this.autoCompleteCtrl.valueChanges.pipe(startWith('')), this.options$)
            .pipe(
        // filter((r) => !this.filterFunc),
        mergeMap((r) => this.autoS.filterOptions(this.autoCompleteCtrl.value, this.options)))
            .subscribe((r) => {
            this.filteredOptions = r;
        });
        this.autoCompleteCtrl.valueChanges
            .pipe(startWith(''))
            .pipe(debounceTime(1000), filter((r) => !!this.filterFunc), mergeMap((r) => this.filterFunc(this.autoCompleteCtrl.value)))
            .subscribe((r) => {
            this._options = r;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    add(event) {
        // const value = (event.value || '').trim();
        // // Add our fruit
        // if (value) {
        //   this.control?.value.push(value);
        // }
        // // Clear the input value
        // event.chipInput!.clear();
        // this.autoCompleteCtrl.setValue(null);
    }
    remove(index) {
        this.control?.value.splice(index, 1);
    }
    selected(event) {
        delete this.message;
        if (!this.control?.value)
            this.control?.patchValue([]);
        if (this.control?.value?.includes(event.option.value)) {
            this.message = event.option.viewValue + ' has already been added';
        }
        else
            this.control?.value.push(event.option.value);
        // this.fruitInput.nativeElement.value = '';
        this.autoCompleteCtrl.setValue(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ChipListAutocompleteComponent, deps: [{ token: InputService }, { token: AutocompleteService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ChipListAutocompleteComponent, isStandalone: true, selector: "chip-list-autocomplete", inputs: { filterFunc: "filterFunc", addedDataFormatter: "addedDataFormatter" }, viewQueries: [{ propertyName: "fruitInput", first: true, predicate: ["fruitInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n    <mat-label>{{label}}</mat-label>\n    <mat-chip-grid #chipGrid attr.aria-label=\"{{label}} selection\">\n        <mat-chip-row *ngFor=\"let item of control.value;let i =index\" (removed)=\"remove(i)\">\n            {{(addedDataFormatter|functionCaller1:item|async)||item}}\n            <button matChipRemove [attr.aria-label]=\"'remove ' + item\">\n                <mat-icon>cancel</mat-icon>\n            </button>\n        </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"{{placeholder||label}}\" #aInput [formControl]=\"autoCompleteCtrl\" [matChipInputFor]=\"chipGrid\"\n        [matAutocomplete]=\"auto\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        (matChipInputTokenEnd)=\"add($event)\" />\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n        <mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option.value\">\n            {{option.label}}\n        </mat-option>\n    </mat-autocomplete>\n</mat-form-field>\n<div class=\"text-danger\" *ngIf=\"message\">{{message}}</div>", styles: [".example-chip-list{width:100%;height:auto}.mat-mdc-form-field:focus-within input{background:transparent!important}.mat-mdc-form-field{background:transparent!important}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i4$4.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i4$4.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i4$4.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i4$4.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i7$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4$3.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i9$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i4$3.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: FunctionCaller1, name: "functionCaller1" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ChipListAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'chip-list-autocomplete', standalone: true, imports: [
                        MatFormFieldModule,
                        MatChipsModule,
                        NgFor,
                        MatIconModule,
                        FormsModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        MatOptionModule,
                        NgIf,
                        AsyncPipe,
                        FunctionCaller1,
                    ], template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n    <mat-label>{{label}}</mat-label>\n    <mat-chip-grid #chipGrid attr.aria-label=\"{{label}} selection\">\n        <mat-chip-row *ngFor=\"let item of control.value;let i =index\" (removed)=\"remove(i)\">\n            {{(addedDataFormatter|functionCaller1:item|async)||item}}\n            <button matChipRemove [attr.aria-label]=\"'remove ' + item\">\n                <mat-icon>cancel</mat-icon>\n            </button>\n        </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"{{placeholder||label}}\" #aInput [formControl]=\"autoCompleteCtrl\" [matChipInputFor]=\"chipGrid\"\n        [matAutocomplete]=\"auto\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        (matChipInputTokenEnd)=\"add($event)\" />\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n        <mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option.value\">\n            {{option.label}}\n        </mat-option>\n    </mat-autocomplete>\n</mat-form-field>\n<div class=\"text-danger\" *ngIf=\"message\">{{message}}</div>", styles: [".example-chip-list{width:100%;height:auto}.mat-mdc-form-field:focus-within input{background:transparent!important}.mat-mdc-form-field{background:transparent!important}\n"] }]
        }], ctorParameters: function () { return [{ type: InputService }, { type: AutocompleteService }]; }, propDecorators: { filterFunc: [{
                type: Input
            }], fruitInput: [{
                type: ViewChild,
                args: ['fruitInput']
            }], addedDataFormatter: [{
                type: Input
            }] } });

class CountComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: CountComponent, isStandalone: true, selector: "count", inputs: { count: "count", class: "class" }, ngImport: i0, template: "<div class=\"card count center\">\n{{count|valueOrX:'-'}}\n</div>", styles: [".card.count{font-style:normal;font-weight:600;font-size:14px;line-height:19px;background:#fafafa;display:inline-flex;border:1px solid #f2f2f2;border-radius:8px;height:24px;width:auto;min-width:24px;color:#828282;padding:2px 5px}\n"], dependencies: [{ kind: "pipe", type: ValueOrXPipe, name: "valueOrX" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: CountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'count', standalone: true, imports: [ValueOrXPipe], template: "<div class=\"card count center\">\n{{count|valueOrX:'-'}}\n</div>", styles: [".card.count{font-style:normal;font-weight:600;font-size:14px;line-height:19px;background:#fafafa;display:inline-flex;border:1px solid #f2f2f2;border-radius:8px;height:24px;width:auto;min-width:24px;color:#828282;padding:2px 5px}\n"] }]
        }], propDecorators: { count: [{
                type: Input
            }], class: [{
                type: Input
            }] } });

class FeedbackCardComponent {
    constructor() {
        this.defaultStatus = 0;
        /** 0 - indicates error 1 - indicates success 2 - indicates info */
        this.status = this.defaultStatus;
    }
    ngOnInit() { }
    reset() {
        this.message = null;
        this.status = this.defaultStatus;
    }
    setErrorMessage(message) {
        if (!message)
            return;
        if (typeof message != 'string')
            console.log(message);
        this.message = typeof message == 'string' ? message : 'An error occurred';
        this.status = 0;
        this.elRef?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FeedbackCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: FeedbackCardComponent, isStandalone: true, selector: "feedback-card", inputs: { class: "class", message: "message", status: "status" }, viewQueries: [{ propertyName: "elRef", first: true, predicate: ["el"], descendants: true }], ngImport: i0, template: "<div #el>\n    <div class=\"case status-{{status}} {{class}}\" *ngIf=\"message\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-auto text-danger\"> \n          <svg-icon icon=\"error\"></svg-icon>\n        </div>\n        <div class=\"col\" [innerHTML]=\"message\">\n        </div>\n      </div>\n    </div>\n</div>\n", styles: [".case{border-radius:8px;width:100%;font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin:20px auto;padding:20px;color:#333}.case.status-0{background:#ffe7e7}.case.status-0 .icon{color:#e80000}.case.status-1{background:#e7ffec}.case.status-1 .icon{color:#00e842}.case.status-2{background:#e7fbff}.case.status-2 .icon{color:#008fe8}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FeedbackCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'feedback-card', standalone: true, imports: [NgIf, SvgIconComponent], template: "<div #el>\n    <div class=\"case status-{{status}} {{class}}\" *ngIf=\"message\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-auto text-danger\"> \n          <svg-icon icon=\"error\"></svg-icon>\n        </div>\n        <div class=\"col\" [innerHTML]=\"message\">\n        </div>\n      </div>\n    </div>\n</div>\n", styles: [".case{border-radius:8px;width:100%;font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin:20px auto;padding:20px;color:#333}.case.status-0{background:#ffe7e7}.case.status-0 .icon{color:#e80000}.case.status-1{background:#e7ffec}.case.status-1 .icon{color:#00e842}.case.status-2{background:#e7fbff}.case.status-2 .icon{color:#008fe8}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { class: [{
                type: Input
            }], message: [{
                type: Input
            }], status: [{
                type: Input
            }], elRef: [{
                type: ViewChild,
                args: ['el']
            }] } });

class FileUploadComponent {
    set _accept(v) {
        switch (v) {
            case 'image':
                this.accept = '.png,.jpg,.docx,.pdf';
                break;
            default:
                this.accept = v;
                break;
        }
    }
    constructor(uS) {
        this.uS = uS;
        this.mini = true;
        this.listFiles = true;
        this.fileChange = new EventEmitter();
        this.filesChange = new EventEmitter();
    }
    ngOnInit() { }
    get isSingle() {
        return !this.multiple;
    }
    acceptFiles(...files) {
        this.files = files;
        this.file = files ? files[0] : null;
        if (this.file?.type?.startsWith('image')) {
            const reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.imageString = reader.result;
            };
        }
        else
            this.imageString = null;
    }
    emitFiles() {
        if (this.multiple)
            this.filesChange.emit(this.files);
        else
            this.fileChange.emit(this.file);
    }
    onUpload(event) {
        const files = Array.from(event.target.files);
        this.acceptFiles(...files);
        this.emitFiles();
    }
    removeFile(index) {
        this.files.splice(index, 1);
        this.file = this.files ? this.files[0] : null;
        this.fileChange.emit(this.file);
        this.filesChange.emit(this.files);
    }
    openDialog() {
        const inp = document.createElement('input');
        inp.type = 'file';
        inp.accept = this.accept;
        inp.multiple = this.multiple;
        inp.onchange = (e) => {
            this.onUpload(e);
            inp.remove();
        };
        // document.body.appendChild(inp);
        inp.click();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FileUploadComponent, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: FileUploadComponent, isStandalone: true, selector: "app-file-upload", inputs: { help: "help", label: "label", class: "class", icon: "icon", disabled: "disabled", multiple: "multiple", mini: "mini", useDocumentModal: "useDocumentModal", listFiles: "listFiles", _accept: ["accept", "_accept"], file: "file", files: "files" }, outputs: { fileChange: "fileChange", filesChange: "filesChange" }, ngImport: i0, template: "\n<div *ngIf=\"listFiles\" [ngClass]=\"{meta:mini}\" class=\"{{class}} form-label mb-2 hide-scroll\">\n  <div class=\"row align-items-start mb-1\" *ngFor=\"let item of files;let i = index\">\n    <div class=\"col\">\n      <div class=\"hide-scroll file-name\">\n        {{item?.name}}\n      </div>\n    </div>\n    <div class=\"col-auto text-end\">\n      <span class=\"text-danger pointer p-1 fa fa-close\" (click)=\"removeFile(i);\"></span>\n    </div>\n  </div>\n</div>\n<!-- <input type=\"file\"  style=\"display: none;\" accept=\"{{accept}}\" (change)=\"onUpload($event)\" #uploadInput [multiple]=\"multiple\"> -->\n<app-btn [icon]=\"icon\" (mclick)=\"openDialog()\" [type]=\"file?'primary':'secondary'\"\n  [disabled]=\"disabled\" [help]=\"help\" [text]=\"label\">\n\n</app-btn>", styles: [".meta,.file-name{height:23px}.meta{overflow-y:auto}.file-name{overflow:auto}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FileUploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload', standalone: true, imports: [
                        NgIf,
                        NgClass,
                        NgFor,
                        BtnComponent,
                    ], template: "\n<div *ngIf=\"listFiles\" [ngClass]=\"{meta:mini}\" class=\"{{class}} form-label mb-2 hide-scroll\">\n  <div class=\"row align-items-start mb-1\" *ngFor=\"let item of files;let i = index\">\n    <div class=\"col\">\n      <div class=\"hide-scroll file-name\">\n        {{item?.name}}\n      </div>\n    </div>\n    <div class=\"col-auto text-end\">\n      <span class=\"text-danger pointer p-1 fa fa-close\" (click)=\"removeFile(i);\"></span>\n    </div>\n  </div>\n</div>\n<!-- <input type=\"file\"  style=\"display: none;\" accept=\"{{accept}}\" (change)=\"onUpload($event)\" #uploadInput [multiple]=\"multiple\"> -->\n<app-btn [icon]=\"icon\" (mclick)=\"openDialog()\" [type]=\"file?'primary':'secondary'\"\n  [disabled]=\"disabled\" [help]=\"help\" [text]=\"label\">\n\n</app-btn>", styles: [".meta,.file-name{height:23px}.meta{overflow-y:auto}.file-name{overflow:auto}\n"] }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; }, propDecorators: { help: [{
                type: Input
            }], label: [{
                type: Input
            }], class: [{
                type: Input
            }], icon: [{
                type: Input
            }], disabled: [{
                type: Input
            }], multiple: [{
                type: Input
            }], mini: [{
                type: Input
            }], useDocumentModal: [{
                type: Input
            }], listFiles: [{
                type: Input
            }], _accept: [{
                type: Input,
                args: ['accept']
            }], file: [{
                type: Input
            }], fileChange: [{
                type: Output
            }], files: [{
                type: Input
            }], filesChange: [{
                type: Output
            }] } });

class InputTD_RFComponent extends InputBasicComponent {
    set _validators(v) {
        this.control?.removeValidators(this.validators);
        this.validators = v;
        this.control?.setValidators(v);
        this.control?.updateValueAndValidity();
    }
    set _asyncValidators(v) {
        this.control?.removeValidators(this.asyncValidators);
        this.asyncValidators = v;
        this.control?.setValidators(v);
        this.control?.updateValueAndValidity();
    }
    set _form(v) {
        super._form = v;
    }
    set _model(v) {
        if (v == this.model)
            return;
        this.model = v;
        if (this.debug)
            debugger;
        this.control?.enable();
        this.control?.patchValue(v);
        if (this.disabled)
            this.control?.disable();
    }
    set _disabled(v) {
        if (this.debug)
            debugger;
        this.disabled = v;
        if (v) {
            if (this.clearOnDisable)
                this.control?.reset();
            this.control?.disable();
        }
        else if (this.control?.disabled) {
            this.control?.enable();
        }
    }
    constructor(iS) {
        super(iS);
        this.iS = iS;
        this.modelChange = new EventEmitter();
        this.name = 'item';
    }
    ngOnInit() {
        this.form = new FormGroup({
            item: new FormControl(this.model, this.validators, this.asyncValidators),
        });
        this._name = 'item';
        this.disableControl();
        this.control?.valueChanges.subscribe((r) => {
            this.modelChange.emit(r);
            this.disableControl();
        });
        this.control?.statusChanges.subscribe((r) => {
            if (this.debug)
                debugger;
        });
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    get invalid() {
        return this.control?.invalid;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputTD_RFComponent, deps: [{ token: InputService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: InputTD_RFComponent, isStandalone: true, selector: "app-input-td-rf", inputs: { _validators: ["validators", "_validators"], _asyncValidators: ["asyncValidators", "_asyncValidators"], _form: ["form", "_form"], _model: ["model", "_model"], _disabled: ["disabled", "_disabled"] }, outputs: { modelChange: "modelChange" }, usesInheritance: true, ngImport: i0, template: "<div class=\"  {{type}}  \" [ngClass]=\"{showValidation,dashboardInput}\" [formGroup]=\"form\">\n  <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\" (click)=\"log()\">{{label}}\n    <span *ngIf=\"hint\" class=\"ms-8\">\n      <info-icon [text]=\"hint\" />\n    </span>\n  </div>\n  <ng-container [ngSwitch]=\"type\">\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'date-range'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <mat-date-range-input [formGroup]=\"control|toAny\" [rangePicker]=\"picker\">\n          <input formControlName=\"{{startField}}\" matStartDate placeholder=\"Start date\">\n          <input formControlName=\"{{endField}}\" matEndDate placeholder=\"End date\">\n        </mat-date-range-input>\n        <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n        <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-date-range-picker #picker>\n          <mat-date-range-picker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-date-range-picker-actions>\n        </mat-date-range-picker>\n      </mat-form-field>\n    </ng-container>\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'toggle'\">\n      <mat-slide-toggle [formControlName]=\"name|toAny\" [required]=\"required\" (change)=\"change($event)\">{{label}}\n      </mat-slide-toggle>\n    </ng-container>\n    <!-- CHECKBOX -->\n    <ng-container *ngSwitchCase=\"'checkbox'\">\n      <mat-checkbox #mc class=\"circle-checkbox\" [formControlName]=\"name|toAny\" [required]=\"required\"\n        (change)=\"change($event)\">\n        {{label}}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'checkedbox'\">\n      <input type=\"checkbox\" class=\"{{ inpCl }} d-inline-block form-control width-unset\" [checked]=\"checked\"\n        [attr.data-debug]=\"debug\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\" />\n    </ng-container>\n    <!-- FILE -->\n    <ng-container *ngSwitchCase=\"'file'\">\n      <input type=\"file\" id=\"{{ id }}\" class=\"p-8 {{inpCl | inputClass: valid:invalid:showValidation}}\"\n        (change)=\"upload($event)\" [accept]=\"accept\" [attr.multiple]=\"multiple\" />\n      <div *ngFor=\"let imagePath of imagePaths\">\n        <img src=\"{{imagePath}}\" alt=\"{{label}} image\" class=\"image-preview mt-8\">\n      </div>\n    </ng-container>\n    <!-- Date -->\n    <ng-container *ngSwitchCase=\"'date'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <input matInput [matDatepicker]=\"datepicker\" (selectionChange)=\"change($event)\" [required]=\"required\"\n          [min]=\"min\" [max]=\"max\" placeholder=\"{{placeholder||label}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n        <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #datepicker>\n          <mat-datepicker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-datepicker-actions>\n        </mat-datepicker>\n      </mat-form-field>\n    </ng-container>\n    <!-- SELECT -->\n    <ng-container *ngSwitchCase=\"'select'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <mat-select (selectionChange)=\"change($event)\" [required]=\"required\" placeholder=\"{{placeholder||label}}\"\n          [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n          <mat-option *ngIf=\"showEmptyOption\" selected></mat-option>\n          <mat-option *ngFor=\"let item of options; trackBy: iS.trackByValue\" [value]=\"item.value\" #inp>\n            {{ item.label }}\n          </mat-option>\n        </mat-select>\n\n        <div matSuffix *ngIf=\"showValidation\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n    <!-- TEXTAREA -->\n    <ng-container *ngSwitchCase=\"'textarea'\">\n      <textarea [formControlName]=\"name|toAny\" id=\"{{ id }}\" [class]=\"inpCl | inputClass: valid:invalid:showValidation\"\n        placeholder=\"{{label}}\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\"></textarea>\n    </ng-container>\n    <!-- Radio -->\n    <ng-container *ngSwitchCase=\"'radio'\">\n      <input type=\"radio\" [formControlName]=\"name|toAny\" id=\"{{ id }}\" [readonly]=\"readonly\" (change)=\"change($event)\"\n        [attr.data-noformat]=\"noFormat\" [value]=\"__value\" />\n    </ng-container>\n    <!-- Viewer -->\n    <ng-container *ngSwitchCase=\"'viewer'\">\n      <input type=\"text\" id=\"{{ id }}\" placeholder=\"{{ placeholder }}\" [attr.data-noformat]=\"noFormat\"\n        [class]=\"inpCl | inputClass: valid:invalid:showValidation\" [readonly]=\"true\" [value]=\"value\" />\n    </ng-container>\n    <!-- DEFAULT -->\n    <ng-container *ngSwitchDefault>\n      <mat-form-field [appearance]=\"appearance\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <div matPrefix class=\"prefix-text\" *ngIf=\"prefix\">\n          {{prefix}}\n        </div>\n        <input matInput type=\"{{showPassword?'text':type}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\"\n          [readonly]=\"readonly || disabled\" (change)=\"change($event)\" placeholder=\"{{placeholder||label}}\">\n\n        <div matSuffix class=\"d-flex align-items-center\" *ngIf=\"showValidation||type=='password'\">\n          <ng-container *ngIf=\"type=='password'\">\n            <span class=\"pointer showPassword\" (click)=\"showPassword=!showPassword\">\n              {{!showPassword?'Show':'hide'}}\n            </span>\n          </ng-container>\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success ms-8\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error ms-8\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n  </ng-container>\n</div>\n<div *ngIf=\"showValidationMsg\">\n  <app-validation-message #vmTag [label]=\"label\" [control]=\"control\" [maxLength]=\"max\" [minLength]=\"min\"></app-validation-message>\n</div>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i2$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: InfoIconComponent, selector: "info-icon", inputs: ["text", "coloured", "left", "right"] }, { kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i4$2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i4$2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i4$2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i4$2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i4$2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i4$2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i4$2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i4$2.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i4$2.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i4$2.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "directive", type: i5$1.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "component", type: i5$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: _MatSlideToggleRequiredValidatorModule }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i6$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i6$1.MatCheckboxRequiredValidator, selector: "mat-checkbox[required][formControlName],             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]" }, { kind: "ngmodule", type: _MatCheckboxRequiredValidatorModule }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i8.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i9$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: ValidationMessageComponent, selector: "app-validation-message", inputs: ["validationKey", "control", "input", "label", "minLength", "maxLength", "customMessage"] }, { kind: "pipe", type: InputClassPipe, name: "inputClass" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }, { kind: "pipe", type: ErrorMessagesPipe, name: "errorMessages" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputTD_RFComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input-td-rf', standalone: true, imports: [
                        NgClass,
                        FormsModule,
                        ReactiveFormsModule,
                        NgIf,
                        InfoIconComponent,
                        NgSwitch,
                        NgSwitchCase,
                        MatFormFieldModule,
                        MatDatepickerModule,
                        BtnComponent,
                        MatSlideToggleModule,
                        _MatSlideToggleRequiredValidatorModule,
                        MatCheckboxModule,
                        _MatCheckboxRequiredValidatorModule,
                        NgFor,
                        MatInputModule,
                        SvgIconComponent,
                        MatSelectModule,
                        MatOptionModule,
                        MatTooltipModule,
                        NgSwitchDefault,
                        ValidationMessageComponent,
                        InputClassPipe,
                        ToAnyPipe,
                        ErrorMessagesPipe,
                    ], template: "<div class=\"  {{type}}  \" [ngClass]=\"{showValidation,dashboardInput}\" [formGroup]=\"form\">\n  <div class=\"d-flex align-items-center mb-8\" *ngIf=\"showSeperateLabel\" (click)=\"log()\">{{label}}\n    <span *ngIf=\"hint\" class=\"ms-8\">\n      <info-icon [text]=\"hint\" />\n    </span>\n  </div>\n  <ng-container [ngSwitch]=\"type\">\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'date-range'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <mat-date-range-input [formGroup]=\"control|toAny\" [rangePicker]=\"picker\">\n          <input formControlName=\"{{startField}}\" matStartDate placeholder=\"Start date\">\n          <input formControlName=\"{{endField}}\" matEndDate placeholder=\"End date\">\n        </mat-date-range-input>\n        <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n        <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-date-range-picker #picker>\n          <mat-date-range-picker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-date-range-picker-actions>\n        </mat-date-range-picker>\n      </mat-form-field>\n    </ng-container>\n    <!-- TOGGLE -->\n    <ng-container *ngSwitchCase=\"'toggle'\">\n      <mat-slide-toggle [formControlName]=\"name|toAny\" [required]=\"required\" (change)=\"change($event)\">{{label}}\n      </mat-slide-toggle>\n    </ng-container>\n    <!-- CHECKBOX -->\n    <ng-container *ngSwitchCase=\"'checkbox'\">\n      <mat-checkbox #mc class=\"circle-checkbox\" [formControlName]=\"name|toAny\" [required]=\"required\"\n        (change)=\"change($event)\">\n        {{label}}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'checkedbox'\">\n      <input type=\"checkbox\" class=\"{{ inpCl }} d-inline-block form-control width-unset\" [checked]=\"checked\"\n        [attr.data-debug]=\"debug\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\" />\n    </ng-container>\n    <!-- FILE -->\n    <ng-container *ngSwitchCase=\"'file'\">\n      <input type=\"file\" id=\"{{ id }}\" class=\"p-8 {{inpCl | inputClass: valid:invalid:showValidation}}\"\n        (change)=\"upload($event)\" [accept]=\"accept\" [attr.multiple]=\"multiple\" />\n      <div *ngFor=\"let imagePath of imagePaths\">\n        <img src=\"{{imagePath}}\" alt=\"{{label}} image\" class=\"image-preview mt-8\">\n      </div>\n    </ng-container>\n    <!-- Date -->\n    <ng-container *ngSwitchCase=\"'date'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <input matInput [matDatepicker]=\"datepicker\" (selectionChange)=\"change($event)\" [required]=\"required\"\n          [min]=\"min\" [max]=\"max\" placeholder=\"{{placeholder||label}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n        <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #datepicker>\n          <mat-datepicker-actions>\n            <app-btn text=\"Cancel\" type=\"outline\" matDatepickerCancel></app-btn>\n            <div class=\"ms-8\">\n\n            </div>\n            <app-btn text=\"Apply\" matDatepickerApply></app-btn>\n          </mat-datepicker-actions>\n        </mat-datepicker>\n      </mat-form-field>\n    </ng-container>\n    <!-- SELECT -->\n    <ng-container *ngSwitchCase=\"'select'\">\n      <mat-form-field [appearance]=\"appearance\" class=\"custom-input\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <mat-select (selectionChange)=\"change($event)\" [required]=\"required\" placeholder=\"{{placeholder||label}}\"\n          [formControlName]=\"name|toAny\" id=\"{{ id }}\">\n          <mat-option *ngIf=\"showEmptyOption\" selected></mat-option>\n          <mat-option *ngFor=\"let item of options; trackBy: iS.trackByValue\" [value]=\"item.value\" #inp>\n            {{ item.label }}\n          </mat-option>\n        </mat-select>\n\n        <div matSuffix *ngIf=\"showValidation\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n    <!-- TEXTAREA -->\n    <ng-container *ngSwitchCase=\"'textarea'\">\n      <textarea [formControlName]=\"name|toAny\" id=\"{{ id }}\" [class]=\"inpCl | inputClass: valid:invalid:showValidation\"\n        placeholder=\"{{label}}\" [attr.data-noformat]=\"noFormat\" [required]=\"required\" [readonly]=\"readonly\"\n        (change)=\"change($event)\"></textarea>\n    </ng-container>\n    <!-- Radio -->\n    <ng-container *ngSwitchCase=\"'radio'\">\n      <input type=\"radio\" [formControlName]=\"name|toAny\" id=\"{{ id }}\" [readonly]=\"readonly\" (change)=\"change($event)\"\n        [attr.data-noformat]=\"noFormat\" [value]=\"__value\" />\n    </ng-container>\n    <!-- Viewer -->\n    <ng-container *ngSwitchCase=\"'viewer'\">\n      <input type=\"text\" id=\"{{ id }}\" placeholder=\"{{ placeholder }}\" [attr.data-noformat]=\"noFormat\"\n        [class]=\"inpCl | inputClass: valid:invalid:showValidation\" [readonly]=\"true\" [value]=\"value\" />\n    </ng-container>\n    <!-- DEFAULT -->\n    <ng-container *ngSwitchDefault>\n      <mat-form-field [appearance]=\"appearance\">\n        <div matPrefix class=\"prefix-icon\" *ngIf=\"icon\">\n          <svg-icon [icon]=\"icon\" (click)=\"log()\"></svg-icon>\n        </div>\n        <div matPrefix class=\"prefix-text\" *ngIf=\"prefix\">\n          {{prefix}}\n        </div>\n        <input matInput type=\"{{showPassword?'text':type}}\" [formControlName]=\"name|toAny\" id=\"{{ id }}\"\n          [readonly]=\"readonly || disabled\" (change)=\"change($event)\" placeholder=\"{{placeholder||label}}\">\n\n        <div matSuffix class=\"d-flex align-items-center\" *ngIf=\"showValidation||type=='password'\">\n          <ng-container *ngIf=\"type=='password'\">\n            <span class=\"pointer showPassword\" (click)=\"showPassword=!showPassword\">\n              {{!showPassword?'Show':'hide'}}\n            </span>\n          </ng-container>\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"valid\">\n              <span class=\"suffix-success ms-8\">\n                <svg-icon icon=\"success\"></svg-icon>\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"invalid\">\n              <span class=\"suffix-error ms-8\" [matTooltip]=\"validations|errorMessages:label:max:min:control\">\n                <svg-icon icon=\"error\"></svg-icon>\n              </span>\n            </ng-container>\n          </ng-container>\n        </div>\n      </mat-form-field>\n    </ng-container>\n  </ng-container>\n</div>\n<div *ngIf=\"showValidationMsg\">\n  <app-validation-message #vmTag [label]=\"label\" [control]=\"control\" [maxLength]=\"max\" [minLength]=\"min\"></app-validation-message>\n</div>", styles: [".bordercheck{border:1px solid #4ef580;outline:0}.borderuncheck{border:1px solid red;outline:0}.light{font-weight:500}.validity-icon{display:none;position:absolute;top:0;left:unset;right:20px;height:100%;align-items:center}.select .validity-icon{right:30px}.valid{display:flex!important;color:#4ef580}.pending{display:flex!important;color:#ff4500}.invalid{display:flex!important;color:red}.inputform{height:41px}.invalid-label{color:red!important}textarea{width:100%;padding:16px}input[type=checkbox]:checked{position:relative}.showValidationIcon .form-control:not(input[type=checkbox].form-control),.showValidationIcon select.form-control:not(input[type=checkbox].form-control){padding:10px 36px 10px 12px}.password-icons{position:absolute;right:20px;top:17%}[disabled]{cursor:default}.link{cursor:pointer}::placeholder,.custom-input .mat-mdc-select,.mat-mdc-select-placeholder{color:#bdbdbd}::ng-deep .prefix-icon{color:#bdbdbd}::ng-deep .svg-icon{height:13px;width:13px}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched{border:1px solid #27ae60}::ng-deep .showValidation .mat-mdc-form-field.ng-valid.ng-touched .suffix-success .svg-icon{color:#27ae60}::ng-deep .showValidation .mat-form-field-invalid.ng-touched{border:1px solid #eb5757}::ng-deep .showValidation .mat-form-field-invalid.ng-touched .suffix-error .svg-icon{color:#eb5757}.showPassword{font-style:normal;font-weight:500;font-size:14px;line-height:19px;color:#bdbdbd}::ng-deep .dashboardInput{display:flex}::ng-deep .dashboardInput .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}::ng-deep .dashboardInput .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}.image-preview{height:200px;border-radius:16px}\n"] }]
        }], ctorParameters: function () { return [{ type: InputService }]; }, propDecorators: { _validators: [{
                type: Input,
                args: ['validators']
            }], _asyncValidators: [{
                type: Input,
                args: ['asyncValidators']
            }], _form: [{
                type: Input,
                args: [{ required: false, alias: 'form' }]
            }], _model: [{
                type: Input,
                args: ['model']
            }], modelChange: [{
                type: Output
            }], _disabled: [{
                type: Input,
                args: ['disabled']
            }] } });

class ResponseCardComponent {
    constructor() {
        this.status = 1;
    }
    resetStatus() {
        this.status = null;
        this.showResponse = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResponseCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ResponseCardComponent, isStandalone: true, selector: "response-card", inputs: { header: "header", showResponse: "showResponse", status: "status" }, ngImport: i0, template: "<div class=\"text-center center h-100\" [hidden]=\"!showResponse\">\n    <div class=\"\">\n        <div class=\"\">\n            <ng-container [ngSwitch]=\"status\">\n                <ng-container *ngSwitchCase=\"1\">\n                    <img class=\"success-img\" src=\"/assets/icons/success.svg\" alt=\"\">\n                </ng-container>\n                <ng-container *ngSwitchCase=\"\">\n                </ng-container>\n                <ng-container *ngSwitchDefault>\n                </ng-container>\n            </ng-container>\n        </div>\n        <div class=\"header justify-content-center\" [ngClass]=\"{success:status==1}\">\n            {{header}}\n        </div>\n        <div class=\"message\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>", styles: [".message{font-weight:400;font-size:14px;line-height:19px;text-align:center;margin-top:8px;color:#333}.header{margin-top:16px}.header.success{font-style:normal;font-weight:600;font-size:16px;line-height:22px;display:flex;align-items:center;color:#27ae60}.success-img{width:40px;height:40px}\n"], dependencies: [{ kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResponseCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'response-card', standalone: true, imports: [
                        NgSwitch,
                        NgSwitchCase,
                        NgSwitchDefault,
                        NgClass,
                    ], template: "<div class=\"text-center center h-100\" [hidden]=\"!showResponse\">\n    <div class=\"\">\n        <div class=\"\">\n            <ng-container [ngSwitch]=\"status\">\n                <ng-container *ngSwitchCase=\"1\">\n                    <img class=\"success-img\" src=\"/assets/icons/success.svg\" alt=\"\">\n                </ng-container>\n                <ng-container *ngSwitchCase=\"\">\n                </ng-container>\n                <ng-container *ngSwitchDefault>\n                </ng-container>\n            </ng-container>\n        </div>\n        <div class=\"header justify-content-center\" [ngClass]=\"{success:status==1}\">\n            {{header}}\n        </div>\n        <div class=\"message\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>", styles: [".message{font-weight:400;font-size:14px;line-height:19px;text-align:center;margin-top:8px;color:#333}.header{margin-top:16px}.header.success{font-style:normal;font-weight:600;font-size:16px;line-height:22px;display:flex;align-items:center;color:#27ae60}.success-img{width:40px;height:40px}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }], showResponse: [{
                type: Input
            }], status: [{
                type: Input
            }] } });

class FormGeneratorComponent {
    set _formSchema(v) {
        if (v)
            this.init(v);
    }
    constructor(uS) {
        this.uS = uS;
        this.keyField = 'field';
        this.onSubmit = new EventEmitter();
        this._submissionResponse = new EventEmitter();
        this.submitBtnText = 'Submit';
        this.submitSuccessText = 'Save';
        this.showSubmitBtn = true;
        this.gridStyle = '1';
        this.gridMDStyle = '1';
        this.gridLGStyle = '1';
        this.gridXXLStyle = '1';
        this.optionsMap = {};
        this.cellCountryCode3s = {};
    }
    ngOnInit() { }
    init(schema) {
        for (const scheme of schema) {
            // scheme.form = this.form || scheme.form;
            scheme.id = 'id' + this.uS.genRandomID;
            if (this.showSeparateLabels)
                scheme.showSeperateLabel = this.showSeparateLabels;
            if (scheme.autoPickValueField == null &&
                (!scheme.valueField || !scheme.labelField))
                scheme.autoPickValueField = true;
            if (scheme.optionsInitFunc) {
                scheme.optionsInitFunc().subscribe((r) => {
                    scheme.options = r;
                    // this.optionsMap[scheme.field] = r;
                });
            }
            if (scheme.sub?.length) {
                // debugger
                // scheme.label="fwefwrefwr"
                scheme.label = scheme.label || 'Item';
                if (!scheme.form) {
                    const form = new FormGroup({});
                    for (const subField of scheme.sub) {
                        form.addControl(subField.field?.toString(), new FormControl());
                    }
                    scheme.form = form;
                }
                if (!this.form.controls[scheme.field?.toString()])
                    this.form.addControl(scheme.field?.toString(), new FormArray([]));
                if (scheme.initData?.length)
                    if (Array.isArray(scheme.initData) && scheme.initData?.length)
                        scheme.initData?.forEach((x) => this.addItem(scheme, x));
                    else
                        this.addItem(scheme);
            }
        }
        this.formSchema = schema
            .filter((x) => !x.sub?.length)
            .concat(schema.filter((x) => x.sub?.length));
    }
    ngAfterViewInit() {
        for (const scheme of this.formSchema) {
            if (scheme.onChangeFunc) {
                this.form.controls[scheme.field].updateValueAndValidity();
            }
        }
    }
    amendFormScheme(fieldName, formScheme) {
        const ind = this.formSchema.findIndex((x) => x.field == fieldName);
        if (ind > -1) {
            this.formSchema[ind] = {
                ...this.formSchema[ind],
                ...formScheme,
            };
            // const fs = this.formSchema[ind];
            // debugger;
            // this.formSchema[ind].options = formScheme.options;
            // debugger;
        }
    }
    onChange(field, inp) {
        if (field.onChangeFunc)
            setTimeout(() => {
                field.onChangeFunc(this.form.getRawValue(), field.field, this, inp);
            }, 600);
    }
    addItem(scheme, data) {
        const form = cloneDeep(scheme.form);
        form.reset();
        if (data)
            form.patchValue(data);
        this.form?.controls[scheme?.field?.toString()]?.controls.push(form);
    }
    removeItem(index, formName) {
        this.form?.controls[formName?.toString()]?.removeAt(index);
    }
    async submit(rc) {
        if (this.submitFunc) {
            this.loading = true;
            this.errorMessage = null;
            this.hasResponse = null;
            this.onSubmit.emit(this.form.value);
            rc.resetStatus();
            try {
                this.submissionResponse = await this.submitFunc(this.form.value, this);
                this._submissionResponse.emit(this.submissionResponse);
                rc.status = 1;
                rc.showResponse = true;
            }
            catch (error) {
                // debugger;
                this.errorMessage = error;
                // rc.status = 0;
            }
            this.hasResponse = true;
            this.loading = false;
        }
        else
            this.onSubmit.emit(this.form.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FormGeneratorComponent, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: FormGeneratorComponent, isStandalone: true, selector: "form-generator", inputs: { keyField: "keyField", submitFunc: "submitFunc", submitBtnText: "submitBtnText", submitSuccessText: "submitSuccessText", showSubmitBtn: "showSubmitBtn", isShow: "isShow", gridStyle: "gridStyle", gridMDStyle: "gridMDStyle", gridLGStyle: "gridLGStyle", gridXXLStyle: "gridXXLStyle", useLoader: "useLoader", loading: "loading", showSeparateLabels: "showSeparateLabels", hasResponse: "hasResponse", hideResponseCard: "hideResponseCard", responseHeader: "responseHeader", form: "form", submitForm: "submitForm", _formSchema: ["formSchema", "_formSchema"] }, outputs: { onSubmit: "onSubmit", _submissionResponse: "submissionResponse" }, ngImport: i0, template: "<response-card #rc [status]=\"1\" [header]=\"responseHeader\" [hidden]=\"hideResponseCard||!hasResponse ||errorMessage\">\n  <ng-content select=\"[response]\" />\n</response-card>\n<feedback-card #fc [message]=\"errorMessage\" *ngIf=\"errorMessage\" />\n<form [hidden]=\"!hideResponseCard && hasResponse && !errorMessage\">\n  <div\n    class=\"form-grid row row-cols-{{gridStyle}} row-cols-lg-{{gridLGStyle}} row-cols-md-{{gridMDStyle}} row-cols-xxl-{{gridXXLStyle}} align-items-center\">\n    <ng-container *ngFor=\"let scheme of formSchema;trackBy:uS.trackByID\">\n      <div class=\"col {{scheme.cls}} \" *ngIf=\"(!scheme.hideIfFunc || !scheme.hideIfFunc(form.value)) && !scheme.hidden\">\n        <ng-container [ngSwitch]=\"true\">\n          <!-- <ng-container *ngSwitchCase=\"scheme.type == 'tel'\">\n            <app-phone-number [form]=\"form\" [label]=\"scheme.label\" [clearOnDisable]=\"scheme.clearOnDisable\"\n              [name]=\"scheme.field\" [showLabel]=\"false\" [noFormat]=\"scheme.noFormat\"\n              [showValidation]=\"scheme.showValidation\" [autoPickValueField]=\"scheme.autoPickValueField\"\n              [showValidationIcon]=\"scheme.showValidationIcon\" [countryCode3]=\"\n                        cellCountryCode3s[scheme.getCountryCode3Key] || scheme.countryCode3\n                      \" [disabled]=\"scheme.disabled||\n                        (scheme.disabledIf\n                          | functionCaller2: form.value:scheme.field)\n                      \" #inputTag>\n            </app-phone-number>\n          </ng-container> -->\n          <ng-container *ngSwitchCase=\"scheme.type == 'autocomplete'\">\n            <app-autocomplete [form]=\"form\" [placeholder]=\"scheme.placeholder\" [label]=\"scheme.label\"\n              [clearOnDisable]=\"scheme.clearOnDisable\" [showSeperateLabel]=\"scheme.showSeperateLabel\"\n              [labelField]=\"scheme.labelField\" [noFormat]=\"scheme.noFormat\" [labelType]=\"scheme.labelType\"\n              [name]=\"scheme.field\" [optionFormatter]=\"scheme.optionFormatter\" [valueField]=\"scheme.valueField\"\n              [showEmptyOption]=\"scheme.showEmptyOption\" (mchange)=\"onChange(scheme,inputTag)\"\n              (validityChecked)=\"onChange(scheme,inputTag)\" [icon]=\"scheme.icon\"\n              [autoPickValueField]=\"scheme.autoPickValueField\" [options]=\"\n                        (scheme.optionsFunc\n                          | functionCaller2: form.value:scheme.field\n                          | async) || scheme.options||optionsMap[scheme.field|toAny]\n                      \" [hint]=\"scheme.hint\" [disabled]=\"scheme.disabled||\n                      (  scheme.disabledIf\n                          | functionCaller2: form.value:scheme.field)\n                      \" #inputTag />\n          </ng-container>\n          <ng-container *ngSwitchCase=\"scheme.sub?.length>0\">\n            <mat-accordion>\n              <ng-container *ngFor=\"let subForm of form?.controls[scheme.field|toAny]['controls'];let fi = index\">\n                <div class=\"d-flex justify-content-end\" *ngIf=\"!isShow\">\n                  <app-btn class=\" \" text=\"Remove {{scheme.label}} {{fi+1}}\" [mini]=\"true\" type=\"clear\" mclass=\"\"\n                    icon=\"delete\" (mclick)=\"removeItem(fi,scheme.field)\" />\n                </div>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    {{scheme.label}} {{fi+1}}\n                  </mat-expansion-panel-header>\n                  <form-generator [showSubmitBtn]=\"false\" [form]=\"subForm\" [formSchema]=\"scheme.sub\" />\n                </mat-expansion-panel>\n              </ng-container>\n            </mat-accordion>\n            <div class=\"mt-8 d-flex\" *ngIf=\"!isShow\">\n              <app-btn class=\" \" text=\"Add {{scheme.label}} {{form?.controls[scheme.field|toAny]['length']+1}}\"\n                [mini]=\"true\" type=\"clear\" mclass=\"text-primary\" icon=\"add\" (mclick)=\"addItem(scheme)\" />\n            </div>\n\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <app-input #formField [name]=\"scheme.field\" [form]=\"form\" [clearOnDisable]=\"scheme.clearOnDisable\"\n              [type]=\"scheme.type\" [valueField]=\"scheme.valueField\" [autoPickValueField]=\"scheme.autoPickValueField\"\n              [labelType]=\"scheme.labelType\" [checked]=\"scheme.checked\" [showValidation]=\"scheme.showValidation\"\n              [prefix]=\"scheme.prefix\" [icon]=\"scheme.icon\" [noFormat]=\"scheme.noFormat\" \n              [showValidationIcon]=\"scheme.showValidationIcon\" [startField]=\"scheme.startField\"\n              [endField]=\"scheme.endField\" [noPaste]=\"scheme.noPaste\" [showSeperateLabel]=\"scheme.showSeperateLabel\"\n              [labelField]=\"scheme.labelField\" [optionFormatter]=\"scheme.optionFormatter\"\n              (mchange)=\"onChange(scheme,formField)\" (validityChecked)=\"onChange(scheme,formField)\"\n              [options]=\"(scheme.optionsFunc|functionCaller2:form.value:scheme.field|async)||scheme.options||optionsMap[scheme.field|toAny]\"\n              [decimalPoints]=\"scheme.decimalPoints\" [hint]=\"scheme.hint\" [max]=\"scheme.max\" [min]=\"scheme.min\"\n              [placeholder]=\"scheme.placeholder\" [label]=\"scheme.label\"\n              [disabled]=\"scheme.disabled||(scheme.disabledIf|functionCaller2:form.value:scheme.field)\" />\n          </ng-container>\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"sub-btn\" *ngIf=\"showSubmitBtn\">\n    <app-btn [text]=\"submitBtnText\" group=\"submit\" actionType=\"submit\" [form]=\"submitForm||form\" [loading]=\"loading\"\n      (mclick)=\"submit(rc)\">\n    </app-btn>\n  </div>\n</form>", styles: [".sub-btn{margin-top:16px}.form-grid{--bs-gutter-y: 16px;--bs-gutter-x: 16px}\n"], dependencies: [{ kind: "component", type: i0.forwardRef(function () { return FormGeneratorComponent; }), selector: "form-generator", inputs: ["keyField", "submitFunc", "submitBtnText", "submitSuccessText", "showSubmitBtn", "isShow", "gridStyle", "gridMDStyle", "gridLGStyle", "gridXXLStyle", "useLoader", "loading", "showSeparateLabels", "hasResponse", "hideResponseCard", "responseHeader", "form", "submitForm", "formSchema"], outputs: ["onSubmit", "submissionResponse"] }, { kind: "component", type: i0.forwardRef(function () { return ResponseCardComponent; }), selector: "response-card", inputs: ["header", "showResponse", "status"] }, { kind: "directive", type: i0.forwardRef(function () { return NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return FeedbackCardComponent; }), selector: "feedback-card", inputs: ["class", "message", "status"] }, { kind: "ngmodule", type: i0.forwardRef(function () { return FormsModule; }) }, { kind: "directive", type: i0.forwardRef(function () { return i2$2.ɵNgNoValidate; }), selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i0.forwardRef(function () { return i2$2.NgControlStatusGroup; }), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(function () { return i2$2.NgForm; }), selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(function () { return NgFor; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(function () { return NgSwitch; }), selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i0.forwardRef(function () { return NgSwitchCase; }), selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: i0.forwardRef(function () { return AutocompleteComponent; }), selector: "app-autocomplete", inputs: ["validate", "filterFunc"] }, { kind: "ngmodule", type: i0.forwardRef(function () { return MatExpansionModule; }) }, { kind: "directive", type: i0.forwardRef(function () { return i3$1.MatAccordion; }), selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i0.forwardRef(function () { return i3$1.MatExpansionPanel; }), selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i0.forwardRef(function () { return i3$1.MatExpansionPanelHeader; }), selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "component", type: i0.forwardRef(function () { return BtnComponent; }), selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "directive", type: i0.forwardRef(function () { return NgSwitchDefault; }), selector: "[ngSwitchDefault]" }, { kind: "component", type: i0.forwardRef(function () { return InputBasicComponent; }), selector: "app-input", inputs: ["accept", "autocomplete", "autoPickValueField", "clearOnDisable", "cls", "colored", "checked", "contextData", "dashboardInput", "debug", "decimalPoints", "endLabel", "endLabelTooltip", "files", "form", "noFormat", "hide", "hint", "icon", "id", "inpCl", "label", "labelLink", "labelField", "labelType", "lblCl", "light", "loading", "max", "min", "mini", "multiple", "name", "optionFormatter", "optionsInitFunc", "placeholder", "prefix", "startField", "endField", "readonly", "required", "noPaste", "showEmptyOption", "showLabel", "showSeperateLabel", "showValidation", "showValidationMsg", "showValidationIcon", "small", "stacked", "suffix", "theme", "translateOptions", "valueField", "vms", "xsmall", "appearance", "validationKey", "disabled", "customSelectChangeAction", "options", "type", "mvalue"], outputs: ["mchange", "validityChecked", "mSelectOptionChange", "mContextChange"] }, { kind: "pipe", type: i0.forwardRef(function () { return AsyncPipe; }), name: "async" }, { kind: "pipe", type: i0.forwardRef(function () { return FunctionCaller2; }), name: "functionCaller2" }, { kind: "pipe", type: i0.forwardRef(function () { return ToAnyPipe; }), name: "toAny" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FormGeneratorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-generator', standalone: true, imports: [
                        ResponseCardComponent,
                        NgIf,
                        FeedbackCardComponent,
                        FormsModule,
                        NgFor,
                        NgSwitch,
                        NgSwitchCase,
                        AutocompleteComponent,
                        MatExpansionModule,
                        BtnComponent,
                        forwardRef(() => FormGeneratorComponent),
                        NgSwitchDefault,
                        InputBasicComponent,
                        AsyncPipe,
                        FunctionCaller2,
                        ToAnyPipe,
                    ], template: "<response-card #rc [status]=\"1\" [header]=\"responseHeader\" [hidden]=\"hideResponseCard||!hasResponse ||errorMessage\">\n  <ng-content select=\"[response]\" />\n</response-card>\n<feedback-card #fc [message]=\"errorMessage\" *ngIf=\"errorMessage\" />\n<form [hidden]=\"!hideResponseCard && hasResponse && !errorMessage\">\n  <div\n    class=\"form-grid row row-cols-{{gridStyle}} row-cols-lg-{{gridLGStyle}} row-cols-md-{{gridMDStyle}} row-cols-xxl-{{gridXXLStyle}} align-items-center\">\n    <ng-container *ngFor=\"let scheme of formSchema;trackBy:uS.trackByID\">\n      <div class=\"col {{scheme.cls}} \" *ngIf=\"(!scheme.hideIfFunc || !scheme.hideIfFunc(form.value)) && !scheme.hidden\">\n        <ng-container [ngSwitch]=\"true\">\n          <!-- <ng-container *ngSwitchCase=\"scheme.type == 'tel'\">\n            <app-phone-number [form]=\"form\" [label]=\"scheme.label\" [clearOnDisable]=\"scheme.clearOnDisable\"\n              [name]=\"scheme.field\" [showLabel]=\"false\" [noFormat]=\"scheme.noFormat\"\n              [showValidation]=\"scheme.showValidation\" [autoPickValueField]=\"scheme.autoPickValueField\"\n              [showValidationIcon]=\"scheme.showValidationIcon\" [countryCode3]=\"\n                        cellCountryCode3s[scheme.getCountryCode3Key] || scheme.countryCode3\n                      \" [disabled]=\"scheme.disabled||\n                        (scheme.disabledIf\n                          | functionCaller2: form.value:scheme.field)\n                      \" #inputTag>\n            </app-phone-number>\n          </ng-container> -->\n          <ng-container *ngSwitchCase=\"scheme.type == 'autocomplete'\">\n            <app-autocomplete [form]=\"form\" [placeholder]=\"scheme.placeholder\" [label]=\"scheme.label\"\n              [clearOnDisable]=\"scheme.clearOnDisable\" [showSeperateLabel]=\"scheme.showSeperateLabel\"\n              [labelField]=\"scheme.labelField\" [noFormat]=\"scheme.noFormat\" [labelType]=\"scheme.labelType\"\n              [name]=\"scheme.field\" [optionFormatter]=\"scheme.optionFormatter\" [valueField]=\"scheme.valueField\"\n              [showEmptyOption]=\"scheme.showEmptyOption\" (mchange)=\"onChange(scheme,inputTag)\"\n              (validityChecked)=\"onChange(scheme,inputTag)\" [icon]=\"scheme.icon\"\n              [autoPickValueField]=\"scheme.autoPickValueField\" [options]=\"\n                        (scheme.optionsFunc\n                          | functionCaller2: form.value:scheme.field\n                          | async) || scheme.options||optionsMap[scheme.field|toAny]\n                      \" [hint]=\"scheme.hint\" [disabled]=\"scheme.disabled||\n                      (  scheme.disabledIf\n                          | functionCaller2: form.value:scheme.field)\n                      \" #inputTag />\n          </ng-container>\n          <ng-container *ngSwitchCase=\"scheme.sub?.length>0\">\n            <mat-accordion>\n              <ng-container *ngFor=\"let subForm of form?.controls[scheme.field|toAny]['controls'];let fi = index\">\n                <div class=\"d-flex justify-content-end\" *ngIf=\"!isShow\">\n                  <app-btn class=\" \" text=\"Remove {{scheme.label}} {{fi+1}}\" [mini]=\"true\" type=\"clear\" mclass=\"\"\n                    icon=\"delete\" (mclick)=\"removeItem(fi,scheme.field)\" />\n                </div>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    {{scheme.label}} {{fi+1}}\n                  </mat-expansion-panel-header>\n                  <form-generator [showSubmitBtn]=\"false\" [form]=\"subForm\" [formSchema]=\"scheme.sub\" />\n                </mat-expansion-panel>\n              </ng-container>\n            </mat-accordion>\n            <div class=\"mt-8 d-flex\" *ngIf=\"!isShow\">\n              <app-btn class=\" \" text=\"Add {{scheme.label}} {{form?.controls[scheme.field|toAny]['length']+1}}\"\n                [mini]=\"true\" type=\"clear\" mclass=\"text-primary\" icon=\"add\" (mclick)=\"addItem(scheme)\" />\n            </div>\n\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <app-input #formField [name]=\"scheme.field\" [form]=\"form\" [clearOnDisable]=\"scheme.clearOnDisable\"\n              [type]=\"scheme.type\" [valueField]=\"scheme.valueField\" [autoPickValueField]=\"scheme.autoPickValueField\"\n              [labelType]=\"scheme.labelType\" [checked]=\"scheme.checked\" [showValidation]=\"scheme.showValidation\"\n              [prefix]=\"scheme.prefix\" [icon]=\"scheme.icon\" [noFormat]=\"scheme.noFormat\" \n              [showValidationIcon]=\"scheme.showValidationIcon\" [startField]=\"scheme.startField\"\n              [endField]=\"scheme.endField\" [noPaste]=\"scheme.noPaste\" [showSeperateLabel]=\"scheme.showSeperateLabel\"\n              [labelField]=\"scheme.labelField\" [optionFormatter]=\"scheme.optionFormatter\"\n              (mchange)=\"onChange(scheme,formField)\" (validityChecked)=\"onChange(scheme,formField)\"\n              [options]=\"(scheme.optionsFunc|functionCaller2:form.value:scheme.field|async)||scheme.options||optionsMap[scheme.field|toAny]\"\n              [decimalPoints]=\"scheme.decimalPoints\" [hint]=\"scheme.hint\" [max]=\"scheme.max\" [min]=\"scheme.min\"\n              [placeholder]=\"scheme.placeholder\" [label]=\"scheme.label\"\n              [disabled]=\"scheme.disabled||(scheme.disabledIf|functionCaller2:form.value:scheme.field)\" />\n          </ng-container>\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"sub-btn\" *ngIf=\"showSubmitBtn\">\n    <app-btn [text]=\"submitBtnText\" group=\"submit\" actionType=\"submit\" [form]=\"submitForm||form\" [loading]=\"loading\"\n      (mclick)=\"submit(rc)\">\n    </app-btn>\n  </div>\n</form>", styles: [".sub-btn{margin-top:16px}.form-grid{--bs-gutter-y: 16px;--bs-gutter-x: 16px}\n"] }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; }, propDecorators: { keyField: [{
                type: Input
            }], onSubmit: [{
                type: Output
            }], _submissionResponse: [{
                type: Output,
                args: ['submissionResponse']
            }], submitFunc: [{
                type: Input
            }], submitBtnText: [{
                type: Input
            }], submitSuccessText: [{
                type: Input
            }], showSubmitBtn: [{
                type: Input
            }], isShow: [{
                type: Input
            }], gridStyle: [{
                type: Input
            }], gridMDStyle: [{
                type: Input
            }], gridLGStyle: [{
                type: Input
            }], gridXXLStyle: [{
                type: Input
            }], useLoader: [{
                type: Input
            }], loading: [{
                type: Input
            }], showSeparateLabels: [{
                type: Input
            }], hasResponse: [{
                type: Input
            }], hideResponseCard: [{
                type: Input
            }], responseHeader: [{
                type: Input
            }], form: [{
                type: Input
            }], submitForm: [{
                type: Input
            }], _formSchema: [{
                type: Input,
                args: ['formSchema']
            }] } });

class FormGeneratorTdComponent extends FormGeneratorComponent {
    constructor() {
        super(...arguments);
        this._valuesChange = new EventEmitter();
    }
    onChange(field, inp) {
        super.onChange(field, inp);
        this._valuesChange.emit({ form: this.formSchema });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FormGeneratorTdComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: FormGeneratorTdComponent, isStandalone: true, selector: "form-generator-td", inputs: { header: "header", showDivider: "showDivider", subTitle: "subTitle" }, outputs: { _valuesChange: "valuesChange" }, usesInheritance: true, ngImport: i0, template: "<response-card #rc [status]=\"1\" [header]=\"responseHeader\" [hidden]=\"hideResponseCard||!hasResponse ||errorMessage\">\n    <ng-content select=\"[response]\"></ng-content>\n</response-card>\n<feedback-card #fc [message]=\"errorMessage\" *ngIf=\"errorMessage\"></feedback-card>\n<form [hidden]=\"!hideResponseCard && hasResponse && !errorMessage\">\n    <hr class=\"divider \" *ngIf=\"showDivider\">\n    <div class=\"title mt-16\" [hidden]=\"!header\">\n        {{header}}\n    </div>\n    <div class=\"sub-title\" [hidden]=\"!subTitle\">{{subTitle}}\n    </div>\n    <div [ngClass]=\"{'mt-16':header||subTitle}\"\n        class=\" form-grid row row-cols-{{gridStyle}} row-cols-md-{{gridMDStyle}} row-cols-xxl-{{gridXXLStyle}} align-items-center\">\n        <ng-container *ngFor=\"let scheme of formSchema;trackBy:uS.trackByID\">\n            <div class=\"col {{scheme.cls}} \" *ngIf=\"!scheme.hideIfFunc || !scheme.hideIfFunc(formSchema)\">\n                <app-input-td-rf #formField [(model)]=\"scheme.value\" [name]=\"scheme.field\"\n                    [clearOnDisable]=\"scheme.clearOnDisable\" [type]=\"scheme.type\" [valueField]=\"scheme.valueField\"\n                    [autoPickValueField]=\"scheme.autoPickValueField\" [labelType]=\"scheme.labelType\"\n                    [checked]=\"scheme.checked\" [showValidation]=\"scheme.showValidation\" [icon]=\"scheme.icon\"\n                    [noFormat]=\"scheme.noFormat\" [showValidationIcon]=\"scheme.showValidationIcon\"\n                    [labelField]=\"scheme.labelField\" [optionFormatter]=\"scheme.optionFormatter\"\n                    (mchange)=\"onChange(scheme,formField)\"\n                    [options]=\"(scheme.optionsFunc|functionCaller2:formSchema:scheme.field|async)||scheme.options||optionsMap[scheme.field|toAny]\"\n                    [decimalPoints]=\"scheme.decimalPoints\" [hint]=\"scheme.hint\" [max]=\"scheme.max\" [min]=\"scheme.min\"\n                    [placeholder]=\"scheme.placeholder\" [label]=\"scheme.label\"\n                    [disabled]=\"scheme.disabled||(scheme.disabledIf|functionCaller2:formSchema:scheme.field)\">\n                </app-input-td-rf>\n            </div>\n        </ng-container>\n    </div>\n    <div class=\"sub-btn\" *ngIf=\"showSubmitBtn\">\n        <app-btn [text]=\"submitBtnText\" group=\"submit\" [form]=\"submitForm||form\" [loading]=\"loading\"\n            (mclick)=\"submit(rc)\">\n        </app-btn>\n    </div>\n</form>", styles: [".title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;color:#333}.sub-title{font-style:normal;font-weight:400;font-size:14px;line-height:18px;color:#828282}.option-title{font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;color:#333}.option-desc{font-style:normal;font-weight:400;font-size:14px;line-height:18px;display:flex;align-items:center;color:#828282}\n"], dependencies: [{ kind: "component", type: ResponseCardComponent, selector: "response-card", inputs: ["header", "showResponse", "status"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: FeedbackCardComponent, selector: "feedback-card", inputs: ["class", "message", "status"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: InputTD_RFComponent, selector: "app-input-td-rf", inputs: ["validators", "asyncValidators", "form", "model", "disabled"], outputs: ["modelChange"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: FunctionCaller2, name: "functionCaller2" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: FormGeneratorTdComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-generator-td', standalone: true, imports: [
                        ResponseCardComponent,
                        NgIf,
                        FeedbackCardComponent,
                        FormsModule,
                        NgClass,
                        NgFor,
                        InputTD_RFComponent,
                        BtnComponent,
                        AsyncPipe,
                        FunctionCaller2,
                        ToAnyPipe,
                    ], template: "<response-card #rc [status]=\"1\" [header]=\"responseHeader\" [hidden]=\"hideResponseCard||!hasResponse ||errorMessage\">\n    <ng-content select=\"[response]\"></ng-content>\n</response-card>\n<feedback-card #fc [message]=\"errorMessage\" *ngIf=\"errorMessage\"></feedback-card>\n<form [hidden]=\"!hideResponseCard && hasResponse && !errorMessage\">\n    <hr class=\"divider \" *ngIf=\"showDivider\">\n    <div class=\"title mt-16\" [hidden]=\"!header\">\n        {{header}}\n    </div>\n    <div class=\"sub-title\" [hidden]=\"!subTitle\">{{subTitle}}\n    </div>\n    <div [ngClass]=\"{'mt-16':header||subTitle}\"\n        class=\" form-grid row row-cols-{{gridStyle}} row-cols-md-{{gridMDStyle}} row-cols-xxl-{{gridXXLStyle}} align-items-center\">\n        <ng-container *ngFor=\"let scheme of formSchema;trackBy:uS.trackByID\">\n            <div class=\"col {{scheme.cls}} \" *ngIf=\"!scheme.hideIfFunc || !scheme.hideIfFunc(formSchema)\">\n                <app-input-td-rf #formField [(model)]=\"scheme.value\" [name]=\"scheme.field\"\n                    [clearOnDisable]=\"scheme.clearOnDisable\" [type]=\"scheme.type\" [valueField]=\"scheme.valueField\"\n                    [autoPickValueField]=\"scheme.autoPickValueField\" [labelType]=\"scheme.labelType\"\n                    [checked]=\"scheme.checked\" [showValidation]=\"scheme.showValidation\" [icon]=\"scheme.icon\"\n                    [noFormat]=\"scheme.noFormat\" [showValidationIcon]=\"scheme.showValidationIcon\"\n                    [labelField]=\"scheme.labelField\" [optionFormatter]=\"scheme.optionFormatter\"\n                    (mchange)=\"onChange(scheme,formField)\"\n                    [options]=\"(scheme.optionsFunc|functionCaller2:formSchema:scheme.field|async)||scheme.options||optionsMap[scheme.field|toAny]\"\n                    [decimalPoints]=\"scheme.decimalPoints\" [hint]=\"scheme.hint\" [max]=\"scheme.max\" [min]=\"scheme.min\"\n                    [placeholder]=\"scheme.placeholder\" [label]=\"scheme.label\"\n                    [disabled]=\"scheme.disabled||(scheme.disabledIf|functionCaller2:formSchema:scheme.field)\">\n                </app-input-td-rf>\n            </div>\n        </ng-container>\n    </div>\n    <div class=\"sub-btn\" *ngIf=\"showSubmitBtn\">\n        <app-btn [text]=\"submitBtnText\" group=\"submit\" [form]=\"submitForm||form\" [loading]=\"loading\"\n            (mclick)=\"submit(rc)\">\n        </app-btn>\n    </div>\n</form>", styles: [".title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;color:#333}.sub-title{font-style:normal;font-weight:400;font-size:14px;line-height:18px;color:#828282}.option-title{font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;color:#333}.option-desc{font-style:normal;font-weight:400;font-size:14px;line-height:18px;display:flex;align-items:center;color:#828282}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }], showDivider: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], _valuesChange: [{
                type: Output,
                args: ['valuesChange']
            }] } });

/**
 * Template to show when there is a data in a table
 */
class NoListComponent {
    constructor() {
        this.addButtonClicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NoListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NoListComponent, isStandalone: true, selector: "no-list", inputs: { header: "header", subheader: "subheader", addBtnText: "addBtnText", hideAddBtn: "hideAddBtn" }, outputs: { addButtonClicked: "addButtonClicked" }, ngImport: i0, template: "<div class=\"h-100 center text-center no-list\" >\n    <div class=\"\">\n        <div class=\"title\">\n            {{header}}\n        </div>\n        <div class=\"sub-title mx-auto\">\n            {{subheader}}\n        </div>\n        <app-btn [text]=\"addBtnText\" icon=\"add\" *ngIf=\"!hideAddBtn\" mclass=\"w-auto\" (mclick)=\"addButtonClicked.emit(true)\"></app-btn>\n    </div>\n</div>", styles: [".no-list{min-height:500px}.no-list .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:var(--primary)}.no-list .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;margin-top:8px;margin-bottom:16px;color:#828282;width:206px}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NoListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'no-list', standalone: true, imports: [NgIf, BtnComponent], template: "<div class=\"h-100 center text-center no-list\" >\n    <div class=\"\">\n        <div class=\"title\">\n            {{header}}\n        </div>\n        <div class=\"sub-title mx-auto\">\n            {{subheader}}\n        </div>\n        <app-btn [text]=\"addBtnText\" icon=\"add\" *ngIf=\"!hideAddBtn\" mclass=\"w-auto\" (mclick)=\"addButtonClicked.emit(true)\"></app-btn>\n    </div>\n</div>", styles: [".no-list{min-height:500px}.no-list .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:var(--primary)}.no-list .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;margin-top:8px;margin-bottom:16px;color:#828282;width:206px}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }], subheader: [{
                type: Input
            }], addBtnText: [{
                type: Input
            }], hideAddBtn: [{
                type: Input
            }], addButtonClicked: [{
                type: Output
            }] } });

class GetColFormattedPipe {
    transform(row, col) {
        return Promise.resolve((col.formatterRow
            ? col.formatterRow(row)
            : col.formatter
                ? col.formatter(row[col.f])
                : row[col.f]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetColFormattedPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GetColFormattedPipe, isStandalone: true, name: "getColFormatted" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetColFormattedPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getColFormatted',
                    standalone: true,
                }]
        }] });
class GetRawFieldsPipe {
    transform(arr, showOptions = false, useSelection = false, placeSelectionAtRight = false) {
        const fields = arr.map((r) => r.f);
        showOptions ? fields.push('option') : null;
        const fieldsWithSelect = placeSelectionAtRight
            ? [...fields, useSelection ? 'mselect' : null]
            : [useSelection ? 'mselect' : null, ...fields];
        return fieldsWithSelect.filter((x) => x);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetRawFieldsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GetRawFieldsPipe, isStandalone: true, name: "getRawFields" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetRawFieldsPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getRawFields',
                    standalone: true,
                }]
        }] });
class GetHeadersPipe {
    transform(arr) {
        return arr.map((r) => r.t);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetHeadersPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: GetHeadersPipe, isStandalone: true, name: "getHeaders" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GetHeadersPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getHeaders',
                    standalone: true,
                }]
        }] });
class TableToStringPipe {
    async transform(arr, obj) {
        let str = '';
        for (const col of arr) {
            let transText = await this.cfS.transform(obj, col);
            str += `${col.t}:  ${transText}\n`;
        }
        return str;
    }
    constructor(cfS) {
        this.cfS = cfS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TableToStringPipe, deps: [{ token: GetColFormattedPipe }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: TableToStringPipe, isStandalone: true, name: "tableToString" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TableToStringPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'tableToString',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: GetColFormattedPipe }]; } });
const pipes = [
    GetColFormattedPipe,
    GetHeadersPipe,
    GetRawFieldsPipe,
    TableToStringPipe,
];
class TablePipesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, imports: [CommonModule, GetColFormattedPipe, GetHeadersPipe, GetRawFieldsPipe, TableToStringPipe], exports: [GetColFormattedPipe, GetHeadersPipe, GetRawFieldsPipe, TableToStringPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, providers: [GetColFormattedPipe], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePipesModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: pipes,
                    imports: [CommonModule, ...pipes],
                    providers: [GetColFormattedPipe],
                }]
        }] });

class ResponsivenessDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.desktopClass));
        if (this.mobileClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.mobileClass));
        if (this.hideMobile)
            this.elRef.nativeElement.hidden = true;
        else if (this.hideDesktop)
            this.elRef.nativeElement.hidden = false;
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.desktopClass));
        if (this.mobileClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.mobileClass));
        if (this.hideMobile)
            this.elRef.nativeElement.hidden = false;
        else if (this.hideDesktop)
            this.elRef.nativeElement.hidden = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResponsivenessDirective, deps: [{ token: i0.ElementRef }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: ResponsivenessDirective, isStandalone: true, selector: "[mresponsiveness]", inputs: { mobileClass: "mobileClass", desktopClass: "desktopClass", hideMobile: "hideMobile", hideDesktop: "hideDesktop" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResponsivenessDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mresponsiveness]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: UtilityService }]; }, propDecorators: { mobileClass: [{
                type: Input
            }], desktopClass: [{
                type: Input
            }], hideMobile: [{
                type: Input
            }], hideDesktop: [{
                type: Input
            }] } });
class mobileClassDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        if (this.mobileClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.mobileClass));
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        if (this.mobileClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.mobileClass));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: mobileClassDirective, deps: [{ token: i0.ElementRef }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: mobileClassDirective, isStandalone: true, selector: "[mobileClass]", inputs: { mobileClass: "mobileClass" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: mobileClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mobileClass]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: UtilityService }]; }, propDecorators: { mobileClass: [{
                type: Input
            }] } });
class desktopClassDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.remove(...extractTokens(this.desktopClass));
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        if (this.desktopClass)
            this.elRef.nativeElement.classList.add(...extractTokens(this.desktopClass));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: desktopClassDirective, deps: [{ token: i0.ElementRef }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: desktopClassDirective, isStandalone: true, selector: "[desktopClass]", inputs: { desktopClass: "desktopClass" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: desktopClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[desktopClass]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: UtilityService }]; }, propDecorators: { desktopClass: [{
                type: Input
            }] } });
class hideMobileDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        this.elRef.nativeElement.hidden = true;
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        this.elRef.nativeElement.hidden = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideMobileDirective, deps: [{ token: i0.ElementRef }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: hideMobileDirective, isStandalone: true, selector: "[hideMobile]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideMobileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideMobile]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: UtilityService }]; } });
class hideDesktopDirective {
    constructor(elRef, uS) {
        this.elRef = elRef;
        this.uS = uS;
    }
    ngAfterViewInit() {
        if (this.uS.isMobile)
            this.handleMobile();
        else
            this.handleDesktop();
        this.sub = this.uS.mobileQueryChanged.subscribe((isMobile) => {
            // debugger;
            // debugger;
            if (isMobile) {
                this.handleMobile();
            }
            else {
                this.handleDesktop();
            }
            // console.log(ev,'media changed');
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    /**
     * If viewport is mobile
     */
    handleMobile() {
        this.elRef.nativeElement.hidden = false;
    }
    /**
     * If viewport is desktop
     */
    handleDesktop() {
        this.elRef.nativeElement.hidden = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideDesktopDirective, deps: [{ token: i0.ElementRef }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: hideDesktopDirective, isStandalone: true, selector: "[hideDesktop]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: hideDesktopDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideDesktop]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: UtilityService }]; } });
function extractTokens(tokenStr) {
    return tokenStr
        ?.trim()
        .split(' ')
        .filter((x) => !!x);
}

class ImageLoaderDirective {
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

class DragDropFileUploadDirective {
    constructor() {
        this.fileDropped = new EventEmitter();
        this.background = '#ffffff';
    }
    // Dragover Event
    dragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#e2eefd';
    }
    // Dragleave Event
    dragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#ffffff';
    }
    // Drop Event
    drop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#ffffff';
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(Array.from(files));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: DragDropFileUploadDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: DragDropFileUploadDirective, isStandalone: true, selector: "[libDragDropFileUpload]", outputs: { fileDropped: "fileDropped" }, host: { listeners: { "dragover": "dragOver($event)", "dragleave": "dragLeave($event)", "drop": "drop($event)" }, properties: { "style.background-color": "this.background" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: DragDropFileUploadDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[libDragDropFileUpload]',
                    standalone: true,
                }]
        }], propDecorators: { fileDropped: [{
                type: Output
            }], background: [{
                type: HostBinding,
                args: ['style.background-color']
            }], dragOver: [{
                type: HostListener,
                args: ['dragover', ['$event']]
            }], dragLeave: [{
                type: HostListener,
                args: ['dragleave', ['$event']]
            }], drop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }] } });

class MrouterLinkirective {
    set _mrouterLink(v) {
        this.mrouterLink = v;
        // if (v) debugger;
        this.setRouter();
    }
    constructor(el, route, router, uS) {
        this.el = el;
        this.route = route;
        this.router = router;
        this.uS = uS;
    }
    ngAfterViewInit() {
        this.setRouter();
    }
    setRouter() {
        if (this.mrouterLink && this.el.nativeElement) {
            this.el.nativeElement.classList.remove('notLink');
            this.el.nativeElement.classList.add('link');
            // debugger;
            if (this.isEmail) {
                this.el.nativeElement.href = 'mailto:' + this.mrouterLink;
            }
            else if (this.isPhone) {
                this.el.nativeElement.href = 'tel:' + this.mrouterLink;
            }
            else {
                // debugger;
                const queryParams = this.mqueryParams || {}, routeLevels = this.mrouterLink.split('../').length - 1, currentLocationParts = location.pathname.split('/');
                let route = '', urlParts = this.mrouterLink.split('?');
                route = urlParts[0];
                if (urlParts.length > 1) {
                    const kvps = urlParts[1].split('&');
                    for (const kvp of kvps) {
                        const kvpSplit = kvp.split('=');
                        queryParams[kvpSplit[0]] = kvpSplit[1];
                    }
                }
                currentLocationParts.splice(routeLevels * -1);
                this.el.nativeElement.href =
                    currentLocationParts.join('/') +
                        '/' +
                        route
                            .split('../')
                            .filter((x) => x)
                            .join('/') +
                        '?' +
                        this.stringifyQueryParams(queryParams);
                this.el.nativeElement.onclick = (e) => {
                    e.preventDefault();
                    // debugger;
                    this.router.navigate([route], {
                        relativeTo: this.uS.environment.activatedRoute || this.route,
                        queryParams,
                    });
                };
            }
        }
        else {
            this.el.nativeElement.classList.add('notLink');
        }
    }
    stringifyQueryParams(q) {
        return Object.keys(q)
            .map((key) => `${key}=${q[key]}`)
            .join('&');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MrouterLinkirective, deps: [{ token: i0.ElementRef }, { token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.2", type: MrouterLinkirective, isStandalone: true, selector: "[mrouterLink]", inputs: { _mrouterLink: ["mrouterLink", "_mrouterLink"], mrouterLinkActivatedRoute: "mrouterLinkActivatedRoute", mqueryParams: "mqueryParams", isPhone: "isPhone", isEmail: "isEmail" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MrouterLinkirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mrouterLink]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: UtilityService }]; }, propDecorators: { _mrouterLink: [{
                type: Input,
                args: ['mrouterLink']
            }], mrouterLinkActivatedRoute: [{
                type: Input
            }], mqueryParams: [{
                type: Input
            }], isPhone: [{
                type: Input
            }], isEmail: [{
                type: Input
            }] } });

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
class DirectivesModule {
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

class BtnModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: BtnModule, imports: [BtnComponent,
            BtnLgComponent,
            BtnLinkComponent], exports: [BtnComponent, BtnLgComponent, BtnLinkComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnModule, imports: [BtnComponent,
            BtnLgComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: BtnModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        BtnComponent,
                        BtnLgComponent,
                        BtnLinkComponent,
                    ],
                    exports: [BtnComponent, BtnLgComponent, BtnLinkComponent],
                }]
        }] });

class OtpInputComponent extends InputBasicComponent {
    constructor() {
        super(...arguments);
        this.subForm = new FormArray([]);
    }
    set _otpLength(v) {
        this.otpLength = v;
        this.genForm(v);
    }
    ngOnInit() {
        super.ngOnInit();
        this.control.valueChanges.pipe().subscribe((r) => {
            if (!r)
                this.subForm.reset();
        });
        this.subForm.valueChanges.pipe(debounceTime$1(1000)).subscribe((r) => {
            if (r.join(''))
                this.control?.patchValue(r.join(''));
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => {
            for (const elRef of this.otpInputRef) {
                elRef.nativeElement.onpaste = (e) => {
                    let pastedText = undefined;
                    if (window['clipboardData'] && window['clipboardData'].getData) {
                        // IE
                        pastedText = window['clipboardData'].getData('Text');
                    }
                    else if (e.clipboardData && e.clipboardData.getData) {
                        pastedText = e.clipboardData.getData('text/plain');
                    }
                    this.subForm.controls.forEach((x, i) => {
                        x.patchValue(pastedText[i] || undefined);
                    }); // Process and handle text...
                    return false; // Prevent the default handler from running.
                };
            }
        }, 1000);
    }
    genForm(otpLength = this.otpLength) {
        for (let index = 0; index < otpLength; index++) {
            const form = new FormControl(null, [
                Validators.required,
                Validators.maxLength(1),
            ]);
            form.valueChanges.subscribe((r) => {
                if (this.type == 'number' && r && !/^\d+$/.test(r))
                    form.reset();
                else if (r?.length == 1) {
                    document.getElementById(this.id + (index + 1))?.focus();
                }
            });
            this.subForm.insert(index, form);
        }
    }
    onChange(e, form) {
        // console.log(e);
        form.patchValue(e.data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OtpInputComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: OtpInputComponent, isStandalone: true, selector: "app-otp-input", inputs: { _otpLength: ["otpLength", "_otpLength"] }, viewQueries: [{ propertyName: "otpInputRef", predicate: ["otpInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"d-inline-flex  justify-content-center  \" >\n    <ng-container *ngFor=\"let f of subForm.controls; let i = index\">\n        <div class=\" otpi\">\n            <input #otpInput id=\"{{id}}{{i}}\" [ngClass]=\"{hasValue:f.value}\"  (input)=\"onChange($event,f)\" [formControl]=\"f\">\n        </div>\n    </ng-container>\n</div>", styles: [".otpi{margin:0 4px}.otpi input{background:#ffffff;height:64px;width:64px;font-size:16px;text-align:center;border:1px solid #e0e0e0;border-radius:8px}.otpi input.hasValue{color:var(--primary);border:1px solid var(--primary)}.otpi input:focus-visible{outline:none!important}@media screen and (max-width: 1024px){.otpi input{height:50px;width:50px;font-size:14px}}\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OtpInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-otp-input', standalone: true, imports: [
                        NgFor,
                        FormsModule,
                        NgClass,
                        ReactiveFormsModule,
                    ], template: "<div class=\"d-inline-flex  justify-content-center  \" >\n    <ng-container *ngFor=\"let f of subForm.controls; let i = index\">\n        <div class=\" otpi\">\n            <input #otpInput id=\"{{id}}{{i}}\" [ngClass]=\"{hasValue:f.value}\"  (input)=\"onChange($event,f)\" [formControl]=\"f\">\n        </div>\n    </ng-container>\n</div>", styles: [".otpi{margin:0 4px}.otpi input{background:#ffffff;height:64px;width:64px;font-size:16px;text-align:center;border:1px solid #e0e0e0;border-radius:8px}.otpi input.hasValue{color:var(--primary);border:1px solid var(--primary)}.otpi input:focus-visible{outline:none!important}@media screen and (max-width: 1024px){.otpi input{height:50px;width:50px;font-size:14px}}\n"] }]
        }], propDecorators: { _otpLength: [{
                type: Input,
                args: ['otpLength']
            }], otpInputRef: [{
                type: ViewChildren,
                args: ['otpInput']
            }] } });

class InputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: InputModule, imports: [BtnModule,
            ErrorMessagePipe,
            ErrorMessagesPipe,
            FormsModule,
            InputBasicComponent,
            InputPipesModule,
            InputTD_RFComponent,
            MatDatepickerModule,
            MatInputModule,
            ErrorMessagePipe,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            OtpInputComponent,
            ReactiveFormsModule,
            ValidationMessageComponent], exports: [BtnModule,
            ErrorMessagePipe,
            ErrorMessagesPipe,
            FormsModule,
            InputBasicComponent,
            InputPipesModule,
            InputTD_RFComponent,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            OtpInputComponent,
            ReactiveFormsModule,
            ValidationMessageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputModule, providers: [ErrorMessagePipe], imports: [BtnModule,
            FormsModule,
            InputBasicComponent,
            InputPipesModule,
            InputTD_RFComponent,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            OtpInputComponent,
            ReactiveFormsModule, BtnModule,
            FormsModule,
            InputPipesModule,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        BtnModule,
                        ErrorMessagePipe,
                        ErrorMessagesPipe,
                        FormsModule,
                        InputBasicComponent,
                        InputPipesModule,
                        InputTD_RFComponent,
                        MatDatepickerModule,
                        MatInputModule,
                        ErrorMessagePipe,
                        MatNativeDateModule,
                        MatSelectModule,
                        MatSlideToggleModule,
                        MatTooltipModule,
                        MatTooltipModule,
                        OtpInputComponent,
                        ReactiveFormsModule,
                        ValidationMessageComponent,
                    ],
                    exports: [
                        BtnModule,
                        ErrorMessagePipe,
                        ErrorMessagesPipe,
                        FormsModule,
                        InputBasicComponent,
                        InputPipesModule,
                        InputTD_RFComponent,
                        MatDatepickerModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatSelectModule,
                        MatSlideToggleModule,
                        MatTooltipModule,
                        MatTooltipModule,
                        OtpInputComponent,
                        ReactiveFormsModule,
                        ValidationMessageComponent,
                    ],
                    providers: [ErrorMessagePipe],
                }]
        }] });

class SvgIconModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: SvgIconModule, imports: [CommonModule,
            SvgIconComponent], exports: [SvgIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SvgIconModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        SvgIconComponent
                    ],
                    exports: [
                        SvgIconComponent
                    ]
                }]
        }] });

class PrecentageTrendComponent {
    set _trend(v) {
        // debugger
        if (v == null || v == undefined) {
            this.noData = true;
            return;
        }
        this.noData = false;
        this.trend = +v;
        this.cls = this.trend > 0 ? 'success' : this.trend < 0 ? 'danger' : '';
        // this.cls =  'danger'   
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PrecentageTrendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: PrecentageTrendComponent, isStandalone: true, selector: "precentage-trend", inputs: { _trend: ["trend", "_trend"], message: "message" }, ngImport: i0, template: "<span class=\"trend\">\n    <ng-container *ngIf=\"!noData; else elseTemplate\">\n        <span class=\"{{cls}}\">\n            <svg-icon icon=\"up\" *ngIf=\"cls\"></svg-icon> {{trend}}%\n        </span><span class=\"message\">{{message}}</span>\n    </ng-container>\n    <ng-template #elseTemplate>\n        <span>No data</span>\n    </ng-template>\n</span>", styles: [".trend{font-size:14px}.trend .danger{color:#eb5757}.trend .danger ::ng-deep svg{transform:rotate(180deg)}.trend .success{color:#27ae60}.trend .message{font-weight:500}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: SvgIconModule }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "ngmodule", type: InputModule }, { kind: "ngmodule", type: DirectivesModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PrecentageTrendComponent, decorators: [{
            type: Component,
            args: [{ selector: 'precentage-trend', standalone: true, imports: [CommonModule, SvgIconModule, InputModule, DirectivesModule], template: "<span class=\"trend\">\n    <ng-container *ngIf=\"!noData; else elseTemplate\">\n        <span class=\"{{cls}}\">\n            <svg-icon icon=\"up\" *ngIf=\"cls\"></svg-icon> {{trend}}%\n        </span><span class=\"message\">{{message}}</span>\n    </ng-container>\n    <ng-template #elseTemplate>\n        <span>No data</span>\n    </ng-template>\n</span>", styles: [".trend{font-size:14px}.trend .danger{color:#eb5757}.trend .danger ::ng-deep svg{transform:rotate(180deg)}.trend .success{color:#27ae60}.trend .message{font-weight:500}\n"] }]
        }], propDecorators: { _trend: [{
                type: Input,
                args: ['trend']
            }], message: [{
                type: Input
            }] } });

class TablePlainComponent {
    set _displayedColumns(value) {
        if (this.uS.isMobile)
            value.forEach((x) => (x.isSticky = false));
        this.displayedColumns = value;
    }
    set _data(v) {
        console.log(v);
        this.dataSource = new MatTableDataSource(v || []);
        // this.showPager=v?.length>this.pageSize
        if (this.showPager) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
        this.selection?.clear();
        this.resultsLength = v?.length;
        this.mutableList = v;
    }
    constructor(uS) {
        this.uS = uS;
        this.curvy = false;
        this.formatColumnHeaders = true;
        this.idField = 'id';
        this.noItemTxt = 'There are no items';
        this.nowrap = true;
        this.orderDirection = 'asc';
        this.pageSize = this.uS.isMobile ? 5 : 10;
        this.pageSizeOptions = [5, 10, 15, 20, 50, 100, 200];
        this.placeSelectionAtRight = false; // support customizing the position of the select checkboxes.
        this.resultsLength = 0;
        this.showExport = false;
        this.showFilter = false;
        this.showPager = false;
        this.showRowPointer = false;
        this.smallerFonts = false;
        this.useSelection = false;
        this._rowClick = new EventEmitter();
        this._view = new EventEmitter();
        this.listMutated = new EventEmitter();
        this.selectionChanged = new EventEmitter();
        this.form = new FormGroup({ field: new FormControl(), value: new FormControl() });
        this.selection = new SelectionModel(true, []);
        this.emitCheckbox = new EventEmitter();
        this.pageSizeIncrementor = 10;
        this.optionLabeller = (option, row) => option?.labelFormatter ? option.labelFormatter(row) : option.t;
    }
    ngOnInit() {
        this.selection.changed.subscribe((r) => {
            this.selectionChanged.emit(r);
        });
    }
    ngAfterViewInit() {
        if (this.showPager && this.dataSource) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    get filterOptions() {
        return this.displayedColumns.map((x) => ({ code: x.f, description: x.t }));
    }
    clearFilter() {
        this.form.reset();
    }
    outputCheckbox(field, item, value) {
        console.log(field, item, value, this.mutableList);
        const find = this.mutableList?.find((x) => x[this.idField] == item[this.idField]);
        if (find)
            find[field] = value;
        this.emitCheckbox.emit({ field, item, value });
        this.listMutated.emit(this.mutableList);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection?.selected?.length;
        const numRows = this.dataSource?.data?.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    get selectedItems() {
        return this.selection.selected;
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    rowClick(e) {
        this._rowClick.emit(e);
    }
    clickBtn(col, row) {
        if (col?.btn?.action)
            col.btn.action(row, col.f);
    }
    getActionStatusCallback(col) {
        return (state) => (col.btn.loading = state);
    }
    increasePageSize() {
        if (this.dataSource?.data?.length <= this.dataSource.paginator.pageSize)
            return;
        this.dataSource.paginator.pageSize =
            this.dataSource.paginator.pageSize + this.pageSizeIncrementor;
        this._data = this.mutableList;
    }
    decreasePageSize() {
        if (this.paginator.pageSize > this.pageSizeIncrementor)
            this.paginator.pageSize =
                this.paginator.pageSize - this.pageSizeIncrementor;
    }
    resetPageSize() {
        this.dataSource.paginator.pageSize = this.pageSize;
        this._data = this.mutableList;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePlainComponent, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: TablePlainComponent, isStandalone: true, selector: "table-plain", inputs: { text: ["label", "text"], options: ["rowOptions", "options"], optionsMap: ["rowOptionsMap", "optionsMap"], centerCells: "centerCells", curvy: "curvy", customSelectClass: "customSelectClass", _displayedColumns: ["displayedColumns", "_displayedColumns"], distinct: "distinct", formatColumnHeaders: "formatColumnHeaders", idField: "idField", noItemTxt: "noItemTxt", nowrap: "nowrap", orderDirection: "orderDirection", orderField: "orderField", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", placeSelectionAtRight: "placeSelectionAtRight", resultsLength: "resultsLength", showExport: "showExport", showFilter: "showFilter", showPager: "showPager", showRowPointer: "showRowPointer", smallerFonts: "smallerFonts", isDisabledFunc: "isDisabledFunc", useSelection: "useSelection", _data: ["data", "_data"] }, outputs: { _rowClick: "rowClick", _view: "view", listMutated: "listMutated", selectionChanged: "selectionChanged", emitCheckbox: "emitCheckbox" }, viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<div class=\" \">\n  <div [ngClass]=\"{ border: distinct }\">\n    <div class=\"table-container\" #container>\n      <div class=\"overflow-auto\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100 d-table   mb-0\"\n          [ngClass]=\"{smallerFonts,nowrap,centerCells,curvy}\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"mselect\" [sticky]=\"!placeSelectionAtRight\" [stickyEnd]=\"placeSelectionAtRight\">\n            <th mat-header-cell *matHeaderCellDef>\n              <ng-container *ngIf=\"customSelectClass\">\n                <input type=\"checkbox\" [class]=\"customSelectClass\" (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [attr.aria-label]=\"checkboxLabel()\" />\n              </ng-container>\n              <ng-container *ngIf=\"!customSelectClass\">\n                <mat-checkbox class=\"circle-checkbox\" (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n              </ng-container>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n              <ng-container *ngIf=\"customSelectClass\">\n                <input type=\"checkbox\" class=\"form-control control-bg-gray\" (click)=\"$event.stopPropagation()\"\n                  (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                  [attr.aria-label]=\"checkboxLabel(row)\" />\n              </ng-container>\n              <ng-container *ngIf=\"!customSelectClass\">\n                <mat-checkbox class=\"circle-checkbox\" (click)=\"$event.stopPropagation()\"\n                  (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                  [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n              </ng-container>\n            </td>\n          </ng-container>\n          <!-- Columns -->\n          <ng-container *ngFor=\"let col of displayedColumns; let i = index\">\n            <ng-container [ngSwitch]=\"col.type\">\n\n\n              <!-- Button -->\n              <ng-container *ngSwitchCase=\"'button'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t }}\n                </th>\n                <td mat-cell *matCellDef=\"let row\" class=\"btn-cell\">\n                  <app-btn [icon]=\"col.btn?.icon\" [type]=\"col.btn?.type\" (mclick)=\"clickBtn(col,row)\"\n                    [text]=\"col.btn?.label\" [loading]=\"col.btn?.loading\" [iconBtn]=\"col.btn?.iconBtn\" mclass=\"w-auto\"\n                    [disabled]=\"col.btn?.disabled || col.btn?.loading\"></app-btn>\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- Trend -->\n              <ng-container *ngSwitchCase=\"'trend'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  {{ col.t|titlecase }}\n                </th>\n                <td mat-cell *matCellDef=\"let row\" class=\"btn-cell\">\n                  <precentage-trend [trend]=\"row[col.f]\"></precentage-trend>\n                </td>\n              </ng-container>\n              <!--// -->\n\n\n              <!-- DEFAULT -->\n              <ng-container matColumnDef=\"{{ col.f|toAny }}\" *ngSwitchDefault>\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  {{formatColumnHeaders?(col.t|titlecase):col.t }}\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <ng-container *ngIf=\"col.routeFormatter; else elseNoRouteTemplate\">\n                    <a class=\"cell link pointer {{col.itemClassFunc|functionCaller1:row}} \"\n                      [routerLink]=\"[col?.routeFormatter|functionCaller1:row]\"\n                      [queryParams]=\"col?.mqueryParams|functionCaller1:row\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </a>\n                  </ng-container>\n                  <ng-template #elseNoRouteTemplate>\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </div>\n                  </ng-template>\n                </td>\n              </ng-container>\n\n              <!--// -->\n            </ng-container>\n          </ng-container>\n\n          <!-- Options Column -->\n          <ng-container matColumnDef=\"option\" *ngIf=\"options?.length>0||optionsMap\" stickyEnd>\n            <th mat-header-cell class=\"lastStickyItem w-auto\" *matHeaderCellDef disableClear></th>\n            <td mat-cell class=\"lastStickyItem w-auto\" *matCellDef=\"let row\">\n              <ng-container *ngIf=\"optionsMap; else elseOptionsTemplate\">\n                <ng-container *ngIf=\"(optionsMap|functionCaller1:row) as _rowoptions\">\n                  <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                    <mat-icon>more_vert</mat-icon>\n                  </app-btn>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item *ngFor=\"let option of _rowoptions\" (click)=\"option.action(row)\">\n                      {{optionLabeller|functionCaller2:option:row}}\n                    </button>\n                  </mat-menu>\n                </ng-container>\n              </ng-container>\n              <ng-template #elseOptionsTemplate>\n                <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                  <mat-icon>more_vert</mat-icon>\n                </app-btn>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item *ngFor=\"let option of options\" (click)=\"option.action(row)\">\n                    {{optionLabeller|functionCaller2:option:row}}\n                  </button>\n                </mat-menu>\n              </ng-template>\n            </td>\n          </ng-container>\n\n\n\n          <ng-container\n            *ngIf=\"displayedColumns | getRawFields: !!options?.length:useSelection:placeSelectionAtRight as dcols\">\n            <tr mat-header-row *matHeaderRowDef=\"dcols\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: dcols\"  [ngClass]=\"{pointer:showRowPointer,selected:selection.isSelected(row),disabled:isDisabledFunc?isDisabledFunc(row):false}\"\n            (click)=\"rowClick(row)\">\n            </tr>\n            <tr class=\"mat-row\" *matNoDataRow>\n              <td class=\"mat-cell\" [attr.colspan]=\"dcols?.length || 1\">\n                {{ noItemTxt }}\n              </td>\n            </tr>\n          </ng-container>\n        </table>\n      </div>\n      <ng-container *ngIf=\"showPager\">\n        <mat-paginator mresponsiveness [hideMobile]=\"true\" [length]=\"resultsLength\" [pageSizeOptions]=\"pageSizeOptions\"\n          [pageSize]=\"pageSize\" showFirstLastButtons>\n        </mat-paginator>\n        <div class=\"  \" mresponsiveness [hideDesktop]=\"true\">\n          <div class=\" d-flex justify-content-center\">\n            <app-btn text=\"See more\" type=\"clear-pm\" (mclick)=\"increasePageSize()\"\n              *ngIf=\"dataSource?.data?.length>paginator?.pageSize;else showLess\" />\n            <ng-template #showLess>\n              <app-btn text=\"See less\" type=\"clear-pm\" (mclick)=\"resetPageSize()\" />\n            </ng-template>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>", styles: ["::ng-deep mat-paginator .mat-mdc-form-field{width:100px;height:25px;margin-top:0;margin-bottom:0;background-color:transparent!important;border:none}::ng-deep mat-paginator .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:var(--primary)}::ng-deep .mdc-data-table__header-cell{color:#333!important;background-color:transparent!important;font-style:normal;font-weight:600;font-size:14px;line-height:19px}::ng-deep mat-paginator{border-radius:0 0 16px 16px}::ng-deep .mat-mdc-table{background:rgba(255,255,255,0)}::ng-deep .mat-mdc-table .mat-mdc-row:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}::ng-deep .mat-mdc-table .mat-mdc-row.selected:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row.selected:hover{background-color:#f0f6ff}::ng-deep th.mat-mdc-table-sticky,::ng-deep td.mat-mdc-table-sticky{background-color:#fff!important}::ng-deep .colour{height:15px;width:15px;display:inline-block;border-radius:5px}::ng-deep .centerCells .mat-sort-header-container{justify-content:center}::ng-deep .default.colour{background-color:#545454}::ng-deep .btn-cell{width:1%}::ng-deep .mat-sort-header-container{height:40px}.mat-header-cell{font-weight:600;font-size:14px;line-height:21px}.smallerFonts td,.smallerFonts th{font-size:.7rem}.nowrap td,.nowrap th{white-space:nowrap;text-align:left;padding:0 24px;border-radius:16px}.nowrap td{border-radius:0}:host ::ng-deep input[type=checkbox]:not(.form-control){border:1px solid rgba(80,78,245,.3019607843)}.table tr td:hover{color:unset!important;text-decoration:unset;cursor:unset}tr.mat-header-row{height:auto}.centerCells td{text-align:center}.curvy tr{border-radius:0 10px}.title{font-style:normal;font-weight:600;font-size:24px;line-height:29px;color:#333}.table-container{background:#ffffff;border:1px solid #e0e0e0;box-shadow:none;border-radius:16px}.table-container .mat-paginator,.table-container .mat-table{background:transparent}.mat-header-cell{color:#333;background-color:transparent}.cell.notLink:hover{color:inherit}.cell{text-overflow:ellipsis;display:block;white-space:nowrap;overflow:hidden;font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#333}.noContent .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:#266dd3}.noContent .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;width:206px;color:#828282}.table{border:1px solid #f2f2f2;border-radius:16px}.selected{background:#f0f6ff;background-color:#f0f6ff}.disabled .cell{font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#bdbdbd}.lastStickyItem{padding:0!important;background-image:linear-gradient(270deg,rgb(255,255,255),rgba(255,255,255,.7490196078))!important;border-radius:0!important}th.lastStickyItem{background:transparent!important}.link{color:var(--primary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2$3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2$3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2$3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2$3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2$3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2$3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2$3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2$3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2$3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2$3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i2$3.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i3$2.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i3$2.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i6$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "component", type: PrecentageTrendComponent, selector: "precentage-trend", inputs: ["trend", "message"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i6.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i6.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i6.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i7$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i8$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "directive", type: ResponsivenessDirective, selector: "[mresponsiveness]", inputs: ["mobileClass", "desktopClass", "hideMobile", "hideDesktop"] }, { kind: "directive", type: hideMobileDirective, selector: "[hideMobile]" }, { kind: "directive", type: hideDesktopDirective, selector: "[hideDesktop]" }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: TitleCasePipe, name: "titlecase" }, { kind: "pipe", type: GetColFormattedPipe, name: "getColFormatted" }, { kind: "pipe", type: GetRawFieldsPipe, name: "getRawFields" }, { kind: "pipe", type: FunctionCaller1, name: "functionCaller1" }, { kind: "pipe", type: FunctionCaller2, name: "functionCaller2" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }, { kind: "pipe", type: ValueOrXPipe, name: "valueOrX" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TablePlainComponent, decorators: [{
            type: Component,
            args: [{ selector: 'table-plain', standalone: true, imports: [
                        NgClass,
                        MatTableModule,
                        MatSortModule,
                        NgIf,
                        MatCheckboxModule,
                        NgFor,
                        NgSwitch,
                        NgSwitchCase,
                        BtnComponent,
                        PrecentageTrendComponent,
                        NgSwitchDefault,
                        RouterLink,
                        MatTooltipModule,
                        MatMenuModule,
                        MatIconModule,
                        MatPaginatorModule,
                        ResponsivenessDirective,
                        hideMobileDirective,
                        hideDesktopDirective,
                        AsyncPipe,
                        TitleCasePipe,
                        GetColFormattedPipe,
                        GetRawFieldsPipe,
                        FunctionCaller1,
                        FunctionCaller2,
                        ToAnyPipe,
                        ValueOrXPipe,
                    ], template: "<div class=\" \">\n  <div [ngClass]=\"{ border: distinct }\">\n    <div class=\"table-container\" #container>\n      <div class=\"overflow-auto\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100 d-table   mb-0\"\n          [ngClass]=\"{smallerFonts,nowrap,centerCells,curvy}\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"mselect\" [sticky]=\"!placeSelectionAtRight\" [stickyEnd]=\"placeSelectionAtRight\">\n            <th mat-header-cell *matHeaderCellDef>\n              <ng-container *ngIf=\"customSelectClass\">\n                <input type=\"checkbox\" [class]=\"customSelectClass\" (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [attr.aria-label]=\"checkboxLabel()\" />\n              </ng-container>\n              <ng-container *ngIf=\"!customSelectClass\">\n                <mat-checkbox class=\"circle-checkbox\" (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n              </ng-container>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n              <ng-container *ngIf=\"customSelectClass\">\n                <input type=\"checkbox\" class=\"form-control control-bg-gray\" (click)=\"$event.stopPropagation()\"\n                  (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                  [attr.aria-label]=\"checkboxLabel(row)\" />\n              </ng-container>\n              <ng-container *ngIf=\"!customSelectClass\">\n                <mat-checkbox class=\"circle-checkbox\" (click)=\"$event.stopPropagation()\"\n                  (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                  [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n              </ng-container>\n            </td>\n          </ng-container>\n          <!-- Columns -->\n          <ng-container *ngFor=\"let col of displayedColumns; let i = index\">\n            <ng-container [ngSwitch]=\"col.type\">\n\n\n              <!-- Button -->\n              <ng-container *ngSwitchCase=\"'button'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t }}\n                </th>\n                <td mat-cell *matCellDef=\"let row\" class=\"btn-cell\">\n                  <app-btn [icon]=\"col.btn?.icon\" [type]=\"col.btn?.type\" (mclick)=\"clickBtn(col,row)\"\n                    [text]=\"col.btn?.label\" [loading]=\"col.btn?.loading\" [iconBtn]=\"col.btn?.iconBtn\" mclass=\"w-auto\"\n                    [disabled]=\"col.btn?.disabled || col.btn?.loading\"></app-btn>\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- Trend -->\n              <ng-container *ngSwitchCase=\"'trend'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  {{ col.t|titlecase }}\n                </th>\n                <td mat-cell *matCellDef=\"let row\" class=\"btn-cell\">\n                  <precentage-trend [trend]=\"row[col.f]\"></precentage-trend>\n                </td>\n              </ng-container>\n              <!--// -->\n\n\n              <!-- DEFAULT -->\n              <ng-container matColumnDef=\"{{ col.f|toAny }}\" *ngSwitchDefault>\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  {{formatColumnHeaders?(col.t|titlecase):col.t }}\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <ng-container *ngIf=\"col.routeFormatter; else elseNoRouteTemplate\">\n                    <a class=\"cell link pointer {{col.itemClassFunc|functionCaller1:row}} \"\n                      [routerLink]=\"[col?.routeFormatter|functionCaller1:row]\"\n                      [queryParams]=\"col?.mqueryParams|functionCaller1:row\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </a>\n                  </ng-container>\n                  <ng-template #elseNoRouteTemplate>\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </div>\n                  </ng-template>\n                </td>\n              </ng-container>\n\n              <!--// -->\n            </ng-container>\n          </ng-container>\n\n          <!-- Options Column -->\n          <ng-container matColumnDef=\"option\" *ngIf=\"options?.length>0||optionsMap\" stickyEnd>\n            <th mat-header-cell class=\"lastStickyItem w-auto\" *matHeaderCellDef disableClear></th>\n            <td mat-cell class=\"lastStickyItem w-auto\" *matCellDef=\"let row\">\n              <ng-container *ngIf=\"optionsMap; else elseOptionsTemplate\">\n                <ng-container *ngIf=\"(optionsMap|functionCaller1:row) as _rowoptions\">\n                  <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                    <mat-icon>more_vert</mat-icon>\n                  </app-btn>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item *ngFor=\"let option of _rowoptions\" (click)=\"option.action(row)\">\n                      {{optionLabeller|functionCaller2:option:row}}\n                    </button>\n                  </mat-menu>\n                </ng-container>\n              </ng-container>\n              <ng-template #elseOptionsTemplate>\n                <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                  <mat-icon>more_vert</mat-icon>\n                </app-btn>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item *ngFor=\"let option of options\" (click)=\"option.action(row)\">\n                    {{optionLabeller|functionCaller2:option:row}}\n                  </button>\n                </mat-menu>\n              </ng-template>\n            </td>\n          </ng-container>\n\n\n\n          <ng-container\n            *ngIf=\"displayedColumns | getRawFields: !!options?.length:useSelection:placeSelectionAtRight as dcols\">\n            <tr mat-header-row *matHeaderRowDef=\"dcols\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: dcols\"  [ngClass]=\"{pointer:showRowPointer,selected:selection.isSelected(row),disabled:isDisabledFunc?isDisabledFunc(row):false}\"\n            (click)=\"rowClick(row)\">\n            </tr>\n            <tr class=\"mat-row\" *matNoDataRow>\n              <td class=\"mat-cell\" [attr.colspan]=\"dcols?.length || 1\">\n                {{ noItemTxt }}\n              </td>\n            </tr>\n          </ng-container>\n        </table>\n      </div>\n      <ng-container *ngIf=\"showPager\">\n        <mat-paginator mresponsiveness [hideMobile]=\"true\" [length]=\"resultsLength\" [pageSizeOptions]=\"pageSizeOptions\"\n          [pageSize]=\"pageSize\" showFirstLastButtons>\n        </mat-paginator>\n        <div class=\"  \" mresponsiveness [hideDesktop]=\"true\">\n          <div class=\" d-flex justify-content-center\">\n            <app-btn text=\"See more\" type=\"clear-pm\" (mclick)=\"increasePageSize()\"\n              *ngIf=\"dataSource?.data?.length>paginator?.pageSize;else showLess\" />\n            <ng-template #showLess>\n              <app-btn text=\"See less\" type=\"clear-pm\" (mclick)=\"resetPageSize()\" />\n            </ng-template>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>", styles: ["::ng-deep mat-paginator .mat-mdc-form-field{width:100px;height:25px;margin-top:0;margin-bottom:0;background-color:transparent!important;border:none}::ng-deep mat-paginator .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:var(--primary)}::ng-deep .mdc-data-table__header-cell{color:#333!important;background-color:transparent!important;font-style:normal;font-weight:600;font-size:14px;line-height:19px}::ng-deep mat-paginator{border-radius:0 0 16px 16px}::ng-deep .mat-mdc-table{background:rgba(255,255,255,0)}::ng-deep .mat-mdc-table .mat-mdc-row:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}::ng-deep .mat-mdc-table .mat-mdc-row.selected:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row.selected:hover{background-color:#f0f6ff}::ng-deep th.mat-mdc-table-sticky,::ng-deep td.mat-mdc-table-sticky{background-color:#fff!important}::ng-deep .colour{height:15px;width:15px;display:inline-block;border-radius:5px}::ng-deep .centerCells .mat-sort-header-container{justify-content:center}::ng-deep .default.colour{background-color:#545454}::ng-deep .btn-cell{width:1%}::ng-deep .mat-sort-header-container{height:40px}.mat-header-cell{font-weight:600;font-size:14px;line-height:21px}.smallerFonts td,.smallerFonts th{font-size:.7rem}.nowrap td,.nowrap th{white-space:nowrap;text-align:left;padding:0 24px;border-radius:16px}.nowrap td{border-radius:0}:host ::ng-deep input[type=checkbox]:not(.form-control){border:1px solid rgba(80,78,245,.3019607843)}.table tr td:hover{color:unset!important;text-decoration:unset;cursor:unset}tr.mat-header-row{height:auto}.centerCells td{text-align:center}.curvy tr{border-radius:0 10px}.title{font-style:normal;font-weight:600;font-size:24px;line-height:29px;color:#333}.table-container{background:#ffffff;border:1px solid #e0e0e0;box-shadow:none;border-radius:16px}.table-container .mat-paginator,.table-container .mat-table{background:transparent}.mat-header-cell{color:#333;background-color:transparent}.cell.notLink:hover{color:inherit}.cell{text-overflow:ellipsis;display:block;white-space:nowrap;overflow:hidden;font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#333}.noContent .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:#266dd3}.noContent .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;width:206px;color:#828282}.table{border:1px solid #f2f2f2;border-radius:16px}.selected{background:#f0f6ff;background-color:#f0f6ff}.disabled .cell{font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#bdbdbd}.lastStickyItem{padding:0!important;background-image:linear-gradient(270deg,rgb(255,255,255),rgba(255,255,255,.7490196078))!important;border-radius:0!important}th.lastStickyItem{background:transparent!important}.link{color:var(--primary)}\n"] }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; }, propDecorators: { text: [{
                type: Input,
                args: ['label']
            }], options: [{
                type: Input,
                args: ['rowOptions']
            }], optionsMap: [{
                type: Input,
                args: ['rowOptionsMap']
            }], centerCells: [{
                type: Input
            }], curvy: [{
                type: Input
            }], customSelectClass: [{
                type: Input
            }], _displayedColumns: [{
                type: Input,
                args: ['displayedColumns']
            }], distinct: [{
                type: Input
            }], formatColumnHeaders: [{
                type: Input
            }], idField: [{
                type: Input
            }], noItemTxt: [{
                type: Input
            }], nowrap: [{
                type: Input
            }], orderDirection: [{
                type: Input
            }], orderField: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], placeSelectionAtRight: [{
                type: Input
            }], resultsLength: [{
                type: Input
            }], showExport: [{
                type: Input
            }], showFilter: [{
                type: Input
            }], showPager: [{
                type: Input
            }], showRowPointer: [{
                type: Input
            }], smallerFonts: [{
                type: Input
            }], isDisabledFunc: [{
                type: Input
            }], useSelection: [{
                type: Input
            }], _rowClick: [{
                type: Output,
                args: ['rowClick']
            }], _view: [{
                type: Output,
                args: ['view']
            }], listMutated: [{
                type: Output
            }], selectionChanged: [{
                type: Output
            }], paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }], emitCheckbox: [{
                type: Output
            }], _data: [{
                type: Input,
                args: ['data']
            }] } });

class TextComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: TextComponent, isStandalone: true, selector: "app-text", inputs: { text: "text" }, ngImport: i0, template: "<div class=\"text\" [matTooltip]=\"text\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n    {{text}}</div>", styles: [".text{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"], dependencies: [{ kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text', standalone: true, imports: [MatTooltipModule], template: "<div class=\"text\" [matTooltip]=\"text\" [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\" #ele>\n    {{text}}</div>", styles: [".text{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }] } });

class LoaderComponent {
    set _loading(v) {
        if (v)
            this.startLoader();
        else
            this.stopLoader();
    }
    get loading() {
        return this.loaders.isLoading;
    }
    set _height(v) {
        const minHeight = 150;
        this.height = v ? (v < minHeight ? minHeight : v) + 'px' : this.height;
    }
    constructor() {
        this.class = 'vh-60';
        this.loader = new ProgressLoader();
        this.loaders = new ProgressLoaders();
        this.loaders.addLoader(this.loader);
    }
    ngOnInit() { }
    startLoader() {
        this.loader.startPl();
    }
    stopLoader() {
        this.loaders?.stopAllLoaders();
        // this.loader.stopPl();
    }
    stepLoader(v) {
        this._loading = v;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: LoaderComponent, isStandalone: true, selector: "loader", inputs: { class: "class", text: "text", hasContent: "hasContent", _loading: ["loading", "_loading"], _height: ["height", "_height"] }, ngImport: i0, template: "<div class=\"h-100\">\n  <div *ngIf=\"loading\" class=\" {{height?'':class}}  center w-100 \" id=\"loader\" [ngStyle]=\"{height }\">\n    <div class=\"w-100 text-center d-flex justify-content-center\">\n      <div class=\"w-100\">\n        <div class=\"lds-ellipsis\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n        <div class=\"my-16 w-100\" *ngIf=\"progress\">\n          <div class=\"progress-value\">\n            {{progress}}%\n          </div>\n          <div class=\"text-start mt-16 w-100\">\n            <mat-progress-bar class=\"  w-100\" mode=\"determinate\" [value]=\"progress\" />\n          </div>\n        </div> \n        <h5 class=\"mt-2 noselect text-center\" *ngIf=\"text\" [innerHTML]=\"text\"></h5>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"h-100\" [hidden]=\"loading\">\n    <!-- <div > -->\n\n    <ng-container *ngIf=\"hasContent==null; else elsehasContentTemplate\">\n      <ng-content></ng-content>\n    </ng-container>\n    <ng-template #elsehasContentTemplate>\n      <ng-container *ngIf=\"hasContent; else elseTemplate\">\n        <ng-content select=\"[content]\"></ng-content>\n      </ng-container>\n      <ng-template #elseTemplate>\n        <ng-content select=\"[noContent]\"></ng-content>\n      </ng-template>\n\n    </ng-template>\n\n  </div>\n</div>", styles: [".lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:var(--primary);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}.progress-value{font-style:normal;font-weight:600;font-size:24px;line-height:18px;text-align:center;color:var(--primary)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1$3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loader', standalone: true, imports: [NgIf, NgStyle, MatProgressBarModule], template: "<div class=\"h-100\">\n  <div *ngIf=\"loading\" class=\" {{height?'':class}}  center w-100 \" id=\"loader\" [ngStyle]=\"{height }\">\n    <div class=\"w-100 text-center d-flex justify-content-center\">\n      <div class=\"w-100\">\n        <div class=\"lds-ellipsis\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n        <div class=\"my-16 w-100\" *ngIf=\"progress\">\n          <div class=\"progress-value\">\n            {{progress}}%\n          </div>\n          <div class=\"text-start mt-16 w-100\">\n            <mat-progress-bar class=\"  w-100\" mode=\"determinate\" [value]=\"progress\" />\n          </div>\n        </div> \n        <h5 class=\"mt-2 noselect text-center\" *ngIf=\"text\" [innerHTML]=\"text\"></h5>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"h-100\" [hidden]=\"loading\">\n    <!-- <div > -->\n\n    <ng-container *ngIf=\"hasContent==null; else elsehasContentTemplate\">\n      <ng-content></ng-content>\n    </ng-container>\n    <ng-template #elsehasContentTemplate>\n      <ng-container *ngIf=\"hasContent; else elseTemplate\">\n        <ng-content select=\"[content]\"></ng-content>\n      </ng-container>\n      <ng-template #elseTemplate>\n        <ng-content select=\"[noContent]\"></ng-content>\n      </ng-template>\n\n    </ng-template>\n\n  </div>\n</div>", styles: [".lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:var(--primary);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}.progress-value{font-style:normal;font-weight:600;font-size:24px;line-height:18px;text-align:center;color:var(--primary)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { class: [{
                type: Input
            }], text: [{
                type: Input
            }], hasContent: [{
                type: Input
            }], _loading: [{
                type: Input,
                args: ['loading']
            }], _height: [{
                type: Input,
                args: ['height']
            }] } });

class SearchBoxComponent {
    constructor() {
        this.label = 'Search';
        this.queryChanged = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SearchBoxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: SearchBoxComponent, isStandalone: true, selector: "search-box", inputs: { label: "label", query: "query" }, outputs: { queryChanged: "queryChanged" }, ngImport: i0, template: "<div class=\"d-flex\">\n    <app-btn icon=\"search\" [iconBtn]=\"true\" (mclick)=\"opened=!opened\" type=\"clear\" [hidden]=\"opened\"></app-btn>\n    \n    <input [hidden]=\"!opened\" #inp type=\"search\" [(ngModel)]=\"query\" (ngModelChange)=\"queryChanged.emit($event)\" placeholder=\"{{label}}\">\n    <app-btn icon=\"close\" [iconBtn]=\"true\" (mclick)=\"opened=!opened;query=null\" type=\"clear\" [hidden]=\"!opened\"></app-btn>\n</div>", styles: ["input{width:228px;height:40px;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:12px 16px}input:focus-visible{outline:none}::placeholder{font-style:normal;font-weight:400;font-size:12px;line-height:18px;display:flex;align-items:center;color:#bdbdbd}::ng-deep .btn{height:40px}\n"], dependencies: [{ kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SearchBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'search-box', standalone: true, imports: [BtnComponent, FormsModule], template: "<div class=\"d-flex\">\n    <app-btn icon=\"search\" [iconBtn]=\"true\" (mclick)=\"opened=!opened\" type=\"clear\" [hidden]=\"opened\"></app-btn>\n    \n    <input [hidden]=\"!opened\" #inp type=\"search\" [(ngModel)]=\"query\" (ngModelChange)=\"queryChanged.emit($event)\" placeholder=\"{{label}}\">\n    <app-btn icon=\"close\" [iconBtn]=\"true\" (mclick)=\"opened=!opened;query=null\" type=\"clear\" [hidden]=\"!opened\"></app-btn>\n</div>", styles: ["input{width:228px;height:40px;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:12px 16px}input:focus-visible{outline:none}::placeholder{font-style:normal;font-weight:400;font-size:12px;line-height:18px;display:flex;align-items:center;color:#bdbdbd}::ng-deep .btn{height:40px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], query: [{
                type: Input
            }], queryChanged: [{
                type: Output
            }] } });

class GridOrListComponent {
    set _displayedColumns(value) {
        this.displayedColumns = value;
        this.displayedColumnsFields =
            value?.filter((x) => !x.hide)?.map((x) => x.f) || [];
        this.mainField = this.displayedColumns[0];
        this.subFields = this.displayedColumns?.filter((x) => !x.hide).slice(1);
    }
    set _data(v) {
        this.data = cloneDeep(v);
        this.selection = new SelectionData(this.data);
    }
    set _searchFunction(v$) {
        this.searchFunction = v$;
        this.fetchData(v$);
    }
    constructor(uS, route) {
        this.uS = uS;
        this.route = route;
        this.eViewType = EViewType;
        this.viewTypes = [
            { name: 'grid', value: EViewType.grid },
            { name: 'list', value: EViewType.list },
        ];
        this.viewType = this.viewTypes[0].value;
        this.breadcrumbs = [];
        this.onEdit = new EventEmitter();
        this.rowOptions = [{ t: 'Edit', action: (r) => this.onEdit.emit(r) }];
        this.formQueryParams = (row) => {
            return {
                [this.mID + 'ID']: row['id'],
                [this.mID + 'Name']: row['name'],
                [this.mID + 'Count']: this.data.length,
            };
        };
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.pageName = this.route.snapshot.queryParamMap.get(this.parentID + 'Name');
        this.formBreadCrumbs();
    }
    fetchData(v$) {
        this.loading = true;
        v$(this.parentID
            ? this.route.snapshot.queryParamMap.get(this.parentID + 'ID')
            : undefined).subscribe({
            next: (r) => {
                // debugger;
                this.data = r;
                this.selection = new SelectionData(this.data);
                this.loading = false;
            },
            error: (error) => {
                this.uS.notify(error);
                console.error(error);
                this.loading = false;
            },
        });
    }
    switchView(vt) {
        this.viewType = vt.value;
        this.selection.reset();
    }
    tableSelection(r) {
        // debugger;
        r?.added?.forEach((x) => {
            this.selection.itemChanged(x['id'], { checked: true });
        });
        r?.removed?.forEach((x) => {
            this.selection.itemChanged(x['id'], { checked: false });
        });
    }
    async deleteItems(items) {
        if (this.deleteFunc)
            try {
                this.loading = true;
                await lastValueFrom(this.deleteFunc(items));
                this.refresh();
                this.loading = false;
            }
            catch (error) {
                console.error(error);
                this.uS.notify(error, 0);
                this.loading = false;
            }
    }
    refresh() {
        // debugger;
        this._searchFunction = this.searchFunction;
    }
    formBreadCrumbs() {
        const queries = this.route.snapshot.queryParams;
        const bc = [];
        const routes = location.pathname
            .split('/')
            .filter((x) => x?.includes('listing'))
            .map((x) => x.split('-')[0])
            .reverse();
        routes.splice(0, 1);
        this.idValues = {};
        for (let index = 0; index < routes.length; index++) {
            const id = routes[index];
            this.idValues[id] = queries[id + 'ID'];
            // debugger;
            bc.push({
                f: index == 0
                    ? undefined
                    : '../'.repeat(index + 1) + routes[index - 1] + '-listing',
                t: queries[id + 'Name'],
                value: index == 0 ? undefined : queries[routes[index - 1] + 'Count'],
            });
        }
        console.log(this.idValues);
        bc.reverse();
        this.breadcrumbs = [
            //#region
            {
                t: 'Zonal Offices',
                f: bc.length
                    ? '../'.repeat(bc.length + 1) + routes.lastItem() + '-listing'
                    : './',
                value: queries[routes[0] + 'Count'],
            },
            //#endregion
        ].concat(bc);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GridOrListComponent, deps: [{ token: UtilityService }, { token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: GridOrListComponent, isStandalone: true, selector: "grid-or-list", inputs: { viewType: "viewType", loading: "loading", mID: "mID", parentID: "parentID", _displayedColumns: ["displayedColumns", "_displayedColumns"], _data: ["data", "_data"], deleteFunc: "deleteFunc", _searchFunction: ["searchFunction", "_searchFunction"] }, outputs: { onEdit: "onEdit" }, ngImport: i0, template: "<div class=\"row row-cols-auto form-grid justify-content-between mb-16\">\n    <div class=\"\">\n        <div class=\"row row-cols-auto g-8-2 align-items-center\">\n            <div>\n                <div class=\"row row-cols-auto g-8-2 align-items-center\">\n                    <ng-container *ngFor=\"let crumb of breadcrumbs;let isLast = last;let isFirst = first\">\n                        <span>\n                            <ng-container [ngSwitch]=\"true\">\n                                <ng-container *ngSwitchCase=\"isFirst\">\n                                    <span class=\"pe-lg-0 row row-cols-auto g-8-2 align-items-center\">\n                                        <svg-icon icon=\"home\" [routerLink]=\"[crumb.f]\" queryParamsHandling=\"merge\"\n                                            class=\"pointer\" />\n                                        <a [routerLink]=\"[crumb.f]\" queryParamsHandling=\"merge\" class=\" color-inherit \">\n                                            {{crumb.t|titlecase}}</a>\n                                        <ng-container *ngIf=\"!isLast\">\n                                            <count class=\" \" [count]=\"crumb?.value||0\">\n                                            </count><span class=\"text-primary\">/</span>\n                                        </ng-container>\n                                    </span>\n                                </ng-container>\n                                <ng-container *ngSwitchCase=\"isLast\">\n\n                                </ng-container>\n                                <ng-container *ngSwitchDefault>\n                                    <span class=\"pe-lg-0 row row-cols-auto g-8-2 align-items-center\">\n                                        <a [routerLink]=\"[crumb.f]\" queryParamsHandling=\"merge\"\n                                            class=\"  color-inherit \">{{crumb.t|titlecase}}</a>\n                                        <count class=\" \" [count]=\"crumb?.value||0\">\n                                        </count>\n                                        <span class=\"text-primary\"> /</span>\n                                    </span>\n                                </ng-container>\n                            </ng-container>\n                        </span>\n                    </ng-container>\n                </div>\n            </div>\n            <div class=\"d-flex\">\n                <span>{{pageName|titlecase}}</span>\n            </div>\n            <div class=\"d-flex\">\n                <count class=\" \" [count]=\"data?.length||0\">\n                </count>\n            </div>\n            <div class=\"d-flex\">\n                <search-box label=\"Search\" #searchBox hideMobile />\n            </div>\n        </div>\n    </div>\n    <div class=\"\">\n        <div class=\"row row-cols-auto g-0\">\n            <div class=\"\" *ngFor=\"let vt of viewTypes\">\n                <app-btn (mclick)=\"switchView(vt)\" [help]=\"vt.value|titlecase\" [showHelpIcon]=\"false\" [icon]=\"vt.value\"\n                    [type]=\"vt.value==viewType?'clear-pm':'clear'\" />\n            </div>\n        </div>\n    </div>\n</div>\n<loader [loading]=\"loading\" [hasContent]=\"!!data?.length\">\n    <div content>\n        <div class=\"\">\n            <ng-container [ngSwitch]=\"viewType\">\n                <ng-container *ngSwitchCase=\"eViewType.grid\">\n                    <div class=\"row  m-grid form-grid\">\n                        <div class=\"col-lg-3 \"\n                            *ngFor=\"let item of data|filterArrayByString:searchBox?.query:displayedColumnsFields\">\n                            <div class=\"card px-24 py-16\">\n                                <div class=\"head d-flex pointer justify-content-between align-items-center mb-8\">\n                                    <a [routerLink]=\"[mainField?.routeFormatter|functionCaller1:item]\"\n                                        [queryParams]=\"formQueryParams|functionCaller1:item\"\n                                        class=\"color-inherit d-block w-100\" queryParamsHandling=\"merge\">\n                                        <app-text [text]=\"item[mainField.f]|toAny\"></app-text>\n                                    </a>\n                                    <div class=\"mrb\" [ngClass]=\"{visible:mrb.checked}\">\n                                        <mat-checkbox #mrb class=\"circle-checkbox\"\n                                            (change)=\"selection?.itemChanged(item['id'],$event)\">\n                                        </mat-checkbox>\n                                        <app-btn [mini]=\"true\" type=\"clear\" icon=\"edit\" (mclick)=\"onEdit.emit(item)\" />\n                                    </div>\n                                </div>\n                                <div class=\"misc mt-8\" *ngFor=\"let field of subFields\">\n                                    <div class=\"row row-cols-lg-auto form-grid justify-content-between\">\n                                        <div class=\"misc-title\">\n                                            {{field.t}}\n                                        </div>\n                                        <div class=\"misc-val\" [innerHTML]=\"field.formatter?(field.formatter|functionCaller1:item[field.f]):item[field.f]\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"eViewType.list\">\n                    <table-plain (selectionChanged)=\"tableSelection($event)\"\n                        [data]=\"data|filterArrayByString:searchBox?.query:displayedColumnsFields\" [rowOptions]=\"rowOptions\"\n                        [displayedColumns]=\"displayedColumns\" [useSelection]=\"true\" [showPager]=\"true\" />\n                </ng-container>\n            </ng-container>\n        </div>\n    </div>\n    <no-list header=\"No {{mID}} has been created\" [hideAddBtn]=\"true\" noContent />\n</loader>", styles: [".m-grid .head,.m-grid .head a{font-style:normal;font-weight:600;font-size:14px;line-height:18px;display:flex;align-items:center;color:#333}.m-grid .head:focus,.m-grid .head:hover,.m-grid .head a:focus,.m-grid .head a:hover{color:#266dd3}.m-grid .head:focus .mrb,.m-grid .head:hover .mrb,.m-grid .head a:focus .mrb,.m-grid .head a:hover .mrb{visibility:visible}.m-grid .mrb{visibility:hidden;position:absolute;right:16px;background-image:linear-gradient(271deg,white,rgba(255,255,255,.7294117647));border-radius:50%;display:flex}.m-grid .mrb.visible{visibility:visible}.m-grid .desc{font-style:normal;font-weight:400;font-size:12px;line-height:18px;height:36px;overflow:hidden;display:block;text-overflow:ellipsis;align-items:center;color:#828282}.m-grid .misc{font-weight:500;font-size:10px;color:#828282}.m-grid .misc .misc-item{margin-top:4px}.m-grid .misc .misc-title{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:#828282}.m-grid .misc .misc-val{font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:#000}svg-icon{color:#bdbdbd}\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: SvgIconComponent, selector: "svg-icon", inputs: ["class", "icon"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: CountComponent, selector: "count", inputs: ["count", "class"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: SearchBoxComponent, selector: "search-box", inputs: ["label", "query"], outputs: ["queryChanged"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "component", type: TextComponent, selector: "app-text", inputs: ["text"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i6$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: TablePlainComponent, selector: "table-plain", inputs: ["label", "rowOptions", "rowOptionsMap", "centerCells", "curvy", "customSelectClass", "displayedColumns", "distinct", "formatColumnHeaders", "idField", "noItemTxt", "nowrap", "orderDirection", "orderField", "pageSize", "pageSizeOptions", "placeSelectionAtRight", "resultsLength", "showExport", "showFilter", "showPager", "showRowPointer", "smallerFonts", "isDisabledFunc", "useSelection", "data"], outputs: ["rowClick", "view", "listMutated", "selectionChanged", "emitCheckbox"] }, { kind: "component", type: NoListComponent, selector: "no-list", inputs: ["header", "subheader", "addBtnText", "hideAddBtn"], outputs: ["addButtonClicked"] }, { kind: "pipe", type: TitleCasePipe, name: "titlecase" }, { kind: "pipe", type: FilterArrayByStringPipe, name: "filterArrayByString" }, { kind: "pipe", type: FunctionCaller1, name: "functionCaller1" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: GridOrListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'grid-or-list', standalone: true, imports: [
                        NgFor,
                        NgSwitch,
                        NgSwitchCase,
                        SvgIconComponent,
                        RouterLink,
                        NgIf,
                        CountComponent,
                        NgSwitchDefault,
                        SearchBoxComponent,
                        BtnComponent,
                        LoaderComponent,
                        TextComponent,
                        NgClass,
                        MatCheckboxModule,
                        TablePlainComponent,
                        NoListComponent,
                        TitleCasePipe,
                        FilterArrayByStringPipe,
                        FunctionCaller1,
                        ToAnyPipe,
                    ], template: "<div class=\"row row-cols-auto form-grid justify-content-between mb-16\">\n    <div class=\"\">\n        <div class=\"row row-cols-auto g-8-2 align-items-center\">\n            <div>\n                <div class=\"row row-cols-auto g-8-2 align-items-center\">\n                    <ng-container *ngFor=\"let crumb of breadcrumbs;let isLast = last;let isFirst = first\">\n                        <span>\n                            <ng-container [ngSwitch]=\"true\">\n                                <ng-container *ngSwitchCase=\"isFirst\">\n                                    <span class=\"pe-lg-0 row row-cols-auto g-8-2 align-items-center\">\n                                        <svg-icon icon=\"home\" [routerLink]=\"[crumb.f]\" queryParamsHandling=\"merge\"\n                                            class=\"pointer\" />\n                                        <a [routerLink]=\"[crumb.f]\" queryParamsHandling=\"merge\" class=\" color-inherit \">\n                                            {{crumb.t|titlecase}}</a>\n                                        <ng-container *ngIf=\"!isLast\">\n                                            <count class=\" \" [count]=\"crumb?.value||0\">\n                                            </count><span class=\"text-primary\">/</span>\n                                        </ng-container>\n                                    </span>\n                                </ng-container>\n                                <ng-container *ngSwitchCase=\"isLast\">\n\n                                </ng-container>\n                                <ng-container *ngSwitchDefault>\n                                    <span class=\"pe-lg-0 row row-cols-auto g-8-2 align-items-center\">\n                                        <a [routerLink]=\"[crumb.f]\" queryParamsHandling=\"merge\"\n                                            class=\"  color-inherit \">{{crumb.t|titlecase}}</a>\n                                        <count class=\" \" [count]=\"crumb?.value||0\">\n                                        </count>\n                                        <span class=\"text-primary\"> /</span>\n                                    </span>\n                                </ng-container>\n                            </ng-container>\n                        </span>\n                    </ng-container>\n                </div>\n            </div>\n            <div class=\"d-flex\">\n                <span>{{pageName|titlecase}}</span>\n            </div>\n            <div class=\"d-flex\">\n                <count class=\" \" [count]=\"data?.length||0\">\n                </count>\n            </div>\n            <div class=\"d-flex\">\n                <search-box label=\"Search\" #searchBox hideMobile />\n            </div>\n        </div>\n    </div>\n    <div class=\"\">\n        <div class=\"row row-cols-auto g-0\">\n            <div class=\"\" *ngFor=\"let vt of viewTypes\">\n                <app-btn (mclick)=\"switchView(vt)\" [help]=\"vt.value|titlecase\" [showHelpIcon]=\"false\" [icon]=\"vt.value\"\n                    [type]=\"vt.value==viewType?'clear-pm':'clear'\" />\n            </div>\n        </div>\n    </div>\n</div>\n<loader [loading]=\"loading\" [hasContent]=\"!!data?.length\">\n    <div content>\n        <div class=\"\">\n            <ng-container [ngSwitch]=\"viewType\">\n                <ng-container *ngSwitchCase=\"eViewType.grid\">\n                    <div class=\"row  m-grid form-grid\">\n                        <div class=\"col-lg-3 \"\n                            *ngFor=\"let item of data|filterArrayByString:searchBox?.query:displayedColumnsFields\">\n                            <div class=\"card px-24 py-16\">\n                                <div class=\"head d-flex pointer justify-content-between align-items-center mb-8\">\n                                    <a [routerLink]=\"[mainField?.routeFormatter|functionCaller1:item]\"\n                                        [queryParams]=\"formQueryParams|functionCaller1:item\"\n                                        class=\"color-inherit d-block w-100\" queryParamsHandling=\"merge\">\n                                        <app-text [text]=\"item[mainField.f]|toAny\"></app-text>\n                                    </a>\n                                    <div class=\"mrb\" [ngClass]=\"{visible:mrb.checked}\">\n                                        <mat-checkbox #mrb class=\"circle-checkbox\"\n                                            (change)=\"selection?.itemChanged(item['id'],$event)\">\n                                        </mat-checkbox>\n                                        <app-btn [mini]=\"true\" type=\"clear\" icon=\"edit\" (mclick)=\"onEdit.emit(item)\" />\n                                    </div>\n                                </div>\n                                <div class=\"misc mt-8\" *ngFor=\"let field of subFields\">\n                                    <div class=\"row row-cols-lg-auto form-grid justify-content-between\">\n                                        <div class=\"misc-title\">\n                                            {{field.t}}\n                                        </div>\n                                        <div class=\"misc-val\" [innerHTML]=\"field.formatter?(field.formatter|functionCaller1:item[field.f]):item[field.f]\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"eViewType.list\">\n                    <table-plain (selectionChanged)=\"tableSelection($event)\"\n                        [data]=\"data|filterArrayByString:searchBox?.query:displayedColumnsFields\" [rowOptions]=\"rowOptions\"\n                        [displayedColumns]=\"displayedColumns\" [useSelection]=\"true\" [showPager]=\"true\" />\n                </ng-container>\n            </ng-container>\n        </div>\n    </div>\n    <no-list header=\"No {{mID}} has been created\" [hideAddBtn]=\"true\" noContent />\n</loader>", styles: [".m-grid .head,.m-grid .head a{font-style:normal;font-weight:600;font-size:14px;line-height:18px;display:flex;align-items:center;color:#333}.m-grid .head:focus,.m-grid .head:hover,.m-grid .head a:focus,.m-grid .head a:hover{color:#266dd3}.m-grid .head:focus .mrb,.m-grid .head:hover .mrb,.m-grid .head a:focus .mrb,.m-grid .head a:hover .mrb{visibility:visible}.m-grid .mrb{visibility:hidden;position:absolute;right:16px;background-image:linear-gradient(271deg,white,rgba(255,255,255,.7294117647));border-radius:50%;display:flex}.m-grid .mrb.visible{visibility:visible}.m-grid .desc{font-style:normal;font-weight:400;font-size:12px;line-height:18px;height:36px;overflow:hidden;display:block;text-overflow:ellipsis;align-items:center;color:#828282}.m-grid .misc{font-weight:500;font-size:10px;color:#828282}.m-grid .misc .misc-item{margin-top:4px}.m-grid .misc .misc-title{font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:#828282}.m-grid .misc .misc-val{font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:#000}svg-icon{color:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return [{ type: UtilityService }, { type: i1$1.ActivatedRoute }]; }, propDecorators: { viewType: [{
                type: Input
            }], loading: [{
                type: Input
            }], mID: [{
                type: Input
            }], parentID: [{
                type: Input
            }], onEdit: [{
                type: Output
            }], _displayedColumns: [{
                type: Input,
                args: ['displayedColumns']
            }], _data: [{
                type: Input,
                args: ['data']
            }], deleteFunc: [{
                type: Input
            }], _searchFunction: [{
                type: Input,
                args: ['searchFunction']
            }] } });
var EViewType;
(function (EViewType) {
    EViewType["list"] = "list";
    EViewType["grid"] = "grid";
})(EViewType || (EViewType = {}));

class IdlerService {
    get timeLeft() {
        return this._timeLeft;
    }
    constructor(idle, dialog) {
        this.idle = idle;
        this.dialog = dialog;
        this.onIdleFunctions = [];
        this.idleTime = 240; //in seconds
        this.timeOutTime = 60; //in seconds
    }
    startIdler(idleTimeSec = this.idleTime) {
        this.idleTime = idleTimeSec * 0.8;
        this.timeOutTime = idleTimeSec * 0.2;
        this.idle.setIdle(idleTimeSec);
        this.idle.setTimeout(this.timeOutTime);
        this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        this.idle.onIdleEnd.subscribe(() => {
            this.idlerModal.close();
        });
        this.idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;
            for (const func of this.onIdleFunctions) {
                func();
            }
        });
        this.idle.onIdleStart.subscribe(() => {
            this.idleState = "You've gone idle!";
            console.log(this.idleState);
            this.openTimeWarningModal();
        });
        this.idle.onTimeoutWarning.subscribe((countdown) => {
            this._timeLeft = countdown;
        });
        this.reset();
    }
    reset() {
        this.idle.watch();
    }
    clear() {
        this.onIdleFunctions = [];
    }
    addOnIdleFunction(func) {
        this.onIdleFunctions.push(func);
    }
    openTimeWarningModal() {
        this.idlerModal = this.dialog.open(IdlerComponent, {
        // height: 'auto',
        // width: 'auto',
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerService, deps: [{ token: i1$4.Idle }, { token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$4.Idle }, { type: i1.MatDialog }]; } });

class IdlerComponent {
    constructor(dialogRef, idlerService, uS) {
        this.dialogRef = dialogRef;
        this.idlerService = idlerService;
        this.uS = uS;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerComponent, deps: [{ token: i1.MatDialogRef }, { token: IdlerService }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: IdlerComponent, isStandalone: true, selector: "app-idler", ngImport: i0, template: "<div class=\"center h-100 p-16 text-center text-danger\" *ngIf=\"uS.secondsToHourMinSec(idlerService.timeLeft) as timeLeft\">\n  You will be logged out in {{timeLeft.hours?timeLeft.hours+'hrs':''}}\n  {{timeLeft.mins?timeLeft.mins+'min':''}} {{timeLeft.secs?timeLeft.secs+'s':''}}\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IdlerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-idler', standalone: true, imports: [NgIf], template: "<div class=\"center h-100 p-16 text-center text-danger\" *ngIf=\"uS.secondsToHourMinSec(idlerService.timeLeft) as timeLeft\">\n  You will be logged out in {{timeLeft.hours?timeLeft.hours+'hrs':''}}\n  {{timeLeft.mins?timeLeft.mins+'min':''}} {{timeLeft.secs?timeLeft.secs+'s':''}}\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: IdlerService }, { type: UtilityService }]; } });

class ModalHeaderComponent {
    constructor() { }
    ngOnInit() { }
    close() {
        this.dialogRef.close(this.onCloseValue);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ModalHeaderComponent, isStandalone: true, selector: "modal-header", inputs: { dialogRef: "dialogRef", header: "header", onCloseValue: "onCloseValue" }, ngImport: i0, template: "<div class=\"d-flex justify-content-between align-items-center custom-modal-header\">\n  <div class=\"text\" mat-dialog-title>{{header }}</div>\n  <app-btn icon=\"close\" type=\"clear\" (mclick)=\"close()\"></app-btn>\n</div>\n<ng-content></ng-content>", styles: [".custom-modal-header{border-bottom:1px solid #f2f2f2}.custom-modal-header .text{font-style:normal;font-weight:600;font-size:16px;line-height:18px;color:#333}\n"], dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal-header', standalone: true, imports: [MatDialogModule, BtnComponent], template: "<div class=\"d-flex justify-content-between align-items-center custom-modal-header\">\n  <div class=\"text\" mat-dialog-title>{{header }}</div>\n  <app-btn icon=\"close\" type=\"clear\" (mclick)=\"close()\"></app-btn>\n</div>\n<ng-content></ng-content>", styles: [".custom-modal-header{border-bottom:1px solid #f2f2f2}.custom-modal-header .text{font-style:normal;font-weight:600;font-size:16px;line-height:18px;color:#333}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { dialogRef: [{
                type: Input
            }], header: [{
                type: Input
            }], onCloseValue: [{
                type: Input
            }] } });

class ModalComponent {
    // public dialogRef: MatDialogRef<typeof this.tempRef>;
    // public dialogRef: MatDialogRef<ModalComponent>;
    constructor(uS) {
        this.uS = uS;
        this.showHeader = true;
        this.width = 'auto';
        this.height = 'auto';
        this.data = {};
        this.onClose = new EventEmitter();
        this.modalConfigMap = (config) => {
            return config;
        };
    }
    ngOnInit() { }
    open(...args) {
        const config = {
            width: this.uS.isMobile ? '100%' : this.width,
            height: this.height,
            autoFocus: false,
            maxHeight: '90vh',
            maxWidth: '90vw',
            panelClass: 'full-modal',
            disableClose: true,
        };
        // console.log(this.modalConfigMap(config));
        this.dialogRef = this.uS.dialogOpenerRef(this.tempRef, this.modalConfigMap(config));
        this.closedSub = this.dialogRef.afterClosed().subscribe((r) => {
            this.onClose.emit(r);
        });
    }
    close(data) {
        this.dialogRef?.close(data);
    }
    ngOnDestroy() {
        this.closedSub?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalComponent, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ModalComponent, isStandalone: true, selector: "modal-comp", inputs: { showHeader: "showHeader", header: "header", loading: "loading", width: "width", height: "height", data: "data" }, outputs: { onClose: "onClose" }, viewQueries: [{ propertyName: "tempRef", first: true, predicate: ["temp"], descendants: true }, { propertyName: "loaderRef", first: true, predicate: ["loader"], descendants: true }], ngImport: i0, template: "<ng-template #temp>\n  <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #loader>\n    <div class=\"h-100\" #cont>\n      <modal-header [header]=\"header\" *ngIf=\"showHeader\" [dialogRef]=\"dialogRef\"></modal-header>\n      <div   class=\"bod  \" [ngClass]=\"{'p-24': showHeader}\" >\n        <ng-content select=\"[body]\"></ng-content>\n      </div> \n    </div>\n  </loader> \n</ng-template>\n", styles: [".bod{height:calc(100% - 60px)}\n"], dependencies: [{ kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "component", type: ModalHeaderComponent, selector: "modal-header", inputs: ["dialogRef", "header", "onCloseValue"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal-comp', standalone: true, imports: [LoaderComponent, ModalHeaderComponent, NgClass, NgIf], template: "<ng-template #temp>\n  <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #loader>\n    <div class=\"h-100\" #cont>\n      <modal-header [header]=\"header\" *ngIf=\"showHeader\" [dialogRef]=\"dialogRef\"></modal-header>\n      <div   class=\"bod  \" [ngClass]=\"{'p-24': showHeader}\" >\n        <ng-content select=\"[body]\"></ng-content>\n      </div> \n    </div>\n  </loader> \n</ng-template>\n", styles: [".bod{height:calc(100% - 60px)}\n"] }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; }, propDecorators: { tempRef: [{
                type: ViewChild,
                args: ['temp']
            }], loaderRef: [{
                type: ViewChild,
                args: ['loader']
            }], showHeader: [{
                type: Input
            }], header: [{
                type: Input
            }], loading: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], data: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });

class ImportItemsComponent {
    constructor(uS) {
        this.uS = uS;
        this.header = 'Import Items';
        this.label = 'CSV file';
        this.acceptedTypes = ['.csv', '.xlsx', '.xls'];
    }
    ngOnInit() {
        if (!this.uploadFunc)
            throw 'An upload handler is required';
    }
    open() {
        this.modal.open();
    }
    close() {
        this.modal.close();
    }
    downloadTemplate() {
        this.uS.downloadFromLink(this.templatePath, `${this.label} upload template.csv`);
    }
    openFileDialog(loader) {
        const el = document.createElement('input');
        el.type = 'file';
        el.accept = this.acceptedTypes.join(',');
        el.click();
        el.onchange = (e) => {
            const file = e.target['files'][0];
            this.uploadFile(file, loader);
        };
    }
    async uploadFile(file, loader) {
        try {
            loader.loaders.resetLoaders();
            const l1 = loader.loaders.addLoader(), l2 = loader.loaders.addLoader();
            l1.startPl();
            loader.text = `<div class="text-primary" >Uploading file to server</div>`;
            if (!this.acceptedTypes.some((x) => file.name?.endsWith(x)))
                throw `File type is not supported`;
            this.uploadFunc(file).subscribe({
                next: (sub) => {
                    if (sub.progress)
                        sub.progress = Math.round(sub.progress);
                    console.log(sub);
                    // debugger;
                    if (l2.isLoading && sub.progress == 100) {
                        loader.stopLoader();
                        this.close();
                        this.uS.notify(`File has been uploaded.`);
                    }
                    if (l2.isLoading) {
                        loader.text = `<div class="text-primary" >Processing data</div>`;
                        loader.progress = sub.progress;
                    }
                    if (sub.uploaded) {
                        l2.startPl();
                        l1.stopPl();
                    }
                    else
                        loader.progress = sub.progress;
                },
                error: (e) => {
                    this.uS.notify(e, 0);
                    loader.stopLoader();
                },
            });
        }
        catch (error) {
            this.uS.notify(error, 0);
            loader.stopLoader();
        }
        // this.loading = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ImportItemsComponent, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ImportItemsComponent, isStandalone: true, selector: "import-items", inputs: { header: "header", templatePath: "templatePath", label: "label", uploadFunc: "uploadFunc" }, viewQueries: [{ propertyName: "modal", first: true, predicate: ModalComponent, descendants: true }], ngImport: i0, template: "<modal-comp width=\"50%\" [header]=\"header\">\n    <div class=\"\" body>\n        <div class=\"d-flex justify-content-center\">\n            <app-btn text=\"Download Template\" (mclick)=\"downloadTemplate()\" />\n        </div>\n        <div class=\"upload-case mt-24 p-40\" body>\n            <div class=\"text-center\">\n                <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #uploadLoader>\n                    <div class=\"row justify-content-center\" libDragDropFileUpload\n                        (fileDropped)=\"uploadFile($event[0],uploadLoader)\" #cont>\n                        <div class=\"col-lg-7\">\n                            <div class=\"icon\">\n                                <app-btn text=\"Select Document\" type=\"clear\" (click)=\"openFileDialog(uploadLoader)\" customIcon=\"fa fa-upload\" />\n                            </div>\n                            <div class=\"main\">\n                                <span class=\"text-underline pointer\" (click)=\"openFileDialog(uploadLoader)\">Select a CSV\n                                    file</span> to\n                                upload or drag\n                                and drop file, max size 50mb\n                            </div>\n                            <div class=\"sub\">\n                                must be in .csv or .xls format\n                            </div>\n                        </div>\n                    </div>\n                </loader>\n            </div>\n        </div>\n    </div>\n</modal-comp>", styles: [".upload-case{border:1px dashed var(--primary);border-radius:16px;padding:28px;margin-top:20px}.upload-case .icon{margin-top:30px}.upload-case .main{margin-top:20px;font-style:normal;font-weight:500;font-size:14px;line-height:21px;text-align:center;color:#333}.upload-case .sub{font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin-top:10px;color:#828282}\n"], dependencies: [{ kind: "component", type: ModalComponent, selector: "modal-comp", inputs: ["showHeader", "header", "loading", "width", "height", "data"], outputs: ["onClose"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "directive", type: DragDropFileUploadDirective, selector: "[libDragDropFileUpload]", outputs: ["fileDropped"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ImportItemsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'import-items', standalone: true, imports: [
                        ModalComponent,
                        BtnComponent,
                        LoaderComponent,
                        DragDropFileUploadDirective,
                    ], template: "<modal-comp width=\"50%\" [header]=\"header\">\n    <div class=\"\" body>\n        <div class=\"d-flex justify-content-center\">\n            <app-btn text=\"Download Template\" (mclick)=\"downloadTemplate()\" />\n        </div>\n        <div class=\"upload-case mt-24 p-40\" body>\n            <div class=\"text-center\">\n                <loader [loading]=\"loading\" [height]=\"cont.offsetHeight\" #uploadLoader>\n                    <div class=\"row justify-content-center\" libDragDropFileUpload\n                        (fileDropped)=\"uploadFile($event[0],uploadLoader)\" #cont>\n                        <div class=\"col-lg-7\">\n                            <div class=\"icon\">\n                                <app-btn text=\"Select Document\" type=\"clear\" (click)=\"openFileDialog(uploadLoader)\" customIcon=\"fa fa-upload\" />\n                            </div>\n                            <div class=\"main\">\n                                <span class=\"text-underline pointer\" (click)=\"openFileDialog(uploadLoader)\">Select a CSV\n                                    file</span> to\n                                upload or drag\n                                and drop file, max size 50mb\n                            </div>\n                            <div class=\"sub\">\n                                must be in .csv or .xls format\n                            </div>\n                        </div>\n                    </div>\n                </loader>\n            </div>\n        </div>\n    </div>\n</modal-comp>", styles: [".upload-case{border:1px dashed var(--primary);border-radius:16px;padding:28px;margin-top:20px}.upload-case .icon{margin-top:30px}.upload-case .main{margin-top:20px;font-style:normal;font-weight:500;font-size:14px;line-height:21px;text-align:center;color:#333}.upload-case .sub{font-style:normal;font-weight:400;font-size:14px;line-height:21px;margin-top:10px;color:#828282}\n"] }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; }, propDecorators: { modal: [{
                type: ViewChild,
                args: [ModalComponent]
            }], header: [{
                type: Input
            }], templatePath: [{
                type: Input
            }], label: [{
                type: Input
            }], uploadFunc: [{
                type: Input
            }] } });

class ListingFiltersComponent {
    set _form(v) {
        this.form = v;
        this.formClone = new FormGroup({});
        for (const key in v.controls) {
            if (Object.prototype.hasOwnProperty.call(v.controls, key)) {
                const element = v.controls[key];
                this.formClone.addControl(key, element);
            }
        }
    }
    constructor() { }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    ngOnDestroy() { }
    close(noAction) {
        // debugger
        if (noAction)
            return;
        this.modalRef.close();
        this.formClone?.reset(this.form?.value, { emitEvent: false });
    }
    clear() {
        this.formClone?.reset();
        this.form?.reset();
        this.modalRef.close(true);
    }
    search() {
        this.modalRef.close(true);
        this.form?.patchValue(this.formClone?.value);
    }
    refresh() {
        this.search();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ListingFiltersComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ListingFiltersComponent, isStandalone: true, selector: "lib-listing-filters", inputs: { _form: ["form", "_form"] }, viewQueries: [{ propertyName: "modalRef", first: true, predicate: ["modal"], descendants: true }], ngImport: i0, template: "<div class=\"row row-cols-auto listing-filters-btn\">\n    <app-btn text=\"Filters\" icon=\"filter\" type=\"outline-nm\" (mclick)=\"modal.open()\" />\n    <app-btn hideMobile  icon=\"refresh\" type=\"outline\" (mclick)=\"refresh()\" />\n</div>\n<modal-comp width=\"80%\" header=\"Filters\" #modal (onClose)=\"close($event)\">\n    <div class=\"\" body>\n        <ng-content body></ng-content>\n        <div class=\"mt-16 row row-cols-lg-auto justify-content-between form-grid\">\n            <div class=\"col order-1 order-lg-0\">\n                <app-btn text=\"Clear\" type=\"outline-nm\" (mclick)=\"clear()\" />\n            </div>\n            <div class=\"col\">\n                <app-btn text=\"Search\" [form]=\"formClone\" (mclick)=\"search()\" />\n            </div>\n        </div>\n    </div>\n\n</modal-comp>", styles: ["::ng-deep .listing-filters-btn button{border:1px solid #828282!important;color:#828282!important;text-align:start!important}::ng-deep .listing-filters-btn button:hover,::ng-deep .listing-filters-btn button:focus,::ng-deep .listing-filters-btn button:active{color:#fff!important;border-color:#fff!important}\n"], dependencies: [{ kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "directive", type: hideMobileDirective, selector: "[hideMobile]" }, { kind: "component", type: ModalComponent, selector: "modal-comp", inputs: ["showHeader", "header", "loading", "width", "height", "data"], outputs: ["onClose"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ListingFiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-listing-filters', standalone: true, imports: [
                        BtnComponent,
                        hideMobileDirective,
                        ModalComponent,
                    ], template: "<div class=\"row row-cols-auto listing-filters-btn\">\n    <app-btn text=\"Filters\" icon=\"filter\" type=\"outline-nm\" (mclick)=\"modal.open()\" />\n    <app-btn hideMobile  icon=\"refresh\" type=\"outline\" (mclick)=\"refresh()\" />\n</div>\n<modal-comp width=\"80%\" header=\"Filters\" #modal (onClose)=\"close($event)\">\n    <div class=\"\" body>\n        <ng-content body></ng-content>\n        <div class=\"mt-16 row row-cols-lg-auto justify-content-between form-grid\">\n            <div class=\"col order-1 order-lg-0\">\n                <app-btn text=\"Clear\" type=\"outline-nm\" (mclick)=\"clear()\" />\n            </div>\n            <div class=\"col\">\n                <app-btn text=\"Search\" [form]=\"formClone\" (mclick)=\"search()\" />\n            </div>\n        </div>\n    </div>\n\n</modal-comp>", styles: ["::ng-deep .listing-filters-btn button{border:1px solid #828282!important;color:#828282!important;text-align:start!important}::ng-deep .listing-filters-btn button:hover,::ng-deep .listing-filters-btn button:focus,::ng-deep .listing-filters-btn button:active{color:#fff!important;border-color:#fff!important}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { _form: [{
                type: Input,
                args: ['form']
            }], modalRef: [{
                type: ViewChild,
                args: ['modal']
            }] } });

class MiniModalComponent extends ModalComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MiniModalComponent, deps: [{ token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: MiniModalComponent, isStandalone: true, selector: "mini-modal", inputs: { height: "height", showFooter: "showFooter" }, usesInheritance: true, ngImport: i0, template: "<ng-template #temp>\n    <div class=\"mini-modal-content\">\n        <ng-content></ng-content>\n    </div>\n</ng-template>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MiniModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mini-modal', standalone: true, template: "<ng-template #temp>\n    <div class=\"mini-modal-content\">\n        <ng-content></ng-content>\n    </div>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: UtilityService }]; }, propDecorators: { height: [{
                type: Input
            }], showFooter: [{
                type: Input
            }] } });

class MiniSearchListComponent {
    constructor() {
        this.labelField = 'label';
        this.valueField = 'value';
        this._done = new EventEmitter();
        this.form = new FormGroup({
            query: new FormControl(null),
        });
    }
    done() {
        this._done.emit(this.selected);
        this.mmCRef.close();
    }
    /**
     *
     * @param parent This is the element requesting for the modal to be opened. It will be used to determine the position of the modal
     */
    open(parent) {
        this.mmCRef.open(parent);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MiniSearchListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: MiniSearchListComponent, isStandalone: true, selector: "mini-search-list", inputs: { list: "list", labelField: "labelField", valueField: "valueField", header: "header" }, outputs: { _done: "done" }, viewQueries: [{ propertyName: "mmCRef", first: true, predicate: MiniModalComponent, descendants: true }], ngImport: i0, template: "<!-- <mini-modal> -->\n    <div class=\"py-16 px-24 mini-search-list\">\n        <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"\">\n                {{header}}\n            </div>\n            <div class=\"\">\n                <app-btn [mini]=\"true\" [disabled]=\"selected==undefined||selected==null\" mclass=\"text-primary\" text=\"Done\" type=\"clear\"\n                    (mclick)=\"done()\"></app-btn>\n            </div>\n        </div>\n        <hr>\n        <app-input [form]=\"form\" name=\"query\" placeholder=\"Search\" #searchTag />\n        <mat-radio-group [(ngModel)]=\"selected\">\n            <ng-container *ngFor=\"let item of  list|filterArrayByString:searchTag.value:[labelField] \">\n                <div class=\"my-8\">\n                    <mat-radio-button [value]=\"item[valueField]\">{{item[labelField]}}</mat-radio-button>\n                </div>\n            </ng-container>\n        </mat-radio-group>\n    </div>\n<!-- </mini-modal> -->", styles: [".mini-search-list{width:250px}.mini-search-list hr{margin:12px 0}.mini-search-list .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}.mini-search-list .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}\n"], dependencies: [{ kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "component", type: InputBasicComponent, selector: "app-input", inputs: ["accept", "autocomplete", "autoPickValueField", "clearOnDisable", "cls", "colored", "checked", "contextData", "dashboardInput", "debug", "decimalPoints", "endLabel", "endLabelTooltip", "files", "form", "noFormat", "hide", "hint", "icon", "id", "inpCl", "label", "labelLink", "labelField", "labelType", "lblCl", "light", "loading", "max", "min", "mini", "multiple", "name", "optionFormatter", "optionsInitFunc", "placeholder", "prefix", "startField", "endField", "readonly", "required", "noPaste", "showEmptyOption", "showLabel", "showSeperateLabel", "showValidation", "showValidationMsg", "showValidationIcon", "small", "stacked", "suffix", "theme", "translateOptions", "valueField", "vms", "xsmall", "appearance", "validationKey", "disabled", "customSelectChangeAction", "options", "type", "mvalue"], outputs: ["mchange", "validityChecked", "mSelectOptionChange", "mContextChange"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1$5.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i1$5.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: FilterArrayByStringPipe, name: "filterArrayByString" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: MiniSearchListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mini-search-list', encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        BtnComponent,
                        InputBasicComponent,
                        MatRadioModule,
                        FormsModule,
                        NgFor,
                        FilterArrayByStringPipe,
                    ], template: "<!-- <mini-modal> -->\n    <div class=\"py-16 px-24 mini-search-list\">\n        <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"\">\n                {{header}}\n            </div>\n            <div class=\"\">\n                <app-btn [mini]=\"true\" [disabled]=\"selected==undefined||selected==null\" mclass=\"text-primary\" text=\"Done\" type=\"clear\"\n                    (mclick)=\"done()\"></app-btn>\n            </div>\n        </div>\n        <hr>\n        <app-input [form]=\"form\" name=\"query\" placeholder=\"Search\" #searchTag />\n        <mat-radio-group [(ngModel)]=\"selected\">\n            <ng-container *ngFor=\"let item of  list|filterArrayByString:searchTag.value:[labelField] \">\n                <div class=\"my-8\">\n                    <mat-radio-button [value]=\"item[valueField]\">{{item[labelField]}}</mat-radio-button>\n                </div>\n            </ng-container>\n        </mat-radio-group>\n    </div>\n<!-- </mini-modal> -->", styles: [".mini-search-list{width:250px}.mini-search-list hr{margin:12px 0}.mini-search-list .mat-mdc-form-field{width:100%;height:auto;margin-top:0;margin-bottom:0;background:#fafafa;border:1px solid #f2f2f2;border-radius:8px;padding:8px 12px;--mdc-shape-small: 0}.mini-search-list .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:#4f4f4f;font-weight:500;--mdc-typography-body1-font-size: 12px}\n"] }]
        }], propDecorators: { list: [{
                type: Input
            }], labelField: [{
                type: Input
            }], valueField: [{
                type: Input
            }], _done: [{
                type: Output,
                args: ['done']
            }], header: [{
                type: Input
            }], mmCRef: [{
                type: ViewChild,
                args: [MiniModalComponent]
            }] } });

class ModalFormTemplateComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalFormTemplateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ModalFormTemplateComponent, isStandalone: true, selector: "modal-form-template", inputs: { comp: "comp" }, viewQueries: [{ propertyName: "modal", first: true, predicate: ModalComponent, descendants: true }], ngImport: i0, template: "<modal-comp width=\"{{comp?.width}}\" header=\"{{comp?.isCreate?'New':comp?.isShow?'View':comp?.isEdit?'Edit':''}} {{comp?.header}}\" (onClose)=\"comp?.cancel()\" >\n    <div class=\"\" body>\n        <feedback-card #fc/>\n        <ng-container *ngIf=\"comp?.formFields?.length; else elseNoformSchemaTemplate\">\n            <form-generator [showSeparateLabels]=\"true\" [form]=\"comp?.form\"  [formSchema]=\"comp?.formFields\" [showSubmitBtn]=\"false\" />\n            <div class=\"\">\n                <ng-content select=\"[afterForm]\"></ng-content>\n            </div>\n        </ng-container>\n        <ng-template #elseNoformSchemaTemplate>\n            <ng-content></ng-content>\n        </ng-template>\n        <div class=\"w-100 mt-16\">\n            <div class=\"row row-cols-lg-auto justify-content-end\">\n                <div class=\"\">\n                    <app-btn text=\"Cancel\" type=\"outline-nm\" (mclick)=\"comp?.close()\" />\n                </div>\n                <div class=\"\">\n                    <app-btn text=\"Submit\" type=\"primary\" [form]=\"comp?.form\" (mclick)=\"comp?.submit(fc,subBtn)\" #subBtn />\n                </div>\n            </div>\n        </div>\n    </div>\n</modal-comp>", styles: [""], dependencies: [{ kind: "component", type: ModalComponent, selector: "modal-comp", inputs: ["showHeader", "header", "loading", "width", "height", "data"], outputs: ["onClose"] }, { kind: "component", type: FeedbackCardComponent, selector: "feedback-card", inputs: ["class", "message", "status"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: FormGeneratorComponent, selector: "form-generator", inputs: ["keyField", "submitFunc", "submitBtnText", "submitSuccessText", "showSubmitBtn", "isShow", "gridStyle", "gridMDStyle", "gridLGStyle", "gridXXLStyle", "useLoader", "loading", "showSeparateLabels", "hasResponse", "hideResponseCard", "responseHeader", "form", "submitForm", "formSchema"], outputs: ["onSubmit", "submissionResponse"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalFormTemplateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal-form-template', standalone: true, imports: [
                        ModalComponent,
                        FeedbackCardComponent,
                        NgIf,
                        FormGeneratorComponent,
                        BtnComponent,
                    ], template: "<modal-comp width=\"{{comp?.width}}\" header=\"{{comp?.isCreate?'New':comp?.isShow?'View':comp?.isEdit?'Edit':''}} {{comp?.header}}\" (onClose)=\"comp?.cancel()\" >\n    <div class=\"\" body>\n        <feedback-card #fc/>\n        <ng-container *ngIf=\"comp?.formFields?.length; else elseNoformSchemaTemplate\">\n            <form-generator [showSeparateLabels]=\"true\" [form]=\"comp?.form\"  [formSchema]=\"comp?.formFields\" [showSubmitBtn]=\"false\" />\n            <div class=\"\">\n                <ng-content select=\"[afterForm]\"></ng-content>\n            </div>\n        </ng-container>\n        <ng-template #elseNoformSchemaTemplate>\n            <ng-content></ng-content>\n        </ng-template>\n        <div class=\"w-100 mt-16\">\n            <div class=\"row row-cols-lg-auto justify-content-end\">\n                <div class=\"\">\n                    <app-btn text=\"Cancel\" type=\"outline-nm\" (mclick)=\"comp?.close()\" />\n                </div>\n                <div class=\"\">\n                    <app-btn text=\"Submit\" type=\"primary\" [form]=\"comp?.form\" (mclick)=\"comp?.submit(fc,subBtn)\" #subBtn />\n                </div>\n            </div>\n        </div>\n    </div>\n</modal-comp>" }]
        }], propDecorators: { comp: [{
                type: Input
            }], modal: [{
                type: ViewChild,
                args: [ModalComponent]
            }] } });

class ModalFormComponent {
    constructor() {
        this.width = '50%';
        this.onSaved = new EventEmitter();
    }
    ngAfterViewInit() {
        // if (this.modal) Object.assign(this.modal, this);
    }
    async openAsEdit(item) {
        this.prepareOpen(EPageType.editPage);
        await this.open(item);
        this.loading = false;
    }
    async openAsCreate(defaultData) {
        // debugger;
        this.prepareOpen(EPageType.createPage);
        await this.open(defaultData);
        this.loading = false;
    }
    async openAsView(item) {
        this.prepareOpen(EPageType.viewPage);
        await this.open(item);
        this.form.disable();
        this.loading = false;
    }
    prepareOpen(pageType) {
        this.loading = true;
        this.pageType = pageType;
        this._openForm();
    }
    _openForm() {
        this.modal.modal.open();
    }
    cancel() {
        this.form?.reset();
    }
    close() {
        this.modal.modal?.close();
        this.cancel();
    }
    async submit(fc, btn) {
        (btn ? btn : this).loading = true;
        try {
            fc?.reset();
            await this.submitFunction();
            this.onSaved.emit();
            this.close();
        }
        catch (error) {
            fc?.setErrorMessage(error);
        }
        (btn ? btn : this).loading = false;
    }
    get isCreate() {
        return this.pageType == EPageType.createPage;
    }
    get isEdit() {
        return this.pageType == EPageType.editPage;
    }
    get isShow() {
        return this.pageType == EPageType.viewPage;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ModalFormComponent, isStandalone: true, selector: "modal-form", outputs: { onSaved: "onSaved" }, viewQueries: [{ propertyName: "modal", first: true, predicate: ModalFormTemplateComponent, descendants: true }], ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ModalFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal-form', standalone: true, template: "" }]
        }], propDecorators: { onSaved: [{
                type: Output
            }], modal: [{
                type: ViewChild,
                args: [ModalFormTemplateComponent]
            }] } });

class NumberItemsSelectedComponent {
    constructor() {
        this.useEdit = false;
        this._onDelete = new EventEmitter();
        this._onEdit = new EventEmitter();
    }
    onDelete() {
        this._onDelete.emit(true);
    }
    onEdit() {
        this._onEdit.emit(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberItemsSelectedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NumberItemsSelectedComponent, isStandalone: true, selector: "number-items-selected", inputs: { count: "count", useEdit: "useEdit" }, outputs: { _onDelete: "onDelete", _onEdit: "onEdit" }, ngImport: i0, template: "<div class=\"case d-flex justify-content-between\">\n    <div class=\"count\">\n        {{count}} Selected\n    </div>\n    <div class=\"delete-btn\">\n        <app-btn icon=\"delete\" type=\"clear\" (mclick)=\"onDelete()\"></app-btn>\n    </div> \n    <div class=\"delete-btn\" *ngIf=\"useEdit&&count==1\">\n        <app-btn icon=\"edit\" type=\"clear\" (mclick)=\"onEdit()\"></app-btn>\n    </div> \n</div>", styles: [".case{background:#fafafa;min-width:136px;height:40px;border:1px solid #f2f2f2;border-radius:8px;font-weight:600;font-size:12px;line-height:18px;display:flex;align-items:center;color:#4f4f4f;padding:12px 16px}.case .count{font-weight:600;font-size:12px;line-height:18px;display:flex;align-items:center;color:#4f4f4f}.case .delete-btn ::ng-deep .btn{padding:0}.case .delete-btn ::ng-deep .svg-icon,.case .delete-btn ::ng-deep .fa{color:#bdbdbd}\n"], dependencies: [{ kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberItemsSelectedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'number-items-selected', standalone: true, imports: [BtnComponent, NgIf], template: "<div class=\"case d-flex justify-content-between\">\n    <div class=\"count\">\n        {{count}} Selected\n    </div>\n    <div class=\"delete-btn\">\n        <app-btn icon=\"delete\" type=\"clear\" (mclick)=\"onDelete()\"></app-btn>\n    </div> \n    <div class=\"delete-btn\" *ngIf=\"useEdit&&count==1\">\n        <app-btn icon=\"edit\" type=\"clear\" (mclick)=\"onEdit()\"></app-btn>\n    </div> \n</div>", styles: [".case{background:#fafafa;min-width:136px;height:40px;border:1px solid #f2f2f2;border-radius:8px;font-weight:600;font-size:12px;line-height:18px;display:flex;align-items:center;color:#4f4f4f;padding:12px 16px}.case .count{font-weight:600;font-size:12px;line-height:18px;display:flex;align-items:center;color:#4f4f4f}.case .delete-btn ::ng-deep .btn{padding:0}.case .delete-btn ::ng-deep .svg-icon,.case .delete-btn ::ng-deep .fa{color:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { count: [{
                type: Input
            }], useEdit: [{
                type: Input
            }], _onDelete: [{
                type: Output,
                args: ['onDelete']
            }], _onEdit: [{
                type: Output,
                args: ['onEdit']
            }] } });

class PageTemplateComponent {
    constructor(route) {
        this.route = route;
        this.pageType = this.route?.snapshot?.data['type'];
    }
    setAsIndex() {
        this.pageType = EPageType.indexPage;
    }
    setAsClone() {
        this.pageType = EPageType.clonePage;
    }
    setAsCreate() {
        this.pageType = EPageType.createPage;
    }
    setAsEdit() {
        this.pageType = EPageType.editPage;
    }
    setAsShow() {
        this.pageType = EPageType.viewPage;
    }
    get isClone() {
        return (this.route?.snapshot?.data['type'] === EPageType.clonePage ||
            this.pageType === EPageType.clonePage);
    }
    get isCreate() {
        return (this.route?.snapshot?.data['type'] === EPageType.createPage ||
            this.pageType === EPageType.createPage);
    }
    get isEdit() {
        return (this.route?.snapshot?.data['type'] === EPageType.editPage ||
            this.pageType === EPageType.editPage);
    }
    get isIndex() {
        return (this.route?.snapshot?.data['type'] === EPageType.indexPage ||
            this.pageType === EPageType.indexPage);
    }
    get isShow() {
        return (this.route?.snapshot?.data['type'] === EPageType.viewPage ||
            this.pageType === EPageType.viewPage);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PageTemplateComponent, deps: [{ token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: PageTemplateComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PageTemplateComponent, decorators: [{
            type: Component,
            args: [{
                    template: ``,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }]; } });

class ProgressBarLargeComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ProgressBarLargeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ProgressBarLargeComponent, isStandalone: true, selector: "progress-bar-large", inputs: { value: "value", startLabel: "startLabel", endLabel: "endLabel", borderClass: "borderClass" }, ngImport: i0, template: "<div class=\"position-relative overflow-hidden {{borderClass}}\">\n    <div class=\"row row-cols-auto justify-content-between\">\n        <div>\n            <div class=\"startLabel\">\n                {{startLabel}}\n            </div>\n        </div>\n        <div>\n            <div class=\"endLabel\">\n                {{endLabel}}\n            </div>\n        </div>\n    </div>\n    <mat-progress-bar mode=\"determinate\" class=\"_prog\" [value]=\"value\">\n    </mat-progress-bar>\n</div>", styles: [".startLabel,.endLabel{position:relative;height:50px;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:#333;z-index:1}.startLabel{padding-left:23px}.endLabel{padding-right:23px}::ng-deep ._prog{position:absolute;top:0;height:100%;width:100%;left:0;right:0;z-index:0}::ng-deep ._prog .mdc-linear-progress__buffer-bar{background-color:#fafafa}::ng-deep ._prog .mdc-linear-progress__bar-inner{border-color:#fff0;height:100%;background-color:#6fcf97}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1$3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ProgressBarLargeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-large', standalone: true, imports: [CommonModule, MatProgressBarModule], template: "<div class=\"position-relative overflow-hidden {{borderClass}}\">\n    <div class=\"row row-cols-auto justify-content-between\">\n        <div>\n            <div class=\"startLabel\">\n                {{startLabel}}\n            </div>\n        </div>\n        <div>\n            <div class=\"endLabel\">\n                {{endLabel}}\n            </div>\n        </div>\n    </div>\n    <mat-progress-bar mode=\"determinate\" class=\"_prog\" [value]=\"value\">\n    </mat-progress-bar>\n</div>", styles: [".startLabel,.endLabel{position:relative;height:50px;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:#333;z-index:1}.startLabel{padding-left:23px}.endLabel{padding-right:23px}::ng-deep ._prog{position:absolute;top:0;height:100%;width:100%;left:0;right:0;z-index:0}::ng-deep ._prog .mdc-linear-progress__buffer-bar{background-color:#fafafa}::ng-deep ._prog .mdc-linear-progress__bar-inner{border-color:#fff0;height:100%;background-color:#6fcf97}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], startLabel: [{
                type: Input
            }], endLabel: [{
                type: Input
            }], borderClass: [{
                type: Input
            }] } });

class TableHttpsComponent extends TablePlainComponent {
    set _queryData(v) {
        this.queryData = v;
    }
    constructor(route, uS) {
        super(uS);
        this.route = route;
        this.uS = uS;
        this.pageNumber = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.fetchedData = new BehaviorSubject(null);
        this.form2 = new FormGroup({
            page: new FormControl(1),
            sortByField: new FormControl(),
            sortByDirection: new FormControl(this.orderDirection == 'asc'
                ? 'ASC'
                : this.orderDirection == 'desc'
                    ? 'DESC'
                    : ''),
            limit: new FormControl(),
        });
        this.searchTrigger = new ReplaySubject();
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.queryData = this.queryData || {};
        // this.queryData = this.queryData || this.route.snapshot.queryParams;
        // debugger;
        this.paginator.page.subscribe((r) => {
            this.form2.patchValue({
                page: r.pageIndex + 1,
                limit: r.pageSize,
            });
        });
        this.sort?.sortChange.subscribe((r) => {
            this.form2.patchValue({
                sortByDirection: r.direction,
                sortByField: r.active,
            });
        });
        // this.searchTrigger.subscribe(r=>{
        //   console.log(r)
        // })
        this.filteredAndPagedResults = merge(this.form2.valueChanges, this.searchTrigger).pipe(startWith({}), filter(() => !!this.observableFunc), switchMap(() => {
            this.isLoadingResults = true;
            const queryData = this.queryData;
            const pageValues = this.form2.value;
            if (!pageValues.limit)
                pageValues.limit = this.paginator?.pageSize || this.pageSize;
            this.allQuery = {
                ...queryData,
                ...pageValues,
            };
            // debugger;
            return this.observableFunc(this.allQuery);
        }), catchError((e) => of(null)), tap((r) => this.selection.clear()), map((data) => {
            // Flip flag to show that loading has finished.
            // debugger;
            // debugger;
            console.log(data);
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data?.total;
            this.data = data?.data || [];
            this.fetchedData.next(this.data);
            // debugger
            return data?.data;
        }), catchError((e) => {
            console.error(e);
            this.isLoadingResults = false;
            this.isRateLimitReached = true;
            return of([]);
        }));
        this.filteredAndPagedResults.subscribe();
    }
    search(query) {
        this.queryData = query || this.queryData;
        // this.form.controls.pageNumber.patchValue(0);
        this.resetPaging();
        this.searchTrigger.next(true);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection?.selected?.length;
        const numRows = this.data?.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.data);
    }
    resetPaging() {
        this.paginator.pageIndex = 0;
        this.form2.patchValue({ page: 1 }, { emitEvent: false });
    }
    reset() { }
    refresh() {
        this.search();
    }
    setData(d) {
        this.data = cloneDeep(d);
        // this.table.renderRows();
    }
    increasePageSize() {
        // debugger
        if (this.resultsLength <= this.paginator.pageSize)
            return;
        this.paginator._changePageSize(this.paginator.pageSize + this.pageSizeIncrementor);
    }
    resetPageSize() {
        this.paginator._changePageSize(this.pageSize);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TableHttpsComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: TableHttpsComponent, isStandalone: true, selector: "table-https", inputs: { header: "header", noDataSubTitle: "noDataSubTitle", headerBtns: "headerBtns", _queryData: ["queryData", "_queryData"], observableFunc: "observableFunc", pageNumber: "pageNumber" }, viewQueries: [{ propertyName: "table", first: true, predicate: ["table"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"h-100 \">\n  <div class=\"d-flex align-items-center justify-content-between mb-3\" *ngIf=\"header||headerBtns\">\n    <div class=\"title\">\n      {{header}}\n    </div>\n  </div>\n  <loader class=\"h-100\" [loading]=\"isLoadingResults\" [height]=\"container?.offsetHeight+100\"\n    [hasContent]=\"!!data?.length\">\n    <div class=\"table-container\" content #container>\n      <div class=\"overflow-auto \">\n        <table mat-table [dataSource]=\"data\" class=\"w-100 d-table\" [ngClass]=\"{smallerFonts,nowrap,centerCells,curvy}\"\n          #table>\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"mselect\" sticky>\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-checkbox class=\"circle-checkbox\" (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n              </mat-checkbox>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n              <mat-checkbox class=\"circle-checkbox\" (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                [aria-label]=\"checkboxLabel(row)\">\n              </mat-checkbox>\n            </td>\n          </ng-container>\n\n          <!-- COLUMNS -->\n          <ng-container *ngFor=\"let col of displayedColumns; let i = index\">\n            <ng-container [ngSwitch]=\"col.type\">\n              <!-- IMAGE -->\n              <ng-container *ngSwitchCase=\"'image'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t|titlecase}}\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <img [imageLoader]=\"row[col.f]\" alt=\"{{col.f}} image\" class=\"{{col.itemClass}}\">\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- Button -->\n              <ng-container *ngSwitchCase=\"'button'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t|titlecase}}\n                </th>\n                <td mat-cell *matCellDef=\"let row\" class=\"btn-cell\">\n                  <app-btn [icon]=\"col.btn?.icon\" [type]=\"col.btn?.type\" (mclick)=\"clickBtn(col,row)\"\n                    [help]=\"col.btn?.help\" [text]=\"col.btn?.label\" [loading]=\"col.btn?.loading\"\n                    [iconBtn]=\"col.btn?.iconBtn\" mclass=\"w-auto\" [disabled]=\"col.btn?.disabled || col.btn?.loading\">\n                  </app-btn>\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- ACTION COLUMNS -->\n              <ng-container [sticky]=\"col.isSticky\" [stickyEnd]=\"col.isStickyEnd\" matColumnDef=\"{{ col.f|toAny }}\"\n                *ngSwitchCase=\"'btns'\">\n                <th mat-header-cell *matHeaderCellDef class=\"btn-cell\">\n                  {{ col.t | titlecase }}\n                </th>\n                <td mat-cell *matCellDef=\"let row;let i=index\" class=\"btn-cell\">\n                  <div class=\"d-flex col-md-auto col-sm-auto \">\n\n                    <div class=\"mx-2\" *ngFor=\"let button of col.buttons\">\n                      <app-btn [icon]=\"button.icon\" [help]=\"button.help\" [showHelpIcon]=\"button.showHelpIcon\"\n                        [type]=\"button.type\" [group]=\"button.group\" [iconBtn]=\"true\" mclass=\"w-auto\"\n                        (mclick)=\"button.action(row,i)\"></app-btn>\n                    </div>\n\n\n\n                  </div>\n                </td>\n              </ng-container>\n\n              <!-- Sub Table -->\n              <ng-container [sticky]=\"col.isSticky\" *ngSwitchCase=\"'table'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t|titlecase}}\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <app-btn [icon]=\"col.btn?.icon\" type=\"dark\" (mclick)=\"col.action ? col.action(row, col.f) : null\"\n                    [help]=\"col.subTable|tableToString:row| async\" [showHelpIcon]=\"false\" [iconBtn]=\"true\"\n                    mclass=\"w-auto\">\n                  </app-btn>\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- ASSIGN FROM LIST -->\n              <ng-container [sticky]=\"col.isSticky\" matColumnDef=\"{{ col.f|toAny }}\" *ngSwitchCase=\"'assign-from-list'\">\n                <th mat-header-cell *matHeaderCellDef disableClear>\n                  {{formatColumnHeaders?(col.t|titlecase):col.t }}</th>\n                <td mat-cell *matCellDef=\"let row;let rowIndex = index\">\n                  <ng-container *ngIf=\"(row|getColFormatted:col)|async as val; else elseTemplate\">\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"val\" #ele [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"val|valueOrX\">\n                    </div>\n                  </ng-container>\n                  <ng-template #elseTemplate>\n                    <div [matMenuTriggerFor]=\"assignList\" class=\"text-primary pointer\" \n                      #assignTag>\n                      Assign\n                    </div>\n                    <mat-menu #assignList=\"matMenu\" class=\"\">\n                      <mini-search-list (click)=\"$event.stopPropagation()\" #mslTag (done)=\"col.onSelected($event,row,rowIndex)\"\n                        [list]=\"(col.listingFunction|functionCaller1:row)|async\"\n                        [header]=\"formatColumnHeaders?(col.t|titlecase):col.t\" />\n                    </mat-menu>\n                  </ng-template>\n\n\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- DEFAULT -->\n              <ng-container [sticky]=\"col.isSticky\" matColumnDef=\"{{ col.f|toAny }}\" *ngSwitchDefault>\n                <th mat-header-cell *matHeaderCellDef disableClear>\n                  {{formatColumnHeaders?(col.t|titlecase):col.t }}</th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <ng-container *ngIf=\"col.routeFormatter; else elseNoRouteTemplate\">\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </div>\n                  </ng-container>\n                  <ng-template #elseNoRouteTemplate>\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </div>\n                  </ng-template>\n\n\n                </td>\n              </ng-container>\n              <!--// -->\n            </ng-container>\n          </ng-container>\n          <!--// -->\n          <!-- OPTIONS COLUMN -->\n          <ng-container matColumnDef=\"option\" *ngIf=\"options?.length>0||optionsMap\" stickyEnd>\n            <th mat-header-cell class=\"lastStickyItem w-auto\" *matHeaderCellDef disableClear></th>\n            <td mat-cell class=\"lastStickyItem w-auto\" *matCellDef=\"let row\">\n              <ng-container *ngIf=\"optionsMap; else elseOptionsTemplate\">\n                <ng-container *ngIf=\"(optionsMap|functionCaller1:row) as _rowoptions\">\n                  <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                    <mat-icon>more_vert</mat-icon>\n                  </app-btn>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item *ngFor=\"let option of _rowoptions\" (click)=\"option.action(row)\">\n                      {{optionLabeller|functionCaller2:option:row}}\n                    </button>\n                  </mat-menu>\n                </ng-container>\n              </ng-container>\n              <ng-template #elseOptionsTemplate>\n                <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                  <mat-icon>more_vert</mat-icon>\n                </app-btn>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item *ngFor=\"let option of options\" (click)=\"option.action(row)\">\n                    {{optionLabeller|functionCaller2:option:row}}\n                  </button>\n                </mat-menu>\n              </ng-template>\n            </td>\n          </ng-container>\n          <!--// -->\n\n\n\n          <ng-container *ngIf=\"displayedColumns|getRawFields:(!!options?.length||!!optionsMap):useSelection as dcols\">\n            <tr mat-header-row *matHeaderRowDef=\"dcols\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: dcols\"\n              [ngClass]=\"{pointer:showRowPointer,selected:selection.isSelected(row),disabled:isDisabledFunc?isDisabledFunc(row):false}\"\n              [matTooltip]=\"isDisabledFunc&&isDisabledFunc(row)?'Disabled':null\" (click)=\"rowClick(row)\"></tr>\n            <tr class=\"mat-row\" *matNoDataRow>\n              <td class=\"mat-cell\" [attr.colspan]=\"dcols?.length||1\">{{noItemTxt}}</td>\n            </tr>\n          </ng-container>\n        </table>\n      </div>\n\n\n      <mat-paginator mresponsiveness [hideMobile]=\"true\" [length]=\"resultsLength\" [pageSizeOptions]=\"pageSizeOptions\"\n        [pageSize]=\"pageSize\" showFirstLastButtons />\n\n      <div class=\"  \" mresponsiveness [hideDesktop]=\"true\">\n        <div class=\" d-flex justify-content-center\">\n          <app-btn text=\"See more\" type=\"clear-pm\" (mclick)=\"increasePageSize()\"\n            *ngIf=\"resultsLength>paginator?.pageSize;else showLess\" />\n          <ng-template #showLess>\n            <app-btn text=\"See less\" type=\"clear-pm\" (mclick)=\"resetPageSize()\" />\n          </ng-template>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"h-100 center text-center noContent\" noContent>\n      <div class=\"\">\n        <div class=\"title\"> No data\n        </div>\n        <div class=\"sub-title\">\n          {{noDataSubTitle}}\n        </div>\n      </div>\n    </div>\n  </loader>\n</div>", styles: ["::ng-deep mat-paginator .mat-mdc-form-field{width:100px;height:25px;margin-top:0;margin-bottom:0;background-color:transparent!important;border:none}::ng-deep mat-paginator .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:var(--primary)}::ng-deep .mdc-data-table__header-cell{color:#333!important;background-color:transparent!important;font-style:normal;font-weight:600;font-size:14px;line-height:19px}::ng-deep mat-paginator{border-radius:0 0 16px 16px}::ng-deep .mat-mdc-table{background:rgba(255,255,255,0)}::ng-deep .mat-mdc-table .mat-mdc-row:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}::ng-deep .mat-mdc-table .mat-mdc-row.selected:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row.selected:hover{background-color:#f0f6ff}::ng-deep th.mat-mdc-table-sticky,::ng-deep td.mat-mdc-table-sticky{background-color:#fff!important}::ng-deep .colour{height:15px;width:15px;display:inline-block;border-radius:5px}::ng-deep .centerCells .mat-sort-header-container{justify-content:center}::ng-deep .default.colour{background-color:#545454}::ng-deep .btn-cell{width:1%}::ng-deep .mat-sort-header-container{height:40px}.mat-header-cell{font-weight:600;font-size:14px;line-height:21px}.smallerFonts td,.smallerFonts th{font-size:.7rem}.nowrap td,.nowrap th{white-space:nowrap;text-align:left;padding:0 24px;border-radius:16px}.nowrap td{border-radius:0}:host ::ng-deep input[type=checkbox]:not(.form-control){border:1px solid rgba(80,78,245,.3019607843)}.table tr td:hover{color:unset!important;text-decoration:unset;cursor:unset}tr.mat-header-row{height:auto}.centerCells td{text-align:center}.curvy tr{border-radius:0 10px}.title{font-style:normal;font-weight:600;font-size:24px;line-height:29px;color:#333}.table-container{background:#ffffff;border:1px solid #e0e0e0;box-shadow:none;border-radius:16px}.table-container .mat-paginator,.table-container .mat-table{background:transparent}.mat-header-cell{color:#333;background-color:transparent}.cell.notLink:hover{color:inherit}.cell{text-overflow:ellipsis;display:block;white-space:nowrap;overflow:hidden;font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#333}.noContent .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:#266dd3}.noContent .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;width:206px;color:#828282}.table{border:1px solid #f2f2f2;border-radius:16px}.selected{background:#f0f6ff;background-color:#f0f6ff}.disabled .cell{font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#bdbdbd}.lastStickyItem{padding:0!important;background-image:linear-gradient(270deg,rgb(255,255,255),rgba(255,255,255,.7490196078))!important;border-radius:0!important}th.lastStickyItem{background:transparent!important}.link{color:var(--primary)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2$3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2$3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2$3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2$3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2$3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2$3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2$3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2$3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2$3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2$3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i2$3.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i6$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: ImageLoaderDirective, selector: "[imageLoader]", inputs: ["imageLoader", "imgType"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i6.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i6.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i6.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "component", type: MiniSearchListComponent, selector: "mini-search-list", inputs: ["list", "labelField", "valueField", "header"], outputs: ["done"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i7$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i8$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "directive", type: ResponsivenessDirective, selector: "[mresponsiveness]", inputs: ["mobileClass", "desktopClass", "hideMobile", "hideDesktop"] }, { kind: "directive", type: hideMobileDirective, selector: "[hideMobile]" }, { kind: "directive", type: hideDesktopDirective, selector: "[hideDesktop]" }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: TitleCasePipe, name: "titlecase" }, { kind: "pipe", type: GetColFormattedPipe, name: "getColFormatted" }, { kind: "pipe", type: GetRawFieldsPipe, name: "getRawFields" }, { kind: "pipe", type: TableToStringPipe, name: "tableToString" }, { kind: "pipe", type: FunctionCaller1, name: "functionCaller1" }, { kind: "pipe", type: FunctionCaller2, name: "functionCaller2" }, { kind: "pipe", type: ToAnyPipe, name: "toAny" }, { kind: "pipe", type: ValueOrXPipe, name: "valueOrX" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TableHttpsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'table-https', standalone: true, imports: [
                        NgIf,
                        LoaderComponent,
                        MatTableModule,
                        NgClass,
                        MatCheckboxModule,
                        NgFor,
                        NgSwitch,
                        NgSwitchCase,
                        ImageLoaderDirective,
                        BtnComponent,
                        MatTooltipModule,
                        MatMenuModule,
                        MiniSearchListComponent,
                        NgSwitchDefault,
                        MatIconModule,
                        MatPaginatorModule,
                        ResponsivenessDirective,
                        hideMobileDirective,
                        hideDesktopDirective,
                        AsyncPipe,
                        TitleCasePipe,
                        GetColFormattedPipe,
                        GetRawFieldsPipe,
                        TableToStringPipe,
                        FunctionCaller1,
                        FunctionCaller2,
                        ToAnyPipe,
                        ValueOrXPipe,
                    ], template: "<div class=\"h-100 \">\n  <div class=\"d-flex align-items-center justify-content-between mb-3\" *ngIf=\"header||headerBtns\">\n    <div class=\"title\">\n      {{header}}\n    </div>\n  </div>\n  <loader class=\"h-100\" [loading]=\"isLoadingResults\" [height]=\"container?.offsetHeight+100\"\n    [hasContent]=\"!!data?.length\">\n    <div class=\"table-container\" content #container>\n      <div class=\"overflow-auto \">\n        <table mat-table [dataSource]=\"data\" class=\"w-100 d-table\" [ngClass]=\"{smallerFonts,nowrap,centerCells,curvy}\"\n          #table>\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"mselect\" sticky>\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-checkbox class=\"circle-checkbox\" (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n              </mat-checkbox>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n              <mat-checkbox class=\"circle-checkbox\" (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                [aria-label]=\"checkboxLabel(row)\">\n              </mat-checkbox>\n            </td>\n          </ng-container>\n\n          <!-- COLUMNS -->\n          <ng-container *ngFor=\"let col of displayedColumns; let i = index\">\n            <ng-container [ngSwitch]=\"col.type\">\n              <!-- IMAGE -->\n              <ng-container *ngSwitchCase=\"'image'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t|titlecase}}\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <img [imageLoader]=\"row[col.f]\" alt=\"{{col.f}} image\" class=\"{{col.itemClass}}\">\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- Button -->\n              <ng-container *ngSwitchCase=\"'button'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t|titlecase}}\n                </th>\n                <td mat-cell *matCellDef=\"let row\" class=\"btn-cell\">\n                  <app-btn [icon]=\"col.btn?.icon\" [type]=\"col.btn?.type\" (mclick)=\"clickBtn(col,row)\"\n                    [help]=\"col.btn?.help\" [text]=\"col.btn?.label\" [loading]=\"col.btn?.loading\"\n                    [iconBtn]=\"col.btn?.iconBtn\" mclass=\"w-auto\" [disabled]=\"col.btn?.disabled || col.btn?.loading\">\n                  </app-btn>\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- ACTION COLUMNS -->\n              <ng-container [sticky]=\"col.isSticky\" [stickyEnd]=\"col.isStickyEnd\" matColumnDef=\"{{ col.f|toAny }}\"\n                *ngSwitchCase=\"'btns'\">\n                <th mat-header-cell *matHeaderCellDef class=\"btn-cell\">\n                  {{ col.t | titlecase }}\n                </th>\n                <td mat-cell *matCellDef=\"let row;let i=index\" class=\"btn-cell\">\n                  <div class=\"d-flex col-md-auto col-sm-auto \">\n\n                    <div class=\"mx-2\" *ngFor=\"let button of col.buttons\">\n                      <app-btn [icon]=\"button.icon\" [help]=\"button.help\" [showHelpIcon]=\"button.showHelpIcon\"\n                        [type]=\"button.type\" [group]=\"button.group\" [iconBtn]=\"true\" mclass=\"w-auto\"\n                        (mclick)=\"button.action(row,i)\"></app-btn>\n                    </div>\n\n\n\n                  </div>\n                </td>\n              </ng-container>\n\n              <!-- Sub Table -->\n              <ng-container [sticky]=\"col.isSticky\" *ngSwitchCase=\"'table'\" matColumnDef=\"{{ col.f|toAny }}\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ col.t|titlecase}}\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <app-btn [icon]=\"col.btn?.icon\" type=\"dark\" (mclick)=\"col.action ? col.action(row, col.f) : null\"\n                    [help]=\"col.subTable|tableToString:row| async\" [showHelpIcon]=\"false\" [iconBtn]=\"true\"\n                    mclass=\"w-auto\">\n                  </app-btn>\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- ASSIGN FROM LIST -->\n              <ng-container [sticky]=\"col.isSticky\" matColumnDef=\"{{ col.f|toAny }}\" *ngSwitchCase=\"'assign-from-list'\">\n                <th mat-header-cell *matHeaderCellDef disableClear>\n                  {{formatColumnHeaders?(col.t|titlecase):col.t }}</th>\n                <td mat-cell *matCellDef=\"let row;let rowIndex = index\">\n                  <ng-container *ngIf=\"(row|getColFormatted:col)|async as val; else elseTemplate\">\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"val\" #ele [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"val|valueOrX\">\n                    </div>\n                  </ng-container>\n                  <ng-template #elseTemplate>\n                    <div [matMenuTriggerFor]=\"assignList\" class=\"text-primary pointer\" \n                      #assignTag>\n                      Assign\n                    </div>\n                    <mat-menu #assignList=\"matMenu\" class=\"\">\n                      <mini-search-list (click)=\"$event.stopPropagation()\" #mslTag (done)=\"col.onSelected($event,row,rowIndex)\"\n                        [list]=\"(col.listingFunction|functionCaller1:row)|async\"\n                        [header]=\"formatColumnHeaders?(col.t|titlecase):col.t\" />\n                    </mat-menu>\n                  </ng-template>\n\n\n                </td>\n              </ng-container>\n              <!--// -->\n\n              <!-- DEFAULT -->\n              <ng-container [sticky]=\"col.isSticky\" matColumnDef=\"{{ col.f|toAny }}\" *ngSwitchDefault>\n                <th mat-header-cell *matHeaderCellDef disableClear>\n                  {{formatColumnHeaders?(col.t|titlecase):col.t }}</th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <ng-container *ngIf=\"col.routeFormatter; else elseNoRouteTemplate\">\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </div>\n                  </ng-container>\n                  <ng-template #elseNoRouteTemplate>\n                    <div class=\"cell {{col.itemClassFunc|functionCaller1:row}} \"\n                      [ngClass]=\"{pointer:col.action,link:col.action}\" (click)=\"col.action?col.action(row,col.f):null\"\n                      [matTooltip]=\"(row|getColFormatted:col)|async\" #ele\n                      [matTooltipDisabled]=\"ele.scrollWidth<=ele.offsetWidth\"\n                      [innerHTML]=\"((row|getColFormatted:col)|async)|valueOrX\">\n                    </div>\n                  </ng-template>\n\n\n                </td>\n              </ng-container>\n              <!--// -->\n            </ng-container>\n          </ng-container>\n          <!--// -->\n          <!-- OPTIONS COLUMN -->\n          <ng-container matColumnDef=\"option\" *ngIf=\"options?.length>0||optionsMap\" stickyEnd>\n            <th mat-header-cell class=\"lastStickyItem w-auto\" *matHeaderCellDef disableClear></th>\n            <td mat-cell class=\"lastStickyItem w-auto\" *matCellDef=\"let row\">\n              <ng-container *ngIf=\"optionsMap; else elseOptionsTemplate\">\n                <ng-container *ngIf=\"(optionsMap|functionCaller1:row) as _rowoptions\">\n                  <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                    <mat-icon>more_vert</mat-icon>\n                  </app-btn>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item *ngFor=\"let option of _rowoptions\" (click)=\"option.action(row)\">\n                      {{optionLabeller|functionCaller2:option:row}}\n                    </button>\n                  </mat-menu>\n                </ng-container>\n              </ng-container>\n              <ng-template #elseOptionsTemplate>\n                <app-btn type=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"btn ms-2\">\n                  <mat-icon>more_vert</mat-icon>\n                </app-btn>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item *ngFor=\"let option of options\" (click)=\"option.action(row)\">\n                    {{optionLabeller|functionCaller2:option:row}}\n                  </button>\n                </mat-menu>\n              </ng-template>\n            </td>\n          </ng-container>\n          <!--// -->\n\n\n\n          <ng-container *ngIf=\"displayedColumns|getRawFields:(!!options?.length||!!optionsMap):useSelection as dcols\">\n            <tr mat-header-row *matHeaderRowDef=\"dcols\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: dcols\"\n              [ngClass]=\"{pointer:showRowPointer,selected:selection.isSelected(row),disabled:isDisabledFunc?isDisabledFunc(row):false}\"\n              [matTooltip]=\"isDisabledFunc&&isDisabledFunc(row)?'Disabled':null\" (click)=\"rowClick(row)\"></tr>\n            <tr class=\"mat-row\" *matNoDataRow>\n              <td class=\"mat-cell\" [attr.colspan]=\"dcols?.length||1\">{{noItemTxt}}</td>\n            </tr>\n          </ng-container>\n        </table>\n      </div>\n\n\n      <mat-paginator mresponsiveness [hideMobile]=\"true\" [length]=\"resultsLength\" [pageSizeOptions]=\"pageSizeOptions\"\n        [pageSize]=\"pageSize\" showFirstLastButtons />\n\n      <div class=\"  \" mresponsiveness [hideDesktop]=\"true\">\n        <div class=\" d-flex justify-content-center\">\n          <app-btn text=\"See more\" type=\"clear-pm\" (mclick)=\"increasePageSize()\"\n            *ngIf=\"resultsLength>paginator?.pageSize;else showLess\" />\n          <ng-template #showLess>\n            <app-btn text=\"See less\" type=\"clear-pm\" (mclick)=\"resetPageSize()\" />\n          </ng-template>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"h-100 center text-center noContent\" noContent>\n      <div class=\"\">\n        <div class=\"title\"> No data\n        </div>\n        <div class=\"sub-title\">\n          {{noDataSubTitle}}\n        </div>\n      </div>\n    </div>\n  </loader>\n</div>", styles: ["::ng-deep mat-paginator .mat-mdc-form-field{width:100px;height:25px;margin-top:0;margin-bottom:0;background-color:transparent!important;border:none}::ng-deep mat-paginator .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{height:auto;padding:0;color:var(--primary)}::ng-deep .mdc-data-table__header-cell{color:#333!important;background-color:transparent!important;font-style:normal;font-weight:600;font-size:14px;line-height:19px}::ng-deep mat-paginator{border-radius:0 0 16px 16px}::ng-deep .mat-mdc-table{background:rgba(255,255,255,0)}::ng-deep .mat-mdc-table .mat-mdc-row:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}::ng-deep .mat-mdc-table .mat-mdc-row.selected:hover,::ng-deep .mat-mdc-table .mat-mdc-footer-row.selected:hover{background-color:#f0f6ff}::ng-deep th.mat-mdc-table-sticky,::ng-deep td.mat-mdc-table-sticky{background-color:#fff!important}::ng-deep .colour{height:15px;width:15px;display:inline-block;border-radius:5px}::ng-deep .centerCells .mat-sort-header-container{justify-content:center}::ng-deep .default.colour{background-color:#545454}::ng-deep .btn-cell{width:1%}::ng-deep .mat-sort-header-container{height:40px}.mat-header-cell{font-weight:600;font-size:14px;line-height:21px}.smallerFonts td,.smallerFonts th{font-size:.7rem}.nowrap td,.nowrap th{white-space:nowrap;text-align:left;padding:0 24px;border-radius:16px}.nowrap td{border-radius:0}:host ::ng-deep input[type=checkbox]:not(.form-control){border:1px solid rgba(80,78,245,.3019607843)}.table tr td:hover{color:unset!important;text-decoration:unset;cursor:unset}tr.mat-header-row{height:auto}.centerCells td{text-align:center}.curvy tr{border-radius:0 10px}.title{font-style:normal;font-weight:600;font-size:24px;line-height:29px;color:#333}.table-container{background:#ffffff;border:1px solid #e0e0e0;box-shadow:none;border-radius:16px}.table-container .mat-paginator,.table-container .mat-table{background:transparent}.mat-header-cell{color:#333;background-color:transparent}.cell.notLink:hover{color:inherit}.cell{text-overflow:ellipsis;display:block;white-space:nowrap;overflow:hidden;font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#333}.noContent .title{font-style:normal;font-weight:600;font-size:14px;line-height:18px;text-align:center;color:#266dd3}.noContent .sub-title{font-style:normal;font-weight:400;font-size:12px;line-height:18px;text-align:center;width:206px;color:#828282}.table{border:1px solid #f2f2f2;border-radius:16px}.selected{background:#f0f6ff;background-color:#f0f6ff}.disabled .cell{font-style:normal;font-weight:400;font-size:14px;line-height:19px;color:#bdbdbd}.lastStickyItem{padding:0!important;background-image:linear-gradient(270deg,rgb(255,255,255),rgba(255,255,255,.7490196078))!important;border-radius:0!important}th.lastStickyItem{background:transparent!important}.link{color:var(--primary)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: UtilityService }]; }, propDecorators: { header: [{
                type: Input
            }], noDataSubTitle: [{
                type: Input
            }], headerBtns: [{
                type: Input
            }], _queryData: [{
                type: Input,
                args: ['queryData']
            }], observableFunc: [{
                type: Input
            }], pageNumber: [{
                type: Input
            }], table: [{
                type: ViewChild,
                args: ['table']
            }] } });

class SharedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: SharedModule, imports: [AutocompleteComponent,
            BtnComponent,
            ChipListAutocompleteComponent,
            CommonModule,
            ConfirmDialogComponent,
            CountComponent,
            FeedbackCardComponent,
            FileUploadComponent,
            FormGeneratorComponent,
            GridOrListComponent,
            ImportItemsComponent,
            InfoIconComponent,
            ListingFiltersComponent,
            LoaderComponent,
            MiniSearchListComponent,
            ModalComponent,
            ModalFormComponent,
            ModalHeaderComponent,
            NoListComponent,
            NumberItemsSelectedComponent,
            PageTemplateComponent,
            ProgressBarLargeComponent,
            ResponseCardComponent,
            SearchBoxComponent,
            SvgIconComponent,
            TableHttpsComponent,
            TablePlainComponent,
            TextComponent], exports: [AutocompleteComponent,
            BtnComponent,
            ChipListAutocompleteComponent,
            ConfirmDialogComponent,
            CountComponent,
            DirectivesModule,
            FeedbackCardComponent,
            FileUploadComponent,
            FormGeneratorComponent,
            GridOrListComponent,
            ImportItemsComponent,
            InfoIconComponent,
            InputModule,
            ListingFiltersComponent,
            LoaderComponent,
            MiniSearchListComponent,
            ModalHeaderComponent,
            ModalComponent,
            NoListComponent,
            NumberItemsSelectedComponent,
            PageTemplateComponent,
            ResponseCardComponent,
            SearchBoxComponent,
            SvgIconComponent,
            TableHttpsComponent,
            TablePlainComponent,
            TextComponent,
            UtilityPipesModule,
            ModalFormComponent,
            ProgressBarLargeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SharedModule, imports: [AutocompleteComponent,
            BtnComponent,
            ChipListAutocompleteComponent,
            CommonModule,
            FileUploadComponent,
            FormGeneratorComponent,
            GridOrListComponent,
            ImportItemsComponent,
            InfoIconComponent,
            ListingFiltersComponent,
            LoaderComponent,
            MiniSearchListComponent,
            ModalComponent,
            ModalHeaderComponent,
            NoListComponent,
            NumberItemsSelectedComponent,
            ProgressBarLargeComponent,
            SearchBoxComponent,
            TableHttpsComponent,
            TablePlainComponent,
            TextComponent, DirectivesModule,
            InputModule,
            UtilityPipesModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        AutocompleteComponent,
                        BtnComponent,
                        ChipListAutocompleteComponent,
                        CommonModule,
                        ConfirmDialogComponent,
                        CountComponent,
                        FeedbackCardComponent,
                        FileUploadComponent,
                        FormGeneratorComponent,
                        GridOrListComponent,
                        ImportItemsComponent,
                        InfoIconComponent,
                        ListingFiltersComponent,
                        LoaderComponent,
                        MiniSearchListComponent,
                        ModalComponent,
                        ModalFormComponent,
                        ModalHeaderComponent,
                        NoListComponent,
                        NumberItemsSelectedComponent,
                        PageTemplateComponent,
                        ProgressBarLargeComponent,
                        ResponseCardComponent,
                        SearchBoxComponent,
                        SvgIconComponent,
                        TableHttpsComponent,
                        TablePlainComponent,
                        TextComponent,
                    ],
                    exports: [
                        AutocompleteComponent,
                        BtnComponent,
                        ChipListAutocompleteComponent,
                        ConfirmDialogComponent,
                        CountComponent,
                        DirectivesModule,
                        FeedbackCardComponent,
                        FileUploadComponent,
                        FormGeneratorComponent,
                        GridOrListComponent,
                        ImportItemsComponent,
                        InfoIconComponent,
                        InputModule,
                        ListingFiltersComponent,
                        LoaderComponent,
                        MiniSearchListComponent,
                        ModalHeaderComponent,
                        ModalComponent,
                        NoListComponent,
                        NumberItemsSelectedComponent,
                        PageTemplateComponent,
                        ResponseCardComponent,
                        SearchBoxComponent,
                        SvgIconComponent,
                        TableHttpsComponent,
                        TablePlainComponent,
                        TextComponent,
                        UtilityPipesModule,
                        ModalFormComponent,
                        ProgressBarLargeComponent,
                    ],
                }]
        }] });

class MenuItem {
    get _editAccess() {
        console.log(this.editAccess);
        return this.editAccess;
    }
    set _editAccess(value) {
        this.editAccess = value;
        this.toggleEditAllSubMenus();
    }
    get _viewAccess() {
        return this.viewAccess;
    }
    set _viewAccess(value) {
        this.viewAccess = value;
        this.toggleViewAllSubMenus();
    }
    constructor(menuItem, parent) {
        Object.assign(this, menuItem);
        this.labelLowerCase = menuItem?.label?.toLowerCase();
        this.hasSub = !!menuItem?.subs?.length;
        this.isP = true;
        this.parentID = parent?.id;
        // debugger
        this.subs = menuItem?.subs?.map((m) => new MenuItem(m, this));
    }
    toggle() {
        this.disabled = !this.disabled;
    }
    toggleView() {
        this.viewAccess = !this.viewAccess;
        if (this.editAccess)
            this.viewAccess = true;
    }
    toggleCreate() {
        this.editAccess = !this.editAccess;
        if (this.editAccess)
            this.viewAccess = true;
    }
    allowEditAllSubMenus() {
        this.subs?.forEach((x) => x?.allowEditAllSubMenus());
        //debugger;
        this.viewAccess = true;
        this.editAccess = true;
    }
    disableEditAllSubMenus() {
        this.subs?.forEach((x) => x?.disableEditAllSubMenus());
        this.editAccess = false;
    }
    allowViewAllSubMenus() {
        this.subs?.forEach((x) => x?.allowViewAllSubMenus());
        //debugger;
        this.viewAccess = true;
        this.editAccess = false;
    }
    disableViewAllSubMenus() {
        this.subs?.forEach((x) => x?.disableViewAllSubMenus());
        this.viewAccess = false;
        this.editAccess = false;
    }
    toggleEditAllSubMenus() {
        // if (this.editAccess == undefined) return;
        !this.editAccess
            ? this.allowEditAllSubMenus()
            : this.disableEditAllSubMenus();
        console.log(this.subs);
    }
    toggleViewAllSubMenus() {
        // if (this.viewAccess == undefined) return;
        // debugger
        !this.viewAccess
            ? this.allowViewAllSubMenus()
            : this.disableViewAllSubMenus();
        console.log(this.subs);
    }
    allowAuthorization() {
        this.viewAccess = true;
        this.editAccess = true;
    }
    disableAuthorization() {
        this.viewAccess = false;
        this.viewAccess = false;
    }
    toggleAuthorization() {
        this.viewAccess = !this.viewAccess;
        this.editAccess = !this.editAccess;
    }
}
class MenuItemDivider extends MenuItem {
    constructor() {
        super(null);
        this.isDivider = true;
    }
}
var EPageBtnID;
(function (EPageBtnID) {
    EPageBtnID["agentCommissions"] = "PAC8";
    EPageBtnID["agentCreditNotes"] = "PACN10";
    EPageBtnID["agentDocuments"] = "PAD2";
    EPageBtnID["agentEndorsements"] = "PAE3";
    EPageBtnID["agentLoan"] = "PAL1";
    EPageBtnID["agentNotes"] = "PAN6";
    EPageBtnID["agentPendingQuotes"] = "PAPQ11";
    EPageBtnID["agentPolicies"] = "PAP7";
    EPageBtnID["agentProduction"] = "PAP9";
    EPageBtnID["agentWebLogIn"] = "PAWL4";
    EPageBtnID["agentWorkflows"] = "PAW5";
    EPageBtnID["agentCalendar"] = "PAC6";
    EPageBtnID["clientCalendar"] = "PCC11";
    EPageBtnID["clientDocuments"] = "PCD12";
    EPageBtnID["clientEndorsements"] = "PCE13";
    EPageBtnID["clientNotes"] = "PCN14";
    EPageBtnID["clientOtherBusiness"] = "PCOB15";
    EPageBtnID["clientPendingPayments"] = "PCPP16";
    EPageBtnID["clientPendingQuotes"] = "PCPQ17";
    EPageBtnID["clientPolicies"] = "PCP18";
    EPageBtnID["clientRelationships"] = "PCR19";
    EPageBtnID["clientUnderwritingEvents"] = "PCUE20";
    EPageBtnID["clientWebLogIn"] = "PCWL21";
    EPageBtnID["clientWorkflows"] = "PCW22";
})(EPageBtnID || (EPageBtnID = {}));

const routes = [
    {
        path: 'no-access',
        loadChildren: () => import('./herlhay-helpers-page-not-found.module-232d6cd5.mjs').then((m) => m.PageNotFoundModule),
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
        loadChildren: () => import('./herlhay-helpers-reset.module-abc60f22.mjs').then((m) => m.ResetModule),
    },
    {
        path: '**',
        loadChildren: () => import('./herlhay-helpers-page-not-found.module-232d6cd5.mjs').then((m) => m.PageNotFoundModule),
    },
];
class ExtraPagesRoutingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });

class ExtraPagesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesModule, imports: [CommonModule,
            ExtraPagesRoutingModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesModule, imports: [CommonModule,
            ExtraPagesRoutingModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ExtraPagesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        ExtraPagesRoutingModule,
                    ],
                }]
        }] });

class ResetComponent {
    constructor(swService) {
        this.swService = swService;
    }
    ngOnInit() {
        // if(this.swService.puS.)
        this.getUpdates();
    }
    clearCache() {
        this.loading = true;
        if ('caches' in window) {
            caches.keys().then((names) => {
                names.forEach(async (name) => {
                    await caches.delete(name);
                });
            });
        }
        location.href = '/';
    }
    getUpdates() {
        this.loading = true;
        this.swService.getUpdates(() => {
            this.loading = false;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResetComponent, deps: [{ token: ServiceWorkerService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ResetComponent, isStandalone: true, selector: "app-reset", ngImport: i0, template: "<loader [loading]=\"loading\" text=\"Resetting\">\n\n  <div class=\"center vh-100\">\n      <div class=\"gy-2 justify-content-center row row-cols-md-6 w-100\">\n        <app-btn text=\"Get Updates\" customIcon=\"fas fa-download\" (mclick)=\"getUpdates()\"></app-btn>\n        <!-- <app-btn text=\"Clear Cache\" customIcon=\"fas fa-refresh\" (mclick)=\"clearCache()\"></app-btn> -->\n      </div>\n  </div>\n</loader>\n", styles: [".vh-100{height:100vh}.center{display:flex;justify-content:center;align-items:center}\n"], dependencies: [{ kind: "component", type: LoaderComponent, selector: "loader", inputs: ["class", "text", "hasContent", "loading", "height"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ResetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-reset', standalone: true, imports: [LoaderComponent, BtnComponent], template: "<loader [loading]=\"loading\" text=\"Resetting\">\n\n  <div class=\"center vh-100\">\n      <div class=\"gy-2 justify-content-center row row-cols-md-6 w-100\">\n        <app-btn text=\"Get Updates\" customIcon=\"fas fa-download\" (mclick)=\"getUpdates()\"></app-btn>\n        <!-- <app-btn text=\"Clear Cache\" customIcon=\"fas fa-refresh\" (mclick)=\"clearCache()\"></app-btn> -->\n      </div>\n  </div>\n</loader>\n", styles: [".vh-100{height:100vh}.center{display:flex;justify-content:center;align-items:center}\n"] }]
        }], ctorParameters: function () { return [{ type: ServiceWorkerService }]; } });

class PageNotFoundComponent {
    constructor(route, uS) {
        this.route = route;
        this.uS = uS;
    }
    ngOnInit() {
        this.config = this.route.snapshot.data['config'];
    }
    back() {
        this.uS.back();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PageNotFoundComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: UtilityService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: PageNotFoundComponent, isStandalone: true, selector: "app-page-not-found", ngImport: i0, template: "<div class=\"d-flex justify-content-center align-items-center\" id=\"main\" style=\"height: 80vh\">\n  <div class=\"text-center\">\n    <div class=\"d-md-flex justify-content-center align-items-center\">\n      <h1 class=\"m-3 p-3 align-top border-right inline-block align-content-center\" style=\"border-right: 1px solid gray\"\n        *ngIf=\"!uS.isMobile\">\n        {{(config?.status||'404')}}\n      </h1>\n      <h1 class=\"m-3 p-3 align-top border-right inline-block align-content-center\"  *ngIf=\"uS.isMobile\">\n        {{(config?.status||'404')}}\n      </h1>\n      <div class=\"inline-block align-middle\">\n        <h2 class=\"font-weight-normal lead\" id=\"desc\">\n          {{(config?.message||'The page you requested was not found.')}}</h2>\n      </div>\n    </div>\n    <div class=\"d-flex mt-2 p-2 justify-content-center\">\n      <app-btn text=\"Go Back\" (mclick)=\"back()\" type=\"outline\" ></app-btn>\n      <span class=\"mx-1\"></span>\n      <app-btn text=\"Home\" routerLink=\"/\" type=\"primary\" ></app-btn>\n    </div>\n  </div>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: BtnComponent, selector: "app-btn,btn", inputs: ["formSchema", "icon", "type", "group", "actionType", "animate", "badge", "class", "customIcon", "disabled", "form", "help", "iconBtn", "lite", "loading", "mclass", "showHelpIcon", "mini", "text", "valid", "subButtons", "onFormInvalid"], outputs: ["mclick"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: PageNotFoundComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-not-found', standalone: true, imports: [
                        NgIf,
                        BtnComponent,
                        RouterLink,
                    ], template: "<div class=\"d-flex justify-content-center align-items-center\" id=\"main\" style=\"height: 80vh\">\n  <div class=\"text-center\">\n    <div class=\"d-md-flex justify-content-center align-items-center\">\n      <h1 class=\"m-3 p-3 align-top border-right inline-block align-content-center\" style=\"border-right: 1px solid gray\"\n        *ngIf=\"!uS.isMobile\">\n        {{(config?.status||'404')}}\n      </h1>\n      <h1 class=\"m-3 p-3 align-top border-right inline-block align-content-center\"  *ngIf=\"uS.isMobile\">\n        {{(config?.status||'404')}}\n      </h1>\n      <div class=\"inline-block align-middle\">\n        <h2 class=\"font-weight-normal lead\" id=\"desc\">\n          {{(config?.message||'The page you requested was not found.')}}</h2>\n      </div>\n    </div>\n    <div class=\"d-flex mt-2 p-2 justify-content-center\">\n      <app-btn text=\"Go Back\" (mclick)=\"back()\" type=\"outline\" ></app-btn>\n      <span class=\"mx-1\"></span>\n      <app-btn text=\"Home\" routerLink=\"/\" type=\"primary\" ></app-btn>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: UtilityService }]; } });

/*
 * Public API Surface of herlhay-helpers
 */
// export * from './lib/herlhay-helpers.service';
// export * from './lib/herlhay-helpers.component';
// export * from './lib/herlhay-helpers.component';
// import * as _HHelpers from './pre-public-api';
// export namespace HHelpers{
//     export _HHelpers
// }

/**
 * Generated bundle index. Do not edit.
 */

export { ApiService, AppService, ArraySplitter, AuthenticationInterceptorService, AutocompleteComponent, Btn, BtnComponent, BtnLg, BtnLgComponent, BtnLinkComponent, BtnModule, BtnService, CInput, CacheService, CheckForUpdateService, ChipListAutocompleteComponent, Config, ConfirmDialogComponent, ConfirmDialogService, Constant, CountComponent, CustomDatePipe, DEFAULT_TIMEOUT, Day, DirectivesModule, DragDropFileUploadDirective, ELanguage, EMenuLocation, EMenuType, EPageBtnID, EPageType, EPeriod, EValidationType, EncryptorService, Environment, ErrorMessagePipe, ErrorMessagesPipe, ExtraPagesModule, FCInput, FKVP, FeedbackCardComponent, FileUploadComponent, FilterArrayByStringPipe, FilterArrayPipe, FilterFormArrayPipe, FilterOptions, FormGeneratorComponent, FormGeneratorTdComponent, Forms, FunctionCaller, FunctionCaller1, FunctionCaller2, FunctionCaller3, GenderPipe, GetValueLabel, GlobalErrorHandlerService, GridOrListComponent, HHFunctions, HHenvironment, HandleUnrecoverableStateService, HttpListCaller, HttpListCaller1, HttpListCaller2, IRSocket, IdlerComponent, IdlerService, ImageLoaderDirective, ImportItemsComponent, InfoIconComponent, InputBasicComponent, InputClassPipe, InputModule, InputPipesModule, InputService, InputTD_RFComponent, IsClonePage, IsShowPage, KVP, Lbl, ListingFiltersComponent, Loader, LoaderComponent, LocalCacheService, LogUpdateService, MenuItem, MenuItemDivider, MiniSearchListComponent, MixPanelService, ModalComponent, ModalFormComponent, ModalHeaderComponent, MrouterLinkirective, MultiTenantInterceptorService, NoListComponent, NumberItemsSelectedComponent, NumberToWordsPipe, NumberToWordsService, OptionLabeller, OptionerPipe, OptionsFormatter, OtpInputComponent, PageNotFoundComponent, PageTemplateComponent, ProgressBarLargeComponent, ProgressLoader, ProgressLoaders, PromptUpdateService, prototypes as Prototypes, ReplaceAllPipe, RequestLoggerInterceptorService, RequestTimeoutInterceptorService, ResetComponent, ResponseCardComponent, ResponsivenessDirective, RoundPipe, SearchBoxComponent, SecondsToTimePipe, SelectionData, ServiceWorkerService, SharedModule, SortPipe, StorageService, StrConcatenatorPipe, SvgIconComponent, SvgIconService, TableHttpsComponent, TablePlainComponent, TawkIoService, TextComponent, ToAnyArrayPipe, ToAnyPipe, TrimTextPipe, UtilityPipesModule, UtilityService, ValidationMessageComponent, ValidationMsg, Validator, ValueFormatterPipe, ValueOrXPipe, WebsocketService, XOrYPipe, configForms, configPatterns, configValidationMessages, desktopClassDirective, hideDesktopDirective, hideMobileDirective, mobileClassDirective };
//# sourceMappingURL=herlhay-helpers.mjs.map
