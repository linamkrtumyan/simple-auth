import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Login from "@/pages/login";
import Profile from "@/pages/profile";
import Register from "@/pages/register";
import Layout from "@/components/layout";

function isAuthenticated() {
  return !!localStorage.getItem("token");
}

function ProtectedRoute({ element }: { element: React.ReactNode }) {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
}

function PublicRoute({ element }: { element: React.ReactNode }) {
  return isAuthenticated() ? <Navigate to="/profile" replace /> : element;
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Navigate to={isAuthenticated() ? "/profile" : "/login"} replace />
        ),
      },
      { path: "login", element: <PublicRoute element={<Login />} /> },
      { path: "register", element: <PublicRoute element={<Register />} /> },
      { path: "profile", element: <ProtectedRoute element={<Profile />} /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
];

const router = createBrowserRouter(routes);
export default router;
