import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Pages/Home/Home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,

  }
])

export default Router;