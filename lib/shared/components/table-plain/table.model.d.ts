import { Observable } from 'rxjs';
import { InputType, IBtn } from '../../models/index.model';
export interface IRowOption<T = any> {
    t: string;
    action?: (row: T) => void;
    labelFormatter?: (row: T) => string;
}
export type CellType = InputType | 'table' | 'btns' | 'editable' | 'image' | 'trend' | 'assign-from-list';
export interface ITableCol<T = any> {
    cellClass?: string;
    disabled?: boolean;
    f: keyof T;
    formatter?: (val: any) => string | Promise<string>;
    formatterP?: (...val: any) => string;
    itemClass?: string;
    itemClassFunc?: (val: T) => string;
    p?: string[];
    t: string;
    type?: CellType;
    btn?: IBtn;
}
export declare class TableCol<T = any, TOption = {
    value: string;
    label: string;
}> implements ITableCol {
    action?: (row: any, cellField: keyof T, setLoading?: (value: boolean) => void) => any;
    btn?: IBtn;
    buttons?: IBtn[];
    cellClass?: string;
    checked?: boolean;
    isSticky?: boolean;
    isStickyEnd?: boolean;
    hide?: boolean;
    disabled?: boolean;
    f: keyof T;
    formatter?: (val: any) => string | Promise<string>;
    formatterRow?: FormatterFuncType<T>;
    help?: string;
    itemClass?: string;
    itemClassFunc?: (val: T) => string;
    mqueryParams?: QueryParamsFormatterFuncType<T>;
    p?: string[];
    routeFormatter?: FormatterFuncType<T>;
    subTable?: TableCol[];
    t: string;
    type?: CellType;
    listingFunction?: TListFunction<T, TOption>;
    onSelected?: (item: keyof TOption, row: T, index: number) => any;
    selected?: boolean;
    value?: any;
    constructor(t: string, f?: keyof T, formatter?: (val: any) => string | Promise<string>, formatterRow?: FormatterFuncType, type?: CellType, checked?: boolean, routeFormatter?: FormatterFuncType<T>, mqueryParams?: QueryParamsFormatterFuncType<T>, action?: (row: any, cellField: keyof T) => any);
}
type FormatterFuncType<TRow = any> = (row: TRow, cellField?: string) => string;
type QueryParamsFormatterFuncType<TRow = any> = (row: TRow) => {
    [x: string]: string | boolean | number;
};
export type SortType = 'asc' | 'desc';
export type TListFunction<T, TOption = {
    value: string;
    label: string;
}> = (row: T) => Observable<TOption[]>;
export {};
