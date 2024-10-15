import { FormEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { UserProps } from '../../interfaces/userProps.interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { usersActions } from '../../store/user.slice';

function LoginForm() {
	const [name, setName] = useState<string>();
	const existingUsers = useSelector((s: RootState) => s.users.users);
	const dispatch = useDispatch<AppDispatch>();

	const formSubmit = (e: FormEvent) => {
		e.preventDefault();
		const data = {
			name,
			isLoggined: true,
		};

		const userExist = existingUsers.find((user: UserProps) => user.name === name);

		if (userExist) {
			const updatedUser = { ...userExist, isLoggined: true };
			const updatedUsers = existingUsers.map((user: UserProps) =>
				user.name === name ? updatedUser : user
			);
			dispatch(usersActions.login(updatedUsers));
		} else {
			dispatch(usersActions.register(data));
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
