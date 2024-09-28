import { HTMLAttributes } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	text: string;
	fonstSize: string;
}
