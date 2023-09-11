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
    Root
} from '../pages';

const router  = createBrowserRouter([{
    path : '/',
    element : <Root/>,
    errorElement : <ErrorPage/>,
    children :[
        {
            index : true,
            element : <HomePage/>
        },
        {
            path : '/login',
            element : <LoginPage/>
        },
        
        {
            path : "/admin",
            element : <AdminPage/>
        },
        {
            path : '/user',
            element : <UserDashboard/>
        },
        {
            path : "/forgotPassword",
            element : <ForgotPasswordPage/>
        },
        {
            path : "/netBanking",
            element : <NetBankingPage/>
        },
        {
            path : "/forgotUserId",
            element : <ForgotUserIdPage/>
        }
    ]
},{
    path : '/userRegistration',
    element : <UserRegistrationPage/>
}])



export default router;