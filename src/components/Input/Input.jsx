import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input({ placeholder, isSearch, ...others }, ref) {
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
