import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/graphics-design',
        element: <Category></Category>
      },
      {
        path: '/digital-markeitng',
        element: <Category></Category>
      },
      {
        path: '/programming-tech',
        element: <Category></Category>
      },
      {
        path: '/ai-models',
        element: <Category></Category>
      }
    ]
  }
])

export default Router;