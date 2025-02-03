import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

function RegisterForm() {
  const { mutate, isPending, isError, error, isSuccess } = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate("/profile", { replace: true }), 1000);
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Sign up</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Create a new account by filling in the details below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center text-sm mb-4"
              >
                🎉 Registration successful! Redirecting...
              </motion.p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="example@gmail.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password" className="block text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="******"
                  className="mt-1"
                />
              </div>
              {isPending ? (
                <Skeleton className="h-10 w-full rounded-md" />
              ) : (
                <Button type="submit" className="w-full" disabled={isPending}>
                  Register
                </Button>
              )}
            </form>
            {isError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 mt-2 text-sm text-center"
              >
                {error instanceof AxiosError && error.response?.data?.message
                  ? error.response.data.message
                  : "An error occurred"}
              </motion.p>
            )}
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default RegisterForm;
