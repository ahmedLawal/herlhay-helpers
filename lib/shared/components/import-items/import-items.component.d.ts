import { UtilityService } from '../../../services/utility.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';
import { ModalComponent } from '../modal/modal.component';
import { IUploadResponse } from './import-items.model';
import * as i0 from "@angular/core";
export declare class ImportItemsComponent {
    uS: UtilityService;
    modal: ModalComponent;
    header: string;
    templatePath: string;
    label: string;
    uploadFunc: (file: File) => Observable<{
        body?: {
            data: IUploadResponse;
        };
        progress?: number;
        uploaded?: boolean;
    }>;
    loading: boolean;
    constructor(uS: UtilityService);
    ngOnInit(): void;
    open(): void;
    close(): void;
    downloadTemplate(): void;
    acceptedTypes: string[];
    openFileDialog(loader: LoaderComponent): void;
    uploadFile(file: File, loader: LoaderComponent): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportItemsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportItemsComponent, "import-items", never, { "header": { "alias": "header"; "required": false; }; "templatePath": { "alias": "templatePath"; "required": false; }; "label": { "alias": "label"; "required": false; }; "uploadFunc": { "alias": "uploadFunc"; "required": false; }; }, {}, never, never, true, never>;
}
