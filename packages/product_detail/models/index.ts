export interface Product {
  id: string;
  category: string;
  checked: boolean;
  content: string;
  createdAt: string;
  description: string;
  image: { fileName: string; url: string };
  price: number;
  product_id: string;
  sold: number;
  title: string;
  loading: 'loading' | 'loaded' | 'init';
}

export interface ISetProductDetail {
  id: string;
  category: string;
  checked: boolean;
  content: string;
  createdAt: string;
  description: string;
  image: { fileName: string; url: string };
  price: number;
  product_id: string;
  sold: number;
  title: string;
}
