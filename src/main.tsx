import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserContextProvider } from './context/user.context';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import Error from './pages/Error/Error.js';
import MainLayout from './layout/MainLayout/MainLayout';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Search from './pages/Search/Search';
import Film from './pages/Film/Film';
import axios from 'axios';
import { PREFIX } from './helpers/API';
import { RequireAuth } from './helpers/RequireAuth';
import AuthLayout from './layout/AuthLayout/AuthLayout';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<UserContextProvider>
				<RequireAuth>
					<MainLayout />
				</RequireAuth>
			</UserContextProvider>
		),
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
				path: '/film/:id',
				element: <Film />,
				errorElement: <>Ошибка получения информации о фильме :(</>,
				loader: async ({ params }) => {
					return defer({
						data: axios
							.get(`${PREFIX}/?tt=${params.id}`)
							.then((data) => data)
							.catch((e) => console.log(e)),
					});
				},
			},
		],
	},
	{
		path: '/login',
		element: (
			<UserContextProvider>
				<AuthLayout />
			</UserContextProvider>
		),
		children: [{ path: '/login', element: <Login /> }],
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
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</React.StrictMode>
	);
}
