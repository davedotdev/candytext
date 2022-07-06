import React from 'react';
import {render, screen} from '@testing-library/react'
import { PrettyDate } from '../components/Candytext';
import moment from 'moment-timezone'

let epochTest = 1657113202276

// Test data for reliable timestamps
// console.log("Epoch is: " + 1657113202276)
// console.log("Date is: " + Date(1657113202276))
// console.log("Moment is: " + moment(1657113202276))
// console.log("ISO8601 is :" + moment().toISOString())
/*
"Epoch is: 1657113202276"

"Date is: Wed Jul 06 2022 14:15:50 GMT+0100 (British Summer Time)"

"Moment is: 1657113202276"

"ISO8601 is :2022-07-06T13:15:50.281Z"
*/

// Test Epoch
let args1 = {
  inputdate: epochTest,
  timezone: "Europe/London"
};

let d = new Date(epochTest)
let args2 = {
  inputdate: d.toString(),
  timezone: "Europe/London"
};

let args3 = {
  inputdate: moment(epochTest),
  timezone: "Europe/London"
};

let args4 = {
  inputdate: moment(epochTest).toISOString(),
  timezone: "Europe/London"
};

// Tests
describe('testing prettydate', () => {
  test('testing epoch', () => {
    render (<PrettyDate {...args1}/>)
    screen.getByText('6th July 2022')
  });
});

describe('testing prettydate', () => {
  test('testing Date', () => {
    render (<PrettyDate {...args2}/>)
    screen.getByText('6th July 2022')
  });
});

describe('testing prettydate', () => {
  test('testing moment', () => {
    render (<PrettyDate {...args3}/>)
    screen.getByText('6th July 2022')
  });
});

describe('testing prettydate', () => {
  test('testing ISO8601', () => {
    render (<PrettyDate {...args4}/>)
    screen.getByText('6th July 2022')
  });
});