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
import AllServicesPage from "../Pages/AllServicesPage";
import SingleServiceDetails from "../Pages/SingleServiceDetails";
import PrivetRoute from "../AuthProvider/PrivetRoute";
import UpdateServicePage from "../Pages/UpdateServicePage";

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
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/allservices',
                element:<AllServicesPage></AllServicesPage>
            },
            {
                path:'/services/:id',
                element: <PrivetRoute><SingleServiceDetails></SingleServiceDetails></PrivetRoute>
            },
            {
                path:'/manageService',
                element: <PrivetRoute><ManageService></ManageService></PrivetRoute>
            },
            {
                path:'/bookedServices',
                element: <PrivetRoute><BookedServices></BookedServices></PrivetRoute>
            },
            {
                path:'/update/:id',
                element:<UpdateServicePage></UpdateServicePage>
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