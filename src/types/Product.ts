export interface Product {
  id: string;
  name: string;
  sku: string;
  wholesalePrice: number;
  minimumOrderQuantity: number;
  currentStock: number;
  category?: string;
  description?: string;
}