import { createBrowserRouter } from "react-router-dom";
import getStoredCart from "../functions/getShopingCart";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import OrderReview from "../pages/OrderReview";
import Shop from "../pages/Shop";
import Root from "../layout/Root";
import Signup from "../pages/Signup";
import PrivateRoutes from "../private/PrivateRoutes";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/order",
                element: <PrivateRoutes><Order/></PrivateRoutes>,
                loader: getStoredCart
            },
            {
                path: "/order-review",
                element: <PrivateRoutes><OrderReview/> </PrivateRoutes>
            },
            {
                path: "/manage-inventory",
                element:  <PrivateRoutes><Inventory/></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign-up",
                element: <Signup/>
            },
        ]
    }
])
export default Routes