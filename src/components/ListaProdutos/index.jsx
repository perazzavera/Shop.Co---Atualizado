import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import FiltrosDesktop from "../../pages/Produtos/Filtros/FiltrosDesktop";
import FiltrosMobile from "../../pages/Produtos/Filtros/FiltrosMobile";
import SortBy from "../../pages/Produtos/Filtros/SortBy";
import Produto from "../../pages/Produtos/Produto";
import Paginacao from "../../pages/Produtos/index";

export default function ListaProdutos({ produtos, categoria, tituloPagina }) {
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
    document.title = tituloPagina || "Produtos";
  }, [tituloPagina]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = produtos?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = produtos ? Math.ceil(produtos.length / itemsPerPage) : 0;

  const product = {
    breadcrumbs: [
      { id: 1, name: "Home", to: "/" },
      { id: 2, name: "Products", to: "/products" },
    ],
    tag: categoria || "Todos os Produtos",
  };

  return (
    <>
      <div className="pb-6">
        <Breadcrumb product={product} />
      </div>

      <div className="bg-white lg:mx-32">
        <div className="flex">
          <FiltrosDesktop />
          <FiltrosMobile
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          <main className="w-full lg:ps-10 px-4 lg:pe-0">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {categoria
                  ? categoria.charAt(0).toUpperCase() + categoria.slice(1)
                  : "Todos os Produtos"}
              </h2>
              <SortBy setMobileFiltersOpen={setMobileFiltersOpen} />
            </div>

            <section className="pb-10 w-full">
              <Produto currentItems={currentItems} />
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
