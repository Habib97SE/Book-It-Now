import Image from 'next/image';
import { FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { MdStar } from 'react-icons/md';

function ServiceCard() {
    return (
        <div className='bg-white p-4 rounded-xl shadow-md inline-block'>
            <div className="relative">
                <img
                    src="https://app.truelysell.com/uploads/category_images/1631721020category-08_381_286.jpg"
                    alt="Carpentry"
                    className='rounded-lg w-full'
                />
                <h2 className="absolute top-3 left-3 bg-pinkTint text-primaryColor rounded-xl py-1 px-2">
                    Carpentry
                </h2>
                <img src='https://app.truelysell.com/uploads/profile_img/1631787916.jpg' className='absolute bottom-3 right-3 rounded-full max-w-8' />
            </div>
            <h2 className="text-black text-xl font-bold mt-2">House cleaning service</h2>
            <p className='text-gray-500 flex flex-row items-center my-2'>
                <FaMapMarkerAlt className='mr-2' /> Lagos, Nigeria
            </p>
            <footer className='text-black flex flex-row justify-between'>
                <div className='flex flex-row text-gray-300 items-center my-2'>
                    <MdStar className='mx-0.5 my-2 text-xl' />
                    <MdStar className='mx-0.5 my-2 text-xl' />
                    <MdStar className='mx-0.5 my-2 text-xl' />
                    <MdStar className='mx-0.5 my-2 text-xl' />
                    <MdStar className='mx-0.5 my-2 text-xl' />
                    (0)
                </div>
                <h3 className='font-bold'>
                    $14
                </h3>
            </footer>
        </div>

    );
}

export default ServiceCard;
