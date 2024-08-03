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
import Header from './layout/Header/Header';

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
			<Button text="Искать" onClick={() => console.log('clocked')} />
		</>
	);
}

export default App;
