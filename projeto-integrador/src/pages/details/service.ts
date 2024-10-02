import { AxiosResponse } from "axios";
import api from "../services/api";
import { Product } from "./types.ts";


export async function getApiProductById(id: string):Promise<AxiosResponse<Product, any>>{
    return await api.get(`/products/${id}`)
}
 