export default function Sales() {
  return (
    <div className="relative text-white bg-fixed bg-center" style={{ backgroundImage: `url("/images/cta.jpg")` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-[70vh] gap-10">
        <h3 className="text-4xl">End of Season Clearance Sale upto 30%</h3>
        <p>Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
        <button className="bg-[#4f39f6] w-35 p-2 rounded text-white"><i className="fa-solid fa-cart-arrow-down text-white"></i> Shop Now</button>
      </div>
    </div>
  );
}