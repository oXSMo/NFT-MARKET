import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Hero from "./pages/Hero";
import "swiper/css/bundle";
import BestSeller from "./pages/bestSeller/BestSeller";
import Products from "./pages/products/Products";
import { openModal } from "./store/useStore";
import ProductModal from "./pages/products/ProductModal";


function App() {
 

  return (
    <main className=" relative min-h-screen text-white">
      <img
        src="https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pattern.jpg?id=6678"
        className="absolute -z-10 pointer-events-none"
      />
      <BrowserRouter>
        <Navbar />
        <Hero />
        <BestSeller />
        <Products />
        <Routes>
          <Route path="" element={<></>} />
        </Routes>
      </BrowserRouter>
      <ProductModal />
    </main>
  );
}

export default App;
