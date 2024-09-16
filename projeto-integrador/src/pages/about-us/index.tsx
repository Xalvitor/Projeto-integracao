import UserTemplate from "../../templates/user-template";

import SobreNos from "../../assets/sobre-nos.jpg";

export default function AboutUs(){
    return(
        <UserTemplate>

            <div className="flex justify-center">
                <img src={SobreNos} alt="" />
            </div>
            <div className="flex mt-10 justify-center">

                <p className="text-[30px] ">Dev Tech </p>

            </div> 
            
            <div>
                <h3 className="mt-10 text-[20px]">Sobre nós</h3>
                <p className="mt-1">
                Nós da Dev Tech somos uma empresa de desenvolvimento focado em negócios que busca trazer inovação ao mundo dos negócios, criando sites e aplicativos para auxiliar
                no processo de atingir um público cada vez maior e auxiliar no processo de vendas, permitindo fornecer ao mercado uma quantidade cada vez maior de diversos tipos
                de produto de qualidade, facilitando o proecesso de venda para os produtores e de compra para os consumidores
                </p>
                <h3 className="text-[20px] mt-3 ">Nossa missão </h3>
                <p className="mt-1">
                Nós da Dev Tech somos uma empresa de desenvolvimento focado em negócios que busca trazer inovação ao mundo dos negócios, criando sites e aplicativos para auxiliar
                no processo de atingir um público cada vez maior e auxiliar no processo de vendas.
                </p>

            </div>
        </UserTemplate>
        
    )
}