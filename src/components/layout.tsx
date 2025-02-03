import { Outlet, Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div
      className={cn("flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900")}
    >
      <header className="w-full py-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 dark:text-gray-200"
          >
            Simple auth
          </Link>
          <ModeToggle />
        </div>
      </header>
      <main className="flex-grow flex justify-center items-center p-6">
        <Outlet />
      </main>
      <footer className="w-full py-4 bg-white dark:bg-gray-800 shadow-md text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Simple auth. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
