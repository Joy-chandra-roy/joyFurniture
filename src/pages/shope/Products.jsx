import React, { useState } from "react";
import { products } from "./../../utils/products";
import ProductCart from "./ProductCart";

const Products = ({ headLine }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory]=useState("Chair")
  

  const filterProducts = products.filter((product)=>product.category===selectedCategory)


 

  return (
    <div>
      <div className="section-container">
        <h1 className="text-4xl font-bold text-center my-8">{headLine}</h1>

        {/* category tabs */}
        <div className="bg-[#F7F7F7] max-w-sm mx-auto rounded-full md:p-2.5 py-4 mb-15">
          <div className="flex items-center md:justify-between justify-center flex-col sm:flex-row gap-4 ">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={()=>{
                  setSelectedCategory(category)
                }}
                className={`py-1 sm:px-4 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${selectedCategory===category ?"bg-white text-primary":"text-secondary" }`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filterProducts.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
