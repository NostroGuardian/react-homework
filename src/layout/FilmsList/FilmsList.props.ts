import { HTMLAttributes } from 'react';

interface IItem {
	id: number;
	title: string;
	poster: string;
	rating: number;
}

export interface FilmsListProps extends HTMLAttributes<HTMLDivElement> {
	items: IItem[];
}
