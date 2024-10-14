import { configureStore } from '@reduxjs/toolkit';
import { FAVORITE_FILMS_PERSISTANT, favoritesSlice } from './favorites.slice';
import { saveState } from './storage';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice.reducer,
	},
});

store.subscribe(() => {
	saveState(store.getState().favorites.items, FAVORITE_FILMS_PERSISTANT);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
