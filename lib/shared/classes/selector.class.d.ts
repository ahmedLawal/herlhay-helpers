export declare class SelectionData<T> {
    get selectedItem(): T;
    selectedItems: T[];
    selectedMap: {
        [id: string]: boolean;
    };
    sourceData: T[];
    get count(): number;
    constructor(sourceArr: T[]);
    itemChanged(id: string, e: {
        checked: boolean;
    }): void;
    addSelectedItem(id: string): void;
    removeSelectedItem(id: string): void;
    reset(): void;
}
