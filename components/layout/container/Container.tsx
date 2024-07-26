export interface IContainer extends React.ComponentPropsWithoutRef<'section'> {}

const Container: React.FC<IContainer> = ({
  className,
  children,
  ...sectionProps
}) => {
  return (
    <section
      className={`w-full py-16 md:py-20 2xl:py-24 ${className}`}
      {...sectionProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Container;
