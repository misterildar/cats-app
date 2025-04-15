import { FC } from 'react';
import { ChangeEvent, ReactNode } from 'react';
import styles from './CheckBox.module.scss';

interface Props {
  text: string | ReactNode;
  checked: boolean;
  onChange?: (_: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  disabled?: boolean;
}
export const CheckBox: FC<Props> = ({ text, checked, onChange, id, disabled }) => {
  return (
    <label className={styles.checkbox}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        id={id}
        className={styles.checkbox_input}
        disabled={disabled}
      />
      <span className={styles.text}>{text}</span>
    </label>
  );
};
