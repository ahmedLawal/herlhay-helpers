import { EPageType } from '../models/index.model';
export var HHFunctions;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvZnVuY3Rpb25zL2Jhc2UtZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxNQUFNLEtBQVcsV0FBVyxDQTZIM0I7QUE3SEQsV0FBaUIsV0FBVztJQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW1CRztJQUNILFNBQWdCLFdBQVcsQ0FDekIsS0FBWSxFQUNaLGNBQTBCLEVBQzFCLGVBQXNDO1FBRXRDLE1BQU0sTUFBTSxHQUFXO1lBQ3JCO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRTtvQkFDSixHQUFHLEtBQUssQ0FBQyxJQUFJO29CQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDMUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUUsY0FBYztnQkFDekIsWUFBWSxFQUFFLGVBQWU7YUFDOUI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUU7b0JBQ0osR0FBRyxLQUFLLENBQUMsSUFBSTtvQkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzFCLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUztpQkFDMUI7Z0JBQ0QsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFlBQVksRUFBRSxlQUFlO2FBQzlCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFO29CQUNKLEdBQUcsS0FBSyxDQUFDLElBQUk7b0JBQ2IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFF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LEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNuQixNQUFNLE1BQU0sR0FBVztZQUNyQjtnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxVQUFVLEVBQUUsS0FBSzthQUNsQjtZQUNELEtBQUs7U0FDTixDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQVplLDhCQUFrQixxQkFZakMsQ0FBQTtBQUNILENBQUMsRUE3SGdCLFdBQVcsS0FBWCxXQUFXLFFBNkgzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRDaGlsZHJlbkNhbGxiYWNrLCBSb3V0ZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXG5pbXBvcnQgeyBJRm9ybVNjaGVtYSB9IGZyb20gJy4uL21vZGVscy9mb3JtLXNjaGVtYS5tb2RlbCc7XG5pbXBvcnQgeyBFUGFnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgubW9kZWwnO1xuZXhwb3J0IG5hbWVzcGFjZSBISEZ1bmN0aW9ucyB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcm91dGVcbiAgICogQHBhcmFtIGluZGV4Q29tcG9uZW50XG4gICAqIEBwYXJhbSBpbmRleExhenlNb2R1bGVcbiAgICogQGV4YW1wbGVcbiAgICogYGBgdHNcbiAgICogRVZGdW5jdGlvbnMuZXh0ZW5kUm91dGUoXG4gICAqICB7XG4gICAqICAgICBwYXRoOiAnJyxcbiAgICogICAgIGRhdGE6IHsgdGl0bGU6ICdDUk0gLyBTZXR1cHMgLyBTZWdtZW50JyB9LFxuICAgKiAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vY3JlYXRlLXNlZ21lbnQvY3JlYXRlLXNlZ21lbnQubW9kdWxlJylcbiAgICogICAgICAgLnRoZW4oKG0pID0+IG0uQ3JlYXRlU2VnbWVudE1vZHVsZSksXG4gICAqICB9LFxuICAgKiAgbnVsbCxcbiAgICogICgpID0+IGltcG9ydCgnLi9zZWdtZW50cy1pbmRleC9zZWdtZW50cy1pbmRleC5tb2R1bGUnKVxuICAgKiAgICAgLnRoZW4oKG0pID0+IG0uU2VnbWVudHNJbmRleE1vZHVsZSkpO1xuICAgKiBgYGBcbiAgICogQHJldHVybnNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBleHRlbmRSb3V0ZShcbiAgICByb3V0ZTogUm91dGUsXG4gICAgaW5kZXhDb21wb25lbnQ/OiBUeXBlPGFueT4sXG4gICAgaW5kZXhMYXp5TW9kdWxlPzogTG9hZENoaWxkcmVuQ2FsbGJhY2tcbiAgKSB7XG4gICAgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4ucm91dGUuZGF0YSxcbiAgICAgICAgICB0aXRsZTogcm91dGUuZGF0YVsndGl0bGUnXSxcbiAgICAgICAgICB0eXBlOiBFUGFnZVR5cGUuaW5kZXhQYWdlLFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnQ6IGluZGV4Q29tcG9uZW50LFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGluZGV4TGF6eU1vZHVsZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdpbmRleCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5yb3V0ZS5kYXRhLFxuICAgICAgICAgIHRpdGxlOiByb3V0ZS5kYXRhWyd0aXRsZSddLFxuICAgICAgICAgIHR5cGU6IEVQYWdlVHlwZS5pbmRleFBhZ2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudDogaW5kZXhDb21wb25lbnQsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogaW5kZXhMYXp5TW9kdWxlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FkZCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5yb3V0ZS5kYXRhLFxuICAgICAgICAgIHRpdGxlOiBwYWdlVGl0bGVyKHJvdXRlLmRhdGFbJ3RpdGxlJ10sICdBZGQnKSxcbiAgICAgICAgICB0eXBlOiBFUGFnZVR5cGUuY3JlYXRlUGFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnQsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogcm91dGUubG9hZENoaWxkcmVuLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2VkaXQnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4ucm91dGUuZGF0YSxcbiAgICAgICAgICB0aXRsZTogcGFnZVRpdGxlcihyb3V0ZS5kYXRhWyd0aXRsZSddLCAnRWRpdCcpLFxuICAgICAgICAgIHR5cGU6IEVQYWdlVHlwZS5lZGl0UGFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnQsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogcm91dGUubG9hZENoaWxkcmVuLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3ZpZXcnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4ucm91dGUuZGF0YSxcbiAgICAgICAgICB0aXRsZTogcGFnZVRpdGxlcihyb3V0ZS5kYXRhWyd0aXRsZSddLCAnVmlldycpLFxuICAgICAgICAgIHR5cGU6IEVQYWdlVHlwZS52aWV3UGFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnQsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogcm91dGUubG9hZENoaWxkcmVuLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGlmICghaW5kZXhDb21wb25lbnQgJiYgIWluZGV4TGF6eU1vZHVsZSkge1xuICAgICAgcm91dGVzLnNwbGljZSgwLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuICBleHBvcnQgZnVuY3Rpb24gc3RyQ29uY2F0ZW5hdG9yKFxuICAgIGZpZWxkMTogc3RyaW5nLFxuICAgIGZpZWxkMjogc3RyaW5nLFxuICAgIGpvaW5lciA9ICcgJ1xuICApOiBzdHJpbmcge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgLy8gY29uc29sZS5sb2coJ2ZpZWxkMScsZmllbGQxKVxuICAgIGZpZWxkMSA9IGZpZWxkMT8udG9TdHJpbmcoKT8udHJpbSgpO1xuICAgIGZpZWxkMiA9IGZpZWxkMj8udG9TdHJpbmcoKT8udHJpbSgpO1xuICAgIGlmIChmaWVsZDEgIT0gbnVsbCAmJiBmaWVsZDIgIT0gbnVsbCkgcmV0dXJuIGZpZWxkMSArIGpvaW5lciArIGZpZWxkMjtcbiAgICBlbHNlIHJldHVybiBmaWVsZDEgfHwgZmllbGQyO1xuICB9XG4gIGV4cG9ydCBmdW5jdGlvbiBuYW1lRXh0cmFjdG9yKG9iajogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG9iaj8ubmFtZSB8fFxuICAgICAgb2JqPy5mdWxsTmFtZSB8fFxuICAgICAgb2JqPy5mdWxsbmFtZSB8fFxuICAgICAgc3RyQ29uY2F0ZW5hdG9yKG9iaj8uZmlyc3ROYW1lLCBvYmo/Lmxhc3ROYW1lKVxuICAgICkgYXMgc3RyaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFnZVRpdGxlcih0aXRsZTogc3RyaW5nLCBpbmZpeDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aXRsZSkgcmV0dXJuICcnO1xuICAgIGlmICghaW5maXgpIHJldHVybiB0aXRsZTtcbiAgICBjb25zdCBzcGxpdCA9IHRpdGxlLnNwbGl0KCcvJyksXG4gICAgICBsYXN0U3BsaXQgPSBzcGxpdC5wb3AoKSxcbiAgICAgIHByZWZpeCA9IHNwbGl0LmpvaW4oJy8nKTtcbiAgICByZXR1cm4gKHByZWZpeCA/IHByZWZpeCArICcgLyAnIDogJyAnKSArIGluZml4ICsgJyAnICsgbGFzdFNwbGl0O1xuICB9XG4gIGV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFJvdXRlRm9yVU0ocm91dGU6IFJvdXRlLCBwcmVmaXg6IHN0cmluZykge1xuICAgIGNvbnN0IG9QYXRoID0gcm91dGU/LnBhdGggKyAnJyxcbiAgICAgIG5QYXRoID0gcHJlZml4ICsgb1BhdGg7XG4gICAgcm91dGUucGF0aCA9IG5QYXRoO1xuICAgIGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgICAge1xuICAgICAgICBwYXRoOiBvUGF0aCxcbiAgICAgICAgcmVkaXJlY3RUbzogblBhdGgsXG4gICAgICB9LFxuICAgICAgcm91dGUsXG4gICAgXTtcbiAgICByZXR1cm4gcm91dGVzO1xuICB9IFxufVxuIl19