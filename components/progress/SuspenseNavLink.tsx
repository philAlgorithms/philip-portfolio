'use client';
import { Suspense } from 'react';
import NavLink, { INavLink } from './NavLink';

export interface ISuspenseNavLink extends INavLink {}

const SuspenseNavLink: React.FC<ISuspenseNavLink> = ({
  children,
  ...progressProps
}) => {
  return (
    <Suspense>
      <NavLink {...progressProps}>{children}</NavLink>
    </Suspense>
  );
};

export default SuspenseNavLink;
