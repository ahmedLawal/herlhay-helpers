import { EncryptorService } from './encryptor.service';
import * as i0 from "@angular/core";
/**
 * Storage service
 */
export declare class StorageService {
    protected eS: EncryptorService;
    /**
     * Specify whether it is a production environment
     */
    get isProduction(): boolean;
    /**
     * name of local storage location
     */
    get storageKey(): "localStorage" | "sessionStorage";
    constructor(eS: EncryptorService);
    /**
     * Encrypts an item
     * @param data Item
     * @returns Encrypted Object
     */
    encrypt: (data: any) => string;
    /**
     * Decrypts an encrypted item
     * @param data Encrypted string
     * @returns Decrypted Object
     */
    decrypt: <T = any>(data: string) => T;
    /**
     * Saves an item to the app storage
     * @param key Name of item
     * @param data Item
     * @returns Item
     */
    saveItem: <T>(key: string, data: T) => any;
    /**
     * Saves an item to the app storage asynchronously
     * @param key Name of item
     * @param data Item
     * @returns Item
     */
    saveItemA: <T>(key: string, data: T) => Promise<T>;
    /**
     * Get an item from the app storage
     * @param key name of item
     * @param shouldThrow Whether to throw an error if it is not found
     * @returns Item
     */
    getItem: <T = any>(key: string, shouldThrow?: boolean) => T;
    /**
     * Get an item from the app storage asynchronously
     * @param key name of item
     * @param shouldThrow  Whether to throw an error if it is not found
     * @returns item
     */
    getItemA: <T = any>(key: string, shouldThrow?: boolean) => Promise<T>;
    /**
     * Remove and item from the app storage
     * @param key name of item
     * @returns
     */
    removeItem: (key: string) => void;
    /**
     * Clear the app storage
     * @returns
     */
    clear: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageService>;
}
