import LoginIcon from '../../components/LoginIcon/LoginIcon';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import Header from '../Header/Header';
import { Navigate, Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function AuthLayout() {
	const currentUser = useSelector((s: RootState) => s.users.currentUser);

	if (currentUser !== undefined) {
		return <Navigate to={'/'} replace />;
	}

	return (
		<>
			<Header>
				<Logo />
				<Navigation>
					<NavigationLink to="/login" text="Войти" icon={<LoginIcon />} />
				</Navigation>
			</Header>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</>
	);
}

export default AuthLayout;
