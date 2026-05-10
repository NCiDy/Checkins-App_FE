import axiosInstance from "@/shared/lib/axios";
import { API_ENDPOINTS } from "@/shared/constants/api.constants";
import type { LoginPayload, RegisterPayload, AuthResponse } from "../types";

class AuthService {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { data } = await axiosInstance.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      payload
    );
    return data;
  }

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const { data } = await axiosInstance.post<AuthResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      payload
    );
    return data;
  }

  async logout(): Promise<void> {
    await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
  }

  async getMe(): Promise<AuthResponse["user"]> {
    const { data } = await axiosInstance.get(API_ENDPOINTS.AUTH.ME);
    return data;
  }
}

// Export singleton instance
export const authService = new AuthService();
