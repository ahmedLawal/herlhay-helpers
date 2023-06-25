export declare class Loader {
    loaderText: string;
    private _pageLoaders;
    constructor();
    get isLoading(): boolean;
    startPl(value?: number): number;
    restartPl(): void;
    stopPl(value?: number): number;
    /**
     * Function to call when the loader stack is empty
     */
    onLoaderStopped: (...args: any[]) => any;
    stopAllPls(): void;
}
