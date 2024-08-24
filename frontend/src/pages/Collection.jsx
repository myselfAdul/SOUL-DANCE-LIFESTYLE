import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([])

  useEffect(()=>{
    setFilterProducts(products)
  }, [])

  const filterToogle = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="flex flex-col sm:flex-row border-t gap-12">
      {/* Filter Section */}
      <div className="min-w-44 max-w-80 mt-10">
        <p
          onClick={filterToogle}
          className="text-xl cursor-pointer flex items-center gap-3"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""} `}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Categories */}
        <div
          className={`mt-4 my-10 border border-gray-300 pl-5 py-8 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="">CATEGORIES</p>
          <ul className="mt-2 space-y-2 text-gray-500">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={"Men"}
                  className="mr-2"
                />{" "}
                Men
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={"Women"}
                  className="mr-2"
                />{" "}
                Women
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={"Kids"}
                  className="mr-2"
                />{" "}
                Kids
              </label>
            </li>
          </ul>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`mt-4 border border-gray-300 pl-5 py-8 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="">TYPE</p>
          <ul className="mt-2 space-y-2 text-gray-500">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={"Topwear"}
                  className="mr-2"
                />{" "}
                Topwear
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={"Bottomwear"}
                  className="mr-2"
                />{" "}
                Bottomwear
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={"Winterwear"}
                  className="mr-2"
                />{" "}
                Winterwear
              </label>
            </li>
          </ul>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full my-5">
        <div className="flex justify-between gap-2 items-center mb-6">
          {/* Title */}
          <Title text1={"ALL"} text2={"PRODUCTS"} />

          {/* Product Sorting */}
          <select className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm w-2/6 sm:w-2/5">
            <option value="relevant">Sort by Relevance</option>
            <option value="low-high">Sort by Price: Low to High</option>
            <option value="high-low">Sort by Price: High to Low</option>
          </select>
        </div>
        {/* render all products here */}

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center justify-center">
          {filterProducts.map((item, index)=>(
            <ProductItem key={index} name={item.name} price={item.price} id={item._id} image={item.image} />
          ))}

        </div>


      </div>
    </div>
  );
};

export default Collection;
