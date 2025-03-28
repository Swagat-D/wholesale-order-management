import Link from 'next/link';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Orders', path: '/orders' },
    { name: 'Pending Orders', path: '/pending-orders' },
    { name: 'Items & Pricing', path: '/items' },
    { name: 'Payments & Dues', path: '/payments' },
    { name: 'Reports & Exports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-screen p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Wholesale Admin</h2>
      <nav>
        {navItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <a className="block py-2 px-4 mb-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition">
              {item.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}