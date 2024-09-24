import { LinkHTMLAttributes, ReactNode } from 'react';
import { UserProps } from '../LoginForm/LoginForm.props';

export interface NavigationLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
	href: string;
	text: ReactNode | UserProps;
	isActive?: boolean;
	icon?: ReactNode;
}
