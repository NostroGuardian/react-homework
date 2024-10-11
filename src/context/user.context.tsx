import { createContext, useEffect, useState } from 'react';
import { UserContextProps, UserContextProviderProps } from './user.context.props';
import { UserProps } from '../components/LoginForm/LoginForm.props';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<UserProps | undefined>(undefined);
	const [userLoggined, setUserLoggined] = useState<UserProps | boolean>(false);
	const navigate = useNavigate();

	const getExistingData = () => {
		const existingData = localStorage.getItem('data');
		return existingData ? JSON.parse(existingData) : [];
	};

	const logOut = () => {
		if (typeof userLoggined === 'object') {
			const logOutUser = { ...userLoggined, isLoggined: false };
			const allUsers = getExistingData();
			const updatedUsers = allUsers.map((user: UserProps) =>
				user.name === userLoggined.name ? logOutUser : user
			);
			localStorage.setItem('data', JSON.stringify(updatedUsers));
			setUser(undefined);
			navigate('/login');
		}
	};

	useEffect(() => {
		const allUsers = getExistingData();
		const loginnedUser = allUsers.find((user: UserProps) => user.isLoggined === true);

		console.log(loginnedUser);

		if (loginnedUser) {
			setUserLoggined(loginnedUser);
			setUser(loginnedUser.name);
		}
	}, [user]);

	return (
		<UserContext.Provider value={{ user, logOut, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
