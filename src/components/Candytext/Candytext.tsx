/*
Copyright 2022 David Gee, dave.dev

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import moment from 'moment-timezone';

// props
type PluraliseAppProps = {
    word: string;
    count: number | boolean;
};

// props
type PrettyDateAppProps = {
    // we accept a JS date, moment.Moment, string or number
    inputdate: Date | moment.Moment | string | number;
    timezone: string,
};

// Ordinalize puts the 'nd', 'rd', 'th' and 'st' on to time
function Ordinalize(x: number): string {
	if (x >= 10 && x < 19) {
		return x + "th"
	}

	switch (x % 10) { // the last digit
	case 1:
		return x + "st"
	case 2:
		return x + "nd"
	case 3:
		return x + "rd"
	}

	return x + "th"
}

// Pretty month accepts the month number and returns the long form
function PrettyMonth(x: number): string {
    const date = new Date();
    date.setMonth(x);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
}

// Returns pretty date
export const Prettyfi = (day: number, month: number, year: number): string => {

    let prettyDay = Ordinalize(day)
    let prettyMonth = PrettyMonth(month)
    let prettyYear = year

    return (prettyDay + " " + prettyMonth + " " + prettyYear)
}

// Pluralise is a helper functional component to pluralise words with a count input.
// Count can be a number or boolean. Only handles positive numbers.
export const Pluralise = ({ word, count}: PluraliseAppProps) => {
    // If we don't have a word, return
    if (word === undefined) {
        return ""
    }
    
    // Figure out what our generic input is
    switch (typeof(count)) {
        case "boolean":
            if (count)
                return word + "s"
            return word
        case "number":
            // I have 0 apples is a valid language construct
            if (count === 0)
                return word + "s"
            if (count > 1)
                return word + "s"
    }
    
    // pluralise default case
    return word
};

// PrettyDate accepts a date in either JS date, ISO8601, momentjs or epoch(int) formats 
// and returns a pretty version that's ordinalized.
export const PrettyDate = ({ inputdate, timezone}: PrettyDateAppProps) => {
    // If we don't have a word, return
    if (inputdate === undefined) {
        return ""
    }

    // Guess the timezone if not provided
    let tz = moment.tz.guess()

    if (timezone !== undefined)
        tz = timezone
    
    // Figure out what our generic input is
    switch (typeof(inputdate)) {
        // Case for Date or moment.Moment
        case "object":
            const objMoment = moment.tz(inputdate, tz)
            if (moment.isMoment(inputdate))
                return Prettyfi(objMoment.date(), objMoment.month(), objMoment.year())
            break
        case "number":
            let epochMoment = moment.tz(inputdate, tz)
            if (epochMoment.isValid())
                return Prettyfi(epochMoment.date(), epochMoment.month(), epochMoment.year())
            return "unknown"
        case "string":
            const newMoment = moment.tz(inputdate, moment.ISO_8601, tz)
            if (newMoment.isValid())
                return Prettyfi(newMoment.date(), newMoment.month(), newMoment.year())
            
            // Test for JS Date
            let testDate = new Date(inputdate);
            let dateMoment = moment.tz(testDate.toUTCString(), tz).subtract()
            if (!newMoment.isValid() && (testDate instanceof Date) && dateMoment.isValid())
                if (dateMoment.isValid())
                    return Prettyfi(dateMoment.date(), dateMoment.month(), dateMoment.year())
            break
    }
    return "unknown"
};

// PrettyDateTime accepts a date in either JS date, ISO8601, momentjs or epoch(int) formats 
// and returns a pretty version that's ordinalized.
export const PrettyDateTime = ({ inputdate, timezone}: PrettyDateAppProps) => {
    // If we don't have a word, return
    if (inputdate === undefined) {
        return ""
    }

    // Guess the timezone if not provided
    let tz = moment.tz.guess()

    if (timezone !== undefined)
        tz = timezone
    
    // Figure out what our generic input is
    switch (typeof(inputdate)) {
        // Case for Date or moment.Moment
        case "object":
            const objMoment = moment.tz(inputdate, tz)
            if (moment.isMoment(inputdate))
                return objMoment.format("HH:mm A") + " " + Prettyfi(objMoment.date(), objMoment.month(), objMoment.year())
            break
        case "number":
            let epochMoment = moment.tz(inputdate, tz)
            if (epochMoment.isValid())
                return epochMoment.format("HH:mm A") + " " + Prettyfi(epochMoment.date(), epochMoment.month(), epochMoment.year())
            return "unknown"
        case "string":
            const newMoment = moment.tz(inputdate, moment.ISO_8601, tz)
            if (newMoment.isValid())
                return newMoment.format("HH:mm A") + " " + Prettyfi(newMoment.date(), newMoment.month(), newMoment.year())
            
            // Test for JS Date
            let testDate = new Date(inputdate);
            let dateMoment = moment.tz(testDate.toUTCString(), tz).subtract()
            if (!newMoment.isValid() && (testDate instanceof Date) && dateMoment.isValid())
                if (dateMoment.isValid())
                    return dateMoment.format("HH:mm A") + " " + Prettyfi(dateMoment.date(), dateMoment.month(), dateMoment.year())
            break
    }
    return "unknown"
};
