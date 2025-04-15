import { FC } from 'react';
import { ShowCats } from '@/widgets/show-cats';
import styles from './App.module.scss';

export const App: FC = () => {
  return (
    <main className={styles.main}>
      <ShowCats />
    </main>
  );
};
