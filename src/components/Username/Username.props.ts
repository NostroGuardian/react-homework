import { HTMLAttributes, LinkHTMLAttributes, ReactNode } from 'react';
import { UserProps } from '../LoginForm/LoginForm.props';

export interface UsernameProps extends HTMLAttributes<HTMLElement> {
	text: ReactNode | UserProps;
	isActive?: boolean;
	icon?: ReactNode;
}
