import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputPipesModule } from './inputs-pipes.pipe';
import { InputBasicComponent } from './input.component';
import { BtnModule } from '../btn/btn.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ErrorMessagePipe, ErrorMessagesPipe, ValidationMessageComponent, } from './validation-message/validation-message.component';
import { MatInputModule } from '@angular/material/input';
import { OtpInputComponent } from './otp-input/otp-input.component';
import { MatSelectModule } from '@angular/material/select';
import { InputTD_RFComponent } from './input-td-rf.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
export class InputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: InputModule, imports: [BtnModule,
            ErrorMessagePipe,
            ErrorMessagesPipe,
            FormsModule,
            InputBasicComponent,
            InputPipesModule,
            InputTD_RFComponent,
            MatDatepickerModule,
            MatInputModule,
            ErrorMessagePipe,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            OtpInputComponent,
            ReactiveFormsModule,
            ValidationMessageComponent], exports: [BtnModule,
            ErrorMessagePipe,
            ErrorMessagesPipe,
            FormsModule,
            InputBasicComponent,
            InputPipesModule,
            InputTD_RFComponent,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            OtpInputComponent,
            ReactiveFormsModule,
            ValidationMessageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputModule, providers: [ErrorMessagePipe], imports: [BtnModule,
            FormsModule,
            InputBasicComponent,
            InputPipesModule,
            InputTD_RFComponent,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            OtpInputComponent,
            ReactiveFormsModule, BtnModule,
            FormsModule,
            InputPipesModule,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatTooltipModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: InputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        BtnModule,
                        ErrorMessagePipe,
                        ErrorMessagesPipe,
                        FormsModule,
                        InputBasicComponent,
                        InputPipesModule,
                        InputTD_RFComponent,
                        MatDatepickerModule,
                        MatInputModule,
                        ErrorMessagePipe,
                        MatNativeDateModule,
                        MatSelectModule,
                        MatSlideToggleModule,
                        MatTooltipModule,
                        MatTooltipModule,
                        OtpInputComponent,
                        ReactiveFormsModule,
                        ValidationMessageComponent,
                    ],
                    exports: [
                        BtnModule,
                        ErrorMessagePipe,
                        ErrorMessagesPipe,
                        FormsModule,
                        InputBasicComponent,
                        InputPipesModule,
                        InputTD_RFComponent,
                        MatDatepickerModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatSelectModule,
                        MatSlideToggleModule,
                        MatTooltipModule,
                        MatTooltipModule,
                        OtpInputComponent,
                        ReactiveFormsModule,
                        ValidationMessageComponent,
                    ],
                    providers: [ErrorMessagePipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQiwwQkFBMEIsR0FDM0IsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQTRDdEUsTUFBTSxPQUFPLFdBQVc7OEdBQVgsV0FBVzsrR0FBWCxXQUFXLFlBeENwQixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLDBCQUEwQixhQUcxQixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsMEJBQTBCOytHQUlqQixXQUFXLGFBRlgsQ0FBQyxnQkFBZ0IsQ0FBQyxZQXRDM0IsU0FBUztZQUdULFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsY0FBYztZQUVkLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG1CQUFtQixFQUluQixTQUFTO1lBR1QsV0FBVztZQUVYLGdCQUFnQjtZQUVoQixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFFaEIsbUJBQW1COzsyRkFLVixXQUFXO2tCQTFDdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsU0FBUzt3QkFDVCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLDBCQUEwQjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFNBQVM7d0JBQ1QsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3FCQUMzQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0UGlwZXNNb2R1bGUgfSBmcm9tICcuL2lucHV0cy1waXBlcy5waXBlJztcbmltcG9ydCB7IElucHV0QmFzaWNDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEJ0bk1vZHVsZSB9IGZyb20gJy4uL2J0bi9idG4ubW9kdWxlJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7XG4gIEVycm9yTWVzc2FnZVBpcGUsXG4gIEVycm9yTWVzc2FnZXNQaXBlLFxuICBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCxcbn0gZnJvbSAnLi92YWxpZGF0aW9uLW1lc3NhZ2UvdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuaW1wb3J0IHsgT3RwSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL290cC1pbnB1dC9vdHAtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBJbnB1dFREX1JGQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC10ZC1yZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnRuTW9kdWxlLFxuICAgIEVycm9yTWVzc2FnZVBpcGUsXG4gICAgRXJyb3JNZXNzYWdlc1BpcGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW5wdXRCYXNpY0NvbXBvbmVudCxcbiAgICBJbnB1dFBpcGVzTW9kdWxlLFxuICAgIElucHV0VERfUkZDb21wb25lbnQsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBFcnJvck1lc3NhZ2VQaXBlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBPdHBJbnB1dENvbXBvbmVudCxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQnRuTW9kdWxlLFxuICAgIEVycm9yTWVzc2FnZVBpcGUsXG4gICAgRXJyb3JNZXNzYWdlc1BpcGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW5wdXRCYXNpY0NvbXBvbmVudCxcbiAgICBJbnB1dFBpcGVzTW9kdWxlLFxuICAgIElucHV0VERfUkZDb21wb25lbnQsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgT3RwSW5wdXRDb21wb25lbnQsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbRXJyb3JNZXNzYWdlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TW9kdWxlIHt9XG4iXX0=