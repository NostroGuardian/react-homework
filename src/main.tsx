import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.js';
import './index.css';
import { UserContextProvider } from './context/user.context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error/Error.js';
import MainLayout from './layout/MainLayout/MainLayout';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Search from './pages/Search/Search';
import Film from './pages/Film/Film';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Search />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/film/:id',
				element: <Film />,
			},
		],
	},
	{
		path: '*',
		element: <Error />,
	},
]);

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<UserContextProvider>
				<RouterProvider router={router} />
				{/* <App /> */}
			</UserContextProvider>
		</React.StrictMode>
	);
}
