'use client';
import Typography from '@/components/general/typography';
import SanityImageWithFallback from '@/components/image/fallback/SanityImageWithfallback';
import { IExperience } from '@/lib/sanity/types/experience';
import { format } from 'date-fns';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Card, { ICard } from '../Card';

export interface IExperienceCard extends ICard {
  experience: IExperience;
}

const ExperienceCard: React.FC<IExperienceCard> = ({
  experience,
  className,
  ...divProps
}) => {
  console.log(experience);
  const { title, activities, link, logo, darkModeLogo, startedAt, endedAt } =
    experience;
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Card
      className={`mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8 ${className}`}
      {...divProps}
    >
      <div className="max-md:order-1 md:w-1/4">
        <a
          href={link ? link : '#'}
          target={link ? '_blank' : undefined}
          className="block relative w-full h-auto aspect-[102/28] max-w-[120px]"
        >
          <SanityImageWithFallback
            image={theme === 'dark' ? darkModeLogo || logo : logo}
            cover={false}
            alt={title}
            className="transition-transform duration-300 md:hover:scale-110"
          />
        </a>
      </div>
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {title}
        </Typography>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {activities.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 md:text-right">
          {format(startedAt, 'MMM yyy')} -{' '}
          {endedAt === null ? 'Present' : format(endedAt, 'MMM yyy')}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceCard;
