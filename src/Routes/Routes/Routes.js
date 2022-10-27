import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCourses from "../../Pages/Category/AllCourses/AllCourses";
import Courses from "../../Pages/Category/Courses/Courses";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allcourses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch('http://localhost:5000/details')
            },
            {
                path: '/courses/:id',
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`),
                element: <Courses></Courses>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
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
])