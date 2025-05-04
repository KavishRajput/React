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
import { Signin } from './Pages/Signin.jsx';
import { Login } from './Pages/Login.jsx';
import { Custom_Branding } from './Pages/Services_Sidebar/Custom_Branding.jsx';
import { Emailsupport } from "./Pages/Services_Sidebar/Emailsupport.jsx"
import { Faq } from './Pages/Services_Sidebar/Faq.jsx';
import { Fast_Shipping } from './Pages/Services_Sidebar/Fast_Shipping.jsx';
import { Inventary_Management } from './Pages/Services_Sidebar/Inventary_Management.jsx';
import { Livechat } from './Pages/Services_Sidebar/Livechat.jsx';
import { Product_Sourcing } from './Pages/Services_Sidebar/Product_Sourcing.jsx';
import { Request_callback } from './Pages/Services_Sidebar/Request_callback.jsx';
import { Support } from './Pages/Services_Sidebar/Support.jsx';
import {Toaster} from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
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
        children:[
          {
            path:"Custom_Branding",
            element: <Custom_Branding />
          },
          {
            path:"Emailsupport",
            element: <Emailsupport />
          },
          {
            path:"Faq",
            element: <Faq />
          },
          {
            path:"Fast_Shipping",
            element: <Fast_Shipping />
          },
          {
            path:"Inventary_Management",
            element: <Inventary_Management />
          },
          {
            path:"Livechat",
            element: <Livechat />
          },
          {
            path:"Product_Sourcing",
            element: <Product_Sourcing />
          },
          {
            path:"Request_callback",
            element: <Request_callback />
          },
          {
            path:"Support",
            element: <Support />
          }
        ]
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
        path: "signin",
        element: <Signin />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster  position="bottom-center"/>
  </StrictMode>,
)
