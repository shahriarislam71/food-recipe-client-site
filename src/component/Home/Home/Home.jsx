import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ChefData from './ChefData';
import { useLoaderData } from 'react-router-dom';
import RecipeCatagories from './recipecatagory/RecipeCatagories';
import LatestRecipe from './LatestRecipe/LatestRecipe';
import Footer from './Footer/Footer';

const Home = () => {
    const data = useLoaderData()
    const [latestdata, setlatestData] = useState(null)
    useEffect(()=>{
        fetch("https://food-recipe-server-site-project.vercel.app/latestrecipe")
        .then(res => res.json())
        .then(data => setlatestData(data))
    },[])
    // console.log(latestdata)
    return (
        <div>
            <Header></Header>
            <ChefData data = {data} key={data.id}></ChefData>
            <RecipeCatagories></RecipeCatagories>
            <LatestRecipe latestdata = {latestdata}></LatestRecipe>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;