type ID = number;

export interface ProductProps {
  id: ID;
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: ProductRatingProps;
}

export interface ProductRatingProps {
  rate: number;
  count: number;
}

export interface CartItemProps {
  id: ID;
  quantity: number;
}