import { configureStore } from '@reduxjs/toolkit';
import { FAVORITE_FILMS_PERSISTANT, favoritesSlice } from './favorites.slice';
import { saveState } from './storage';
import { USERS_DATA_PERSISTANT, usersSlice } from './user.slice';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice.reducer,
		users: usersSlice.reducer,
	},
});

store.subscribe(() => {
	saveState(store.getState().favorites.items, FAVORITE_FILMS_PERSISTANT);
	saveState(store.getState().users.users, USERS_DATA_PERSISTANT);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
