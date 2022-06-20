import React, { useState } from 'react';

const AuthContext = React.createContext({
	user: null,
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const savedUser = localStorage.getItem('user');
	const [user, setUser] = useState(savedUser);

	let userIsLoggedIn = null;

	if (user !== null) {
		userIsLoggedIn = true;
	} else {
		userIsLoggedIn = false;
	}

	const loginHandler = (user) => {
		localStorage.setItem('user', JSON.stringify(user));
		setUser(user);
	};

	const logoutHandler = () => {
		setUser({});
		localStorage.removeItem('user');
	};

	const contextValue = {
		user: user,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
