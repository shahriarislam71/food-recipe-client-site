import React from 'react';
import "./ChefRecipeDetails.css"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

// toast.configure()

const ChefRecipeDetails = ({ data }) => {
    const { idd, recipe_photo, recipe_name, description } = data
    // console.log(idd)
    let list1 = []
    const notify = (id) => {
        console.log(list1)
        // console.log(id)
        if (!(id in list1)) {
            const btnId = document.getElementById(`${idd}`)
            btnId.disabled = true
            list1.push(id)
            toast.success("Items added in the favourite list")
            
        }
        

    }
    return (
        <div>
            <div className='border rounded-lg shadow-2xl animation'>
                <img className='h-96 rounded' src={recipe_photo} alt="" />
                <p className='mt-3 p-2 text-lg font-bold textdecoration'>Name  : {recipe_name}</p>
                <p className='mt-2 p-2 font-medium'>Description : {description}</p>
                <button onClick={() => notify(idd)} id = {`${idd}`} className='bg-rose-500 px-8 py-5 mt-3 mb-3 rounded-lg ms-2 '>Favourite</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ChefRecipeDetails;