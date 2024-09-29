import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';
import { UserContextProps } from '../context/user.context.props';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const context = useContext<UserContextProps | undefined>(UserContext);

	if (!context) {
		throw new Error('Context unavalible!');
	}

	const { user } = context;

	if (user === undefined) {
		return <Navigate to={'/login'} replace />;
	}
	return children;
};
