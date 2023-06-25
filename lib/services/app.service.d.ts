import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../shared/models/IMenuItem';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import * as i0 from "@angular/core";
export declare class AppService {
    titleS: Title;
    apiS: ApiService;
    sS: StorageService;
    topMenu: import("../shared/models/IMenuItem").IMenuItem[];
    protected _currentTopMenu: MenuItem;
    protected _pageName: string;
    get currentTopMenu(): MenuItem;
    set currentTopMenu(value: MenuItem);
    setFullscreenMode: BehaviorSubject<boolean>;
    constructor(titleS: Title, apiS: ApiService, sS: StorageService);
    setDefaultClass(): void;
    get pageName(): string;
    set pageName(value: string);
    addTitle: (title: any) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppService>;
}
