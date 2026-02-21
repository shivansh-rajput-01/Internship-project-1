export default function Footer() {
  return (
    <div className="bg-slate-900 text-white p-10">
      <div className="w-8/10 m-auto flex flex-wrap gap-15">
        <div className="w-1/4">
          <p className="text-4xl mb-5">Techwind</p>
          <p>
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
          <ul className="flex gap-3 mt-4">
            <li className="w-7 h-7 rounded border border-black flex justify-center items-center hover:bg-purple-800">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </li>
            <li className="w-7 h-7 rounded border border-black flex justify-center items-center hover:bg-purple-800">
              <i className="fa-brands fa-linkedin"></i>
            </li>
            <li className="w-7 h-7 rounded border border-black flex justify-center items-center hover:bg-purple-800">
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li className="w-7 h-7 rounded border border-black flex justify-center items-center hover:bg-purple-800">
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li className="w-7 h-7 rounded border border-black flex justify-center items-center hover:bg-purple-800">
              <i className="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
        <div className="w-4/10">
          <p className="text-xl mb-10">Shopping & Clothes</p>
          <div className="flex gap-20">
            <ul>
              <li className="mb-1.5">&gt; Men</li>
              <li className="mb-1.5">&gt; Jackets</li>
              <li className="mb-1.5">&gt; Jeans</li>
              <li className="mb-1.5">&gt; Loungewear</li>
              <li className="mb-1.5">&gt; Polo shirts</li>
              <li className="mb-1.5">&gt; Shirts</li>
            </ul>
            <ul>
              <li className="mb-1.5">&gt; Shorts</li>
              <li className="mb-1.5">&gt; Suits</li>
              <li className="mb-1.5">&gt; T-shirt</li>
              <li className="mb-1.5">&gt; Tracksuits</li>
              <li className="mb-1.5">&gt; Trousers</li>
              <li className="mb-1.5">&gt; Shirts</li>
            </ul>
            <ul>
              <li className="mb-1.5">&gt; My Account</li>
              <li className="mb-1.5">&gt; History</li>
              <li className="mb-1.5">&gt; Wish List</li>
              <li className="mb-1.5">&gt; Newsletter</li>
              <li className="mb-1.5">&gt; Affiliate</li>
              <li className="mb-1.5">&gt; Returns</li>
            </ul>
          </div>
        </div>
        <div className="w-1/5">
            <p className="mb-10">Newsletter</p>
            <p className="mb-5">Sign up and receive the latest tips via email.</p>
            <p className="mb-2">Write your email <span className="text-red-700">*</span></p>
            <input type="text" placeholder="Email" className="w-60 h-10 bg-gray-800 p-2 rounded"/>
            <button className="bg-[#4F39F6] w-60 h-10 p-2 rounded text-center mt-2">Subscribe</button>
        </div>
      </div>
        <hr className="text-white mt-5 w-8/10 m-auto"/>
        <div className="flex justify-around w-8/10 mt-5 m-auto">
            <p><i className="fa-regular fa-truck"></i> Free delivery</p>
            <p><i className="fa-solid fa-box"></i> Non-contact shipping</p>
            <p><i className="fa-regular fa-credit-card"></i> Money-back quarantee</p>
            <p><i className="fa-solid fa-shield"></i> Secure payments</p>
        </div>
        <hr className="text-white mt-10"/>
        <div className="flex justify-around w-full mt-10">
            <p>© 2026 Techwind. Design & Develop with <span className="text-red-700">&hearts;</span> by shivansh.</p>
            <div className="flex gap-1">
                <img src="/images/visa.webp" alt="image" className="w-8 h-6"/>
                <img src="/images/american-ex.webp" alt="image" className="w-8 h-6"/>
                <img src="/images/discover.webp" alt="image" className="w-8 h-6"/>
                <img src="/images/master-card.webp" alt="image" className="w-8 h-6"/>
                <img src="/images/paypal.webp" alt="image" className="w-8 h-6"/>
            </div>
        </div>
    </div>
  );
}
