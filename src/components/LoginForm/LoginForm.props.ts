import { FormHTMLAttributes } from 'react';
import { UserProps } from '../../interfaces/userProps.interface';

export interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
	setUserLoggined: (user: UserProps) => void;
}
