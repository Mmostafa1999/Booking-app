import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
const HotelCard = () => {
    return (


        <Link to="/hoteldetails" className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-md">
            <img className="rounded-t-lg" src="/src/assets/roomImg1.png" alt="product image" />

            <div className="px-5 pb-5 mt-5">

                <div className="flex items-center space-x-1 rtl:space-x-reverse justify-between ">
                    <h5 className="text-xl font-semibold font-playfair tracking-tight text-gray-900 dark:text-white">Urbanza Suites</h5>
                    <div className="flex items-center">
                        <img src={assets.starIconFilled} alt="rating icons" />
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5  dark:bg-blue-200 dark:text-blue-800 ms-3 rounded-full">5.0</span>
                    </div>
                </div>



                <div className="flex items-center mt-1 gap-1 ">
                    {/* location data */}
                    <img src={assets.locationIcon} alt="Hotel Location icon" />
                    <p className="text-sm ">Main Road  123 Street , 23 Colony</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p><span className="text-xl text-gray-800">$100</span>/ Night</p>

                    <Link to="/" className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">Book Now</Link>
                </div>
            </div>

        </Link>

    )
}

export default HotelCard
