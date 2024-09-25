import { useRef } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PageTitle from '../../components/PageTitle/PageTitle';
import Paragraph from '../../components/Paragraph/Paragraph';
import FilmsList from '../../layout/FilmsList/FilmsList';
import styles from './Search.module.css';

function Search() {
	const FILMS_DATA = [
		{
			id: 1,
			title: 'Black Widow',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
			rating: 324,
		},
		{
			id: 2,
			title: 'Shang Chi',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-2.png',
			rating: 124,
		},
		{
			id: 3,
			title: 'Loki',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-3.png',
			rating: 235,
		},
		{
			id: 4,
			title: 'How I Met Your Mother',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-4.png',
			rating: 123,
		},
		{
			id: 5,
			title: 'Money Heist',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-5.png',
			rating: 8125,
		},
		{
			id: 6,
			title: 'Friends',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-6.png',
			rating: 123,
		},
		{
			id: 7,
			title: 'The Big Bang Theory',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-7.png',
			rating: 12,
		},
		{
			id: 8,
			title: 'Two And a Half Men',
			poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-8.png',
			rating: 456,
		},
	];

	const searchInputRef = useRef<HTMLInputElement | null>(null);
	const searchButtonRef = useRef<HTMLButtonElement | null>(null);

	return (
		<>
			<PageTitle text="Поиск" />
			<Paragraph
				text="Введите название фильма, сериала или мультфильма для поиска и
			добавления в избранное."
				fonstSize="16px"
			/>
			<div className={styles['search']}>
				<Input placeholder="Введите название" isSearch={true} ref={searchInputRef} />
				<Button
					text="Искать"
					onClick={() => console.log('clicked')}
					ref={searchButtonRef}
				/>
			</div>

			<FilmsList items={FILMS_DATA} />
		</>
	);
}

export default Search;
