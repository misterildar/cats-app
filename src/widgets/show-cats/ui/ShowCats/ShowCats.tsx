import { ChangeEvent, FC, useState, useEffect } from 'react';

import cat from '@/assets/cat.png';
import { Cats } from '@/features/cats';
import { fetchCats } from '@/entities/cats';
import { Button, CheckBox } from '@/shared/ui';
import { useCatsStore } from '@/entities/cats';

import styles from './ShowCats.module.scss';

export const ShowCats: FC = () => {
  const [state, setState] = useState({
    enabled: false,
    autoRefresh: false,
  });

  const { catData } = useCatsStore();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (state.enabled && state.autoRefresh) {
      interval = setInterval(fetchCats, 5000);
    }
    return () => clearInterval(interval);
  }, [state.enabled, state.autoRefresh]);

  const handleChange = ({ target: { id } }: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  const handleClick = () => {
    if (state.enabled) fetchCats();
  };

  return (
    <div className={styles.checkbox}>
      <CheckBox text='Enabled' checked={state.enabled} onChange={handleChange} id='enabled' />
      <CheckBox
        text='Auto refresh every 5 seconds'
        checked={state.autoRefresh}
        onChange={handleChange}
        id='autoRefresh'
        disabled={!state.enabled}
      />
      <Button
        text='Get cat'
        type='button'
        width='300px'
        onClick={handleClick}
        disabled={!state.enabled}
      />
      {catData[0]?.id ? <Cats cat={catData[0]} /> : <img src={cat} alt='cat' width='300px' />}
    </div>
  );
};
