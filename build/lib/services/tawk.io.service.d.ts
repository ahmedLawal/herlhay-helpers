import { RendererFactory2 } from '@angular/core';
import { StorageService } from './storage.service';
import * as i0 from "@angular/core";
export declare class TawkIoService {
    private rendererFactory;
    private _document;
    private LocalStorageService;
    private loaded;
    private loadSubject;
    private renderer;
    constructor(rendererFactory: RendererFactory2, _document: Document, LocalStorageService: StorageService);
    private load;
    private loadedEvent;
    UpdateTawkUser(user: any): void;
    private loadedWrapper;
    ExpandChatWindow(show?: boolean): void;
    SetChatVisibility(show?: boolean): void;
    private updateAtrributes;
    static ɵfac: i0.ɵɵFactoryDeclaration<TawkIoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TawkIoService>;
}
