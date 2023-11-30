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
