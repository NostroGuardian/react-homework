import { AdditionalFilmInfoProps } from './AdditionalFilmInfo.props';
import styles from './AdditionalFilmInfo.module.css';

function AdditionalFilmInfo({ title, text }: AdditionalFilmInfoProps) {
	return (
		<div className={styles['wrapper']}>
			<span className={styles['title']}>{title}</span>
			<span className={styles['text']}>{text}</span>
		</div>
	);
}

export default AdditionalFilmInfo;
