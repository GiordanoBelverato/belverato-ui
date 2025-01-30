import styles from './button.module.css';

type BottunProps = {
  onclick: () => void;
}

export const Button = ({ onclick }: BottunProps) => {
  return (
    <button onClick={onclick}>BTN</button>
  );
};
export default Button;
