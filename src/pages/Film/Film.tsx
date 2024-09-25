import { useParams } from 'react-router-dom';
import FilmHeader from '../../components/FilmHeader/FilmHeader';
import styles from './Film.module.css';
import FilmFeedback from '../../components/FilmFeedback/FilmFeedback';
import FilmInfo from '../../components/FilmInfo/FilmInfo';

function Film() {
	const { id } = useParams();
	return (
		<div className={styles['content']}>
			<span>Film id – {id}</span>
			<FilmHeader>Avengers: Endgame</FilmHeader>
			<FilmInfo />
			<FilmFeedback
				title="Not as good as infinity war..."
				text="But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that couldve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship..."
				date="2019-04-29"
			/>
		</div>
	);
}

export default Film;
