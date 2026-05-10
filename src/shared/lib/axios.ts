import axios from "axios";
import { env } from "@/config/env";

/**
 * Axios instance dùng chung cho toàn app
 * baseURL đọc từ env → chỉ cần đổi NEXT_PUBLIC_API_URL trong .env
 */
const axiosInstance = axios.create({
  baseURL: env.API_URL,
  timeout: env.API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// ── Request interceptor: tự động gắn token ──────────────────────────
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response interceptor: xử lý lỗi tập trung ──────────────────────
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token hết hạn → xử lý logout
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
