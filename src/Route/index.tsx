import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ForgotPassword from "../Auth/ForgotPassword";
import MobileNumberLogin from "../Auth/MobileNumberLogin";
import NotFound from "../Component/Pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "phone-login",
        element: <MobileNumberLogin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
