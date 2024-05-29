import React from 'react';
import Header from '../Header/Header';
import ChefData from './ChefData';
import { useLoaderData } from 'react-router-dom';
import RecipeCatagories from './recipecatagory/RecipeCatagories';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Header></Header>
            <ChefData data = {data} key={data.id}></ChefData>
            <RecipeCatagories></RecipeCatagories>
        </div>
    );
};

export default Home;