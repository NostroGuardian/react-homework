import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PageTitle from '../../components/PageTitle/PageTitle';
import Paragraph from '../../components/Paragraph/Paragraph';
import FilmsList from '../../layout/FilmsList/FilmsList';
import styles from './Search.module.css';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { ISearchFilm } from '../../interfaces/allFilms.interface';
import NothingWasFound from '../../components/NothingWasFound/NothingWasFound';

function Search() {
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	const searchButtonRef = useRef<HTMLButtonElement | null>(null);

	const [filmsData, setFilmsData] = useState<ISearchFilm[]>([]);
	const [searchQuery, setSearchQuery] = useState<string | undefined>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [nothingWasFound, setNothingWasFound] = useState<boolean>(false);

	const findFilm = async (query: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${PREFIX}/?q=${query}`);
			setFilmsData(data.description);
			if (data.description.length === 0) {
				setNothingWasFound(true);
			}
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		findFilm('A');
	}, []);

	return (
		<>
			<PageTitle text="Поиск" />
			<Paragraph
				text="Введите название фильма, сериала или мультфильма для поиска и
			добавления в избранное."
				fonstSize="16px"
			/>
			<div className={styles['search']}>
				<Input
					placeholder="Введите название"
					isSearch={true}
					ref={searchInputRef}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<Button
					text="Искать"
					onClick={() => {
						if (searchQuery) {
							findFilm(searchQuery);
						}
					}}
					ref={searchButtonRef}
				/>
			</div>

			{isLoading && <>Поиск...</>}
			{!isLoading && <FilmsList items={filmsData} />}
			{nothingWasFound && !isLoading && <NothingWasFound />}
		</>
	);
}

export default Search;
