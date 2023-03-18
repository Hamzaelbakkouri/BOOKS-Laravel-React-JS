import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Login from "./views/login";
import NotFound from "./views/NotFound";
import Register from "./views/register";
import Users from "./views/users";
import Gallery from './views/Gallery';
import BOOK_dach from './views/BOOK_dach';


const router = createBrowserRouter(
    [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Dashboard',
        element: <Dashboard />
    },
    {
        path: '/users',
        element: <Users />
    },

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

    
    {
        path: '/gallery',
        element: <Gallery />
    },

    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/Dashboard/book_dach',
        element: <BOOK_dach />
    },
]);

export default router
