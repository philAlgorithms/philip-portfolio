import { Meta, StoryFn } from '@storybook/react';
import Container, { IContainer } from './Container';
import { mockContainerProps } from './Container.mocks';

export default {
  title: 'templates/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Container> = (args) => <Container {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockContainerProps.base,
} as IContainer;
