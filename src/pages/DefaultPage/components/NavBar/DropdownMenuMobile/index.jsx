import { useState } from "react";
import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";

export default function ShopDropdownMobile() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado que controla a visibilidade do menu completo

  const handleLinkClick = () => {
    setMenuOpen(false); // Fecha o menu completo
  };

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)} // Alterna o menu completo
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font text-black hover:bg-gray-200 hover:text-black"
      >
        <span>Shop</span>
        <LuChevronDown
          className={`h-5 w-5 transform transition-transform duration-200 ${
            menuOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {menuOpen && (
        <div className="absolute left-0 mt-2 w-full space-y-1 border border-gray-300 shadow-lg rounded-md  bg-gray-50">
          <Link
            to="/products/Casual"
            onClick={handleLinkClick} // Fecha o menu completo ao clicar
            className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 transition-colors duration-300"
          >
            Casual
          </Link>
          <Link
            to="/products/Party"
            onClick={handleLinkClick} // Fecha o menu completo ao clicar
            className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 transition-colors duration-300"
          >
            Party
          </Link>
          <Link
            to="/products/Formal"
            onClick={handleLinkClick} // Fecha o menu completo ao clicar
            className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 transition-colors duration-300"
          >
            Formal
          </Link>
          <Link
            to="/products/Gym"
            onClick={handleLinkClick} // Fecha o menu completo ao clicar
            className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 transition-colors duration-300"
          >
            Gym
          </Link>
        </div>
      )}
    </div>
  );
}
