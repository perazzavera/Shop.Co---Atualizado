// src/pages/Home.jsx
import Brands from "./components/Brands";
import ByStyles from "./components/ByStyles";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Testimonials from "./components/Testimonials";
import products from "../../mocks/produtos.json";
import { Link } from "react-router-dom";

export default function Home() {
  // Filtra os produtos pelas categorias "New Arrivals" e "Top Sellings"
  const newArrivals = products.filter(
    (produto) => produto.categoria === "New Arrivals"
  );
  const topSelling = products.filter(
    (produto) => produto.categoria === "Top Sellings"
  );

  // Log para verificar se os produtos foram filtrados corretamente
  console.log("New Arrivals", newArrivals);
  console.log("Top Selling", topSelling);

  return (
    <>
      <Hero />
      <Brands />
      <main className="lg:mx-32">
        <div>
          <ProductGrid
            title="New Arrivals"
            produtos={newArrivals.slice(0, 4)}
          />
          <div className="flex justify-center pt-10 pb-16">
            <Link
              className="border-1 border-gray-300 py-3 px-26 font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
              to="/products/New Arrivals"
            >
              View All
            </Link>
          </div>
        </div>
        <div>
          <ProductGrid title="Top Selling" produtos={topSelling.slice(0, 4)} />
          <div className="flex justify-center pt-10 pb-16">
            <Link
              className="border-1 border-gray-300 py-3 px-26 font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
              to="/products/New Arrivals"
            >
              View All
            </Link>
          </div>
        </div>
      </main>
      <ByStyles />
      <Testimonials />
    </>
  );
}
