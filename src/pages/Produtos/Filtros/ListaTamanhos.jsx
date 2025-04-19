import * as React from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import tamanhos from "../../../mocks/tamanhos.json";

export default function ListaTamanhos({ filtroTamanhos, setFiltroTamanhos }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleTamanhoChange = (tamanho) => {
    // Verifica se o tamanho já foi selecionado
    const isSelected = filtroTamanhos.includes(tamanho);

    // Atualiza o filtro de tamanhos
    if (isSelected) {
      setFiltroTamanhos(filtroTamanhos.filter((t) => t !== tamanho));
    } else {
      setFiltroTamanhos([...filtroTamanhos, tamanho]);
    }
  };

  return (
    <div className="w-full">
      {/* Botão de dropdown */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
      >
        <h3 className="font-semibold text-2xl">Size</h3>
        {isOpen ? (
          <LuChevronUp className="h-4 w-4 text-gray-600" />
        ) : (
          <LuChevronDown className="h-4 w-4 text-gray-600" />
        )}
      </button>

      {/* Dropdown visível apenas se isOpen for true */}
      {isOpen && (
        <div className="flex flex-wrap gap-4 mt-2">
          {tamanhos.map((tamanho) => {
            const isSelected = filtroTamanhos.includes(tamanho.tamanho);
            return (
              <p
                key={tamanho.id}
                onClick={() => handleTamanhoChange(tamanho.tamanho)}
                className={`px-3 py-2.5 rounded-full cursor-pointer ${
                  isSelected ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {tamanho.tamanho}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
