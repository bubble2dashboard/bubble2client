import Login from './components/Login.js';
import Register from './components/Register.js';

import Dashboard from './components/Dashbaord.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
