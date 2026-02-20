import CategoryCard from "./CategoryCard"

export default function CategoryTab(){
    return (
        <div className="w-8/10 flex flex-wrap gap-10 mt-5 mb-5 m-auto">
            <CategoryCard image="electronics.webp" msg="Electronics"/>
            <CategoryCard image="fashion.webp" msg="Fashion"/>
            <CategoryCard image="furniture.webp" msg="Furniture"/>
            <CategoryCard image="mobile.webp" msg="Mobile"/>
            <CategoryCard image="music.webp" msg="Music"/>
            <CategoryCard image="sports.webp" msg="Sports"/>
        </div>
    )
}