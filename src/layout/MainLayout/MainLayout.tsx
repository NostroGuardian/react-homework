import FavoriteIcon from '../../components/FavoriteIcon/FavoriteIcon';
import LoginIcon from '../../components/LoginIcon/LoginIcon';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import UserIcon from '../../components/UserIcon/UserIcon';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Username from '../../components/Username/Username';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { usersActions } from '../../store/user.slice';

function MainLayout() {
	const favoritesFilms = useSelector((s: RootState) => s.favorites.items);
	const currentUser = useSelector((s: RootState) => s.users.currentUser);
	const dispatch = useDispatch<AppDispatch>();

	const currentUserFilmsCount = favoritesFilms.filter(
		(f) => f.userName === currentUser?.name
	).length;
	return (
		<>
			<Header>
				<Logo />
				<Navigation>
					<NavigationLink to="/" text="Поиск фильмов" />
					<NavigationLink
						to="/favorites"
						text="Мои фильмы"
						icon={<FavoriteIcon count={currentUserFilmsCount} />}
					/>
					{currentUser ? (
						<>
							<Username text={currentUser.name} icon={<UserIcon />} />
							<NavigationLink
								to="/login"
								text="Выйти"
								onClick={() => dispatch(usersActions.logOut(currentUser))}
							/>
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
