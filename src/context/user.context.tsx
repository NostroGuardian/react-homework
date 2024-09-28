import { createContext, useState } from 'react';
import { UserContextProps, UserContextProviderProps } from './user.context.props';
import { UserProps } from '../components/LoginForm/LoginForm.props';

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<UserProps | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
