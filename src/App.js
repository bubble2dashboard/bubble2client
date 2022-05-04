import Login from './components/Login.js';

import Dashboard from './components/Dashbaord.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/*' element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
