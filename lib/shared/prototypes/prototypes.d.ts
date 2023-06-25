import { Observable } from 'rxjs';
declare global {
    interface String {
        stripChar(character?: string): string;
        lastStripChar(character?: string): string;
        unChar(character?: string, replacement?: string): string;
        /**
         * Converts Pascal case to Sentence case
         * @example 'smallBook'.toSentenceCase() = 'Small Book'
         */
        toSentenceCase(): string;
        /**
         * Replaces all occurrences of a substring
         * @returns The string after replacement
         */
        replaceAllSubStr(character?: string, replacement?: string): string;
        /**
         *
         * @param character Character to add before string
         * @param expectedLength Expected length of the string after addition of the character
         */
        addPrecedingChar(character: string, expectedLength: number): string;
        /**
         * Convert a text into camel case
         * @param text
         */
        toCamelCase(): string;
        /**
         * To title case
         * @param text
         */
        toTitleCase(): string;
    }
    interface Array<T> {
        merge(): T;
        /**
         * @param index The index to select from the end.
         * @defaultValue 0
         * @example ['a','b','c'].reverseIndex(1) returns 'b'
         * @example ['a','b','c','d','e'].reverseIndex(2) returns 'c'
         */
        reverseIndex(index?: number): T;
        lastItem(): T;
        /**
         *
         * @param field Field name to compare with
         * @param isString Is the data type of the field a string (Default is true)
         * @param reverse Should it be in a descending order
         */
        sort2(field: keyof T, isString?: boolean, reverse?: boolean): T[];
        /**
         * Remove items from an array that don't have values in any of its fields
         * @param expectedFields Fields to check for emptiness, the function will remove the items that don't have any value in all the fields specified
         */
        removeEmptyItems(expectedFields?: (keyof T)[], config?: {
            /**
             * Specify whether to check the value in boolean fields.
             * @defaultValue `false`
             */
            ignoreBooleanFields?: boolean;
            /**
             * Specify whether to check for emptiness in the 'expectedFields' or check for emptiness in the other fields excluding the fields specified
             * @defaultValue `included`
             */
            fieldsType?: 'included' | 'excluded';
        }): T[];
    }
    interface Function {
        clone: any;
    }
}
declare module '@angular/forms' {
    interface FormArray<TControl extends AbstractControl<any> = any> extends AbstractControl<ɵTypedOrUntyped<TControl, ɵFormArrayValue<TControl>, any>, ɵTypedOrUntyped<TControl, ɵFormArrayRawValue<TControl>, any>> {
        cFormStructure: TControl;
        cAddItem(index?: number, data?: TControl): FormArray<TControl>;
        /**
         * Handles the deletion of rows from a FormArray
         * @param index Index of the row to delete
         * @param fa The FormArray that holds the rows
         * @param deleteService The deletion service to be called (It should be an anonymous function)
         * @param addRowFunc The function (anonymous) that adds a new row to the FormArray
         * @param emitEvent Specify whether to emit an event when manipulating the FormArray
         * @returns
         */
        cRemoveItem(index: number, deleteService?: (...args: any[]) => Promise<any> | Observable<any>, addRowFunc?: (...args: any[]) => any, emitEvent?: boolean): Promise<FormArray<TControl>>;
    }
}
export {};
