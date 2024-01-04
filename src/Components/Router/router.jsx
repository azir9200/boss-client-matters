import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import UserLogin from "../Pages/Users/UserLogin/UserLogin";
import RegisterUser from "../Pages/Users/RegisterUser/RegisterUser";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <UserLogin></UserLogin>
      },
      {
        path: '/register',
        element: <RegisterUser></RegisterUser>
      },
      {
        path: 'secret',
        element: <PrivateRoute> <Secret></Secret></PrivateRoute>
      },

    ]
  },
]);

export default router;