import { createBrowserRouter } from "react-router";
import Main from "../components/layout/Main";
import "./../index.css"
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Shope from "../pages/shope/Shope";
import Contact from "../pages/contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/shop",
        element:<Shope/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);

export default router;