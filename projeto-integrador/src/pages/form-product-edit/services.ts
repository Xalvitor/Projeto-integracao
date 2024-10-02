import { AxiosResponse } from "axios";
import api from "../services/api";
import { ProductForm } from "./types";
import { Product } from "../dashboard/types";

export async function editApiProduct(values: ProductForm, token: string, id: string){
    return await api.put(`/products/${id}`,{
        name: values.name,
        manufacturer: values.manufacturer,
        category: values.category,
        price: values.price,
        url1: values.url1,
        url2: values.url2,
        description: values.description,

    },
    {
        headers: {
            Authorization: token,
        }
    })
}
