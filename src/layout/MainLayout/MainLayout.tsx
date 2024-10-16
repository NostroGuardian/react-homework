import { useContext, useEffect, useState } from 'react';
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
	const context = useContext<UserContextProps | undefined>(UserContext);

	if (!context) {
		throw new Error('Context is undefined');
	}

	const { user, logOut } = context;

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
					{user ? (
						<>
							<Username text={user} icon={<UserIcon />} />
							<NavigationLink to="/login" text="Выйти" onClick={logOut} />
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
