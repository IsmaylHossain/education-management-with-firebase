import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";
import Navbar from "../../pages/Shared/Navbar/Navbar";



const CardDetails = () => {

   

    const [cardDetails, setCardDetails] = useState({});

    const {id} = useParams();

    const cardDetail = useLoaderData();

   useEffect(()=> {
        const findCard = cardDetail?.find((cardDetails)=>cardDetails.id== id)
     

        setCardDetails(findCard)
   }, [id,cardDetail])

   console.log(cardDetails);

    return (
        <div><div><Navbar></Navbar></div>
        <div>
            
           <CardDetail cardDetails={cardDetails}></CardDetail>
        </div></div>
    );
};


export default CardDetails;