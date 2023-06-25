import { OnInit } from '@angular/core';
import { ServiceWorkerService } from '../../services/service-worker/service-worker.service';
import * as i0 from "@angular/core";
export declare class ResetComponent implements OnInit {
    private swService;
    loading: boolean;
    constructor(swService: ServiceWorkerService);
    ngOnInit(): void;
    clearCache(): void;
    getUpdates(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResetComponent, "app-reset", never, {}, {}, never, never, true, never>;
}
