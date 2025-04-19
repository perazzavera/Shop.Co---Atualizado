import { useState } from "react";
import { subCategories } from "../../mocks/filters.json";
import ListaCores from "./ListaCores";
import ListaTamanhos from "./components/ListaTamanhos";
import Price from "./components/Price";

export default function Filtros() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      {/* Filtros para DESKTOP */}
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
        <div className="mt-4">
          <Price />
        </div>
      </aside>

      {/* Filtros MOBILE */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="fixed bottom-0 right-0 flex h-[85vh] w-full flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl rounded-t-3xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-2xl font-bold text-black">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <form className="mt-4 border-t border-gray-200 mx-4">
              <ul role="list" className="py-3 font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <Link to={category.to} className="block py-3">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </form>
            <div className="mt-4 border-t border-gray-200 mx-4">
              <Price />
            </div>
            <div className="mt-4 border-t border-gray-200 mx-4">
              <ListaCores />
            </div>
            <div className="mt-4 border-t border-gray-200 mx-4">
              <ListaTamanhos />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
