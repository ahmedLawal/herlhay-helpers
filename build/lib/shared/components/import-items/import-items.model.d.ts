import { IFormSchema } from "../../models/form-schema.model";
export interface IInputTableScheme extends IFormSchema {
    /**
     * Specify whether to remove \n\t from the input's value
     */
    removeSpecialCharacters?: boolean;
    /**
     * Specify whether to remove commas from the input's value
     */
    removeCommas?: boolean;
    /**
     * Specify whether to add zeros as a prefix
     */
    addPrecedingZeros?: boolean;
    /**
     * The expected length of the value, only to be used when addPrecedingZeros is set to true
     */
    expectedLength?: number;
    /**
     * Specify whether the field is mandatory
     */
    isRequired?: boolean;
    __ID?: any;
    templateValue?: any;
}
export declare enum EDateFormat {
    ddmmyyyySlashes = "DD/MM/YYYY",
    mmddyyyySlashes = "MM/DD/YYYY",
    yyyymmddSlashes = "YYYY/MM/DD",
    yyyymmddDashesHHMM = "YYYY-MM-DD HH-MM"
}
export interface IUploadResponse {
    id: string;
    filename: string;
}
