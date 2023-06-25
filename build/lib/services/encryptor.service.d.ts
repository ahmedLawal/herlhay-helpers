import * as i0 from "@angular/core";
/**
 * Encryption Decryption service
 */
export declare class EncryptorService {
    RESPONSE_AESKEY: string;
    secret: string;
    plusDelimiter: string;
    /**
     * Encryption Decryption service
     */
    constructor();
    encryptText: (data: any, key?: string) => string;
    decryptText: (data: string, key?: string) => any;
    /**
     * Encrypts an item
     * @param data Item
     * @returns Encrypted Object
     */
    encryptItem: (data: any) => string;
    /**
     * Decrypts an encrypted item
     * @param data Encrypted string
     * @returns Decrypted Object
     */
    decryptItem: <T = any>(data: string) => T;
    static ɵfac: i0.ɵɵFactoryDeclaration<EncryptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EncryptorService>;
}
