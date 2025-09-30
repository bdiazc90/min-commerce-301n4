export interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number; // opcional
  imageUrl: string;
  category: string;
  onSale?: boolean; // opcional
}
