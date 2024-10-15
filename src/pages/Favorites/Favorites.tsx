import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from '../../layout/FilmsList/FilmsList.module.css';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import FilmCard from '../../components/FilmCard/FilmCard';

function Favorites() {
	const favoriteFilms = useSelector((s: RootState) => s.favorites.items);
	const currentUser = useSelector((s: RootState) => s.users.currentUser);

	return (
		<>
			<PageTitle text="Избранное" />
			<div className={styles['films-list']}>
				{favoriteFilms
					.filter((film) => film.userName === currentUser?.name)
					.map((film) => (
						<Link to={`/film/${film.imdbId}`} className={styles['link']}>
							<FilmCard
								key={film.imdbId}
								id={film.imdbId}
								title={film.title}
								poster={film.image}
								rating={film.rating}
								isFavorite={true}
							/>
						</Link>
					))}
			</div>
		</>
	);
}

export default Favorites;
