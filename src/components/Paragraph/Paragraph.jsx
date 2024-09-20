import styles from './Paragraph.module.css';

function Paragraph({ text, fonstSize }) {
	return (
		<p className={styles['paragraph']} style={{ fontSize: fonstSize }}>
			{text}
		</p>
	);
}

export default Paragraph;
