import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";

export default function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Alterna entre aberto e fechado
  };

  const closeDropdown = () => {
    setIsOpen(false); // Fecha o menu
  };

  return (
    <div className="relative inline-flex">
      {/* Botão do Dropdown */}
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg bg-white text-gray-800  hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:bg-gray-50"
        aria-haspopup="menu"
        onClick={toggleDropdown} // Chama a função de toggle
      >
        Shop
        {/* Icone da setinha */}
        <LuChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          } size-4`}
        />
      </button>

      {/* Menu do Dropdown - Visível quando isOpen for true */}
      {isOpen && (
        <div
          className="absolute left-0 mt-12 min-w-40 bg-white shadow-md rounded-lg z-50"
          role="menu"
        >
          <div className="p-1 space-y-0.5">
            <Link
              to="/products/Casual"
              onClick={closeDropdown} // Fecha o dropdown ao clicar no link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
            >
              Casual
            </Link>
            <Link
              to="/products/Party"
              onClick={closeDropdown} // Fecha o dropdown ao clicar no link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
            >
              Party
            </Link>
            <Link
              to="/products/Formal"
              onClick={closeDropdown} // Fecha o dropdown ao clicar no link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
            >
              Formal
            </Link>
            <Link
              to="/products/Gym"
              onClick={closeDropdown} // Fecha o dropdown ao clicar no link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
            >
              Gym
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
