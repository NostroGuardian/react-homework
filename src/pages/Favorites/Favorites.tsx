import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from '../../layout/FilmsList/FilmsList.module.css';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import FilmCard from '../../components/FilmCard/FilmCard';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { UserContextProps } from '../../context/user.context.props';

function Favorites() {
	const favoriteFilms = useSelector((s: RootState) => s.favorites.items);
	const currentUser = useContext<UserContextProps | undefined>(UserContext);

	return (
		<>
			<PageTitle text="Избранное" />
			<div className={styles['films-list']}>
				{favoriteFilms
					.filter((film) => film.userName === currentUser?.user)
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
