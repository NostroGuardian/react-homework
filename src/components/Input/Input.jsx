import styles from './Input.module.css';
import cn from 'classnames';

function Input({ placeholder, isSearch }) {
	return (
		<input
			type="text"
			className={cn(styles['input'], {
				[styles['input-search']]: isSearch,
			})}
			placeholder={placeholder}
		/>
	);
}

export default Input;
