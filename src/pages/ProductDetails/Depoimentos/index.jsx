import depoimentos from "../../../mocks/testimonials.json";
import RatingStars from "../../Home/components/RatingStars";
import { LuCircleCheck } from "react-icons/lu";

export default function Depoimentos() {
  const totalDepoimentos = depoimentos.length;
  return (
    <section className="pt-6 relative ">
      <div className="flex justify-between">
        <div className="flex items-center justify-between gap-2">
          <h2 className=" text-3xl font-semibold">All Reviews</h2>
          <h4 className="text-xl font-light pt-1">({totalDepoimentos})</h4>
        </div>
        <div>
          <button className="bg-black text-white p-3 rounded-full">
            Write a Review
          </button>
        </div>
      </div>
      <div className="py-8 container">
        <div className="relative w-full">
          <div className="space-y-4 lg:grid lg:grid-cols-2 gap-4 lg:space-y-0">
            {depoimentos.map((depoimento) => (
              <div
                key={depoimento.id}
                className=" w-full rounded-3xl p-4 border-1 border-gray-300"
              >
                <RatingStars rating={depoimento.avaliacao} />

                <h3 className="font-semibold text-xl flex items-center gap-2 mb-2">
                  {depoimento.nome}
                  <LuCircleCheck className="size-6 text-green-600" />
                </h3>
                <div className="flex items-center gap-3">
                  <p className="font-normal text-md text-gray-500">
                    "{depoimento.depoimento}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
