import { Loader } from './page-loader.class';
export declare class ProgressLoader extends Loader {
    progress?: number;
    timeAdded?: number;
    constructor(obj?: ProgressLoader);
}
export declare class ProgressLoaders {
    loaders: ProgressLoader[];
    constructor();
    addLoader(loader?: ProgressLoader): ProgressLoader;
    /**
     * Checks if all the loaders in the loaders array have stopped loaded
     */
    get isLoading(): boolean;
    get latestLoaderLoading(): ProgressLoader;
    get currentLoaderText(): string;
    resetLoaders(): void;
    stopAllLoaders(): void;
}
