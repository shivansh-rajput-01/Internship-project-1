import Badge from "./Badge";

export default function ProductCard({
  image,
  pname,
  np,
  op,
  isSale,
  isFeatured,
  isNew,
  isPopular,
}) {
  return (
    <div className="relative w-full sm:w-8/20 md:w-5/20 lg:w-[22%] h-100 m-3 mb-8 group">
      {isSale && <Badge name="Sale" color="purple"></Badge>}
      {isFeatured && <Badge name="Featured" color="green"></Badge>}
      {isNew && <Badge name="New" color="orange"></Badge>}
      {isPopular && <Badge name="Popular" color="skyblue"></Badge>}
      <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 hidden group-hover:flex justify-center items-center absolute top-2 right-10 duration-250"><i className="fa-solid fa-heart text-white"></i></li>
      <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 hidden group-hover:flex justify-center items-center absolute top-11 right-10 duration-250"><i className="fa-regular fa-eye text-white"></i></li>
      <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 hidden group-hover:flex justify-center items-center absolute top-20 right-10 duration-250"><i className="fa-regular fa-bookmark text-white"></i></li>
      <div className="border rounded shadow-md overflow-hidden w-9/10 h-8/10 mb-4 hover:shadow-xl">
        <img
          src={`/images/${image}`}
          alt="product-pic"
          className="w-full h-full"
        />
        <button className="bg-black text-white w-90/100 ml-2 p-2 rounded duration-250 group-hover:-translate-y-11">Add to Cart</button>
      </div>
      <div>
        <p className="text-xl font-medium hover:text-blue-500">{pname}</p>
        <div className="flex justify-between pr-4">
          <div className="inline-block">
            <span className="text-green-600">${np}</span>{" "}
            <span className="line-through text-red-600">${op}</span>
          </div>
          <span className="text-xs">⭐⭐⭐⭐⭐</span>
        </div>
      </div>
    </div>
  );
}
