import api from "../../pages/services/api.ts";

export async function removeApiProduct(id: string, token:string){
    return await api.delete(`/products/${id}`,{
        headers: 
        {Authorization: token},
    })
}
 