import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

export default function SearchProducts(){
    return(
        <UserTemplate>
            <h1>Search products</h1>

            <h1>List products</h1>
            <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
            {
                Array.from({length: 14}).map(() =>(
                    <CardProduct/>
                ))
            }
            <p>Total: quatro itens</p>
            </div>
        </UserTemplate>
    )
}