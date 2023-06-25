import { ProgressLoader, ProgressLoaders } from '../../classes/progress-loader.class';
import * as i0 from "@angular/core";
export declare class LoaderComponent {
    class: classes;
    text: string;
    hasContent: boolean;
    loader: ProgressLoader;
    progress: number;
    set _loading(v: boolean);
    get loading(): boolean;
    loaders: ProgressLoaders;
    height: string;
    set _height(v: number);
    constructor();
    ngOnInit(): void;
    startLoader(): void;
    stopLoader(): void;
    stepLoader(v: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoaderComponent, "loader", never, { "class": { "alias": "class"; "required": false; }; "text": { "alias": "text"; "required": false; }; "hasContent": { "alias": "hasContent"; "required": false; }; "_loading": { "alias": "loading"; "required": false; }; "_height": { "alias": "height"; "required": false; }; }, {}, never, ["*", "[content]", "[noContent]"], true, never>;
}
type classes = 'h-100' | 'vh-10' | 'vh-20' | 'vh-30' | 'vh-40' | 'vh-50' | 'vh-60' | 'vh-70' | 'vh-80' | 'vh-90' | 'vh-95' | 'vh-100';
export {};
