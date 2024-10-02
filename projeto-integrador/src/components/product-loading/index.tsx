import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ListLoading(){

    return(
        <div className='flex justify-between mt-2 flex-wrap'>

                    <div className="shadow-md rounded-md p-10 m-4 flex flex-col justify-center items-center">
                    <Skeleton width={800} height={600} />
                    <div className='mt-10'>
                    <Skeleton width={800} height={150} />
                    </div>
                    </div>


        </div>



    )
}