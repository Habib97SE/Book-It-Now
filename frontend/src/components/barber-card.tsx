
import Image from 'next/image';
import { FaHeart, FaStar } from 'react-icons/fa';

interface Barber {
    id: number;
    name: string;
    image: string;
    location: string;
    phone: string;
    rating: number;
    price: number;
    liked: boolean;
}

function BarberCard({ item }: { item: Barber }) {

    const handleLike = () => {
        item.liked = !item.liked;
    }

    return (
        <div key={item.id} className="card bg-gray-50 shadow-lg m-2 w-5/12">
            <div className="card-body p-0">
                <figure className="relative">
                    <Image
                        src={item.image}
                        alt="Service Image"
                        width={500}
                        height={300}
                        className="object-cover m-4 rounded-lg"
                    />
                    <div className="absolute top-6 left-6 badge badge-secondary py-4 px-5 capitalize text-white ">
                        {item.location}
                    </div>
                    <div className="absolute top-6 right-6">
                        <button
                            className="btn btn-circle btn-sm btn-outline"
                            onClick={() => handleLike()}
                        >
                            {item.liked ? <FaHeart className="text-red-500" /> : <FaHeart />}
                        </button>
                    </div>
                </figure>
                <div className="p-4">
                    <h3 className="font-bold text-lg">
                        <a href="#">{item.name}</a>
                    </h3>
                    <p className="text-gray-600 text-sm">
                        <i className="fas fa-phone mr-1"></i> <span>{item.phone}</span>
                        <br />
                    </p>
                    <div className="flex items-center justify-between mt-4 text-black">
                        <div className="rating flex flex-row items-center justify-center">

                            {Array.from({ length: 5 }, (_, index) => {
                                const starIndex = index + 1; // Star indices start from 1
                                return (
                                    <FaStar
                                        key={starIndex}
                                        className={starIndex <= item.rating ? "text-yellow-500" : "text-gray-400"}
                                    />
                                );
                            })}

                            <span className="ml-2">(5)</span>
                        </div>
                        <h6 className="font-semibold">{item.price} SEK</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { BarberCard };