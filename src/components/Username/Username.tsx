import styles from './Username.module.css';
import { UsernameProps } from './Username.props';
import { NavLink } from 'react-router-dom';

function NavigationLink({ text, icon, ...others }: UsernameProps) {
	return (
		<span className={styles['username']} {...others}>
			{text}
			{icon ? icon : ''}
		</span>
	);
}

export default NavigationLink;
