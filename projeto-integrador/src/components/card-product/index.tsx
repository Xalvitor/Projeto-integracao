import { useNavigate } from "react-router-dom";
import img_product from "../../assets/products.jfif";

export default function CardProduct(){
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate("/products/details")} className="shadow-md rounded-md p-10 flex flex-col justify-center items-center">
            <h1 className="text-center">Nome do Produto</h1>
            <img src={img_product} className="w={100px} mt-2"/>
            <p className="w-full">Amazon</p>
            <p className="w-full mt-3 text-[25px]">R$ 799,99</p>
        </button>
    )
}