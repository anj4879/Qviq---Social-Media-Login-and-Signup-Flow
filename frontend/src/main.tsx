import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import QRCodePage from './components/Qrcode.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Login></Login>
    ),
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/qrcode",
    element: <QRCodePage></QRCodePage>,
  },
  {
    path: "/",
    element: <App></App>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
