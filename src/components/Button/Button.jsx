import { forwardRef } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

const Button = forwardRef(function Button({ text, onClick }, ref) {
	return (
		<button ref={ref} className={cn(styles['button'], styles['accent'])} onClick={onClick}>
			{text}
		</button>
	);
});

export default Button;
