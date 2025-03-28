import { useAuth } from '../../hooks/useAuth';
import ThemeToggle from './ThemeToggle';
import OfflineBanner from './OfflineBanner';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 p-4 shadow flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Wholesale Admin</h2>
      <div className="flex items-center space-x-4">
        <OfflineBanner />
        <ThemeToggle />
        {user && (
          <button
            onClick={logout}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}