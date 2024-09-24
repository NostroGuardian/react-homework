import { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import FavoriteIcon from './components/FavoriteIcon/FavoriteIcon';
import Input from './components/Input/Input';
import LoginIcon from './components/LoginIcon/LoginIcon';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import NavigationLink from './components/NavigationLink/NavigationLink';
import PageTitle from './components/PageTitle/PageTitle';
import Paragraph from './components/Paragraph/Paragraph';
import FilmsList from './layout/FilmsList/FilmsList';
import Header from './layout/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import UserIcon from './components/UserIcon/UserIcon';
import { UserContext } from './context/user.context';
import { UserProps } from './components/LoginForm/LoginForm.props';
import { UserContextProps } from './context/user.context.props';

const FILMS_DATA = [
	{
		id: 1,
		title: 'Black Widow',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		rating: 324,
	},
	{
		id: 2,
		title: 'Shang Chi',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-2.png',
		rating: 124,
	},
	{
		id: 3,
		title: 'Loki',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-3.png',
		rating: 235,
	},
	{
		id: 4,
		title: 'How I Met Your Mother',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-4.png',
		rating: 123,
	},
	{
		id: 5,
		title: 'Money Heist',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-5.png',
		rating: 8125,
	},
	{
		id: 6,
		title: 'Friends',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-6.png',
		rating: 123,
	},
	{
		id: 7,
		title: 'The Big Bang Theory',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-7.png',
		rating: 12,
	},
	{
		id: 8,
		title: 'Two And a Half Men',
		poster: '/public/filmsImg/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1-8.png',
		rating: 456,
	},
];

function App() {
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	const searchButtonRef = useRef<HTMLButtonElement | null>(null);

	const [userLoggined, setUserLoggined] = useState<UserProps | boolean>(false);
	const context = useContext<UserContextProps | undefined>(UserContext);

	if (!context) {
		throw new Error('Context is undefined');
	}

	const { user, setUser } = context;

	const getExistingData = () => {
		const existingData = localStorage.getItem('data');
		return existingData ? JSON.parse(existingData) : [];
	};

	useEffect(() => {
		const allUsers = getExistingData();
		const loginnedUser = allUsers.find((user: UserProps) => user.isLoggined === true);

		if (loginnedUser) {
			setUserLoggined(loginnedUser);
			setUser(loginnedUser.name);
		}
	}, [setUser, user]);

	const logOut = () => {
		if (typeof userLoggined === 'object') {
			const logOutUser = { ...userLoggined, isLoggined: false };
			const allUsers = getExistingData();
			const updatedUsers = allUsers.map((user: UserProps) =>
				user.name === userLoggined.name ? logOutUser : user
			);
			localStorage.setItem('data', JSON.stringify(updatedUsers));
		}
		setUserLoggined(false);
		setUser(null);
	};

	return (
		<>
			<Header>
				<Logo />
				<Navigation>
					<NavigationLink href="#" text="Поиск фильмов" isActive={true} />
					<NavigationLink
						href="#"
						text="Мои фильмы"
						icon={<FavoriteIcon count={2} />}
					/>
					{userLoggined ? (
						<>
							<NavigationLink href="#" text={user} icon={<UserIcon />} />
							<NavigationLink href="#" text="Выйти" onClick={logOut} />
						</>
					) : (
						<NavigationLink href="#" text="Войти" icon={<LoginIcon />} />
					)}
				</Navigation>
			</Header>
			<PageTitle text="Поиск" />
			<Paragraph
				text="Введите название фильма, сериала или мультфильма для поиска и
			добавления в избранное."
				fonstSize="16px"
			/>
			<Input placeholder="Введите название" isSearch={true} ref={searchInputRef} />
			<Button
				text="Искать"
				onClick={() => console.log('clicked')}
				ref={searchButtonRef}
			/>
			<FilmsList items={FILMS_DATA} />

			<PageTitle text="Вход" />
			<LoginForm setUserLoggined={setUserLoggined} />
		</>
	);
}

export default App;
