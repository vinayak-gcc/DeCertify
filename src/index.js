import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loginpage from './Components/Loginpage';
import Verify from './Components/Verify';
import Issue from './Components/Issue';
import Register from './Components/Register';
import Certificate from './Components/Certificate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "Verify",
    element: <Verify />,
  },
  {
    path: "Issue",
    element: <Issue />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "Certificate",
    element: <Certificate />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
