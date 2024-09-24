import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ placeholder, isSearch = false, ...others },
	ref
) {
	return (
		<input
			ref={ref}
			type="text"
			className={cn(styles['input'], {
				[styles['input-search']]: isSearch,
			})}
			placeholder={placeholder}
			{...others}
		/>
	);
});

export default Input;
