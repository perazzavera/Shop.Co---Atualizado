import { useState, useEffect } from "react";
import products from "../../mocks/produtos.json";
import { useParams } from "react-router-dom";
import FiltrosDesktop from "./Filtros/FiltrosDesktop";
import FiltrosMobile from "./Filtros/FiltrosMobile";
import SortBy from "./Filtros/SortBy";
import Produto from "./Produto";
import Paginacao from "./Paginacao";
import Breadcrumb from "../../components/Breadcrumb";

export default function Produtos() {
  const { categoria } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filtroCor, setFiltroCor] = useState([]);
  const [filtroPreco, setFiltroPreco] = useState({ min: 50, max: 300 });
  const [filtroTamanhos, setFiltroTamanhos] = useState([]);

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
      : "Todos os Produtos";
  }, [categoria]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const produtosFiltrados = categoria
    ? products.filter(
        (produto) =>
          produto.categoria?.toLowerCase() === categoria.toLowerCase() ||
          produto.tag?.toLowerCase() === categoria.toLowerCase()
      )
    : products;

  // Filtros adicionais
  const produtosComFiltrosAplicados = produtosFiltrados.filter((produto) => {
    const correspondeCor =
      filtroCor.length === 0 ||
      produto.cores?.some((cor) => filtroCor.includes(cor.nome));

    const correspondeTamanho =
      filtroTamanhos.length === 0 ||
      produto.tamanhos?.some((t) => filtroTamanhos.includes(t.tamanho));

    const correspondePreco =
      (!filtroPreco.min && !filtroPreco.max) ||
      (produto.precoAtual >= (filtroPreco.min || 0) &&
        produto.precoAtual <= (filtroPreco.max || Infinity));

    return correspondeCor && correspondeTamanho && correspondePreco;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = produtosComFiltrosAplicados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(
    produtosComFiltrosAplicados.length / itemsPerPage
  );

  const product = {
    breadcrumbs: [
      { id: 1, name: "Home", to: "/" },
      { id: 2, name: "Products", to: "/products" },
    ],
    tag: categoria || "All Products",
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
          <FiltrosDesktop
            filtroCor={filtroCor}
            setFiltroCor={setFiltroCor}
            filtroPreco={filtroPreco}
            setFiltroPreco={setFiltroPreco}
            filtroTamanhos={filtroTamanhos}
            setFiltroTamanhos={setFiltroTamanhos}
          />
          <FiltrosMobile
            filtroCor={filtroCor}
            setFiltroCor={setFiltroCor}
            filtroPreco={filtroPreco}
            setFiltroPreco={setFiltroPreco}
            filtroTamanhos={filtroTamanhos}
            setFiltroTamanhos={setFiltroTamanhos}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />
          {/* Conteúdo principal */}
          <main className="w-full lg:ps-10 px-4 lg:pe-0">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                {categoria
                  ? categoria.charAt(0).toUpperCase() + categoria.slice(1)
                  : "Todos os Produtos"}
              </h2>
              <SortBy setMobileFiltersOpen={setMobileFiltersOpen} />
            </div>

            {/* Produtos */}
            <section className="pb-10 w-full">
              {currentItems.length === 0 ? (
                <p>"Oops! No items available here right now."</p>
              ) : (
                <>
                  <Produto currentItems={currentItems} />
                  {/* Paginação */}
                  <Paginacao
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                  />
                </>
              )}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
