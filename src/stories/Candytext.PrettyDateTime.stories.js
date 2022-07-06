import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import moment from 'moment'

import { PrettyDateTime } from '../components/Candytext';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Helperize/PrettyDateTime',
  component: PrettyDateTime,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplatePrettyDateTime = (args) => <PrettyDateTime {...args} />;

export const EpochExample = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EpochExample.args = {
  inputdate: Date.now()
};

export const MomentExample = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MomentExample.args = {
  inputdate: moment()
};

export const DateExample = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DateExample.args = {
  inputdate: Date()
};

export const ISOExample = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ISOExample.args = {
  inputdate: moment().toISOString()
};

//
// Timezone Australia/Sydney to torque it enough to work
//
export const EpochExampleSydney = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EpochExampleSydney.args = {
  inputdate: Date.now(),
  timezone: "Australia/Sydney"
};

export const MomentExampleSydney = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MomentExampleSydney.args = {
  inputdate: moment(),
  timezone: "Australia/Sydney"
};

export const DateExampleSydney = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DateExampleSydney.args = {
  inputdate: Date(),
  timezone: "Australia/Sydney"
};

export const ISOExampleSydney = TemplatePrettyDateTime.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ISOExampleSydney.args = {
  inputdate: moment().toISOString(),
  timezone: "Australia/Sydney"
};