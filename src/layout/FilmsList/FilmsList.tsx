import styles from './FilmsList.module.css';
import FilmCard from '../../components/FilmCard/FilmCard';
import { FilmsListProps } from './FilmsList.props';
import { Link } from 'react-router-dom';

function FilmsList({ items }: FilmsListProps) {
	if (!Array.isArray(items) || items.length === 0) {
		return <div>No films available</div>;
	}

	return (
		<div className={styles['films-list']}>
			{items.map((film) => (
				<Link to={`/film/${film['#IMDB_ID']}`} className={styles['link']}>
					<FilmCard
						key={film['#IMDB_ID']}
						title={film['#TITLE']}
						poster={film['#IMG_POSTER']}
						rating={film['#RANK']}
						isFavorite={false}
					/>
				</Link>
			))}
		</div>
	);
}

export default FilmsList;
