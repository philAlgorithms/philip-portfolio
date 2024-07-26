import { Meta, StoryFn } from '@storybook/react';
import AboutSection, { IAboutSection } from './AboutSection';
import { mockAboutSectionProps } from './AboutSection.mocks';

export default {
  title: 'templates/AboutSection',
  component: AboutSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof AboutSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AboutSection> = (args) => (
  <AboutSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAboutSectionProps.base,
} as IAboutSection;
