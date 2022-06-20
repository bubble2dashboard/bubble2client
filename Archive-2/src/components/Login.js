import React, { useState, useEffect, useContext } from 'react';
import users from '../data/users';
import { useNavigate, Link } from 'react-router-dom';
import classes from './Login.module.css';

import AuthContext from '../store/auth-context';

import jwt_code from 'jwt-decode';

function Login() {
	console.log(users);
	const navigate = useNavigate();
	const [error, setError] = useState(false);

	const authCtx = useContext(AuthContext);

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleCallbackResponse = (response) => {
		console.log(response);
		const userObject = jwt_code(response.credential);

		console.log(userObject);
		authCtx.login(userObject);
		navigate('/dashboard');
	};
	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id:
				'311545007847-773k9v124teoj47f8e4qqj11e3m74vk8.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById('signInDiv'), {
			theme: 'outline',
			size: 'large',
		});
		/* eslint-disable */
	}, []);

	async function submitHandler(event) {
		event.preventDefault();

		const user = {
			userName: userName,
			password: password,
		};

		const response = await fetch(
			'https://lionfish-app-moe43.ondigitalocean.app/api/auth/login',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			}
		);

		const jsonResult = await response.json();

		if (jsonResult.success === true && jsonResult.data.length > 0) {
			navigate('/dashboard');
		} else {
			setError(true);
		}
	}

	function userNameHandler(event) {
		setUserName(event.target.value);
	}

	function passwordHandler(event) {
		setPassword(event.target.value);
		setError(false);
	}
	return (
		<div className={classes['login-container']}>
			<div className={classes['login-banner']}>
				<div className={classes['login-banner-content']}>
					<h1>ENVIROIMPACT</h1>
				</div>
			</div>

			<div className={classes['login-form']}>
				<div className={classes['login-form-content']}>
					<h1>Login</h1>
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
						<div id='signInDiv'></div>
						<Link to='/register'>Sign Up</Link>
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
