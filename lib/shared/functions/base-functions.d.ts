import { Type } from '@angular/core';
import { LoadChildrenCallback, Route, Routes } from '@angular/router';
export declare namespace HHFunctions {
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
    function extendRoute(route: Route, indexComponent?: Type<any>, indexLazyModule?: LoadChildrenCallback): Routes;
    function strConcatenator(field1: string, field2: string, joiner?: string): string;
    function nameExtractor(obj: any): string;
    function redirectRouteForUM(route: Route, prefix: string): Routes;
}
