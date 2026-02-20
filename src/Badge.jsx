export default function Badge({name, color}){
    return (
        <div style={{backgroundColor:color, color: "white"}} className="absolute top-1 left-1 w-15 h-5 text-xs text-center rounded">{name}</div>
    );
}