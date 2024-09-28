import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Rating from '../Rating/Rating';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props';

function FilmCard({ title, poster, rating, isFavorite }: FilmCardProps) {
	return (
		<div className={styles['films-list__card']}>
			<img className={styles['films-list__image']} src={poster} alt={title} />
			<Rating count={rating} className={styles['films-list__rating']} />
			<div className={styles['films-list__title']}>{title}</div>
			<FavoriteButton isFavorite={isFavorite} />
		</div>
	);
}

export default FilmCard;
