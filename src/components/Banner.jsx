import Shoppe1 from "../assets/Shoppe1.jpeg";
import Shoppe2 from "../assets/Shoppe2.jpeg";
import Shoppe3 from "../assets/shoppe3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shoppe1_1 from "../assets/Shoppe1.1.jpeg";
import Shoppe1_2 from "../assets/Shoppe1.2.jpeg";
import Shoppe1_3 from "../assets/Shoppe1.3.png";
import Shoppe1_4 from "../assets/Shoppe1.4.jpeg";
import Shoppe1_5 from "../assets/Shoppe1.5.jpeg";
import Shoppe1_6 from "../assets/Shoppe1.6.jpeg";
export default function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // số lượng ảnh/slide hiện trong khung
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const slideImg = [
    Shoppe1,
      Shoppe1_1,
    Shoppe1_2,
    Shoppe1_3,
    Shoppe1_4,
    Shoppe1_5,
      Shoppe1_6,
    
  ];
    // console.log(slideImg)
    console.log("Shoppe1" , Shoppe1)
  return (
    <>
      <div className="mt-8 px-14 ">
        {/* banner anh  */}
        <div className="flex gap-2 relative z-0 ">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={true}
            keyBoardControl={true}
            containerClass="carousel-container "
            itemClass="carousel-item-padding-40-px "
            className="w-2/3  "
          >
            {slideImg.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain rounded-sm  "
              />
            ))}
          </Carousel>
          <div className="w-1/3 flex-col flex gap-2 ">
            <img
              src={Shoppe2}
              alt=""
              className="object-cover rounded-sm w-full h-full"
            />
            <img
              src={Shoppe3}
              alt=""
              className="object-cover rounded-sm w-full h-full"
            />
          </div>
        </div>
        {/* BannerMenu */}
        <div className="flex flex-row  mt-8 justify-between px-16 group">
          <a href="#">
            <div className="w-20 flex flex-col items-center text-center text-sm  transition-transform  hover:scale-110 ">
              <img
                src="https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi"
                alt="tag"
                className="w-10 h-10 mb-1 "
              />
              <p className=" text-[13px]">Discount Code</p>
            </div>
          </a>
          <a href="#">
            <div className="w-20 flex flex-col items-center text-center text-sm  transition-transform  hover:scale-110 ">
              <img
                src="https://cf.shopee.vn/file/vn-50009109-5bf65d4dc0eb8f6b42074751e8b736a7_xhdpi"
                alt="tag"
                className="w-10 h-10 mb-1 "
              />
              <p className=" text-[13px]">Selected Goods at Great Prices</p>
            </div>
          </a>
          <a href="#">
            <div className="w-20 flex flex-col items-center text-center text-sm  transition-transform  hover:scale-110 ">
              <img
                src="https://cf.shopee.vn/file/vn-11134258-7ras8-mb6e1ufaxoldb9_xhdpi"
                alt="tag"
                className="w-10 h-10 mb-1 "
              />
              <p className=" text-[13px]">Hot Deal Golden Hour</p>
            </div>
          </a>
          <a href="#">
            <div className="w-20 flex flex-col items-center text-center text-sm  transition-transform  hover:scale-110 ">
              <img
                src="	https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi"
                alt="tag"
                className="w-10 h-10 mb-1 "
              />
              <p className=" text-[13px]">Shopee Style Voucher 30%</p>
            </div>
          </a>
          <a href="#">
            <div className="w-20 flex flex-col items-center text-center text-sm  transition-transform  hover:scale-110 ">
              <img
                src="	https://cf.shopee.vn/file/1d25d74d6900b85cfde8f967e613041d_xhdpi"
                alt="tag"
                className="w-10 h-10 mb-1 "
              />
              <p className=" text-[13px]">Hunt Now 100,000 Coins</p>
            </div>
          </a>
          <a href="#">
            <div className="w-20 flex flex-col items-center text-center text-sm  transition-transform  hover:scale-110 ">
              <img
                src="	https://cf.shopee.vn/file/vn-50009109-f692e9b0be05d1a11cded7f9f72b5f0b_xhdpi"
                alt="tag"
                className="w-10 h-10 mb-1 "
              />
              <p className=" text-[13px]">Loyal Customer</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
