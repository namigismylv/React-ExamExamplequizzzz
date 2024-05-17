import Add from "../Pages/Admin/Add/Add";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Products from "../Pages/Admin/Products/Products";
import Basket from "../Pages/Site/Basket/Basket";
import Details from "../Pages/Site/Details/Details";
import Home from "../Pages/Site/Home/Home";
import SiteRoot from "../Pages/Site/SiteRoot";

const ROUTES = ([
    {
        path: "/",
        element: <SiteRoot />,
        children: [

            {
                path: "",
                element:<Home/>
            },
            {
                path: "basket",
                element:<Basket/>
            },
            {
                path:"detail/:id",
                element:<Details/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {    
                path:"",
                element:<Products/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }

]
)
export default ROUTES