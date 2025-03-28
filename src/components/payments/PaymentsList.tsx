import { useState } from 'react';
import PaymentDetailsModal from './PaymentDetailsModal';

export default function PaymentsList() {
  const [shopkeepers, setShopkeepers] = useState([
    { id: 1, name: 'Shop A', due: 200, orders: [{ id: 1, total: 200, paid: 0 }] },
  ]);
  const [selectedShop, setSelectedShop] = useState(null);

  return (
    <div>
      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="text-left text-gray-700 dark:text-gray-300">
            <th className="p-2">Shop Name</th>
            <th className="p-2">Due Amount</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {shopkeepers.map((shop) => (
            <tr key={shop.id} className="border-t text-gray-900 dark:text-white">
              <td className="p-2">{shop.name}</td>
              <td className="p-2">₹{shop.due}</td>
              <td className="p-2">
                <button
                  onClick={() => setSelectedShop(shop)}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedShop && <PaymentDetailsModal shop={selectedShop} onClose={() => setSelectedShop(null)} />}
    </div>
  );
}