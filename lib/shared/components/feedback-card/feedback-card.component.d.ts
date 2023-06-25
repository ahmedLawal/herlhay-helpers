import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FeedbackCardComponent implements OnInit {
    class: string;
    message: string;
    private defaultStatus;
    /** 0 - indicates error 1 - indicates success 2 - indicates info */
    status: 0 | 1 | 2;
    elRef: ElementRef<HTMLDivElement>;
    constructor();
    ngOnInit(): void;
    reset(): void;
    setErrorMessage(message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeedbackCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeedbackCardComponent, "feedback-card", never, { "class": { "alias": "class"; "required": false; }; "message": { "alias": "message"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, never, true, never>;
}
