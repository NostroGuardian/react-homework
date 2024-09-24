import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { UserContextProvider } from './context/user.context';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</React.StrictMode>
	);
}
