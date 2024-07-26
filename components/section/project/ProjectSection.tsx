'use client';
import ProjectCard from '@/components/card/project/ProjectCard';
import Typography from '@/components/general/typography';
import Container, { IContainer } from '@/components/layout/container/Container';
import Tag from '@/lib/data-display/tag';
import { IProject, IProjectWithoutBody } from '@/lib/sanity/types/project';

export interface IProjectSection extends IContainer {
  projects: (IProject | IProjectWithoutBody)[];
}

const ProjectSection: React.FC<IProjectSection> = ({
  projects,
  className,
  ...headerProps
}) => {
  return (
    <Container id="work" className={`bg-gray ${className}`} {...headerProps}>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {projects?.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          isReverse={index % 2 === 1}
        />
      ))}
    </Container>
  );
};

export default ProjectSection;
