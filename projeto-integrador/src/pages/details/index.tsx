import { Carousel } from "react-responsive-carousel";

import Carousel1 from "../../assets/carousel1.jpg";
import UserTemplate from "../../templates/user-template";
export default function Details(){
    return(
        <UserTemplate>

            <h1>Details</h1>
            <p className="text-[30px]">Echo Dot (8ª Geração)</p>
            <div className="flex mt-10 gap-10 justify-center">
                <div className="w-[40%]">
                    <Carousel showThumbs={false} autoPlay={true} infiniteloop={true} interval={5000}>
                        <div>
                            <img src={Carousel1} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                        </div>
                        <div>
                            <img src={Carousel1} hstyle={{width: '100%', height: 'auto',  objectFit: 'cover'}} />
                        </div>
                        <div>
                            <img src={Carousel1} style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </Carousel>
                </div>

                <div className="shadow-sm bg-white px-10 py-2">
                    <p>Informações do vendedor</p>
                    <p>Nome do vendedor</p>
                    <p>Cidade do vendedor</p>
                    <p>E-mail</p>
                    <p>Número de telefone</p>
                </div>

                <div className="shadow-sm bg-white px-10 py-2">
                    <p className="text-[30px]">R$ 799,00</p>
                </div>
            </div> 
            <div>
                <h3 className="mt-10 text-[20px]">Detalhes do produto</h3>
                <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id finibus ante. Sed sit amet felis eget quam gravida mattis sit amet non dolor.
                Quisque quis risus pretium, auctor enim ut, molestie lorem. Proin dignissim dolor nec sapien consequat finibus. Fusce dignissim porttitor diam vel egestas.
                Maecenas vulputate sapien ex, ut pharetra orci fringilla sit amet. Quisque mauris nisi, commodo id mauris tincidunt, dictum laoreet ligula. Proin orci risus,
                eleifend at pretium non, tempor quis est. Maecenas nec nunc in sapien sollicitudin varius ac ut magna. Aliquam erat volutpat. Sed posuere, nulla ac pellentesque
                tempus, nulla dui rhoncus purus, a ultrices felis arcu semper urna. Proin vitae nibh mi. Nunc maximus, risus lobortis placerat iaculis, dolor nunc scelerisque nibh,
                sed finibus eros urna nec libero. Donec tempor elit id lectus volutpat, vitae vulputate dolor semper.
                </p>
                <p className="mt-10">
                Nam in ante augue. Suspendisse a tincidunt magna, sed finibus libero. In dignissim porttitor magna, sed interdum ipsum maximus id. Mauris ac nunc elit.
                Etiam in metus ut tellus eleifend gravida. Nam luctus ligula quis lacus interdum suscipit. Curabitur pharetra mauris dolor. Nunc ultricies elementum tristique.
                Proin vehicula venenatis luctus. Mauris vel interdum quam. Nunc ac dolor quis magna rhoncus hendrerit nec id ex. Vestibulum tempor enim nec metus placerat pharetra.
                Aenean sagittis iaculis blandit. Sed sit amet porta tellus. Suspendisse vitae ligula a felis dignissim luctus at ut nulla.
                </p>
            </div>
        </UserTemplate>
        
    )
}