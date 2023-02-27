import { createBrowserRouter } from 'react-router-dom'
import BOOK_dach from './components/BOOK_dach';



const router = createBrowserRouter([
    {
        path: '/book',
        element: <BOOK_dach />
    },
]);

export default router 
