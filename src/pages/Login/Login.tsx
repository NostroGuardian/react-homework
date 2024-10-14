import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './Login.module.css';
import { UserProps } from '../../interfaces/userProps.interface';

function Login() {
	const [userLoggined, setUserLoggined] = useState<UserProps | boolean>(false);
	return (
		<div className={styles['login']}>
			<PageTitle text="Вход" />
			<LoginForm setUserLoggined={setUserLoggined} />
		</div>
	);
}

export default Login;
