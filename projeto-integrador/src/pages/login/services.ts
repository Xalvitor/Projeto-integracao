import api from "../services/api";
import { LoginForm } from "./types"

export async function auth(email: string, password: string){
    return await api.post("/auth",{
        email: email,
        password: password
    })
}
