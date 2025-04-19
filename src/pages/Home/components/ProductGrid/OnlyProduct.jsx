import { Link } from "react-router-dom";
import RatingStars from "../RatingStars";

const formatarMoeda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: false, // remove a vírgula de milhar
  });
};

export default function OnlyProduct({ produto }) {
  return (
    <Link
      to={`/products/${
        produto.categoria
      }/${produto.tag?.toLowerCase()}/${produto.descricao
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
      key={produto.id}
    >
      <img src={produto.imagem} alt={produto.descricao} className="mb-4" />
      <h3 className="font-semibold text-xl">{produto.descricao}</h3>
      <RatingStars rating={produto.avaliacao} />
      <div className="flex items-center gap-3">
        <h4 className="font-semibold text-xl">
          {formatarMoeda(produto.precoAtual)}
        </h4>
        {produto.precoAntigo && (
          <h4 className="line-through text-gray-500 text-xl">
            {formatarMoeda(produto.precoAntigo)}
          </h4>
        )}
        {produto.valorDesconto && (
          <h5 className="text-red-500 font-normal bg-red-500/20 text-xs py-1.5 px-2.5 rounded-3xl">
            {produto.valorDesconto}%
          </h5>
        )}
      </div>
    </Link>
  );
}
