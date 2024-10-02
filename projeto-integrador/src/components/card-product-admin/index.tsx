import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Modal from 'react-modal';
import { useState } from "react";
import { removeApiProduct } from "./services";
import { CardProps } from "./type";
import { toast, ToastContainer } from "react-toastify";
import { getApiMyProducts } from "../../pages/user-products/service";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useNavigate } from "react-router-dom";

const customStyles = {
    overlay:{
        background: "rgba(0,0,0,0.7)"
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');


export default function CardProductAdmin(props: CardProps){
    const toastId = "custom-id-yes"
    const notificar = (message: any) => {
        toast(`Ocorreu um erro ao buscar o produto! ${message}`,{
            toastId: toastId
        })
    };
    const notificarSucesso = () => {
        toast("Produto foi removido com sucesso!",{
            toastId: toastId
        })
    };

    const navigate = useNavigate();
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const {token} = useAuthSessionStore()

    async function removerProduct(){
        try{
            await removeApiProduct(props._id, token) 
            const response = await getApiMyProducts(token);
            props.setMyProducts(response.data)
            notificarSucesso();
            setIsOpen(false)
        }catch(error){
            console.log(token)
            notificar(error)
        }
    }
    return(
        <div>
            <ToastContainer/ >

            <button  className="shadow-md rounded-md p-6 flex flex-col justify-center items-center">
                <h1 className="text-center">{props.name}</h1>
                <img src={props.img} className="w={100px} mt-2"/>
                <div className="flex items-end flex-row">
                    <div className="">
                    <p className="w-full">{props.manufacturer}</p>
                    <p className="w-full mt-3 text-[25px]">R$ {props.price}</p>
                    </div>

                    <div className="ml-2 flex flex-col gap-1">
                        <button onClick={() => navigate(`/form-product-edit/${props._id}`)}>
                        <AiOutlineEdit size={25}/>

                        </button>
                        <button onClick={() => setIsOpen(true)}>

                        <AiOutlineDelete size={25} />
                        </button>
                    </div>
                </div>
            </button>

            <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <h1 className="text-[20px] font-bold mb-2">Excluir produto</h1>
            <p>Deseja realmente excluir esse produto?</p>
            <div className="flex justify-center gap-4 mt-4">
                <button onClick={removerProduct} className="bg-primary text-white px-8 py-2 rounded-lg">Sim</button>
                <button onClick={() => setIsOpen(false)} className="bg-white text-primary border border-primary px-8 py-2 rounded-lg">Não</button>
            </div>

            </Modal>
        </div>

    )
}