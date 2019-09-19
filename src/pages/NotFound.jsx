import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => (
	<div>
		<h1>404 - Not Found</h1>
		<br />
		<Link to="/">
			<button type="button">Regresar</button>
		</Link>
	</div>
);
export default NotFound;
