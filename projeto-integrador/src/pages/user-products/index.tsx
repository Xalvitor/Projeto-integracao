import { useNavigate } from "react-router-dom";
import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";

export default function Userproducts(){
    const navigate = useNavigate();
    return(
        <AdminTemplate>
            <div className="flex justify-between items-center">
                <h1>Anuncios</h1>
                <button onClick={() => navigate("/form-product")} className="text-white rounded-md bg-secondary px-8 py-2">Criar anúncio</button>
            </div>

            <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
            {
                Array.from({length: 14}).map(() =>(
                    <CardProductAdmin/>
                ))
            }

            </div>
            <p className="text-right">Total: 4 itens</p>
        </AdminTemplate>
    )
}