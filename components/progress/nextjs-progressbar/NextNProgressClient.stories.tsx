import { Meta, StoryFn } from '@storybook/react';
import NextNProgressClient, {
  INextNProgressClient,
} from './NextNProgressClient';
import { mockNextNProgressClientProps } from './NextNProgressClient.mocks';

export default {
  title: 'templates/NextNProgressClient',
  component: NextNProgressClient,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof NextNProgressClient>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NextNProgressClient> = (args) => (
  <NextNProgressClient {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNextNProgressClientProps.base,
} as INextNProgressClient;
