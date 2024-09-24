import React from 'react';
import './App.css';
import HomePage from './compound/HomePage';
import WhoWeAre from './compound/WhoWeAre';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './compound/Navbar';
import Footer from './compound/Footer';
import WhatWeDo from './compound/WhatWeDo';
import OurClient from './compound/OurClient';
import OurInfraAndTeams from './compound/OurInfraAndTeams';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <HomePage /> <Footer /> </>
    },
    {
      path: "/WhoWeAre",
      element: <> <Navbar /> <WhoWeAre /> <Footer /> </>
    },
    {
      path: "/WhatWeDo",
      element: <> <Navbar /> <WhatWeDo /> <Footer /> </>
    },
    {
      path: "/OurClient",
      element: <> <Navbar /> <OurClient /> <Footer /> </>
    },
    {
      path: "/OurInfraAndTeams",
      element: <> <Navbar /> <OurInfraAndTeams /> <Footer /> </>
      
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
