export default function CategoryCard({image, msg}){
    return (
        <div className="w-41 h-40 hover:shadow-lg flex flex-col justify-center items-center">
            <img src={`/images/${image}`} alt="image" className="w-20 h-20 rounded-full mb-4"/>
            <span className="text-2xl m-auto">{msg}</span>
        </div>
    );
}