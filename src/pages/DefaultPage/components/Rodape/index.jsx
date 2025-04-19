import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import links from "../../../../mocks/linksRodape.json";
import cartoes from "../../../../mocks/cartoes.json";

export default function Rodape() {
  return (
    <footer className="cinza px-4 pt-40 -mt-35 z-0 relative lg:-mt-23 lg:px-32">
      <div className="lg:flex lg:justify-around items-start">
        <div className="lg:w-2/5">
          <h2 className="titulo text-4xl">SHOP.CO</h2>
          <p className="text-gray-500 text-sm py-4 lg:text-lg lg:pe-10">
            We have clothes that suits your style and wich you're proud to wear.
            From women to men.
          </p>
          <nav className="flex gap-4">
            <a
              href="http://twitter.com"
              target="_blank"
              className="bg-white rounded-full p-3 border-1 border-gray-300 "
            >
              {" "}
              <FaTwitter size={25} />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              className="bg-black rounded-full p-3 "
            >
              {" "}
              <FaFacebookF size={25} color="white" />
            </a>

            <a
              href="http://instagram.com"
              target="_blank"
              className="bg-white rounded-full p-3 border-1 border-gray-300 "
            >
              {" "}
              <FaInstagram size={25} />
            </a>
            <a
              href="http://github.com"
              target="_blank"
              className="bg-white rounded-full p-3 border-1 border-gray-300 "
            >
              {" "}
              <FaGithub size={25} />
            </a>
          </nav>
        </div>
        <div className="grid grid-cols-2 py-5 gap-5 lg:grid-cols-4 lg:py-0">
          {links.map((grupo, index) => (
            <div key={index} className="">
              <h4 className="text-xl font-medium tracking-widest	">
                {grupo.titulo}
              </h4>
              <ul>
                {grupo.itens.map((item, idx) => (
                  <li className="text-gray-500 text-lg py-2" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-1 border-gray-300 lg:mt-5 lg:flex lg:items-center justify-between">
        <p className="text-gray-500 text-lg text-center py-5 flex items-center gap-2">
          Shop.co <FaRegCopyright /> 2000-2025, All Rights Reserved
        </p>
        <div className="flex justify-center pb-10 lg:pb-0">
          {cartoes.map((cartao) => (
            <img key={cartao.id} src={cartao.src} alt={cartao.alt} />
          ))}
        </div>
      </div>
    </footer>
  );
}
