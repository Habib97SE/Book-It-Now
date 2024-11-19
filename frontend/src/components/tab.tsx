import { useState } from "react";
import { FaStar } from "react-icons/fa";

function TabSection() {
    const [activeTab, setActiveTab] = useState(1); // Default active tab is 1

    return (
        <div className="w-full max-w-4xl mx-auto mt-10">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center sm:justify-start">
                <a
                    className={`rounded-lg py-3 px-4 mx-3 text-lg ${activeTab === 1 ? 'tab-active bg-primaryColor text-white' : 'bg-none border border-primaryColor text-primaryColor'}`}
                    onClick={() => setActiveTab(1)}
                >
                    Overview
                </a>
                <a
                    className={`rounded-lg py-3 px-4 mx-3 text-lg ${activeTab === 2 ? 'tab-active bg-primaryColor text-white' : 'bg-none border border-primaryColor text-primaryColor'}`}
                    onClick={() => setActiveTab(2)}
                >
                    Services Offered
                </a>
                <a
                    className={`rounded-lg py-3 px-4 mx-3 text-lg ${activeTab === 3 ? 'tab-active bg-primaryColor text-white' : 'bg-none border border-primaryColor text-primaryColor'}`}
                    onClick={() => setActiveTab(3)}
                >
                    Reviews
                </a>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold">Service Details</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                )}
                {activeTab === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold">Services Offered</h2>
                        <p>This is the content for the second tab.</p>
                    </div>
                )}
                {activeTab === 3 && (
                    <div>
                        <div className="flex flex-row items-center justify-between border border-gray-100 shadow-md py-3 px-4">
                            <div className="flex flex-row">
                                <img src="https://app.truelysell.com/uploads/profile_img/1631796006.jpg" className="w-12 h-12 rounded-full" alt="User" />
                                <div className="ml-4">
                                    <h3 className="font-semibold">John Doe</h3>
                                    <p className="text-sm text-gray-500">5 days ago</p>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export { TabSection };
