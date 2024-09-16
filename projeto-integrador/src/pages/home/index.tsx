import CardProduct from "../../components/card-product";
import { LuGamepad2 } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { AiFillCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from "../../assets/carousel1.jpg"
import UserTemplate from "../../templates/user-template";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate()

    return(
      <UserTemplate>
        
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
                <input className="flex-1 h-full p-3" placeholder="Estou buscando por..."/>
                <button onClick={() => navigate("/products/search")} className="px-4">
                    <IoSearch size={30}/>
                </button>

            </div>
            </div>

            <h2 className="mt-[50px]">Itens recentes</h2>
            <div className="flex flex-wrap">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>

            </div>
            <p className="mt-4">Ver mais</p>

            <div className="bg-primary p-10 rounded-lg mt-[50px]">
                <h2 className="text-white text-[20px] mb-5">Categorias</h2>

                <div className="flex justify-between px-[10%] text-[20px] mb-5">

                    {itemsCategoy.map((category) =>(
                        <button onClick={() => navigate("/products/search")} className="flex flex-col justify-center items-center">
                            
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
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>

            </div>
            <p className="mt-4">Ver mais</p>
            </UserTemplate>

    )
}