import styles from './FilmHeader.module.css';
import { FilmHeaderProps } from './FilmHeader.props';

function FilmHeader({ children }: FilmHeaderProps) {
	return (
		<div className={styles['header']}>
			<span className={styles['headling']}>Поиск фильмов</span>
			<h2 className={styles['title']}>{children}</h2>
		</div>
	);
}

export default FilmHeader;
