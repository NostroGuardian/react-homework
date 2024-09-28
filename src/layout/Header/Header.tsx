import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

function Header({ children }: HeaderProps) {
	return <header className={styles['header']}>{children}</header>;
}

export default Header;
