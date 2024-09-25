import { AxiosResponse } from "axios";
import api from "../services/api";
import { Product } from "./types.ts";


export async function getApiAllProductsByName(nameProduct: string):Promise<AxiosResponse<Product[], any>>{
    return await api.get(`/products?name=${nameProduct}`)
}
