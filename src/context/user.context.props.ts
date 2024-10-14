import { MouseEventHandler, ReactNode } from 'react';
import { UserProps } from '../interfaces/userProps.interface';

export interface UserContextProps {
	user: UserProps | undefined;
	logOut: MouseEventHandler;
	setUser: (user: UserProps) => void;
}

export interface UserContextProviderProps {
	children: ReactNode;
}
