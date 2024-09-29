import AdditionalFilmInfo from '../AdditionalFilmInfo/AdditionalFilmInfo';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import styles from './FilmInfo.module.css';
import { FilmInfoProps } from './FilmInfo.props';

function FilmInfo({
	image,
	description,
	rating,
	type,
	datePublished,
	duration,
	genre,
}: FilmInfoProps) {
	return (
		<div className={styles['wrapper']}>
			<img src={image} className={styles['image']} alt="Film image" />
			<div className={styles['film-info']}>
				<Paragraph text={description} fonstSize="20px" />
				<div className={styles['buttons']}>
					<Rating count={rating} />
					<FavoriteButton isFavorite={false} className={styles['favorite-button']} />
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
