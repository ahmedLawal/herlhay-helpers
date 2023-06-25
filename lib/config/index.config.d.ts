import { Day, EPeriod, IListValue } from '../shared/models/index.model';
export declare class Config {
    static logoLightPath: string;
    static logoDarkPath: string;
    static Optioner: {
        num: number;
        letter: string;
    }[];
    static Months: {
        id: number;
        short: string;
        long: string;
    }[];
    static Days: {
        index: number;
        day: Day;
    }[];
    static Numbers: {
        num: number;
        label: string;
    }[];
    static sexes: string[];
    static Currency: string;
    static TimeStampDay: number;
    static TimeStampWeek: number;
    static placeholderImage: string;
    static periods: IListValue<EPeriod>[];
    static periodsWithAnnual: IListValue<EPeriod>[];
    static periodAdverbs: IListValue<EPeriod>[];
    static organisationPlaceholder: string;
    static infoMail: string;
    static salesMail: string;
    static supportMail: string;
    static supportURL: string;
    static authBaseRoute: string;
}
