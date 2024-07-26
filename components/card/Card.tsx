export interface ICard extends React.ComponentPropsWithoutRef<'div'> {}

const Card: React.FC<ICard> = ({ className, children, ...divProps }) => {
  return (
    <div
      className={`rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl ${className}`}
      {...divProps}
    >
      {children}
    </div>
  );
};

export default Card;
