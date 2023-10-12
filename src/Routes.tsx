import { Toaster } from "@/components/ui/toaster";
import Home from "@/page/Home";
import Signin from "@/page/Sign-in";
import Signup from "@/page/Sign-up";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Otp from "./page/Otp";
import Dashboard from "./page/Dashboard";
export default function Routes() {
  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/entrar",
      element: <Signin />,
    },
    {
      path: "/cadastrar",
      element: <Signup />,
    },

    {
      path: "/otg",
      element: <Otp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={rotas} />
    </>
  );
}
