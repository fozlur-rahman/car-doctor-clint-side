import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    console.log(service);
    const { _id, img, price, title } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl rounded-lg">
                <img className='rounded p-6 h-52' src={img} alt="Shoes" />
                <div className="card-body font-bold">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <div className="card-actions flex justify-between ">
                        <p className='text-[#FF3811] '>Price: ${price}</p>
                        <p><Link to={`/booking/${_id}`} ><ArrowRightIcon className='w-6 text-[#FF3811] ms-auto'></ArrowRightIcon></Link> </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;