import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './FilmCard.css';

function FilmCard({ title, poster, rating, isFavorite }) {
	return (
		<div className="films-list__card">
			<img className="films-list__image" src={poster} alt={title} />
			<div className="films-list__rating">
				<img src="./public/rating-icon.svg" alt="Rating" />
				{rating}
			</div>
			<div className="films-list__title">{title}</div>
			<FavoriteButton isFavorite={isFavorite} />
		</div>
	);
}

export default FilmCard;
