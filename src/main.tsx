import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import routes from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='bg-black min-h-screen w-full'>
    <React.StrictMode>
     <RouterProvider router={routes} />
  </React.StrictMode>
  </div>
  ,
)
