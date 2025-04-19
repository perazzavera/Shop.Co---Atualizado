import * as React from "react";
import { LuChevronDown, LuChevronUp, LuCheck } from "react-icons/lu";
import cores from "../../../mocks/cores.json";

export default function ListaCores({ filtroCor, setFiltroCor }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      {/* Botão de dropdown */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-2xl">Colors</h3>
        {isOpen ? (
          <LuChevronUp className="h-4 w-4 text-gray-600" />
        ) : (
          <LuChevronDown className="h-4 w-4 text-gray-600" />
        )}
      </button>

      {/* Lista de cores visível apenas se isOpen for true */}
      {isOpen && (
        <div className="flex flex-wrap gap-4 mt-2">
          {cores.map((cor) => {
            const isChecked = filtroCor.includes(cor.nome);
            return (
              <label key={cor.id} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="cor"
                  value={cor.nome}
                  className="hidden"
                  checked={isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFiltroCor([...filtroCor, cor.nome]);
                    } else {
                      setFiltroCor(filtroCor.filter((c) => c !== cor.nome));
                    }
                  }}
                  aria-checked={isChecked}
                />
                <span
                  className={`${cor.bgColor} border-2 border-gray-300 w-10 h-10 lg:w-8 lg:h-8 inline-block rounded-full cursor-pointer relative`}
                >
                  {isChecked && (
                    <LuCheck className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
