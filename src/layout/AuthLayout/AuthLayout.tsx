import LoginIcon from '../../components/LoginIcon/LoginIcon';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import Header from '../Header/Header';
import { Navigate, Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import { UserContextProps } from '../../context/user.context.props';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

function AuthLayout() {
	const context = useContext<UserContextProps | undefined>(UserContext);

	if (!context) {
		throw new Error('Context unavalible!');
	}

	const { user } = context;

	if (user !== undefined) {
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
