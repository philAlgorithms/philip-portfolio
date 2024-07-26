'use client';
import ExperienceCard from '@/components/card/experience/ExperienceCard';
import Typography from '@/components/general/typography';
import Container, { IContainer } from '@/components/layout/container/Container';
import Tag from '@/lib/data-display/tag';
import { IExperience } from '@/lib/sanity/types/experience';

export interface IExperienceSection extends IContainer {
  experiences: IExperience[];
}

const ExperienceSection: React.FC<IExperienceSection> = ({
  experiences,
  className,
  ...headerProps
}) => {
  return (
    <Container
      id="ExperienceSection"
      className={`bg-gray-50 ${className}`}
      {...headerProps}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
