import { HTMLAttributes } from 'react';
import { ISearchFilm } from '../../interfaces/allFilms.interface';

export interface FilmsListProps extends HTMLAttributes<HTMLDivElement> {
	items: ISearchFilm[];
}
