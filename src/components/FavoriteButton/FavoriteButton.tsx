import styles from './FavoriteButton.module.css';
import { FavoriteButtonProps } from './FavoriteButton.props';
import cn from 'classnames';

function FavoriteButton({ isFavorite, className }: FavoriteButtonProps) {
	if (isFavorite) {
		return (
			<button className={cn(styles['films-list__inFavorite'], className)}>
				<img src="/public/inFavorite-icon.svg" alt="Remove from favorite" />В избранном
			</button>
		);
	}

	return (
		<button className={cn(styles['films-list__toFavorite'], className)}>
			<img src="/public/toFavorite-icon.svg" alt="Add to favorite" />В избранное
		</button>
	);
}
export default FavoriteButton;
