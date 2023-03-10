import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Details from "../../Pages/Service/Details";

const { createBrowserRouter } = require("react-router-dom")

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/details',
        element:<Details></Details>
      }
    ]

  }
]);

export default router;
