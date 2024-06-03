import React, { useState } from 'react';
import LatestRecipeDetails from './LatestRecipeDetails';

const LatestRecipe = ({ latestdata }) => {
    // console.log(latestdata?.slice(0,5))
    const [showButton, setShowbtn] = useState(true)
    const showAllbutton = document.getElementById('showbtn')
    const showlessbutton = document.getElementById('showLess')
    const showAllbtn = () =>{
        setShowbtn(false) 
        showAllbutton.style.visibility = 'hidden'
        showlessbutton.style.visibility = 'visible'
    }
    const showLessbtn = () =>{
        setShowbtn(true)
        showlessbutton.style.visibility = 'hidden'
        showAllbutton.style.visibility = 'visible'
    }

    return (
        <div>
            <p className='text-center text-6xl font-extrabold textdecoration mt-32'>Latest Recipes</p>
            <div className='mx-2 md:mx-20 mt-10  grid-cols-1 grid md:grid-cols-3 gap-5'>
                {
                    latestdata? showButton ? latestdata.slice(0,6).map(data => <LatestRecipeDetails key={data.id} data={data}></LatestRecipeDetails>): latestdata.slice(0,12).map(data => <LatestRecipeDetails key={data.id} data={data}></LatestRecipeDetails>): ""
                }
            </div>
            <button id='showbtn' onClick={showAllbtn} className='text-white text-center px-5 py-3 bg-rose-600 rounded-lg mt-10 block mx-auto'>Show All</button>
            <button id='showLess' onClick={showLessbtn} className='text-white text-center px-5 py-3 bg-rose-600 rounded-lg mt-10 block mx-auto invisible'>Show Less</button>
        </div>
    );
};

export default LatestRecipe;