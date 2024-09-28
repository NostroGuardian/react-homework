import { HTMLAttributes, ReactNode } from 'react';

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
}
