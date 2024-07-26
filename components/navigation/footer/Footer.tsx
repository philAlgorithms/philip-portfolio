import Typography from '@/components/general/typography';
import { EXTERNAL_LINKS } from '@/lib/data';
import { Copyright } from 'lucide-react';
import Link from '../link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  const socials = [
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/company/natesa-consulting',
    },
    {
      title: 'X',
      url: 'https://x.com/natesaconsult',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/natesaconsulting',
    },
  ];
  return (
    <footer className={`w-full bg-gray-50 py-6 ${className}`} {...footerProps}>
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.FIGMA_FILE}
          >
            Designed
          </Link>
          &nbsp;with ❤️️ by Sagar Shah
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
