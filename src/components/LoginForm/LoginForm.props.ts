import { FormHTMLAttributes } from 'react';

export interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
	setUserLoggined: (user: UserProps) => void;
}

export interface UserProps {
	isLoggined: boolean;
	name: string | undefined;
}
