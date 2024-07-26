import { Meta, StoryFn } from '@storybook/react';
import NavItem, { INavItem } from './NavItem';
import { mockNavItemProps } from './NavItem.mocks';

export default {
  title: 'templates/NavItem',
  component: NavItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof NavItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavItemProps.base,
} as INavItem;
