import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import classes from './Register.module.css';

function Register() {
	const [error, setError] = useState(false);
	const [loading,setLoading] =useState(false)

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const navigate = useNavigate();
	async function submitHandler(event) {
		event.preventDefault();
		setLoading(true)

		const user = {
			userName: userName,
			password: password,
			firstName: firstName,
			lastName: lastName,
			email: email,
		};

		const response = await fetch(process.env.REACT_APP_API_URL+'/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const jsonResult = await response.json();
		console.log(jsonResult);

		setLoading(false);
		if(jsonResult.success===true){
			navigate('/dashboard')
		}else{
			setError(true)
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
							
							<button type='submit'>
							{loading?'creating account...':'Submit'}
							</button>
						</div>
						<Link to='/'>Sign In</Link>
					</form>

					{!error ? (
						''
					) : (
						<label style={{ color: 'red', display: 'block' }}>
							User was not created
						</label>
					)}
				</div>
			</div>
		</div>
	);
}

export default Register;
