import { LuMail } from "react-icons/lu";

export default function Contact() {
  return (
    <section className="mx-4 z-10 relative lg:mx-32 lg:pt-15">
      <div className="bg-black text-white px-4 py-6 rounded-3xl lg:flex items-center lg:px-12 ">
        <h2 className="titulo text-3xl flex-2/3 lg:text-5xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form className="relative w-full pt-6 flex-1/3">
          <LuMail className="absolute left-3 top-1/3 -translate-y-1/2 size-8 text-gray-400 pt-2" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 pl-12 rounded-full bg-white placeholder:text-gray-500 text-black"
          />
          <button className="bg-white text-black p-3 rounded-full w-full mt-3 hover:bg-gray-200 transition-colors duration-300">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
