import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";

const route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
])
export default route;