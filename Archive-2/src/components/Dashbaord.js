import React, { useContext } from 'react';
import classes from './Dashboard.module.css';

import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
	const authCtx = useContext(AuthContext);
	const navigate = useNavigate();
	function logoutHandler() {
		navigate('/');
	}
	return (
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

export default Dashboard;
