import { useContext, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { UserContext } from '../../context/user.context';

function LoginForm({ setUserLoggined }) {
	const [name, setName] = useState();
	const { setUser } = useContext(UserContext);

	const getExistingData = () => {
		const existingData = localStorage.getItem('data');
		return existingData ? JSON.parse(existingData) : [];
	};

	const formSubmit = (e) => {
		e.preventDefault();
		const data = {
			name,
			isLoggined: true,
		};

		console.log(name);

		const existingUsers = getExistingData();
		const userExist = existingUsers.find((user) => user.name === name);

		if (userExist) {
			const updatedUser = { ...userExist, isLoggined: true };
			const updatedUsers = existingUsers.map((user) =>
				user.name === name ? updatedUser : user
			);
			localStorage.setItem('data', JSON.stringify(updatedUsers));
			setUserLoggined(updatedUser);
			console.log(name);
			setUser(name);
		} else {
			existingUsers.push(data);
			localStorage.setItem('data', JSON.stringify(existingUsers));
			setUserLoggined(existingUsers.find((user) => user.name === name));
			console.log(name);
			setUser(name);
		}
	};

	return (
		<form className={styles['login-form']} onSubmit={formSubmit}>
			<Input
				placeholder="Ваше имя"
				name="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<Button text="Войти в профиль" />
		</form>
	);
}

export default LoginForm;
