
import SectionTitle from './common/SectionTitle';
import OfferCard from './OfferCard';



const OffersSection = () => {
    return (
        <section className="mt-32">
            <SectionTitle title="Exclusive Offers" subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories." />


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-12 ">
                <OfferCard />
                <OfferCard />
                <OfferCard />
            </div>

            <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-8 block mx-auto  '>
                View all Offers
            </button>
        </section>

    )
}

export default OffersSection
