import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="bg-[#F2F0F1] py-8 px-4 lg:grid lg:grid-cols-2 items-center lg:px-32 lg:py-16 lg:bg-[url(/images/banner-her-desk.svg)] bg-no-repeat bg-cover bg-right">
        {/* COLUNA ESQUERDA - Texto */}
        <div className="text-left">
          <h2 className="titulo text-4xl text-black lg:text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="mt-3 text-sm text-gray-600 lg:text-lg lg:mt-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            to="/products"
            className="mt-4 text-center inline-block rounded-full bg-black px-8 py-3 text-sm font-normal text-white hover:bg-gray-900 transition w-full lg:w-auto lg:px-20 lg:mt-6"
          >
            Shop Now
          </Link>

          <div className="mt-8 lg:flex lg:items-center">
            <div className="flex justify-around">
              <span className="text-left">
                <h3 className="text-2xl font-bold lg:text-3xl">200+</h3>
                <p className="text-xs text-gray-600">International Brands</p>
              </span>
              <span className="text-left border-l border-gray-500 pl-10 lg:border-r-1 lg:pr-10 lg:mx-10 lg:border-gray-400">
                <h3 className="text-2xl font-bold lg:text-3xl">2,000+</h3>
                <p className="text-xs text-gray-600 ">High-Quality Products</p>
              </span>
            </div>
            <div className="flex justify-center mt-4 lg:mt-0">
              <span className="text-left">
                <h3 className="text-2xl font-bold lg:text-3xl">30,000+</h3>
                <p className="text-xs text-gray-600 ">Happy Customers</p>
              </span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA - Imagem */}
        <div className="relative hidden lg:block w-full h-[500px] ">
          <img
            className="absolute top-36 left-6 animate-pulse lg:top-50 lg:left-16"
            src="/images/estrela-menor.svg"
            alt="estrela"
          />
          <img
            className="absolute top-10 right-6 animate-pulse lg:top-5"
            src="/images/estrela-maior.svg"
            alt="estrela"
          />
        </div>
      </section>
      <div className="w-full relative lg:hidden">
        <img className="w-full" src="/images/banner-hero.png" alt=".." />
        <img
          className="absolute top-36 left-6 animate-pulse"
          src="/images/estrela-menor.svg"
          alt="estrela"
        />
        <img
          className="absolute top-10 right-6 animate-pulse"
          src="/images/estrela-maior.svg"
          alt="estrela"
        />
      </div>
    </>
  );
}
