
import NewSletter from '@/components/NewSletter';
import FeaturedDestination from '../components/FeaturedDestination';
import HeroBanner from '../components/HeroBanner';
import OffersSection from '../components/OffersSection';
import Footer from './../components/Footer';


const Home = () => {
    return (
        <>
            <HeroBanner />

            <FeaturedDestination />

            <OffersSection />

            <NewSletter />

            <Footer />
        </>
    )
}

export default Home
