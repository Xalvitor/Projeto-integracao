import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllRecentProducts } from "./services";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { toast, ToastContainer } from "react-toastify";

export default function ListRecentProducts(){

    const toastId = "custom-id-yes"
    const notificar = (message: any) => {
        toast(`Ocorreu um erro ao buscar os produtos recentes! ${message}`,{
            toastId: toastId
        })
    };

    const [allProducts, setAllproducts] = useState<Product[]>([])
    const [isloadingRecentProducts, setLoadingRecentProducts] = useState(false);
    async function getAllRecentProducts() {
        try{
            setLoadingRecentProducts(true);
            const response = await getApiAllRecentProducts();
            setAllproducts(response.data);
            setLoadingRecentProducts(false);

        }catch(error){
            notificar(error.message);
            setLoadingRecentProducts(false);
        }
    }

    useEffect(() => {
        getAllRecentProducts();
    }, [])
    return(
        <UserTemplate>
            <ToastContainer/ >
            <h1>Itens recentes</h1>
            {isloadingRecentProducts && <ListLoading/>}
            <div className="grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
                {
                    allProducts.map((product) => (
                        <CardProduct
                        name={product.name}
                        id={product._id}
                        img={product.url1}
                        manufacturer={product.manufacturer}
                        price={product.price}
                        />
                    ))
                }

            </div>
        </UserTemplate>
    )
}