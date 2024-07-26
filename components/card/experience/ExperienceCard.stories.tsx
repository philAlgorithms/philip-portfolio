import { Meta, StoryFn } from '@storybook/react';
import ExperienceCard, { IExperienceCard } from './ExperienceCard';
import { mockExperienceCardProps } from './ExperienceCard.mocks';

export default {
  title: 'templates/ExperienceCard',
  component: ExperienceCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ExperienceCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ExperienceCard> = (args) => (
  <ExperienceCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExperienceCardProps.base,
} as IExperienceCard;
