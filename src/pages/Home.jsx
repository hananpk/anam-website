import ArchitectureProcess from "../components/ArchitectureProcess";
import BlogSection from "../components/BlogSection";
import FinishingSolutions from "../components/FinishingSolutions";
import HeroSection from "../components/HeroSection";
import HorizontalGallery from "../components/HorizontalGallery";
import Layout from "../components/Layout";
import LogoSlider from "../components/LogoSlider";
import MasonryGallery from "../components/MasanoryGallery";
import ProductShowcaseSection from "../components/ProductShowCase";
import ServicesSection from "../components/ServicesSection";
import Spotlight from "../components/Spotlight";
import TailoredServices from "../components/TailoredServices";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Layout>
        <Spotlight />
        {/* <HeroSection /> */}
        <ServicesSection />
        <LogoSlider />
        <TailoredServices />
        {/* <FinishingSolutions /> */}
        <ProductShowcaseSection />
        <ArchitectureProcess />
        {/* <Testimonial /> */}
        {/* <BlogSection /> */}
        {/* <HorizontalGallery /> */}
        {/* <MasonryGallery /> */}
      </Layout>
    </>
  );
};

export default Home;
