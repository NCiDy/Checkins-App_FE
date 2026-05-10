/**
 * Tất cả các route của app
 * Dùng object này để navigate, tránh hardcode string
 */
export const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  DASHBOARD: "/dashboard",
  PRODUCTS: {
    LIST: "/products",
    DETAIL: (id: string) => `/products/${id}`,
    CREATE: "/products/create",
  },
  USERS: {
    LIST: "/users",
    PROFILE: "/users/profile",
    DETAIL: (id: string) => `/users/${id}`,
  },
};
