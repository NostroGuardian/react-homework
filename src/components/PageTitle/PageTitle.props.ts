import { HTMLAttributes } from 'react';

export interface PageTitleProps extends HTMLAttributes<HTMLHeadElement> {
	text: string;
}
