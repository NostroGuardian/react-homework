import { useDispatch, useSelector } from 'react-redux';
import AdditionalFilmInfo from '../AdditionalFilmInfo/AdditionalFilmInfo';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import styles from './FilmInfo.module.css';
import { FilmInfoProps } from './FilmInfo.props';
import { AppDispatch, RootState } from '../../store/store';
import { favoritesActions as favoritesActions } from '../../store/favorites.slice';
import { useContext, MouseEvent } from 'react';
import { UserContext } from '../../context/user.context';
import { UserContextProps } from '../../context/user.context.props';

function FilmInfo({
	title,
	image,
	description,
	rating,
	type,
	datePublished,
	duration,
	genre,
	imdbId,
}: FilmInfoProps) {
	const dispatch = useDispatch<AppDispatch>();
	const currentUser = useContext<UserContextProps | undefined>(UserContext);

	const addToFavoriteFunction = async (e: MouseEvent) => {
		e.preventDefault();
		if (currentUser) {
			dispatch(
				favoritesActions.add({
					userName: currentUser.user,
					title,
					image,
					description,
					rating,
					type,
					datePublished,
					duration,
					genre,
					imdbId,
				})
			);
		} else {
			return;
		}
	};

	const removeFromFavoriteFunction = (e: MouseEvent) => {
		e.preventDefault();
		if (currentUser) {
			dispatch(favoritesActions.remove({ userName: currentUser.user, id: imdbId }));
		} else {
			return;
		}
	};

	const favoriteFilms = useSelector((s: RootState) => s.favorites.items);
	const currentUserFavoriteFilms = favoriteFilms.filter(
		(film) => film.userName === currentUser?.user
	);
	const isFavorite = currentUserFavoriteFilms.some((f) => f.imdbId === imdbId) ?? false;

	return (
		<div className={styles['wrapper']}>
			<img src={image} className={styles['image']} alt="Film image" />
			<div className={styles['film-info']}>
				<Paragraph text={description} fonstSize="20px" />
				<div className={styles['buttons']}>
					<Rating count={rating} />
					<FavoriteButton
						addToFavoriteFunction={addToFavoriteFunction}
						removeFromFavoriteFunction={removeFromFavoriteFunction}
						isFavorite={isFavorite}
						className={styles['favorite-button']}
					/>
				</div>
				<div className={styles['additional-wrapper']}>
					<AdditionalFilmInfo title="Тип" text={type} />
					<AdditionalFilmInfo title="Дата выхода" text={datePublished} />
					<AdditionalFilmInfo title="Длительность" text={`${duration} мин`} />
					<AdditionalFilmInfo title="Жанр" text={genre.join(', ')} />
				</div>
			</div>
		</div>
	);
}

export default FilmInfo;
