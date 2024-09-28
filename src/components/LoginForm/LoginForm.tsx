import { FormEvent, useContext, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { UserContext } from '../../context/user.context';
import { LoginFormProps, UserProps } from './LoginForm.props';

function LoginForm({ setUserLoggined }: LoginFormProps) {
	const [name, setName] = useState<string>();
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('Context undefined!');
	}

	const { setUser } = context;

	const getExistingData = () => {
		const existingData = localStorage.getItem('data');
		return existingData ? JSON.parse(existingData) : [];
	};

	const formSubmit = (e: FormEvent) => {
		e.preventDefault();
		const data = {
			name,
			isLoggined: true,
		};

		const existingUsers = getExistingData();
		const userExist = existingUsers.find((user: UserProps) => user.name === name);

		if (userExist) {
			const updatedUser = { ...userExist, isLoggined: true };
			const updatedUsers = existingUsers.map((user: UserProps) =>
				user.name === name ? updatedUser : user
			);
			localStorage.setItem('data', JSON.stringify(updatedUsers));
			setUserLoggined(updatedUser);
			setUser(updatedUser.name);
		} else {
			existingUsers.push(data);
			localStorage.setItem('data', JSON.stringify(existingUsers));
			const newUser = existingUsers.find((user: UserProps) => user.name === name);
			setUserLoggined(newUser);
			setUser(newUser.name);
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
