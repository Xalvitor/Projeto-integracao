import AuthTemplate from "../../templates/auth-template";
import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";

type RegisterForm = {
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    password: string;
}

const schemaValidation = Yup.object().shape({
    name:  Yup.string().required("O campo é obrigatório"),
    phone:  Yup.string().required("O campo é obrigatório"),
    city:  Yup.string().required("O campo é obrigatório"),
    state:  Yup.string().required("O campo é obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("O campo é obrigatório"),
    password: Yup.string().min(4, "A senha precisa ter 4 caracteres").required("O campo é obrigatório"),
})

export default function Register(){
    const {register,
        handleSubmit,
        formState: {errors},
        } = useForm<RegisterForm>({resolver:yupResolver(schemaValidation)}); 

    function createUser(values: RegisterForm){
        console.log(values);
    }

    const navigate = useNavigate()

    return(
        <AuthTemplate>
            <form className="bg-gray-400 p-5 rounded-lg w-[400px] self-center"
            onSubmit={handleSubmit(createUser)}>
                <h1 className="text-center text-[25px] font-bold ">Unybay</h1>
                <p className="text-center my-3">Cadastre-se</p>

                <div>

                    <input
                    className="w-full border-2 h-[40px] px-2 rounded-md"
                    placeholder="Digite seu nome"
                    {...register("name")}/>
                    {
                        errors.name && <span className="text-red-700">{errors.name.message}</span>
                    }

                </div>

                <div>

                <input
                className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                placeholder="Digite seu e-mail"
                {...register("email")}/>
                {
                    errors.email && <span className="text-red-700">{errors.email.message}</span>
                }

                </div>

                <div>

                    <input
                    className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                    placeholder="Digite seu telefone"
                    {...register("phone")}/>
                    {
                        errors.phone && <span className="text-red-700">{errors.phone.message}</span>
                    }

                </div>
                
                <div>

                <input
                className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                placeholder="Digite sua cidade"
                {...register("city")}/>
                {
                    errors.city && <span className="text-red-700">{errors.city.message}</span>
                }

                </div>

                <div>

                    <input
                    className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                    placeholder="Digite seu estado"
                    {...register("state")}/>
                    {
                        errors.state && <span className="text-red-700">{errors.state.message}</span>
                    }

                </div>
                

                <div>

                <input 
                className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                placeholder="Digite sua senha"
                {...register("password")}/>
                {
                    errors.password && <span className="text-red-700">{errors.password.message}</span>
                }
                </div>  


                <button className="mt-4 bg-primary w-full h-[40px] text-white" type="submit">Cadastrar</button>


            </form>
        </AuthTemplate>
        
    )
}