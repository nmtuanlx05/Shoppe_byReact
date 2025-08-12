import { FLashSaleItem } from "../data/FlashSaleItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemFLashSale from "./ItemFlashSale";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FlashSale() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-50 hover:bg-gray-100 hover:scale-125"
      >
        <FaChevronLeft className="text-gray-600" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-50 hover:bg-gray-100 hover:scale-125"
      >
        <FaChevronRight className="text-gray-600" />
      </button>
    );
  };
  return (
    <>
      <div className="bg-white mt-6 max-w-full mx-24 rounded px-6 py-4 z-0 ">
        <div className="flex items-center justify-between">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/5112f196d53068a0c14b.png"
            alt=""
          />
          <button className="text-orange-600 font-bold hover:opacity-80">
            View all
          </button>
        </div>

        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          arrows
          className="mt-6 flex gap-4 overflow-x-auto scrollbar-hide pl- z-0 "
        >
          {FLashSaleItem.map((item, idx) => (
            <ItemFLashSale key={idx} {...item} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
