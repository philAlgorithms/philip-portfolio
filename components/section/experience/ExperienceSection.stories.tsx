import { Meta, StoryFn } from '@storybook/react';
import ExperienceSection, { IExperienceSection } from './ExperienceSection';
import { mockExperienceSectionProps } from './ExperienceSection.mocks';

export default {
  title: 'templates/ExperienceSection',
  component: ExperienceSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ExperienceSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ExperienceSection> = (args) => (
  <ExperienceSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExperienceSectionProps.base,
} as IExperienceSection;
