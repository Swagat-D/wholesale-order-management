import { useState } from 'react';

export default function PaymentDetailsModal({ shop, onClose }: { shop: any; onClose: () => void }) {
  const [amountPaid, setAmountPaid] = useState('');

  const handlePayment = () => {
    // Logic to update payment
    console.log(`Paid ₹${amountPaid} for ${shop.name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{shop.name}</h2>
        <p className="text-gray-700 dark:text-gray-300">Total Due: ₹{shop.due}</p>
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300">Amount Paid</label>
          <input
            type="number"
            value={amountPaid}
            onChange={(e) => setAmountPaid(e.target.value)}
            className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button onClick={handlePayment} className="px-4 py-2 bg-blue-500 text-white rounded">
            Record Payment
          </button>
        </div>
      </div>
    </div>
  );
}