import CardProduct from "../../components/card-product";
import { LuGamepad2 } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { AiFillCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from "../../assets/carousel1.jpg"
import UserTemplate from "../../templates/user-template";
import { Link, useNavigate } from "react-router-dom";
import { getApiRecentProducts, getApiRecommendedProducts } from "./services";
import { useEffect, useState } from "react";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError, HttpStatusCode, isAxiosError } from "axios";

const itemsCategoy = [
    {
        id: 0,
        title: "Jogos",
        icon: <LuGamepad2  size={30} color="#555"/>
    },
    {
        id: 1,
        title: "Roupas",
        icon: <GiClothes size={30} color="#555"/>
    },
    {
        id: 2,
        title: "Veículos",
        icon: <AiFillCar size={30} color="#555"/>
    },
    {
        id: 4,
        title: "Ferramentas",
        icon: <FaTools size={30} color="#555"/>
    },
    {
        id: 5,
        title: "Comidas",
        icon: <IoFastFoodOutline size={30} color="#555"/>
    },
    {
        id: 5,
        title: "Presentes",
        icon: <AiOutlineGift size={30} color="#555"/>
    },
    {
        id: 5,
        title: "Outros",
        icon: <AiOutlineSync size={30} color="#555"/>
    },
]
export default function Home(){

    const toastId = "custom-id-yes"
    const notificar = (message: any) => {
        toast(`Ocorreu um erro ao buscar os produtos recentes! ${message}`,{
            toastId: toastId
        })
    };


    const navigate = useNavigate()  

    const [recentProducts, setRecentProducts] = useState<Product[]>([])
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([])

    const [inputSearch, setInputSearch] = useState("")

    async function getRecentProducts(){
        try{
            setIsLoadingRecentsProducts(true)
            const response = await getApiRecentProducts()

            setRecentProducts(response.data)

            setIsLoadingRecentsProducts(false)

        }catch(error){
            notificar(error.message)
        }
    }


    async function getRecommendedProducts(){
        try{
            setIsLoadingRecommendedProducts(true)
            const response = await getApiRecommendedProducts()

            setRecommendedProducts(response.data)

            setIsLoadingRecommendedProducts(false)
        }catch(error){
            notificar(error.message);
        }
    }

    const [isLoadingRecentsProducts, setIsLoadingRecentsProducts] = useState(false)
    const [isLoadingRecommendedProducts, setIsLoadingRecommendedProducts] = useState(false)

    useEffect(() =>{
        getRecentProducts();
    }, [])
    useEffect(() =>{
        getRecommendedProducts();
    }, [])
    return(
      <UserTemplate>
                <ToastContainer/ >
            <div className="max-w-[70%] self-center mx-auto">
                <Carousel showThumbs={false} autoPlay={true} infiniteloop={true} interval={5000}>
                    <div>
                        <img src={carousel1} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                    <div>
                        <img src={carousel1} hstyle={{width: '100%', height: 'auto',  objectFit: 'cover'}} />
                    </div>
                    <div>
                        <img src={carousel1} style={{width: '100%', height: 'auto'}}/>
                    </div>
                </Carousel>
                <div className="flex flex-row h-[45px] rounded-md border-2 items-center mt-10">
                <input className="flex-1 h-full p-3" placeholder="Estou buscando por..."
                onChange={(event) => setInputSearch(event.target.value)}/>
                <button onClick={() => navigate(`/products/search/${inputSearch}`)} className="px-4">
                    <IoSearch size={30}/>
                </button>

            </div>
            </div>

            <h2 className="mt-[50px]">Itens recentes</h2>
            {isLoadingRecentsProducts &&< ListLoading/>}
            <div className="flex flex-wrap">
                {

                        recentProducts.map((product) => (
                            <CardProduct
                            key ={product._id}
                            name={product.name}
                            img={product.url1}
                            manufacturer={product.manufacturer}
                            price={product.price}
                            />
                        ))
                    
                }

            </div>
            <Link to={"/all-recent-products"}>
                <p className="mt-4"> Ver todos os produtos recentes</p>
            </Link>

            <div className="bg-primary p-10 rounded-lg mt-[50px]">
                <h2 className="text-white text-[20px] mb-5">Categorias</h2>

                <div className="flex justify-between px-[10%] text-[20px] mb-5">

                    {itemsCategoy.map((category, index) =>(
                        <button key={index} onClick={() => navigate("/products/search")} className="flex flex-col justify-center items-center">
                            
                            <div className="bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center">
                                {category.icon}
                            </div>
                            <span className="text-white mt-2">{category.title}</span>
                        </button>
                    ))}
                
                </div>
            </div>
            <h2 className="mt-[50px]">Anuncious</h2>
            <div className="flex flex-wrap">
            {isLoadingRecommendedProducts &&< ListLoading/>}

            {
                    recommendedProducts.map((product) => (
                        <CardProduct
                        key ={product._id}
                        name={product.name}
                        img={product.url1}
                        manufacturer={product.manufacturer}
                        price={product.price}
                        />
                    ))
            }

            </div>
            <Link to="/all-products"><p className="mt-4">Ver todos os produtos</p></Link>


            </UserTemplate>
            

    )
}