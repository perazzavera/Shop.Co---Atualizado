import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { LuArrowLeft, LuShoppingBag } from "react-icons/lu";
const NotFound = () => {
  const product = {
    breadcrumbs: [{ id: 1, name: "Home", to: "/" }],
    tag: "404",
  };

  return (
    <>
      <Breadcrumb product={product} />

      <div className="text-light p-4 flex-grow-1 lg:mx-32 lg:px-0">
        <h2 className="titulo text-4xl">PAGE NOT FOUND</h2>
        <div className="lg:grid lg:grid-cols-2 gap-4">
          <div className="border border-gray-300 rounded-2xl p-4 my-6 h-fit flex flex-col items-center justify-center">
            <div className="text-9xl font-bold text-gray-200 mb-3">404</div>
            <p className="text-center py-4 text-lg ">
              We couldn't find the page you were looking for :(
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
              >
                <LuArrowLeft className="w-6 h-6" />
                Return Home
              </Link>
              <Link
                to="/cart"
                className="flex items-center justify-center gap-2 border border-black py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                <LuShoppingBag className="w-6 h-6" />
                View Cart
              </Link>
            </div>
          </div>
          <div className="border border-gray-300 rounded-2xl p-8 my-6 h-fit flex flex-col items-center justify-center">
            <h3 className="text-2xl mb-4 font-bold">Popular Categories</h3>
            <ul className="space-y-3 w-full">
              {["New Arrivals", "Top Sellings", "On Sale"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-200 pb-2 last:border-b-0"
                  >
                    <Link
                      to={`/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block w-full py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
