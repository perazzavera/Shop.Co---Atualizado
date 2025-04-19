import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import {
  REMOVE_PRODUTO,
  UPDATE_QUANTIDADE,
} from "../../../Reducers/carrinhoReducer";
import { useCarrinho } from "../../../context/CarrinhoContext";

export default function ItemCarrinho({ itemCarrinho, isLastItem }) {
  const [contador, setContador] = useState(itemCarrinho.quantidade || 0);
  const { dispatch } = useCarrinho();

  const handleRemove = () => {
    dispatch({
      type: REMOVE_PRODUTO,
      payload: itemCarrinho.id,
    });
  };

  useEffect(() => {
    // Atualiza a quantidade no carrinho apenas quando ela muda
    if (contador !== itemCarrinho.quantidade) {
      dispatch({
        type: UPDATE_QUANTIDADE,
        payload: { produtoId: itemCarrinho.id, quantidade: contador },
      });
    }
  }, [contador, dispatch, itemCarrinho.id, itemCarrinho.quantidade]);

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
    <li
      className={`${!isLastItem ? "border-b-1 border-gray-300 mb-4 pb-4" : ""}`} // Aplica borda se não for o último item
      key={itemCarrinho.id}
    >
      <div className="flex gap-4 items-center relative">
        <div className="w-40">
          <img
            className=""
            src={itemCarrinho.imagem}
            alt={
              itemCarrinho.descricao || `Imagem de ${itemCarrinho.descricao}`
            }
            onError={(e) => {
              console.error(
                "Imagem do carrinho não encontrada, usando original"
              );
              e.target.src = itemCarrinho.src; // Fallback para imagem original
            }}
          />
          <LuTrash2
            onClick={handleRemove}
            className="w-6 h-6 absolute top-0 -right-2 text-red-500 cursor-pointer"
          />
        </div>

        <div className="pe-4 lg:w-full">
          <h3 className="font-bold text-lg">{itemCarrinho.descricao}</h3>
          <div className="my-1">
            <p className="text-gray-500">Size: {itemCarrinho.tamanho}</p>
            <p className="text-gray-500">Color: {itemCarrinho.cor}</p>
          </div>

          <div className="flex gap-2 lg:justify-between items-center">
            <h3 className="font-bold text-2xl">
              {formatarMoeda(itemCarrinho.precoAtual)}
            </h3>
            <div className="bg-gray-200 flex items-center rounded-full py-2 px-3 gap-1">
              <button
                onClick={() => setContador(Math.max(0, contador - 1))}
                disabled={contador <= 0}
              >
                <LuMinus className="h-6 w-6 cursor-pointer" />
              </button>

              <span>{contador}</span>
              <button onClick={() => setContador(contador + 1)}>
                <LuPlus className="h-6 w-6 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
