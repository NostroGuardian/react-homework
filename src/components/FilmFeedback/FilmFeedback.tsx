import Paragraph from '../Paragraph/Paragraph';
import style from './FilmFeedback.module.css';
import { FilmFeedbackProps } from './FilmFeedback.props';

function FilmFeedback({ title, text, date }: FilmFeedbackProps) {
	return (
		<>
			<span className={style['headling']}>Отзывы</span>
			<div className={style['feedback']}>
				<div className={style['header']}>
					<span className={style['title']}>{title}</span>
					<span className={style['date']}>{date}</span>
				</div>
				<Paragraph text={text} fonstSize="20px" />
			</div>
		</>
	);
}

export default FilmFeedback;
