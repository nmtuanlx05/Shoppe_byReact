import { FLashSaleItem } from "../data/FlashSaleItem";
import flash from "../assets/flash.png";

export default function ItemFLashSale({ img, price, discount, label }) {
  return (
    <>
      <div className=" flex flex-col w-[188px] bg-white rounded   ">
        <div className="relative z-0 cursor-pointer ">
          <img
            src={img}
            alt="imgItem"
            className="w-full h-[190px] object-cover"
          />
          {discount != null && (
            <>
              <img
                src={flash}
                alt="flash"
                className=" absolute w-4 h-[22px] mr-0.5 top-0 right-[35px] z-10"
              />
              <span className="absolute top-0 right-0 bg-yellow-200 flex items-center justify-center w-[45px] text-[14px] z-0">
                {discount}%
              </span>
            </>
          )}

          <div className="absolute top-3 h-5 w-7 right-[164px]  ">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png"
              alt="Mall"
              className="z-10"
            />
          </div>
        </div>
        <div className="text-center mt-2">
          <p className="text-orange-600 text-xl px-2 mt-1 ">
            <span className="text-xl alig">₫</span>
            {price.toLocaleString("vi-VN")}
          </p>
          <div className="bg-gradient-to-r from-orange-500 to-orange-200 text-white text-xs font-bold text-center py-1 mt-2 mx-2 rounded-full">
            {label}
          </div>
        </div>
      </div>
    </>
  );
}
