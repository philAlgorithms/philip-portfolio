import { Meta, StoryFn } from '@storybook/react';
import SkillCard, { ISkillCard } from './SkillCard';
import { mockSkillCardProps } from './SkillCard.mocks';

export default {
  title: 'templates/SkillCard',
  component: SkillCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SkillCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SkillCard> = (args) => <SkillCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSkillCardProps.base,
} as ISkillCard;
