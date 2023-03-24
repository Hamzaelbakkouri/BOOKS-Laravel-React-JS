import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Register from "./views/Register";
import Users from "./views/Users";
import Gallery from './views/Gallery';
import Profile from './views/Profile';
import Groups from './views/Groups';
import Books_D from './views/Books_D';
import Chat from './views/Chat';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';


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
            path: '/groups',
            element: <Groups />
        },

        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/chat',
            element: <Chat />
        },
        {
            path: '/addbook',
            element: <AddBook />
        },
        {
            path: '/updatebook',
            element: <UpdateBook />
        },

        {
            path: '*',
            element: <NotFound />
        },
        {
            path: '/Books_D',
            element: <Books_D />
        },
    ]);

export default router
