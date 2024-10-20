import { UserProps } from '../../interfaces/userProps.interface';

export interface FilmInfoProps {
	userName?: string;
	title: string;
	image: string;
	description: string;
	rating: number;
	type: string;
	datePublished: string;
	duration: number;
	genre: string[];
	imdbId: string;
	isFavorite?: boolean;
}
