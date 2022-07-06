import React from 'react';
import {render, screen} from '@testing-library/react'
import { Pluralise } from '../components/Candytext/Candytext';

// Test Apple count 0
let args1 = {
  word: "apple",
  count: 0,
};

let args2 = {
  word: "apple",
  count: 1,
};

let args3 = {
  word: "apple",
  count: 3,
};

let args4 = {
  word: "apple",
  count: true,
};

let args5 = {
  word: "apple",
  count: -1,
};

// Tests
describe('testing pluralise', () => {
  test('testing apple with count=0', () => {
    render (<Pluralise {...args1}/>)
    screen.getByText('apples')
  });
});

describe('testing pluralise', () => {
  test('testing apple with count=1', () => {
    render (<Pluralise {...args2}/>)
    screen.getByText('apple')
  });
});

describe('testing pluralise', () => {
  test('testing apple with count=3', () => {
    render (<Pluralise {...args3}/>)
    screen.getByText('apples')
  });
});

describe('testing pluralise', () => {
  test('testing apple with count=true', () => {
    render (<Pluralise {...args4}/>)
    screen.getByText('apples')
  });
});

describe('testing pluralise', () => {
  test('testing apple with count=-1', () => {
    render (<Pluralise {...args5}/>)
    screen.getByText('apple')
  });
});