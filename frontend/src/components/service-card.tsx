import { Service } from '@/app/types/provider-types';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { MdStar } from 'react-icons/md';

function ServiceCard({ service, logo }: { service: Service, logo: string }) {

    console.log(service);

    return (
        <div className='bg-white p-4 rounded-xl shadow-md inline-block'>
            <div className="relative">
                <img
                    src={service.image}
                    alt="Carpentry"
                    className='rounded-lg w-full'
                />
                <h2 className="absolute top-3 left-3 bg-pinkTint text-primaryColor rounded-xl py-1 px-2">
                    {service.category}
                </h2>
                <Image src={logo} alt="Service Logo" className='absolute bottom-3 right-3 rounded-full max-w-8' width={32} height={32} />
            </div>
            <h2 className="text-black text-xl font-bold mt-2">{service.name}</h2>
            <p className='text-gray-500 flex flex-row items-center my-2'>
                <IoMdTime className='mr-2' /> {service.durationInMinutes} mins
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

                <div>
                    <h3 className='font-bold mb-2'>
                        {service.price} SEK
                    </h3>

                    <Link className='bg-primaryColor text-white px-4 py-2 rounded-lg' href={`/booking/${service.id}`}>
                        Book
                    </Link>
                </div>

            </footer>
        </div>

    );
}

export default ServiceCard;
