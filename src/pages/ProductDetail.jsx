import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { productData } from "../data/productData";

const ProductDetail = () => {
  const { slug } = useParams();

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // Find the product by slug
  const product = productData
    .flatMap((category) => category.items)
    .find((item) => slugify(item.name) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product)
    return (
      <div className="py-40 text-center font-bold text-2xl">
        Product Not Found
      </div>
    );

  return (
    <Layout withBg>
      <main className="pt-10">
        {/* 1. Hero Header */}
        <section
          className="relative h-[40vh] flex items-center px-10 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage: `url(${product.heroImage || "https://plus.unsplash.com/premium_photo-1683129627035-e5a145c3d705?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase">
              {product.name}
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl text-lg font-medium">
              {product.description.split(".")[0]}.{" "}
              {/* Uses first sentence as tagline */}
            </p>
          </div>
        </section>

        {/* 2. Intro Content Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#b22a2a] font-bold uppercase tracking-widest text-sm">
                Product Overview
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6 mt-2">
                Premium {product.name} Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="border-t border-gray-100 pt-6 space-y-3">
                {product.thickness && (
                  <p className="text-sm">
                    <strong>Thickness:</strong> {product.thickness}
                  </p>
                )}
                {product.warranty && (
                  <p className="text-sm">
                    <strong>Warranty:</strong> {product.warranty}
                  </p>
                )}
                {product.wearLayer && (
                  <p className="text-sm">
                    <strong>Wear Layer:</strong> {product.wearLayer}
                  </p>
                )}
              </div>

              <button className="mt-8 bg-[#b22a2a] text-white px-10 py-4 font-bold hover:bg-black transition-colors uppercase text-sm tracking-widest shadow-lg">
                Request a Quote ↗
              </button>
            </div>

            <div className="relative">
              <img
                src={product.mainImage || "https://plus.unsplash.com/premium_photo-1683129627035-e5a145c3d705?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={product.name}
                className="shadow-2xl w-full h-[500px] object-cover border-8 border-white"
              />
            </div>
          </div>
        </section>

        {/* 3. Features & Benefits (Grid Style) */}
        <section className="bg-gray-50 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features List */}
              <div className="bg-white p-10 border-t-4 border-[#b22a2a] shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 uppercase tracking-tight">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-[#b22a2a] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits List */}
              <div className="bg-white p-10 border-t-4 border-black shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 uppercase tracking-tight">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-black shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Applications Section */}
        <section className="bg-[#b22a2a] py-16 px-6 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter">
                Ideal Applications
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-4 py-2 border border-white/20 text-sm font-bold uppercase tracking-widest"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/70 italic mb-2">
                Need professional advice?
              </p>
              <a
                href="https://wa.me/yournumber"
                className="text-2xl font-black underline hover:text-black transition-colors"
              >
                Speak to an Expert
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProductDetail;
