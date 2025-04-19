import { useParams } from "react-router-dom";
import { LuMinus, LuPlus, LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import products from "../../mocks/produtos.json";
import RatingStars from "../Home/components/RatingStars";
import Colors from "./Colors";
import Size from "./Tamanhos";
import { useState } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import { ADD_PRODUTO } from "../../Reducers/carrinhoReducer";
import { useCarrinho } from "../../context/CarrinhoContext";
import toast from "react-hot-toast";
import ProductGrid from "../Home/components/ProductGrid";
import MenuFilled from "./MenuFilled";

// Função para formatar o slug
const formatarSlug = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export default function ProductDetails() {
  const { dispatch } = useCarrinho();
  const [contador, setContador] = useState(0);
  const [corSelecionada, setCorSelecionada] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const { categoria, tag, descricao } = useParams();

  console.log("Parâmetros da URL:", { categoria, tag, descricao });

  // Encontra o produto que corresponde aos parâmetros da URL
  const product = products.find((p) => {
    const categoriaProduto = formatarSlug(p.categoria);
    const tagProduto = formatarSlug(p.tag);
    const descricaoProduto = formatarSlug(p.descricao);

    const categoriaURL = formatarSlug(categoria);
    const tagURL = formatarSlug(tag);
    const descricaoURL = formatarSlug(descricao);

    return (
      categoriaProduto === categoriaURL &&
      tagProduto === tagURL &&
      descricaoProduto === descricaoURL
    );
  });

  if (!product) {
    return <div className="py-8 lg:mx-32">Produto não encontrado.</div>;
  }

  // Filtra os produtos relacionados (mesma categoria ou tag)
  const produtosRelacionados = products
    .filter(
      (p) =>
        (formatarSlug(p.categoria) === formatarSlug(product.categoria) ||
          formatarSlug(p.tag) === formatarSlug(product.tag)) &&
        p.id !== product.id // Evita mostrar o próprio produto
    )
    .slice(0, 4); // Limita a 4 produtos relacionados

  const adicionarAoCarrinho = () => {
    if (contador === 0 || !corSelecionada || !tamanhoSelecionado) {
      alert(
        "Selecione quantidade, cor e tamanho antes de adicionar ao carrinho."
      );
      return;
    }

    dispatch({
      type: ADD_PRODUTO,
      payload: {
        ...product,
        quantidade: contador,
        cor: corSelecionada,
        tamanho: tamanhoSelecionado,
      },
    });
    toast.success("Successfully added to cart!");
  };

  const formatarMoeda = (valor) => {
    return valor.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: false, // remove a vírgula de milhar
    });
  };

  return (
    <>
      <ScrollToTop />
      <div className="py-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex flex-wrap max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:mx-32 lg:px-0">
            <li>
              <div className="flex items-center">
                <Link to="/" className="mr-2 text-sm font-medium text-gray-500">
                  Home
                </Link>
                <LuChevronRight className="w-4 h-4 text-gray-900" />
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <Link
                  to={`/products/${categoria}`}
                  className="mr-2 text-sm font-medium text-gray-500"
                >
                  {categoria}
                </Link>
                <LuChevronRight className="w-4 h-4 text-gray-900" />
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <Link
                  to={`/products/${categoria}/${tag}`}
                  className="mr-2 text-sm font-medium text-gray-500"
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </Link>
                <LuChevronRight className="w-4 h-4 text-gray-900" />
              </div>
            </li>

            <li className="text-sm">
              <span className="font-medium text-gray-900">
                {product.descricao}
              </span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white lg:mx-32">
        <div className="mx-4 border-gray-300 mb-8 lg:grid lg:grid-cols-2 lg:mx-0">
          <div className="lg:flex lg:flex-row-reverse lg:gap-6">
            <div className="pb-3 lg:pb-0 lg:w-[100%] lg:pr-4">
              <img
                className="w-full h-auto object-cover rounded-2xl lg:h-full"
                src={product.imagem}
                alt={product.descricao}
              />
            </div>
            <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-col lg:w-[30%] lg:gap-6">
              <img
                className="rounded-2xl lg:h-full"
                src={product.imagem}
                alt={product.descricao}
              />
              <img
                className="rounded-2xl lg:h-full"
                src={product.imagem}
                alt={product.descricao}
              />
              <img
                className="rounded-2xl lg:h-full"
                src={product.imagem}
                alt={product.descricao}
              />
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-3xl titulo py-3 lg:text-4xl lg:pt-0">
                {product.descricao}
              </h2>
              <RatingStars rating={product.avaliacao} />
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-3xl">
                  {formatarMoeda(product.precoAtual)}
                </h4>
                {product.precoAntigo && (
                  <h4 className="line-through text-gray-500 text-3xl">
                    {formatarMoeda(product.precoAntigo)}
                  </h4>
                )}
                {product.valorDesconto && (
                  <h5 className="text-red-500 font-normal bg-red-500/20 text-xl py-1.5 px-2.5 rounded-3xl">
                    {product.valorDesconto}%
                  </h5>
                )}
              </div>
              <p className="text-gray-500 text-lg pt-3 pb-8 border-b-1 border-gray-300 mb-8 lg:mb-4 lg:pb-4 lg:pt-0">
                {product.apresentacao}
              </p>
            </div>

            <div className="mb-8 border-b-1 border-gray-300 pb-8 lg:pb-4 lg:mb-4">
              <h3 className="text-gray-500 text-xl pb-4">Select Colors</h3>
              <Colors
                cores={product.cores}
                setCorSelecionada={setCorSelecionada}
                corSelecionada={corSelecionada}
              />
            </div>

            <div className=" mb-8 border-b-1 border-gray-300 pb-8 flex-wrap lg:pb-4 lg:mb-4">
              <h3 className="text-gray-500 text-xl pb-4 lg:pb-2">
                Choose Size
              </h3>
              <Size
                tamanhoSelecionado={tamanhoSelecionado}
                tamanhos={product.tamanhos}
                setTamanhoSelecionado={setTamanhoSelecionado}
              />
            </div>

            <div className="flex gap-3">
              <div className="bg-gray-200 flex p-3 items-center justify-center max-w-fit rounded-full gap-4 min-w-30">
                <button onClick={() => setContador(Math.max(0, contador - 1))}>
                  <LuMinus className="h-6 w-6 cursor-pointer" />
                </button>
                <span>{contador}</span>
                <button onClick={() => setContador(contador + 1)}>
                  <LuPlus className="h-6 w-6 cursor-pointer" />
                </button>
              </div>
              <button
                onClick={adicionarAoCarrinho}
                className="py-3 px-6 w-full text-white text-lg font-semibold rounded-full bg-black hover:bg-gray-700 transition duration-300 cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <MenuFilled />
      {/* Exibição de produtos relacionados */}
      <section className="py-12 lg:mx-32">
        <ProductGrid
          title="You might also like"
          produtos={produtosRelacionados}
        />
      </section>
    </>
  );
}
