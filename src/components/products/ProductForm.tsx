import React, { useState } from 'react';
import { useProducts } from '../../hooks/UseProducts';
import { Product } from '../../types/Product';

export const ProductForm: React.FC = () => {
  const { dispatch } = useProducts();
  const [productData, setProductData] = useState<Omit<Product, 'id'>>({
    name: '',
    sku: '',
    wholesalePrice: 0,
    minimumOrderQuantity: 1,
    currentStock: 0,
    category: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: name.includes('Price') || name.includes('Quantity') || name.includes('Stock') 
        ? Number(value) 
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ 
      type: 'ADD_PRODUCT', 
      payload: productData 
    });
    
    // Reset form
    setProductData({
      name: '',
      sku: '',
      wholesalePrice: 0,
      minimumOrderQuantity: 1,
      currentStock: 0,
      category: '',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="sku"
        value={productData.sku}
        onChange={handleChange}
        placeholder="SKU"
        required
      />
      <input
        type="number"
        name="wholesalePrice"
        value={productData.wholesalePrice}
        onChange={handleChange}
        placeholder="Wholesale Price"
        required
        min="0"
        step="0.01"
      />
      <input
        type="number"
        name="minimumOrderQuantity"
        value={productData.minimumOrderQuantity}
        onChange={handleChange}
        placeholder="Minimum Order Quantity"
        required
        min="1"
      />
      <input
        type="number"
        name="currentStock"
        value={productData.currentStock}
        onChange={handleChange}
        placeholder="Current Stock"
        required
        min="0"
      />
      <input
        type="text"
        name="category"
        value={productData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <textarea
        name="description"
        value={productData.description}
        onChange={handleChange}
        placeholder="Product Description"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};