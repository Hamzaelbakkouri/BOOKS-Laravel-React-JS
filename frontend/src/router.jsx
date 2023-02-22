import { createBrowserRouter, Navigate } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout';
import Guestlayout from './components/Guestlayout';
import Dashboard from './views/Dashboard';
import Home from './views/home';
import Login from "./views/login";
import NotFound from "./views/NotFound";
import Register from "./views/register";
import Users from "./views/users";

const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/users'} />
            },
            {
                path: '/Dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    {
        path: '/',
        element: <Guestlayout />,
        children: [
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/home',
                element: <Home />
            },
        ]
    },

    {
        path: '*',  
        element: <NotFound />
    },
])

export default router
