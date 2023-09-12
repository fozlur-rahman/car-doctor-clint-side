import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServicesBook from "../Pages/ServicesBook/ServicesBook";
import MyBooking from "../Pages/MyBooking/MyBooking";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/booking/:id',
                element: <ServicesBook></ServicesBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }, {
                path: '/booking',
                element: <PrivateRoutes><MyBooking></MyBooking></PrivateRoutes>
            }
        ]
    },
]);


export default router;