import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isFavorite: boolean;
	addToFavoriteFunction?: (e: MouseEvent) => void;
	removeFromFavoriteFunction?: (e: MouseEvent) => void;
}
