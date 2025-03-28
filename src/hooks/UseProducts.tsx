import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

