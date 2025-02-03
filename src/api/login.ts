import api from "@/lib/axios";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  type: string;
}

export const login = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/login", credentials);
  return response.data;
};

interface RegisterRequest {
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
  type: string;
}

export const register = async (
  credentials: RegisterRequest
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>("/register", credentials);
  return response.data;
};
