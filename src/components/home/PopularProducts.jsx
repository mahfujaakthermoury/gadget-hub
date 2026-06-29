"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import products from "@/data/products";

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

const PopularProducts = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl font-bold">
              Popular Products
            </h2>

            <p className="mt-2 text-slate-500">
              The highest-rated tech this week
            </p>
          </div>

          <Link
            href="/products"
            className="group hidden items-center gap-2 font-semibold text-blue-600 md:flex"
          >
            View All

            <ArrowRight
              className="transition group-hover:translate-x-1"
              size={18}
            />
          </Link>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition"
            >
              <div className="relative aspect-square overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {product.badge && (
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6">

                <p className="text-sm text-slate-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold transition group-hover:text-blue-600">
                  {product.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>

                  <button
                    className="
                    rounded-full

                    bg-blue-100

                    p-3

                    transition

                    hover:scale-110
                    hover:bg-blue-600
                    hover:text-white
                    active:scale-95
                    "
                  >
                    <ShoppingCart size={18} />
                  </button>

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProducts;