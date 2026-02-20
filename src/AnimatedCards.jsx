export default function AnimatedCards({ image, name, h, w }) {
  return (
    <div className="relative inline-block overflow-hidden mb-5" style={{width : `${w}px`, height:`${h}px`}}>
        <img src={`/images/${image}`} alt="image" className="rounded hover:scale-110 duration-250 ease-in" style={{ height: `${h}px`, width: `${w}px` }}/>
        <span className="absolute bottom-2 left-1 text-2xl">{name}</span>
    </div>
  );
}
