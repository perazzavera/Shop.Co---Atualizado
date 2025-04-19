// src/Produtos/Produto.jsx
import ScrollToTop from "../../../components/ScrollToTop";
import OnlyProduct from "../../Home/components/ProductGrid/OnlyProduct";

export default function Produto({ currentItems }) {
  return (
    <>
      <ScrollToTop />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {currentItems.map((produto) => (
          <OnlyProduct produto={produto} />
        ))}
      </div>
    </>
  );
}
