import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";
// import ChefData from "../component/Home/Home/ChefData";

const route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader:()=>fetch("http://localhost:5000/data")
            }
            
        ]
    }
])
export default route;