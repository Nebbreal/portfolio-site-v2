import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import './index.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Home from "./pages/main-pages/Home.tsx";
import Layout from "./pages/Layout.tsx";
import Projects from "./pages/main-pages/Projects.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
