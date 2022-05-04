import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const cUserName = 'gio123';
const cPassword = 'gio123';

function Login() {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState(false);

	const navigate = useNavigate();
	function submitHandler(event) {
		event.preventDefault();

		const user = {
			userName: username,
			password: password,
		};

		if (user.userName === cUserName && user.password === cPassword) {
			navigate('/dashboard');
		} else {
			setError(true);
		}
	}

	function userNameHandler(event) {
		setUserName(event.target.value);
		setError(false);
	}

	function passwordHandler(event) {
		setPassword(event.target.value);
		setError(false);
	}
	return (
		<div className={classes['login-container']}>
			<div className={classes['login-banner']}>
				<div className={classes['login-banner-content']}>
					<h1>LOGIN PAGE</h1>
				</div>
			</div>

			<div className={classes['login-form']}>
				<div className={classes['login-form-content']}>
					<form onSubmit={submitHandler}>
						<div className={classes['input-control']}>
							<label>Username</label>
							<input type='text' onChange={userNameHandler} />
						</div>

						<div className={classes['input-control']}>
							<label>Password</label>
							<input type='password' onChange={passwordHandler} />
						</div>

						<div className={classes['input-actions']}>
							<input type='Submit' value='Submit' />
						</div>
					</form>

					{!error ? (
						''
					) : (
						<label style={{ color: 'red', display: 'block' }}>
							UserName or password Incorrect
						</label>
					)}
				</div>
			</div>
		</div>
	);
}

export default Login;
