import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const currentUser = useSelector((s: RootState) => s.users.currentUser);

	if (currentUser === undefined) {
		return <Navigate to={'/login'} replace />;
	}
	return children;
};
