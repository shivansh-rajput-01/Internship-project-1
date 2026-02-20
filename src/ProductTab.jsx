import ProductCard from "./ProductCard"

export default function ProductTab({products}){
   
    return (
        <div className="flex flex-wrap w-full justify-center items-center">
            <div className="w-8/10 flex flex-wrap">
                {products.map((product, idx) => {
                return <ProductCard key={idx} image={product.image} pname={product.pname} np={product.np} op={product.op} isFeatured={product.isFeatured} isNew={product.isNew} isSale={product.isSale} isPopular={product.isPopular}/>
            })}
            </div>
        </div>
    )
}