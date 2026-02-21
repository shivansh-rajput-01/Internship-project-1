import { useState } from "react";

export default function Navbar() {
  let [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((isActive) => {
      return !isActive;
    });
  }

  return (
    <div className="w-full">
      <nav className="w-full h-20 flex items-center justify-between box-border pl-4 pr-16 lg:justify-around fixed z-100 top-0 bg-white shadow-2xs">
        <p className="text-xl font-medium">Techwind</p>
        <ul className="hidden lg:flex justify-around w-1/2">
          <li className="hover:font-medium hover:text-blue-400">
            <a href="#">Home</a>
          </li>
          <li className="hover:font-medium hover:text-blue-400">
            <a href="#">About Us</a>
          </li>
          <li className="hover:font-medium hover:text-blue-400">
            <a href="#">Shop</a>
          </li>
          <li className="hover:font-medium hover:text-blue-400">
            <a href="#">Pages</a>
          </li>
          <li className="hover:font-medium hover:text-blue-400">
            <a href="#">Blog</a>
          </li>
          <li className="hover:font-medium hover:text-blue-400">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex justify-center gap-1.5">
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 flex justify-center items-center">
            <i className="fa-solid fa-cart-arrow-down text-white"></i>
          </li>
          <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 flex justify-center items-center">
            <i className="fa-solid fa-heart text-white"></i>
          </li>
          <li className="bg-[#4f39f6] p-4 rounded-full w-3 h-3 flex justify-center items-center">
            <i className="fa-regular fa-circle-user text-white"></i>
          </li>
          <li className="mt-1 ml-2 lg:hidden" onClick={handleClick}>
            <i className="fa-solid fa-bars scale-150"></i>
          </li>
        </ul>
      </nav>
      {isActive && (
        <div className="flex justify-center items-center w-full bg-white z-100 fixed top-20">
          <ul className="w-full flex flex-col justify-center items-center">
            <li className="hover:font-medium hover:text-blue-400">
              <a href="#">Home</a>
            </li>
            <li className="hover:font-medium hover:text-blue-400">
              <a href="#">About Us</a>
            </li>
            <li className="hover:font-medium hover:text-blue-400">
              <a href="#">Shop</a>
            </li>
            <li className="hover:font-medium hover:text-blue-400">
              <a href="#">Pages</a>
            </li>
            <li className="hover:font-medium hover:text-blue-400">
              <a href="#">Blog</a>
            </li>
            <li className="hover:font-medium hover:text-blue-400">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
