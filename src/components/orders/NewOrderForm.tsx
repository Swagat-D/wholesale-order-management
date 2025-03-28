import { useState } from 'react';
import { useOffline } from '../../context/OfflineContext';

export default function NewOrderForm() {
  const [shopName, setShopName] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 0, price: 0 }]);
  const { saveOrderOffline } = useOffline();

  const handleAddItem = () => setItems([...items, { name: '', quantity: 0, price: 0 }]);
  const handleItemChange = (index: number, field: string, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const order = { shopName, items, totalPrice, status: 'pending' };
    saveOrderOffline(order);
    setShopName('');
    setItems([{ name: '', quantity: 0, price: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Shop Name</label>
        <input
          type="text"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-white"
          required
        />
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex space-x-2 mb-2">
          <input
            type="text"
            placeholder="Item Name"
            value={item.name}
            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
            className="w-20 p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
            className="w-20 p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddItem}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Item
      </button>
      <div className="text-right mb-4 text-gray-900 dark:text-white">
        Total: ₹{totalPrice.toFixed(2)}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Save Order
      </button>
    </form>
  );
}