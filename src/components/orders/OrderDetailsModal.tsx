export default function OrderDetailsModal({ order, onClose }: { order: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Order #{order.id}</h2>
        <p className="text-gray-700 dark:text-gray-300">Shop: {order.shopName}</p>
        <p className="text-gray-700 dark:text-gray-300">Total: ₹{order.totalPrice}</p>
        <ul className="mt-2">
          {order.items.map((item: any, index: number) => (
            <li key={index} className="text-gray-900 dark:text-white">
              {item.name} - {item.quantity} x ₹{item.price}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}