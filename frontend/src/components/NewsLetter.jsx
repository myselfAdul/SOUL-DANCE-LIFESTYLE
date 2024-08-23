import React from "react";

const NewsLetter = () => {
  // for preventing refresh while subscribe
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Subscribe now & get 20% off
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          numquam?
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
          <button className="w-full sm:w-auto px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
