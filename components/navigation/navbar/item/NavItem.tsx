'use client';
import Typography from '@/components/general/typography';
import styles from './NavItem.module.scss';

export interface INavItem extends React.ComponentPropsWithoutRef<'li'> {
  href?: string;
}

const NavItem: React.FC<INavItem> = ({
  className,
  href,
  children,
  ...liProps
}) => {
  return (
    <li className={`${styles.container} ${className}`} {...liProps}>
      <Typography className="flex items-center gap-2 font-medium text-gray-900">
        {children}
      </Typography>
    </li>
  );
};

export default NavItem;
