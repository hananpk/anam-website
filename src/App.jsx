import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import AboutSection from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>

      {/* whatsapp icon */}
      <a
        href="#"
        className="fixed -right-18 top-1/2 hover:bg-green-600  z-50 -rotate-90 flex items-center gap-3 bg-green-500  text-white px-8 h-12 text-sm tracking-widest"
      >
        <FaWhatsapp size={20} />
        <span className="hidden xl:inline">Whatsapp</span>
      </a>
    </BrowserRouter>
  );
}

export default App;
