import { useNavigate } from "react-router-dom";
import { CardProps } from "./types";



export default function CardProduct(props: CardProps){
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(`/products/details/${props.id}`)} className="shadow-md rounded-md p-10 max-w-[260px] m-4 flex flex-col justify-center items-center">
            <h1 className="text-center">{props.name}</h1>
            <img src={props.img} className="w={100px} mt-2"/>
            <p className="w-full">{props.manufacturer}</p>
            <p className="w-full mt-3 text-[25px]">R$ {props.price}</p>
        </button>
    )
}