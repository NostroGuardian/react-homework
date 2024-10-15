import { UserProps } from '../LoginForm/LoginForm.props';

export interface FilmInfoProps {
	userName: UserProps | undefined;
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
