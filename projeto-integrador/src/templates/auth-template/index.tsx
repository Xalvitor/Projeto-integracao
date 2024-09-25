import {PropsWithChildren, useEffect} from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useLocation } from "react-router-dom";

type AuthTemplateProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplateProps){
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname]);
    return(
        <div className="min-h-screen flex flex-col">
            <div className="bg-primary flex justify-between p-2">  
                <h1 className="text-white text-[30px] font-bold">Unybay</h1>
                <div> </div>
            </div>
            <div className="flex flex-1 flex-col px-[10%] py-[20px] justify-center">
            {props.children}
            </div>

            <Footer/>
        </div>

    )
}