import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ProfileLayout from "../Layout/ProfileLayout";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: async () => fetch('/fakeData/profile.json'),
        element: <Home></Home>,
      },
      {
        path: '/graphics-design',
        loader: async () => fetch('/fakeData/profile.json'),
        element: <Category></Category>
      },
      {
        path: '/digital-markeitng',
        loader: async () => fetch('/fakeData/profile.json'),
        element: <Category></Category>
      },
      {
        path: '/programming-tech',
        loader: async () => fetch('/fakeData/profile.json'),
        element: <Category></Category>
      },
      {
        path: '/ai-models',
        loader: async () => fetch('/fakeData/profile.json'),
        element: <Category></Category>
      }
    ]
  },
  {
    path: '/profile',
    element: <ProfileLayout></ProfileLayout>,
    children: [
      {
        path: '/profile/:profileId',
        element: <Profile></Profile>
      }
    ]
  }
])

export default Router;