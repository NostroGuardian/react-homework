import { useDispatch, useSelector } from 'react-redux';
import { favoritesActions } from '../../store/favorites.slice';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Rating from '../Rating/Rating';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props';
import { AppDispatch, RootState } from '../../store/store';
import { MouseEvent } from 'react';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { parseDuration } from '../../helpers/durationParser';

function FilmCard({ id, title, poster, rating, isFavorite }: FilmCardProps) {
	const dispatch = useDispatch<AppDispatch>();
	const currentUser = useSelector((s: RootState) => s.users.currentUser);

	const addToFavoriteFunction = async (e: MouseEvent) => {
		e.preventDefault();
		if (currentUser) {
			const { data } = await axios.get(`${PREFIX}/?tt=${id}`);
			if (data) {
				dispatch(
					favoritesActions.add({
						userName: currentUser.name,
						title: title,
						image: poster ? poster : '',
						description: data.short.description,
						rating: rating,
						type: data.short.type,
						datePublished: data.short.datePublished,
						duration: parseDuration(data.short.duration),
						genre: data.short.genre,
						imdbId: id,
					})
				);
			} else {
				console.error('Невозможно получить информацию о фильме!');
			}
		} else {
			return;
		}
	};

	const removeFromFavoriteFunction = (e: MouseEvent) => {
		e.preventDefault();
		if (currentUser) {
			dispatch(favoritesActions.remove({ userName: currentUser.name, id: id }));
		} else {
			return;
		}
	};

	return (
		<div className={styles['films-list__card']}>
			<img className={styles['films-list__image']} src={poster} alt={title} />
			<Rating count={rating} className={styles['films-list__rating']} />
			<div className={styles['films-list__title']}>{title}</div>
			<FavoriteButton
				addToFavoriteFunction={addToFavoriteFunction}
				removeFromFavoriteFunction={removeFromFavoriteFunction}
				isFavorite={isFavorite}
			/>
		</div>
	);
}

export default FilmCard;
