import { useOffline } from '../../context/OfflineContext';

export default function OfflineBanner() {
  const { isOnline, syncOrders } = useOffline();

  if (isOnline) return null;

  return (
    <div className="bg-yellow-500 text-white p-2 flex justify-between items-center">
      <span>You are offline</span>
      <button onClick={syncOrders} className="bg-white text-yellow-500 px-2 py-1 rounded">
        Sync Orders
      </button>
    </div>
  );
}