import React, { useState } from 'react';

// This is the Main Store which is saving information if the user is logged in or not to show that Dashboard and hide register/login component app wise.
const AuthContext = React.createContext({
	user: null,
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
});

// Provider to save Authentication in Context
export const AuthContextProvider = (props) => {
	const savedUser = localStorage.getItem('user');
	const [user, setUser] = useState(savedUser);

	let userIsLoggedIn = null;

	if (user !== null) {
		userIsLoggedIn = true;
	} else {
		userIsLoggedIn = false;
	}

	// loginHandler function save user in app wise store
	const loginHandler = (user) => {
		localStorage.setItem('user', JSON.stringify(user));
		setUser(user);
	};

	// logoutHandler funciton clear out the saved user
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
