import { Meta, StoryFn } from '@storybook/react';
import { mockSanityImageWithFallbackProps } from './SanityImageWithFallback.mocks_1';
import SanityImageWithFallback, {
  ISanityImageWithFallback,
} from './SanityImageWithfallback';

export default {
  title: 'templates/SanityImageWithFallback',
  component: SanityImageWithFallback,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SanityImageWithFallback>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SanityImageWithFallback> = (args) => (
  <SanityImageWithFallback {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSanityImageWithFallbackProps.base,
} as ISanityImageWithFallback;
