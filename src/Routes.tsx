import { Toaster } from "@/components/ui/toaster";
import Home from "@/page/Home";
import Signin from "@/page/Sign-in";
import Signup from "@/page/Sign-up";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Area from "./page/Area";
import Dashboard from "./page/Dashboard";
import Otp from "./page/Otp";
import Turma from "./page/Turma";
export default function Routes() {
  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/otg",
      element: <Otp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/dashboard/:area/:turma",
      element: <Turma />,
    },
    {
      path: "/dashboard/:area",
      element: <Area />,
    },
    {
      path: "/cadastrar",
      element: <Signup />,
    },
    {
      path: "/entrar",
      element: <Signin />,
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={rotas} />
    </>
  );
}
