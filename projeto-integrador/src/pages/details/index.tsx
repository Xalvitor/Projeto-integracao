import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getApiProductById } from "./service";
import { useEffect, useState } from "react";
import { Product } from "./types";
import ProductLoading from "../../components/product-loading";
import { EasyZoomOnHover } from "easy-magnify";
export default function Details(){
    const toastId = "custom-id-yes"

    const notificar = (message: any) => {
        toast(`Ocorreu um erro ao buscar o produto! ${message}`,{
            toastId: toastId
        })
    };
    
    const params = useParams();
    const id = params?.id
    async function getDetailsProduct(){
        try {
            const response = await getApiProductById(id || "")
            setProduct(response.data)
            setLoadingProducts(false)
        } catch (error) {
            notificar(error)
        }
    }

    const [product, setProduct] = useState<Product>({} as Product )
    useEffect(() =>{
        getDetailsProduct();
        setLoadingProducts(true)

    }, [])

    const [isloadingProducts, setLoadingProducts] = useState(false);

    return(
        <UserTemplate>

            <ToastContainer/ >
            {isloadingProducts &&< ProductLoading />}

            <h1>Detalhes do produto</h1>
            <p className="text-[30px]">{product.name}</p>
            <div className="flex mt-10 gap-10 justify-center">
                <div className="w-[40%]">
                    <Carousel showThumbs={false} autoPlay={true} infiniteloop={true} interval={5000}>
                        <div>
                            <img src={product.url1}/>
                        </div>
                        <div>
                            <img src={product.url2}/>
                        </div>
                    </Carousel>
                </div>

                <div className="shadow-sm bg-white px-10 py-2">
                    <p>Informações do vendedor</p>
                    <p>{product.user?.name}</p>
                    <p>{product.user?.city}</p>
                    <p>{product.user?.state}</p>
                    <p>{product.user?.email}</p>
                    <p>{product.user?.phone}</p>
                </div>

                <div className="shadow-sm bg-white px-10 py-2">
                    <p className="text-[30px]">R$ {product.price}</p>
                </div>
            </div> 
            <div>
                <h3 className="mt-10 text-[20px]">Detalhes do produto</h3>
                <div dangerouslySetInnerHTML={{__html:product.description}}>
                    {}

                </div>
            </div>
        </UserTemplate>
        
    )
}