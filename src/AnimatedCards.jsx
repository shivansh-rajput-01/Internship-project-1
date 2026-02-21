export default function AnimatedCards({ image, name, h}) {
  return (
    <div style={{height:`${h}px`}} className="relative inline-block overflow-hidden mb-5 w-full lg:w-131">
        <img src={`/images/${image}`} alt="image" className="rounded hover:scale-110 duration-250 ease-in w-full lg:w-131" style={{ height: `${h}px`}}/>
        <span className="absolute bottom-2 left-1 text-2xl">{name}</span>
    </div>
  );
}
