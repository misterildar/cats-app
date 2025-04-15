import { FC } from 'react';
import { CatProps } from '@/entities/cats/model/types';
import styles from './Cats.module.scss';

export const Cats: FC<{ cat: CatProps }> = ({ cat }) => {
  return (
    <div className={styles.cat}>
      <img src={cat.url} alt={cat.id} width='300px' />
    </div>
  );
};
