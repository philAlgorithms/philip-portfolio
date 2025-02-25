import { Meta, StoryFn } from '@storybook/react';
import SkillSection, { ISkillSection } from './SkillSection';
import { mockSkillSectionProps } from './SkillSection.mocks';

export default {
  title: 'templates/SkillSection',
  component: SkillSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SkillSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SkillSection> = (args) => (
  <SkillSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSkillSectionProps.base,
} as ISkillSection;
