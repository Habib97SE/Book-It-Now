function BookingPage() {
    return (
        <>
            <div className="flex flex-row justify-center items-center my-5">
                <div>
                    <h1 className="text-4xl text-center font-bold">Booking Service</h1>
                    <span className="block border-b-2 border-howItWorksIcon   w-1/2 mx-auto mt-1"></span>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <form className="w-10/12 mx-auto">

                    <div className="grid grid-cols-2 gap-6 my-3">
                        <div>
                            <label htmlFor="name" className="text-gray-600">Name <span className="text-red-500 text-lg">*</span></label>
                            <input type="text" id="name" name="name" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                        <div >
                            <label htmlFor="phone" className="text-gray-600">Phone <span className="text-red-500 text-lg">*</span></label>
                            <input type="text" id="phone" name="phone" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 my-3">
                        <div>
                            <label htmlFor="date" className="text-gray-600">Date <span className="text-red-500 text-lg">*</span></label>
                            <input type="date" id="date" name="date" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                        <div>
                            <label htmlFor="time" className="text-gray-600">Time <span className="text-red-500 text-lg">*</span></label>
                            <input type="time" id="time" name="time" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 my-3">
                        <div>
                            <label htmlFor="address" className="text-gray-600">Address <span className="text-red-500 text-lg">*</span></label>
                            <input type="text" id="address" name="address" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                        <div>
                            <label htmlFor="city" className="text-gray-600">City <span className="text-red-500 text-lg">*</span></label>
                            <input type="text" id="city" name="city" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="message" className="text-gray-600">Message <span className="text-red-500 text-lg">*</span></label>
                        <textarea name="message" id="message" cols={30} rows={10} className="w-full border border-gray-200 p-2 rounded-lg"></textarea>
                    </div>
                    <div className="my-3">
                        <input type="checkbox" id="terms" name="terms" required={true} />
                        <label htmlFor="terms" className="text-lg ml-2">I agree to the <a href="#" className="text-primaryColor">terms and conditions</a></label>
                    </div>
                    <div className="my-3">
                        <input type="submit" value={"Book Now"} required={true} className="py-4 px-5 cursor-pointer mt-4 bg-howItWorksIcon text-white text-lg rounded-lg hover:bg-primaryColorHover " />
                    </div>

                </form>
            </div>
        </>
    );
}

export default BookingPage;