import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

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

export default function Header(){
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const {clearToken} = useAuthSessionStore();

    async function logout(){
        clearToken();
        navigate("/")
    }

     
    return(
        <div className="bg-primary flex flex-row justify-between items-center p-2">
           <button onClick={() => navigate("/")}> 
                <h1 className="text-white text-[30px] font-bold">Unybay</h1>
            </button>
            <ul className="flex gap-5 items-center text-white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Aboutus">Quem somos</Link></li>
                <button onClick={() => setIsOpen(true)} className="transition-all">
                    Sair
                </button>
                <button onClick={() => navigate("/My-products")} className="bg-white px-8 py-2 rounded-md transition-all text-secondary">
                    Anunciar
                </button>
     
            </ul>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <h1 className="text-[20px] font-bold mb-2">Confirmar logout</h1>
            <p>Deseja realmente sair?</p>
            <div className="flex justify-center gap-4 mt-4">
                <button onClick={logout} className="bg-primary text-white px-8 py-2 rounded-lg">Sim</button>
                <button onClick={() => setIsOpen(false)} className="bg-white text-primary border border-primary px-8 py-2 rounded-lg">Não</button>
            </div>

            </Modal>

        </div>
    )
}