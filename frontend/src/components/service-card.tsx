import Image from 'next/image';
import { FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { MdStar } from 'react-icons/md';

function ServiceCard() {
    return (
        <div
            className='bg-white p-4 rounded-xl shadow-md inline-block'
        >
            <Image
                src="https://app.truelysell.com/uploads/category_images/1631721020category-08_381_286.jpg"
                alt="Carpentry"
                className='rounded-lg'
                width={381}
                height={286}
            />
            <h2 className="bg-pink-100 text-pink-700 inline-block rounded-xl py-2 px-3 my-2" >Carpentry</h2>

            <h2 className="text-black text-xl font-bold" >House cleaning service</h2>
            <p className='text-gray-500 flex flex-row items-center' >
                <FaMapMarkerAlt className='mr-2' /> Lagos, Nigeria
            </p>
            <footer className='text-black flex flex-row justify-between'>
                <div className='flex flex-row text-gray-300 items-center'>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
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
