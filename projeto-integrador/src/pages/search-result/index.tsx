import { useParams } from "react-router-dom";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProductsByName } from "./services";
import { useEffect, useState } from "react";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { toast, ToastContainer } from "react-toastify";

export default function SearchProducts(){
    const toastId = "custom-id-yes"
    const notificar = (message: any) => {
        toast(`Ocorreu um erro ao buscar o produto! ${message}`,{
            toastId: toastId
        })
    };

    const params = useParams();

    const nameProduct = params?.product

    const [allProducts, setAllproducts] = useState<Product[]>([])
    const [isloadingProducts, setLoadingProducts] = useState(false);

    async function getProductsByName(){
        try{
            const response = await getApiAllProductsByName(nameProduct ?? "");
            setAllproducts(response.data);
            console.log(response)
            setLoadingProducts(false);

        }catch(error){
            notificar(error.message);
        }
    }
    useEffect(() =>{
        setLoadingProducts(true);
        getProductsByName();
        console.log(allProducts)
    }, [])
    return(
        <UserTemplate>
            <ToastContainer/ >
            <h1>Search products</h1>

            <h1>List products</h1>
            {isloadingProducts &&< ListLoading/>}
            <div className="grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
            {allProducts.map((product) =>(
                <CardProduct key={product._id} 
                name={product.name}
                img={product.url1}
                manufacturer={product.manufacturer}
                price={product.price}/>
            ))
            }
            <p>Total: {allProducts.length}</p>
            </div>
        </UserTemplate>
    )
}