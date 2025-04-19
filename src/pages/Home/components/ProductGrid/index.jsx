import OnlyProduct from "./OnlyProduct";

function ProductGrid({ produtos, title }) {
  // Verifica se 'produtos' está definido e não está vazio
  if (!produtos || produtos.length === 0) {
    return <p>Não há produtos disponíveis.</p>;
  }

  return (
    <>
      <h2 className="text-3xl titulo text-center py-8 lg:text-5xl">{title}</h2>
      <div className="mx-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <OnlyProduct key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ProductGrid;
