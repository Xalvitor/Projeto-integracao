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
                <p className="mt-2">
                Nós da Dev Tech somos uma empresa de desenvolvimento focado em negócios que busca trazer inovação ao mundo dos negócios, com sites e aplicativos os
                quais buscam facilitar o processo de venda, permitindo fornecer ao mercado uma quantidade cada vez maior de diversos tipos de produto de qualidade,
                facilitando o proecesso de venda para todos, com intuito de deixar o consumidor mais satisfeito com suas compras. 
                </p>
                <h3 className="text-[20px] mt-5 ">Nossa missão </h3>
                <p className="mt-2">
                Nosso objetivo na Dev Tech é fornecer plataformas que auxiliam e satisfazer tanto o consumidor quanto vendedor, através de facilitar consumidores a encontrarem o que estão
                buscando, ou em alguns casos, achando o que o mesmo precisa, más o mesmo sequer sabe. Para isso, nós procuramos criar o melhor serviço possivél, para que todos
                 saiam satisfeitos.
                </p>
                <h3 className="text-[20px] mt-5">Nossa história </h3>
                <p className="mt-2  mb-10">
                Fundada em 2020 por Eric Oliveira, Dev Tech originalmente como um projeto simples, más graças ao suporte do público
                Dev Tech tem expandido no mercado para fornecer seus serviços a um público cada vez maior, contando com além do site, um aplicativo web, se tornando um ponto
                de referencia para vendas online.
                </p>
            </div>
        </UserTemplate>
        
    )
}