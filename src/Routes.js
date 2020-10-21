import React from 'react';
//import other librarys
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
//import Pages
import Home from './Pages/Home/Home';
import Error from './Pages/ErrorPage/ErrorPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
