import React from 'react';
import {render, screen} from '@testing-library/react'
import { PrettyDateTime } from '../components/Candytext/Candytext';
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
describe('testing prettydatetime', () => {
  test('testing epoch', () => {
    render (<PrettyDateTime {...args1}/>)
    screen.getByText('14:13 PM 6th July 2022')
  });
});

describe('testing prettydatetime', () => {
  test('testing Date', () => {
    render (<PrettyDateTime {...args2}/>)
    screen.getByText('14:13 PM 6th July 2022')
  });
});

describe('testing prettydatetime', () => {
  test('testing moment', () => {
    render (<PrettyDateTime {...args3}/>)
    screen.getByText('14:13 PM 6th July 2022')
  });
});

describe('testing prettydatetime', () => {
  test('testing ISO8601', () => {
    render (<PrettyDateTime {...args4}/>)
    screen.getByText('14:13 PM 6th July 2022')
  });
});