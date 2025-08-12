import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ShoppeMall() {
  const Products = [
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2",
      label: "Up to 50% off",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b",
      label: "Buy 1 Get 1 Free",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m6glb2udrprs42",
      label: "Buy 1 Get 1 Free",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409",
      label: "Buy and get a gift",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m4ycyi0ypc5414",
      label: "Buy 1 Get 1 Free",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qwogrf1",
      label: "Buy 1 get 2",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d",
      label: "Super sale deli",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6",
      label: "Up to 50% off",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-5d6b20755f4ef36cf1f73d431c819c9e",
      label: "Buy and get a gift",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f",
      label: "Buy 1 get 6",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-b44bb96f2e16efe70badc41661365c8a",
      label: "Buy 1 Get 1 Free",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec",
      label: "Gift for every order",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/9ab2f66b65f4f8a3861f22668a380231",
      label: "Buy and get a gift",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-10b1791094f38cba88f8b1c3f11fb6f1",
      label: "Up to 20% off",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-4fd67b80291c1a4f81528f70fb1b3a28",
      label: "Buy and get a gift",
    },
    {
      imgUrl:
        "https://down-vn.img.susercontent.com/file/vn-50009109-4fd67b80291c1a4f81528f70fb1b3a28",
      label: "Buy and get a gift",
    },
  ];
  const groupProducts = [];
  for (let i = 0; i < Products.length; i += 2) {
    groupProducts.push([Products[i], Products[i + 1]]);
  }

  console.log(groupProducts);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
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
    <div className="bg-white mt-6 max-w-full mx-24 rounded p-4 py-4 z-0 ">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-3">
        <div className="flex">
          <a className="text-red-600 font-medium" href="">
            SHOPEE MALL
          </a>
          <div className=" bg-slate-400 block w-[1px] h-6 mx-5 opacity-40 justify-center mt-0.5"></div>
          <div className="flex gap-5 ">
            <div className="flex gap-2 items-center ">
              <img
                className="w-4 h-4"
                src="	https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/2b0c3538f050999fef02.png"
                alt="return"
              />
              <p className="text-base">15 Days Free Returns</p>
            </div>
            <div className="flex gap-2  items-center  ">
              <img
                className="w-4 h-4"
                src="	https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/7077c70ab0445eaaf96a.png"
                alt="return"
              />
              <p className="text-base">100% genuine product</p>
            </div>
            <div className="flex gap-2  items-center  ">
              <img
                className="w-4 h-4"
                src="	https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/437f0ea51f2e59a271cd.png"
                alt="return"
              />
              <p className="text-base">Free shipping</p>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="text-red-600 flex items-center gap-1 text-base font-bold"
        >
          View all
        </a>
      </div>
      <div className="flex">
        <div className="w-[400px] flex-shrink-0 z-10">
          <img
            src="https://cf.shopee.vn/file/vn-11134258-7ra0g-m7uqe24brygj5f"
            alt="sale"
          />
        </div>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          arrows
          className="relative z-0 flex-1 cursor-pointer"
        >
          {groupProducts.map((pair, index) => (
            <div key={index} className="px-2">
              {pair.map((item, i) => (
                <div
                  key={i}
                  className="justify-center text-center flex-col items-center flex mb-6"
                >
                  <img
                    className=" h-[180px] w-[200px] object-cover"
                    src={item.imgUrl}
                    alt={item.label}
                  />
                  <p className="text-center text-base text-red-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
