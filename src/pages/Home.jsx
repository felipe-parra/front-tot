import React from 'react';
import useGetOrders from '../hooks';
import moment from 'moment';

const API = 'http://localhost:3900/api/order';

const Home = () => {
	const orders = useGetOrders(API);

	return (
		<div className="container">
			<h1>Home</h1>
			{orders.map((order, index) => (
				<div key={`order-${index}`}>
					<p>{order.userOrdered.username}</p>
					<p>{order.storeOrder.name}</p>
					{moment.locale('es')}
					<p>{moment(order.createdAt, 'YYYYMMDD').fromNow()}</p>
					<textarea value={order.articles} name="articles" id="articles" cols="30" rows="10" readOnly />
				</div>
			))}
		</div>
	);
};
export default Home;
