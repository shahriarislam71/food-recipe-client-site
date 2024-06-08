import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";
import VegetablesRecipe from "../component/Others Pages/vegetables part/VegetablesRecipe";
import BeefRecipe from "../component/Others Pages/beefrecipe/BeefRecipe";
import ChickenRecipe from "../component/Others Pages/chickenRecipe/ChickenRecipe";
import DesertRecipe from "../component/Others Pages/desertRecipe/DesertRecipe";
import ChefRecipe from "../component/Home/Home/chefRecipe/ChefRecipe";
import Login from "../component/Others Pages/Login/Login";
import Register from "../component/Others Pages/Register/Register";
import Privateroute from "./Privateroute";
import Blog from "../component/Others Pages/BLog/Blog";
// import ChefData from "../component/Home/Home/ChefData";

const route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch("https://food-recipe-server-site-project.vercel.app/data")
                
            },
            {
                path : "vegetables",
                element : <VegetablesRecipe></VegetablesRecipe>,
                loader : () => fetch("https://food-recipe-server-site-project.vercel.app/vegetablesrecipe")
            },
            {
                path : "beef",
                element : <BeefRecipe></BeefRecipe>,
                loader : () =>fetch("https://food-recipe-server-site-project.vercel.app/beefrecipe")
            },
            {
                path : 'chicken',
                element : <ChickenRecipe></ChickenRecipe>,
                loader : () =>fetch("https://food-recipe-server-site-project.vercel.app/chickenrecipe")
            },
            {
                path : 'dessert',
                element : <DesertRecipe></DesertRecipe>,
                loader : ()=>fetch("https://food-recipe-server-site-project.vercel.app/dessertrecipe")
            },
            {
                path : 'chefdata/:id',
                element : <Privateroute><ChefRecipe></ChefRecipe></Privateroute>,
                loader : ({params})=>fetch(`https://food-recipe-server-site-project.vercel.app/data/${params.id}`)
            },
            {
                path : "blog",
                element : <Blog></Blog>
            }
        ]
    },
    {
        path : 'login',
        element : <Login></Login>
    },
    {
        path : "register",
        element : <Register></Register>
    }
])
export default route;