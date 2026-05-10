/**
 * Đọc tất cả biến môi trường từ .env tại đây
 * Muốn đổi URL hay config → chỉ sửa file .env.local
 */
export const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080",
  API_TIMEOUT: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "My App",
};
