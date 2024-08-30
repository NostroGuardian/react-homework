import styles from './UserIcon.module.css';

function UserIcon() {
	return <img className={styles['user-icon']} src="/public/user-icon.svg" alt="User icon" />;
}

export default UserIcon;
