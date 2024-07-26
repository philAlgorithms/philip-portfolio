'use client';
import {
  CommandLineIcon,
  RectangleStackIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

export interface INavbar extends React.ComponentPropsWithoutRef<'nav'> {
  href?: string;
}

const NAV_MENU = [
  {
    name: 'Home',
    icon: RectangleStackIcon,
  },
  {
    name: 'Skills',
    icon: UserCircleIcon,
  },
  {
    name: 'Resume',
    icon: CommandLineIcon,
    href: '#',
  },
];

const Navbar: React.FC<INavbar> = ({ className, href, ...navProps }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    // <div className={`${styles.container} ${className}`} {...divProps}></div>
    <div className="border-0 sticky top-0 z-50"></div>
  );
};

export default Navbar;
