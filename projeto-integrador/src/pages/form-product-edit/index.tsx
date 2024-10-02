
import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AdminTemplate from "../../templates/admin-template";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProductForm } from "./types";
import { editApiProduct } from "./services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { getApiProductById } from "../details/service";

const schemaValidation = Yup.object().shape({
    name:  Yup.string().required("O campo é obrigatório"),
    manufacturer:  Yup.string().required("O campo é obrigatório"),
    category:  Yup.string().required("O campo é obrigatório"),
    price:  Yup.number().required("O campo é obrigatório"),
    url1: Yup.string().required("O campo é obrigatório"),
    url2: Yup.string().required("O campo é obrigatório"),

})

export default function FormProductEdit(){
    const params = useParams()
    const id = params?.id || "";
    const navigate = useNavigate();
    async function getProductById(){
        try {
            const response = await getApiProductById(id)
            const productResponse = response.data
            setProduct({
                price:productResponse.price,
                category:productResponse.category,
                url1:productResponse.url1,
                url2:productResponse.url2,
                manufacturer:productResponse.manufacturer,
                name:productResponse.name,
                description: ""
            });
            setQuillValue(productResponse.description)
        } catch (error) {
            console.log(id)
            notificarBusca(error)
        }
    }
    const [product, setProduct] = useState({
        price: 0,
        category: "",
        description : "",
        manufacturer : "",
        name : "",
        url1 : "",
        url2 : "",
    })
    const toastId = "custom-id-yes"
    const notificar = (message: any) => {
        toast(`Não foi possivél cadastrar, ${message}`,{
            toastId: toastId
        })
    };
    const notificarBusca = (message: any) => {
        toast(`Não foi possivél encontra o produto, ${message}`,{
            toastId: toastId
        })
    };
    const editado = () => {
        toast(`Produto foi editado`,{
            toastId: toastId
        })
    };
    const {token} = useAuthSessionStore()

    const [quillValue, setQuillValue] = useState('');

    const {register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors},
        } = useForm<ProductForm>({resolver:yupResolver(schemaValidation),
            defaultValues: product,
            values: product
        })
; 

    useEffect(() =>{
        getProductById();
    }, [])

    useEffect(() =>{
        setValue('description', quillValue);
    }, [quillValue, setValue])

        async function editProduct(values: ProductForm){
            try{  
                console.log(token)
                const response = await editApiProduct(values, token, id)
                editado();
                getProductById();

            }catch(error){
                console.log(token)
                notificar(error.message);
            }
        }

    return(
        <AdminTemplate>
            <ToastContainer/ >
            <form onSubmit={handleSubmit(editProduct)}>

                <h1 className="text-[25px] mb-4">Novo Produto</h1>
                <div className="flex gap-2">

                    <div className="flex-1">
                        <input
                        className="w-full border-2 h-[40px] px-2 rounded-md"
                        placeholder="Nome do produto"
                        {...register('name')}/>
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
                        placeholder="Digite o url1"
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
                    value={quillValue}
                    onChange={setQuillValue} />
                    <div className="flex justify-end gap-4 mt-4">
                        <button className="bg-primary text-white px-8 py-2 rounded-lg">Sim</button>
                        <button onClick={() => navigate("/my-products")} className="bg-white text-primary border border-primary px-8 py-2 rounded-lg">Não</button>
                    </div>


            </form>
        </AdminTemplate>
        
    )
}