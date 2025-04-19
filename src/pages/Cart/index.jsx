import Breadcrumb from "../../components/Breadcrumb";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import ItemCarrinho from "./ItemCarrinho";
import Sumario from "./Sumario";

const Carrinho = () => {
  const { carrinho } = useCarrinhoContext();

  const product = {
    breadcrumbs: [{ id: 1, name: "Home", to: "/" }],
    tag: "Cart",
  };

  return (
    <>
      <Breadcrumb product={product} />

      <div className=" text-light p-4 flex-grow-1 lg:mx-32 lg:px-0">
        <h2 className="titulo text-4xl">YOUR CART</h2>
        <div className="lg:grid lg:grid-cols-2 gap-4">
          <ul className="border border-gray-300 rounded-2xl p-4 my-6 h-fit">
            {carrinho.length === 0 ? (
              <p className="text-center py-6 text-lg">
                Your cart is empty — let's fix that! 🛒
              </p>
            ) : (
              carrinho.map((item, index) => {
                const isLastItem = index === carrinho.length - 1;
                return (
                  <ItemCarrinho
                    key={item.id}
                    itemCarrinho={item}
                    isLastItem={isLastItem}
                  />
                );
              })
            )}
          </ul>
          <Sumario />
        </div>
      </div>
    </>
  );
};

export default Carrinho;
