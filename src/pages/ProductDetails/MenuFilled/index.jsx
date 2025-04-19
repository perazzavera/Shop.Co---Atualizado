import { useState } from "react";
import Depoimentos from "../Depoimentos";
import faqs from "../../../mocks/faqs.json";
import { Link } from "react-router-dom";

export default function MenuFilled() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <>
      <nav
        className="tabs tabs-bordered flex mx-4 justify-between border-b-1 border-gray-300 pt-6 lg:mx-32 lg:justify-around"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          className={`tab cursor-pointer text-lg pb-4 ${
            activeTab === "details"
              ? "text-black border-b-1 pb-4 font-medium"
              : " text-gray-500"
          }`}
          onClick={() => setActiveTab("details")}
          role="tab"
          aria-selected={activeTab === "details"}
        >
          Product Details
        </button>
        <button
          type="button"
          className={`tab cursor-pointer text-lg pb-4 ${
            activeTab === "reviews"
              ? "text-black border-b-1 pb-4 font-medium"
              : " text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
          role="tab"
          aria-selected={activeTab === "reviews"}
        >
          Rating & Reviews
        </button>
        <button
          type="button"
          className={`tab cursor-pointer text-lg pb-4 ${
            activeTab === "FAQs"
              ? "text-black border-b-2 pb-4 font-medium"
              : " text-gray-500"
          }`}
          onClick={() => setActiveTab("FAQs")}
          role="tab"
          aria-selected={activeTab === "FAQs"}
        >
          FAQs
        </button>
      </nav>

      <div className="mt-3 mx-4 lg:mx-32">
        {activeTab === "details" && (
          <div role="tabpanel">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <>
            <div role="tabpanel">
              <Depoimentos />
            </div>
            <div className="flex">
              <Link
                to="/reviews"
                className="border-1 text-lg border-gray-300 py-3 px-6 rounded-full w-fit mx-auto hover:bg-gray-200 transition-colors duration-300"
              >
                Load More Reviews
              </Link>
            </div>
          </>
        )}

        {activeTab === "FAQs" && (
          <div className="space-y-4 mx-4" role="tabpanel">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <h3 className="font-semibold text-xl">{faq.question}</h3>
                <h4 className="text-lg">{faq.answer}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
