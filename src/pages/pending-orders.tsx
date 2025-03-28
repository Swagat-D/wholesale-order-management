import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import PendingOrdersList from '../components/orders/PendingOrdersList';

export default function PendingOrders() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Pending Orders</h1>
          <PendingOrdersList />
        </main>
      </div>
    </div>
  );
}