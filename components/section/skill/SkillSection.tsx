'use client';
import Typography from '@/components/general/typography';
import SkillIcon from '@/components/image/icon/skill/SkillIcon';
import Container, { IContainer } from '@/components/layout/container/Container';
import Tag from '@/lib/data-display/tag';
import { ISkill } from '@/lib/sanity/types/skill';

export interface ISkillSection extends IContainer {
  skills: ISkill[];
}

const SkillSection: React.FC<ISkillSection> = ({
  skills,
  className,
  ...sectionProps
}) => {
  return (
    <Container className={`px-8 ${className}`} {...sectionProps}>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {skills.map((skill, index) => (
          <SkillIcon skill={skill} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillSection;
