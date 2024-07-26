import { Meta, StoryFn } from '@storybook/react';
import ProjectSection, { IProjectSection } from './ProjectSection';
import { mockProjectSectionProps } from './ProjectSection.mocks';

export default {
  title: 'templates/ProjectSection',
  component: ProjectSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ProjectSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ProjectSection> = (args) => (
  <ProjectSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProjectSectionProps.base,
} as IProjectSection;
