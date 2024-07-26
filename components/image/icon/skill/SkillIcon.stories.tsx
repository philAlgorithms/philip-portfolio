import { Meta, StoryFn } from '@storybook/react';
import SkillIcon, { ISkillIcon } from './SkillIcon';
import { mockSkillIconProps } from './SkillIcon.mocks';

export default {
  title: 'templates/SkillIcon',
  component: SkillIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SkillIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SkillIcon> = (args) => <SkillIcon {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSkillIconProps.base,
} as ISkillIcon;
