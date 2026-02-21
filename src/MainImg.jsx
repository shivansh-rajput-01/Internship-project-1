import mainBg from "./assets/mainbg.jpg";

export default function MainImg() {
  return (
    <div
      className="relative w-full h-[90vh] mt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
        <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full lg:w-1/3 h-full flex flex-col justify-center text-white mt-20 lg:ml-40 p-5">
        <p className="text-6xl font-medium mb-10">New Accessories Collections</p>
        <p className="bg-grey-400 text-xl mb-10">
          Start working with Tailwind CSS that can provide everything you need
          to generate awareness, drive traffic, connect. Shop Now
        </p>
        <button className="bg-[#4f39f6] w-35 p-2 rounded"><i className="fa-solid fa-cart-arrow-down text-white"></i> Shop Now</button>
      </div>
    </div>
  );
}
