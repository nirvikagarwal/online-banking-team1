import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  AdminPage,
  ForgotPasswordPage,
  ForgotUserIdPage,
  LoginPage,
  NetBankingPage,
  UserDashboard,
  UserRegistrationPage,
  ErrorPage,
  Root,
  CreatAccountPage,
} from "../pages";
import UserTable from "../pages/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/user",
        element: <UserDashboard />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/userRegistration",
        element: <UserRegistrationPage />,
      },
      {
        path: "/netBanking",
        element: <NetBankingPage />,
      },
      {
        path: "/forgotUserId",
        element: <ForgotUserIdPage />,
      },
      {
        path: "/createAccount",
        element: <CreatAccountPage />,
      },
      {
        path: "/userTable",
        element: <UserTable />,
      },
    ],
  },
]);

export default router;
