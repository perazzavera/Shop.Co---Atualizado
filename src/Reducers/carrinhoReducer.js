export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";

const initialState = {
  produtos: [], // Inicia com um array vazio
};

export const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUTO:
      const produtoExistente = state.produtos.find(
        (produto) =>
          produto.id === action.payload.id &&
          produto.cor === action.payload.cor &&
          produto.tamanho === action.payload.tamanho
      );

      // Se o produto já estiver no carrinho, incrementamos a quantidade
      if (produtoExistente) {
        return {
          ...state,
          produtos: state.produtos.map((produto) =>
            produto.id === produtoExistente.id &&
            produto.cor === produtoExistente.cor &&
            produto.tamanho === produtoExistente.tamanho
              ? {
                  ...produto,
                  quantidade: produto.quantidade + action.payload.quantidade,
                }
              : produto
          ),
        };
      }

      // Se não estiver no carrinho, adicionamos o produto
      return {
        ...state,
        produtos: [...state.produtos, action.payload],
      };

    case REMOVE_PRODUTO:
      const produtoId = action.payload;
      return {
        ...state,
        produtos: state.produtos.filter((item) => item.id !== produtoId),
      };

    case UPDATE_QUANTIDADE:
      const { produtoId: id, quantidade } = action.payload;
      return {
        ...state,
        produtos: state.produtos.map((item) =>
          item.id === id ? { ...item, quantidade } : item
        ),
      };

    default:
      return state;
  }
};
