import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      localStorage.removeItem("token");
    },
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });
};
