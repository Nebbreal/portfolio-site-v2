import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import './index.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import HomePage from "./pages/main-pages/HomePage.tsx";
import Layout from "./pages/Layout.tsx";
import ProjectsPage from "./pages/main-pages/ProjectsPage.tsx";
import FrightlessBirdsBlog from "./pages/blogs/FrightlessBirdsBlog.tsx";
import ContactPage from "./pages/main-pages/ContactPage.tsx";
import MeerMomoBlog from "./pages/blogs/MeerMomoBlog.tsx";
import HogidBlog from "./pages/blogs/HogidBlog.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "projects",
                element: <ProjectsPage />,
            },
            {
                path: "projects/frightlessbirds",
                element: <FrightlessBirdsBlog />
            },
            {
                path: "projects/meermomo",
                element: <MeerMomoBlog />
            },
            {
                path:"projects/hogid",
                element: <HogidBlog />
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
