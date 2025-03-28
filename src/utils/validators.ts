import { Product } from '../types/Product';
import { Customer } from '../types/Customer';
import { OrderItem, Order } from '../types/Order';

export const validateProduct = (product: Product): boolean => {
  return !!(
    product.name && 
    product.sku && 
    product.wholesalePrice > 0 && 
    product.minimumOrderQuantity > 0
  );
};

export const validateCustomer = (customer: Customer): boolean => {
  return !!(
    customer.name && 
    customer.businessName && 
    customer.contactEmail && 
    customer.creditLimit >= 0
  );
};

export const validateOrder = (
  order: Order, 
  products: Product[], 
  customer: Customer
): boolean => {
  // Check if customer exists and has sufficient credit
  if (!customer) return false;

  // Validate each order item
  const validItems = order.items.every(item => {
    const product = products.find(p => p.id === item.productId);
    return product && 
           item.quantity >= product.minimumOrderQuantity && 
           item.quantity <= product.currentStock;
  });

  // Calculate total order amount
  const totalAmount = order.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);

  return validItems && totalAmount <= customer.creditLimit;
};