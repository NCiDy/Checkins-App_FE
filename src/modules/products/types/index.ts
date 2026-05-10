export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export interface CreateProductPayload {
  name: string;
  price: number;
  description: string;
  image?: string;
  category: string;
  stock: number;
}

export type UpdateProductPayload = Partial<CreateProductPayload>;
