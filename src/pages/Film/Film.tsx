import { Await, useLoaderData } from 'react-router-dom';
import FilmHeader from '../../components/FilmHeader/FilmHeader';
import styles from './Film.module.css';
import FilmFeedback from '../../components/FilmFeedback/FilmFeedback';
import FilmInfo from '../../components/FilmInfo/FilmInfo';
import { IFilm } from '../../interfaces/film.interface';
import { Suspense } from 'react';

function Film() {
	const data = useLoaderData() as { data: IFilm };

	function parseDuration(duration: string): number {
		const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
		const matches = duration.match(regex);
		const hours = matches?.[1] ? parseInt(matches[1], 10) : 0;
		const minutes = matches?.[2] ? parseInt(matches[2], 10) : 0;
		const seconds = matches?.[3] ? parseInt(matches[3], 10) : 0;
		return hours * 60 + minutes + seconds / 60;
	}

	return (
		<>
			<Suspense fallback={'Загрузка информации о фильме...'}>
				<Await resolve={data.data}>
					{({ data }: { data: IFilm }) => (
						<>
							<div className={styles['content']}>
								<FilmHeader>{data.short.name}</FilmHeader>
								<FilmInfo
									image={data.short.image}
									description={data.short.description}
									rating={data.short.aggregateRating.ratingValue}
									type={data.short['@type']}
									datePublished={data.short.datePublished}
									duration={parseDuration(data.short.duration)}
									genre={data.short.genre}
								/>
								<FilmFeedback
									title={data.short.review.name}
									text={data.short.review.reviewBody}
									date={data.short.review.dateCreated}
								/>
							</div>
						</>
					)}
				</Await>
			</Suspense>
		</>
	);
}

export default Film;
