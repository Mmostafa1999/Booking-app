import { assets } from "@/assets/assets";
import { cn } from "@/lib/utils";

const OfferCard = () => {
  return (
    <div className="max-w-md w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-between p-4 transition-all duration-300",
          "bg-[url('/src/assets/exclusiveOfferCardImg3.png')] bg-cover bg-center"
        )}
      >
        {/* Dark overlay on hover */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/0 group-hover/card:bg-black/60 transition-all duration-300 z-0" />

        {/* Top content (e.g. author/avatar area if needed) */}
        <div className="flex items-center space-x-4 z-10 relative">
          <span className="bg-white text-black text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">
            20% off
          </span>
        </div>

        {/* Main content */}
        <div className="z-10 relative text-white">
          
          <h3 className="font-bold text-xl md:text-2xl font-playfair">Summer Escape Package</h3>
          <p className="font-normal text-sm my-2">
            Enjoy a complimentary night and daily breakfast.
          </p>
          <span className="text-xs text-gray-300">Expires Aug 31</span>

          {/* CTA button */}
          <button className="flex items-center gap-2 font-medium mt-4 group  transition-all">
            <span>View Offer</span>
            <img
              src={assets.arrowIcon}
              alt="arrow icon"
              className="  group-hover:translate-x-1  transition-all"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
