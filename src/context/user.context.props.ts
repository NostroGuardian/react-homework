import { ReactNode } from 'react';
import { UserProps } from '../components/LoginForm/LoginForm.props';

export interface UserContextProps {
	user: UserProps | null;
	setUser: (user: UserProps | null) => void;
}

export interface UserContextProviderProps {
	children: ReactNode;
}
