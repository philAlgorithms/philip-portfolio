import { Meta, StoryFn } from '@storybook/react';
import SocialIcons, { ISocialIcons } from './SocialIcons';
import { mockSocialIconsProps } from './SocialIcons.mocks';

export default {
  title: 'templates/SocialIcons',
  component: SocialIcons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SocialIcons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SocialIcons> = (args) => (
  <SocialIcons {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSocialIconsProps.base,
} as ISocialIcons;
