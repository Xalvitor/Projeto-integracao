import { AxiosResponse } from "axios";
import api from "../services/api.ts";
import { Product } from "./types.ts";


export async function getApiAllProducts():Promise<AxiosResponse<Product[], any>>{
    return await api.get("/products")
}
export async function getApiAllProductsOrdered(typeOrder:"descending" | "ascending"):Promise<AxiosResponse<Product[], any>>{
    return await api.get(`/products?order=${typeOrder}`)
}
