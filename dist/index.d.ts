import moment from 'moment-timezone';

declare type PluraliseAppProps = {
    word: string;
    count: number | boolean;
};
declare type PrettyDateAppProps = {
    inputdate: Date | moment.Moment | string | number;
    timezone: string;
};
declare const Pluralise: ({ word, count }: PluraliseAppProps) => string;
declare const PrettyDate: ({ inputdate, timezone }: PrettyDateAppProps) => string;
declare const PrettyDateTime: ({ inputdate, timezone }: PrettyDateAppProps) => string;

export { Pluralise, PrettyDate, PrettyDateTime };
