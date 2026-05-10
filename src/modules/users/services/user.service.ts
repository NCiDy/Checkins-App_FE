import axiosInstance from "@/shared/lib/axios";
import { API_ENDPOINTS } from "@/shared/constants/api.constants";
import type { PaginatedResponse, PaginationParams } from "@/shared/types";
import type { User, UpdateUserPayload } from "../types";

class UserService {
  async getAll(params?: PaginationParams): Promise<PaginatedResponse<User>> {
    const { data } = await axiosInstance.get<PaginatedResponse<User>>(
      API_ENDPOINTS.USERS.LIST,
      { params }
    );
    return data;
  }

  async getById(id: string): Promise<User> {
    const { data } = await axiosInstance.get<User>(
      API_ENDPOINTS.USERS.DETAIL(id)
    );
    return data;
  }

  async getProfile(): Promise<User> {
    const { data } = await axiosInstance.get<User>(
      API_ENDPOINTS.USERS.PROFILE
    );
    return data;
  }

  async update(id: string, payload: UpdateUserPayload): Promise<User> {
    const { data } = await axiosInstance.put<User>(
      API_ENDPOINTS.USERS.UPDATE(id),
      payload
    );
    return data;
  }

  async delete(id: string): Promise<void> {
    await axiosInstance.delete(API_ENDPOINTS.USERS.DELETE(id));
  }
}

export const userService = new UserService();
