import { useEffect, useState } from "react";

const useGetOrders = url => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setOrders(data));
  }, [url]);
  return orders;
};

export default useGetOrders;
