import styles from './FavoriteIcon.module.css';
import { FavoriteIconProps } from './FavoriteIcon.props';

function FavoriteIcon({ count }: FavoriteIconProps) {
	return <div className={styles['favorite-icon']}>{count}</div>;
}

export default FavoriteIcon;
