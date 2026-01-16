import React from "react";
import { motion } from "framer-motion";

import { BLOGS } from "../data/blogs";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="blogs" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-gray-300 text-[10px] uppercase tracking-widest font-bold mb-6 text-gray-500"
          >
            • Straight From The Newsroom
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-tight text-gray-900"
          >
            Take A Look At <span className="text-[#b22a2a]">Our Latest</span>{" "}
            <br />
            <span className="text-[#b22a2a]">Blog</span> & Articles.
          </motion.h2>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {BLOGS.map((post) => (
            <motion.article
              key={post.slug}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#b22a2a] text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-1 text-sm font-bold uppercase tracking-tighter">
                    <span className="text-[#b22a2a]">{post.author}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#b22a2a] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed line-clamp-3 text-sm font-medium">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
