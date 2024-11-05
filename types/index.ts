export type Category = 'people' | 'premium' | 'pets' | 'food' | 'landmarks' | 'cities' | 'nature';

export interface Product {
  id: string;
  name: string;
  subname: string;
  description: string;
  category: Category;
  urlImage: string;
  price: number;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}