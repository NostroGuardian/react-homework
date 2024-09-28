import { HTMLAttributes } from 'react';

export interface FilmFeedbackProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	text: string;
	date: string;
}
