import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import CardDetails from "../Components/CardDetails/CardDetails";
import About from "../Components/About/About";
 
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
            },
            {
                path: '/cards/:id',
                 
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
              },
              {
                path: '/about',
                element: <About></About>
            }
              
        ]
    }    
]);

export default router;