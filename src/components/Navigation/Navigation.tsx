import styles from './Navigation.module.css';
import { NavigationProps } from './Navigation.props';

function Navigation({ children }: NavigationProps) {
	return <nav className={styles['navigation']}>{children}</nav>;
}

export default Navigation;
