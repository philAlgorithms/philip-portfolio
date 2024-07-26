'use client';
import { Link } from '@/lib/router-events';
import { usePathname, useSearchParams } from 'next/navigation';

export interface INavLink extends React.ComponentPropsWithoutRef<'a'> {
  currentLinkClassName?: string;
  regularLinkClassName?: string;
}

const NavLink: React.FC<INavLink> = ({
  href,
  currentLinkClassName = '',
  regularLinkClassName = '',
  className,
  children,
  ...progressProps
}) => {
  const pathname = usePathname();
  const searchhParams = useSearchParams().toString();
  return (
    <Link
      href={href}
      className={`${
        pathname + (searchhParams.length > 0 ? '?' : '') + searchhParams ===
        href
          ? currentLinkClassName
          : regularLinkClassName
      } ${className}`}
      {...progressProps}
    >
      {children}
    </Link>
  );
};

export default NavLink;
