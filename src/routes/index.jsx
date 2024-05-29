import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";
import VegetablesRecipe from "../component/Others Pages/vegetables part/VegetablesRecipe";
import BeefRecipe from "../component/Others Pages/beefrecipe/BeefRecipe";
import ChickenRecipe from "../component/Others Pages/chickenRecipe/ChickenRecipe";
import DesertRecipe from "../component/Others Pages/desertRecipe/DesertRecipe";
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
            },
            {
                path : "vegetables",
                element : <VegetablesRecipe></VegetablesRecipe>,
                loader : () => fetch("http://localhost:5000/vegetablesrecipe")
            },
            {
                path : "beef",
                element : <BeefRecipe></BeefRecipe>,
                loader : () =>fetch("http://localhost:5000/beefrecipe")
            },
            {
                path : 'chicken',
                element : <ChickenRecipe></ChickenRecipe>,
                loader : () =>fetch("http://localhost:5000/chickenrecipe")
            },
            {
                path : 'dessert',
                element : <DesertRecipe></DesertRecipe>,
                loader : ()=>fetch("http://localhost:5000/dessertrecipe")
            }
            
        ]
    }
])
export default route;