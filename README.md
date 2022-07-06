## Candytext

This package offers 3 React components:

- Pluralise
- PrettyDate
- PrettyDateTime

I've found these to be particularly useful and wanted to publish an `npm` package to share them.

__Install__

```bash
npm intall @davedotdev/candytext
```

__Pluralise__

With the code below, you can increment count from 0 positively and the word apple will be pluralised.
Only a text string is returned from this.

```javascript
import { Pluralise } from '@davedotdev/candytext'

const Demo = () => {
    let count = 0
    // let count = true // also works with boolean for hard pluralisation
    return (
        <Pluralise word="apple" count={count}/>
    )
}
```

__PrettyDate__

PrettyDate accepts a timestamp in one of these forms:

- Javascript Date (string)
- MomentJS (object)
- Epoch in mS or S
- ISO8601 string

It can also handle timezones. If you don't provide one, it guesses at what your browser is configured with.

```javascript
import { PrettyDate } from '@davedotdev/candytext';
import moment from 'moment-timezone';

const Demo = () => {

    let epochTest = 1657113202276 // 6th July 2022 in Europe/London time
    let date1 = epochTest
    let date2 = new Date(epochTest).toString()
    let date3 = moment(epochTest)
    let date4 = moment(epochTest).toISOString()
    
    return (
        <PrettyDate inputdate={date1}/>
        <PrettyDate inputdate={date1} timezone="Europe/London" />
        <PrettyDate inputdate={date2} timezone="Australia/Sydney" />
        <PrettyDate inputdate={date3} timezone="Africa/Cairo" />
        <PrettyDate inputdate={date4} timezone="Asia/Tokyo" />
    )
}
```

__PrettyDateTime__

PrettyDateTime accepts a timestamp in one of these forms:

- Javascript Date (string)
- MomentJS (object)
- Epoch in mS or S
- ISO8601 string

It can also handle timezones. If you don't provide one, it guesses at what your browser is configured with.

```javascript
import { PrettyDateTime } from '@davedotdev/candytext';
import moment from 'moment-timezone';

const Demo = () => {

    let epochTest = 1657113202276 // 16:28 PM 6th July 2022 in Europe/London time
    let date1 = epochTest
    let date2 = new Date(epochTest).toString()
    let date3 = moment(epochTest)
    let date4 = moment(epochTest).toISOString()
    
    return (
        <PrettyDateTime inputdate={date1}/>
        <PrettyDateTime inputdate={date1} timezone="Europe/London" />
        <PrettyDateTime inputdate={date2} timezone="Australia/Sydney" />
        <PrettyDateTime inputdate={date3} timezone="Africa/Cairo" />
        <PrettyDateTime inputdate={date4} timezone="Asia/Tokyo" />
    )
}
```

## Issues

Go to the GitHub repository: [https://github.com/davedotdev/candytext](https://github.com/davedotdev/candytext) and create an issue with the following detail.

1.  What did you use?
2.  What version?
3.  What version of React?
4.  What was the input?
5.  What was the Output?
6.  Other detail
7.  Any information on a fix suggestion is welcome

## Contributions

Throw a PR over to Github.

## Buy Me Coffee

Because you're a kind soul >> [https://www.buymeacoffee.com/davedotdev](https://www.buymeacoffee.com/davedotdev)

## License

Apache2. See License file on the repo.