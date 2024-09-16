import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-primary text-white py-10 px-10">
            <h2 className="text-[22px] font-bold mb-5">Unybay</h2>
            <p className="text-center">Unyleya Educacional | todos os direitos reservados</p>
            <div className="flex justify-center gap-2 mt-[20px]">
                <a href="https://br.linkedin.com/" className="cursor-pointer"> <FaLinkedin /></a>
                <a href="https://www.facebook.com/" className="cursor-pointer"> <FaFacebook /></a>
           


            </div>
        </footer>
    )
}