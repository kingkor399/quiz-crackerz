import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import Root from "../Component/Root";
import Statistic from "../Component/Statistic";
import Topics from "../Component/Topics";

const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/topics', element: <Topics></Topics> },
            { path: '/statistic', element: <Statistic></Statistic> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    },
])

export default router;