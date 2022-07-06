import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pluralise } from '../components/Candytext/Candytext';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Helperize/Pluralise',
  component: Pluralise,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplatePluralise = (args) => <Pluralise {...args} />;

export const NoPlural1 = TemplatePluralise.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoPlural1.args = {
  word: "apple",
  count: 1,
};

export const NoPlural2 = TemplatePluralise.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoPlural2.args = {
  word: "apple",
  count: false,
};

export const NoPlural3 = TemplatePluralise.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoPlural3.args = {
  word: "apple",
  count: -1,
};

export const Plural1 = TemplatePluralise.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Plural1.args = {
  word: "apple",
  count: 2,
};

export const Plural2 = TemplatePluralise.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Plural2.args = {
  word: "apple",
  count: true,
};