import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const Routes = () => (
	<Router>
		<Nav />

		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/register" component={Register} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

export default Routes;
