'use client';
import IconButton from '@/components/general/icon-button';
import ThemeSwitcher from '@/components/general/theme-switcher';
import Typography from '@/components/general/typography';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/navigation/drawer';
import Link from '@/components/navigation/link';
import { NAV_LINKS } from '@/lib/data';
import { classNames } from '@/lib/helpers/string-helpers';
import useScroll from '@/lib/hooks/use-scroll';
import useWindowSize from '@/lib/hooks/use-window-size';
import { Menu, X } from 'lucide-react';
import { ReactElement, useEffect, useState } from 'react';

export interface ILinkContent {
  name: string;
  description?: string;
  href: string;
  // icon: JSX.ElementType;
}
export interface ILinkItem {
  title: string;
  links?: ILinkContent[];
  href?: string;
  icon?: ReactElement;
}

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Logo = () => (
  <Typography variant="h3" className="font-bold">
    {'<DEEKA />'}
  </Typography>
);
const Header: React.FC<IHeader> = ({ className, children, ...headerProps }) => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={classNames(
        'sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100',
        scrolled ? 'bg-gray/50 backdrop-blur-xl md:border-gray-100' : '',
        className ?? ''
      )}
      {...headerProps}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            {/* <DownloadCV /> */}
          </div>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              {/* <DownloadCV /> */}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
