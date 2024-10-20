import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmInfoProps } from '../components/FilmInfo/FilmInfo.props';
import { loadState } from './storage';
import { FAVORITE_FILMS_PERSISTANT } from './storageKeys';

export interface IFavoritesState {
	items: FilmInfoProps[];
}

const initialState: IFavoritesState = {
	items: loadState(FAVORITE_FILMS_PERSISTANT) ?? [],
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<FilmInfoProps>) => {
			const existed = state.items.find(
				(i) =>
					i.userName === action.payload.userName &&
					i.imdbId === action.payload.imdbId
			);
			if (!existed) {
				state.items.push({
					userName: action.payload.userName,
					title: action.payload.title,
					image: action.payload.image,
					description: action.payload.description,
					rating: action.payload.rating,
					type: action.payload.type,
					datePublished: action.payload.datePublished,
					duration: action.payload.duration,
					genre: action.payload.genre,
					imdbId: action.payload.imdbId,
				});
			} else {
				console.log('Film already exists in favorites!');
			}
		},
		remove: (
			state,
			action: PayloadAction<{ userName: string | undefined; id: string }>
		) => {
			state.items = state.items.filter(
				(f) =>
					!(f.userName === action.payload.userName && f.imdbId === action.payload.id)
			);
		},
	},
});

export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
