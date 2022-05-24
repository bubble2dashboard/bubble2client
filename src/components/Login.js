import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import classes from './Login.module.css';

function Login() {
	const [error, setError] = useState(false);
	const [loading,setLoading] =useState(false)

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	async function submitHandler(event) {
		event.preventDefault();
		setLoading(true)
		const user = {
			userName: userName,
			password: password,
		};

		const response = await fetch(process.env.REACT_APP_API_URL+'/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		setLoading(false)
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
							

							<button type='submit'>
							{loading ? 'logging in...':'Submit'}
							</button>
						</div>
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
