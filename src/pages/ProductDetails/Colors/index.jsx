import { LuCheck } from "react-icons/lu";

export default function Colors({ cores, setCorSelecionada, corSelecionada }) {
  return (
    <div className="flex gap-4">
      {cores.map((cor, index) => (
        <label key={index} className="inline-flex items-center">
          <input type="radio" name="cor" value={cor.nome} className="hidden" />
          <button
            onClick={() => setCorSelecionada(cor.nome)} // Aqui passamos o objeto inteiro da cor
            className={`${
              cor.bgColor
            } w-12 h-12 inline-block rounded-full cursor-pointer lg:w-8 lg:h-8 ${
              corSelecionada === cor
                ? "ring-2 ring-gray-500"
                : "ring-1 ring-gray-300"
            }`}
          >
            {corSelecionada === cor.nome && (
              <LuCheck className="w-8 h-8 text-white mx-auto" />
            )}
          </button>
        </label>
      ))}
    </div>
  );
}
