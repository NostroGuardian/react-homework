import styles from './FavoriteIcon.module.css';

function FavoriteIcon({ count }) {
	return <div className={styles['favorite-icon']}>{count}</div>;
}

export default FavoriteIcon;
