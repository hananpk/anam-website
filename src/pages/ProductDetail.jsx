import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { productData } from "../data/productData";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { slug } = useParams();
  const [activeSubproduct, setActiveSubproduct] = useState(null);

  const product = productData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSubproduct(null)
  }, [slug]);

  if (!product) {
    return (
      <div className="py-40 text-center font-bold text-2xl">
        Product Not Found
      </div>
    );
  }

  const data = activeSubproduct ? activeSubproduct : product;

  return (
    <Layout withBg>
      <main className="pt-10">
        {/* Hero Section */}
        <section
          className="relative h-[40vh] flex items-center px-10 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage: `url(${activeSubproduct?.image ||
              product.image ||
              "https://plus.unsplash.com/premium_photo-1683129627035-e5a145c3d705"
              })`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="z-10 max-w-7xl mx-auto w-full">
            {activeSubproduct && (
              <button
                onClick={() => setActiveSubproduct(null)}
                className="mb-6 text-sm font-bold text-[#ff443a] cursor-pointer"
              >
                ← Back to Categories
              </button>
            )}
            <h1 className="text-white text-5xl md:text-7xl font-bold ">
              {activeSubproduct ? activeSubproduct.name : product.name}
            </h1>
            <p className="text-white text-lg max-w-2xl mt-2">
              {activeSubproduct
                ? activeSubproduct.description
                : product.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* 🔙 Back Button */}

            <h2 className="text-4xl font-bold mb-10">
              {activeSubproduct
                ? `${activeSubproduct.name} Products`
                : "Product Categories"}
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data?.categories?.map((prod) => (
                <div
                  key={prod.slug}
                  onClick={() => prod.categories && !activeSubproduct && setActiveSubproduct(prod)}
                  className={`bg-white p-4 shadow-sm border border-gray-100 transition hover:shadow-lg ${!activeSubproduct ? "cursor-pointer" : ""
                    }`}
                >
                  <img
                    src={prod.image || "/placeholder.jpg"}
                    alt={prod.name}
                    className="w-full h-[250px] object-cover"
                  />

                  <h3 className="text-lg font-bold text-gray-900 mt-4">
                    {prod.name}
                  </h3>

                  {/* Specs only for final items */}
                  {activeSubproduct && (
                    <div className="space-y-2 mt-4 text-sm">
                      {prod.thickness && (
                        <p>
                          <strong>Thickness:</strong> {prod.thickness}
                        </p>
                      )}
                      {prod.warranty && (
                        <p>
                          <strong>Warranty:</strong> {prod.warranty}
                        </p>
                      )}
                      {prod.wearLayer && (
                        <p>
                          <strong>Wear Layer:</strong> {prod.wearLayer}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <button className="mt-10 bg-[#b22a2a] text-white px-10 py-4 font-bold hover:bg-black transition uppercase text-sm tracking-widest shadow-lg">
                Request a Quote ↗
              </button>
            </div>
          </div>
        </section>
        {data?.applications && (
          <section className="bg-[#b22a2a] py-16 px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-1/2">
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
                  className="text-xl font-bold bg-white py-2 px-4 inline-block mt-4 text-black hover:bg-black hover:text-white"
                >
                  Speak to an Expert
                </a>
              </div>
            </div>
          </section>
        )}
        {data.features && data.benefits && (
          <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Features List */}
                <div className="bg-white p-10 border-t-4 border-[#b22a2a] shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 uppercase tracking-tight">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {data.features.map((feat, i) => (
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
                    {data.benefits.map((benefit, i) => (
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
        )}
      </main>
    </Layout>
  );
};

export default ProductDetail;
