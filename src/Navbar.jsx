export default function Navbar(){
    return (
        <nav className="w-full h-20 flex items-center justify-around fixed z-100 top-0 bg-white">
            <p className="text-xl font-medium">Techwind</p>
            <ul className="flex justify-around w-1/2">
                <li className="hover:font-medium hover:text-blue-400"><a href="#">Home</a></li>
                <li className="hover:font-medium hover:text-blue-400"><a href="#">About Us</a></li>
                <li className="hover:font-medium hover:text-blue-400"><a href="#">Shop</a></li>
                <li className="hover:font-medium hover:text-blue-400"><a href="#">Pages</a></li>
                <li className="hover:font-medium hover:text-blue-400"><a href="#">Blog</a></li>
                <li className="hover:font-medium hover:text-blue-400"><a href="#">Contact</a></li>
            </ul>
            <ul className="flex justify-center gap-1.5 w-1/8">
                <li><i className="fa-solid fa-magnifying-glass"></i></li>
                <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 flex justify-center items-center"><i className="fa-solid fa-cart-arrow-down text-white"></i></li>
                <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 flex justify-center items-center"><i className="fa-solid fa-heart text-white"></i></li>
                <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 flex justify-center items-center"><i className="fa-regular fa-circle-user text-white"></i></li>
            </ul>
        </nav>
    );
}