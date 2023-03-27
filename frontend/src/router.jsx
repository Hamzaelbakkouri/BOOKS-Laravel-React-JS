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
import Create_G from './components/Create_G';
import User_G from './views/User_G';
import Categorie from './views/Categorie';


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
            path: '/usergroups',
            element: <User_G />
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
            path: '/addGroup',
            element: <Create_G />
        },
        
        {
            path: '/updatebook',
            element: <UpdateBook />
        },

        {
            path: '/Books_D',
            element: <Books_D />
        },

        {
            path: '/cat_D',
            element: <Categorie />
        },

        {
            path: '*',
            element: <NotFound />
        },
    ]);

export default router
