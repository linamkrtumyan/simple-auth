import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";
import { useProfile } from "@/hooks/useProfile";

const ProfileCard = () => {
  const { data: profile, isLoading, error, isError } = useProfile();
  const { mutate: logout, isPending } = useLogout();

  useEffect(() => {
    if (isError) logout();
  }, [error, logout]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center"
    >
      <Card className="w-full max-w-sm shadow-md rounded-lg border border-gray-200 transition-transform transform hover:scale-105">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold text-gray-800">
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-6 w-full mx-auto" />
              <Skeleton className="h-6 w-3/4 mx-auto" />
              <Skeleton className="h-6 w-full mx-auto" />
              <Skeleton className="h-8 w-full mx-auto" />
            </div>
          ) : error ? (
            <Alert variant="destructive" className="p-4 rounded-lg">
              <AlertDescription>Error loading profile</AlertDescription>
            </Alert>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-center"
            >
              <p className="text-lg font-medium text-gray-900">
                Email: <span className="font-semibold">{profile?.email}</span>
              </p>
              <p className="text-gray-500">
                ID: <span className="font-semibold">{profile?.id}</span>
              </p>
              <Button
                variant="destructive"
                onClick={() => logout()}
                disabled={isPending}
                className="w-full mt-4 py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all"
              >
                {isPending ? "Logging out..." : "Logout"}
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;
