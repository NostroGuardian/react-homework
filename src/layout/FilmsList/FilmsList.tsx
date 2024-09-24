import styles from './FilmsList.module.css';
import FilmCard from '../../components/FilmCard/FilmCard';
import { FilmsListProps } from './FilmsList.props';

function FilmsList({ items }: FilmsListProps) {
	return (
		<div className={styles['films-list']}>
			{items.map((film) => (
				<FilmCard
					key={film.id}
					title={film.title}
					poster={film.poster}
					rating={film.rating}
					isFavorite={false}
				/>
			))}
		</div>
	);
}

export default FilmsList;
