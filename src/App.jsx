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
					<NavigationLink href="#" text="Войти" icon={<LoginIcon />} />
				</Navigation>
			</Header>
			<PageTitle text="Поиск" />
			<Paragraph
				text="Введите название фильма, сериала или мультфильма для поиска и
			добавления в избранное."
				fonstSize="16px"
			/>
			<Input placeholder="Введите название" isSearch={true} />
			<Button text="Искать" onClick={() => console.log('clicked')} />
			<FilmsList items={FILMS_DATA} />
		</>
	);
}

export default App;
