import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // the app component is being imported here from '/app.js file/
import { AuthContextProvider } from './store/auth-context';

// This the first file which will start when the app stars

const root = ReactDOM.createRoot(document.getElementById('root')); // selecting the div with the id of 'root' and rendering app content in it
root.render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>
);
