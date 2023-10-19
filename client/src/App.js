import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Search from './pages/Search';

import Header from './components/Header';
import Footer from './components/Footer';

//layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: '/', element: <Login /> },
      { path: '/home', element: <Home /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/search', element: <Search /> },
    ]

  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
};

export default App;