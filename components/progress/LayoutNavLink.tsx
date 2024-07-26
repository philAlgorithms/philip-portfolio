'use client';
import SuspenseNavLink, { ISuspenseNavLink } from './SuspenseNavLink';

export interface ILayoutNavLink extends ISuspenseNavLink {}

const LayoutNavLink: React.FC<ILayoutNavLink> = ({
  href,
  currentLinkClassName = '',
  regularLinkClassName = '',
  className,
  children,
  ...progressProps
}) => {
  return (
    <SuspenseNavLink
      href={href}
      currentLinkClassName={`text-gray-1012 ${currentLinkClassName}`}
      regularLinkClassName={`text-gray-8de ${regularLinkClassName}`}
      className={`font-satoshi-variable text-[16px] leading-[18.62px] lg:text-scale-desktop-16 lg:leading-scale-desktop-18 ${className}`}
      {...progressProps}
    >
      {children}
    </SuspenseNavLink>
  );
};

export default LayoutNavLink;
