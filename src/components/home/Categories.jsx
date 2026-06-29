"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import categories from "@/data/categories";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-bold text-slate-900"
        >
          Shop by Category
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid h-auto grid-cols-1 gap-6 md:h-[500px] md:grid-cols-4 md:grid-rows-2"
        >
          {categories.map((category) => {
            let classes = "";

            if (category.size === "large")
              classes = "md:col-span-2 md:row-span-2";

            if (category.size === "wide") classes = "md:col-span-2";

            if (category.size === "small") classes = "md:col-span-1";

            return (
              <motion.div
                key={category.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl shadow-lg ${classes}`}
              >
                {/* Image */}

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}

                {category.size === "large" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                )}

                {category.size === "wide" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                )}

                {category.size === "small" && (
                  <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20" />
                )}

                {/* Content */}

                {category.size === "large" && (
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-bold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-white/80">
                      {category.description}
                    </p>

                    <button className="mt-5 rounded-full bg-white px-6 py-2 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
                      {category.button}
                    </button>
                  </div>
                )}

                {category.size === "wide" && (
                  <div className="absolute inset-0 flex flex-col justify-center px-8">
                    <h3 className="text-3xl font-bold text-white">
                      {category.title}
                    </h3>

                    <button className="mt-3 flex items-center gap-2 font-semibold text-white transition hover:gap-3">
                      {category.button}

                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                )}

                {category.size === "small" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-center text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}