import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  const filterToogle = () =>{
    setShowFilter(!showFilter)
  }

  return (
    <div className="flex flex-col sm:flex-row border-t">

      {/* Filter Section */}
      <div className="min-w-80 mt-10">
        <p onClick={filterToogle} className="text-xl cursor-pointer flex items-center gap-3">FILTERS
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''} `} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Categories */}
        <div className={`mt-4 my-10 border border-gray-300 pl-5 py-8 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="">CATEGORIES</p>
          <ul className="mt-2 space-y-2 text-gray-500">
            <li>
              <label>
                <input type="checkbox" name="category" value={"Men"} className="mr-2" /> Men
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="category" value={"Women"} className="mr-2" /> Women
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="category" value={"Kids"} className="mr-2" /> Kids
              </label>
            </li>
          </ul>
        </div>

        {/* Subcategory Filter */}
        <div className={`mt-4 border border-gray-300 pl-5 py-8 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="">TYPE</p>
          <ul className="mt-2 space-y-2 text-gray-500">
            <li>
              <label>
                <input type="checkbox" name="category" value={"Topwear"} className="mr-2" /> Topwear
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="category" value={"Bottomwear"} className="mr-2" /> Bottomwear
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="category" value={"Winterwear"} className="mr-2" /> Winterwear
              </label>
            </li>
          </ul>
        </div>
      </div>

      {/* render all products here */}
      
    </div>
  );
};

export default Collection;
