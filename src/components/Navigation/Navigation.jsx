import styles from './Navigation.module.css';

function Navigation({ children }) {
	return <nav className={styles['navigation']}>{children}</nav>;
}

export default Navigation;
