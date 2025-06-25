
import SectionTitle from './common/SectionTitle';
import HotelCard from './HotelCard';
const FeaturedDestination = () => {
    return (
        <section className='mt-16 px-4'>
            <SectionTitle title="Featured Destinations" subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences." />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-12 '>
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
            </div>

            {/* View all destinations button */}
            <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-8 block mx-auto  '>
                View all destinations
            </button>
        </section>

    )
}

export default FeaturedDestination
