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
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/activateNetBanking",
        element: <ActivateNetBankingPage />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
