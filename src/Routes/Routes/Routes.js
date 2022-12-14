import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCourses from "../../Pages/Category/AllCourses/AllCourses";
import Courses from "../../Pages/Category/Courses/Courses";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Shared/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allcourses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch('https://education-unlimited-server.vercel.app/details')
            },
            {
                path: '/courses/:id',
                loader: ({params})=> fetch(`https://education-unlimited-server.vercel.app/course/${params.id}`),
                element: <Courses></Courses>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`https://education-unlimited-server.vercel.app/details/${params.id}`)
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
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    
])