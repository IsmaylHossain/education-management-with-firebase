 

import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import { useState } from "react";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Course from "../Course/Course";
const Home = () => {

    const cardsDet= useLoaderData();

    const [cards, setSelectItem] = useState(cardsDet);
    // console.log(selectItem);
    const handleSearch = (text) =>{
        const newItem = cardsDet.filter((category)=> category.components.toLowerCase().includes(text.toLowerCase()));
        setSelectItem(newItem);
    }


    return (
       <div>
        <Navbar></Navbar>
        
        <div>
        <div><Header handleSearch={handleSearch}></Header></div>
        <div className=" mt-14">
        <Course></Course>
        </div>
        <Cards cards={cards}></Cards>
       </div>
       <Footer></Footer>
       </div>
    );
};

export default Home;