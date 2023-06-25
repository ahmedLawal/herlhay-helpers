import { EncryptorService } from './encryptor.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheService } from './cache.service';
import { LocalCacheService } from './local-cache.service';
import * as i0 from "@angular/core";
export declare class ApiService {
    eS: EncryptorService;
    http: HttpClient;
    cacheS: CacheService;
    lCacheS: LocalCacheService;
    protected get baseURL(): string;
    private showRoutes;
    private get headers();
    private get fileHeaders();
    private retryCount;
    constructor(eS: EncryptorService, http: HttpClient, cacheS: CacheService, lCacheS: LocalCacheService);
    /**
     * Encrypts an item
     * @param data Item
     * @returns Encrypted Object
     */
    encrypt: (obj: any) => any;
    /**
     * Decrypts an encrypted item
     * @param data Encrypted string
     * @returns Decrypted Object
     */
    decrypt: (obj: {
        data: string;
        status: 'success' | 'error';
    }) => any;
    private logRoutes;
    private handleRequestError;
    patch<T = any>(route: string, body?: any, extras?: IExtras): Observable<Resp<T>>;
    patchFile<T = any>(route: string, body: FormData): Observable<Resp<T>>;
    post<T = any>(route: string, body?: any, extras?: IExtras): Observable<Resp<T>>;
    postWithProgress<T = any>(route: string, body?: {
        [x: string]: File | any;
    }): Observable<{
        body?: T;
        progress?: number;
        uploaded?: boolean;
    }>;
    postFile<T = any>(route: string, body: FormData): Observable<Resp<T>>;
    postString(route: string, body?: any): Observable<Resp<string>>;
    get: <T = any>(route: string, parameters?: Object, extras?: IExtras) => Observable<Resp<T>>;
    getText: <T = string>(route: string, parameters?: Object) => Observable<Resp<T>>;
    getFile: <T = string>(route: string, parameters?: Object) => Observable<Resp<T>>;
    getWithBody: <T = any>(route: string, body?: any, extras?: IExtras) => Observable<Resp<T>>;
    getFromlocal: <T = any>(route: string, parameters?: Object, options?: any) => Observable<Resp<T>>;
    getWithLocalCache: <T = any>(route: string, parameters?: Object, options?: any) => Observable<Resp<T>>;
    getRequestParse(parameters?: Object): string;
    getAll: <T = any>(route: string, query: {
        [x: string]: any;
        limit: number;
    }, dataFieldName: string, extras?: IExtras) => Observable<T[]>;
    put<T = any>(route: string, body?: any, extras?: IExtras): Observable<Resp<T>>;
    putFile<T = any>(route: string, body: FormData): Observable<Resp<T>>;
    delete: <T = any>(route: string, options?: any) => Observable<any>;
    deleteWithBody: <T = any>(route: string, body?: any, options?: any) => Observable<any>;
    deleteText: (route: string) => Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiService>;
}
interface IExtras {
    noFormat?: boolean;
    dontEncrypt?: boolean;
    dontDecryptResponse?: boolean;
    options?: any;
    requestType?: 'queryParams';
}
export interface IResponse {
    message: string;
    result: any;
    status: 'success' | 'error' | 'failure';
    statusCode: 'SM000' | 'SM001' | 'SM002' | 'SM003';
}
type Resp<T> = T & {
    status: 'success' | 'error';
    data: T;
    message: string;
};
export {};
