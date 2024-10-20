import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './Login.module.css';

function Login() {
	return (
		<div className={styles['login']}>
			<PageTitle text="Вход" />
			<LoginForm />
		</div>
	);
}

export default Login;
