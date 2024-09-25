import { AxiosResponse } from "axios";
import api from "../services/api";
import { Product } from "./types.ts";


export async function getApiAllRecentProducts():Promise<AxiosResponse<Product[], any>>{
    return await api.get("/products/recents-all")
}
