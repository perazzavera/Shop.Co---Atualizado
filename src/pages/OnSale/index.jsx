import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../mocks/produtos.json";
import Breadcrumb from "../../components/Breadcrumb";
import FiltrosDesktop from "../Produtos/Filtros/FiltrosDesktop";
import FiltrosMobile from "../Produtos/Filtros/FiltrosMobile";
import SortBy from "../Produtos/Filtros/SortBy";
import Produto from "../Produtos/Produto";
import Paginacao from "../Produtos/Paginacao";

export default function OnSale() {
  const { categoria } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 9 : 6);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    document.title = categoria
      ? `${categoria.charAt(0).toUpperCase() + categoria.slice(1)} - Produtos`
      : "Promoções";
  }, [categoria]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const produtosFiltrados = products.filter(
    (product) => product.promocao === true
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = produtosFiltrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(produtosFiltrados.length / itemsPerPage);

  const product = {
    breadcrumbs: [
      { id: 1, name: "Home", to: "/" },
      { id: 2, name: "Products", to: "/products" },
    ],
    tag: "On sale",
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="pb-6">
        <Breadcrumb product={product} />
      </div>

      <div className="bg-white lg:mx-32">
        {/* FILTROS */}
        <div className="flex">
          <FiltrosDesktop />
          <FiltrosMobile
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          {/* Conteúdo principal */}
          <main className="w-full lg:ps-10 px-4 lg:pe-0">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                On Sale
              </h2>
              <SortBy setMobileFiltersOpen={setMobileFiltersOpen} />
            </div>

            {/* Produtos */}
            <section className="pb-10 w-full">
              <Produto currentItems={currentItems} />

              {/* Paginação */}
              <Paginacao
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
