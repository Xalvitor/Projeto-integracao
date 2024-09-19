
import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";
import AdminTemplate from "../../templates/admin-template";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

type FormProduct = {
    name: string;
    manufacturer: string;
    category: string;
    price: number;
    url1: string;
    url2: string;
}

const schemaValidation = Yup.object().shape({
    name:  Yup.string().required("O campo é obrigatório"),
    manufacturer:  Yup.string().required("O campo é obrigatório"),
    category:  Yup.string().required("O campo é obrigatório"),
    price:  Yup.number().required("O campo é obrigatório"),
    url1: Yup.string().required("O campo é obrigatório"),
    url2: Yup.string().required("O campo é obrigatório"),
})

export default function FormProduct(){
    const [value, setValue] = useState('');

    const {register,
        handleSubmit,
        formState: {errors},
        } = useForm<FormProduct>({resolver:yupResolver(schemaValidation)}); 

    function createProduct(values: FormProduct){
        console.log(values);
    }

    return(
        <AdminTemplate>
            <form onSubmit={handleSubmit(createProduct)}>

                <h1 className="text-[25px] mb-4">Novo Produto</h1>
                <div className="flex gap-2">

                    <div className="flex-1">
                        <input
                        className="w-full border-2 h-[40px] px-2 rounded-md"
                        placeholder="Nome do produto"
                        {...register("name")}/>
                        {
                            errors.name && <span className="text-red-600">{errors.name.message}</span>
                        }
                    </div>  

                    <div className="flex-1">
                    <input
                    className="w-full border-2 h-[40px] px-2 rounded-md"
                    placeholder="Nome do fabricante"
                    {...register("manufacturer")}/>
                    {
                        errors.manufacturer && <span className="text-red-600">{errors.manufacturer.message}</span>
                    }
                    </div>

                </div>

                <div className="flex gap-2">
                    <div  className="flex-1">

                        <select
                        className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                        {...register("category")} >
                            <option disabled>Selecione uma opção</option>
                            <option>Jogos</option>
                            <option>Roupas</option>
                            <option>Veiculos</option>

                        </select>
                        {
                            errors.category && <span className="text-red-600">{errors.category.message}</span>
                        }

                    </div>
                    <div  className="flex-1">
                        <input
                        className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                        placeholder="Digite o preco"
                        {...register("price")}/>
                        {
                            errors.price && <span className="text-red-600">{errors.price.message}</span>
                        }
                    </div>
                 </div>

                    <div className="flex gap-2">

                    <div  className="flex-1 ">
                        <input 
                        className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                        placeholder="Digite sua senha"
                        {...register("url1")}/>
                        {
                            errors.url1 && <span className="text-red-600">{errors.url1.message}</span>
                        }
                        </div> 
                        <div  className="flex-1">
                        <input 
                        className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
                        placeholder="Url 1 da imagem"
                        {...register("url2")}/>
                        {
                            errors.url2 && <span className="text-red-700">{errors.url2.message}</span>
                        }
                        </div>  
                    </div>
                    <ReactQuill
                    theme="snow"
                    style={{height: 700, marginTop: 10, marginBottom: 100}}
                    value={value}
                    onChange={setValue} />
                    <div className="flex justify-end gap-4 mt-4">
                        <button className="bg-primary text-white px-8 py-2 rounded-lg">Sim</button>
                        <button onClick={() => alert("teste")} className="bg-white text-primary border border-primary px-8 py-2 rounded-lg">Não</button>
                    </div>


            </form>
        </AdminTemplate>
        
    )
}