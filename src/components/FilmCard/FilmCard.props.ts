import { HTMLAttributes } from 'react';

export interface FilmCardProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	title: string;
	poster: string | undefined;
	rating: number;
	isFavorite: boolean;
}
