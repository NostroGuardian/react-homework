import { HTMLAttributes } from 'react';

export interface AdditionalFilmInfoProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	text: string;
}
