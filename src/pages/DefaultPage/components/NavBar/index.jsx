import { useState } from "react";
import {
  LuX,
  LuMenu,
  LuSearch,
  LuShoppingCart,
  LuCircleUserRound,
} from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import ShopDropdownMobile from "./DropdownMenuMobile";
import ShopDropdown from "./DropdownMenu";
import { useCarrinho } from "../../../../context/CarrinhoContext";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Shop", to: "/products", current: false },
  { name: "On Sale", to: "/products/On Sale", current: false },
  { name: "New Arrivals", to: "/products/New Arrivals", current: false },
  { name: "Brands", to: "/products/Brands", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { quantidade } = useCarrinho();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu mobile

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="bg-black text-white text-xs text-center font-light p-3 lg:text-md">
        <p>Sign up and get 20% off to your first order. Sign Up Now</p>
      </div>
      <nav className="bg-white lg:py-2 lg:mx-32 border-b-1 border-gray-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 lg:mx-0 lg:max-w-full">
          <div className="relative flex h-16 items-center justify-between lg:justify-start">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {menuOpen ? (
                  <LuX aria-hidden="true" className="block size-6" />
                ) : (
                  <LuMenu aria-hidden="true" className="block size-6" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex items-center mx-12 pb-1.5 lg:mx-0">
                <h1 className="titulo text-2xl lg:text-3xl">SHOP.CO</h1>
              </div>
              <div className="hidden sm:ml-6 sm:block my-auto">
                <div className="flex space-x-3 items-center">
                  {navigation.map((item) =>
                    item.name === "Shop" ? (
                      <ShopDropdown key={item.name} />
                    ) : (
                      <Link
                        key={item.name}
                        to={item.to}
                        aria-current={
                          location.pathname === item.to ? "page" : undefined
                        }
                        className={classNames(
                          location.pathname === item.to
                            ? "bg-gray-50 text-black py-3 px-4"
                            : "text-black hover:bg-red hover:bg-gray-50 transition-colors duration-300",
                          "rounded-lg px-4 py-3 text-sm font-normal"
                        )}
                        onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um link
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            <input
              type="search"
              placeholder="Search for products..."
              className="input flex-1 hidden lg:block bg-gray-100 p-2.5 rounded-full relative z-0 ps-10 bg-[url(/images/magnifying-glass.png)] bg-no-repeat bg-[10px_center] ms-3"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative p-1 text-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden lg:hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Search</span>
                <LuSearch aria-hidden="true" className="size-6" />
              </button>

              <Link
                to="/cart"
                type="button"
                className="relative p-1 text-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Shopping Cart</span>
                <LuShoppingCart aria-hidden="true" className="size-6" />
                {quantidade > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-tight">
                    {quantidade}
                  </span>
                )}
              </Link>

              <button
                type="button"
                className="relative p-1 text-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">User Profile</span>
                <LuCircleUserRound aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) =>
              item.name === "Shop" ? (
                <ShopDropdownMobile
                  key={item.name}
                  closeMenu={() => setMenuOpen(false)}
                /> // Passando a função para fechar o menu
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  aria-current={
                    location.pathname === item.to ? "page" : undefined
                  }
                  className={classNames(
                    location.pathname === item.to
                      ? "bg-gray-50 text-black"
                      : "text-black hover:bg-gray-50 hover:text-black",
                    "block rounded-md px-3 py-2 text-base"
                  )}
                  onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um link
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
}
