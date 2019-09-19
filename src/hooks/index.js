import { useEffect, useState } from 'react';

export const useGtUsers = (url) => {
	const [ users, setUsers ] = useState([]);
	useEffect(
		() => {
			const abortController = new AbortController();
			const signal = abortController.abort;
			fetch(url, { signal: signal }).then((response) => response.json()).then((data) => setUsers(data));

			return function cleanup() {
				abortController.abort();
			};
		},
		[ url ]
	);
	return users;
};

const useGetOrders = (url) => {
	const [ orders, setOrders ] = useState([]);
	useEffect(
		() => {
			const abortController = new AbortController();
			const signal = abortController.signal;
			fetch(url, { signal: signal }).then((response) => response.json()).then((data) => setOrders(data));

			return function cleanup() {
				abortController.abort();
			};
		},
		[ url ]
	);
	return orders;
};

export default useGetOrders;
