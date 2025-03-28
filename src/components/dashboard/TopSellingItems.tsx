export default function TopSellingItems() {
  const items = [
    { name: 'Cola', quantity: 150 },
    { name: 'Lemonade', quantity: 120 },
    { name: 'Water', quantity: 100 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Top-Selling Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.name} className="flex justify-between py-2 text-gray-900 dark:text-white">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}