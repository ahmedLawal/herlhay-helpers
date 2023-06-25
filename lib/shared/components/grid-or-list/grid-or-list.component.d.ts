import { SelectionChange } from '@angular/cdk/collections';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../../services/utility.service';
import { SelectionData } from '../../../shared/classes/selector.class';
import { IListValue } from '../../../shared/models/index.model';
import { Observable } from 'rxjs';
import { IRowOption, TableCol } from '../table-plain/table.model';
import * as i0 from "@angular/core";
export declare class GridOrListComponent<TItem> {
    uS: UtilityService;
    route: ActivatedRoute;
    eViewType: typeof EViewType;
    viewTypes: IListValue<EViewType>[];
    viewType: any;
    displayedColumns: TableCol<TItem>[];
    displayedColumnsFields: (keyof TItem)[];
    mainField: TableCol<TItem>;
    subFields: TableCol<TItem>[];
    breadcrumbs: TableCol[];
    loading: boolean;
    mID: string;
    parentID: string;
    onEdit: EventEmitter<TItem>;
    rowOptions: IRowOption<TItem>[];
    pageName: string;
    idValues: {
        [x: string]: string;
    };
    set _displayedColumns(value: TableCol<TItem>[]);
    protected data: TItem[];
    set _data(v: TItem[]);
    deleteFunc: (items: TItem[]) => Observable<any>;
    protected searchFunction: (id?: string) => Observable<TItem[]>;
    set _searchFunction(v$: (id?: string) => Observable<TItem[]>);
    selection: SelectionData<TItem>;
    constructor(uS: UtilityService, route: ActivatedRoute);
    ngOnInit(): void;
    protected fetchData(v$: (id?: string) => Observable<TItem[]>): void;
    switchView(vt: IListValue<EViewType, any>): void;
    tableSelection(r: SelectionChange<TItem>): void;
    deleteItems(items: TItem[]): Promise<void>;
    refresh(): void;
    formBreadCrumbs(): void;
    formQueryParams: (row: TItem) => {
        [x: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<GridOrListComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridOrListComponent<any>, "grid-or-list", never, { "viewType": { "alias": "viewType"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "mID": { "alias": "mID"; "required": false; }; "parentID": { "alias": "parentID"; "required": false; }; "_displayedColumns": { "alias": "displayedColumns"; "required": false; }; "_data": { "alias": "data"; "required": false; }; "deleteFunc": { "alias": "deleteFunc"; "required": false; }; "_searchFunction": { "alias": "searchFunction"; "required": false; }; }, { "onEdit": "onEdit"; }, never, never, true, never>;
}
declare enum EViewType {
    list = "list",
    grid = "grid"
}
export {};
