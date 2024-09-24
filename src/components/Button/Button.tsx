import { forwardRef } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ text, onClick },
	ref
) {
	return (
		<button ref={ref} className={cn(styles['button'], styles['accent'])} onClick={onClick}>
			{text}
		</button>
	);
});

export default Button;
