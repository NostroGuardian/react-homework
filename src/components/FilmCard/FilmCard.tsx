import FavoriteButton from '../FavoriteButton/FavoriteButton';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props';

function FilmCard({ title, poster, rating, isFavorite }: FilmCardProps) {
	return (
		<div className={styles['films-list__card']}>
			<img className={styles['films-list__image']} src={poster} alt={title} />
			<div className={styles['films-list__rating']}>
				<img src="./public/rating-icon.svg" alt="Rating" />
				{rating}
			</div>
			<div className={styles['films-list__title']}>{title}</div>
			<FavoriteButton isFavorite={isFavorite} />
		</div>
	);
}

export default FilmCard;
