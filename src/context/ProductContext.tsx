import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Product } from '../types/Product';
import { v4 as uuidv4 } from 'uuid';

type ProductAction = 
  | { type: 'ADD_PRODUCT', payload: Omit<Product, 'id'> }
  | { type: 'UPDATE_PRODUCT', payload: Product }
  | { type: 'UPDATE_STOCK', payload: { productId: string, quantity: number } }
  | { type: 'REMOVE_PRODUCT', payload: string };

type ProductState = {
  products: Product[];
  dispatch: React.Dispatch<ProductAction>;
};

export const ProductContext = createContext<ProductState | undefined>(undefined);

function productReducer(state: Product[], action: ProductAction): Product[] {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, { ...action.payload, id: uuidv4() }];
    case 'UPDATE_PRODUCT':
      return state.map(product => 
        product.id === action.payload.id ? action.payload : product
      );
    case 'UPDATE_STOCK':
      return state.map(product => 
        product.id === action.payload.productId 
          ? { ...product, currentStock: product.currentStock + action.payload.quantity }
          : product
      );
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
}

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};