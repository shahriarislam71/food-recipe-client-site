import React from 'react';
import './Header.css'

const Header = () => {
    console.log('rafi')
    return (
        <div>
            <div className="section-top">
                <div className="contents">
                    <h1 className='text-neutral-50 font-extrabold text-3xl content'>Bangladeshi Food Recipies</h1>
                    <div className="container">
                        <div className="word1 word font-black text-6xl text-rose-600">Bangladeshi Bhorta</div>
                        <div className="word2 word font-black text-6xl text-rose-600">Dhoi</div>
                        <div className="word3 word font-black text-6xl text-rose-600">Shorshe Ilish</div>
                        <div className="word4 word font-black text-6xl text-rose-600">Fuska</div>
                        <div className="word5 word font-black text-6xl text-rose-600">Hallem</div>
                        <div className="word6 word font-black text-6xl text-rose-600">Panta Bhat</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;