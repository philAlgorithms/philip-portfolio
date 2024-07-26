import styles from './SkillCard.module.scss';

export interface ISkillCard extends React.ComponentPropsWithoutRef<'div'> {}

const SkillCard: React.FC<ISkillCard> = ({ className, ...divProps }) => {
  return (
    <div className={`${styles.container} ${className}`} {...divProps}></div>
  );
};

export default SkillCard;
