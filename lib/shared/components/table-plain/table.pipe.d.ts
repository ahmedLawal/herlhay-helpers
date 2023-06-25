import { PipeTransform } from '@angular/core';
import { TableCol } from './table.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class GetColFormattedPipe implements PipeTransform {
    transform(row: any, col: TableCol): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetColFormattedPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GetColFormattedPipe, "getColFormatted", true>;
}
export declare class GetRawFieldsPipe implements PipeTransform {
    transform(arr: TableCol[], showOptions?: boolean, useSelection?: boolean, placeSelectionAtRight?: boolean): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GetRawFieldsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GetRawFieldsPipe, "getRawFields", true>;
}
export declare class GetHeadersPipe implements PipeTransform {
    transform(arr: TableCol[]): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GetHeadersPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GetHeadersPipe, "getHeaders", true>;
}
export declare class TableToStringPipe implements PipeTransform {
    cfS: GetColFormattedPipe;
    transform(arr: TableCol[], obj: any): Promise<string>;
    constructor(cfS: GetColFormattedPipe);
    static ɵfac: i0.ɵɵFactoryDeclaration<TableToStringPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TableToStringPipe, "tableToString", true>;
}
export declare class TablePipesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TablePipesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TablePipesModule, never, [typeof i1.CommonModule, typeof GetColFormattedPipe, typeof GetHeadersPipe, typeof GetRawFieldsPipe, typeof TableToStringPipe], [typeof GetColFormattedPipe, typeof GetHeadersPipe, typeof GetRawFieldsPipe, typeof TableToStringPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TablePipesModule>;
}
