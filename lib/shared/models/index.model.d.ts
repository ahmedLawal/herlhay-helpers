import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SVGIconType } from '../components/svg-icon/svg-icon.model';
interface IInputBase {
    name?: string;
    label: string;
    value?: any;
    placeholder?: string;
    cls?: string;
    required?: boolean;
    type?: InputType;
}
interface IFCInput extends IInputBase {
    name: string;
    prefix?: string;
    suffix?: string;
    formControl: AbstractControl;
    form: FormGroup;
    vms?: IValidationMessage[];
}
export type InputType = 'autocomplete' | 'button' | 'buttonToggle' | 'checkbox' | 'checkedbox' | 'date' | 'date-range' | 'datetime-local' | 'dhm' | 'email' | 'file' | 'form' | 'formgroup' | 'fileButton' | 'number' | 'password' | 'progress' | 'percentage' | 'radio' | 'select' | 'tel' | 'text' | 'textarea' | 'time' | 'toggle' | 'viewer';
export declare class FCInput implements IFCInput {
    name: string;
    label: string;
    placeholder?: string;
    cls?: string;
    prefix?: string;
    suffix?: string;
    required?: boolean;
    type?: InputType;
    formControl: AbstractControl;
    vms?: IValidationMessage[];
    form: FormGroup;
    constructor(label: string, name?: string, formControl?: AbstractControl, type?: InputType, required?: boolean, placeholder?: string, vms?: IValidationMessage[], prefix?: string, suffix?: string);
}
export declare class CInput implements IInputBase {
    name: string;
    label: string;
    placeholder?: string;
    cls?: string;
    required?: boolean;
    type?: InputType;
    value: string;
    hide: boolean;
    disabled: boolean;
    readonly: boolean;
    id: string;
    hasError: boolean;
    get isEmpty(): boolean;
    x: number;
    y: number;
    constructor(label: string, name?: string, value?: any, type?: InputType, required?: boolean, placeholder?: string, vms?: IValidationMessage[], prefix?: string, suffix?: string);
}
export interface IKVP {
    readonly key?: any;
    value?: string | boolean | number;
    cls?: string;
}
export declare class KVP implements IKVP {
    readonly key: string;
    value?: string | boolean | number;
    cls?: string;
    constructor(key: string, value?: string | boolean | number, cls?: string);
}
export declare class FKVP extends KVP {
    inputType?: InputType;
    label: string;
    editable?: boolean;
    editing?: boolean;
    route?: string;
    routeFunc?: (item: any) => Promise<string> | Observable<string>;
    hint?: string;
    action?: any;
    isPhone?: boolean;
    isEmail?: boolean;
    formatter?: (val: any) => string | Promise<string> | Observable<string>;
    constructor(key: string, label: string, editable?: boolean, value?: string | boolean | number, inputType?: InputType, hint?: string, action?: any, formatter?: (val: any) => string | Promise<string>, cls?: string, route?: string);
}
export interface ILbl extends IKVP {
    hint?: string;
}
export declare class Lbl implements ILbl {
    readonly key: string;
    value: string | boolean | number;
    hint?: string;
    cls?: string;
    constructor(key: string, value?: string | boolean | number, hint?: string, cls?: string);
}
export interface IBtn extends IKVP {
    action?: (...arg: any[]) => void;
    group?: BtnGroup;
    help?: string;
    icon?: SVGIconType;
    iconBtn?: boolean;
    disabled?: boolean;
    loading?: boolean;
    showHelpIcon?: boolean;
    label?: string;
    type?: BtnType;
    extra?: any;
}
export declare class Btn implements IBtn {
    cls?: string;
    group?: BtnGroup;
    help?: string;
    icon?: SVGIconType;
    iconBtn?: boolean;
    readonly action?: (data?: any, ...args: any[]) => void;
    readonly key?: string;
    showHelpIcon?: boolean;
    label?: string;
    route?: string;
    type?: BtnType;
    extra?: any;
    loading?: boolean;
    disabled?: boolean;
    constructor(key: string, action?: (data?: any, ...args: any[]) => any, type?: BtnType, icon?: SVGIconType, cls?: string, help?: string, showHelpIcon?: boolean, loading?: boolean, disabled?: boolean);
}
export declare class BtnLg implements IBtn {
    readonly key: string;
    value: string | boolean | number;
    readonly action?: () => void;
    cls?: string;
    extra?: any;
    constructor(key: string, value?: string | boolean | number, action?: any, cls?: string, extra?: any);
}
export type BtnType = 'clear' | 'clear-pm' | 'close' | 'danger-outline' | 'danger' | 'dark-outline' | 'dark' | 'light' | 'outline-nm' | 'outline' | 'outline-light' | 'primary' | 'secondary' | 'success';
export type BtnGroup = 'add' | 'clone' | 'close' | 'create' | 'delete' | 'download' | 'edit' | 'link' | 'search' | 'show' | 'submit' | 'upload';
export type IconType = 'access' | 'add' | 'adjust' | 'calendar' | 'cash' | 'checked' | 'checklist' | 'clone' | 'close' | 'cogs' | 'delete' | 'download' | 'edit' | 'export' | 'file' | 'filter' | 'generate' | 'guard' | 'history' | 'home' | 'import' | 'info' | 'link' | 'lock' | 'next' | 'pen' | 'post' | 'previous' | 'renew' | 'save' | 'search' | 'show' | 'snooze' | 'unlock' | 'upload' | 'view' | 'users' | 'recycle' | 'truck' | 'tag' | 'receipt' | 'bank' | 'arrowh';
export interface ICodeTitle {
    code: string;
    title: string;
}
export interface ICodeDescription {
    code: string;
    description: string;
}
export interface IMktDescription {
    mktEventCode: string;
    description: string;
}
export interface ICode {
    code: string;
}
export declare enum EMenuLocation {
    viewPage1 = "viewPage"
}
export declare enum Day {
    sunday = "Sunday",
    monday = "Monday",
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday",
    saturday = "Saturday"
}
export declare enum EPageType {
    clonePage = "Clone",
    editPage = "Edit",
    viewPage = "View",
    createPage = "Create",
    indexPage = "Index"
}
export declare enum ELanguage {
    EN = "EN",
    FR = "FR"
}
export declare enum EValidationType {
    email = "email",
    entityNumber = "entityNumber",
    maxlength = "maxlength",
    minlength = "minlength",
    mobile = "mobile",
    name = "name",
    normal = "normal",
    passwordNotMatch = "passwordNotMatch",
    pattern = "pattern",
    required = "required",
    unique = "unique",
    custom = "custom"
}
export interface IValidationMessage {
    type: EValidationType;
    message: string;
}
export type SortType = 'asc' | 'desc';
interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
interface IPage<T> {
    content: T[];
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
    first: boolean;
    sort: Sort;
    numberOfElements: number;
    empty: boolean;
}
export interface ISearchQuery {
    /**
     * Starts at 1
     */
    page?: number;
    limit?: number;
    search?: string;
    [x: string]: string | number | boolean;
}
export interface ISearchResponse<T = any> {
    page: IPage<T>;
    listSize: number;
    pageNumber?: number;
    pageSize?: number;
    searchCriteria: any;
}
export interface ISearchResponse<T = any> {
    page: IPage<T>;
    listSize: number;
    pageNumber?: number;
    pageSize?: number;
    searchCriteria: any;
}
export interface ISearchResponse2<T = any> {
    content: T[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    };
}
export type ImageType = 'pp' | 'other';
export interface ITab {
    id?: string;
    target?: string;
    label: string;
    form?: string;
    postFunction?: (data: any, productCode?: string) => Observable<{
        data: any;
        productCode: string;
    }>;
    putFunction?: (data: any, productCode: string) => Observable<{
        data: any;
        productCode: string;
    }>;
    data?: any;
}
export interface CustomValidationError {
    custom?: string;
    maxlength?: boolean;
    maxLength?: boolean;
    minlength?: boolean;
    minLength?: boolean;
    notFound?: boolean;
    notUnique?: boolean;
    pattern?: boolean;
    required?: boolean;
    used?: boolean;
}
export declare enum EMenuType {
    horizontal = "H",
    vertical = "V"
}
export interface IValueLabel<T = string> {
    value: T;
    label: string;
}
export interface IConfigImages {
    favicon: string;
    watermark: string;
    logo: {
        dark: string;
        light: string;
    };
    pp: {
        src: string;
        min: string;
    };
    other: {
        src: string;
        min: string;
    };
}
export declare class Constant {
}
export interface ITableName {
    schema: string;
    primaryTable: string;
}
export interface IState extends IListValue<number> {
    alias: string;
}
export interface IListValue<TID = string, TValue = any> {
    name: string;
    value?: TValue;
    id?: TID;
}
export declare enum EPeriod {
    daily = "daily",
    weekly = "weekly",
    monthly = "monthly",
    annually = "annually",
    yearly = "yearly",
    today = "today",
    week = "week",
    month = "month",
    year = "year",
    annual = "annual"
}
export {};
