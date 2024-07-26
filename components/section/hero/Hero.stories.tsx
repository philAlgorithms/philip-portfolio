import { Meta, StoryFn } from '@storybook/react';
import Hero, { IHero } from './Hero';
import { mockHeroProps } from './Hero.mocks';

export default {
  title: 'templates/Hero',
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Hero> = (args) => <Hero {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroProps.base,
} as IHero;
