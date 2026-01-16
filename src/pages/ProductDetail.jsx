import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

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

  const product = productData
    .flatMap((category) => category.items)
    .find((item) => slugify(item.name) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product)
    return <div className="py-40 text-center">Product Not Found</div>;

  return (
    <Layout withBg>
      <main className="pt-10">
        {/* 1. Hero Header */}
        <section
          className="relative h-[40vh] flex items-center px-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase">
              {product.name}
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl text-lg font-medium">
              {product.tagline}
            </p>
          </div>
        </section>

        {/* 2. Intro Content Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                {product.introTitle}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {/* {product.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))} */}
                <p>{product.description}</p>
              </div>
              <button className="mt-8 bg-[#b22a2a] text-white px-10 py-4 rounded-md font-bold hover:bg-black transition-colors uppercase text-sm tracking-widest">
                Contact Us ↗
              </button>
            </div>
            <div className="relative group">
              <img
                src={product.mainImage}
                alt={product.name}
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. Why Choose Section (Red Background) */}
        <section className="bg-[#b22a2a] py-24 px-6 text-white text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold uppercase tracking-tighter mb-4">
              Why Choose {product.name}?
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-16 font-medium">
              {product.whyChooseText}
            </p>

            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Features Left */}
              <div className="space-y-16 text-right">
                {product.features.slice(0, 2).map((feat, i) => (
                  <div key={i}>
                    <h4 className="text-2xl font-black mb-2">{feat.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feature Image Center */}
              <div className="flex justify-center">
                <img
                  src={product.featureImage}
                  className="max-h-[400px] object-contain"
                  alt="Feature"
                />
              </div>

              {/* Features Right */}
              <div className="space-y-16 text-left">
                {product.features.slice(2, 4).map((feat, i) => (
                  <div key={i}>
                    <h4 className="text-2xl font-black mb-2">{feat.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProductDetail;
