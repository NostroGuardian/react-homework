import Paragraph from '../Paragraph/Paragraph';
import styles from './NothingWasFound.module.css';

function NothingWasFound() {
	return (
		<div className={styles['wrapper']}>
			<h2 className={styles['headling']}>Упс... Ничего не найдено</h2>
			<Paragraph
				text="Попробуйте изменить запрос или ввести более точное название фильма"
				fonstSize="20px"
			/>
		</div>
	);
}

export default NothingWasFound;
