export default function Size({
  tamanhos,
  setTamanhoSelecionado,
  tamanhoSelecionado,
}) {
  return (
    <div className="flex gap-4">
      {tamanhos.map((tamanho) => (
        <button
          onClick={() => setTamanhoSelecionado(tamanho.tamanho)} // Aqui passamos o tamanho
          key={tamanho.id}
          className={`px-3 py-2.5 rounded-full cursor-pointer transition-colors duration-150 ${
            tamanhoSelecionado === tamanho.tamanho // Comparando com o valor de tamanho
              ? "bg-black text-white"
              : "bg-gray-300 text-gray-black"
          }`}
        >
          {tamanho.tamanho} {/* Exibindo o tamanho */}
        </button>
      ))}
    </div>
  );
}
