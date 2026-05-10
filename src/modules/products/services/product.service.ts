import axiosInstance from "@/shared/lib/axios";
import { API_ENDPOINTS } from "@/shared/constants/api.constants";
import type { PaginatedResponse, PaginationParams } from "@/shared/types";
import type { Product, CreateProductPayload, UpdateProductPayload } from "../types";

class ProductService {
  async getAll(params?: PaginationParams): Promise<PaginatedResponse<Product>> {
    const { data } = await axiosInstance.get<PaginatedResponse<Product>>(
      API_ENDPOINTS.PRODUCTS.LIST,
      { params }
    );
    return data;
  }

  async getById(id: string): Promise<Product> {
    const { data } = await axiosInstance.get<Product>(
      API_ENDPOINTS.PRODUCTS.DETAIL(id)
    );
    return data;
  }

  async create(payload: CreateProductPayload): Promise<Product> {
    const { data } = await axiosInstance.post<Product>(
      API_ENDPOINTS.PRODUCTS.CREATE,
      payload
    );
    return data;
  }

  async update(id: string, payload: UpdateProductPayload): Promise<Product> {
    const { data } = await axiosInstance.put<Product>(
      API_ENDPOINTS.PRODUCTS.UPDATE(id),
      payload
    );
    return data;
  }

  async delete(id: string): Promise<void> {
    await axiosInstance.delete(API_ENDPOINTS.PRODUCTS.DELETE(id));
  }
}

export const productService = new ProductService();
