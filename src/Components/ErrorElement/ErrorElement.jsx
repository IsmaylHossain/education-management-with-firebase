import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="flex justify-center mx-auto mt-60 rounded-2xl p- bg-slate-400 w-72 h-60 my-auto items-center">
            <h2 className="text-center ">Oppppps!!!!!</h2>
            <Link to='/'><button className=" btn btn-primary">Go back</button></Link>
        </div>
    );
};

export default ErrorElement;