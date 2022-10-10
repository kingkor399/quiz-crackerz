import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog";
import Root from "../Component/Root";
import Statistic from "../Component/Statistic";
import Topics from "../Component/Topics";

const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        children: [
            { path: '/', element: <Topics></Topics> },
            { path: '/topics', element: <Topics></Topics> },
            { path: '/statistic', element: <Statistic></Statistic> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    },
])

export default router;