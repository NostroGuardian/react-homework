import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { UserProps } from '../interfaces/userProps.interface';
import { CURRENT_USER_DATA_PERSISTANT, USERS_DATA_PERSISTANT } from './storageKeys';

export interface IUsersState {
	users: UserProps[];
	currentUser: UserProps | undefined;
}

const initialState: IUsersState = {
	users: loadState(USERS_DATA_PERSISTANT) ?? [],
	currentUser: loadState(CURRENT_USER_DATA_PERSISTANT) ?? undefined,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<UserProps[]>) => {
			state.users = action.payload;
			state.currentUser = action.payload.find((u) => u.isLoggined === true);
		},
		register: (state, action: PayloadAction<UserProps>) => {
			state.users.push(action.payload);
			state.currentUser = action.payload;
		},
		logOut: (state, action: PayloadAction<UserProps>) => {
			if (state.currentUser) {
				const logOutUser = { ...state.currentUser, isLoggined: false };
				state.users = state.users.map((user: UserProps) =>
					user.name === action.payload.name ? logOutUser : user
				);
				state.currentUser = undefined;
			}
		},
	},
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
