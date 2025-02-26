import { useEffect, useState } from "react";
import { NavLink } from "react-router";



const LeftNavbar = () => {


    const [categories, setCategories] = useState([]); // state to store categories

    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setCategories(data.data.news_category));
    }, []); // fetch categories from api




    // data demo 
    // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    // }

    return (
        <div>
            <h2 className="font-semibold mb-4">All Caterogy</h2>
            <div className="flex flex-col gap-2">
                {
                    categories.map( category => 
                    <NavLink to='/category/${category.category_id}' key={category.category_id} className="btn ">{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;