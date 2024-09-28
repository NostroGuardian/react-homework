import styles from './LoginIcon.module.css';

function LoginIcon() {
	return (
		<img className={styles['login-icon']} src="/public/login-icon.svg" alt="Login icon" />
	);
}

export default LoginIcon;
