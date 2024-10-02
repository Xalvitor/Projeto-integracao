import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProducts, getApiAllProductsOrdered } from "./services";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { toast, ToastContainer } from "react-toastify";

export default function ListAllProducts(){
    const toastId = "custom-id-yes"
    const notificar = (message: any) => {
        toast(`Ocorreu um erro ao buscar os produtos! ${message}`,{
            toastId: toastId
        })
    };

    const [allProducts, setAllproducts] = useState<Product[]>([])
    const [isloadingRecentProducts, setLoadingRecentProducts] = useState(false);
    async function getAllRecentProducts() {
        try{
            setLoadingRecentProducts(true);
            const response = await getApiAllProducts();
            setAllproducts(response.data);
            setLoadingRecentProducts(false);

        }catch(error){
            notificar(error.message);
            setLoadingRecentProducts(false);
        }
    }
    async function getAllOrderProducts(typeOrder: "descending" | "ascending") {
        setAllproducts([]);
        try{
            setLoadingRecentProducts(true);
            const response = await getApiAllProductsOrdered(typeOrder);
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

            <h1>Todos os produtos</h1>
            <div>
                <p>Ordernar por:</p>
                <button className="text-primary" onClick={() => getAllOrderProducts("descending")}>Maior preço</button>
                <button className="text-primary" onClick={() => getAllOrderProducts("ascending")}>Menor preço</button>
            </div>
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