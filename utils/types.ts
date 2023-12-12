export type User = {
  user_id: number;
  name: Nullable<string>;
  surname: Nullable<string>;
  middlename: Nullable<string>;
  email: string;
  group: string;
  session: string;
};

export type Product = {
  product_id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export type Order = {
  order_id: number;
  user_id: number;
  total_price: number;
  total_quantity: number;
  date: string;
  items: OrderItem[];
};

export type OrderItem = {
  order_item_id: number;
  order_id: number;
  user_id: number;
  product: Product & { quantity: number };
};

export type ApiResponse<T = void> = {
  data: Nullable<T>;
  message: Nullable<string>;
};

export type ApiErrorResponse = {
  message: string;
};
