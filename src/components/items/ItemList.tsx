import { useState } from 'react';
import AddItemModal from './AddItemModal';

export default function ItemList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Cola', price: 20, lastUpdated: '2025-03-25' },
    { id: 2, name: 'Lemonade', price: 15, lastUpdated: '2025-03-26' },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const addItem = (name: string, price: number) => {
    setItems([...items, { id: items.length + 1, name, price, lastUpdated: new Date().toISOString().split('T')[0] }]);
  };

  return (
    <div>
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="text-left text-gray-700 dark:text-gray-300">
            <th className="p-2">Item Name</th>
            <th className="p-2">Current Price</th>
            <th className="p-2">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t text-gray-900 dark:text-white">
              <td className="p-2">{item.name}</td>
              <td className="p-2">₹{item.price}</td>
              <td className="p-2">{item.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAddModalOpen && <AddItemModal onClose={() => setIsAddModalOpen(false)} onAdd={addItem} />}
    </div>
  );
}