import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx';


const routes = createBrowserRouter([
  { path: "/" , element: <App/>,
   children: [
      {path: "/", element: <Login/>},
      {path: "/home", element: <Home/>},

      
   ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={routes} />
  </React.StrictMode>,
)