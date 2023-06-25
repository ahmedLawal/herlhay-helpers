import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UtilityService } from '../../../services/utility.service';
import { IRowOption, ITableCol, SortType, TableCol } from './table.model';
import * as i0 from "@angular/core";
export declare class TablePlainComponent<TItem> implements OnInit {
    uS: UtilityService;
    text: string;
    options: IRowOption[];
    optionsMap: (row: TItem) => IRowOption<TItem>[];
    centerCells: boolean;
    curvy: boolean;
    customSelectClass: any;
    displayedColumns: TableCol[];
    set _displayedColumns(value: TableCol[]);
    distinct: boolean;
    formatColumnHeaders: boolean;
    idField: string;
    noItemTxt: string;
    nowrap: boolean;
    orderDirection: SortType;
    orderField: string;
    pageSize: number;
    pageSizeOptions: number[];
    placeSelectionAtRight: boolean;
    resultsLength: number;
    showExport: boolean;
    showFilter: boolean;
    showPager: boolean;
    showRowPointer: boolean;
    smallerFonts: boolean;
    isDisabledFunc: (row: TItem) => boolean;
    useSelection: boolean;
    _rowClick: EventEmitter<any>;
    _view: EventEmitter<any>;
    listMutated: EventEmitter<TItem[]>;
    selectionChanged: EventEmitter<SelectionChange<TItem>>;
    dataSource: MatTableDataSource<any>;
    defaultFilterPredicate: any;
    form: FormGroup<{
        field: FormControl<any>;
        value: FormControl<any>;
    }>;
    mutableList: any[];
    selection: SelectionModel<TItem>;
    paginator: MatPaginator;
    sort: MatSort;
    emitCheckbox: EventEmitter<{
        field: string;
        item: TItem;
        value: boolean;
    }>;
    set _data(v: TItem[]);
    constructor(uS: UtilityService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    get filterOptions(): {
        code: string | number | symbol;
        description: string;
    }[];
    clearFilter(): void;
    outputCheckbox(field: string, item: TItem, value: any): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    get selectedItems(): TItem[];
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string;
    rowClick(e: any): void;
    clickBtn(col: ITableCol, row: TItem): void;
    getActionStatusCallback(col: any): (state: boolean) => boolean;
    protected pageSizeIncrementor: number;
    increasePageSize(): void;
    decreasePageSize(): void;
    resetPageSize(): void;
    optionLabeller: (option: IRowOption, row: TItem) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TablePlainComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TablePlainComponent<any>, "table-plain", never, { "text": { "alias": "label"; "required": false; }; "options": { "alias": "rowOptions"; "required": false; }; "optionsMap": { "alias": "rowOptionsMap"; "required": false; }; "centerCells": { "alias": "centerCells"; "required": false; }; "curvy": { "alias": "curvy"; "required": false; }; "customSelectClass": { "alias": "customSelectClass"; "required": false; }; "_displayedColumns": { "alias": "displayedColumns"; "required": false; }; "distinct": { "alias": "distinct"; "required": false; }; "formatColumnHeaders": { "alias": "formatColumnHeaders"; "required": false; }; "idField": { "alias": "idField"; "required": false; }; "noItemTxt": { "alias": "noItemTxt"; "required": false; }; "nowrap": { "alias": "nowrap"; "required": false; }; "orderDirection": { "alias": "orderDirection"; "required": false; }; "orderField": { "alias": "orderField"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "placeSelectionAtRight": { "alias": "placeSelectionAtRight"; "required": false; }; "resultsLength": { "alias": "resultsLength"; "required": false; }; "showExport": { "alias": "showExport"; "required": false; }; "showFilter": { "alias": "showFilter"; "required": false; }; "showPager": { "alias": "showPager"; "required": false; }; "showRowPointer": { "alias": "showRowPointer"; "required": false; }; "smallerFonts": { "alias": "smallerFonts"; "required": false; }; "isDisabledFunc": { "alias": "isDisabledFunc"; "required": false; }; "useSelection": { "alias": "useSelection"; "required": false; }; "_data": { "alias": "data"; "required": false; }; }, { "_rowClick": "rowClick"; "_view": "view"; "listMutated": "listMutated"; "selectionChanged": "selectionChanged"; "emitCheckbox": "emitCheckbox"; }, never, never, true, never>;
}
