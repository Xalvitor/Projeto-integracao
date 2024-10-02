import api from "../services/api";
import { ProductForm } from "./types";

export async function registerProduct(values: ProductForm, token: string){
    return await api.post("/products",{
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
