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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
