import { HTMLAttributes } from 'react';

export interface FilmCardProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	poster: string;
	rating: number;
	isFavorite: boolean;
}
