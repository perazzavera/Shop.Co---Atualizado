import React from "react";
import { useLocation, Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Divide a URL em partes

  // Se a URL for "/Home" ou "/", não mostrar o breadcrumb
  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  return (
    <div className="breadcrumbs py-2 mx-4 border-t-1 border-gray-300 lg:mx-10">
      <ul className="flex items-center space-x-2 text-gray-700">
        <li>
          <Link to="/" className="text-gray-700">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          // Construa o caminho até o item atual
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={to}>
              <li className="breadcrumbs-separator">
                <LuChevronRight className="w-4 h-4 text-gray-500" />
              </li>
              <li>
                <Link to={to} className="text-gray-900 font-medium">
                  {value.charAt(0).toUpperCase() + value.slice(1)}{" "}
                  {/* Capitaliza o nome */}
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
