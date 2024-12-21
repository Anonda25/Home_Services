import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import ErrorPages from "../CommenPage/ErrorPages";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddService from "../Pages/AddService";
import ManageService from "../Pages/ManageService";
import BookedServices from "../Pages/BookedServices";
import Services from "../Pages/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/addService',
                element:<AddService></AddService>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/manageService',
                element:<ManageService></ManageService>
            },
            {
                path:'/bookedServices',
                element:<BookedServices></BookedServices>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
]);

export default router