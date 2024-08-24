import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([])

  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] =useState([])

  const toggleCategory =(e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
      
    }
    else{
      setCategory(prev=> [...prev, e.target.value])
    }
  }


  const toggleSubCategory =(e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
      
    }
    else{
      setSubCategory(prev=> [...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productCopy = products.slice() 
    // console.log(productCopy);
    
    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category))
      
    }

    if (subCategory.length >0) {
      productCopy = productCopy.filter((item) => subCategory.includes(item.subCategory))
      
    }
    // setSubCategory(productCopy)
    setFilterProducts(productCopy)

  }

  // useEffect(()=>{
  //   setFilterProducts(products)
  // }, [])

  useEffect(()=>{
    applyFilter()
  }, [category,subCategory])



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
                  onChange={toggleCategory}
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
                  onChange={toggleCategory}
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
                  onChange={toggleCategory}
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
                  onChange={toggleSubCategory}
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
                  onChange={toggleSubCategory}
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
                  onChange={toggleSubCategory}
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
