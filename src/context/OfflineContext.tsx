import { createContext, useContext, useState, useEffect } from 'react';
import Dexie from 'dexie';
import { ReactNode } from 'react';

const OfflineContext = createContext<any>(null);

const db = new Dexie('WholesaleDB');
db.version(1).stores({
  orders: '++id, shopName, items, totalPrice, status',
});


export function OfflineProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {

    if (typeof window !== 'undefined' && 'navigator' in window) {
      setIsOnline(navigator.onLine);

      
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
    };
  }, []);

  const saveOrderOffline = async (order) => {
    await db.orders.add({ ...order, status: 'pending' });
  };

  const syncOrders = async () => {
    const pendingOrders = await db.orders.where('status').equals('pending').toArray();
    // Sync with server logic here
    console.log('Syncing:', pendingOrders);
  };

  return (
    <OfflineContext.Provider value={{ isOnline, saveOrderOffline, syncOrders }}>
      {children}
    </OfflineContext.Provider>
  );
}

export const useOffline = () => useContext(OfflineContext);