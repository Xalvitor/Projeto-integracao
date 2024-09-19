import { useNavigate } from "react-router-dom";
import img_product from "../../assets/products.jfif";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Modal from 'react-modal';
import { useState } from "react";

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


export default function CardProductAdmin(){
    const [modalIsOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    return(
        <div>
            <button  className="shadow-md rounded-md p-6 flex flex-col justify-center items-center">
                <h1 className="text-center">Nome do Produto</h1>
                <img src={img_product} className="w={100px} mt-2"/>
                <div className="flex items-end flex-row">
                    <div className="">
                    <p className="w-full">Amazon</p>
                    <p className="w-full mt-3 text-[25px]">R$ 799,99</p>
                    </div>

                    <div className="ml-2 flex flex-col gap-1">
                        <button onClick={() => alert("ok")}>
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
                <button className="bg-primary text-white px-8 py-2 rounded-lg">Sim</button>
                <button onClick={() => setIsOpen(true)} className="bg-white text-primary border border-primary px-8 py-2 rounded-lg">Não</button>
            </div>

            </Modal>
        </div>

    )
}