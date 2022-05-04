import classes from './Dashboard.module.css';

import { Link,useNavigate } from 'react-router-dom';

function Dashboard() {

	const navigate = useNavigate();
	function logoutHandler(){

		navigate('/')
	}
	return (
		<div className={classes.dashboard}>
			<div className={classes['dashboard-content']}>
				<h1>Dashboard Content</h1>

				<button onClick={logoutHandler}>Logout</button>
			</div>
		</div>
	);
}

export default Dashboard;
