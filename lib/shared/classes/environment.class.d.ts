import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { IMenuItem } from '../models/IMenuItem';
import { Loader } from './page-loader.class';
/**
 * Class for the environment object
 */
export declare class Environment {
    production: boolean;
    apiBaseUrl?: string;
    /**
     * List of menu items
     */
    menus: IMenuItem[];
    /**
     * Current page title
     */
    pageTitle: string;
    /**
     * Defualt app currency
     */
    currency: string;
    /**
     * Environment name
     */
    readonly name: string;
    /**
     * name of local storage location
     */
    storageKey: 'localStorage' | 'sessionStorage';
    /**
     * Name of the app
     */
    appName: string;
    /**
     * Whether to use authentication
     */
    authenticate?: boolean;
    /**
     * Whether to product logs or not. True means produce logs
     */
    debug?: boolean;
    /**
     * Current activated route
     */
    activatedRoute: ActivatedRoute;
    organisationName: string;
    /**
     * storage key for user object
     */
    readonly userStorageKey = "user";
    /**
     * storage key for embedded user object
     */
    readonly enbeddedUserStorageKey = "enbedded-user";
    /**
     * storage key for super user object
     */
    readonly adminUserStorageKey = "super-user";
    /**
     * page loader object
     */
    pageLoader: Loader;
    /** API Request timeout period
     *  Enter value in millisecond or Date object
     */
    requestTimeout: number | Date;
    versionNo: string;
    mixPanelToken: string;
    activeSubdomainSite: string;
    socket: WebSocketSubject<any>;
    useWebSocket: boolean;
    isSuperAdmin: boolean;
    clientAdminUrl: any;
    encryptAPIRequests: boolean;
    isEmbedMode: boolean;
    readonly embedKey = "weffwdfuion";
    tawkIOConfig: {
        propertyId: string;
        widgetId: string;
    };
    /**
     * User's auth token
     */
    token: string;
    /**
     * Set the value of the page loader
     */
    set loading(v: boolean);
    /**
     *
     * @param production Specify whether it is a production environment
     * @param name Name of the environment
     * @param apiBaseUrl Base url of the server api
     */
    constructor(production: boolean, name: string, apiBaseUrl?: string);
    updateEnvironment(env: Environment): void;
    /**
     * Whether it is the dev environment or not
     */
    get isDev(): boolean;
}
