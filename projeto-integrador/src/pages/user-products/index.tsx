import { useNavigate } from "react-router-dom";
import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";
import { getApiMyProducts } from "./service";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Product } from "./types";

export default function Userproducts(){
    const [myProducts, setMyProducts] = useState<Product[]>([])
    const toastId = "custom-id-yes"
    const notificar = (message: any) => {
        toast(`Erro ao logar, ${message}`,{
            toastId: toastId
        })
    };
    const navigate = useNavigate();
    const {token} = useAuthSessionStore()
    async function getMyProducts(){
        try{
            const response = await getApiMyProducts(token)
            setMyProducts(response.data)
        }catch(error){
            notificar(error.message)
        }
    }
    useEffect(() => {
        getMyProducts();
    }, []);
    return(
        <AdminTemplate>
            <ToastContainer/ >
            <div className="flex justify-between items-center">
                <h1>Anuncios</h1>
                <button onClick={() => navigate("/form-product")} className="text-white rounded-md bg-secondary px-8 py-2">Criar anúncio</button>
            </div> 

            <div className="grid grid-cols-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
            {myProducts.map((product) => (
                    <CardProductAdmin
                    name={product.name}
                    url1={product.url1}
                    manufacturer={product.manufacturer}
                    price={product.price}
                    _id={product._id}
                    setMyProducts={setMyProducts}
                    category={""}
                    url2={""}
                    description={""}
                    />
                ))}

            </div>
            <p className="text-right">Total: {myProducts.length} itens</p>
        </AdminTemplate>
    )
}