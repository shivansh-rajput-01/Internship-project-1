import "./App.css";
import Navbar from "./Navbar";
import MainImg from "./MainImg";
import ProductCard from "./ProductCard";
import ProductTab from "./ProductTab";
import AnimatedCardsTab from "./AnimatedCardsTab";
import Headline from "./Headline";
import CategoryTab from "./CategoryTab";
import Sales from "./Sales";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

function App() {
  let products = [
    {
      image: "p1.webp",
      pname: "Branded T-shirt",
      np: "16.00",
      op: "21.00",
      isFeatured: true,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "p2.webp",
      pname: "Shopping Bag",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "p3.webp",
      pname: "Elegant Watch",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "p4.webp",
      pname: "Casual Shoes",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: true,
      isSale: false,
      isPopular: false,
    },
    {
      image: "p5.webp",
      pname: "Earphones",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "p6.webp",
      pname: "Elegent Mug",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "p7.webp",
      pname: "Sony Headphones",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: true,
      isPopular: false,
    },
    {
      image: "p8.webp",
      pname: "Wooden Stools",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
  ];

  let popularProducts = [
    {
      image: "s9.webp",
      pname: "Branded T-Shirts",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: true,
    },
    {
      image: "s10.webp",
      pname: "Shopping Bag",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: true,
    },
    {
      image: "s11.webp",
      pname: "Sport Shoes",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: true,
    },
    {
      image: "s12.webp",
      pname: "T-shirt",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: true,
    },
  ];

  let recentProducts = [
    {
      image: "s13.webp",
      pname: "Wooden Chair",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "s14.webp",
      pname: "Women Block Heels",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "s15.webp",
      pname: "Shorts",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
    {
      image: "s16.webp",
      pname: "T-shirt",
      np: "16.00",
      op: "21.00",
      isFeatured: false,
      isNew: false,
      isSale: false,
      isPopular: false,
    },
  ];

  return (
    <>
      <Navbar />
      <MainImg />
      <AnimatedCardsTab />
      <Headline topic="Most Viewed Products" extra="View More Items" />
      <ProductTab products={products} />
      <Headline topic="Top Categories" extra="" />
      <CategoryTab />
      <Headline topic="Popular Products" extra="" />
      <ProductTab products={popularProducts} />
      <Sales/>
      <Headline topic="Recent Products" extra="" />
      <ProductTab products={recentProducts} />
      <MobileApp/>
      <Footer/>
    </>
  );
}

export default App;
