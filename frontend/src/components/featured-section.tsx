import { Provider } from '@/app/types/provider-types';
import { getProviders } from '@/models/provider-model';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaCircle, FaClone } from 'react-icons/fa';



const FeatureSection = () => {

    const [providers, setProviders] = useState<Provider[]>([]);

    useEffect(() => {
        const fetchProviders = async () => {
            const result: Promise<Provider[]> = await getProviders();
            setProviders(result);
        };
        fetchProviders();
    }, [])


    return (
        <section className="py-10 bg-white w-full">
            <div className="container mx-auto px-4 w-4/5">
                <div className="flex justify-between items-center mb-6">
                    <div>

                        <h2 className="text-2xl font-semibold text-black">Top Barbers</h2>
                        <p className="text-gray-600 mt-2">What Do You Need To Find?</p>
                    </div>
                    <Link href="/barbers" className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white">
                        View All <FaArrowRight className="pl-2 " />
                    </Link>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {providers.map((provider: Provider) => (
                        <Link key={provider.id} href={`barbers/${provider.id}`} className="block hover:shadow-lg transition-shadow">
                            <div className="relative rounded-xl">
                                <Image
                                    src={"https://dummyimage.com/381x286"}

                                    alt="Category Image"
                                    className="w-full h-auto hover:scale-110 duration-500 rounded-xl"
                                    width={381}
                                    height={286}
                                />
                                <div className="absolute left-4 top-4 z-10 text-white">
                                    <h3 className="text-lg bg-white text-black px-2 rounded-xl ">

                                        <span className="flex flex-row items-center justify-center "> <FaCircle className="pr-2 text-primaryColor" /> {provider.city} </span>
                                    </h3>
                                </div>
                                <div className='absolute bottom-4 right-4 z-10'>
                                    <FaClone className="text-white text-2xl" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { FeatureSection };
