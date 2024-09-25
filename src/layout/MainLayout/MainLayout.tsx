import { useContext, useEffect, useRef, useState } from 'react';
import FavoriteIcon from '../../components/FavoriteIcon/FavoriteIcon';
import LoginIcon from '../../components/LoginIcon/LoginIcon';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import UserIcon from '../../components/UserIcon/UserIcon';
import Header from '../Header/Header';
import { UserProps } from '../../components/LoginForm/LoginForm.props';
import { UserContextProps } from '../../context/user.context.props';
import { UserContext } from '../../context/user.context';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Username from '../../components/Username/Username';

function MainLayout() {
	const [userLoggined, setUserLoggined] = useState<UserProps | boolean>(false);
	const context = useContext<UserContextProps | undefined>(UserContext);

	if (!context) {
		throw new Error('Context is undefined');
	}

	const { user, setUser } = context;

	const getExistingData = () => {
		const existingData = localStorage.getItem('data');
		return existingData ? JSON.parse(existingData) : [];
	};

	useEffect(() => {
		const allUsers = getExistingData();
		const loginnedUser = allUsers.find((user: UserProps) => user.isLoggined === true);

		if (loginnedUser) {
			setUserLoggined(loginnedUser);
			setUser(loginnedUser.name);
		}
	}, [setUser, user]);

	const logOut = () => {
		if (typeof userLoggined === 'object') {
			const logOutUser = { ...userLoggined, isLoggined: false };
			const allUsers = getExistingData();
			const updatedUsers = allUsers.map((user: UserProps) =>
				user.name === userLoggined.name ? logOutUser : user
			);
			localStorage.setItem('data', JSON.stringify(updatedUsers));
		}
		setUserLoggined(false);
		setUser(null);
	};
	return (
		<>
			<Header>
				<Logo />
				<Navigation>
					<NavigationLink to="/" text="Поиск фильмов" />
					<NavigationLink
						to="/favorites"
						text="Мои фильмы"
						icon={<FavoriteIcon count={2} />}
					/>
					{userLoggined ? (
						<>
							<Username text={user} icon={<UserIcon />} />
							<NavigationLink to="/" text="Выйти" onClick={logOut} />
						</>
					) : (
						<NavigationLink to="/login" text="Войти" icon={<LoginIcon />} />
					)}
				</Navigation>
			</Header>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</>
	);
}

export default MainLayout;
