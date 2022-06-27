// This is main main Dashboard component in which other components are residing...

// importing mandotory stuff here

import React, { useContext } from 'react';
import classes from './Dashboard.module.css';

import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';

// Dashboard main functional component

function Dashboard() {
	const authCtx = useContext(AuthContext); //Authenticaion
	const navigate = useNavigate();

	//function 'logoutHanlder' when exectued, it's navigate to main route
	function logoutHandler() {
		navigate('/'); //it navigate to 'http://localhost:3000', which is home page
	}

	return (
		// This is the main jsx content which will be converted into HTML
		<div className={classes.dashboard}>
			<div className={classes['dashboard-content']}>
				<h1>Dashboard Content</h1>

				<button onClick={logoutHandler}>Logout</button>
			</div>
			{authCtx.user && (
				<div className={classes.profile}>
					<div>
						<label>{authCtx.user.name}</label>
					</div>
					<img src={authCtx.user.picture} alt='profile' />
				</div>
			)}
		</div>
	);
}

export default Dashboard; //exporting Dashboard component
