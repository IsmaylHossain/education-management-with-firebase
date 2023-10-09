import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
             
             
            <Navbar></Navbar>
            <div className="">
                 
                {/* news container */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                 
            </div>
        </div>
    );
};

export default Home;