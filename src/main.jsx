// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Error from './pages/Error.jsx';
import './index.css'
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'
import Blog from './pages/Blog.jsx';
import Faq from './pages/Faq.jsx';
import BookDetails from './components/BookDetails.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/faq',
                element: <Faq />,
            },
            {
                path: '/bookdetails',
                element: <BookDetails />,
            },
            {
              path: '/*',
              element: <Error />,
          },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
