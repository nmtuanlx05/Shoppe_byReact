import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Categories1 } from "../data/Categories1";
import CategoryItem from "./CategoryItem";

export default function ProductCategory() {
  const groupedColumnsItems = [];
  for (let i = 0; i < Categories1.length; i += 2) {
    groupedColumnsItems.push([Categories1[i], Categories1[i + 1]]);
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
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
  // console.log(Categories1);

  return (
    <div className="bg-white mt-6 max-w-full mx-24 rounded px-6 py-4  ">
      <div className="flex px-4 pb-2 border-b border-gray-100">
        <p className="text-gray-500">CATEGORY</p>
      </div>

      <Carousel responsive={responsive} arrows className="z-0">
        {groupedColumnsItems.map((pair, idx) => (
          <div key={idx} className="flex flex-col items-center ">
            {pair.map(
              (item, i) =>
                item && (
                  <CategoryItem key={i} img={item.img} label={item.label} />
                )
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
