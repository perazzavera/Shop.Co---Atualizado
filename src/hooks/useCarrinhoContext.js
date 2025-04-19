import { useContext } from "react";
import {
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  UPDATE_QUANTIDADE,
} from "../Reducers/carrinhoReducer";
import { CarrinhoContext } from "../context/CarrinhoContext";

// Ações para o carrinho
const addProdutoAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

const removerProdutoAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

const updateQuantidadeAction = (produtoId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: { produtoId, quantidade },
});

export const useCarrinhoContext = () => {
  const { carrinho, dispatch, quantidade, valorTotal } =
    useContext(CarrinhoContext);

  // Função para adicionar produto
  function adicionarProduto(novoProduto) {
    dispatch(addProdutoAction(novoProduto));
  }

  // Função para remover ou diminuir a quantidade do produto
  function removerProduto(id) {
    const produto = carrinho.find((item) => item.id === id);

    if (produto) {
      if (produto.quantidade > 1) {
        // Se o produto tiver mais de 1, apenas reduz a quantidade
        dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
      } else {
        // Se a quantidade for 1, remove o produto do carrinho
        dispatch(removerProdutoAction(id));
      }
    }
  }

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    valorTotal,
    quantidade,
  };
};
