import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./pages/ProductDetails";
import OnSale from "./pages/OnSale";
import Produtos from "./pages/Produtos";
import Cart from "./pages/Cart";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarrinhoProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<Produtos />} />
              <Route path="/products/On Sale" element={<OnSale />} />
              <Route
                path="/products/:categoria/:tag/:descricao"
                element={<ProductDetails />}
              />
              <Route path="/products/:categoria" element={<Produtos />} />
              <Route path="/products/:tag" element={<Produtos />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CarrinhoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
