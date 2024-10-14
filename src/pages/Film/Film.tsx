import { Await, useLoaderData } from 'react-router-dom';
import FilmHeader from '../../components/FilmHeader/FilmHeader';
import styles from './Film.module.css';
import FilmFeedback from '../../components/FilmFeedback/FilmFeedback';
import FilmInfo from '../../components/FilmInfo/FilmInfo';
import { IFilm } from '../../interfaces/film.interface';
import { Suspense } from 'react';
import { parseDuration } from '../../helpers/durationParser';

function Film() {
	const data = useLoaderData() as { data: IFilm };

	return (
		<>
			<Suspense fallback={'Загрузка информации о фильме...'}>
				<Await resolve={data.data}>
					{({ data }: { data: IFilm }) => (
						<>
							<div className={styles['content']}>
								<FilmHeader>{data.short.name}</FilmHeader>
								<FilmInfo
									userName={undefined}
									title={data.short.name}
									image={data.short.image}
									description={data.short.description}
									rating={data.short.aggregateRating.ratingValue}
									type={data.short['@type']}
									datePublished={data.short.datePublished}
									duration={parseDuration(data.short.duration)}
									genre={data.short.genre}
									imdbId={data.imdbId}
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
