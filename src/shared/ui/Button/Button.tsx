import { FC } from 'react';
import styles from './Button.module.scss';

type Props = {
  text: string;
  color?: string;
  type: 'submit' | 'button';
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button : FC<Props> = ({ text, color = '', onClick, type, width, disabled = false }) => {
  return (
    <button
      type={type}
      style={{ width: width }}
      className={`${styles.button} ${color ? styles[color] : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <h4>{text}</h4>
    </button>
  );
};
