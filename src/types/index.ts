export interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: Record<string, number>;
}

export interface CartItemProps {
  id: number;
  quantity: number;
}