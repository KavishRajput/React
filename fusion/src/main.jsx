import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Errorpage } from './Pages/ErrorPage.jsx';
import { About } from './Pages/About.jsx';
import { Contacts } from './Pages/Contacts.jsx';
import { Services } from './Pages/Services.jsx';
import { Help } from './Pages/Help.jsx';
import { Products } from './Pages/Products.jsx';
import { Layout } from './Layout.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router';
import { Login } from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "products/:id",
        element: <Products />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
