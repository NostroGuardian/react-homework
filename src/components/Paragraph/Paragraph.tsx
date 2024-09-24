import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

function Paragraph({ text, fonstSize }: ParagraphProps) {
	return (
		<p className={styles['paragraph']} style={{ fontSize: fonstSize }}>
			{text}
		</p>
	);
}

export default Paragraph;
