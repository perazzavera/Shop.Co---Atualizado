import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Rodape from "./components/Rodape";
import Contact from "./components/Contact";

export default function DefaultPage() {
  return (
    <section>
      <>
        <NavBar />
        <Outlet />
        <Contact />
        <Rodape />
      </>
    </section>
  );
}
