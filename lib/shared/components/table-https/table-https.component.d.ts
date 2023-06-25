import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../../services/utility.service';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { IBtn } from '../../models/index.model';
import { TablePlainComponent } from '../table-plain/table-plain.component';
import * as i0 from "@angular/core";
export declare class TableHttpsComponent<TItem = any> extends TablePlainComponent<TItem> implements OnInit {
    route: ActivatedRoute;
    uS: UtilityService;
    header: string;
    noDataSubTitle: string;
    headerBtns: IBtn[];
    queryData: any;
    set _queryData(v: any);
    observableFunc: (data: any) => Observable<ITableSearchFunc<any>>;
    pageNumber: number;
    filteredAndPagedResults: Observable<any[]>;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    fetchedData: BehaviorSubject<TItem[]>;
    /**
     * Contains all the search query sent last
     */
    allQuery: any;
    table: MatTable<TItem>;
    data: TItem[];
    form2: FormGroup<{
        page: FormControl<number>;
        sortByField: FormControl<any>;
        sortByDirection: FormControl<string>;
        limit: FormControl<any>;
    }>;
    searchTrigger: ReplaySubject<unknown>;
    constructor(route: ActivatedRoute, uS: UtilityService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    search(query?: any): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    resetPaging(): void;
    reset(): void;
    refresh(): void;
    setData(d: any): void;
    increasePageSize(): void;
    resetPageSize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHttpsComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHttpsComponent<any>, "table-https", never, { "header": { "alias": "header"; "required": false; }; "noDataSubTitle": { "alias": "noDataSubTitle"; "required": false; }; "headerBtns": { "alias": "headerBtns"; "required": false; }; "_queryData": { "alias": "queryData"; "required": false; }; "observableFunc": { "alias": "observableFunc"; "required": false; }; "pageNumber": { "alias": "pageNumber"; "required": false; }; }, {}, never, never, true, never>;
}
export interface ITableSearchFunc<T = any> {
    data: T[];
    total: number;
}
