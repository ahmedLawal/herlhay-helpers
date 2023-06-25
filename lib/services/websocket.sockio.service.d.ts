import { UtilityService } from './utility.service';
import { Socket } from 'socket.io-client';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class WebsocketService {
    uS: UtilityService;
    readonly sockets: {
        coreEV: IRSocket;
    };
    constructor(uS: UtilityService);
    static ɵfac: i0.ɵɵFactoryDeclaration<WebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WebsocketService>;
}
export declare class IRSocket {
    get id(): string;
    get isConnected(): boolean;
    route: string;
    retryCount: number;
    maxRetryCount: number;
    socket: Socket;
    onConnectionError: ReplaySubject<unknown>;
    onDisconnect: ReplaySubject<unknown>;
    listeners: {
        [path: string]: ReplaySubject<any>;
    };
    identifier: string;
    /**
     *
     * @param basePath Websocket url as a prefix. Defaults to use the base api to form a websocket URL
     * @param path Path to the websocket to listen to.
     */
    constructor(basePath?: string, path?: string);
    /**
     *
     * @param path
     * @param identifier @defualt environment.user.user.id
     * @returns
     */
    addListener<T = {
        percentage: number;
        status: boolean;
        id: string;
    }>(path: string, identifier?: string): ReplaySubject<T>;
    removeListener(path: string): void;
}
