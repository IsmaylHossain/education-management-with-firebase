
import { useState } from "react";
import PropTypes from 'prop-types';

const Header = ({handleSearch}) => {

    const [search , setSearch] = useState("");
    const handleInput = (e) =>{
        setSearch(e.target.value);
        // console.log(setSearch.target)
    }
    const handleSubmit = () =>{
        handleSearch(search);
    }



    return (
        <div className="relative">
            <div className="top-0 -z-50">
                <img className="w-screen h-96" src="https://i.ibb.co/2M6X255/call-to-action.jpg" alt="Banner"/>
                    <div className="absolute inset-0 bg-white bg-opacity-[50%] flex flex-col items-center   md:justify-center ">
                        <h1 className="text-black text-xl md:text-2xl lg:text-5xl font-bold p-5">I Grow By Helping People In Need</h1>
                        <div className="join">
                             
                            
                        </div>
                        
                    </div>
                    
            </div>
            
        </div>
    );
};

 

export default Header;