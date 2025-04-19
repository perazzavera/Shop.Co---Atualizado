import { subCategories } from "../../../mocks/filters.json";
import { Link } from "react-router-dom";
import Price from "./Price";
import ListaTamanhos from "./ListaTamanhos";
import ListaCores from "./ListaCores";

export default function FiltrosDesktop({
  filtroCor,
  setFiltroCor,
  filtroTamanhos,
  setFiltroTamanhos,
  filtroPreco,
  setFiltroPreco,
}) {
  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 bg-white px-4 py-6 lg:ps-0">
      <div>
        <h2 className="text-2xl font-bold text-black mb-4">Filters</h2>
        <ul
          role="list"
          className="font-medium text-gray-900 border-t-1 border-b-1 border-gray-300 py-4"
        >
          {subCategories.map((category) => (
            <li key={category.name}>
              <Link to={category.to} className="block py-2">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <Price filtroPreco={filtroPreco} setFiltroPreco={setFiltroPreco} />
      </div>
      <div className="mt-4 border-t border-gray-200 ">
        <ListaCores filtroCor={filtroCor} setFiltroCor={setFiltroCor} />
      </div>
      <div className="mt-4 border-t border-gray-200 ">
        <ListaTamanhos
          filtroTamanhos={filtroTamanhos}
          setFiltroTamanhos={setFiltroTamanhos}
        />
      </div>
    </aside>
  );
}
