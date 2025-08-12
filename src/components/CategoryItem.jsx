export default function CategoryItem({ img, label }) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center p-3  
      border-r border-t border-gray-100 w-30 h-[180px]
      hover:shadow-md transition-shadow duration-200 cursor-pointer "
      >
        <img className="m-w-16 m-h-16 object-contain mb-2" src={img} alt="" />
        <span className="text-sm text-center leading-tight line-clamp-2">
          {label}
        </span>
      </div>
    </>
  );
}
