import React from 'react'
import "../assets/styles/components/Categories.scss"

const Categories = ({children, titleCategory }) => {
    return (
        <div className="categories">
            <h3 className="categories__title">{titleCategory}</h3>
            {children}
        </div>
    );
}
 
export default Categories;