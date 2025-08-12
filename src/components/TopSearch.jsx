import Carousel from "react-multi-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";

export default function TopSearch() {
  const TopProducts = [
    {
      img: "https://down-vn.img.susercontent.com/file/af40edba655e36fd80f6b7da6e7dc41c",
      selled: "Sell 99k+ / month",
      label: "T-Shirt",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/3e111293c5d40d8dea2cd1c7fe3c95a6",
      selled: "Sell 63k+ / month",
      label: "Women's Underwire Bra",
    },

    {
      img: "https://down-vn.img.susercontent.com/file/5eb04768e43afb6adabcaee8ba0fd736",
      selled: "Sell 53k+ / month",
      label: "Condom",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/9e6d746b720e9f81d0c8f22971450f61",
      selled: "Sell 52k+ / month",
      label: "Mixed Rice Paper",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/68b5e9c04157bf9c98b7c203da6f50c6",
      selled: "Sell 93k+ / month",
      label: "Women's Ruffled Sleeve Babydoll",
    },

    {
      img: "https://down-vn.img.susercontent.com/file/5564a2cf138facf20844a202737f097a",
      selled: "Sell 58k+ / month",
      label: "Wireless Bra",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/5d80b90ab24dbf7c768c198ade122b9e",
      selled: "Sell 57k+ / month",
      label: "House Slippers",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/abd3a9927a2d1eca3ebfdf752d86f956",
      selled: "Sell 133k+ / month",
      label: "Mini Handheld Fan",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/8875affa67a942d66628792657fe8b18",
      selled: "",
      label: "Women's Cotton Underwear",
    },

    {
      img: "https://down-vn.img.susercontent.com/file/aa4177a5d563c5c5b9bc4536890ccc8e",
      selled: "Sell 52k+ / month",
      label: "Men's Stretch Underwear",
    },

    {
      img: "https://down-vn.img.susercontent.com/file/3efaf1c0506230e6d812f8d524b20f47",
      selled: "Sell 61k+ / month",
      label: "Men's Short Sleeve Polo Shirt",
    },

    {
      img: "https://down-vn.img.susercontent.com/file/003f43a692bd4f0e5fd6d75c3319a732",
      selled: "Sell 53k+ / month",
      label: "Mustard Seeds",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/fe957d4a896f8b264c6b4ae1e18bc1b2",
      selled: "Sell 114k+ / month",
      label: "Lifebuoy Body Wash",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/ea3c6a73cbd32bddb8323c14b837b4de",
      selled: "Sell 71k+ / month",
      label: "Gel Pen",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/dc15492c1a391e11b00744ebe0c3e7f3",
      selled: "Sell 55k+ / month",
      label: "Dove Body Wash",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/ee2b1da4a8393468cfdbae245f39f62c",
      selled: "Sell 92k+ / month",
      label: "Romand Matte Lipstick",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54",
      selled: "Sell 53k+ / month",
      label: "Simple Crab Hair Clip For Women",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/3a66edbaabc42fa5c144646748a42e62",
      selled: "Sell 79k+ / month",
      label: "Fingerless Sun Gloves",
    },
  ];
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
    <div className="bg-white mt-6 max-w-full mx-24 rounded px-6 py-4">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-3 text-red-500 font-medium">
        <span>TOP SEARCHES</span>
        <a href="">View All</a>
      </div>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        arrows
        slidesToSlide={6}
        className="flex gap-4 cursor-pointer"
      >
        {TopProducts.map((item, idx) => (
          <div key={idx} className="flex flex-col ">
            <div className="relative w-[180px] h-[180px]">
              <div className="inline-block absolute top-[-2px] left-[-2px]">
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 font-bold text-center py-1.5 flex items-end h-[30px] justify-center">
                  <p className="text-white text-xs leading-none">TOP</p>
                </div>
                <div
                  className="w-0 h-0 
          border-l-[18px] border-l-transparent
          border-r-[18px] border-r-transparent
          border-t-[14px] border-t-orange-500"
                ></div>
              </div>
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gray-600 bg-opacity-30 h-6 flex items-center justify-center">
                <p className="text-white text-sm">{item.selled}</p>
              </div>
            </div>

            <div className="mt-2 w-[180px] text-center text-gray-600 font-base">
              {item.label}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
