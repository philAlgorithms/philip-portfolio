'use client';

export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className={`${styles.container} ${className}`} {...divProps}></div>
    <>{children as any}</>
  );
};

export default Layout;
