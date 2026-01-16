import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import AboutSection from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/Contact";
import Gallery from "./pages/Gallery";

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
    </BrowserRouter>
  );
}

export default App;
