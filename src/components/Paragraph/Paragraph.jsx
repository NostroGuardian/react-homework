import './Paragraph.css';

function Paragraph({ text, fonstSize }) {
	return (
		<p className="paragraph" style={{ fontSize: fonstSize }}>
			{text}
		</p>
	);
}

export default Paragraph;
