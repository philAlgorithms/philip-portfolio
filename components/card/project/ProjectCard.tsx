import Typography from '@/components/general/typography';
import SanityImageWithFallback from '@/components/image/fallback/SanityImageWithfallback';
import Link from '@/components/navigation/link';
import Tag from '@/lib/data-display/tag';
import { IProject, IProjectWithoutBody } from '@/lib/sanity/types/project';
import { mergeClasses } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Card from '../Card';

export interface IProjectCard extends React.ComponentPropsWithoutRef<'div'> {
  project: IProject | IProjectWithoutBody;
  isReverse?: boolean;
}

const ProjectCard: React.FC<IProjectCard> = ({
  project,
  isReverse = false,
  className,
  ...divProps
}) => {
  const { title, description, skills, link } = project;
  return (
    <Card
      className="mx-auto flex w-full max-w-6xl flex-col md:flex-row"
      {...divProps}
    >
      {/* Image */}
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          isReverse
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        <Link
          className="relative w-full h-auto aspect-[15/12]"
          noCustomization
          href={link ?? '#'}
          externalLink
        >
          <SanityImageWithFallback
            image={project.mainImage}
            alt={title}
            className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
          />
        </Link>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          isReverse ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {skills.map((technology, index) => (
            <Tag key={index} label={technology.name} />
          ))}
        </div>
        <Link
          href={link ?? '#'}
          noCustomization
          className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
          externalLink
        >
          <ExternalLink />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
