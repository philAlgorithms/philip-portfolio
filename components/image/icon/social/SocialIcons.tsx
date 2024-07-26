import IconButton from '@/components/general/icon-button';
import { SOCIAL_LINKS } from '@/lib/data';

export interface ISocialIcons extends React.ComponentPropsWithoutRef<'div'> {}

const SocialIcons: React.FC<ISocialIcons> = ({ className, ...divProps }) => {
  return (
    <div className={`flex gap-1 ${className}`} {...divProps}>
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, '_blank')}
        >
          <socialLink.icon />
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
