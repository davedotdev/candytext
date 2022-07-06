import moment from 'moment-timezone';
declare type PluraliseAppProps = {
    word: string;
    count: number | boolean;
};
declare type PrettyDateAppProps = {
    inputdate: Date | moment.Moment | string | number;
    timezone: string;
};
export declare const Prettyfi: (day: number, month: number, year: number) => string;
export declare const Pluralise: ({ word, count }: PluraliseAppProps) => string;
export declare const PrettyDate: ({ inputdate, timezone }: PrettyDateAppProps) => string;
export declare const PrettyDateTime: ({ inputdate, timezone }: PrettyDateAppProps) => string;
export {};
