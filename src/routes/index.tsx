import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { AddNewBook } from '../page/AddNewBook';
import { Home } from '../page/Home';
import { Login } from '../page/Login';
import { Signup } from '../page/Signup';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/add-new-book',
        element: <AddNewBook></AddNewBook>
    },
])

export default routes;