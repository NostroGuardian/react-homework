import { configureStore } from '@reduxjs/toolkit';
import { favoritesSlice } from './favorites.slice';
import { saveState } from './storage';
import { usersSlice } from './user.slice';
import {
	CURRENT_USER_DATA_PERSISTANT,
	FAVORITE_FILMS_PERSISTANT,
	USERS_DATA_PERSISTANT,
} from './storageKeys';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice.reducer,
		users: usersSlice.reducer,
	},
});

store.subscribe(() => {
	saveState(store.getState().favorites.items, FAVORITE_FILMS_PERSISTANT);
	saveState(store.getState().users.users, USERS_DATA_PERSISTANT);
	saveState(store.getState().users.currentUser, CURRENT_USER_DATA_PERSISTANT);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
