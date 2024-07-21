import React from 'react';
import './App.css';
import HomePage from './compound/HomePage';
import WhoWeAre from './compound/WhoWeAre';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './compound/Navbar';
import Footer from './compound/Footer';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><HomePage/><Footer/></>
    },
    {
      path: "/WhoWeAre",
      element: <><Navbar/><WhoWeAre/><Footer/></>
    }
  ])
  return (
    <div>
      {/* <HomePage/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
