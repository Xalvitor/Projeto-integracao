import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();

    return(
        <footer className="bg-primary text-white py-10 px-10">
            <div className="flex">
            <h2 className="flex-1 text-[22px] font-bold mb-5">Unybay</h2>
            <button onClick={() => navigate("/talk-with-us")}><h2 className="flex-2 text-[22px] font-bold mb-5 justify-end">Fale consoco</h2></button>

            </div>

            <p className="text-center">Unyleya Educacional | todos os direitos reservados</p>
            <div className="flex justify-center gap-2 mt-[20px]">
                <a href="https://br.linkedin.com/" className="cursor-pointer"> <FaLinkedin /></a>
                
                <a href="https://www.facebook.com/" className="cursor-pointer"> <FaFacebook /></a>
            </div>

        </footer>
    )
}