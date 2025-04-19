import { Link } from "react-router-dom";

export default function ByStyles() {
  return (
    <section className="mx-4 px-4 py-8 cinza rounded-3xl lg:mx-32">
      <h2 className="titulo text-4xl text-center mb-8">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex flex-col gap-4 items-center lg:flex-row flex-wrap lg:justify-center">
        <Link to="/products/casual">
          <img
            className="lg:hidden"
            src="/images/casual-mobile.svg"
            alt="casual style"
          />
          <img
            className="hidden lg:block"
            src="/images/casual.svg"
            alt="casual style"
          />
        </Link>
        <Link to="/products/formal">
          <img
            className="lg:hidden"
            src="/images/formal-mobile.svg"
            alt="formal style"
          />
          <img
            className="hidden lg:block"
            src="/images/formal.svg"
            alt="formal style"
          />
        </Link>
        <Link to="/products/party">
          <img
            className="lg:hidden"
            src="/images/festa-mobile.svg"
            alt="party style"
          />
          <img
            className="hidden lg:block"
            src="/images/festa.svg"
            alt="party style"
          />
        </Link>
        <Link to="/products/gym">
          <img
            className="lg:hidden"
            src="/images/fit-mobile.svg"
            alt="gym style"
          />
          <img
            className="hidden lg:block"
            src="/images/fit.svg"
            alt="gym style"
          />
        </Link>
      </div>
    </section>
  );
}
