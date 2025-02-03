import { login, register } from "@/api/login";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      console.log("Login successful!", data);
    },
    onError: (error) => {
      console.error("Login failed!", error);
    },
  });
};

interface RegisterRequest {
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
  type: string;
}

export const useRegister = () => {
  return useMutation({
    mutationFn: async (credentials: RegisterRequest) => {
      const response: RegisterResponse = await register(credentials);
      localStorage.setItem("token", response.token);
      return response;
    },
    onSuccess: () => {
      console.log("Registration successful!");
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        console.error("Registration error:", error.response?.data?.message);
      } else {
        console.error("An unexpected error occurred.");
      }
    },
  });
};
