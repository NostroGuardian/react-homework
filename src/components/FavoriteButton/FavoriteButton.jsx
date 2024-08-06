import './FavoriteButton.css';

function FavoriteButton({ isFavorite }) {
	if (isFavorite) {
		return (
			<button className="films-list__inFavorite">
				<img src="/public/inFavorite-icon.svg" alt="Remove from favorite" />В
				избранном
			</button>
		);
	}

	return (
		<button className="films-list__toFavorite">
			<img src="/public/toFavorite-icon.svg" alt="Add to favorite" />В избранное
		</button>
	);
}
export default FavoriteButton;
