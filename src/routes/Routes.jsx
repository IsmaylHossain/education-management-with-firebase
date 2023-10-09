import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../Components/ErrorElement/ErrorElement";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 

                loader: () => fetch('/data.json')
            }, 
            {
                path: '/news/:id', 
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;