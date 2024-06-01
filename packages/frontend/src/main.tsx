import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Riders from './views/Riders';
import AddRider from './views/AddRider';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/riders',
      element: <Riders />,
    },
    {
      path: '/riders/add_rider',
      element: <AddRider />,
    },
  ],
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
