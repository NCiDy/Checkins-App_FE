export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar?: string;
  createdAt: string;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  avatar?: string;
}
