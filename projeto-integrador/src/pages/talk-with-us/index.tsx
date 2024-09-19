import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import UserTemplate from "../../templates/user-template";

type TalkwithusForm = {
    name: string;
    email: string;
    message: string;
}

const schemaValidation = Yup.object().shape({
    name: Yup.string().required("O campo é obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("O campo é obrigatório"),
    message: Yup.string().required("O campo é obrigatório"),

})

export default function Talkwithus(){
    const {register,
        handleSubmit,
        formState: {errors},
        } = useForm<TalkwithusForm>({resolver:yupResolver(schemaValidation)}); 

    function logar(values: TalkwithusForm){
        console.log(values);
    }

    return(
        <UserTemplate>
            <form className="border-opacity-30 p-20 pt-10 rounded-lg self-center border-2 rounded-lg mt-5 shadow-md"
            onSubmit={handleSubmit(logar)}>
                <h1 className="text-center text-[25px] font-bold text-primary">Unybay</h1>
                <p className="text-center my-3 mb-6">Fale conosco através do formulário abaixo</p>

                <div>

                <input 
                className="w-full border-2 h-[40px] px-2 rounded-md mt-3 mb-6 shadow-md"
                placeholder="Digite sua senha"
                {...register("name")}/>
                {
                    errors.name && <span className="text-red-700">{errors.name.message}</span>
                }
                </div>

                <div>

                <input
                className="w-full border-2 h-[40px] px-2 rounded-md mb-6 shadow-md"
                placeholder="Digite seu e-mail"
                {...register("email")}/>
                {
                    errors.email && <span className="text-red-700">{errors.email.message}</span>
                }

                </div>

                <div>

                <textarea
                className="w-full border-2 h-[150px] px-2 rounded-md shadow-md"
                placeholder="Escreva sua mensagem"
                {...register("message")}/>
                {
                    errors.message && <span className="text-red-700">{errors.message.message}</span>
                }


                </div>


                <button className="mt-4 bg-primary w-full h-[40px] text-white rounded-md" type="submit" onClick={() => alert("Enviado")}>Enviar</button>

            </form>
        </UserTemplate>
        
    )
}