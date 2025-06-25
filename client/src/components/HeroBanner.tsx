
import BookingForm from '../components/BookingForm';

const HeroBanner = () => {
    return (
        <div className="flex flex-col px-6 md:px-16 lg:px-24 xl:px-32  text-start text-white h-screen justify-center bg-[url('/heroImage.png')] bg-cover bg-center bg-no-repeat" >
            <div className='md:mt-12 '>
                <p className="text-sm md:text-lg mb-4 bg-[#49B9FF]/50 py-2 px-4 rounded-full max-w-max">
                    The Ultimate Hotel Experience
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold mb-4 font-playfair max-w-xl">
                    Discover Your Perfect Gateway Destination
                </h2>
                <p className="text-sm md:text-lg max-w-2xl mb-8">
                    Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
                </p>
                <BookingForm />
            </div>
        </div>
    )
}

export default HeroBanner
