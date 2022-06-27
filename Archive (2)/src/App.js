// this is the main component called App compnent in which we build all our components and build the whole app

import Login from './components/Login.js'; // importing login component from './login.js file'
import Register from './components/Register.js'; //importing Register component from './Register.js file'

import Dashboard from './components/Dashbaord.js'; //importing Dashboard component from './Dashboard.js'/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //importing Router,Routes,Route from 'react-router-dom' package

// This is the main App componnent here
function App() {
	return (
		<Router>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/*' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
