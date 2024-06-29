import classNames from "classnames";
import '../../styles/Button.scss';

export const Button = ({
  title,
  isLarge = false,
  isDisabled = false,
  hasArrow = false,
}) => (
  <button className={classNames('button', {
    'button--large': isLarge,
    'button--disabled': isDisabled,
    'button--arrow': hasArrow,
  })}>
    <span className='button__title'>{title}</span>
  </button>
);
