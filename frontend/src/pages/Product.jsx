import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);

        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* -----------------product Data----------------- */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* -----------------------Product Images ----------------------*/}
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col w-full sm:w-[18.8%] overflow-x-auto  justify-between sm:justify-normal">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full mb-3 flex-shrink-0 cursor-pointer "
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]  transition-opacity ease-in duration-500  ">
            <img src={image} className="w-full h-auto " alt="" />
          </div>
        </div>

        {/*---------------- Right side ---------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="ml-2">(122)</p>
          </div>
          <p className="font-semibold text-3xl mt-2">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-600 md:w-4/5">
            {productData.description}
          </p>
          <div className="my-8 flex flex-col">
            <p className="font-semibold text-xl">Select Size</p>
            <div className="flex gap-2 my-8 text-xl">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border-2 p-5 bg-gray-50 hover:bg-gray-200 ${
                    item === size ? "border-orange-400" : " "
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="border-2 font-medium px-8 py-3 bg-gray-900 text-white active:bg-white active:text-gray-700" >ADD TO CART</button>
          <hr className="mt-5 sm:w-3/4" />
          <div className="my-5 text-sm text-gray-500 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery is available for this product</p>
            <p>Easy return and exchange policy within 7 days of purchase</p>
          </div>
        </div>
      </div>
      {/* ------------------Review Section -----------------------*/}
      <div className="mt-10 ">
        <div className="flex items-end justify-end">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122) </p>
        </div>
        <div className="border flex flex-col gap-4 p-3 text-sm sm:text-base">
          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perspiciatis? ipsum dolor sit amet consectetur adipisicing elit. Ratione hic qui molestias provident, deleniti quis. Neque, id. Quaerat, voluptatibus adipisci.</p>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo ullam, optio beatae dolorum temporibus nisi dolores et cumque dolorem numquam, pariatur aspernatur veritatis nemo quod incidunt vero reiciendis soluta. consectetur adipisicing elit. Illum quidem vel tenetur ea molestiae soluta quod asperiores mollitia, iste nam natus quaerat accusamus, tempora aspernatur!</p>
        </div>
      </div>

      {/* -------------------Related Products-------------- */}
      <div className="">
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
