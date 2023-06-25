import { CurrencyPipe, DecimalPipe, Location, TitleCasePipe } from '@angular/common';
import { ElementRef, QueryList } from '@angular/core';
import { MatDialog as MatDialog, MatDialogConfig as MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import jfd from 'js-file-download';
import { Config } from '../config/index.config';
import { AbstractControl, FormArray, FormControl, UntypedFormArray } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { EValidationType, CustomValidationError, EPeriod } from '../shared/models/index.model';
import { MixPanelService } from './mix-panel.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ConfirmDialogService } from '../shared/components/confirm-dialog/confirm-dialog.service';
import { TableCol } from '../shared/components/table-plain/table.model';
import { CustomDatePipe } from '../shared/pipes/utility.pipe';
import * as i0 from "@angular/core";
export declare class UtilityService {
    dialog: MatDialog;
    snackBar: MatSnackBar;
    router: Router;
    titleS: Title;
    location: Location;
    numberPipe: DecimalPipe;
    currencyPipe: CurrencyPipe;
    titleCasePipe: TitleCasePipe;
    customDatePipe: CustomDatePipe;
    confirmDialogService: ConfirmDialogService;
    mixPanelService: MixPanelService;
    responsive: BreakpointObserver;
    config: typeof Config;
    downloader: typeof jfd;
    $: {
        default: JQueryStatic;
        ajaxSettings: JQuery.AjaxSettings<any>;
        Animation: JQuery.AnimationStatic;
        Callbacks: JQuery.CallbacksStatic;
        cssHooks: JQuery.CSSHooks;
        cssNumber: JQuery.PlainObject<boolean>;
        Deferred: JQuery.DeferredStatic;
        easing: JQuery.Easings;
        Event: JQuery.EventStatic;
        event: JQuery.EventExtensions;
        expr: JQuery.Selectors;
        fn: JQuery<HTMLElement>;
        fx: JQuery.Effects;
        ready: JQuery.Thenable<JQueryStatic>;
        support: JQuery.PlainObject<any>;
        timers: JQuery.TickFunction<any>[];
        Tween: JQuery.TweenStatic;
        valHooks: JQuery.ValHooks;
        ajax(url: string, settings?: JQuery.AjaxSettings<any>): JQuery.jqXHR<any>;
        ajax(settings?: JQuery.AjaxSettings<any>): JQuery.jqXHR<any>;
        ajaxPrefilter(dataTypes: string, handler: (options: JQuery.AjaxSettings<any>, originalOptions: JQuery.AjaxSettings<any>, jqXHR: JQuery.jqXHR<any>) => string | void): void;
        ajaxPrefilter(handler: (options: JQuery.AjaxSettings<any>, originalOptions: JQuery.AjaxSettings<any>, jqXHR: JQuery.jqXHR<any>) => string | void): void;
        ajaxSetup(options: JQuery.AjaxSettings<any>): JQuery.AjaxSettings<any>;
        ajaxTransport(dataType: string, handler: (options: JQuery.AjaxSettings<any>, originalOptions: JQuery.AjaxSettings<any>, jqXHR: JQuery.jqXHR<any>) => void | JQuery.Transport): void;
        camelCase(value: string): string;
        cleanData(elems: ArrayLike<Element | Document | Window | JQuery.PlainObject<any>>): void;
        contains(container: Element, contained: Element): boolean;
        css(elem: Element, name: string): any;
        data<T extends string | number | boolean | symbol | object>(element: Element | Document | Window | JQuery.PlainObject<any>, key: string, value: T): T;
        data(element: Element | Document | Window | JQuery.PlainObject<any>, key: string, value: undefined): any;
        data(element: Element | Document | Window | JQuery.PlainObject<any>, key?: string): any;
        dequeue(element: Element, queueName?: string): void;
        each<T_1>(array: ArrayLike<T_1>, callback: (this: T_1, indexInArray: number, value: T_1) => any): ArrayLike<T_1>;
        each<T_2, K extends keyof T_2>(obj: T_2, callback: (this: T_2[K], propertyName: K, valueOfProperty: T_2[K]) => any): T_2;
        error(message: string): any;
        escapeSelector(selector: string): string;
        extend<T_3, U, V, W, X, Y, Z>(deep: true, target: T_3, object1: U, object2: V, object3: W, object4: X, object5: Y, object6: Z): T_3 & U & V & W & X & Y & Z;
        extend<T_4, U_1, V_1, W_1, X_1, Y_1>(deep: true, target: T_4, object1: U_1, object2: V_1, object3: W_1, object4: X_1, object5: Y_1): T_4 & U_1 & V_1 & W_1 & X_1 & Y_1;
        extend<T_5, U_2, V_2, W_2, X_2>(deep: true, target: T_5, object1: U_2, object2: V_2, object3: W_2, object4: X_2): T_5 & U_2 & V_2 & W_2 & X_2;
        extend<T_6, U_3, V_3, W_3>(deep: true, target: T_6, object1: U_3, object2: V_3, object3: W_3): T_6 & U_3 & V_3 & W_3;
        extend<T_7, U_4, V_4>(deep: true, target: T_7, object1: U_4, object2: V_4): T_7 & U_4 & V_4;
        extend<T_8, U_5>(deep: true, target: T_8, object1: U_5): T_8 & U_5;
        extend<T_9>(deep: true, target: T_9): JQueryStatic & T_9;
        extend(deep: true, target: any, object1: any, ...objectN: any[]): any;
        extend<T_10, U_6, V_5, W_4, X_3, Y_2, Z_1>(target: T_10, object1: U_6, object2: V_5, object3: W_4, object4: X_3, object5: Y_2, object6: Z_1): T_10 & U_6 & V_5 & W_4 & X_3 & Y_2 & Z_1;
        extend<T_11, U_7, V_6, W_5, X_4, Y_3>(target: T_11, object1: U_7, object2: V_6, object3: W_5, object4: X_4, object5: Y_3): T_11 & U_7 & V_6 & W_5 & X_4 & Y_3;
        extend<T_12, U_8, V_7, W_6, X_5>(target: T_12, object1: U_8, object2: V_7, object3: W_6, object4: X_5): T_12 & U_8 & V_7 & W_6 & X_5;
        extend<T_13, U_9, V_8, W_7>(target: T_13, object1: U_9, object2: V_8, object3: W_7): T_13 & U_9 & V_8 & W_7;
        extend<T_14, U_10, V_9>(target: T_14, object1: U_10, object2: V_9): T_14 & U_10 & V_9;
        extend<T_15, U_11>(target: T_15, object1: U_11): T_15 & U_11;
        extend<T_16>(target: T_16): JQueryStatic & T_16;
        extend(target: any, object1: any, ...objectN: any[]): any;
        get(url: string, data: string | JQuery.PlainObject<any>, success: JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>, dataType?: string): JQuery.jqXHR<any>;
        get(url: string, data_success: string | JQuery.PlainObject<any> | JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>, dataType: string): JQuery.jqXHR<any>;
        get(url: string, success_data: string | JQuery.PlainObject<any> | JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>): JQuery.jqXHR<any>;
        get(url_settings?: string | JQuery.UrlAjaxSettings<any>): JQuery.jqXHR<any>;
        getJSON(url: string, data: string | JQuery.PlainObject<any>, success: JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>): JQuery.jqXHR<any>;
        getJSON(url: string, success_data?: string | JQuery.PlainObject<any> | JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>): JQuery.jqXHR<any>;
        getScript(url: string, success?: JQuery.jqXHR.DoneCallback<string, JQuery.jqXHR<string>>): JQuery.jqXHR<string>;
        getScript(options: JQuery.UrlAjaxSettings<any>): JQuery.jqXHR<string>;
        globalEval(code: string): void;
        grep<T_17>(array: ArrayLike<T_17>, funсtion: (elementOfArray: T_17, indexInArray: number) => boolean, invert?: boolean): T_17[];
        hasData(element: Element | Document | Window | JQuery.PlainObject<any>): boolean;
        holdReady(hold: boolean): void;
        htmlPrefilter(html: string): string;
        inArray<T_18>(value: T_18, array: T_18[], fromIndex?: number): number;
        isArray(obj: any): obj is any[];
        isEmptyObject(obj: any): boolean;
        isFunction(obj: any): obj is Function;
        isNumeric(value: any): boolean;
        isPlainObject(obj: any): boolean;
        isWindow(obj: any): obj is Window;
        isXMLDoc(node: Node): boolean;
        makeArray<T_19>(obj: ArrayLike<T_19>): T_19[];
        map<T_20, TReturn>(array: T_20[], callback: (this: Window, elementOfArray: T_20, indexInArray: number) => JQuery.TypeOrArray<TReturn>): TReturn[];
        map<T_21, K_1 extends keyof T_21, TReturn_1>(obj: T_21, callback: (this: Window, propertyOfObject: T_21[K_1], key: K_1) => JQuery.TypeOrArray<TReturn_1>): TReturn_1[];
        merge<T_22, U_12>(first: ArrayLike<T_22>, second: ArrayLike<U_12>): (T_22 | U_12)[];
        noConflict(removeAll?: boolean): JQueryStatic;
        nodeName(elem: Node, name: string): boolean;
        noop(): undefined;
        now(): number;
        param(obj: any[] | JQuery<HTMLElement> | JQuery.PlainObject<any>, traditional?: boolean): string;
        parseHTML(data: string, context: Document, keepScripts: boolean): JQuery.Node[];
        parseHTML(data: string, context_keepScripts?: boolean | Document): JQuery.Node[];
        parseJSON(json: string): any;
        parseXML(data: string): XMLDocument;
        post(url: string, data: string | JQuery.PlainObject<any>, success: JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>, dataType?: string): JQuery.jqXHR<any>;
        post(url: string, data_success: string | JQuery.PlainObject<any> | JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>, dataType: string): JQuery.jqXHR<any>;
        post(url: string, success_data: string | JQuery.PlainObject<any> | JQuery.jqXHR.DoneCallback<any, JQuery.jqXHR<any>>): JQuery.jqXHR<any>;
        post(url_settings?: string | JQuery.UrlAjaxSettings<any>): JQuery.jqXHR<any>;
        proxy<TReturn_2, A, B, C, D, E, F, G>(funсtion: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => TReturn_2, context: null, a: A, b: B, c: C, d: D, e: E, f: F, g: G): () => TReturn_2;
        proxy<TReturn_3, A_1, B_1, C_1, D_1, E_1, F_1>(funсtion: (a: A_1, b: B_1, c: C_1, d: D_1, e: E_1, f: F_1) => TReturn_3, context: null, a: A_1, b: B_1, c: C_1, d: D_1, e: E_1, f: F_1): () => TReturn_3;
        proxy<TReturn_4, A_2, B_2, C_2, D_2, E_2>(funсtion: (a: A_2, b: B_2, c: C_2, d: D_2, e: E_2) => TReturn_4, context: null, a: A_2, b: B_2, c: C_2, d: D_2, e: E_2): () => TReturn_4;
        proxy<TReturn_5, A_3, B_3, C_3, D_3>(funсtion: (a: A_3, b: B_3, c: C_3, d: D_3) => TReturn_5, context: null, a: A_3, b: B_3, c: C_3, d: D_3): () => TReturn_5;
        proxy<TReturn_6, A_4, B_4, C_4>(funсtion: (a: A_4, b: B_4, c: C_4) => TReturn_6, context: null, a: A_4, b: B_4, c: C_4): () => TReturn_6;
        proxy<TReturn_7, A_5, B_5>(funсtion: (a: A_5, b: B_5) => TReturn_7, context: null, a: A_5, b: B_5): () => TReturn_7;
        proxy<TReturn_8, A_6>(funсtion: (a: A_6) => TReturn_8, context: null, a: A_6): () => TReturn_8;
        proxy<TReturn_9>(funсtion: () => TReturn_9, context: null): () => TReturn_9;
        proxy<TReturn_10, A_7, B_6, C_5, D_4, E_3, F_2, G_1, T_23>(funсtion: (a: A_7, b: B_6, c: C_5, d: D_4, e: E_3, f: F_2, g: G_1, t: T_23) => TReturn_10, context: null, a: A_7, b: B_6, c: C_5, d: D_4, e: E_3, f: F_2, g: G_1): (t: T_23) => TReturn_10;
        proxy<TReturn_11, A_8, B_7, C_6, D_5, E_4, F_3, T_24>(funсtion: (a: A_8, b: B_7, c: C_6, d: D_5, e: E_4, f: F_3, t: T_24) => TReturn_11, context: null, a: A_8, b: B_7, c: C_6, d: D_5, e: E_4, f: F_3): (t: T_24) => TReturn_11;
        proxy<TReturn_12, A_9, B_8, C_7, D_6, E_5, T_25>(funсtion: (a: A_9, b: B_8, c: C_7, d: D_6, e: E_5, t: T_25) => TReturn_12, context: null, a: A_9, b: B_8, c: C_7, d: D_6, e: E_5): (t: T_25) => TReturn_12;
        proxy<TReturn_13, A_10, B_9, C_8, D_7, T_26>(funсtion: (a: A_10, b: B_9, c: C_8, d: D_7, t: T_26) => TReturn_13, context: null, a: A_10, b: B_9, c: C_8, d: D_7): (t: T_26) => TReturn_13;
        proxy<TReturn_14, A_11, B_10, C_9, T_27>(funсtion: (a: A_11, b: B_10, c: C_9, t: T_27) => TReturn_14, context: null, a: A_11, b: B_10, c: C_9): (t: T_27) => TReturn_14;
        proxy<TReturn_15, A_12, B_11, T_28>(funсtion: (a: A_12, b: B_11, t: T_28) => TReturn_15, context: null, a: A_12, b: B_11): (t: T_28) => TReturn_15;
        proxy<TReturn_16, A_13, T_29>(funсtion: (a: A_13, t: T_29) => TReturn_16, context: null, a: A_13): (t: T_29) => TReturn_16;
        proxy<TReturn_17, T_30>(funсtion: (t: T_30) => TReturn_17, context: null): (t: T_30) => TReturn_17;
        proxy<TReturn_18, A_14, B_12, C_10, D_8, E_6, F_4, G_2, T_31, U_13>(funсtion: (a: A_14, b: B_12, c: C_10, d: D_8, e: E_6, f: F_4, g: G_2, t: T_31, u: U_13) => TReturn_18, context: null, a: A_14, b: B_12, c: C_10, d: D_8, e: E_6, f: F_4, g: G_2): (t: T_31, u: U_13) => TReturn_18;
        proxy<TReturn_19, A_15, B_13, C_11, D_9, E_7, F_5, T_32, U_14>(funсtion: (a: A_15, b: B_13, c: C_11, d: D_9, e: E_7, f: F_5, t: T_32, u: U_14) => TReturn_19, context: null, a: A_15, b: B_13, c: C_11, d: D_9, e: E_7, f: F_5): (t: T_32, u: U_14) => TReturn_19;
        proxy<TReturn_20, A_16, B_14, C_12, D_10, E_8, T_33, U_15>(funсtion: (a: A_16, b: B_14, c: C_12, d: D_10, e: E_8, t: T_33, u: U_15) => TReturn_20, context: null, a: A_16, b: B_14, c: C_12, d: D_10, e: E_8): (t: T_33, u: U_15) => TReturn_20;
        proxy<TReturn_21, A_17, B_15, C_13, D_11, T_34, U_16>(funсtion: (a: A_17, b: B_15, c: C_13, d: D_11, t: T_34, u: U_16) => TReturn_21, context: null, a: A_17, b: B_15, c: C_13, d: D_11): (t: T_34, u: U_16) => TReturn_21;
        proxy<TReturn_22, A_18, B_16, C_14, T_35, U_17>(funсtion: (a: A_18, b: B_16, c: C_14, t: T_35, u: U_17) => TReturn_22, context: null, a: A_18, b: B_16, c: C_14): (t: T_35, u: U_17) => TReturn_22;
        proxy<TReturn_23, A_19, B_17, T_36, U_18>(funсtion: (a: A_19, b: B_17, t: T_36, u: U_18) => TReturn_23, context: null, a: A_19, b: B_17): (t: T_36, u: U_18) => TReturn_23;
        proxy<TReturn_24, A_20, T_37, U_19>(funсtion: (a: A_20, t: T_37, u: U_19) => TReturn_24, context: null, a: A_20): (t: T_37, u: U_19) => TReturn_24;
        proxy<TReturn_25, T_38, U_20>(funсtion: (t: T_38, u: U_20) => TReturn_25, context: null): (t: T_38, u: U_20) => TReturn_25;
        proxy<TReturn_26, A_21, B_18, C_15, D_12, E_9, F_6, G_3, T_39, U_21, V_10>(funсtion: (a: A_21, b: B_18, c: C_15, d: D_12, e: E_9, f: F_6, g: G_3, t: T_39, u: U_21, v: V_10) => TReturn_26, context: null, a: A_21, b: B_18, c: C_15, d: D_12, e: E_9, f: F_6, g: G_3): (t: T_39, u: U_21, v: V_10) => TReturn_26;
        proxy<TReturn_27, A_22, B_19, C_16, D_13, E_10, F_7, T_40, U_22, V_11>(funсtion: (a: A_22, b: B_19, c: C_16, d: D_13, e: E_10, f: F_7, t: T_40, u: U_22, v: V_11) => TReturn_27, context: null, a: A_22, b: B_19, c: C_16, d: D_13, e: E_10, f: F_7): (t: T_40, u: U_22, v: V_11) => TReturn_27;
        proxy<TReturn_28, A_23, B_20, C_17, D_14, E_11, T_41, U_23, V_12>(funсtion: (a: A_23, b: B_20, c: C_17, d: D_14, e: E_11, t: T_41, u: U_23, v: V_12) => TReturn_28, context: null, a: A_23, b: B_20, c: C_17, d: D_14, e: E_11): (t: T_41, u: U_23, v: V_12) => TReturn_28;
        proxy<TReturn_29, A_24, B_21, C_18, D_15, T_42, U_24, V_13>(funсtion: (a: A_24, b: B_21, c: C_18, d: D_15, t: T_42, u: U_24, v: V_13) => TReturn_29, context: null, a: A_24, b: B_21, c: C_18, d: D_15): (t: T_42, u: U_24, v: V_13) => TReturn_29;
        proxy<TReturn_30, A_25, B_22, C_19, T_43, U_25, V_14>(funсtion: (a: A_25, b: B_22, c: C_19, t: T_43, u: U_25, v: V_14) => TReturn_30, context: null, a: A_25, b: B_22, c: C_19): (t: T_43, u: U_25, v: V_14) => TReturn_30;
        proxy<TReturn_31, A_26, B_23, T_44, U_26, V_15>(funсtion: (a: A_26, b: B_23, t: T_44, u: U_26, v: V_15) => TReturn_31, context: null, a: A_26, b: B_23): (t: T_44, u: U_26, v: V_15) => TReturn_31;
        proxy<TReturn_32, A_27, T_45, U_27, V_16>(funсtion: (a: A_27, t: T_45, u: U_27, v: V_16) => TReturn_32, context: null, a: A_27): (t: T_45, u: U_27, v: V_16) => TReturn_32;
        proxy<TReturn_33, T_46, U_28, V_17>(funсtion: (t: T_46, u: U_28, v: V_17) => TReturn_33, context: null): (t: T_46, u: U_28, v: V_17) => TReturn_33;
        proxy<TReturn_34, A_28, B_24, C_20, D_16, E_12, F_8, G_4, T_47, U_29, V_18, W_8>(funсtion: (a: A_28, b: B_24, c: C_20, d: D_16, e: E_12, f: F_8, g: G_4, t: T_47, u: U_29, v: V_18, w: W_8) => TReturn_34, context: null, a: A_28, b: B_24, c: C_20, d: D_16, e: E_12, f: F_8, g: G_4): (t: T_47, u: U_29, v: V_18, w: W_8) => TReturn_34;
        proxy<TReturn_35, A_29, B_25, C_21, D_17, E_13, F_9, T_48, U_30, V_19, W_9>(funсtion: (a: A_29, b: B_25, c: C_21, d: D_17, e: E_13, f: F_9, t: T_48, u: U_30, v: V_19, w: W_9) => TReturn_35, context: null, a: A_29, b: B_25, c: C_21, d: D_17, e: E_13, f: F_9): (t: T_48, u: U_30, v: V_19, w: W_9) => TReturn_35;
        proxy<TReturn_36, A_30, B_26, C_22, D_18, E_14, T_49, U_31, V_20, W_10>(funсtion: (a: A_30, b: B_26, c: C_22, d: D_18, e: E_14, t: T_49, u: U_31, v: V_20, w: W_10) => TReturn_36, context: null, a: A_30, b: B_26, c: C_22, d: D_18, e: E_14): (t: T_49, u: U_31, v: V_20, w: W_10) => TReturn_36;
        proxy<TReturn_37, A_31, B_27, C_23, D_19, T_50, U_32, V_21, W_11>(funсtion: (a: A_31, b: B_27, c: C_23, d: D_19, t: T_50, u: U_32, v: V_21, w: W_11) => TReturn_37, context: null, a: A_31, b: B_27, c: C_23, d: D_19): (t: T_50, u: U_32, v: V_21, w: W_11) => TReturn_37;
        proxy<TReturn_38, A_32, B_28, C_24, T_51, U_33, V_22, W_12>(funсtion: (a: A_32, b: B_28, c: C_24, t: T_51, u: U_33, v: V_22, w: W_12) => TReturn_38, context: null, a: A_32, b: B_28, c: C_24): (t: T_51, u: U_33, v: V_22, w: W_12) => TReturn_38;
        proxy<TReturn_39, A_33, B_29, T_52, U_34, V_23, W_13>(funсtion: (a: A_33, b: B_29, t: T_52, u: U_34, v: V_23, w: W_13) => TReturn_39, context: null, a: A_33, b: B_29): (t: T_52, u: U_34, v: V_23, w: W_13) => TReturn_39;
        proxy<TReturn_40, A_34, T_53, U_35, V_24, W_14>(funсtion: (a: A_34, t: T_53, u: U_35, v: V_24, w: W_14) => TReturn_40, context: null, a: A_34): (t: T_53, u: U_35, v: V_24, w: W_14) => TReturn_40;
        proxy<TReturn_41, T_54, U_36, V_25, W_15>(funсtion: (t: T_54, u: U_36, v: V_25, w: W_15) => TReturn_41, context: null): (t: T_54, u: U_36, v: V_25, w: W_15) => TReturn_41;
        proxy<TReturn_42, A_35, B_30, C_25, D_20, E_15, F_10, G_5, T_55, U_37, V_26, W_16, X_6>(funсtion: (a: A_35, b: B_30, c: C_25, d: D_20, e: E_15, f: F_10, g: G_5, t: T_55, u: U_37, v: V_26, w: W_16, x: X_6) => TReturn_42, context: null, a: A_35, b: B_30, c: C_25, d: D_20, e: E_15, f: F_10, g: G_5): (t: T_55, u: U_37, v: V_26, w: W_16, x: X_6) => TReturn_42;
        proxy<TReturn_43, A_36, B_31, C_26, D_21, E_16, F_11, T_56, U_38, V_27, W_17, X_7>(funсtion: (a: A_36, b: B_31, c: C_26, d: D_21, e: E_16, f: F_11, t: T_56, u: U_38, v: V_27, w: W_17, x: X_7) => TReturn_43, context: null, a: A_36, b: B_31, c: C_26, d: D_21, e: E_16, f: F_11): (t: T_56, u: U_38, v: V_27, w: W_17, x: X_7) => TReturn_43;
        proxy<TReturn_44, A_37, B_32, C_27, D_22, E_17, T_57, U_39, V_28, W_18, X_8>(funсtion: (a: A_37, b: B_32, c: C_27, d: D_22, e: E_17, t: T_57, u: U_39, v: V_28, w: W_18, x: X_8) => TReturn_44, context: null, a: A_37, b: B_32, c: C_27, d: D_22, e: E_17): (t: T_57, u: U_39, v: V_28, w: W_18, x: X_8) => TReturn_44;
        proxy<TReturn_45, A_38, B_33, C_28, D_23, T_58, U_40, V_29, W_19, X_9>(funсtion: (a: A_38, b: B_33, c: C_28, d: D_23, t: T_58, u: U_40, v: V_29, w: W_19, x: X_9) => TReturn_45, context: null, a: A_38, b: B_33, c: C_28, d: D_23): (t: T_58, u: U_40, v: V_29, w: W_19, x: X_9) => TReturn_45;
        proxy<TReturn_46, A_39, B_34, C_29, T_59, U_41, V_30, W_20, X_10>(funсtion: (a: A_39, b: B_34, c: C_29, t: T_59, u: U_41, v: V_30, w: W_20, x: X_10) => TReturn_46, context: null, a: A_39, b: B_34, c: C_29): (t: T_59, u: U_41, v: V_30, w: W_20, x: X_10) => TReturn_46;
        proxy<TReturn_47, A_40, B_35, T_60, U_42, V_31, W_21, X_11>(funсtion: (a: A_40, b: B_35, t: T_60, u: U_42, v: V_31, w: W_21, x: X_11) => TReturn_47, context: null, a: A_40, b: B_35): (t: T_60, u: U_42, v: V_31, w: W_21, x: X_11) => TReturn_47;
        proxy<TReturn_48, A_41, T_61, U_43, V_32, W_22, X_12>(funсtion: (a: A_41, t: T_61, u: U_43, v: V_32, w: W_22, x: X_12) => TReturn_48, context: null, a: A_41): (t: T_61, u: U_43, v: V_32, w: W_22, x: X_12) => TReturn_48;
        proxy<TReturn_49, T_62, U_44, V_33, W_23, X_13>(funсtion: (t: T_62, u: U_44, v: V_33, w: W_23, x: X_13) => TReturn_49, context: null): (t: T_62, u: U_44, v: V_33, w: W_23, x: X_13) => TReturn_49;
        proxy<TReturn_50, A_42, B_36, C_30, D_24, E_18, F_12, G_6, T_63, U_45, V_34, W_24, X_14, Y_4>(funсtion: (a: A_42, b: B_36, c: C_30, d: D_24, e: E_18, f: F_12, g: G_6, t: T_63, u: U_45, v: V_34, w: W_24, x: X_14, y: Y_4) => TReturn_50, context: null, a: A_42, b: B_36, c: C_30, d: D_24, e: E_18, f: F_12, g: G_6): (t: T_63, u: U_45, v: V_34, w: W_24, x: X_14, y: Y_4) => TReturn_50;
        proxy<TReturn_51, A_43, B_37, C_31, D_25, E_19, F_13, T_64, U_46, V_35, W_25, X_15, Y_5>(funсtion: (a: A_43, b: B_37, c: C_31, d: D_25, e: E_19, f: F_13, t: T_64, u: U_46, v: V_35, w: W_25, x: X_15, y: Y_5) => TReturn_51, context: null, a: A_43, b: B_37, c: C_31, d: D_25, e: E_19, f: F_13): (t: T_64, u: U_46, v: V_35, w: W_25, x: X_15, y: Y_5) => TReturn_51;
        proxy<TReturn_52, A_44, B_38, C_32, D_26, E_20, T_65, U_47, V_36, W_26, X_16, Y_6>(funсtion: (a: A_44, b: B_38, c: C_32, d: D_26, e: E_20, t: T_65, u: U_47, v: V_36, w: W_26, x: X_16, y: Y_6) => TReturn_52, context: null, a: A_44, b: B_38, c: C_32, d: D_26, e: E_20): (t: T_65, u: U_47, v: V_36, w: W_26, x: X_16, y: Y_6) => TReturn_52;
        proxy<TReturn_53, A_45, B_39, C_33, D_27, T_66, U_48, V_37, W_27, X_17, Y_7>(funсtion: (a: A_45, b: B_39, c: C_33, d: D_27, t: T_66, u: U_48, v: V_37, w: W_27, x: X_17, y: Y_7) => TReturn_53, context: null, a: A_45, b: B_39, c: C_33, d: D_27): (t: T_66, u: U_48, v: V_37, w: W_27, x: X_17, y: Y_7) => TReturn_53;
        proxy<TReturn_54, A_46, B_40, C_34, T_67, U_49, V_38, W_28, X_18, Y_8>(funсtion: (a: A_46, b: B_40, c: C_34, t: T_67, u: U_49, v: V_38, w: W_28, x: X_18, y: Y_8) => TReturn_54, context: null, a: A_46, b: B_40, c: C_34): (t: T_67, u: U_49, v: V_38, w: W_28, x: X_18, y: Y_8) => TReturn_54;
        proxy<TReturn_55, A_47, B_41, T_68, U_50, V_39, W_29, X_19, Y_9>(funсtion: (a: A_47, b: B_41, t: T_68, u: U_50, v: V_39, w: W_29, x: X_19, y: Y_9) => TReturn_55, context: null, a: A_47, b: B_41): (t: T_68, u: U_50, v: V_39, w: W_29, x: X_19, y: Y_9) => TReturn_55;
        proxy<TReturn_56, A_48, T_69, U_51, V_40, W_30, X_20, Y_10>(funсtion: (a: A_48, t: T_69, u: U_51, v: V_40, w: W_30, x: X_20, y: Y_10) => TReturn_56, context: null, a: A_48): (t: T_69, u: U_51, v: V_40, w: W_30, x: X_20, y: Y_10) => TReturn_56;
        proxy<TReturn_57, T_70, U_52, V_41, W_31, X_21, Y_11>(funсtion: (t: T_70, u: U_52, v: V_41, w: W_31, x: X_21, y: Y_11) => TReturn_57, context: null): (t: T_70, u: U_52, v: V_41, w: W_31, x: X_21, y: Y_11) => TReturn_57;
        proxy<TReturn_58, A_49, B_42, C_35, D_28, E_21, F_14, G_7, T_71, U_53, V_42, W_32, X_22, Y_12, Z_2>(funсtion: (a: A_49, b: B_42, c: C_35, d: D_28, e: E_21, f: F_14, g: G_7, t: T_71, u: U_53, v: V_42, w: W_32, x: X_22, y: Y_12, z: Z_2, ...args: any[]) => TReturn_58, context: null, a: A_49, b: B_42, c: C_35, d: D_28, e: E_21, f: F_14, g: G_7): (t: T_71, u: U_53, v: V_42, w: W_32, x: X_22, y: Y_12, z: Z_2, ...args: any[]) => TReturn_58;
        proxy<TReturn_59, A_50, B_43, C_36, D_29, E_22, F_15, T_72, U_54, V_43, W_33, X_23, Y_13, Z_3>(funсtion: (a: A_50, b: B_43, c: C_36, d: D_29, e: E_22, f: F_15, t: T_72, u: U_54, v: V_43, w: W_33, x: X_23, y: Y_13, z: Z_3, ...args: any[]) => TReturn_59, context: null, a: A_50, b: B_43, c: C_36, d: D_29, e: E_22, f: F_15): (t: T_72, u: U_54, v: V_43, w: W_33, x: X_23, y: Y_13, z: Z_3, ...args: any[]) => TReturn_59;
        proxy<TReturn_60, A_51, B_44, C_37, D_30, E_23, T_73, U_55, V_44, W_34, X_24, Y_14, Z_4>(funсtion: (a: A_51, b: B_44, c: C_37, d: D_30, e: E_23, t: T_73, u: U_55, v: V_44, w: W_34, x: X_24, y: Y_14, z: Z_4, ...args: any[]) => TReturn_60, context: null, a: A_51, b: B_44, c: C_37, d: D_30, e: E_23): (t: T_73, u: U_55, v: V_44, w: W_34, x: X_24, y: Y_14, z: Z_4, ...args: any[]) => TReturn_60;
        proxy<TReturn_61, A_52, B_45, C_38, D_31, T_74, U_56, V_45, W_35, X_25, Y_15, Z_5>(funсtion: (a: A_52, b: B_45, c: C_38, d: D_31, t: T_74, u: U_56, v: V_45, w: W_35, x: X_25, y: Y_15, z: Z_5, ...args: any[]) => TReturn_61, context: null, a: A_52, b: B_45, c: C_38, d: D_31): (t: T_74, u: U_56, v: V_45, w: W_35, x: X_25, y: Y_15, z: Z_5, ...args: any[]) => TReturn_61;
        proxy<TReturn_62, A_53, B_46, C_39, T_75, U_57, V_46, W_36, X_26, Y_16, Z_6>(funсtion: (a: A_53, b: B_46, c: C_39, t: T_75, u: U_57, v: V_46, w: W_36, x: X_26, y: Y_16, z: Z_6, ...args: any[]) => TReturn_62, context: null, a: A_53, b: B_46, c: C_39): (t: T_75, u: U_57, v: V_46, w: W_36, x: X_26, y: Y_16, z: Z_6, ...args: any[]) => TReturn_62;
        proxy<TReturn_63, A_54, B_47, T_76, U_58, V_47, W_37, X_27, Y_17, Z_7>(funсtion: (a: A_54, b: B_47, t: T_76, u: U_58, v: V_47, w: W_37, x: X_27, y: Y_17, z: Z_7, ...args: any[]) => TReturn_63, context: null, a: A_54, b: B_47): (t: T_76, u: U_58, v: V_47, w: W_37, x: X_27, y: Y_17, z: Z_7, ...args: any[]) => TReturn_63;
        proxy<TReturn_64, A_55, T_77, U_59, V_48, W_38, X_28, Y_18, Z_8>(funсtion: (a: A_55, t: T_77, u: U_59, v: V_48, w: W_38, x: X_28, y: Y_18, z: Z_8, ...args: any[]) => TReturn_64, context: null, a: A_55): (t: T_77, u: U_59, v: V_48, w: W_38, x: X_28, y: Y_18, z: Z_8, ...args: any[]) => TReturn_64;
        proxy<TReturn_65, T_78, U_60, V_49, W_39, X_29, Y_19, Z_9>(funсtion: (t: T_78, u: U_60, v: V_49, w: W_39, x: X_29, y: Y_19, z: Z_9, ...args: any[]) => TReturn_65, context: null): (t: T_78, u: U_60, v: V_49, w: W_39, x: X_29, y: Y_19, z: Z_9, ...args: any[]) => TReturn_65;
        proxy<TReturn_66>(funсtion: (...args: any[]) => TReturn_66, context: null, ...additionalArguments: any[]): (...args: any[]) => TReturn_66;
        proxy<TContext, TReturn_67, A_56, B_48, C_40, D_32, E_24, F_16, G_8>(funсtion: (this: TContext, a: A_56, b: B_48, c: C_40, d: D_32, e: E_24, f: F_16, g: G_8) => TReturn_67, context: TContext, a: A_56, b: B_48, c: C_40, d: D_32, e: E_24, f: F_16, g: G_8): () => TReturn_67;
        proxy<TContext_1, TReturn_68, A_57, B_49, C_41, D_33, E_25, F_17>(funсtion: (this: TContext_1, a: A_57, b: B_49, c: C_41, d: D_33, e: E_25, f: F_17) => TReturn_68, context: TContext_1, a: A_57, b: B_49, c: C_41, d: D_33, e: E_25, f: F_17): () => TReturn_68;
        proxy<TContext_2, TReturn_69, A_58, B_50, C_42, D_34, E_26>(funсtion: (this: TContext_2, a: A_58, b: B_50, c: C_42, d: D_34, e: E_26) => TReturn_69, context: TContext_2, a: A_58, b: B_50, c: C_42, d: D_34, e: E_26): () => TReturn_69;
        proxy<TContext_3, TReturn_70, A_59, B_51, C_43, D_35>(funсtion: (this: TContext_3, a: A_59, b: B_51, c: C_43, d: D_35) => TReturn_70, context: TContext_3, a: A_59, b: B_51, c: C_43, d: D_35): () => TReturn_70;
        proxy<TContext_4, TReturn_71, A_60, B_52, C_44>(funсtion: (this: TContext_4, a: A_60, b: B_52, c: C_44) => TReturn_71, context: TContext_4, a: A_60, b: B_52, c: C_44): () => TReturn_71;
        proxy<TContext_5, TReturn_72, A_61, B_53>(funсtion: (this: TContext_5, a: A_61, b: B_53) => TReturn_72, context: TContext_5, a: A_61, b: B_53): () => TReturn_72;
        proxy<TContext_6, TReturn_73, A_62>(funсtion: (this: TContext_6, a: A_62) => TReturn_73, context: TContext_6, a: A_62): () => TReturn_73;
        proxy<TContext_7, TReturn_74>(funсtion: (this: TContext_7) => TReturn_74, context: TContext_7): () => TReturn_74;
        proxy<TContext_8, TReturn_75, A_63, B_54, C_45, D_36, E_27, F_18, G_9, T_79>(funсtion: (this: TContext_8, a: A_63, b: B_54, c: C_45, d: D_36, e: E_27, f: F_18, g: G_9, t: T_79) => TReturn_75, context: TContext_8, a: A_63, b: B_54, c: C_45, d: D_36, e: E_27, f: F_18, g: G_9): (t: T_79) => TReturn_75;
        proxy<TContext_9, TReturn_76, A_64, B_55, C_46, D_37, E_28, F_19, T_80>(funсtion: (this: TContext_9, a: A_64, b: B_55, c: C_46, d: D_37, e: E_28, f: F_19, t: T_80) => TReturn_76, context: TContext_9, a: A_64, b: B_55, c: C_46, d: D_37, e: E_28, f: F_19): (t: T_80) => TReturn_76;
        proxy<TContext_10, TReturn_77, A_65, B_56, C_47, D_38, E_29, T_81>(funсtion: (this: TContext_10, a: A_65, b: B_56, c: C_47, d: D_38, e: E_29, t: T_81) => TReturn_77, context: TContext_10, a: A_65, b: B_56, c: C_47, d: D_38, e: E_29): (t: T_81) => TReturn_77;
        proxy<TContext_11, TReturn_78, A_66, B_57, C_48, D_39, T_82>(funсtion: (this: TContext_11, a: A_66, b: B_57, c: C_48, d: D_39, t: T_82) => TReturn_78, context: TContext_11, a: A_66, b: B_57, c: C_48, d: D_39): (t: T_82) => TReturn_78;
        proxy<TContext_12, TReturn_79, A_67, B_58, C_49, T_83>(funсtion: (this: TContext_12, a: A_67, b: B_58, c: C_49, t: T_83) => TReturn_79, context: TContext_12, a: A_67, b: B_58, c: C_49): (t: T_83) => TReturn_79;
        proxy<TContext_13, TReturn_80, A_68, B_59, T_84>(funсtion: (this: TContext_13, a: A_68, b: B_59, t: T_84) => TReturn_80, context: TContext_13, a: A_68, b: B_59): (t: T_84) => TReturn_80;
        proxy<TContext_14, TReturn_81, A_69, T_85>(funсtion: (this: TContext_14, a: A_69, t: T_85) => TReturn_81, context: TContext_14, a: A_69): (t: T_85) => TReturn_81;
        proxy<TContext_15, TReturn_82, T_86>(funсtion: (this: TContext_15, t: T_86) => TReturn_82, context: TContext_15): (t: T_86) => TReturn_82;
        proxy<TContext_16, TReturn_83, A_70, B_60, C_50, D_40, E_30, F_20, G_10, T_87, U_61>(funсtion: (this: TContext_16, a: A_70, b: B_60, c: C_50, d: D_40, e: E_30, f: F_20, g: G_10, t: T_87, u: U_61) => TReturn_83, context: TContext_16, a: A_70, b: B_60, c: C_50, d: D_40, e: E_30, f: F_20, g: G_10): (t: T_87, u: U_61) => TReturn_83;
        proxy<TContext_17, TReturn_84, A_71, B_61, C_51, D_41, E_31, F_21, T_88, U_62>(funсtion: (this: TContext_17, a: A_71, b: B_61, c: C_51, d: D_41, e: E_31, f: F_21, t: T_88, u: U_62) => TReturn_84, context: TContext_17, a: A_71, b: B_61, c: C_51, d: D_41, e: E_31, f: F_21): (t: T_88, u: U_62) => TReturn_84;
        proxy<TContext_18, TReturn_85, A_72, B_62, C_52, D_42, E_32, T_89, U_63>(funсtion: (this: TContext_18, a: A_72, b: B_62, c: C_52, d: D_42, e: E_32, t: T_89, u: U_63) => TReturn_85, context: TContext_18, a: A_72, b: B_62, c: C_52, d: D_42, e: E_32): (t: T_89, u: U_63) => TReturn_85;
        proxy<TContext_19, TReturn_86, A_73, B_63, C_53, D_43, T_90, U_64>(funсtion: (this: TContext_19, a: A_73, b: B_63, c: C_53, d: D_43, t: T_90, u: U_64) => TReturn_86, context: TContext_19, a: A_73, b: B_63, c: C_53, d: D_43): (t: T_90, u: U_64) => TReturn_86;
        proxy<TContext_20, TReturn_87, A_74, B_64, C_54, T_91, U_65>(funсtion: (this: TContext_20, a: A_74, b: B_64, c: C_54, t: T_91, u: U_65) => TReturn_87, context: TContext_20, a: A_74, b: B_64, c: C_54): (t: T_91, u: U_65) => TReturn_87;
        proxy<TContext_21, TReturn_88, A_75, B_65, T_92, U_66>(funсtion: (this: TContext_21, a: A_75, b: B_65, t: T_92, u: U_66) => TReturn_88, context: TContext_21, a: A_75, b: B_65): (t: T_92, u: U_66) => TReturn_88;
        proxy<TContext_22, TReturn_89, A_76, T_93, U_67>(funсtion: (this: TContext_22, a: A_76, t: T_93, u: U_67) => TReturn_89, context: TContext_22, a: A_76): (t: T_93, u: U_67) => TReturn_89;
        proxy<TContext_23, TReturn_90, T_94, U_68>(funсtion: (this: TContext_23, t: T_94, u: U_68) => TReturn_90, context: TContext_23): (t: T_94, u: U_68) => TReturn_90;
        proxy<TContext_24, TReturn_91, A_77, B_66, C_55, D_44, E_33, F_22, G_11, T_95, U_69, V_50>(funсtion: (this: TContext_24, a: A_77, b: B_66, c: C_55, d: D_44, e: E_33, f: F_22, g: G_11, t: T_95, u: U_69, v: V_50) => TReturn_91, context: TContext_24, a: A_77, b: B_66, c: C_55, d: D_44, e: E_33, f: F_22, g: G_11): (t: T_95, u: U_69, v: V_50) => TReturn_91;
        proxy<TContext_25, TReturn_92, A_78, B_67, C_56, D_45, E_34, F_23, T_96, U_70, V_51>(funсtion: (this: TContext_25, a: A_78, b: B_67, c: C_56, d: D_45, e: E_34, f: F_23, t: T_96, u: U_70, v: V_51) => TReturn_92, context: TContext_25, a: A_78, b: B_67, c: C_56, d: D_45, e: E_34, f: F_23): (t: T_96, u: U_70, v: V_51) => TReturn_92;
        proxy<TContext_26, TReturn_93, A_79, B_68, C_57, D_46, E_35, T_97, U_71, V_52>(funсtion: (this: TContext_26, a: A_79, b: B_68, c: C_57, d: D_46, e: E_35, t: T_97, u: U_71, v: V_52) => TReturn_93, context: TContext_26, a: A_79, b: B_68, c: C_57, d: D_46, e: E_35): (t: T_97, u: U_71, v: V_52) => TReturn_93;
        proxy<TContext_27, TReturn_94, A_80, B_69, C_58, D_47, T_98, U_72, V_53>(funсtion: (this: TContext_27, a: A_80, b: B_69, c: C_58, d: D_47, t: T_98, u: U_72, v: V_53) => TReturn_94, context: TContext_27, a: A_80, b: B_69, c: C_58, d: D_47): (t: T_98, u: U_72, v: V_53) => TReturn_94;
        proxy<TContext_28, TReturn_95, A_81, B_70, C_59, T_99, U_73, V_54>(funсtion: (this: TContext_28, a: A_81, b: B_70, c: C_59, t: T_99, u: U_73, v: V_54) => TReturn_95, context: TContext_28, a: A_81, b: B_70, c: C_59): (t: T_99, u: U_73, v: V_54) => TReturn_95;
        proxy<TContext_29, TReturn_96, A_82, B_71, T_100, U_74, V_55>(funсtion: (this: TContext_29, a: A_82, b: B_71, t: T_100, u: U_74, v: V_55) => TReturn_96, context: TContext_29, a: A_82, b: B_71): (t: T_100, u: U_74, v: V_55) => TReturn_96;
        proxy<TContext_30, TReturn_97, A_83, T_101, U_75, V_56>(funсtion: (this: TContext_30, a: A_83, t: T_101, u: U_75, v: V_56) => TReturn_97, context: TContext_30, a: A_83): (t: T_101, u: U_75, v: V_56) => TReturn_97;
        proxy<TContext_31, TReturn_98, T_102, U_76, V_57>(funсtion: (this: TContext_31, t: T_102, u: U_76, v: V_57) => TReturn_98, context: TContext_31): (t: T_102, u: U_76, v: V_57) => TReturn_98;
        proxy<TContext_32, TReturn_99, A_84, B_72, C_60, D_48, E_36, F_24, G_12, T_103, U_77, V_58, W_40>(funсtion: (this: TContext_32, a: A_84, b: B_72, c: C_60, d: D_48, e: E_36, f: F_24, g: G_12, t: T_103, u: U_77, v: V_58, w: W_40) => TReturn_99, context: TContext_32, a: A_84, b: B_72, c: C_60, d: D_48, e: E_36, f: F_24, g: G_12): (t: T_103, u: U_77, v: V_58, w: W_40) => TReturn_99;
        proxy<TContext_33, TReturn_100, A_85, B_73, C_61, D_49, E_37, F_25, T_104, U_78, V_59, W_41>(funсtion: (this: TContext_33, a: A_85, b: B_73, c: C_61, d: D_49, e: E_37, f: F_25, t: T_104, u: U_78, v: V_59, w: W_41) => TReturn_100, context: TContext_33, a: A_85, b: B_73, c: C_61, d: D_49, e: E_37, f: F_25): (t: T_104, u: U_78, v: V_59, w: W_41) => TReturn_100;
        proxy<TContext_34, TReturn_101, A_86, B_74, C_62, D_50, E_38, T_105, U_79, V_60, W_42>(funсtion: (this: TContext_34, a: A_86, b: B_74, c: C_62, d: D_50, e: E_38, t: T_105, u: U_79, v: V_60, w: W_42) => TReturn_101, context: TContext_34, a: A_86, b: B_74, c: C_62, d: D_50, e: E_38): (t: T_105, u: U_79, v: V_60, w: W_42) => TReturn_101;
        proxy<TContext_35, TReturn_102, A_87, B_75, C_63, D_51, T_106, U_80, V_61, W_43>(funсtion: (this: TContext_35, a: A_87, b: B_75, c: C_63, d: D_51, t: T_106, u: U_80, v: V_61, w: W_43) => TReturn_102, context: TContext_35, a: A_87, b: B_75, c: C_63, d: D_51): (t: T_106, u: U_80, v: V_61, w: W_43) => TReturn_102;
        proxy<TContext_36, TReturn_103, A_88, B_76, C_64, T_107, U_81, V_62, W_44>(funсtion: (this: TContext_36, a: A_88, b: B_76, c: C_64, t: T_107, u: U_81, v: V_62, w: W_44) => TReturn_103, context: TContext_36, a: A_88, b: B_76, c: C_64): (t: T_107, u: U_81, v: V_62, w: W_44) => TReturn_103;
        proxy<TContext_37, TReturn_104, A_89, B_77, T_108, U_82, V_63, W_45>(funсtion: (this: TContext_37, a: A_89, b: B_77, t: T_108, u: U_82, v: V_63, w: W_45) => TReturn_104, context: TContext_37, a: A_89, b: B_77): (t: T_108, u: U_82, v: V_63, w: W_45) => TReturn_104;
        proxy<TContext_38, TReturn_105, A_90, T_109, U_83, V_64, W_46>(funсtion: (this: TContext_38, a: A_90, t: T_109, u: U_83, v: V_64, w: W_46) => TReturn_105, context: TContext_38, a: A_90): (t: T_109, u: U_83, v: V_64, w: W_46) => TReturn_105;
        proxy<TContext_39, TReturn_106, T_110, U_84, V_65, W_47>(funсtion: (this: TContext_39, t: T_110, u: U_84, v: V_65, w: W_47) => TReturn_106, context: TContext_39): (t: T_110, u: U_84, v: V_65, w: W_47) => TReturn_106;
        proxy<TContext_40, TReturn_107, A_91, B_78, C_65, D_52, E_39, F_26, G_13, T_111, U_85, V_66, W_48, X_30>(funсtion: (this: TContext_40, a: A_91, b: B_78, c: C_65, d: D_52, e: E_39, f: F_26, g: G_13, t: T_111, u: U_85, v: V_66, w: W_48, x: X_30) => TReturn_107, context: TContext_40, a: A_91, b: B_78, c: C_65, d: D_52, e: E_39, f: F_26, g: G_13): (t: T_111, u: U_85, v: V_66, w: W_48, x: X_30) => TReturn_107;
        proxy<TContext_41, TReturn_108, A_92, B_79, C_66, D_53, E_40, F_27, T_112, U_86, V_67, W_49, X_31>(funсtion: (this: TContext_41, a: A_92, b: B_79, c: C_66, d: D_53, e: E_40, f: F_27, t: T_112, u: U_86, v: V_67, w: W_49, x: X_31) => TReturn_108, context: TContext_41, a: A_92, b: B_79, c: C_66, d: D_53, e: E_40, f: F_27): (t: T_112, u: U_86, v: V_67, w: W_49, x: X_31) => TReturn_108;
        proxy<TContext_42, TReturn_109, A_93, B_80, C_67, D_54, E_41, T_113, U_87, V_68, W_50, X_32>(funсtion: (this: TContext_42, a: A_93, b: B_80, c: C_67, d: D_54, e: E_41, t: T_113, u: U_87, v: V_68, w: W_50, x: X_32) => TReturn_109, context: TContext_42, a: A_93, b: B_80, c: C_67, d: D_54, e: E_41): (t: T_113, u: U_87, v: V_68, w: W_50, x: X_32) => TReturn_109;
        proxy<TContext_43, TReturn_110, A_94, B_81, C_68, D_55, T_114, U_88, V_69, W_51, X_33>(funсtion: (this: TContext_43, a: A_94, b: B_81, c: C_68, d: D_55, t: T_114, u: U_88, v: V_69, w: W_51, x: X_33) => TReturn_110, context: TContext_43, a: A_94, b: B_81, c: C_68, d: D_55): (t: T_114, u: U_88, v: V_69, w: W_51, x: X_33) => TReturn_110;
        proxy<TContext_44, TReturn_111, A_95, B_82, C_69, T_115, U_89, V_70, W_52, X_34>(funсtion: (this: TContext_44, a: A_95, b: B_82, c: C_69, t: T_115, u: U_89, v: V_70, w: W_52, x: X_34) => TReturn_111, context: TContext_44, a: A_95, b: B_82, c: C_69): (t: T_115, u: U_89, v: V_70, w: W_52, x: X_34) => TReturn_111;
        proxy<TContext_45, TReturn_112, A_96, B_83, T_116, U_90, V_71, W_53, X_35>(funсtion: (this: TContext_45, a: A_96, b: B_83, t: T_116, u: U_90, v: V_71, w: W_53, x: X_35) => TReturn_112, context: TContext_45, a: A_96, b: B_83): (t: T_116, u: U_90, v: V_71, w: W_53, x: X_35) => TReturn_112;
        proxy<TContext_46, TReturn_113, A_97, T_117, U_91, V_72, W_54, X_36>(funсtion: (this: TContext_46, a: A_97, t: T_117, u: U_91, v: V_72, w: W_54, x: X_36) => TReturn_113, context: TContext_46, a: A_97): (t: T_117, u: U_91, v: V_72, w: W_54, x: X_36) => TReturn_113;
        proxy<TContext_47, TReturn_114, T_118, U_92, V_73, W_55, X_37>(funсtion: (this: TContext_47, t: T_118, u: U_92, v: V_73, w: W_55, x: X_37) => TReturn_114, context: TContext_47): (t: T_118, u: U_92, v: V_73, w: W_55, x: X_37) => TReturn_114;
        proxy<TContext_48, TReturn_115, A_98, B_84, C_70, D_56, E_42, F_28, G_14, T_119, U_93, V_74, W_56, X_38, Y_20>(funсtion: (this: TContext_48, a: A_98, b: B_84, c: C_70, d: D_56, e: E_42, f: F_28, g: G_14, t: T_119, u: U_93, v: V_74, w: W_56, x: X_38, y: Y_20) => TReturn_115, context: TContext_48, a: A_98, b: B_84, c: C_70, d: D_56, e: E_42, f: F_28, g: G_14): (t: T_119, u: U_93, v: V_74, w: W_56, x: X_38, y: Y_20) => TReturn_115;
        proxy<TContext_49, TReturn_116, A_99, B_85, C_71, D_57, E_43, F_29, T_120, U_94, V_75, W_57, X_39, Y_21>(funсtion: (this: TContext_49, a: A_99, b: B_85, c: C_71, d: D_57, e: E_43, f: F_29, t: T_120, u: U_94, v: V_75, w: W_57, x: X_39, y: Y_21) => TReturn_116, context: TContext_49, a: A_99, b: B_85, c: C_71, d: D_57, e: E_43, f: F_29): (t: T_120, u: U_94, v: V_75, w: W_57, x: X_39, y: Y_21) => TReturn_116;
        proxy<TContext_50, TReturn_117, A_100, B_86, C_72, D_58, E_44, T_121, U_95, V_76, W_58, X_40, Y_22>(funсtion: (this: TContext_50, a: A_100, b: B_86, c: C_72, d: D_58, e: E_44, t: T_121, u: U_95, v: V_76, w: W_58, x: X_40, y: Y_22) => TReturn_117, context: TContext_50, a: A_100, b: B_86, c: C_72, d: D_58, e: E_44): (t: T_121, u: U_95, v: V_76, w: W_58, x: X_40, y: Y_22) => TReturn_117;
        proxy<TContext_51, TReturn_118, A_101, B_87, C_73, D_59, T_122, U_96, V_77, W_59, X_41, Y_23>(funсtion: (this: TContext_51, a: A_101, b: B_87, c: C_73, d: D_59, t: T_122, u: U_96, v: V_77, w: W_59, x: X_41, y: Y_23) => TReturn_118, context: TContext_51, a: A_101, b: B_87, c: C_73, d: D_59): (t: T_122, u: U_96, v: V_77, w: W_59, x: X_41, y: Y_23) => TReturn_118;
        proxy<TContext_52, TReturn_119, A_102, B_88, C_74, T_123, U_97, V_78, W_60, X_42, Y_24>(funсtion: (this: TContext_52, a: A_102, b: B_88, c: C_74, t: T_123, u: U_97, v: V_78, w: W_60, x: X_42, y: Y_24) => TReturn_119, context: TContext_52, a: A_102, b: B_88, c: C_74): (t: T_123, u: U_97, v: V_78, w: W_60, x: X_42, y: Y_24) => TReturn_119;
        proxy<TContext_53, TReturn_120, A_103, B_89, T_124, U_98, V_79, W_61, X_43, Y_25>(funсtion: (this: TContext_53, a: A_103, b: B_89, t: T_124, u: U_98, v: V_79, w: W_61, x: X_43, y: Y_25) => TReturn_120, context: TContext_53, a: A_103, b: B_89): (t: T_124, u: U_98, v: V_79, w: W_61, x: X_43, y: Y_25) => TReturn_120;
        proxy<TContext_54, TReturn_121, A_104, T_125, U_99, V_80, W_62, X_44, Y_26>(funсtion: (this: TContext_54, a: A_104, t: T_125, u: U_99, v: V_80, w: W_62, x: X_44, y: Y_26) => TReturn_121, context: TContext_54, a: A_104): (t: T_125, u: U_99, v: V_80, w: W_62, x: X_44, y: Y_26) => TReturn_121;
        proxy<TContext_55, TReturn_122, T_126, U_100, V_81, W_63, X_45, Y_27>(funсtion: (this: TContext_55, t: T_126, u: U_100, v: V_81, w: W_63, x: X_45, y: Y_27) => TReturn_122, context: TContext_55): (t: T_126, u: U_100, v: V_81, w: W_63, x: X_45, y: Y_27) => TReturn_122;
        proxy<TContext_56, TReturn_123, A_105, B_90, C_75, D_60, E_45, F_30, G_15, T_127, U_101, V_82, W_64, X_46, Y_28, Z_10>(funсtion: (this: TContext_56, a: A_105, b: B_90, c: C_75, d: D_60, e: E_45, f: F_30, g: G_15, t: T_127, u: U_101, v: V_82, w: W_64, x: X_46, y: Y_28, z: Z_10, ...args: any[]) => TReturn_123, context: TContext_56, a: A_105, b: B_90, c: C_75, d: D_60, e: E_45, f: F_30, g: G_15): (t: T_127, u: U_101, v: V_82, w: W_64, x: X_46, y: Y_28, z: Z_10, ...args: any[]) => TReturn_123;
        proxy<TContext_57, TReturn_124, A_106, B_91, C_76, D_61, E_46, F_31, T_128, U_102, V_83, W_65, X_47, Y_29, Z_11>(funсtion: (this: TContext_57, a: A_106, b: B_91, c: C_76, d: D_61, e: E_46, f: F_31, t: T_128, u: U_102, v: V_83, w: W_65, x: X_47, y: Y_29, z: Z_11, ...args: any[]) => TReturn_124, context: TContext_57, a: A_106, b: B_91, c: C_76, d: D_61, e: E_46, f: F_31): (t: T_128, u: U_102, v: V_83, w: W_65, x: X_47, y: Y_29, z: Z_11, ...args: any[]) => TReturn_124;
        proxy<TContext_58, TReturn_125, A_107, B_92, C_77, D_62, E_47, T_129, U_103, V_84, W_66, X_48, Y_30, Z_12>(funсtion: (this: TContext_58, a: A_107, b: B_92, c: C_77, d: D_62, e: E_47, t: T_129, u: U_103, v: V_84, w: W_66, x: X_48, y: Y_30, z: Z_12, ...args: any[]) => TReturn_125, context: TContext_58, a: A_107, b: B_92, c: C_77, d: D_62, e: E_47): (t: T_129, u: U_103, v: V_84, w: W_66, x: X_48, y: Y_30, z: Z_12, ...args: any[]) => TReturn_125;
        proxy<TContext_59, TReturn_126, A_108, B_93, C_78, D_63, T_130, U_104, V_85, W_67, X_49, Y_31, Z_13>(funсtion: (this: TContext_59, a: A_108, b: B_93, c: C_78, d: D_63, t: T_130, u: U_104, v: V_85, w: W_67, x: X_49, y: Y_31, z: Z_13, ...args: any[]) => TReturn_126, context: TContext_59, a: A_108, b: B_93, c: C_78, d: D_63): (t: T_130, u: U_104, v: V_85, w: W_67, x: X_49, y: Y_31, z: Z_13, ...args: any[]) => TReturn_126;
        proxy<TContext_60, TReturn_127, A_109, B_94, C_79, T_131, U_105, V_86, W_68, X_50, Y_32, Z_14>(funсtion: (this: TContext_60, a: A_109, b: B_94, c: C_79, t: T_131, u: U_105, v: V_86, w: W_68, x: X_50, y: Y_32, z: Z_14, ...args: any[]) => TReturn_127, context: TContext_60, a: A_109, b: B_94, c: C_79): (t: T_131, u: U_105, v: V_86, w: W_68, x: X_50, y: Y_32, z: Z_14, ...args: any[]) => TReturn_127;
        proxy<TContext_61, TReturn_128, A_110, B_95, T_132, U_106, V_87, W_69, X_51, Y_33, Z_15>(funсtion: (this: TContext_61, a: A_110, b: B_95, t: T_132, u: U_106, v: V_87, w: W_69, x: X_51, y: Y_33, z: Z_15, ...args: any[]) => TReturn_128, context: TContext_61, a: A_110, b: B_95): (t: T_132, u: U_106, v: V_87, w: W_69, x: X_51, y: Y_33, z: Z_15, ...args: any[]) => TReturn_128;
        proxy<TContext_62, TReturn_129, A_111, T_133, U_107, V_88, W_70, X_52, Y_34, Z_16>(funсtion: (this: TContext_62, a: A_111, t: T_133, u: U_107, v: V_88, w: W_70, x: X_52, y: Y_34, z: Z_16, ...args: any[]) => TReturn_129, context: TContext_62, a: A_111): (t: T_133, u: U_107, v: V_88, w: W_70, x: X_52, y: Y_34, z: Z_16, ...args: any[]) => TReturn_129;
        proxy<TContext_63, TReturn_130, T_134, U_108, V_89, W_71, X_53, Y_35, Z_17>(funсtion: (this: TContext_63, t: T_134, u: U_108, v: V_89, w: W_71, x: X_53, y: Y_35, z: Z_17, ...args: any[]) => TReturn_130, context: TContext_63): (t: T_134, u: U_108, v: V_89, w: W_71, x: X_53, y: Y_35, z: Z_17, ...args: any[]) => TReturn_130;
        proxy<TContext_64, TReturn_131>(funсtion: (this: TContext_64, ...args: any[]) => TReturn_131, context: TContext_64, ...additionalArguments: any[]): (...args: any[]) => TReturn_131;
        proxy<TContext_65>(context: TContext_65, name: keyof TContext_65, ...additionalArguments: any[]): (...args: any[]) => any;
        queue<T_135 extends Element>(element: T_135, queueName?: string, newQueue?: JQuery.TypeOrArray<JQuery.QueueFunction<T_135>>): JQuery.Queue<T_135>;
        readyException(error: Error): any;
        removeData(element: Element | Document | Window | JQuery.PlainObject<any>, name?: string): void;
        speed<TElement extends Element = HTMLElement>(duration: JQuery.Duration, easing: string, complete: (this: TElement) => void): JQuery.EffectsOptions<TElement>;
        speed<TElement_1 extends Element = HTMLElement>(duration: JQuery.Duration, easing_complete: string | ((this: TElement_1) => void)): JQuery.EffectsOptions<TElement_1>;
        speed<TElement_2 extends Element = HTMLElement>(duration_complete_settings?: JQuery.Duration | JQuery.SpeedSettings<TElement_2> | ((this: TElement_2) => void)): JQuery.EffectsOptions<TElement_2>;
        trim(str: string): string;
        type(obj: any): "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "error" | "date" | "array" | "null" | "regexp";
        unique<T_136 extends Element>(array: T_136[]): T_136[];
        uniqueSort<T_137 extends Element>(array: T_137[]): T_137[];
        when<TR1, UR1, VR1, TJ1 = any, UJ1 = any, VJ1 = any>(deferredT: TR1 | JQuery.Promise<TR1, TJ1, any> | JQuery.Thenable<TR1>, deferredU: UR1 | JQuery.Promise<UR1, UJ1, any> | JQuery.Thenable<UR1>, deferredV: VR1 | JQuery.Promise<VR1, VJ1, any> | JQuery.Thenable<VR1>): JQuery.Promise3<TR1, TJ1, never, UR1, UJ1, never, VR1, VJ1, never>;
        when<TR1_1, UR1_1, TJ1_1 = any, UJ1_1 = any>(deferredT: TR1_1 | JQuery.Promise<TR1_1, TJ1_1, any> | JQuery.Thenable<TR1_1>, deferredU: UR1_1 | JQuery.Promise<UR1_1, UJ1_1, any> | JQuery.Thenable<UR1_1>): JQuery.Promise2<TR1_1, TJ1_1, never, UR1_1, UJ1_1, never>;
        when<TR1_2, TJ1_2, TR2, TJ2, TR3 = never, TJ3 = never>(deferredT: JQuery.Promise3<TR1_2, TJ1_2, any, TR2, TJ2, any, TR3, TJ3, any> | JQuery.Promise2<TR1_2, TJ1_2, any, TR2, TJ2, any>): JQuery.Promise3<TR1_2, TJ1_2, never, TR2, TJ2, never, TR3, TJ3, never>;
        when<TR1_3, TJ1_3 = any>(deferred: TR1_3 | JQuery.Promise<TR1_3, TJ1_3, any> | JQuery.Thenable<TR1_3>): JQuery.Promise<TR1_3, TJ1_3, never>;
        when<TR1_4 = never, TJ1_4 = never>(...deferreds: (TR1_4 | JQuery.Promise<TR1_4, TJ1_4, any> | JQuery.Thenable<TR1_4>)[]): JQuery.Promise<TR1_4, TJ1_4, never>;
        when(...deferreds: any[]): JQuery.Promise<any, any, never>;
    };
    eValidationType: typeof EValidationType;
    ePeriod: typeof EPeriod;
    environment: import("herlhay-helpers").Environment;
    /**
     * Emits true if mobile
     */
    mobileQueryChanged: ReplaySubject<boolean>;
    isMobile: boolean;
    constructor(dialog: MatDialog, snackBar: MatSnackBar, router: Router, titleS: Title, location: Location, numberPipe: DecimalPipe, currencyPipe: CurrencyPipe, titleCasePipe: TitleCasePipe, customDatePipe: CustomDatePipe, confirmDialogService: ConfirmDialogService, mixPanelService: MixPanelService, responsive: BreakpointObserver);
    back: () => void;
    imageTypes: {
        [type: string]: boolean;
    };
    onlyOneInput(inputs: FormControl[]): void;
    copyString(str: string): Promise<void>;
    copyObject(payload: Object): Promise<void>;
    xOrY: (x: any, y?: string) => string;
    toTitleCase(text: string): string;
    /**
     * Convert Date string to Date Time string
     * @param dateStr Date string
     * @example '2022-01-25'
     * @param config Configuration for the conversion
     * @returns Returns a Date Time string
     * @example '2022-01-25T00:00:00Z' or '2022-01-25 00:00:00'
     */
    dateToDateTime: (dateStr: string, config?: {
        /**
         * Use the yyyy-mm-dd hh:mm:ss format
         */
        omitT?: boolean;
    }) => string;
    /**
     * Set an Object's field if the object exists or don't if the object doesn't
     * @param obj Object holding the field
     * @param fieldName Name of the field to set
     * @param val Value to set the field with
     * @returns Returns the object holding the data
     */
    setterWithNull<T>(obj: T, kvps: Partial<T>): T;
    /**
     * (Set an Object's field if the object exists or don't if the object doesn't) for multiple entries
     * @param items Array of objects and their modifications
     */
    setterWithNullArray<T>(items: {
        obj: T;
        kvps: Partial<T>;
    }[]): void;
    /**
     * Handles the deletion of rows from a FormArray
     * @param index Index of the row to delete
     * @param fa The FormArray that holds the rows
     * @param deleteService The deletion service to be called (It should be an anonymous function)
     * @param addRowFunc The function (anonymous) that adds a new row to the FormArray
     * @param emitEvent Specify whether to emit an event when manipulating the FormArray
     * @returns
     */
    handleFormRowDelete: (index: number, fa: UntypedFormArray, deleteService: (...args: any[]) => Promise<any> | Observable<any>, addRowFunc: (...args: any[]) => any, emitEvent?: boolean) => Promise<any>;
    formatCount: (num: number) => string;
    /**
     * Handles the deletion of rows from an array
     * @param index Index of the row to delete
     * @param arr The array that holds the rows
     * @param deleteService The deletion service to be called (It should be an anonymous function)
     * @param addRowFunc The function (anonymous) that adds a new row to the array
     * @param cb The function to callback with the response of the deletion service as the input parameter
     */
    handleRowDelete: <T>(index: number, arr: any[], deleteService: (...args: any[]) => Promise<T> | Observable<T>, addRowFunc: (...args: any[]) => any, cb?: (any: any) => any) => Promise<void>;
    /**
     * To handle the patching of a FormArray
     * @param arr The array that contains the data
     * @param addFunc The function that performs addition of single entries
     * @param formArr The FormArray that will hold the array's data
     */
    initPatchFormArray: (arr: any[], addFunc: (i: number, data?: any, formArr?: FormArray) => void, formArr: FormArray) => void;
    private isPromise;
    isAsync: (func: any) => boolean;
    isObservable: <T>(func: any) => boolean;
    promisifyVal: <T>(val: T | Promise<T> | Observable<T>) => Promise<Awaited<T>>;
    /**
     * @param arr Array of observables to fetch
     * @returns An array of the responses merged together. It emits the merged responses as they are fetched and closes once alll the responses have been fetched
     */
    mergeArrObservables: <T>(arr: {
        $func: Observable<T[]>;
    }[]) => Observable<T[]>;
    removeDuplicate<T>(list: T[], keyField?: string): T[];
    get genRandomID(): string;
    objIsEmpty: (obj: any, exclusionFields?: string[]) => boolean;
    dataGen: <T = any>(keys: string[], length?: number) => T[];
    textGen: () => string;
    trackByCode(index: number, item: any): any;
    trackByID(index: number, item: any): any;
    dialogOpener: (comp: any, config: MatDialogConfig, valueCB: (r: any) => any, noValueCB?: any) => import("rxjs").Subscription;
    dialogOpenerRef: (comp: any, config: MatDialogConfig) => import("@angular/material/dialog").MatDialogRef<unknown, any>;
    findLabelByItem: (item: any, arr: any[], labelField?: string, keyField?: string) => any;
    go: (value: string, extra?: NavigationExtras) => void;
    /**
     * Route to component
     * @param route Route of path to component
     * @param extra
     */
    goR: (route: string, extra?: NavigationExtras) => void;
    /**
     * Route to the redirect component
     * @param route Absolute path to redirect to
     * @param config Configuration for the redirection
     */
    redirect: (route: string, config?: {
        /**
         * Specify if the redirect route is an app route or external route
         */
        isExternal?: boolean;
        /**
         * Specify if to open in a new tab or current tab
         */
        newTab?: boolean;
    }) => void;
    /**
     * Open route in a new tab
     * @param route Route path
     */
    openInTab(route: string, queryParams?: {
        [x: string]: string | number;
    }): void;
    /**
     * Converts object to query parameters
     * @param parameters Query object
     * @returns
     */
    objectToQueryParams(parameters?: Object): string;
    moneyParser: (amount: string | number, currency?: string) => string;
    extractUpload(event: any): File[];
    secondsToHourMinSec: (seconds: number) => {
        hours: number;
        mins: number;
        secs: number;
    };
    minutesToDayHourMin: (minutes: number) => {
        days: number;
        hours: number;
        mins: number;
    };
    minutesToDayHourMinStr: (minutes: number) => string;
    minutesToDayHourMinStr2: (minutes: number) => string;
    dayHourMinToHourMinutes: (dys: number, hrs: number, mins: number) => string;
    disableOrEnableInputs: (controls: AbstractControl[], disable: boolean) => void;
    disableInputs: (controls: AbstractControl[]) => void;
    enableInputs: (controls: AbstractControl[]) => void;
    dayHourMinToMinutes: (dys: number, hrs: number, mins: number) => number;
    hourMinToMinutes: (hrs: number, mins: number) => number;
    hourMinToMinutes2: (hrsMins: string) => number;
    notify(message: string, cls?: 0 | 1 | 2 | 3, duration?: number, title?: string): import("@angular/material/snack-bar").MatSnackBarRef<import("@angular/material/snack-bar").TextOnlySnackBar>;
    scrollToTop: (timeout?: number) => NodeJS.Timeout;
    /**
     *
     * @returns The current date time local that can be used to set the datetime-local input
     */
    getLocalDateTimeNow: () => string;
    /** @returns The current date local that can be used to set the date input */
    localDateNow: () => string;
    dateFormat: (date: any, format?: number) => string;
    toJavaDateString: (isoDateString?: string) => string;
    timeFormat: (time?: any) => string;
    /**
     * Fri Feb 03 2023, 23:59
     * @param timestamp
     * @returns
     */
    fullDateTime: (timestamp: string | number) => string;
    /**
     *
     * @param timestamp
     * @returns
     */
    fullDateTimeLean: (timestamp: string | number) => string;
    dateFormatterUX: (date: any) => string;
    dateFormatter: (date: any) => string;
    dateTimeFormatter: (date: any) => string;
    daysFormatter: (days: number) => string;
    monthsFormatter: (months: number) => string;
    pluarlizer: (val: number, txt: string, plural?: string) => string;
    decimalToPercentage: (dec: number) => string;
    logForm: (form: any) => void;
    toCSV(data: any[], headerNames: string[], filename: string): void;
    isPictureFormat(fileName: string): boolean;
    objectToArray<T>(obj: any): T[];
    onlyUnique: <T>(value: T, index: number, self: T[]) => boolean;
    /**
     * Delete null or undefined fields from an object
     * @param obj Object to delete from
     * @returns
     */
    deleteNull: <T>(obj: T) => T;
    /**
     * Convert an object into textshowing the field and values
     * @param obj
     * @returns
     */
    objectToText: (obj: any) => string;
    /**
     * Download file from link
     * @param url Link to download file
     * @param filename Name of file including extension
     */
    downloadFromLink(url: string, filename: string): Promise<void>;
    exportHTMLToPDF(content: HTMLElement, fileName: string, config: {
        width?: number;
        height?: number;
        orientation?: 'p' | 'portrait' | 'l' | 'landscape';
    }): Promise<void>;
    exportHTMLsToPDF(contents: QueryList<ElementRef<HTMLDivElement>>, fileName: string, config: {
        width?: number;
        height?: number;
        orientation?: 'p' | 'portrait' | 'l' | 'landscape';
    }): Promise<void>;
    arrayToCSV(data: any[], filename: string, headerMap: TableCol[]): void;
    noAccessNotify(): void;
    addDaysToDate(days: number, date: Date | string | number): string;
    validatePhonenumber(control: FormControl<string>): CustomValidationError;
    get genPhoneNumber(): string;
    generateUUID(): string;
    onRouteChange: (route: ActivatedRoute, router: Router, onRouteChangeCB: (routeDataParams: any) => any) => import("rxjs").Subscription;
    confirm: (text: string) => Promise<boolean>;
    track: (actionName: string, config?: {
        status?: 0 | 1;
        action?: any;
    }) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UtilityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UtilityService>;
}
