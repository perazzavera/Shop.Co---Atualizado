import React, { useMemo } from "react";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useCarrinho } from "../../../context/CarrinhoContext";

export default function Sumario() {
  const { carrinho } = useCarrinho();

  // Calcular subtotal, considerando a quantidade e o preço de cada produto
  const { subtotal, quantidadeTotal } = useMemo(() => {
    const result = carrinho.reduce(
      (acc, produto) => {
        acc.subtotal += produto.precoAtual * produto.quantidade; // Subtotal com base no preço e quantidade
        acc.quantidadeTotal += produto.quantidade; // Soma a quantidade total
        return acc;
      },
      { subtotal: 0, quantidadeTotal: 0 }
    );
    return result;
  }, [carrinho]); // Atualiza sempre que o carrinho mudar

  // Garantir que subtotal seja um número
  const total = isNaN(subtotal) ? 0 : parseFloat(subtotal);

  // Formatar o total como moeda
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
    <div className="border-1 border-gray-300 p-4 rounded-2xl">
      <h3 className="font-bold text-xl">Order Sumary</h3>
      <div className="flex justify-between text-lg py-2">
        <h4 className="text-gray-500">Subtotal</h4>
        <h4 className="font-bold">{formatarMoeda(total)}</h4>
      </div>
      <div className="flex justify-between text-lg py-2 border-b-1 border-gray-300 pb-4">
        <h4 className="text-gray-500">Delivery Fee</h4>
        <h4 className="font-bold">{formatarMoeda(15)}</h4>
      </div>
      <div className="flex mt-4 justify-between">
        <h4 className="text-gray-500 text-lg">Total</h4>
        {formatarMoeda(total + 15)} {/* Soma com a taxa de entrega */}
      </div>
      <div className="flex items-center justify-between py-4 lg:gap-4">
        <input
          placeholder="Add a promo code"
          type="text"
          className="bg-gray-200 py-3 rounded-full pl-12 bg-[url('/images/tag.png')] bg-no-repeat bg-position-[1rem] lg:w-full"
        />
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-full cursor-pointer"
        >
          Apply
        </button>
      </div>
      <div>
        <Link
          to="/checkout"
          className="flex items-center bg-black text-white p-3 rounded-full w-full justify-center gap-2"
        >
          Go to Checkout <LuArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
