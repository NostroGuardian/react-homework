import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { UserProps } from '../interfaces/userProps.interface';

export const USERS_DATA_PERSISTANT = 'usersData';

export interface IUsersState {
	users: UserProps[];
}

const initialState: IUsersState = {
	users: loadState(USERS_DATA_PERSISTANT) ?? [],
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
