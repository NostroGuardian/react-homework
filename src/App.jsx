import './App.css';
import Button from './components/Button/Button';
import PageTitle from './components/PageTitle/PageTitle';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	return (
		<>
			<PageTitle text="Поиск" />
			<Paragraph
				text="Введите название фильма, сериала или мультфильма для поиска и
			добавления в избранное."
				fonstSize="16px"
			/>
			<Button text="Искать" />
		</>
	);
}

export default App;
