import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { carrinhoReducer } from "../Reducers/carrinhoReducer";

// ✅ Criação correta do contexto
export const CarrinhoContext = createContext();

// COMPONENTE Provider
export const CarrinhoProvider = ({ children }) => {
  const estadoInicial = {
    produtos: [],
  };

  const [state, dispatch] = useReducer(carrinhoReducer, estadoInicial);
  const carrinho = state.produtos;

  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  }, [quantidadeTemp, totalTemp]);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        quantidade,
        valorTotal,
        dispatch,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook personalizado
export const useCarrinho = () => useContext(CarrinhoContext);
