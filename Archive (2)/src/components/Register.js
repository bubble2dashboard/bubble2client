import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import classes from './Login.module.css';

// This is is the Register component which handles that SignUp funcitonality
function Register() {
	// all state variables to save data in state for the Register component
	const [error, setError] = useState(false);

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	// const navigate = useNavigate();

	// submitHandler function which is submitting the data when registering a new account
	async function submitHandler(event) {
		event.preventDefault();

		const user = {
			userName: userName,
			password: password,
			firstName: firstName,
			lastName: lastName,
			email: email,
		};

		const response = await fetch('http://localhost:5000/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const jsonResult = await response.json();
		console.log(jsonResult);
	}

	// all the functions to save data in state realtime
	function userNameHandler(event) {
		setUserName(event.target.value);
		setError(false);
	}

	function passwordHandler(event) {
		setPassword(event.target.value);
		setError(false);
	}

	function firstNameHandler(event) {
		setFirstName(event.target.value);
	}
	function lastNameHandler(event) {
		setLastName(event.target.value);
	}

	function emailHandler(event) {
		setEmail(event.target.value);
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
					<h1>Create Your Account</h1>
					<form onSubmit={submitHandler}>
						<div className={classes['input-control']}>
							<label>First Name</label>
							<input type='text' onChange={firstNameHandler} />
						</div>

						<div className={classes['input-control']}>
							<label>Last Name</label>
							<input type='text' onChange={lastNameHandler} />
						</div>

						<div className={classes['input-control']}>
							<label>Email</label>
							<input type='email' onChange={emailHandler} />
						</div>

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
						<Link to='/'>Sign In</Link>
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

export default Register; // exporting the Register component to be used in other files
