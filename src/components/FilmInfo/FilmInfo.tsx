import AdditionalFilmInfo from '../AdditionalFilmInfo/AdditionalFilmInfo';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import styles from './FilmInfo.module.css';

function FilmInfo() {
	return (
		<div className={styles['wrapper']}>
			<img src="/filmsImg/avengers.png" alt="Film image" />
			<div className={styles['film-info']}>
				<Paragraph
					text="After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store."
					fonstSize="20px"
				/>
				<div className={styles['buttons']}>
					<Rating count={8.3} />
					<FavoriteButton isFavorite={false} className={styles['favorite-button']} />
				</div>
				<div className={styles['additional-wrapper']}>
					<AdditionalFilmInfo title="Тип" text="Movie" />
					<AdditionalFilmInfo title="Дата выхода" text="2019-04-24" />
					<AdditionalFilmInfo title="Длительность" text="181 мин" />
					<AdditionalFilmInfo
						title="Жанр"
						text="Adventure, Science Fiction, Action"
					/>
				</div>
			</div>
		</div>
	);
}

export default FilmInfo;
