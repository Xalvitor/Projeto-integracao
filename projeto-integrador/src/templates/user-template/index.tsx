import {PropsWithChildren} from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"

type UserTemplateProps = PropsWithChildren & {};

export default function UserTemplate(props: UserTemplateProps){
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-1 flex-col px-[10%] py-[20px]">
            {props.children}
            </div>

            <Footer/>
        </div>

    )
}