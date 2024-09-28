import { ButtonHTMLAttributes } from 'react';

export interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isFavorite: boolean;
}
