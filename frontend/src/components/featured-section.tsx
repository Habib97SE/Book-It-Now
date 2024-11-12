import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCircle, FaClone } from 'react-icons/fa';

const categories = [
    {
        title: 'Carpentry',
        image: 'https://app.truelysell.com/uploads/category_images/1631721020category-08_381_286.jpg',
        link: 'https://app.truelysell.com/search/carpentry',
    },
    {
        title: 'Plumbing',
        image: 'https://app.truelysell.com/uploads/category_images/1631721004category-07_381_286.jpg',
        link: 'https://app.truelysell.com/search/plumbing',
    },
    {
        title: 'Construction',
        image: 'https://app.truelysell.com/uploads/category_images/1631720973category-06_381_286.jpg',
        link: 'https://app.truelysell.com/search/construction',
    },
    {
        title: 'Electrical',
        image: 'https://app.truelysell.com/uploads/category_images/1631720955category-05_381_286.jpg',
        link: 'https://app.truelysell.com/search/electrical',
    },
    {
        title: 'Cleaning',
        image: 'https://app.truelysell.com/uploads/category_images/1631720937category-04_381_286.jpg',
        link: 'https://app.truelysell.com/search/cleaning',
    },
    {
        title: 'Car Wash',
        image: 'https://app.truelysell.com/uploads/category_images/1631720916category-03_381_286.jpg',
        link: 'https://app.truelysell.com/search/car-wash',
    },
    {
        title: 'Interior',
        image: 'https://app.truelysell.com/uploads/category_images/1631720887category-02_381_286.jpg',
        link: 'https://app.truelysell.com/search/interior',
    },
    {
        title: 'Computer',
        image: 'https://app.truelysell.com/uploads/category_images/1631720857category-01_381_286.jpg',
        link: 'https://app.truelysell.com/search/computer',
    },
];

const FeatureSection = () => {
    return (
        <section className="py-10 bg-white w-full">
            <div className="container mx-auto px-4 w-4/5">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Featured Categories</h2>
                        <p className="text-gray-600 mt-2">What Do You Need To Find?</p>
                    </div>
                    <Link href="https://app.truelysell.com/all-categories" className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white">
                        View All <FaArrowRight className="pl-2 " />
                    </Link>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link key={index} href={category.link} className="block hover:shadow-lg transition-shadow">
                            <div className="relative rounded-xl">
                                <Image
                                    src={category.image}
                                    alt="Category Image"
                                    className="w-full h-auto hover:scale-110 duration-500 rounded-xl"
                                    width={381}
                                    height={286}
                                />
                                <div className="absolute left-4 top-4 z-10 text-white">
                                    <h3 className="text-lg bg-white text-black px-2 rounded-xl ">
                                        <span className="flex flex-row items-center justify-center "> <FaCircle className="pr-2 text-primaryColor" /> {category.title} </span>
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
