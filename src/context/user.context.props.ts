import { MouseEventHandler, ReactNode } from 'react';
import { UserProps } from '../components/LoginForm/LoginForm.props';

export interface UserContextProps {
	user: UserProps | undefined;
	// logOut: (user: UserProps | undefined) => void;
	logOut: MouseEventHandler;
	setUser: (user: UserProps) => void;
}

export interface UserContextProviderProps {
	children: ReactNode;
}
