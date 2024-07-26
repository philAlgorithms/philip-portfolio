'use client';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { ISkill } from '@/lib/sanity/types/skill';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SanityImageWithFallback from '../../fallback/SanityImageWithfallback';

export interface ISkillIcon extends React.ComponentPropsWithoutRef<'div'> {
  skill: ISkill;
}

const SkillIcon: React.FC<ISkillIcon> = ({ skill, className, ...divProps }) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const { name, icon } = skill;
  const finalSrc = theme === 'dark' ? skill.darkModeIcon || icon : icon;
  return (
    <div
      className={`flex flex-col items-center gap-2 ${className}`}
      {...divProps}
    >
      <Link
        className="relative w-16 h-16"
        noCustomization
        href={skill.link}
        externalLink
      >
        <SanityImageWithFallback
          image={finalSrc}
          cover={false}
          alt={name}
          className="transition-transform duration-300 md:hover:scale-110"
        />
      </Link>
      <Typography variant="body1">{name}</Typography>
    </div>
  );
};

export default SkillIcon;
