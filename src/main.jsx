import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './Components/AuthLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Post from './pages/Post'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                 element: (
                    <AuthLayout authentication={true}>
                    <Home />
                    </AuthLayout>
                )
                
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                )
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                )
            },
          
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication={true}>
                        <AddPost />
                    </AuthLayout>
                )
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication={true}>
                        <EditPost />
                    </AuthLayout>
                )
            },
            {
                path: "/post/:slug",
                element: <Post />
            }

        ]
    }
])

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>

    </StrictMode>


);
