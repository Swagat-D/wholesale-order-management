import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import StatCard from '../components/dashboard/StatCard';
import TopSellingItems from '../components/dashboard/TopSellingItems';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) return null; // Redirect handled by ProtectedRoute

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard title="Total Sales" value="₹50,000" />
            <StatCard title="Pending Orders" value="5 (₹12,000)" />
            <StatCard title="Pending Payments" value="₹8,000" />
          </div>
          <TopSellingItems />
        </main>
      </div>
    </div>
  );
}