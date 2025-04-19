import { useEffect } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import depoimentos from "../../../../mocks/testimonials.json";
import RatingStars from "../RatingStars";

export default function Testimonials() {
  useEffect(() => {
    if (window?.HSCarousel?.init) {
      window.HSCarousel.init();
    }
  }, []);

  return (
    <section className="py-8 lg:mx-32">
      <h2 className="titulo text-4xl mx-4 lg:mx-0">OUR HAPPY CUSTOMERS</h2>

      {/* Slider */}
      <div
        data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "dotsItemClasses": "hs-carousel-active:bg-gray-300 hs-carousel-active:border-gray-500 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
          "isCentered": true,
          "slidesQty": {
            "xs": 1,
            "lg": 3
          }
        }'
        className="relative"
      >
        {/* Carousel Wrapper */}
        <div className="px-4 hs-carousel w-full overflow-hidden bg-white rounded-lg dark:bg-neutral-900">
          <div className="relative  min-h-70 lg:min-h-65 -mx-1 mb-8">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {depoimentos.map((depoimento, index) => (
                <div key={index} className="hs-carousel-slide px-1">
                  <div className="flex justify-center h-full p-6 dark:bg-neutral-900">
                    <div className="self-center border border-gray-400 p-4 rounded-2xl min-h-full max-w-md">
                      <div className="">
                        <RatingStars rating={depoimento.avaliacao} />
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-xl">
                            {depoimento.nome}
                          </h3>
                          <FaCircleCheck size={20} className="text-green-500" />
                        </div>
                        <p className="text-gray-500">{depoimento.depoimento}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão anterior */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-10 h-10 self-center text-black rounded-full hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Previous</span>
          <LuChevronLeft className="w-6 h-6" />
        </button>

        {/* Botão próximo */}
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-10 h-10 self-center text-black rounded-full hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <LuChevronRight className="w-6 h-6" />
        </button>

        {/* Dots de navegação */}
        <div className="hs-carousel-pagination justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
      </div>
      {/* End Slider */}
    </section>
  );
}
