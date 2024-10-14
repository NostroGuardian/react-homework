import styles from './FilmsList.module.css';
import FilmCard from '../../components/FilmCard/FilmCard';
import { FilmsListProps } from './FilmsList.props';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { UserContextProps } from '../../context/user.context.props';

function FilmsList({ items }: FilmsListProps) {
	if (!Array.isArray(items) || items.length === 0) {
		return <div>No films available</div>;
	}

	const currentUser = useContext<UserContextProps | undefined>(UserContext);

	const favoriteFilms = useSelector((s: RootState) => s.favorites.items);
	const currentUserFavoriteFilms = favoriteFilms.filter(
		(film) => film.userName === currentUser?.user
	);

	const itemsList = items.map((film) => {
		const isFavorite =
			currentUserFavoriteFilms.some((f) => f.imdbId === film['#IMDB_ID']) ?? false;
		return (
			<Link
				key={film['#IMDB_ID']}
				to={`/film/${film['#IMDB_ID']}`}
				className={styles['link']}
			>
				<FilmCard
					id={film['#IMDB_ID']}
					title={film['#TITLE']}
					poster={film['#IMG_POSTER']}
					rating={film['#RANK']}
					isFavorite={isFavorite}
				/>
			</Link>
		);
	});

	return <div className={styles['films-list']}>{itemsList}</div>;
}

export default FilmsList;
