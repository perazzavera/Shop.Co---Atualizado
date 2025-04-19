import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { LuChevronDown } from "react-icons/lu";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

export default function SortBy({ setMobileFiltersOpen }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Sort by:
              <LuChevronDown
                className="-mr-1 ml-1 size-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5">
            <div className="py-1">
              {sortOptions.map((option) => (
                <MenuItem key={option.name}>
                  <a
                    href={option.href}
                    className={classNames(
                      option.current
                        ? "font-medium text-gray-900"
                        : "text-gray-500",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {option.name}
                  </a>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="-m-2 ml-4 p-2 text-gray-900 cinza rounded-full hover:text-gray-500 sm:ml-6 lg:hidden"
        >
          <span className="sr-only">Filters</span>
          <HiOutlineAdjustmentsVertical className="size-6" />
        </button>
      </div>
    </div>
  );
}
