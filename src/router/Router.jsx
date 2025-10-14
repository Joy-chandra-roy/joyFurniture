import { createBrowserRouter } from "react-router";
import Main from "../components/layout/Main";
import "./../index.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"",
        element: <h1 className="text-6xl text-red-500">Hi</h1>
      }
    ]
  },
]);

export default router;