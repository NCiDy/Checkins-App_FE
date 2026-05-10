/**
 * Tất cả endpoint path của API
 * Muốn đổi path → chỉ sửa file này
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    REFRESH_TOKEN: "/api/auth/refresh",
    ME: "/api/auth/me",
  },
  PRODUCTS: {
    LIST: "/api/products",
    DETAIL: (id: string) => `/api/products/${id}`,
    CREATE: "/api/products",
    UPDATE: (id: string) => `/api/products/${id}`,
    DELETE: (id: string) => `/api/products/${id}`,
  },
  USERS: {
    LIST: "/api/users",
    DETAIL: (id: string) => `/api/users/${id}`,
    PROFILE: "/api/users/profile",
    UPDATE: (id: string) => `/api/users/${id}`,
    DELETE: (id: string) => `/api/users/${id}`,
  },
};
