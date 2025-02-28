import { useEffect, useState } from "react";


const MainLayout = () => {


    const [state, setState] = useState([]);
    
    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => console.log(data));
        // .then(data => setState(data.data.news_category));
    }, []); // fetch categories from api


    return (
        <div>
            <h1>Hello</h1>
            {
                state.map()
            }
        </div>
    );
};

export default MainLayout;