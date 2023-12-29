import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store.ts';
import routes from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='bg-black min-h-screen w-full'>
    <React.StrictMode>
      <Provider store={store}>
     <RouterProvider router={routes} />
      </Provider>
  </React.StrictMode>
  </div>
  ,
)
