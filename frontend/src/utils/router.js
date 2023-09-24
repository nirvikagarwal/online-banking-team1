import { createBrowserRouter } from "react-router-dom";
import { getCurrentUser, getAccount } from "./apiHelper";
import {
  HomePage,
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
import FundTransfer from "../pages/FundTransfer";
import AddBeneficiary from "../pages/AddBeneficiary";
import ManageBeneficiary from "../pages/ManageBeneficiary";
import Transactions from "../pages/Transactions";
import ActivateNetBankingPage from "../pages/ActivateNetBankingPage";
import AdminDashboard from "../pages/AdminDashboard";

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
        path: "/user/:userId",
        element: <UserDashboard />,
        loader: async ({ params }) => {
          const user = await getCurrentUser(params.userId);
          const accounts = await getAccount(params.userId);
          return { user: user.data, accounts };
        },
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
        path: "/fundTransfer",
        element: <FundTransfer />,
      },
      {
        path: "/addBeneficiary",
        element: <AddBeneficiary />,
      },
      {
        path: "/manageBeneficiary",
        element: <ManageBeneficiary />,
      },
      {
        path: "/transactions/:userId",
        element: <Transactions />,
      },
      {
        path: "/activateNetBanking/:userId",
        element: <ActivateNetBankingPage />,
        loader: async ({ params }) => {
          const accounts = await getAccount(params.userId);
          return { accounts };
        },
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
