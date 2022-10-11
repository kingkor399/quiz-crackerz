import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import LanguageDetails from "../Component/LanguageDetails";
import Root from "../Component/Root";
import Statistic from "../Component/Statistic";
import Topics from "../Component/Topics";

const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/home',
            loader: () =>{
                return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Home></Home>
            },
            { path: '/topics',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Topics></Topics> },
            {
              path: '/language/:id',
              loader: ({params}) =>{
                return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
              },
              element: <LanguageDetails></LanguageDetails>,
            },
            { path: '/statistic', element: <Statistic></Statistic> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    },
])

export default router;