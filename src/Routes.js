import React from 'react';
//import other librarys
import {
	HashRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
//import Pages
import Home from './Pages/Home/Home';
import Error from './Pages/ErrorPage/ErrorPage';

//import components
import NavbarLeft from './Components/NavbarLeft/NavbarLeft';

function App() {
	return (
		<Router>
			<div className="d-flex">
				<NavbarLeft />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<Error />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
