import { useState } from 'react';
import OrderDetailsModal from './OrderDetailsModal';

export default function PendingOrdersList() {
  const [orders, setOrders] = useState([
    { id: 1, shopName: 'Shop A', items: [{ name: 'Cola', quantity: 10, price: 20 }], totalPrice: 200, status: 'pending' },
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const markAsDelivered = (id: number) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status: 'delivered' } : order)));
  };

  return (
    <div>
      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="text-left text-gray-700 dark:text-gray-300">
            <th className="p-2">Order ID</th>
            <th className="p-2">Shop Name</th>
            <th className="p-2">Total Price</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t text-gray-900 dark:text-white">
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.shopName}</td>
              <td className="p-2">₹{order.totalPrice}</td>
              <td className="p-2">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="text-blue-500 hover:underline"
                >
                  View
                </button>
                <button
                  onClick={() => markAsDelivered(order.id)}
                  className="ml-2 bg-green-500 text-white px-2 py-1 rounded"
                >
                  Mark Delivered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </div>
  );
}